// src/controllers/todoController.js
const Todo = require('../models/Todo');
const {db} = require('../db')

async function getAllTodos(ctx) {
  ctx.body = await db("todos");


}

async function createTodo(ctx) {
  const { description } = ctx.request.body;
  await db("todos").insert({description})
  ctx.status = 201; // Created
}

async function updateTodo(ctx) {
  const {id} = ctx.params
  const {description,done} = ctx.request.body

  await db("todos").where({id}).update({description, done})

  ctx.status = 200 // OK
  ctx.body = {message: "Todo updated successfully"}
}

async function deleteTodo(ctx) {
  const {id} = ctx.params

  await db("todos").where({id}).del()

  ctx.status = 204 //No content
}

module.exports = { getAllTodos, createTodo, updateTodo, deleteTodo };
