//arreglo de 5 componentes promedio de las mismas 

const ejemplo = [1.80 , 1.70 ,1.15,2.00 ,1.40 ,]
console.log("recorrer ejemplo con for")
let suma = 0;
for (let i = 0; i < ejemplo.length; i++) {
    console.log(ejemplo[i])
    suma += ejemplo[i];
}
console.log("la suma de los valores es: ", suma)
let promedio = suma/ejemplo.length 
console.log("el promedio de los valores es: ", promedio)

//ejercicio frutas 

let frutas = ["uva", "banano", "piña" ,"papaya"];
console.log(frutas)
console.log("encontrar la posicion de papaya")
let posicion = frutas.indexOf("papaya");
console.log("la posicion de papaya es: ", posicion)

//agregar coco al final 
frutas.push("coco")
console.log("agregar coco al final: ", frutas)

//agregar ciruela al inicio 
frutas.unshift("ciruela")
console.log("agregar ciruela al inicio: ", frutas)

//eliminar el primer elemento (ciruela)
frutas.shift("ciruela")
console.log("eliminar ciruela: ", frutas)

//eliminar el ultimo elemento (coco)
frutas.pop()
console.log("eliminar coco: ", frutas)

console.log("queda el arreglo en frutas " , frutas)

