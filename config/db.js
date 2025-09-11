const mongoose = require("mongoose");

const connectDB = async () => {
  // mongoose.connect() returns a promise using Mongo connection string
  const conn = await mongoose.connect(process.env.MONGO_URI);
  console.log(`MongoDB Connected ${conn.connection.host}`);
};

// export the connection to server.js
module.exports = connectDB;
