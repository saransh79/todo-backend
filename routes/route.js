import express from 'express';


import { addTodo, getAllTodos, toggleTodoDone, updateTodo, deleteTodo } from '../controller/todo-controller.js';
import { login, signup } from '../controller/user-controlller.js';


const route = express.Router();

// Todo routes
route.post('/todos', addTodo)
route.post('/alltodos', getAllTodos);
route.get('/todos/:id', toggleTodoDone);
route.put('/todos/:id', updateTodo);
route.delete('/todos/:id', deleteTodo);

// User routes
route.post('/login', login);
route.post('/signup', signup)

export default route;