let Todos = require('../model/todos')
function getAlltoDos() {
  return Todos.find();
}
function getTodosById(id) {
  return Todos.findById(id)
}
function getAllCompletedToDos() {
  return Todos.find({ completed: true })
}

function saveToDo(todo) {
  console.log("savetodoservie", todo)
  let newToDo = new Todos({
    title: todo.title,
    completed: todo.completed
  });
  console.log("savetodoservie model", newToDo)

  return newToDo.save();
}

function updateToDo(id, todo) {
  let updateToDo = Todos.findByIdAndUpdate(id, todo, { new: true });
  return updateToDo
}

function deleteToDo(id) {
  let deleteToDo = Todos.findByIdAndDelete(id)
  return deleteToDo
}

module.exports = {
  getAlltoDos,
  getTodosById,
  saveToDo,
  updateToDo,
  deleteToDo,
  getAllCompletedToDos
}