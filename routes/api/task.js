const express = require("express");
const router = express.Router();
const Task = require("./../../models/Task")

// Index Route: Task
router.get("/", (req, res) => {
  Task.find({}, (err, task) => {
    if (err) {
      res.json({ message: "Error", error: err });
    }
    else {
      res.json({ message: "Success", data: task });
    }
  });
});

// Create Tasks Route:
router.post("/create", (req, res) => {
  const { title, description } = req.body;

  const newTask = {
    title: title,
    description: description
  }

  Task.create(newTask, (err, task) => {
    if (err) {
      res.json({ message: "Error", error: err });
    }
    else {
      res.json({ message: "Success", data: task });
    }
  });
}),

// Show Task by ID Route:
router.get("/:id", (req, res) => {
  Task.findById(req.params.id, (err, task) => {
    if (err) {
      res.json({ message: "Error", error: err });
    }
    else {
      res.json({ message: "Success", data: task });
    }
  });
});

// Update/change task by ID Route:
router.put("/:id", (req, res) => {
  Task.findById(req.params.id, (err, task) => {
    if (err) {
      res.json({ message: "Error", error: err });
    }
    else {
      task.set(req.body);
      task.save((err) => {
        if (err) {
          res.json({ message: "Error", error: err });
        }
        else {
          res.json({ message: "Success", data: task });
        }
      });
    }
  });
});

// Delete route:
router.delete("/:id/delete", (req, res) => {
  Task.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.json({ message: "Error", error: err });
    }
    else {
      res.json({ message: "Success, Message Destroyed!" });
    }
  });
});

module.exports = router;