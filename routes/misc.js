const express = require("express");
const passport = require("passport");
const router = express.Router();
const { db } = require("../conf");

router.get("/", (req, res) => {
  const msg =
    "Welcome on Authentication-101! Feel free to read the README.md file";
  res.status(200).send(msg);
});

//Protected routes
router.get("/protected", passport.authenticate("jwt"), (req, res) => {
  const msg =
    "If you can see this, you should be logged in, " + req.user.username;
  res.status(200).send(msg);
});

//Display and modify clientbase

//Get all clients
router.get("/client", (req, res) => {
  db.query("SELECT * from Client", (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving data");
    } else {
      res.status(200).json(results);
    }
  });
});

//Post a new client
router.post("/client", (req, res) => {
  const {
    username,
    surname,
    email,
    phone,
    password,
    job,
    structure_name,
    structure_type,
    structure_field,
    job_field,
    territory,
    wishes,
    website,
  } = req.body;
  db.query(
    "INSERT INTO Client(username, surname, email, phone, password, job, structure_name, structure_type, structure_field, job_field, territory, wishes, website) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      username,
      surname,
      email,
      phone,
      password,
      job,
      structure_name,
      structure_type,
      structure_field,
      job_field,
      territory,
      wishes,
      website,
    ],
    (err, response) => {
      if (err) {
        res.status(500).send("Error saving a client");
      } else {
        res.status(200).send("Successfully saved !");
      }
    }
  );
});

//Delete a client
router.delete("/client/:id", (req, res) => {
  const idClient = req.params.id;
  db.query(
    "DELETE FROM Client WHERE idClient = ?",
    [idClient],
    (err, results) => {
      if (err) {
        res.status(500).send("😱 Error deleting an client");
      } else {
        res.status(200).send("🎉 Client deleted!");
      }
    }
  );
});

//Update a client
router.put("/client/:id", (req, res) => {
  // We get the ID from the url:
  const idClient = req.params.id;
  // We get the data from the req.body
  const newClient = req.body;
  // We send a UPDATE query to the DB
  db.query(
    "UPDATE Client SET ? WHERE idClient = ?",
    [newClient, idClient],
    (err, results) => {
      if (err) {
        res.status(500).send("Error updating an client");
      } else {
        res.status(200).send("Client updated successfully 🎉");
      }
    }
  );
});

module.exports = router;
