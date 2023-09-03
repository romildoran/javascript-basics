
//Se recomienda nombrar las clases con las iniciales en mayuscula
class PersonaNatural {
    //estas son las propiedades:
    //todas las propiedades en JS tienen el 'use strict' ya implementado

    static _conteo = 0; //popiedad estatica.
    static get conteo(){
        return PersonaNatural._conteo + ' Instancias';
    }
    
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    //el construcctor es un metodo que se va a ejecutar en el momento en que se crea una nueva instancia
    //cuando se termine de ejecutar el constructor va aregresar una nueva instancia de nuestra clase
    //el constructor es el unico metodo que retorna una instancia de un objeto y no retorna undefined
    constructor(nombre = 'Sin nombre', codigo = 'Sin código', frase = 'Sin frase') {

        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;

        PersonaNatural._conteo++; 

    }

    //Sets
    // sirve para establecer un valor
    set setComidaFavorita( comida ){
        this.comida = comida.toUpperCase();
    }
    //Get
    // sirve para recuperar un valor
    get getComidaFavorita(){
        //en un get es bueno retornar algo
        return `La comida favorit de ${this.nombre} es ${this.comida}`
    }

    //Metodos:
    //se acostumbra crear los metodos despues del construcctor
    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }

}

const spiderman = new PersonaNatural('Peter Parker', 'Spiderman', 'Soy tu amigable vecino Spiderman');
const ironman = new PersonaNatural('Tony Stark', 'Ironman', 'Yo soy Ironman');

//para utilizar el metodo es:
spiderman.miFrase();
//lamando al set
spiderman.setComidaFavorita = 'El pie de cereza de la tía May';
//spiderman.nemesis = 'Duende Verde';

//console.log(spiderman.getComidaFavorita);

//console.log(spiderman);

// PersonaNatural._conteo = 2;
console.log('Conteo estático', PersonaNatural._conteo);
console.log(PersonaNatural.conteo); 