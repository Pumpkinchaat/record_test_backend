const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const systemParameterSchema = new Schema({
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
  param_code: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  param_val: {
    type: String,
    required: true,
  },
});

module.exports = model("SystemParameter", systemParameterSchema);
