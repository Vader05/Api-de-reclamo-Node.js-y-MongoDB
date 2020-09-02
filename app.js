var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose =  require('mongoose');
var config = require('./config/config');
var cors = require('cors');

//Importing routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var employeeRouter= require('./routes/api/employee'); 
var serviceRouter = require('./routes/servicesRouter');


var app = express();

//conection to mongoDB
const connect = mongoose.connect(config.mongoUrl, { 
  useUnifiedTopology: true, 
  useNewUrlParser: true,
  useFindAndModify: false  
});

connect.then(cb => {
  console.log('Correctly connected to MongoDB');
}).catch(err => console.log(err));


//Middlewares
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



//Routes
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/employee', employeeRouter);
app.use('/services', serviceRouter);




//ErrorHandling

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
  res.json({
    message: err.message,
    error: err
  });
});

module.exports = app;
