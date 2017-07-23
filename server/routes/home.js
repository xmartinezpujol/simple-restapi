const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const fs = require('fs');
const apiData = require('../data/galleries.json');
const somejson = { "some": "json" };


//INFO VIEWS
router.get('/api' , function(req, res) {
  res.render('start');
});

router.get('/' , function(req, res) {
  res.render('start');
});

//GETS
router.get('/api/galleries', (req, res) => res.json(apiData));

router.get('/api/galleries/:id', function(req, res) {
  const galleryId = req.params.id;

  //Render Gallery Not Found page in routes that have no info
  if(typeof(apiData[galleryId]) === 'undefined'){
    res.render('notfound');
  }
  else{
    res.json(apiData[galleryId]);
  }
});

router.get('/api/galleries/:id/:idPhoto', function(req, res) {
  const galleryId = req.params.id;
  const photoId = parseInt(req.params.idPhoto);

  //Render Gallery Not Found page in routes that have no info
  if(typeof(apiData[galleryId]['photos'][photoId]) === 'undefined'){
    res.render('notfound');
  }
  else{
    res.json(apiData[galleryId]['photos'][photoId]);
  }
});

//POSTS
router.post('/api/galleries/:id/:idPhoto/likeimg', (req, res) => {
  const galleryId = req.params.id;
  const photoId = parseInt(req.params.idPhoto);

  //Render Gallery Not Found page in routes that have no info
  if(typeof(apiData[galleryId]['photos'][photoId]) === 'undefined'){
    res.render('notfound');
  }
  else{
    res.json(apiData[galleryId]['photos'][photoId]['likes']);
  }

  apiData[galleryId]['photos'][photoId]['likes'] = apiData[galleryId]['photos'][photoId]['likes'] + 1;

  fs.writeFile('./server/data/galleries.json', JSON.stringify(apiData, null, 2), 'utf8', err => { if(err) console.log(err) });
});

router.post('/api/galleries/:id/:idPhoto/downloadimg', (req, res) => {
  const galleryId = req.params.id;
  const photoId = parseInt(req.params.idPhoto);

  //Render Gallery Not Found page in routes that have no info
  if(typeof(apiData[galleryId]['photos'][photoId]) === 'undefined'){
    res.render('notfound');
  }
  else{
    res.json(apiData[galleryId]['photos'][photoId]['downloads']);
  }

  apiData[galleryId]['photos'][photoId]['downloads'] = apiData[galleryId]['photos'][photoId]['downloads'] + 1;

  fs.writeFile('./server/data/galleries.json', JSON.stringify(apiData, null, 2), 'utf8', err => { if(err) console.log(err) });
});

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));

module.exports = router;
