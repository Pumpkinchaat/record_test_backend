const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const riskSchema = new Schema({
  created_by: {
    type: String,
  },
  created_date: {
    type: Date,
  },
  last_op_ind: {
    type: String,
  },
  last_op_by: {
    type: String,
  },
  updated_date: {
    type: Date,
  },
  form: {
    type: String,
    required: true,
  },
  lob: {
    type: String,
    required: true,
  },
  name: { type: String, required: true },
  policy_end_date: {
    type: Date,
    required: true,
  },
  policy_inception_date: {
    type: Date,
    required: true,
  },
  risk_id: {
    type: String,
    required: true,
  },
  uw_year: {
    type: String,
    required: true,
  },
});

module.exports = model("Risk", riskSchema);
