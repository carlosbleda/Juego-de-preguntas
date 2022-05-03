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
    var botoninicio = document.getElementById('inicio');
    var salir = document.getElementById('salir');
    salir.style.display = 'none';

    botoninicio.addEventListener('click', () => {

        botoninicio.style.display = 'none';
        salir.style.display = 'inline'
        salir.className = 'botones'

        principal();
    })
    if (nuevojuego.fin()) {
        mostrar.mostrarpuntos(nuevojuego.puntos);
        var element = document.getElementById('reinicio')
        element.addEventListener('click', () => {
            inicio();
            element.className = 'botones'
        })
    } else {
        nuevojuego.Jugador()
        mostrar.mostrarpreguntas(nuevojuego.indice().pregunta);
        mostrar.dificultad(nuevojuego.indice().categoria)
        mostrar.progreso(nuevojuego.i + 1, nuevojuego.pregunta.length);
        console.log(nuevojuego.jugador);

        mostrar.mostraropciones(nuevojuego.indice().opciones, (actual) => {

            if (nuevojuego.indice().respcorrecta(actual) == false) {
                mostrar.mostrarpuntos(nuevojuego.puntos)
                nuevojuego.fin()

            } else {
                nuevojuego.eleccion(actual)
                renderizado(nuevojuego, mostrar);
            }

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
    var nuevojuego = new Juego(arreglo);
    const mostrar = new Interface();

    renderizado(nuevojuego, mostrar);

}