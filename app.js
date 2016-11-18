var express = require('express');
var app = express();
var volleyball = require('volleyball');
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');
// var tplanRouter = require('./routes/tripPlanner.js');
var Place = require('./models').Place;
var Hotels = require('./models').Hotels;
var Activity = require('./models').Activity;
var Restaurant = require('./models').Restaurant;
var mapdb = require('./models').mapdb;


nunjucks.configure('views', {
    noCache: true
});

app.engine('html', nunjucks.render);
app.set('view engine', 'html');

app.use(volleyball);
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.use(express.static('public'));

app.get('/', function(req,res, next){
  res.send("HELLO I'm HERE!!!")

})
// app.use('/', tplanRouter)



app.use(function(err, req, res, next) {
    console.log(err);
    res.status(err.status || 500).send(err.message)
})

mapdb.sync()
  .then(function(){
    app.listen(3000, function() {
        console.log("Trip planner is listening on 3000!!!!")
  })
  .catch(console.err)



})

module.exports = app
