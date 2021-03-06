const express = require("express");

const { db } = require("../conf");
const router = express.Router();

router.get("/", (req, res) => {
  db.query("SELECT * from logos", (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving data");
    } else {
      res.status(200).json(results);
    }
  });
});

router.get("/:id", (req, res) => {
  const idLogo = req.params.id;
  db.query("SELECT * from logos WHERE id=?", [idLogo], (err, results) => {
    if (err) {
      res.status(500).send("Error retrieving data");
    } else {
      res.status(200).json(results);
    }
  });
});

router.post("/", (req, res) => {
  Favart;
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

router.put("/:id", (req, res) => {
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

router.delete("/:id", (req, res) => {
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
