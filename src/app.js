// importar express
const express = require('express');
const db = require('./utils/database');
const initModels = require('./models/init.model');
const Users = require('./models/users.model');
const Todos = require('./models/todos.models');

// crear una instancia de express
const app = express();

app.use(express.json());

const PORT = 8000;

//probando la coneccion a la base de datos
db.authenticate()
    .then(() => console.log('autenticacion exitosa'))
    .catch((error) => console.log(error))

initModels();
//vamos usar el metodo sync para sincronizar la info de nuestra db
db.sync({ force: false }) //debuelve una pomesa y la resolvemos con .then
    .then(() => console.log('base de datos sincronizada'))
    .catch((error) => console.log(error))


app.get('/', (req, res) => {
    res.status(200).json({ message: "bienvenidos al servidor" })
});

//definir  las rutas de nuestros endpoints (de ahora en adelante ep)
// todas las consultas de usuarios 
// localhost:8000/users ---> todo para usuarios
// localhost:8000/todos --> todo para tareas

//GET a users
app.get('/users', async (req, res) => {
    try {
        //vamos a obtener el resltado de consultar todos los usuarios de la db
        const result = await Users.findAll(); //select * from toto
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
});

//Obtner un usuario sabiendo su id

app.get("/users/:id", async (req, res) => {
    try {
        console.log(req.params);
        const { id } = req.params;
        const result = await Users.findByPk(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
});

//obtener uduario por username

app.get("/users/username/:username", async(req, res) => {
    try {
        const {username} = req.params;
        const result = await Users.findOne({where: {username}});
        res.status(200).json(result)
    } catch (error) {
        console.log(error);
    }
})

//creando usuarios

app.post("/users", async (req, res) => {
    try {
      const user = req.body;
      const result = await Users.create(user);
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json(error.message);
      console.log(error);
    }
  });
  
  // actualizar un usuario, solo podemos cambiar password
  app.put("/users/:id", async (req, res) => {
    try {
      const { id } = req.params; // { id: 2 }
      const field = req.body;
      const result = Users.update(field, {
        where: { id },
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error.message);
    }
  });
  

// eliminar

app.delete("/users/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Users.destroy({
        where: { id },
      });
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json(error.message);
    }
  });
  
  app.get('/todos', async (req, res) => {
    try{
        const result = await Todos.findAll();
        res.status(200).json(result);
    }catch(error){
        console.log(error);
    }
});

app.get('/todos/:id', async (req, res)=> {
    try {
        const {id} = req.params;
        const result = await Todos.findByPk(id);
        res.status(200).json(result);
    } catch (error) {
        console.log(error);
    }
});

app.post('/todos', async (req, res) => {
    try{
        const todos = req.body;
        const result = await Todos.create(todos);
        res.status(201).json(result);
    }catch(error){
        console.log(error);
    }
});

app.put('/todos/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const field = req.body;
        const result = await Todos.update(field, {
            where: {id}
        });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
});

app.delete('/todos/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const result = await Todos.destroy({
            where: {id}
        });
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
});


app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`);
});


//vamos a terminar los modelos rapido
// crear las relaciones entre los modelos
//aprenderemos a insertar informacion desde este mismo proyecto

//vamos hacer los empois y consultas

// users


//vamos  a insertar informacion en nuestra base de datos desde nuestro proyecto en node

//consultar  la informacion con endpoinst



