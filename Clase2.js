class Rectangulo{

    constructor(ancho, alto){
     this.ancho = ancho;
     this.alto = alto;
    }

    calcularArea(){
        return this.ancho * this.alto;
    }

    perimetroRectangulo() {
        return 2 * (this.ancho + this.alto);
    }
}


let rectangulo = new Rectangulo(5, 10);
console.log("Área del rectángulo:", rectangulo.calcularArea());
console.log("Perímetro del rectángulo:", rectangulo.perimetroRectangulo());












