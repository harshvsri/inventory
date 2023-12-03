const express = require("express");
const router = express.Router();
const Category = require("../models/category.model");

router.get("/", async (req, res) => {
  const categories = await Category.find({}).populate("machines");
  res.status(200).json(categories);
});

router.post("/add", async (req, res) => {
  res.status(403).json({
    error: "Cannot proceed with your request",
    message: "All categories must be added through the admin panel",
  });
  return;

  // This code will not be executed
  const { name, description } = req.body;
  const category = await Category.create({ name, description });
  console.log(category);
  res.status(201).json("Category added successfully");
});

module.exports = router;
