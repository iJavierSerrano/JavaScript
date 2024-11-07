class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Método para obtener datos personales
    datosPersonales() {
        return `Mi nombre es ${this.nombre} y tengo ${this.edad} años.`;
    }

    // Método para verificar si es mayor o menor de edad
    edadPropiedad() {
        return this.edad >= 18 ? "Es mayor de edad." : "Es menor de edad.";
    }
}

// Crear un objeto de la clase Persona
let propi = new Persona("Javier", 30);
console.log(propi.datosPersonales());
console.log(propi.edadPropiedad());
