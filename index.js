const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + '/public'))

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "./about.html"));
});

app.get("/contact", (req, res) => {
  res.sendFile(path.join(__dirname, "./contact.html"));
});

app.listen(PORT, () => {
  console.log(`app listening on PORT: ${PORT}`)
});