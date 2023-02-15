var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var passport = require('passport');
//require method overrride MW
//...by req using same name we installed it with
//returns fn for config MW
var methodOverride = require('method-override');

// Load the "secrets" in the .env file
require('dotenv').config();
//connect to ATLAS/MongoDB after the dotenv has processed the .env file
require('./config/database');
//configure passport mw
require('./config/passport');

var indexRouter = require('./routes/index');
var homeRouter = require('./routes/home');
var usersRouter = require('./routes/users');
var tweetsRouter = require('./routes/tweets');
var likesRouter = require('./routes/likes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//mount method override MW by adding it to MW pipeline and invoking it
//*what was returned in req was a fn for configuring the MW
//needs name of query param (? in URL) to look for in req
//(^ its "_method" here)
//query params can send extra info to server using URL
//...w/o impacting routing (bc it doesnt change the path)
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true
}))

//passport mw
//creates req.user
app.use(passport.initialize());
app.use(passport.session());

// provides req.user to all templates
app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

app.use('/', indexRouter); //log in page
app.use('/home', homeRouter); //after log in, home page
app.use('/users', usersRouter); //after log in/user pages
app.use('/tweets', tweetsRouter);
app.use('/likes', likesRouter);

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

module.exports = app;
