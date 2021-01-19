const { db, port } = require("./conf.js");
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  console.log("GET / was called!");
  res.send("Hi there!");
});

//Get all clients
app.get("/client", (req, res) => {
  db.query("SELECT * from Client", (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Error retrieving data");
    } else {
      res.status(200).json(results);
    }
  });
});

//Post a new client
app.post("/client", (req, res) => {
  const {
    name,
    surname,
    email,
    phone,
    password,
    job,
    structure_name,
    structure_type,
    structure_field,
    job_field,
    territory,
    wishes,
    website,
  } = req.body;
  db.query(
    "INSERT INTO Client(`name`, surname, email, phone, password, job, structure_name, structure_type, structure_field, job_field, territory, wishes, website) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      name,
      surname,
      email,
      phone,
      password,
      job,
      structure_name,
      structure_type,
      structure_field,
      job_field,
      territory,
      wishes,
      website,
    ],
    (err, response) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error saving an album");
      } else {
        res.status(200).send("Successfully saved !");
      }
    }
  );
});

//Delete a client
app.delete("/client/:id", (req, res) => {
  const idClient = req.params.id;
  db.query(
    "DELETE FROM Client WHERE idClient = ?",
    [idClient],
    (err, results) => {
      if (err) {
        console.log(err);
        res.status(500).send("😱 Error deleting an client");
      } else {
        res.status(200).send("🎉 Client deleted!");
      }
    }
  );
});

app.listen(port, () => {
  console.log(`API avalable on http://localhost:${port}`);
});
