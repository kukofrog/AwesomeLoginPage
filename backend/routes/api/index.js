var express = require('express');
var createError = require('http-errors');
var router = express.Router();
const User = require('../../models/users')

//미들웨어1
router.all('*', function(req, res, next) {
  console.log(req.headers)

  if (req.path === '/xxx') return res.send({ status : 'OK'})
  next()
});


/* GET home page. */
router.get('/auth/signup', function(req, res, next) {
  const { email, password, name, age } = req.body
  const u = new User({ email, password, name, age })
    u.save()
      .then(r => {
        res.send({ success: true, msg: r })
      })
      .catch(e => {
        res.send({ success: false, msg: e.message })
  });
});

router.use('/user', require('./user'));


router.all('*', function(req, res, next) {
  next(createError(404, 'API를 찾을 수 없습니다.'));
});

module.exports = router;
