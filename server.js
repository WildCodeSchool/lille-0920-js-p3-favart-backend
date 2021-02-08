const express = require("express");
const { port } = require("./conf");
const passport = require("passport");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(passport.initialize());
app.use(cors());
/* --------------------------------------------------------------------- Routes */

app.use("/auth", require("./routes/auth"));
app.use("/", require("./routes/misc"));

/* --------------------------------------------------------------------- 404 and server launch */
app.use((req, res) => {
  const msg = `Page not found: ${req.url}`;
  res.status(404).send(msg);
});

app.listen(port, () => {
  console.log(`API root available at: http://localhost:${port}/`);
});
