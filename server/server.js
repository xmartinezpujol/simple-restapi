var express = require('express');
var app = express();
var dataFile = require('./data/galleries.json');

app.set('port', process.env.PORT || 8080);
app.set('appData', dataFile);
app.set('view engine', 'pug');
app.set('views', 'app/views');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Images
app.use(express.static(__dirname + '/public/img'));

//Routes
app.use(require('./routes/home'));



var server = app.listen(app.get('port'), () => console.log('Listening to port ' + app.get('port')));
