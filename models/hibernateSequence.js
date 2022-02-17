const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const hibernateSequenceSchema = new Schema({
  next_val: Number,
});

module.exports = model("HibernateSequence", hibernateSequenceSchema);
