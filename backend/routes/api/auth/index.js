var express = require('express');
var createError = require('http-errors');
var router = express.Router();
const User = require('../../../models/users')

module.exports = router;


router.post('/signup', function(req, res, next) {
  console.log(req.body);
  const { email, password, name, age } = req.body;
  const u = new User({ email, password, name, age })
    u.save()
      .then(r => {
        res.send({ success: true, msg: r })
      })
      .catch(e => {
        res.send({ success: false, msg: e.message })
  });
});

router.post('/signin', function(req, res, next) {
  console.log(req.body);
  const { email, password } = req.body;
  User.findOne({ email: email, password: password }, function(err, user){
    if(err) return res.status(500).json({error: err});
    if(!user) return res.status(404).json({error: 'user not found'});
    res.json({
      user:user.name,
      age: user.age
    });
  });
});

router.put('/:id', (req, res, next) => {
  const id = req.params.id
  const { name, age } = req.body
  User.updateOne({ _id: id }, { $set: { name, age }})
    .then(r => {
      res.send({ success: true, msg: r })
    })
    .catch(e => {
      res.send({ success: false, msg: e.message })
    })
  // res.send({ success: true, msg: 'put ok' })
})


router.delete('/:id', (req, res, next) => {
  const id = req.params.id
  User.deleteOne({ _id: id })
    .then(r => {
      res.send({ success: true, msg: r })
    })
    .catch(e => {
      res.send({ success: false, msg: e.message })
    })
  res.send({ success: true, msg: 'del ok' })
})


router.all('*', function(req, res, next) {
  next(createError(404, 'API를 찾을 수 없습니다.'));
});

module.exports = router;
