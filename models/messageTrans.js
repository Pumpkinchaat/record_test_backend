const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const messageTransSchema = new Schema({
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
  message_type: String,
  origin_message_id: String,
  risk_id: Number,
  sender_entity_id: Number,
  sender_name: String,
  status: String,
});

module.exports = model("MessageTrans", messageTransSchema);
