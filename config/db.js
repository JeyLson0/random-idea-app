const mongoose = require("mongoose");

// We need a function to connect to the database
const connectDB = async () => {
  // await mongoose.connect() returns a promise and connects
  // with the provided URI from mongoDB
  const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log(`MongoDB Connected ${conn.connection.host}`);
};

// export the connection to server.js
module.exports = connectDB;
