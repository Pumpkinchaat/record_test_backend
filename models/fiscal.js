const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const fiscalSchema = new Schema({
  country: {
    type: String,
    required: [true, "Country is required"],
  },
  end_date: {
    type: Date,
    required: [true, "End Date is required"],
  },
  fiscal_year: {
    type: Number,
    required: [true, "Fiscal Year is required"],
  },
  start_date: {
    type: Date,
    required: [true, "Start Date is required"],
  },
});

module.exports = model("Fiscal", fiscalSchema);
