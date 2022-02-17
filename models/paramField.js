const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const paramFieldSchema = new Schema({
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
  data_type: String,
  field_key: {
    type: String,
    required: [true, "Field Key is required"],
  },
  field_type: String,
  field_value: String,
  is_sent: {
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  layer_id: {
    type: Schema.Types.ObjectId,
    ref: "Layer",
    required: [true, "Layer ID is required"],
  },
});

module.exports = model("ParamField", paramFieldSchema);
