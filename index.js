const { db, port } = require("./conf.js");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hi there!");
});

//Get all projets
app.get("/projet", (req, res) => {
  db.query("SELECT * from projet", (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving data");
    } else {
      res.status(200).json(results);
    }
  });
});

//Post a new projet
app.post("/projets", (req, res) => {
  const {
    titre,
    porteurs,
    enjeux,
    missions,
    partenaires,
    territoires,
    outils,
  } = req.body;
  db.query(
    "INSERT INTO projets(titre,porteurs,enjeux,missions,partenaires,territoires,outils) VALUES (?, ?, ?, ?, ?, ?, ?,)",
    [titre, porteurs, enjeux, missions, partenaires, territoires, outils],
    (err, response) => {
      if (err) {
        res.status(500).send("Error saving projet");
      } else {
        res.status(200).send("Successfully saved !");
      }
    }
  );
});

//Delete a projet
app.delete("/projets/:id", (req, res) => {
  const idProjet = req.params.id;
  db.query(
    "DELETE FROM projets WHERE idProjet = ?",
    [idProjet],
    (err, results) => {
      if (err) {
        res.status(500).send("😱 Error deleting projet");
      } else {
        res.status(200).send("🎉 Projet deleted!");
      }
    }
  );
});

//Update a projet
app.put("/projets/:id", (req, res) => {
  // We get the ID from the url:
  const idProjet = req.params.id;
  // We get the data from the req.body
  const newProjet = req.body;
  // We send a UPDATE query to the DB
  db.query(
    "UPDATE projets SET ? WHERE idProjet = ?",
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

app.listen(port, () => {});
