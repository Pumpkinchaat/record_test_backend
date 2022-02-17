const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const outboxSchema = new Schema({
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
  layer_id: Number,
  message: String,
  message_datetime: Date,
  receiver_email: String,
  receiver_id: Number,
  receiver_name: String,
  risk_id: Number,
  status: String,
  json_data: String,
});

module.exports = model("Outbox", outboxSchema);
