const mongoose = require("mongoose");

const SubtaskSchema = mongoose.Schema({
  title: { type: String, required: true },
  isCompleted: { type: Boolean, default: false },
});

const SubTaskModel = mongoose.model("Subtask", SubtaskSchema);

module.exports = { SubTaskModel };
