const express = require("express");
const { BoardModel } = require("../model/board.model");

const BoardRouter = express.Router();

BoardRouter.get("/", async (req, res) => {
  try {
    const boards = await BoardModel.find();
    res.send(boards);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

BoardRouter.get("/:id", async (req, res) => {
  try {
    const board = await BoardModel.findById(req.params.id);
    if (!board) {
      return res.status((r = 404)).send({ message: "Board doesn't exist" });
    }
    res.send(board);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
});

BoardRouter.post("/", async (req, res) => {
  const board = new BoardModel({
    name: req.body.name,
  });
  try {
    const newBoard = await board.save();
    res.status(201).send(newBoard);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

BoardRouter.patch("/:id", async (req, res) => {
  try {
    const board = await BoardModel.findById(req.params.id);
    if (req.body.name != null) {
      board.name = req.body.name;
    }
    const updatedBoard = await board.save();
    res.send(updatedBoard);
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
});

BoardRouter.delete("/:id", async (req, res) => {
  try {
    await BoardModel.findByIdAndDelete(req.params.id);
    res.send({ message: "Board Deleted" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = { BoardRouter };
