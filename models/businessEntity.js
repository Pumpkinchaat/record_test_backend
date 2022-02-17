const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const BusinessEntitySchema = new Schema({
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
  country: String,
  email_id: String,
  entity_group_id: Number,
  legal_entity_name: String,
  lob_id: Number,
  short_name: {
    type: String,
    required: [true, "Short Name cannot be empty"],
  },
  status: String,
  type: {
    type: String,
    required: [true, "Type cannot be empty"],
  },
  api_url: String,
  attachment: [
    {
      type: Schema.Types.ObjectId,
      ref: "Attachment",
    },
  ],
  param: [
    {
      type: Schema.Types.ObjectId,
      ref: "ParamField",
    },
  ],
  ppw_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "Ppw",
    },
  ],
});

module.exports = model("BusinessEntity", BusinessEntitySchema);
