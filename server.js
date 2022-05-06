require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Todo = require("./models/todos");

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("Mongoose is connected"));

const app = express();

const PORT = 3001;

app.use(cors());
app.use(express.json());

app.get("/todos", getTodos);
app.post("/todos", createTodos);
app.delete("/todos/:id", deleteTodos);

async function getTodos(req, res) {
  try {
    const todos = {};
    const results = await Todo.find(todos);
    res.status(200).send(results);
  } catch (error) {
    console.log(error, "error inside of getTodos");
  }
}

async function createTodos(req, res) {
  try {
    const createTodo = await Todo.create(req.body);
    res.status(200).send(createTodo);
  } catch (error) {
    console.log(error, "error inside of createTodos");
  }
}

async function deleteTodos(req, res) {
  const id = req.params.id;
  try {
    await Todo.findByIdAndDelete(id);
    res.send("your todo has been deleted");
  } catch (error) {
    console.log(error, "error inside of deleteTodos");
  }
}

app.listen(PORT, () => console.log(`listening on ${PORT}`));
