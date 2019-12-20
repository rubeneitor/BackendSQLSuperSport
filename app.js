var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');
var productsRouter = require ('./routes/products');
var ordersRouter = require ('./routes/orders')
var categoriesRouter = require ('./routes/categories')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/products', productsRouter)
app.use('/orders', ordersRouter)
app.use('/categories', categoriesRouter)

module.exports = app;
