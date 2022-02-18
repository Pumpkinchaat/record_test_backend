const jwt = require("jsonwebtoken");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

module.exports.authenticate = (Model) =>
  catchAsync(async (req, res, next) => {
    const token = req.cookies.Authorization.split(" ")[1];
    if (!token)
      return next(new AppError("Authtoken invalid/not provided", 400));

    const userID = jwt.verify(token, process.env.JSON_PRIVATE_KEY)["_id"];
    if (!userID) return next(new AppError("Invalid AuthToken", 400));

    const user = await Model.findById(userID).select("_id");
    if (!user) return next(new AppError("User not found", 404));

    req.userID = user._id;
    next();
  });
