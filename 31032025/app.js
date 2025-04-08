let inventario =[];
function mostrarMenu(){

 return parseInt(prompt(

    "Opciones disponibles: \n"+
    "1.- Agregar producto \n"+
    "2.- Mostrar todos los productos \n"+
    "3.- Buscar producto por nombre \n"+
    "4.- Salir \n"+
    "Elige una opción: "


 ));  
}

//FUNCIONES

function agregarProducto(){
    console.log("En proceso");

    let nombreProducto= prompt("Introduzca el nombre del producto: ");
    let cantidadProducto= parseInt(prompt("Introduzca la cantidad del producto: "));
    let precioProducto= parseInt(prompt("Introduzca el precio del producto: "));

if(cantidadProducto>0 && precioProducto>0){

    let producto={

        nombre: nombreProducto,
        cantidad: cantidadProducto,
        precio: precioProducto

    };
    inventario.push(producto);
    alert("Producto agregado");

}else{

    alert("Cantidad y precio tiene que ser positiva");
}

    //console.log(producto);
}

    
  




function mostrarProducto(){

    if(inventario.length ===0){
        alert("No hay productos en el inventario");
    }else{
        let mensaje="Productos en el inventario: ";

        for(let i=0; i<inventario.length; i++){

            mensaje+=`Producto: ${i+1}\n`
                    
                    `Nombre: ${inventario[i].nombre}\n`+
                    `Cantidad: ${inventario[i].cantidad}\n`+
                    `Precio: ${inventario[i].precio}\n`+
                    `--------------------------------\n`
            ;

        }

        alert(mensaje);
    }
    


}


function buscarProducto(){
    
    if (inventario.length === 0) {
        alert("No hay productos en el inventario para buscar.");
        return;
    }

    let buscar = prompt("ntroduce el nombre del producto a buscar:");
    let resultados = inventario.filter(producto =>
        producto.nombre.toLowerCase().includes(buscar.toLowerCase())
    );

    if (resultados.length === 0) {
        alert("No se encontró ningún producto con ese nombre.");
    } else {
        let mensaje = "Productos encontrados:\n\n";
        for (let i = 0; i < resultados.length; i++) {
            mensaje += `Nombre: ${resultados[i].nombre}\n` +
                       `Cantidad: ${resultados[i].cantidad}\n` +
                       `Precio: ${resultados[i].precio}\n`;
        }
        alert(mensaje);
    }



}



function iniciarPrograma(){

    let continuar=true;
    while(continuar){

        let opcion = mostrarMenu();

        switch(opcion){

            case 1:
                agregarProducto();
                break; 
            case 2:
                mostrarProducto();
                break;
            case 3:
                buscarProducto();
                break;
            case 4: 
                alert("Saliendo del programa");
                continuar=false;
                break;
            
            default: 
                alert("Opcion incorrecta, intentalo de nuevo");
        }
    }
}

//SE INICIA PROGRAMA
iniciarPrograma();