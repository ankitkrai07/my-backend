const mongoose = require("mongoose");

const SubtaskSchema = mongoose.Schema({
  title: { type: String, required: true },
  isCompleted: { type: Boolean, default: false },
  ParentID:{type:String, required:true}
});

const SubTaskModel = mongoose.model("subtask", SubtaskSchema);

module.exports = { SubTaskModel };
