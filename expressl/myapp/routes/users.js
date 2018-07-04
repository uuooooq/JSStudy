var express = require('express');
var router = express.Router();
//var mongodb = require('../config/db');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = 'mongodb://localhost:27017';

const dbName = 'mydb';


/* GET users listing. */
router.get('/', function(req, res, next) {

  // mongodb.open(function(err,mydb){
  //   if(err){
  //     res.send('respond with a resource---- err');
  //   }else{
  //     mydb.myCollection.insertOne({x:2});
  //     res.send('respond with a resource---- success');
  //   }
  // })

  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
  
    const db = client.db(dbName);
    var myc = db.collection('myCollection');
    myc.insertOne({y:1});
    //db.myCollection.insertOne({y:1});
    res.send('respond with a resource---- success');
    client.close();
  });


  
});

module.exports = router;
