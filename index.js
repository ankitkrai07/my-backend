const express = require("express");
const cors = require("cors");
const { connection } = require("./db");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Welcome to Kanban Board");
});

app.listen(8080, async () => {
  console.log("Server is running on port 8080");
  try {
    await connection;
    console.log("connected to MongoDB");
  } catch (error) {
    console.log(error);
  }
});
