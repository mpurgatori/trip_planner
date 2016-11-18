var express = require('express');
var router = express.Router();
var models = require('../models');
var Place = require('../models');
module.exports = router;



router.get('/', function(req, res, next) {
  var queryPromises = [
    models.Hotel.findAll({ include: [Place] }),
    models.Activity.findAll({ include: [Place] }),
    models.Restaurant.findAll({ include: [Place] })
  ];

  Promise.all(queryPromises)
    .then(function(values) {
      var hotels = values[0];
      var activities = values[1];
      var restaurants = values[2];

      res.json({
        hotels: hotels,
        activities: activities,
        restaurants: restaurants
      });
    })
    .catch(next);
});
