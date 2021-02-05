const { db, port } = require("./conf.js");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hi there!");
});


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

app.get("/logos", (req, res) => {
  db.query("SELECT * from logos", (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving data");
    } else {
      res.status(200).json(results);
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

app.listen(port, () => {
  console.log(`API avalable on http://localhost:${port}`);
});

