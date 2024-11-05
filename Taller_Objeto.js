// Gestión de Inventario de Tienda

const Inventario_Tienda = {
  productos: {
      "Aguardiente Amarillo": { precio: 40000, cantidad: 50 },
      "Aguardiente Antioqueño": { precio: 50000, cantidad: 80 },
      "Aguardiente Blando del Valle": { precio: 70000, cantidad: 10 }
  },

  // Método para agregar un producto al inventario
  agregarProducto: function(nombre, precio, cantidad) {
      this.productos[nombre] = { precio: precio, cantidad: cantidad };
  },

  // Método para actualizar la cantidad de un producto existente
  actualizarCantidad: function(nombre, cantidad) {
      if (this.productos[nombre]) {
          this.productos[nombre].cantidad = cantidad;
      } else {
          console.log(`Producto "${nombre}" no encontrado en el inventario.`);
      }
  },

  // Método para mostrar el inventario en una tabla
  mostrarInventario: function() {
      console.table(this.productos);
  }
};

// Llamadas a los métodos para probar el funcionamiento
console.log("Bienvenidos a mi tienda");

// Mostrar el inventario inicial
Inventario_Tienda.mostrarInventario();

// Agregar un nuevo producto
console.log("Agregando producto...");
Inventario_Tienda.agregarProducto("Aguardiente Cristal", 60000, 30);
Inventario_Tienda.mostrarInventario();

console.log("Agregando producto...");
Inventario_Tienda.agregarProducto("Aguardiente Tapa Roja", 10000, 4);
Inventario_Tienda.mostrarInventario();

// Actualizar la cantidad de un producto
console.log("Actualizando cantidad...");
Inventario_Tienda.actualizarCantidad("Aguardiente Blando del Valle", 20);
Inventario_Tienda.mostrarInventario();
