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
app.get("/projets", (req, res) => {
  db.query("SELECT * from projets", (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving data");
    } else {
      res.status(200).json(results);
    }
  });
});

app.get("/projets/:id", (req, res) => {
  const idProjet = req.params.id;
  db.query("SELECT * from projets WHERE id=?", [idProjet], (err, results) => {
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

//Delete a projet
app.delete("/projets/:id", (req, res) => {
  const idProjet = req.params.id;
  db.query("DELETE FROM projets WHERE id = ?", [idProjet], (err, results) => {
    if (err) {
      res.status(500).send("Error deleting projet");
    } else {
      res.status(200).send("Projet deleted!");
    }
  });
});

//Update a projet
app.put("/projets/:id", (req, res) => {
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

app.get("/logos", (req, res) => {
  db.query("SELECT * from logos", (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving data");
    } else {
      res.status(200).json(results);
    }
  });
});

app.post("/logos", (req, res) => {
  const { lien_url } = req.body;
  db.query(
    "INSERT INTO logos (lien_url) VALUES (?)",
    [lien_url],
    (err, response) => {
      if (err) {
        res.status(500).send("Error saving logo");
      } else {
        res.status(200).send("Successfully saved !");
      }
    }
  );
});

app.delete("/logos/:id", (req, res) => {
  const idLogos = req.params.id;
  db.query("DELETE FROM logos WHERE id = ?", [idLogos], (err, results) => {
    if (err) {
      res.status(500).send("Error deleting logo");
    } else {
      res.status(200).send("Logo deleted!");
    }
  });
});

app.get("/logos/:id", (req, res) => {
  const idLogo = req.params.id;
  db.query("SELECT * from logos WHERE id=?", [idLogo], (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving data");
    } else {
      res.status(200).json(results);
    }
  });
});

app.put("/logos/:id", (req, res) => {
  const idLogos = req.params.id;
  const newLogos = req.body;
  db.query(
    "UPDATE logos SET ? WHERE id=?",
    [newLogos, idLogos],
    (err, results) => {
      if (err) {
        res.status(500).send("Error updating logos");
      } else {
        res.status(200).send("logos updated successfully 🎉");
      }
    }
  );
});

app.listen(port, () => {
  console.log("server is running");
});
