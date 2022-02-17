const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const referenceValueSchema = new Schema({
  REF_MODULE: String,
  REF_CATEGORY: String,
  REF_KEY: String,
  REF_VALUE: String,
  SEQ_NUM: Number,
});

module.exports = model("ReferenceValue", referenceValueSchema);
