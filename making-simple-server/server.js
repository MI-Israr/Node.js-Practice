// // const express = require("express");
// import express from "express";

// const app = express();
// const PORT = 3000;
// app.use(express.json());
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

import express from "express";

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("New Hello World!");
});

app.listen(3000, () => {
  console.log("Server is running on https://localhost:3000");
});
