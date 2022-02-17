const mongoose = require("mongoose");
const { Schema, model } = mongoose;

//!!add the group ID , org ID here

const userSchema = new Schema({
  group_id: {},
  org_ig: {},
  password: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  user_name: {
    type: String,
    required: true,
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
  role_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "Role",
    },
  ],
});

module.exports = model("User", userSchema);
