const router = require("express").Router();

const models = require("../models");

router.get("/", (req, res) => {
  models.Car.find()
    .then((foundCars) => {
      res.status(200).json({ cars: foundCars });
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/:id", (req, res) => {
  models.Car.findOne({ _id: req.params.id })
    .then((car) => {
      res.status(200).json({ car });
    })
    .catch((err) => {
      res.send(err);
    });
});

router.post("/", (req, res) => {
  models.Car.create(req.body)
    .then((car) => {
      res.status(201).json({ car });
    })
    .catch((err) => {
      res.send(err);
    });
});

router.put("/:id", (req, res) => {
  res.send("hello from PUT /bounties/:id");
});

router.delete("/:id", (req, res) => {
  res.send("hello from DELETE /bounties/:id");
});

module.exports = router;
