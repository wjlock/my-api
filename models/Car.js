const mongoose = require("mongoose");

const carCommentSchema = new mongoose.Schema({
  header: String,
  content: String,
});

const carSchema = new mongoose.Schema({
  make: {
    type: String,
    required: true,
    unique: true,
  },
  model: {
    type: String,
    minlength: 10,
    maxlength: 200,
  },
  mpg: {
    type: Number,
    min: 1000,
    max: 1000000,
  },
  editorComments: {
    type: String,
    comments: [carCommentSchema],
  },
});

module.exports = mongoose.model("cars", carSchema);
