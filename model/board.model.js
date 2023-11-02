const mongoose = require("mongoose");

const boardSchema = mongoose.Schema({
  name: { type: String, required: true },
  tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
});

const BoardModel = mongoose.model("board", boardSchema);

module.exports = { BoardModel };
