const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  questionNumber: {
    type: Number,
    required: true,
  },
});

const Questions = mongoose.model("Questions", QuestionSchema);
module.exports = Questions;
