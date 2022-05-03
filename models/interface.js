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
    mostrarpuntos(score) {
        const HTML = `
          <h1>Juego Terminado</h1>
          <h2 id="score">Su Puntaje: ${score}</h2>
          <div>
          <label for="">Ingrese su nombre</label>
          <input type="text" id="nombre">
          <input type="button" value="Guardar puntaje">
          </div>
          `;

        const element = document.getElementById("categoria");
        element.append(salir)
        element.innerHTML = HTML;
    }
    mostrarjugador() {

    }

    progreso(indice, total) {
        var element = document.getElementById("progreso");
        element.innerHTML = `Pregunta ${indice} de ${total}`;

    }
    dificultad(dificultad) {

        var element = document.getElementById("dificultad");
        element.innerHTML = `Dificultad: ${dificultad} `;


    }
}