const { db, port } = require("./conf.js");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hi there!");
});

//Get all Ressources Favart
app.get("/ressources", (req, res) => {
  db.query("SELECT * from Ressources_Favart", (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving data");
    } else {
      res.status(200).json(results);
    }
  });
});

//Post a new Favart doc
app.post("/ressources", (req, res) => {
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
app.delete("/ressources/:id", (req, res) => {
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

//Get all Ressources Ext
app.get("/ressourcesext", (req, res) => {
  db.query("SELECT * from Ressources_Externes", (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving data");
    } else {
      res.status(200).json(results);
    }
  });
});

//Post a new ext doc
app.post("/ressourcesext", (req, res) => {
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
app.delete("/ressourcesext/:id", (req, res) => {
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

app.listen(port, () => {});
