const catchAsync = require("../../utils/catchAsync");
const Risk = require("../../models/risk");
const AppError = require("../../utils/appError");
const Lob = require("../../models/lob");

module.exports.createRisk = catchAsync(async (req, res, next) => {
  const lobs = (await Lob.find({})).map((obj) => {
    return obj.code;
  });

  const { riskName, form, policyInceptionDate, policyExpiryDate, lob, uwYear } =
    req.body;

  if (!riskName || !policyExpiryDate || !policyInceptionDate || !lob || !uwYear)
    return next(new AppError("One or multiple mandatory field missing", 400));

  if (riskName.length > 50)
    return next(new AppError("Risk Name Length should be less than 50", 400));

  if (form.length > 50)
    return next(new AppError("Form Name Length should be less than 50", 400));

  if (new Date(policyExpiryDate) < new Date(Date.now()))
    return next(
      new AppError("Policy Expiry Date should not be a past date", 400)
    );

  if (lobs.indexOf(lob) === -1)
    return next(new AppError("Invalid Line of Business", 400));

  const created_by = req.userID;
  const created_date = new Date(Date.now());
  const last_op_ind = "I";
  const last_op_by = req.userID;
  const updated_date = new Date(Date.now());
  const risk_id_num = (await Risk.countDocuments()) + 1;
  const risk_id = `${lob}_${new Date(
    policyInceptionDate
  ).getFullYear()}_${risk_id_num}`;

  const newRisk = new Risk({
    created_by,
    created_date,
    last_op_by,
    last_op_ind,
    updated_date,
    form,
    lob,
    name: riskName,
    policy_end_date: new Date(policyExpiryDate),
    policy_inception_date: new Date(policyInceptionDate),
    risk_id,
    uw_year: new Date(uwYear),
  });

  await newRisk.save();

  res.status(201).json({
    status: "success",
    reqTime: req.requestTime,
    data: { newRisk },
  });
});