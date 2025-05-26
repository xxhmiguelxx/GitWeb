const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();

//Manejo de peticion de http por medio de req
app.use(bodyParser.urlencoded({extended:false}));

//Configuracion de plantillas
app.set('view engine','ejs');

//conexion  DB
const db = mysql.createConnection({
    host: '127.0.0.1',
    user:'root',
    password: 'GUApero14',
    database: 'tareafinal',
    port: 3306
});

//validacion
db.connect(err => {
    if(err){
        console.error('Error en la conexion de la DB',err);
    }else{
        console.log('Conexion realizada de forma correcta :3');

    }
});

//inicio de server
const port = 5566;
app.listen(port,()=>{
    console.log(`http://127.0.0.1:${port}`);
});

//mostrar lista de usuarios
app.get('/',(req,res)=>{
    //consulta a la DB
    const consultaDB= 'SELECT *  FROM users';

    //trabajamos con la conexion
    db.query(consultaDB,(err,results)=>{
        if(err){
            //no se encontro el usuario o se tiene un error
            console.error('Error al recuperar Usuario',err);
            //Mostraremos informacion al usuario
            res.send('Error , no se recuperan los datos de la DB');
        }else{

            res.render('index',{ users: results});
           
        }

    });
});

//Modulo para agregar el usuario
app.post('/add',(req,res)=>{
    const {name, email}=req.body;
  
    const insertarRegistro= 'INSERT INTO users (name, email) VALUES (?,?)';
    
    db.query(insertarRegistro,[name,email],(err)=>{
       if(err){
        console.error('Error al agregar usuario:',err);
        res.send('Error');
    } else{
        res.redirect('/');

       }
    });
});

//edit
app.get('/edit/:id',(req,res)=>{
    const {id}= req.params;
   const buscarUsuarioID = 'SELECT * FROM users WHERE id = ?';
   
   db.query(buscarUsuarioID,[id],(err,results)=>{
        if(err){
            console.error('Error en la DB',err);
        }else{
            res.render('edit',{ user: results[0]});
        }
   });
});

//update

app.post('/update/:id',(req,res)=>{
    const {id} = req.params;
    const {name,email}= req.body;

    const query= "UPDATE users SET name = ?, email = ?  WHERE id =?";
    db.query(query,[name,email,id],(err)=>{
            if(err){
                console.error('error',err);
            }else{
                res.redirect('/');
            }
    });
});

//delete

app.get('/delete/:id',(req,res) =>{

    const {id}=req.params;
    const eliminarUsuarioId='DELETE FROM users WHERE id =?';
    db.query(eliminarUsuarioId, [id], (err)=>{

        if(err){
            console.error('Error al eliminar de DB', err)
        }else{

            res.redirect('/');
        }

    });
});