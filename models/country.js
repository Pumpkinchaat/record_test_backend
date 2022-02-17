const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const countrySchema = new Schema({
  code: {
    type: String,
    required: [true, "Country Code is required"],
  },
  name: {
    type: String,
    required: [true, "Country Name is required"],
  },
});

module.exports = model("Country", countrySchema);
