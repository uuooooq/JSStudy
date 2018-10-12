var express = require('express');
var router = express.Router();
var model = require('../models/myCollection.server.model.js')

/* GET home page. */
router.get('/', function(req, res, next) {
//   model.create({name: 'inserting ' + Date.now(),age:11}, function(err, doc) {
//     if (err) return res.render('index', { title: err });//next(err);
//     //res.send(doc);
//     res.render('index', { title: doc });
// });
//   //res.render('index', { title: 'Express' });
});

module.exports = router;
