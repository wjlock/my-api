const mongoose = require("mongoose");

const carCommentSchema = new mongoose.Schema({
  header: String,
  content: String,
});

const carSchema = new mongoose.Schema({
  make: {
    makeName: String,
  },
  model: {
    modelName: String,
  },
  mpg: {
    type: Number,
    min: 1,
    max: 1000,
  },
  editorComments: {
    type: String,
    comments: [carCommentSchema],
  },
});

module.exports = mongoose.model("cars", carSchema);
