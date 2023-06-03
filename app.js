const express = require("express");
const app = express();
const PORT = 4400;

app.listen(PORT, (err) => {
  if (err) {
    console.log("error");
  } else {
    console.log(`server is running on port ${PORT}`);
  }
});
