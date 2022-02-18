const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const AppError = require("../../utils/appError");
const catchAsync = require("../../utils/catchAsync");
const User = require("../../models/users");

module.exports.loginUser = catchAsync(async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password)
    return next(new AppError("username or password not given", 401));

  const user = await User.findOne({ user_name: username });
  if (!user) return next(new AppError("User not found", 404));

  const match = await bcrypt.compare(password, user.password);
  if (!match) return next(new AppError("Invalid Credentials", 403));

  req.userID = user._id;

  const token = jwt.sign({ _id: user._id }, process.env.JSON_PRIVATE_KEY, {
    algorithm: "HS512",
    expiresIn: 5 * 24 * 60 * 60, //jwt expires in 5 days
  });

  res.cookie("Authorization", `Bearer ${token}`, {
    httpOnly: true,
    maxAge: 5 * 24 * 60 * 60 * 1000,
  });

  const data = await User.findById(user._id).select("-password -_id");

  res.status(200).json({
    status: "success",
    reqTime: req.requestTime,
    data,
  });
});
