const express =require('express');


const { home, getAllTodos, getSingleTodo, postNewTodo, updateTodo, deleteTodo } = require('../controllers/todoControllers');
const router =express.Router();

router.get('/', home)
// GET all todos
router.get('/todos',getAllTodos)

  // GET a single todo
router.get('/todos/:id', getSingleTodo)
  
  // POST a new todo
  router.post('/todos', postNewTodo)
  
  // PUT(update) a todo
  router.put('/todos/:id', updateTodo)
  
  // DELETE a todo
  router.delete('/todos/:id', deleteTodo)
module.exports ={
router
}
