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
            console.log(opciones[Math.floor(Math.random() * opciones.length)]);
            const nuevoboton = document.createElement('button');
            nuevoboton.innerText = opciones[i];
            nuevoboton.className = 'botones';

            nuevoboton.addEventListener('click', () => callback(opciones[i]));
            botones.append(nuevoboton)



        }
    }
    mostrarpuntos(score) {
        const HTML = `
          <h1>Result</h1>
          <h2 id="score">Your scores: ${score}</h2>
          <input type="button" value="Volver a Jugar"  id="reinicio">
          
          `;


        const element = document.getElementById("categoria");
        element.innerHTML = HTML;
    }
    progreso(indice, total) {
        var element = document.getElementById("progreso");
        element.innerHTML = `Pregunta ${indice} de ${total}`;

    }
}