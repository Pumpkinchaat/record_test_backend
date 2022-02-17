const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const layerSchema = new Schema({
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
  layer_name: String,
  risk_id: {
    type: Schema.Types.ObjectId,
    ref: "Risk",
  },
});

module.exports = model("Layer", layerSchema);
