const Fher = {
    nombre: 'Fernando',
    edad: 30, 
    imprimir(){
        console.log(`nombre: ${ this.nombre } - edad: ${this.edad}`);
    }
}

const Pedro = {
    nombre: 'Pedro',
    edad: 15, 
    imprimir(){
        console.log(`nombre: ${ this.nombre } - edad: ${this.edad}`);
    }
}

const Melissa = {
    nombre: 'Melissa',
    edad: 35, 
    imprimir(){
        console.log(`nombre: ${ this.nombre } - edad: ${this.edad}`);
    }
}

Fher.imprimir();
Pedro.imprimir();
Melissa.imprimir();

//Esta funcion esta escrita en Uppercamelcase
//lo que puede indicar que es una funcion para crear instancias
function Persona(nombre, edad) {
    console.log('Se ejecutó esta línea');

    this.nombre = nombre;
    this.edad = edad;

    this.imprimir = function(){
        console.log(`nombre: ${ this.nombre } - edad: ${this.edad}`);
    }

    //Toda funcion en JS si no tiene un return explicito va a resultar en Undefined.
}

//la palabra reservada "new" indica que deseo crear una nueva instancia
const Maria = new Persona('María', 18);
const Kimberly = new Persona('Kimberly', 25);
//console.log(Maria);

Maria.imprimir();
Kimberly.imprimir();