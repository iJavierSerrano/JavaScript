 
 
 const usuario = {

    nombre: "Javier",
    edad: 25,
    trabaja: true, 

    saludar(){
      console.log(`Hola, mi nombre es${this.nombre} y tengo ${this.edad} años.`);

   }   
}
    // Imprimir las propiedades de un objeto:
    console.log(usuario);

    // Imprimir propiedades por separado:
    console.log(usuario.nombre);
    console.log(usuario.edad);
    console.log(usuario.trabaja);

    

    // Agregar atrubutos
    usuario.carrera = "ING de sistemas"
    console.log(usuario)

   
