const express = require("express");
const cors = require("cors");
const PORT = 5000;

const app = express();

app.use(cors());
app.use(express.json());

let todos = [];

app.get("/", (req, res) => res.send("backend is working"));

app.get("/api/todos", (req, res) => res.json(todos));

app.listen(PORT, () => console.log(`Listening on ${PORT} port`));
