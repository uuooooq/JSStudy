var dbsetting = require('./dbsetting');
var Db = require('mongodb').Db;
var Connection = require('mongodb').connection;
var Server = require('mongodb').server;

module.exports = new Db(dbsetting.db,new Server(dbsetting.host, dbsetting.port),{safe: true});
