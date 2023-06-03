const mongoose = require("mongoose");

// schema
const todoListSchema = mongoose.Schema({
  task: {
    type: String,
    require: true,
  },

  description: {
    type: String,
    require: true,
  },
});
//model
const task= mongoose.model("task", todoListSchema);

module.exports = task;
