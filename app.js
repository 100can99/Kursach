var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const pgp = require('pg-promise')(/* options */)
const db = pgp('postgres://postgres:keks@localhost:5432/Limbo')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var prodazhiRouter = require('./routes/prodazhi');
var edaRouter = require('./routes/eda');
var dostavkaRouter = require('./routes/dostavka');
var postavshikiRouter = require('./routes/postavshiki');

var app = express();

session = require("./session.js")

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req,res,next){
  req.db = db;
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/prodazhi', prodazhiRouter);
app.use('/eda', edaRouter);
app.use('/dostavka', dostavkaRouter);
app.use('/postavshiki', postavshikiRouter);

var api = require('./routes/api');
app.use('/api', api);
var api_auth = require('./routes/api/auth');
api.use('/auth', api_auth);
var api_users = require('./routes/api/users');
api.use('/users', api_users);
var api_prodazhi = require('./routes/api/prodazhi');
api.use('/prodazhi', api_prodazhi);
var api_eda = require('./routes/api/eda');
api.use('/eda', api_eda);
var api_dostavka = require('./routes/api/dostavka');
api.use('/dostavka', api_dostavka);
var api_postavshiki = require('./routes/api/postavshiki');
api.use('/postavshiki', api_postavshiki);

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
  res.render('error');
});

db.one('SELECT $1 AS value', 123)
.then((data) => {
console.log('DATA:', data.value)
})
.catch((error) => {
console.log('ERROR:', error)
});

module.exports = app;