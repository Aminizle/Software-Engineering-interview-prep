const express = require("express");
const mongoose = require("mongoose");
const app = express();

const QuestionModel = require("./models/InterviewQuesstions");

app.get("/api", (req, res) => {
  res.json({ users: ["userOne", "userTwo", "userThree"] });
});

app.use(express.json());
mongoose.connect(
  "mongodb+srv://devameen:Passw0rd@crud.fcvyxdg.mongodb.net/Interview_Questions",
  {
    useNewUrlParser: true,
  }
);

app.get("/", async (req, res) => {
  const question = new QuestionModel({
    question: "Explain event delegation.",
    questionNumber: 1,
  });
  try {
    await question.save();
    res.send("Inserted Data")
  } catch (err) {
    console.log(err);
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000");
});
