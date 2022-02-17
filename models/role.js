const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const roleSchema = new Schema({
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
  role_name: {
    type: String,
    required: true,
  },
  user_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

module.exports = model("Role", roleSchema);
