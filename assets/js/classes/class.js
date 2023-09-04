
//Se recomienda nombrar las clases con las iniciales en mayuscula
class PersonaNatural {
    //estas son las propiedades:
    //todas las propiedades en JS tienen el 'use strict' ya implementado

    static _conteo = 0; //popiedad estatica.
    static get conteo() {
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
    set setComidaFavorita(comida) {
        this.comida = comida.toUpperCase();
    }
    //Get
    // sirve para recuperar un valor
    get getComidaFavorita() {
        //en un get es bueno retornar algo
        return `La comida favorit de ${this.nombre} es ${this.comida}`
    }

    //Metodos:
    //se acostumbra crear los metodos despues del construcctor
    //Los metodos son funciones que se ejecutan dentro del contexto de la clase, dentro de la instancia de la clase

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
/*  
## segun las buenas practicas para organizar el código dentro de una clase es el siguiente:
- Propiedades y Métodos Estáticos, Se definen con la palabra clave static.
- Propiedades de la Clase: Estas son las variables que almacenan datos específicos de cada instancia de la clase. Deben estar declaradas después de los miembros estáticos. 
- Constructor, Se utiliza para inicializar las propiedades de la instancia. 
- Sets y Gets: Los métodos get y set se utilizan para acceder y modificar las propiedades de la clase.
- Métodos: Los métodos son las funciones que realizan acciones o cálculos en la instancia de la clase. 

class MiClase {
    static metodoEstatico() {
        // ...
    }
    
    propiedadDeClase = 0;
    
    constructor(parametro1, parametro2) {
        this.propiedad1 = parametro1;
        this.propiedad2 = parametro2;
    }
    
    get obtenerPropiedad1() {
        return this.propiedad1;
    }
    
    set establecerPropiedad1(valor) {
        this.propiedad1 = valor;
    }
    
    metodo1() {
        // ...
    }
    
    metodo2() {
        // ...
    }
}

*/


