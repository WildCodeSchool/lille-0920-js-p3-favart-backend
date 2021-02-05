const express = require("express");
const passport = require("passport");
const router = express.Router();
const { db, jwt_rounds, jwt_secret } = require("../conf");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("../passport-strategies");

router.post("/signup", (req, res) => {
    const formData = req.body;
    let data = { idClient: null, token: "", infosClients: formData };
    formData.password = bcrypt.hashSync(formData.password, jwt_rounds);
    db.query(`INSERT INTO Client SET ?`, formData, (errSql, resSql) => {
        if (!errSql) {
            delete formData.password;
            formData.id = resSql.insertId;
            const token = jwt.sign(formData, jwt_secret);
            data.token = token;
            data.idClient = formData.id;
            res.status(201).json(data);
        } else {
            res.status(500).json(errSql);
        }
    });
});

router.post("/login", passport.authenticate("local"), (req, res) => {
    let data = { idClient: req.user.idClient, token: "" };
    const token = jwt.sign(req.user, jwt_secret);
    data.token = token;
    res.status(201).json(data);
});

module.exports = router;