require('dotenv').config();
var fs = require("fs");
var path = require('path');
var request = require('request');
var textract = require('textract');

var url = require('url');
var juice = require('juice');
const sgMail = require('@sendgrid/mail');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
