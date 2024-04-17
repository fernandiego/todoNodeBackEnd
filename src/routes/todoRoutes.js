// src/routes/todoRoutes.js
const Router = require('koa-router');
const router = new Router();

const todoController = require('../controllers/todoController');

router.get('/todos', todoController.getAllTodos);
router.post('/todos', todoController.createTodo);

module.exports = router.routes();
