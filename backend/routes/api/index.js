var express = require('express');
var createError = require('http-errors');
var router = express.Router();
const User = require('../../models/users')


/* GET home page. */


router.use('/user', require('./user'));
router.use('/auth', require('./auth'));


router.all('*', function(req, res, next) {
  next(createError(404, 'API를 찾을 수 없습니다.'));
});

module.exports = router;
