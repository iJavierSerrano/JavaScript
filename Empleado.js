class Empleado {
    constructor(nombre, salario, puesto) {
        this.nombre = nombre;
        this.salario = salario;
        this.puesto = puesto;
    }

    // Método para incrementar el salario en porcentaje
    incrementarSalario(percentage) {
        const incremento = (this.salario * percentage) / 100;
        this.salario += incremento;
        return `El salario de ${this.nombre} ha sido incrementado en ${percentage}% (valor: ${incremento}). salario actual ${this.salario}`;
    }

    // Método para mostrar los datos del empleado
    mostrarDatos() {
        return `El empleado ${this.nombre} tiene un salario de ${this.salario} y ocupa un puesto como ${this.puesto}.`;
    }
}

// Crear un objeto Empleado
let empl = new Empleado("Javier", 500000, "Despachos");
console.log(empl.incrementarSalario(10)); // Incremento del 10%
console.log(empl.mostrarDatos());

// Ejemplo con un incremento personalizado
console.log(empl.incrementarSalario(5)); // Incremento del 5%
console.log(empl.mostrarDatos());


