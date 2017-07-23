var express = require('express');
var app = express();
var dataFile = require('./data/galleries.json');

app.set('port', process.env.PORT || 8080);
app.set('appData', dataFile);
app.set('view engine', 'pug');
app.set('views', 'server/views');

//TODO A simple API for starters (could be improved with token-headers)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Images
app.use(express.static(__dirname + '/public/img'));

//CSS + extras
app.use(express.static(__dirname + '/public/'));

//Routes
app.use(require('./routes/home'));

//ERROR 404
app.use(function (req, res, next) {
  res.render('notfound');
});

//ERROR 500
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('ERROR 500');
  res.render('error');
});

var server = app.listen(app.get('port'), () => console.log('Listening to port ' + app.get('port')));
