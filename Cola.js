class Nodo {
    constructor(valor) {
      this.valor = valor;   // Valor del nodo
      this.siguiente = null; // Puntero al siguiente nodo (null por defecto)
    }
  }
  
  // Ejemplo de uso
  const nodo1 = new Nodo(10);
  const nodo2 = new Nodo(20);
  
  // Conectamos nodo1 con nodo2
  nodo1.siguiente = nodo2;
  
  console.log(nodo1); // Nodo con valor 10 que apunta a nodo2
  console.log(nodo1.siguiente); // Nodo con valor 20



  class Cola {
    constructor() {
      this.items = []; // Usamos un array para almacenar los elementos de la cola
    }
  
    // Método para agregar un elemento al final de la cola
    encolar(elemento) {
      this.items.push(elemento);
    }
  
    // Método para eliminar el elemento del frente de la cola
    desencolar() {
      if (this.estaVacia()) {
        return "La cola está vacía";
      }
      return this.items.shift(); // Elimina el primer elemento del array
    }
  
    // Método para ver el primer elemento de la cola sin eliminarlo
    frente() {
      if (this.estaVacia()) {
        return "La cola está vacía";
      }
      return this.items[0];
    }
  
    // Método para verificar si la cola está vacía
    estaVacia() {
      return this.items.length === 0;
    }
  
    // Método para obtener el tamaño de la cola
    tamaño() {
      return this.items.length;
    }
  
    // Método para imprimir la cola
    imprimir() {
      console.log(this.items.toString());
    }
  }
  
  // Ejemplo de uso
  const cola = new Cola();
  
  cola.encolar(1);
  cola.encolar(2);
  cola.encolar(3);
  
  console.log("Elemento frente de la cola:", cola.frente()); // Salida: 1
  cola.imprimir(); // Salida: 1,2,3
  
  console.log("Elemento desencolado:", cola.desencolar()); // Salida: 1
  cola.imprimir(); // Salida: 2,3
  
  console.log("Cola está vacía:", cola.estaVacia()); // Salida: false
  console.log("Tamaño de la cola:", cola.tamaño()); // Salida: 2
  