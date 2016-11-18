var express = require('express');
var router = express.Router();
var models = require('../models');

module.exports = router;



router.get('/', function(req, res, next) {
  var queryPromises = [
    models.Hotel.findAll({ include: [models.Place] }),
    models.Activity.findAll({ include: [models.Place] }),
    models.Restaurant.findAll({ include: [models.Place] })
  ];
  console.log('HELLLOOOOOOOOO')
  Promise.all(queryPromises)
    .then(function(values) {
      var hotels = values[0];
      var activities = values[1];
      var restaurants = values[2];

      res.render('index',{
        hotels: hotels,
        activities: activities,
        restaurants: restaurants
      });
    })
    .catch(next);
});
