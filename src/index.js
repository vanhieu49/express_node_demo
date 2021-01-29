const express = require("express");
const path = require("path");
const app = express();
const handlebars = require("express-handlebars");
const morgan = require("morgan");
const port = 3000;

app.use(morgan("combined"));

// Rendering engine
app.engine("hbs", handlebars({ extname: ".hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "./resources/views"));
console.log(path.join(__dirname, "./resources/views"));

// Routes
app.get("/", function (req, res) {
  res.render("home");
});

app.get("/news", function (req, res) {
  res.render("news");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
