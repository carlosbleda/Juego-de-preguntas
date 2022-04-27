import { Preguntas } from "../models/preguntas.js";
import { data } from "./datos.js";
export var coleccion = data
var arreglo = []
for (let i = 0; i < coleccion.length; i++) {
    const element = coleccion[i];

    if (i == 0) {
        var resultado = element[Math.floor(Math.random() * element.length)];
        const obj = new Preguntas(resultado.pregunta, resultado.opciones, resultado.respuesta, resultado.categoria);
        arreglo.push(obj)
        console.log(arreglo);
    } else if (i == 1) {
        var resultado = element[Math.floor(Math.random() * element.length)];
        const obj = new Preguntas(resultado.pregunta, resultado.opciones, resultado.respuesta, resultado.categoria);
        arreglo.push(obj)
    } else if (i == 2) {
        var resultado = element[Math.floor(Math.random() * element.length)];
        const obj = new Preguntas(resultado.pregunta, resultado.opciones, resultado.respuesta, resultado.categoria);
        arreglo.push(obj)
    } else if (i == 3) {
        var resultado = element[Math.floor(Math.random() * element.length)];
        const obj = new Preguntas(resultado.pregunta, resultado.opciones, resultado.respuesta, resultado.categoria);
        arreglo.push(obj)
    } else if (i == 4) {
        var resultado = element[Math.floor(Math.random() * element.length)];
        const obj = new Preguntas(resultado.pregunta, resultado.opciones, resultado.respuesta, resultado.categoria);
        arreglo.push(obj)
    }
}


console.log(arreglo);
export { arreglo }