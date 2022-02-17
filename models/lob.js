const mongoose = require("mongoose");

const lobSchema = new mongoose.Schema({
  code: {
    type: String,
    required: [true, "Code is required"],
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
});

module.exports = mongoose.model("Lob", lobSchema);
