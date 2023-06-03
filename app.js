const express = require("express");
const app = express();
const PORT = 4400;

// Require dbConnection
const { connectToMongoDb } = require("./config/dbConnection");
// database connection
connectToMongoDb("mongodb://127.0.0.1:27017/TodoAPP_NODEJS")
  .then(() => {
    console.log("database is connected");
  })
  .catch((err) => {
    console.log("database is not connected");
  });

app.listen(PORT, (err) => {
  if (err) {
    console.log("error");
  } else {
    console.log(`server is running on port ${PORT}`);
  }
});
