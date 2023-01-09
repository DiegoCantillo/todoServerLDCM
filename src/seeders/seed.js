const db = require('../utils/database');
const Users = require('../models/users.model')
const Todos = require('../models/todos.models')

const users = [
    {username: 'DiegoCantillo', email: 'diegocantymez@email.com', password: '1234'},
    {username: 'pibecanti', email: 'pibemez@email.com', password: '1234'},
    {username: 'Luzandrea', email: 'luz@email.com', password: '1234'},
];

const todos = [
    {title: 'tarea 1', description: 'shalala shalala', userId: 1},
    {title: 'tarea 2', description: 'shalala shalala 2', userId: 1},
    {title: 'tarea imposible', userId: 2},
    {title: 'dormir zzZZzZ', description: 'porque node no me deja', userId: 3},
];

//const categories = []; 

//const TodosCategories = [];

// create
// findOne, findAll, findByPk
// update
// destry

db.sync({force: true})
    .then(() => {
        console.log('iniciando con el sembrado malicioso');
        users.forEach((user)=> Users.create(user));
        setTimeout(() => {
            todos.forEach((todo) => Todos.create(todo));
        }, 100);
    })
    .catch((error) => console.log(error));