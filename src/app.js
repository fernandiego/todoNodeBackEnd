// src/app.js
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const todoRoutes = require('./routes/todoRoutes');

const app = new Koa();

// Middleware
app.use(bodyParser());

// Routes
app.use(todoRoutes);

module.exports = app;
