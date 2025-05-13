//Importar express
const express=require('express');

//Importar path
const path = require('path');

//Importar rutas
const routes=  require("./routes/routes");

//Instanciar
const app=express();

//Definir puerto
const port=45678;

app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes);

app.listen(port, ()=>{

    console.log(`Corriendo en http://localhost:${port}`);
    
    
});
