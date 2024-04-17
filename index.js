const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');

const app = new Koa();
const router = new Router();

// Use bodyParser middleware to parse request bodies
app.use(bodyParser());

// Define a simple in-memory database for storing todos
const todos = [];

// Define routes
router.get('/todos', (ctx) => {
    ctx.body = todos;
});

router.post('/todos', (ctx) => {
    const { text } = ctx.request.body;
    const newTodo = { id: todos.length + 1, text, completed: false };
    todos.push(newTodo);
    ctx.body = newTodo;
});

router.put('/todos/:id', (ctx) => {
    const { id } = ctx.params;
    const { text, completed } = ctx.request.body;
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));
    if (todoIndex !== -1) {
        todos[todoIndex] = { ...todos[todoIndex], text, completed };
        ctx.body = todos[todoIndex];
    } else {
        ctx.status = 404;
        ctx.body = { error: 'Todo not found' };
    }
});

router.delete('/todos/:id', (ctx) => {
    const { id } = ctx.params;
    const todoIndex = todos.findIndex(todo => todo.id === parseInt(id));
    if (todoIndex !== -1) {
        todos.splice(todoIndex, 1);
        ctx.status = 204;
    } else {
        ctx.status = 404;
        ctx.body = { error: 'Todo not found' };
    }
});

// Register
