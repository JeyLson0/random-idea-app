const { default: mongoose } = require("mongoose");

// Creating a Schema with mongoose.Schema class
const IdeaSchema = new mongoose.Schema({
  text: {
    type: String,
    required: [true, "Please add a text field"],
  },
  tag: {
    type: String,
  },
  username: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// Creating a model based on a schema
module.exports = mongoose.model("Idea", IdeaSchema);
