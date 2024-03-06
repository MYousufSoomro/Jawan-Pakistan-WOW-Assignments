const express = require("express");
const app = express();
const { todos } = require("./data");

app.use(express.json());

// METHODS ----------------------------------------------------------------
//  GET >> POST >> PUT >> DELETE

// USING GET METHOD
app.get("/task", (req, res) => {
  res.json({ data: todos });
});

//TASK GET BY USING ID
app.get("/task/:id", (req, res) => {
  const id = req.params.id;

  const find_todo = todos.find((el) => {
    return el.id === +id;
  });

  return res.json({ data: find_todo });
});

// USING POST METHOD
app.post("/task", (req, res) => {
  //   console.log(req.body);
  const new_data = req.body;
  return res.json({ data: new_data });
  //   res.json({ data: todos });
});

app.put("/task/:id", (req, res) => {
  const id = req.params.id;
  const data = req.body;

  const find_todo = todos.find((el) => {
    return el.id === +id;
  });

  if (!find_todo) {
    return res.status(404).json({ message: "Task not found!" });
  }

  const update_todo = { ...find_todo, ...data };

  return res.json({ data: update_todo });
  //   res.json({ data: todos });
});

app.listen(6000, (req, res) => {
  console.log("ExpressJS Server is running");
});
