const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const templateSchema = new Schema({
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
  description: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
});

module.exports = model("Template", templateSchema);
