var express = require('express');
const todos = require('../controller/todosController');
var router = express.Router();

/* GET users listing. */
router.get('/', todos.getAlltoDos);
router.get('/completed', todos.getAllCompletedToDos)
router.get('/:id', todos.getTodosById);
router.post('/', todos.createTodo)
router.put('/:id', todos.updateToDo)
router.delete('/:id', todos.deleteToDo)
module.exports = router;
