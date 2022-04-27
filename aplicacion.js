//@ts-check
import { Juego } from './models/juego.js'
import { arreglo } from './data/coleccion.js';
import { Interface } from "./models/interface.js";
import { Preguntas } from './models/preguntas.js';

/**
 * 
 * @param {Juego} nuevojuego objeto juego 
 * @param {Interface} mostrar 
 */
const renderizado = (nuevojuego, mostrar) => {
    if (nuevojuego.fin()) {
        mostrar.mostrarpuntos(nuevojuego.puntos);
        var element = document.getElementById('reinicio')
        element.addEventListener('click', () => {

        })
    } else {
        console.log(nuevojuego.puntos);
        const salir = document.getElementById('salir');
        console.log(salir);
        mostrar.mostrarpreguntas(nuevojuego.indice().pregunta);
        mostrar.progreso(nuevojuego.i + 1, nuevojuego.pregunta.length);
        mostrar.mostraropciones(nuevojuego.indice().opciones, (actual) => {
            nuevojuego.eleccion(actual)
            renderizado(nuevojuego, mostrar);
        });

    }
}
const inicio = () => {
    var botoninicio = document.getElementById('inicio');
    var salir = document.getElementById('salir');
    salir.style.display = 'none';
    botoninicio.addEventListener('click', () => {
        botoninicio.style.display = 'none';
        salir.style.display = 'inline'
        salir.className = 'botones'

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