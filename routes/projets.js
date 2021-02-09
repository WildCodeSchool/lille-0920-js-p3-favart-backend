const express = require("express");
const { db } = require("../conf");
const router = express.Router();

router.get("/projets", (req, res) => {
  db.query("SELECT * from projets", (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving data");
    } else {
      res.status(200).json(results);
    }
  });
});

router.get("/projets/:id", (req, res) => {
  const idProjet = req.params.id;
  db.query("SELECT * from projets WHERE id=?", [idProjet], (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving data");
    } else {
      res.status(200).json(results);
    }
  });
});

router.post("/projets", (req, res) => {
  const {
    logo,
    titre,
    porteurs,
    enjeux,
    missions,
    partenaires,
    territoires,
    outils,
  } = req.body;
  db.query(
    "INSERT INTO projets(logo,titre,porteurs,enjeux,missions,partenaires,territoires,outils) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [logo, titre, porteurs, enjeux, missions, partenaires, territoires, outils],
    (err, response) => {
      if (err) {
        res.status(500).send("Error saving projet");
      } else {
        res.status(200).send("Successfully saved !");
      }
    }
  );
});

router.put("/projets/:id", (req, res) => {
  const idProjet = req.params.id;
  const newProjet = req.body;
  db.query(
    "UPDATE projets SET ? WHERE id = ?",
    [newProjet, idProjet],
    (err, results) => {
      if (err) {
        res.status(500).send("Error updating projet");
      } else {
        res.status(200).send("Projet updated successfully 🎉");
      }
    }
  );
});

router.delete("/projets/:id", (req, res) => {
  const idProjet = req.params.id;
  db.query("DELETE FROM projets WHERE id = ?", [idProjet], (err, results) => {
    if (err) {
      res.status(500).send("Error deleting projet");
    } else {
      res.status(200).send("Projet deleted!");
    }
  });
});

module.exports = router;
