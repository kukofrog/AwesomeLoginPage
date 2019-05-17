var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors'); //cors 설정


var app = express();

app.use(cors()) // api 위에서 사용하겠다고 선언
//API 설정
app.use('/api', require('./routes/api'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({ msg: err.message })
});

module.exports = app;

//몽구스 연결

const mongoose = require('mongoose')

const User = require('./models/users')

mongoose.connect('mongodb://localhost:27017/hyungtak', { useCreateIndex: true,
  useNewUrlParser: true }, (err) => {
   if (err) return console.error(err)
   console.log('mongoose connected!')

   //쓰기
   // User.create({ name: '하하' })
   //     .then(r => console.log(r))
   //      .catch(e => console.error(e))

   //읽기
   // User.find()
   //      .then(r => console.log(r))
   //      .catch(e => console.error(e))

  // 업데이트(수정)
  // User.updateOne({ _id: '5cbd50967c00ec110c8d7912' }, { $set: { age: 27 } })
  //
  // .then(r => {
  //   console.log(r)
  //   console.log('updated')
  //   return User.find()
  // })
  //
  // .then(r => console.log(r))
  // .catch(e => console.error(e))

  //삭제
  // User.remove({})
  // User.deleteMany({})

  // User.deleteOne({ name: '하하' })
  //     .then(r => console.log(r))
  //     .catch(e => console.error(e))

})
