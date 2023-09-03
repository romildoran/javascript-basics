/* 
function crearPersona(nombre, apellido) {
    return { nombre, apellido, }
} 
*/

//convirtiendo esa funcion en una funcion de flecha:
const crearPersona = (nombre, apellido) => ({ nombre, apellido, });

const persona = crearPersona('Ronald', 'Duarte');
console.log(persona);

//funcion tradicional:
function imprimeArgumentos() {
    console.log(arguments);
}

const imprimeArgumentos2 = (edad, ...arguments) => {
    console.log(edad, arguments);
}

imprimeArgumentos(10, true, false, 'Ronald Duarte', 'Hola',);

imprimeArgumentos2(10, true, false, 'Ronald Duarte', 'Hola',);
