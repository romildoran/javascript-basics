/* 
Un Singleton en JavaScript es un patrón de diseño que asegura que una clase tenga solo una instancia y proporciona un punto de acceso global a esa instancia. Esto significa que, aunque puedas crear múltiples objetos a partir de una clase Singleton, siempre obtendrás la misma instancia, y esta se compartirá en toda tu aplicación. El Singleton se utiliza comúnmente para gestionar recursos compartidos, como conexiones a bases de datos, configuraciones globales o registros.
*/

class Singleton {

    static instancia; // Define una propiedad estática para almacenar la instancia única.
    nombre = ""; // Propiedad para almacenar un nombre en la instancia.

    constructor(nombre = "") {
        // En el constructor, puedes proporcionar un nombre opcional.

        const a = undefined; // Declara una variable 'a' como undefined.
        console.log(a); // Imprime 'undefined' en la consola.
        console.log(!a); // Imprime 'true' en la consola (negación de undefined).
        console.log(!!a); // Imprime 'false' en la consola (doble negación de undefined).

        if (!!Singleton.instancia) { // Comprueba si la propiedad estática 'instancia' tiene un valor.
            return Singleton.instancia; // Si 'instancia' ya tiene un valor, retorna la misma instancia.
        }

        Singleton.instancia = this; // Asigna la instancia actual a la propiedad estática 'instancia'.
        this.nombre = nombre; // Asigna el nombre proporcionado al objeto actual (instancia).

    }

}

const instancia1 = new Singleton("Ironman"); // Crea la primera instancia llamada 'instancia1' con el nombre "Ironman".
const instancia2 = new Singleton("Spiderman"); // Intenta crear otra instancia, pero como Singleton ya tiene una instancia, se devuelve la instancia1.
const instancia3 = new Singleton("Punisher"); // Intenta crear otra instancia, pero como Singleton ya tiene una instancia, se devuelve la instancia1.

console.log(`El nombre en la instancia 1 es: ${instancia1.nombre}`); // Imprime "El nombre en la instancia 1 es: Ironman".
console.log(`El nombre en la instancia 2 es: ${instancia2.nombre}`); // Imprime "El nombre en la instancia 2 es: Ironman".
console.log(`El nombre en la instancia 3 es: ${instancia3.nombre}`); // Imprime "El nombre en la instancia 3 es: Ironman".
