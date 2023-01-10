

const getAllTodos = (req, res) => {
    res.json({message: 'obteniendo todos los todos'})
}

const getTodosById = (req, res) => {
    res.json({message: 'obteniendo todos por id'})
}

const createTodos = (req, res) => {
    res.json({message: 'creando un nuevo todo'})
}

const updateTodos = (req, res) => {
    res.json({message: 'actualzando un todo'})
}

const deleteTodos = (req, res) => {
    res.json({message: 'obteniendo todos los todos'})
}

module.exports = {
    getAllTodos,
    getTodosById,
    createTodos,
    updateTodos,
    deleteTodos
}