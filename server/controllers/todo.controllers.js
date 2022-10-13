const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: String,
  date: Number,
  importance: Number,
  completed: Boolean,
});

const Todo = mongoose.model("Todo", todoSchema);

exports.create = async (req, res) => {
  const { title, date, importance, completed } = req.body;
  const todos = await Todo.create({
    title,
    date,
    importance,
    completed,
  });
  res.send(todos);

  /* res.send({
    params: req.params,
    body: { title, date, importance, completed },
  }); */
};

exports.read = async (req, res) => {
  const todos = await Todo.find({}, { _id: 0, __v: 0 });
  res.send(todos);
};

exports.update = async (req, res) => {
  const { title, importance, completed } = req.body;

  const todos = await Todo.findOneAndUpdate(
    { title: title },
    { importance: importance },
    { completed: completed }
  );
  res.send(todos);
};

exports.delete = async (req, res) => {
  const { title } = req.body;
  const todos = await Todo.findOneAndRemove({ title: title });
  res.send(todos);
};
