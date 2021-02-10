const express = require("express");
const { db } = require("../conf");
const router = express.Router();

//Get all Ressources Ext
router.get("/", (req, res) => {
  db.query("SELECT * from Ressources_Externes", (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving data");
    } else {
      res.status(200).json(results);
    }
  });
});

//Post a new ext doc
router.post("/", (req, res) => {
  const { link, title, description } = req.body;
  db.query(
    "INSERT INTO Ressources_Externes(link, title, description) VALUES(?, ?, ?)",
    [link, title, description],
    (err, response) => {
      if (err) {
        res.status(500).send("Error saving a doc");
      } else {
        res.status(200).send("Successfully saved !");
      }
    }
  );
});

//Delete a ext doc
router.delete("/:id", (req, res) => {
  const idClient = req.params.id;
  db.query(
    "DELETE FROM Ressources_Externes WHERE idRessources_Externes = ?",
    [idClient],
    (err, results) => {
      if (err) {
        res.status(500).send("😱 Error deleting a doc");
      } else {
        res.status(200).send("🎉 Doc deleted!");
      }
    }
  );
});

module.exports = router;
