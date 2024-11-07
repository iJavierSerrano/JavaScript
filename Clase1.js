class Gocu {
    constructor(nombre, nivel) {
        this.nombre = nombre;
        this.nivel = nivel; // Nivel actual de la transformación
    }

    mostrarTransformacion() {
        return `${this.nombre} está en la transformación: ${this.nivel}`;
    }

    transformar(nuevaTransformacion) {
        this.nivel = nuevaTransformacion;
        return `${this.nombre} se ha transformado en ${this.nivel}!`;
    }

    volverFormaBase() {
        this.nivel = "base";
        return `${this.nombre} ha vuelto a su forma base.`;
    }
}
//imrpimir

let gocu = new Gocu("Gocu", "base");
console.log(gocu)
console.log(gocu.mostrarTransformacion());
console.log(gocu.transformar("Super Saiyajin"));
console.log(gocu.transformar("Super Saiyajin Fase 2"));
console.log(gocu.transformar("Super Saiyajin Fase 3"));
console.log(gocu.transformar("Super Saiyajin Fase 4"));
console.log(gocu.volverFormaBase());

console.log("Hola mundo")

