const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;

const countriesRouter = function(countriesCollection) {
  router.get('/', (req, res) => {
    countriesCollection
    .find()
    .toArray()
    .then((docs) => res.json(docs))
  });

  router.post('/', (req, res) => {
    const newCountry = req.body;
    countriesCollection
    .insertOne(newCountry)
    .then(
      countriesCollection
      .find()
      .toArray()
      .then((docs) => res.json(docs))
    );
  });

  return router;
};



module.exports = countriesRouter;
