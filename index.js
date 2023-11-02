const express = require("express");
const cors = require("cors");
const { connection } = require("./db");
const { BoardRouter } = require("./Routes/board.route");
const { taskRouter } = require("./Routes/task.route");
const { subtaskRouter } = require("./Routes/subtask.route");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Welcome to Kanban Board");
});

app.use("/boards", BoardRouter);
app.use("/tasks", taskRouter);
app.use("/subtasks", subtaskRouter);

app.listen(8080, async () => {
  console.log("Server is running on port 8080");
  try {
    await connection;
    console.log("connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
});
