const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '/public'))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/contact.html"));
});

app.get("/privacypolicy", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/privPol.html"))
});

app.listen(PORT, () => {
  console.log(`app listening on PORT: ${PORT}`)
});