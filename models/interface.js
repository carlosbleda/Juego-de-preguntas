export class Interface {
    constructor() {}
        /**
         * 
         * @param {string} pregunta recibe una pregunta para mostrar en pantalla
         */
    mostrarpreguntas(pregunta) {
            const mostrar = document.getElementById('preguntas')
            mostrar.innerHTML = pregunta

        }
        /**
         * 
         * @param {string[]} opciones recibe un arreglo de opciones
         */
    mostraropciones(opciones, callback) {
        let botones = document.getElementById('opciones');
        botones.innerHTML = '';
        for (let i = 0; i < opciones.length; i++) {
            const nuevoboton = document.createElement('button');
            nuevoboton.innerText = opciones[i];
            nuevoboton.className = 'botones';

            nuevoboton.addEventListener('click', () => callback(opciones[i]));
            botones.append(nuevoboton)

        }
    }
    mostrarpuntos() {

    }
    progreso(indice, total) {
        const elemento = document.getElementById('progreso')
    }
}