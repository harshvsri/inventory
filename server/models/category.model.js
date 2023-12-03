const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  machines: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Machine",
    },
  ],
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
