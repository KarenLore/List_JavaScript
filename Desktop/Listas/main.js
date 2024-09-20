import botonEnviar from "../componentes/botonEnviar.js";
import crearTareaContendor from "../componentes/crearTareaContenedor.js";
import contenedorTareas from "./componentes/contenedorTareas.js"
import titulo from "../componentes/titulo.js";
import tareaInput from "../componentes/tareaInput.js";
import root from "./componentes/root.js";
import Tarea from "./clases/Tarea.js";
import botonEliminarTodas from "./componentes/eliminartodas.js";

const miTarea = new Tarea("Hola mundo");
miTarea.texto = "Karen";


root.append(miTarea.etiqueta);
root.append(titulo);
root.append(tareaInput);
root.append(botonEnviar);
root.append(botonEliminarTodas);
root.append(contenedorTareas);
root.append(crearTareaContendor);

