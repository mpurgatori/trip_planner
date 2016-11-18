var express = require('express');
var app = express();
var volleyball = require('volleyball');
var nunjucks = require('nunjucks');
var bodyParser = require('body-parser');
//var routes = require_______

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


app.use('/', //route/)



app.use(function(err,req,res,next){
  console.log(err);
  res.status(err.status || 500).send(err.message);
});
