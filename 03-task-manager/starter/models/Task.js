const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  completed: Boolean,
});

module.exports = mongoose.model("Task", TaskSchema);
