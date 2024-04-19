// src/controllers/todoController.js
const Todo = require('../models/Todo');
const {db} = require('../db')

async function getAllTodos(ctx) {
  ctx.body = await db("todos");


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
