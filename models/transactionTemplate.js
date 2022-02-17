const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const transactionTemplateSchema = new Schema({
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
  template_id: {
    type: Schema.Types.ObjectId,
    ref: "Template",
  },
});

module.exports = model("TransactionTemplate", transactionTemplateSchema);
