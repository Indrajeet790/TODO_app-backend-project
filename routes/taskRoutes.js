const express = require("express");
const router = express.Router();
const taskController = require("../controller/taskController");

// Endpoints
router.post("/",taskController.addTask)
// router.post("/delete", homeController.removeItems);
// router.post("/addTask", homeController.addItem);

module.exports = router;
