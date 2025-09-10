// import express from "express";

// const app = express();
// app.use(express.json());

// const user = {
//   id: 1,
//   name: "Rizwan",
// };
// app.get("/", (req, res) => {
//   res.send("New Hello World!");
// });
// app.get("/user", (req, res) => {
//   res.send(user);
// });

// app.post("/user", (req, res) => {
//   res.send("this is a post request");
// });

// app.put("/user", (req, res) => {
//   res.send("this is a put request");
// });

// app.delete("/user", (req, res) => {
//   res.send("this is a delete request");
// });

// app.listen(3000, () => {
//   console.log("Server is running on https://localhost:3000");
// });

import http from "http";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("content-type", "text/plain");
  res.end("Hello world! This is a Node.js server");
});

server.listen(3000, () => {
  console.log("Server is running on port: 3000, with host 127.0.0.1");
});
