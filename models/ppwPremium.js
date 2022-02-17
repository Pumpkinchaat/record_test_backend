const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ppwPremiumSchema = new Schema({
  amount: {
    type: Number,
    required: [true, "Amount is required"],
  },
  installment_num: {
    type: Number,
    required: [true, "Installment Number is required"],
  },
  adjusted_premium: {
    type: Number,
    enum: [0, 1],
    required: [true, "Adjusted Premium is required"],
  },
  percentage: {
    type: Number,
    required: [true, "Percentage is required"],
  },
  premium_date: {
    type: Date,
    required: [true, "Premium Date is required"],
  },
  ppw_id: {
    type: Schema.Types.ObjectId,
    ref: "Ppw",
  },
});

module.exports = model("PpwPremium", ppwPremiumSchema);
