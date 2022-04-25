//@ts-check
import { Juego } from './models/juego.js'
import { arreglo } from './data/coleccion.js';
import { Interface } from "./models/interface.js";

/**
 * 
 * @param {Juego} nuevojuego objeto juego 
 * @param {Interface} mostrar 
 */
const renderizado = (nuevojuego, mostrar) => {
    if (nuevojuego.fin()) {
        console.log(nuevojuego.puntos);
    } else {

        mostrar.mostrarpreguntas(nuevojuego.indice().pregunta);

        mostrar.mostraropciones(nuevojuego.indice().opciones, (actual) => {
            nuevojuego.eleccion(actual)
            renderizado(nuevojuego, mostrar);
        });

    }
}
const inicio = () => {
    var botoninicio = document.getElementById('inicio');
    botoninicio.addEventListener('click', () => {
        botoninicio.style.display = 'none'
        principal();
    })
}
inicio();

function principal() {
    console.log(arreglo);
    var nuevojuego = new Juego(arreglo);
    const mostrar = new Interface();
    renderizado(nuevojuego, mostrar);

}