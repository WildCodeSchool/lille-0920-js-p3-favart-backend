const express = require("express");
const app = express();
const cors = require("cors");
const { db, port } = require("../conf");
const router = express.Router();


app.use(cors());
app.use(express.json());


router.get("/logos", (req, res) => {
    db.query("SELECT * from logos", (err, results) => {
      if (err) {
        res.status(500).send("Error retrieving data");
      } else {
        res.status(200).json(results);
      }
    });
  });
  
  router.get("/logos/:id", (req, res) => {
    const idLogo = req.params.id;
    db.query("SELECT * from logos WHERE id=?", [idLogo], (err, results) => {
      if (err) {
        res.status(500).send("Error retrieving data");
      } else {
        res.status(200).json(results);
      }
    });
  });
  
  router.post("/logos", (req, res) => {Favart
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
  
  router.put("/logos/:id", (req, res) => {
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
  
  router.delete("/logos/:id", (req, res) => {
    const idLogos = req.params.id;
    db.query("DELETE FROM logos WHERE id = ?", [idLogos], (err, results) => {
      if (err) {
        res.status(500).send("Error deleting logo");
      } else {
        res.status(200).send("Logo deleted!");
      }
    });
  });

  module.exports = router;
