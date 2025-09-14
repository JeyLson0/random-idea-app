const express = require("express");
require("dotenv").config({ path: "./config/secrets/.env" });
const connectDB = require("./config/db");
const path = require("path");
// import CORS
const cors = require("cors");

connectDB();
const port = process.env.PORT;

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS middleware
app.use(
  cors({
    // array of urls that can make request
    origin: ["http://localhost:5000", "http://localhost:3000"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Home message: welcome to random API");
});

const ideasRouter = require("./routes/ideas");
app.use("/api/ideas", ideasRouter);

app.listen(port, () => {
  console.log(`Server listening to port ${port}`);
});
