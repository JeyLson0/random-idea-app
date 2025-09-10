const express = require("express");
const port = 5000;

// express() creates Application Object
const app = express();

const databaseArr = [
  {
    id: 1,
    idea: "New facebook",
  },
  {
    id: 2,
    idea: "New instagram",
  },
  {
    id: 3,
    idea: "New discord",
  },
];

// creating route with HTTP GET and endpoint "/"
app.get("/", (req, res) => {
  res.send("Home message: welcome to random API");
});

// creating route with HTTP GET and endpoint "/api/ideas"
app.get("/api/ideas", (req, res) => {
  res.json({ success: true, data: idea });
});

// using route parameters (:)
app.get("/api/ideas/:id", (req, res) => {
  // databaseArr acts like we are getting an array of objects in a database
  const idea = databaseArr.find((idea) => idea.id === Number(req.params.id));
  // validations
  if (!idea) {
    return res
      .status(404)
      .json({ success: false, error: "Resource not found" });
  }
  return res.json({ success: true, idea });
});

// app.listen() starts the web server
app.listen(5000, () => {
  console.log(`Server listening to port ${port}`);
});
