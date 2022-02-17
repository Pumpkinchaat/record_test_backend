const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const organizationSchema = new Schema({
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
  address: {
    type: String,
    required: [true, "address is required"],
  },
  email_id: {
    type: String,
    required: [true, "Email ID is required"],
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  phone_number: {
    type: String,
    required: [true, "Phone Number is required"],
  },
  type: {
    type: String,
    required: [true, "Type is not required"],
  },
});

module.exports = model("Organization", organizationSchema);
