const task = require("../models/taskModel");

// function to add new task
module.exports.addTask = async (req, res) => {
  // console.log("task created");

  const data = task.create({
    task:
  });
  res.status(201).json(data);
};



