const express = require("express");
const app = express();
require("dotenv").config();

app.use(express.urlencoded());
app.use(express.json());

const models = require("./models");

app.get("/", (req, res) => {
  res.send("hello from root");
});

app.use("/cars", require("./controllers/CarsController"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
