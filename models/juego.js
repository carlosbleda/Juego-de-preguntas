//@ts-check
import { arreglo } from "../data/coleccion.js";
import { Preguntas } from "../models/preguntas.js";
export class Juego {
    i = 0
    puntos = 0
    jugador = 'Invitado'
        /**
         * 
         * @param {Preguntas[]} pregunta arreglo de preguntas
         */
    constructor(pregunta) {
            this.pregunta = pregunta
        }
        /**
         * 
         * @returns {Preguntas} pregunta encontrada
         */
    indice() {
            return this.pregunta[this.i]
        }
        /**
         * 
         * @param {string} respuesta 
         */
    eleccion(respuesta) {

        if (this.indice().respcorrecta(respuesta)) {
            this.puntos++;
        }
        this.i++;


    }
    Jugador() {
        if (this.jugador == 'invitado') {
            console.log(this.jugador);
        }
    }

    fin(actual, respuesta) {

        if (actual !== respuesta) {
            console.log(this.puntos);
        } else { return this.pregunta.length === this.i; }

    }


}