const {Router} = require('express');
const  {getAllTodos, getTodosById, createTodos, updateTodos, deleteTodos} = require('../controllers/todos.controllers')

const router = Router();


router.get('/todos', getAllTodos);

router.get('/todos/:id', getTodosById)

router.post('/todos', createTodos);

router.put('/todos/:id', updateTodos);

router.delete('/todos/:id', deleteTodos);

module.exports = router;