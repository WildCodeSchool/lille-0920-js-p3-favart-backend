const { port } = require("./conf.js")
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    console.log("GET / was called!")
    res.send("Hi there!");
});

app.listen(port, () => {
    console.log(`API avalable on http://localhost:${port}`)
})