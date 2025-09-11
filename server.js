const express = require("express");
require("dotenv").config({ path: "./config/secrets/.env" });
const connectDB = require("./config/db");

// initialize connection with database
connectDB();

const port = process.env.PORT;

const app = express();

// Body parser middleware
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
