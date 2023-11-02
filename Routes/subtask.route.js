const express = require("express");
const { SubtaskModel } = require("../model/subtask.model");

const subRouter = express.Router();

subRouter.post("/", async (req, res) => {
  const subtask = new SubtaskModel({
    title: req.body.title,
    ParentID: req.body.ParentID,
  });
  await subtask.save();
  res.send(subtask);
});

subRouter.get("/:id", async (req, res) => {
  try {
    const subtasks = await SubtaskModel.find({ ParentID: req.params.id });
    res.send(subtasks);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

subRouter.patch("/:id", async (req, res) => {
  try {
    await SubtaskModel.findByIdAndUpdate(req.params.id, req.body);
    res.send({ message: "Updated Subtask" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

subRouter.delete("/:id", async (req, res) => {
  try {
    await SubtaskModel.findByIdAndDelete(req.params.id);
    res.send({ message: "Deleted Subtask" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = { subRouter };
