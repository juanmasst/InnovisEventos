import Express from 'express';
import morgan from 'morgan';
import {createRoles} from './libs/initialSetup';
import authRoutes from './routes/auth.routes'
import customerRoutes from "./routes/customer.routes";


require('dotenv').config()

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./index');
const usersRouter = require('./routes/users.routes');
const app = express();
createRoles();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.json())
app.use(morgan('dev'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//rutas
app.use('/', indexRouter);
app.use('/users.routes', usersRouter);
app.use('/api/auth', authRoutes)
app.use('/api/customers', customerRoutes)

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
