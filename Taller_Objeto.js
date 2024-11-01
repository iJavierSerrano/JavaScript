const Inventario_Tienda = [
    { nombre: "Aguardiente Amarillo", precio: 40.000, cantidad: 50 },
    { nombre: "Aguardiente Antioqueño", precio: 50.000, cantidad: 80 },
    { nombre: "Aguardiente Blando del Valle", precio: 70.000, cantidad: 10 }
 ];
    // Agregar un producto
    
    function agregarProducto(nombre, precio, cantidad) {
    Inventario_Tienda.push({ 
        nombre: nombre, 
        precio: precio, 
        cantidad: cantidad });
}

    agregarProducto("Aguardiente Cristal", 60000, 30);
    console.table(Inventario_Tienda);

    // Actualizar la cantidad

    actualizarcantidad = function (nombre, cantidad) {
        for (let i = 0; i < this.productos.length; i++) {
          if (this.productos[i].nombre === nombre) {
            this.productos[i].cantidad = cantidad;
          }
        }
    }
               

    
    
 console.log(["bienvenidos a mi tienda"]);
 console.log(tienda.nombre);

 console.log("agregando producto");
 tienda.agregarProducto("calabaza", 4500, 200), console.table(tienda.productos);

 console.log("tabla actualizada")
 tienda.actualizarcantidad("Máscara de Halloween", 10), console.table(tienda.productos);