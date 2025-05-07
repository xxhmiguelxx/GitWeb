const express=require('express');

const router = express.Router();

const path=require('path');


//definimos rutas y manejadores


router.get("/", (req, res)=>{

    res.sendFile(path.join(__dirname, "../views/index3.html"));

})



module.exports=router;