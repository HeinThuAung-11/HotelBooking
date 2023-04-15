const todosService = require('../service/TodoService')
async function getAlltoDos(req, res, next) {
  let json = await todosService.getAlltoDos()
  res.json(json);
}

async function getTodosById(req, res, next) {
  let id = req.params['id']
  try {
    let json = await todosService.getTodosById(id)
    if (!todo) {
      res.status(400).json({
        error: 'ToDo not found'
      });
    }
    else {
      res.json(json);
    }
  }
  catch (e) {
    res.status(400).json({
      error: 'ToDo not found'
    });
  }
}
async function getAllCompletedToDos(req, res, next) {
  try {
    let todo = await todosService.getAllCompletedToDos()
    if (!todo) throw Error('Cannot Get todo')
    res.json(todo);
  }
  catch (err) {
    console.log(err);
    await res.status(400).json({ message: err })
  }
}
async function createTodo(req, res, next) {
  try {
    const todo = await todosService.saveToDo(req.body);
    if (!todo) throw Error('Cannot Save todo')
    await res.status(201).json(todo);
  }
  catch (err) {
    console.log(err);
    await res.status(400).json({ message: err })
  }
}

async function updateToDo(req, res, next) {
  let id = req.params['id']
  try {
    const todo = await todosService.updateToDo(id, req.body)
    if (!todo) throw Error('Cannot Update todo')
    await res.status(201).json(todo);
  } catch (err) {
    console.log(err);
    await res.status(400).json({ message: err })
  }
}
async function deleteToDo(req, res, next) {
  let id = req.params['id']
  try {
    const todo = await todosService.deleteToDo(id)
    if (!todo) throw Error('Cannot Delete todo')
    await res.status(201).json(todo);
  } catch (err) {
    console.log(err);
    await res.status(400).json({ message: err })
  }
}
module.exports = {
  getAlltoDos,
  getTodosById,
  createTodo,
  updateToDo,
  deleteToDo,
  getAllCompletedToDos
}