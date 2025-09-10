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

// Checking github contribution status
// import http from "http";

// const hostName = "127.0.0.1";
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader("content-type", "text/plain");
//   res.end("Hello world! This is a Node.js server");
// });

// server.listen(port, hostName, () => {
//   console.log(`Server is running on port: ${port}, on Host ${hostName}`);
// });

import http from "http";

let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is the Home Page");
  } else if (req.method === "GET" && req.url === "/projects") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is a Projects page");
  } else if (req.method === "GET" && req.url === "/blog") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("This is the Blog Page");
  } else if (req.method === "GET" && req.url === "/users") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: "This is the Users Page",
        data: users,
      })
    );
  } else if (req.method === "POST" && req.url === "/users") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      const newUser = JSON.parse(body);
      newUser.id = users.length + 1;
      users.push(newUser);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          message: "New User is added successfully...",
          data: newUser,
        })
      );
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server is running on port 3000, host name is 127.0.0.1");
});
