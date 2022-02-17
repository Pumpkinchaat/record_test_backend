const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const inboxSchema = new Schema({
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
  message: String,
  message_datetime: Date,
  risk_id: Number,
  sender_email: String,
  sender_id: Number,
  sender_name: String,
  status: String,
  layer_id: Number,
});

module.exports = model("Inbox", inboxSchema);
