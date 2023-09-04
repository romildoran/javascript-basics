/* 
En JavaScript, normalmente solo puedes tener un constructor en una clase. El constructor es un método especial que se llama cuando creas una nueva instancia de una clase. Sin embargo, puedes lograr el efecto de múltiples constructores utilizando técnicas como argumentos opcionales o valores por defecto. Aquí tienes un ejemplo:
*/

class Persona {

    // Método estático que funciona como un segundo constructor
    static SegundoConstructor({ nombre, apellido, pais }) {
        // Llama al constructor principal con los valores proporcionados
        return new Persona(nombre, apellido, pais);
    }

    // Constructor principal
    constructor(nombre, apellido, pais) {
        // Inicializa las propiedades de la instancia
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }

    // Método para obtener información de la persona
    getInfo() {
        console.log(`Info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }
}

// Definición de valores para crear una instancia de Persona
const nombre1 = 'Melissa',
    apellido1 = 'Flores',
    pais1 = "Honduras";

// Crear una instancia de Persona utilizando el constructor principal
const persona1 = new Persona(nombre1, apellido1, pais1);

// Llamar al método getInfo() para mostrar información de persona1
persona1.getInfo();

// Definición de un objeto con información de persona
const fernando = {
    nombre: "Fernando",
    apellido: "Herrera",
    pais: "Costa Rica",
}

// Crear una instancia de Persona utilizando el método estático SegundoConstructor
const persona2 = Persona.SegundoConstructor(fernando);

// Llamar al método getInfo() para mostrar información de persona2
persona2.getInfo();


/* 
Este código muestra cómo puedes utilizar un método estático como un "segundo constructor" para crear instancias de una clase utilizando un formato diferente al del constructor principal. En este caso, podemos proporcionar un objeto con propiedades en lugar de argumentos individuales.
*/