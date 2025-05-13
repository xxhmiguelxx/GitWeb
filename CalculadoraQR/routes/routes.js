const express= require('express');
const path= require('path');

const router = express.Router();


//Inicio

router.get("/", (req, res) =>{

    res.sendFile(path.join(__dirname, "../views/index.html"));

});


//QR

router.get("/qr", (req, res) =>{

    res.sendFile(path.join(__dirname, "../views/qr.html"));

});

//Calculadora

router.get("/calculadora", (req, res) =>{

    res.sendFile(path.join(__dirname, "../views/calculadora.html"));

});

module.exports=router;

