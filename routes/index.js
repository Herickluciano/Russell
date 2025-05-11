var express = require('express');
var router = express.Router();
const userRoute = require('../routes/users');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Plateforme PortDePlaissance Agence Russell' });
});
router.use('/users' , userRoute);

module.exports = router;
