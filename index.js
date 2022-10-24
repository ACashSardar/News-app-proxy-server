const axios = require("axios");
const express = require("express");
const app = express();
var cors = require("cors");

app.use(cors());

const host = "https://newsapi.org/v2/";

app.get("/", (req, res) => {
  res.json({ message: "welcome" });
});

app.get("/:var", (req, res) => {
  const api = req._parsedUrl.href;

  axios
    .get(host + api)
    .then((response) => {
      res.json(response.data);
    })
    .catch((error) => {
      res.json({ message: api });
    });
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("Server started on port 5000!"));
