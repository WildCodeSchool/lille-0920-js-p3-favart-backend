const express = require("express");
const router = express.Router();
const { db } = require("../conf");

router.get("/", (req, res) => {
    const msg =
        "Welcome on Authentication-101! Feel free to read the README.md file";
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

//Delete a client
router.delete("/client/:id", (req, res) => {
    const idClient = req.params.id;
    db.query(
        "DELETE FROM Client WHERE idClient = ?", [idClient],
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
router.patch("/client/:id", (req, res) => {
    // We get the ID from the url:
    const idClient = req.params.id;
    // We get the data from the req.body
    const newClient = req.body;
    // We send a UPDATE query to the DB
    db.query(
        "UPDATE Client SET ? WHERE idClient = ?", [newClient, idClient],
        (err, results) => {
            if (err) {
                res.status(500).send("Error updating an client");
            } else {
                res.status(200).send("Client updated successfully 🎉");
            }
        }
    );
});

//Display one client
router.get("/client/:id", (req, res) => {
    const idClient = req.params.id;
    db.query(
        "SELECT idClient, username, surname, email, phone, job, structure_name, structure_type, structure_field, job_field, territory, wishes, website FROM Client WHERE idClient = ?", [idClient],
        (err, results) => {
            if (err) {
                res.status(500).send("Error client");
            } else {
                res.status(200).json(results);
            }
        }
    );
});

module.exports = router;