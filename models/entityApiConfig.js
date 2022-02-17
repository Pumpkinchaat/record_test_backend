const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const entityApiConfigSchema = new Schema({
  endpoint: {
    type: String,
    required: [true, "Endpoint is required"],
  },
  entity_id: {
    type: Number,
    required: [true, "Entity ID is required"],
  },
  accept_header: String,
  content_type: String,
  http_method: String,
  active: {
    type: Number,
    enum: [1, 0],
  },
});

module.exports = model("EntityApiConfig", entityApiConfigSchema);
