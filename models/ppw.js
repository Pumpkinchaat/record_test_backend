const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ppwSchema = new Schema({
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
  num_of_installments: {
    type: Number,
    validate: [
      function (v) {
        return v % 2 === 0;
      },
      "The number of installments should be a whole number",
    ],
  },
  layer_id: {
    type: Schema.Types.ObjectId,
    ref: "Layer",
  },
  entity_id: [
    {
      type: Schema.Types.ObjectId,
      ref: "BusinessEntity",
    },
  ],
});

module.exports = model("Ppw", ppwSchema);
