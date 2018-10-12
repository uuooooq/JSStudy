
'use strict';
const Schema = require("mongoose").Schema;
const mySchema = Schema({name: String,age:Number});

/* global db */
module.exports = global.db.model('myCollection', mySchema);