const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, enum: ["Todo", "Doing", "Done"], default: "Todo" },
  subtask: [{ type: String, ref: "Subtask" }],
});

const TaskModel = mongoose.model("task", TaskSchema);

module.exports = { TaskModel };
