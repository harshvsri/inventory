const mongoose = require("mongoose");

const machineSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
  price: {
    type: Number,
    required: true,
  },
  quantityInStock: {
    type: Number,
    default: 0,
  },
});

const Machine = mongoose.model("Machine", machineSchema);

module.exports = Machine;
