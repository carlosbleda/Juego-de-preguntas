//@ts-check
export class Preguntas {
    /**
     * 
     * @param {string} pregunta aqui se ingresa una pregunta 
     * @param {string[]} opciones aqui se ingresan las opciones
     * @param {string} respuesta aqui se ingresa una respuesta correcta
     * @param {string} categoria aqui se ingresa la categoria
     */
    constructor(pregunta, opciones, respuesta, categoria) {
        this.pregunta = pregunta;
        this.opciones = opciones;
        this.categoria = categoria
        this.respuesta = respuesta;

    }

    respcorrecta(respuesta) {
        return this.respuesta === respuesta


    }

}