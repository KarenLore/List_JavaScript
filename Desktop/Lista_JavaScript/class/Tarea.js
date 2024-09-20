class Tarea {
    #etiqueta = document.createElement("p");
    constructor(texto){
        this.#etiqueta.textContent = texto;
    }

    get etiqueta(){
        return this.#etiqueta;
    }

    set texto(nuevotexto) {
        if (nuevotexto == "") {
            return;
        }
        this.etiqueta.textContent = nuevotexto;
    }
}

export default Tarea;

