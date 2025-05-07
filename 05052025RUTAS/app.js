const express= require('express');


const routes= require('./routes/rutas')

const app= express();

const port=5023;

app.use("/", routes)

app.listen(port, ()=>{

    console.log(`http://127.0.0.1:${port}`)
});


