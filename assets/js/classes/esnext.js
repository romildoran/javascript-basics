/* 
En JavaScript, las propiedades privadas se introdujeron a partir de ECMAScript 2022 (también conocido como ES12) y son una característica que permite definir propiedades que no son accesibles desde fuera de la clase.
*/

/* 
Para aplicar el concepto de propiedades privadas en tu código, vamos a modificar la propiedad area para que sea privada y solo pueda ser accedida y modificada desde dentro de la clase Rectangulo. Esto se hace utilizando el símbolo # antes del nombre de la propiedad. 
*/


class Rectangulo {
    #area = 0; // Propiedad privada

    constructor(base = 0, altura = 0) {
        this.base = base;
        this.altura = altura;

        this.#area = base * altura; // Acceso a la propiedad privada
    }

    obtenerArea() {
        return this.#area; // Método para acceder a la propiedad privada
    }
}

const rectangulo = new Rectangulo(10, 15);

console.log(rectangulo.obtenerArea()); // Usamos el método para obtener el área

/* 
En este código, hemos definido #area como una propiedad privada, lo que significa que solo puede ser accedida desde dentro de la clase Rectangulo. Hemos creado un método obtenerArea() que permite obtener el valor de la propiedad privada #area desde fuera de la clase.

Este enfoque garantiza que la propiedad #area no pueda ser modificada directamente desde fuera de la clase, lo que es útil para proteger datos críticos y mantener la integridad de los valores. Puedes acceder al área del rectángulo utilizando el método obtenerArea() desde fuera de la clase, como se muestra en el ejemplo.
*/