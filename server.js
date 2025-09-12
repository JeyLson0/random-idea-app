const express = require("express");
require("dotenv").config({ path: "./config/secrets/.env" });
const connectDB = require("./config/db");
// node.js path module
const path = require("path");

connectDB();
const port = process.env.PORT;

const app = express();

// Express static folder
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Home message: welcome to random API");
});

const ideasRouter = require("./routes/ideas");
app.use("/api/ideas", ideasRouter);

app.listen(port, () => {
  console.log(`Server listening to port ${port}`);
});
