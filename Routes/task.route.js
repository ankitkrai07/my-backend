const express = require("express");
const { TaskModel } = require("../model/task.model");

const taskRouter = express.Router();

taskRouter.get("/", async (req, res) => {
  try {
    const tasks = await TaskModel.find();
    res.send(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

taskRouter.get("/:id", async (req, res) => {
  try {
    const tasks = await TaskModel.find({ ParentID: req.params.id });
    res.send(tasks);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

taskRouter.post("/", async (req, res) => {
  const task = new TaskModel({
    title: req.body.title,
    description: req.body.description,
    status: req.body.status,
    ParentID: req.body.ParentID,
  });
  try {
    const newTask = await task.save();
    res.status(201).send(newTask);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

taskRouter.patch("/:id", async (req, res) => {
  try {
    await TaskModel.findByIdAndUpdate(req.params.id, req.body);
    res.send({ message: "Updated Successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

taskRouter.delete("/:id", async (req, res) => {
  try {
    await TaskModel.findByIdAndDelete(req.params.id);
    res.send({ message: "Deleted Successfully" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = { taskRouter };
