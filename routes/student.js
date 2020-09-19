const express = require("express");
const router = express.Router();
const Student = require("../models/student");

router.post("/add", (req, res) => {
  const newStudent = new Student({
    name: req.body.name,
    age: req.body.age,
    email: req.body.email,
  });
  newStudent
    .save()
    .then(() => res.json("Student Added..."))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;