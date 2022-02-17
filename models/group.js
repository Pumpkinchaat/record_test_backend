const mongoose = require("mongoose");
const { Schema, model } = mongoos;

const groupSchema = new Schema({
  group_name: {
    type: String,
    required: [true, "Group Name is required"],
  },
  role_id: {
    type: Number,
    required: [true, "Role ID is required"],
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

module.exports = model("Group", groupSchema);
