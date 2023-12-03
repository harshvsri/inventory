const express = require("express");
const router = express.Router();
const Machine = require("../models/machine.model");
const Category = require("../models/category.model");

router.get("/", async (req, res) => {
  const machines = await Machine.find({}).populate("category");
  res.status(200).json(machines);
});

router.post("/add", async (req, res) => {
  const { name, description, category, price, quantityInStock } = req.body;
  const machineCategory = await Category.findOne({ name: category });
  console.log(machineCategory);
  const machine = await Machine.create({
    name,
    description,
    category: machineCategory._id,
    price,
    quantityInStock,
  });
  machineCategory.machines.push(machine._id);
  await machineCategory.save();
  console.log(machine);
  res.status(201).json("Machine added successfully");
});

module.exports = router;
