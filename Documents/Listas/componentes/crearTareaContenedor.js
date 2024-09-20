import tareaInput from "../componentes/tareaInput.js";
import botonEnviar from "../componentes/botonEnviar.js";
import { agregarTarea } from "../componentes/funciones/funcionesTareas.js";


const crearTareaContendor = document.createElement("div");

botonEnviar.addEventListener("click", () => agregarTarea(tareaInput));

crearTareaContendor.append(tareaInput);
crearTareaContendor.append(botonEnviar);

export default crearTareaContendor;
