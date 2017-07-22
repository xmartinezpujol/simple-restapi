var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var fs = require('fs');
var apiData = require('../data/galleries.json');
var somejson = { "some": "json" };

router.get('/api/galleries', (req, res) => res.json(apiData));

router.get('/api/galleries/:id', function(req, res) {
  var galleryId = req.params.id;

  //Render Gallery Not Found page in routes that have no info
  if(typeof(apiData[galleryId]) === 'undefined'){
    res.render('notfound');
  }
  else{
    res.send(apiData[galleryId]);
  }
});

router.get('/api/galleries/:id/:idPhoto', function(req, res) {
  var galleryId = req.params.id;
  var photoId = parseInt(req.params.idPhoto);

  //Render Gallery Not Found page in routes that have no info
  if(typeof(apiData[galleryId]['photos'][photoId]) === 'undefined'){
    res.render('notfound');
  }
  else{
    res.send(apiData[galleryId]['photos'][photoId]);
  }
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

module.exports = router;
