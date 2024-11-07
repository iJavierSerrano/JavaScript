class Empleado {
    constructor(nombre, salario, puesto) {
        this.nombre = nombre;
        this.salario = salario;
        this.puesto = puesto;
    }

    incrementarSalario() {
        this.salario += 100000;
        return `El salario de ${this.nombre} ha sido incrementado en 100000.`;
    }

    datosEmpleados() {
        return `El empleado ${this.nombre} tiene un salario de ${this.salario} y ocupa un puesto como ${this.puesto}.`;
    }
}

let empl = new Empleado("Javier", 500000, "Despachos");
console.log(empl.incrementarSalario());
console.log(empl.datosEmpleados());

