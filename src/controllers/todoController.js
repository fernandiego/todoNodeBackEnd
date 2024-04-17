// src/controllers/todoController.js
const Todo = require('../models/Todo');

let todos = [];

function getAllTodos(ctx) {
  ctx.body = todos;
}

function createTodo(ctx) {
  const { title } = ctx.request.body;
  const id = todos.length + 1;
  const todo = new Todo(id, title, false);
  todos.push(todo);
  ctx.status = 201; // Created
  ctx.body = todo;
}

module.exports = { getAllTodos, createTodo };
