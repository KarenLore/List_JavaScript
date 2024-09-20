import { eliminartodas } from "./funciones/funcionesTareas.js";

const botonEliminarTodas = document.createElement("button");
botonEliminarTodas.id = ("delete")

botonEliminarTodas.textContent="Eliminar todas las tareas";

botonEliminarTodas.addEventListener("click", eliminartodas);

export default botonEliminarTodas;