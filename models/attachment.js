const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const attachmentSchema = new Schema({
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
  file_name: {
    type: String,
  },
  file_path: {
    type: String,
  },
  size: {
    type: Number,
  },
  type: {
    type: String,
  },
  layer_id: {
    type: Schema.Types.ObjectId,
    ref: "Layer",
    required: [true, "layer ID cannot be empty"],
  },
  business_entity: [
    {
      type: Schema.Types.ObjectId,
      ref: "BusinessEntity",
    },
  ],
});

//add a middle ware to delete the related file after an attachment has been deleted

module.exports = model("Attachment", attachmentSchema);
