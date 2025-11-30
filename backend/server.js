const express = require("express");
const cors = require("cors");
const PORT = 5000;

const app = express();

app.use(cors());
app.use(express.json());

let todos = [];

app.get("/", (req, res) => res.send("backend is working"));
app.get("/api/todos", (req, res) => res.json(todos));

app.post("/api/todos", (req, res) => {
  const newTodos = { id: Date.now(), ...req.body };
  todos.push(newTodos);
  res.json(newTodos);
});

app.put("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.map((it) => (it.id === id ? { ...it, ...req.body } : it));
  const updated = todos.find((it) => it.id === id);
  res.json(updated);
});

app.delete("/api/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  todos = todos.filter((it) => it.id !== id);
  res.json({ success: true });
});

app.listen(PORT, () => console.log(`Listening on ${PORT} port`));
