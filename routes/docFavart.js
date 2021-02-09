const express = require("express");
const { db} = require("../conf");
const router = express.Router();

//Get all Ressources Favart
router.get("/ressources", (req, res) => {
    db.query("SELECT * from Ressources_Favart", (err, results) => {
      if (err) {
        res.status(500).send("Error retrieving data");
      } else {
        res.status(200).json(results);
      }
    });
  });
  
  //Post a new Favart doc
  router.post("/ressources", (req, res) => {
    const { link, title, description } = req.body;
    db.query(
      "INSERT INTO Ressources_Favart(link, title, description) VALUES(?, ?, ?)",
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
  
  //Delete a Favart doc
  router.delete("/ressources/:id", (req, res) => {
    const idClient = req.params.id;
    db.query(
      "DELETE FROM Ressources_Favart WHERE idRessources_Favart = ?",
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

  