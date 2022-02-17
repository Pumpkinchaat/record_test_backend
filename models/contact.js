const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const contactSchema = new Schema({
  contact_type: {
    type: String,
    required: [true, "Contact Type cannot be empty"],
  },
  contact_value: {
    type: String,
    required: [true, "Contact Value cannot be empty"],
  },
  status: {
    type: String,
    required: [true, "Status cannot be empty"],
  },
  user_id: {
    type: Number,
    required: [true, "User ID cannot be empty"],
  },
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
});

module.exports = model("Contact", contactSchema);
