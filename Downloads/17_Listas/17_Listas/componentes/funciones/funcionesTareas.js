import contenedorTareas from "../contenedorTareas.js"
import tareaInput from "../tareaInput.js";

function agregarTarea(input) {
    const tarjeta = document.createElement("div");
    const textoTarea = input.value;
    const parrafoTarea = document.createElement("p")
    parrafoTarea.textContent = textoTarea;
    if (textoTarea === "") {
        alert("La tarea no puede estar vacía.");
        return;
    }

    const botonActualizar = document.createElement("button");
    botonActualizar.textContent = "Actualizar";
    botonActualizar.style = `
    color: white;
    background-color: green;
    `;
    botonActualizar.addEventListener("click", () => actualizarTarea(input, parrafoTarea))

    const tacharTarea = document.createElement("input");
    tacharTarea.type = "checkbox";

    tacharTarea.addEventListener("change", () => tareaTachada(tacharTarea, parrafoTarea))


    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "eliminar";
    botonEliminar.style = `
    color: white;
    background-color: red;
    `;
    botonEliminar.addEventListener("click", () => eliminarTarea(tarjeta));
    tarjeta.append(parrafoTarea, botonActualizar, botonEliminar, tacharTarea);
    contenedorTareas.append(tarjeta);


    // input.value = "";
    input.value = null;
}

function actualizarTarea(nuevaTarea, tarea) {
    tarea.textContent = nuevaTarea.value;
    nuevaTarea.value = "";
    nuevaTarea.placeholder = "Tarea actualizada!";
    setTimeout(() => {
        nuevaTarea.placeholder = "Ingresa tu tarea";
    }, 3000);
}

function tareaTachada(input, tarea) {
    if(input.checked){
        tarea.style= `
        font-size: 1rem;
        text-decoration: line-through;
        `;
    }else{
        tarea.style=
            `font-size: 1rem;`
    }
}

function eliminarTarea(tarjetaTarea) {
    tarjetaTarea.remove();
}

function eliminartodas(){
    contenedorTareas.innerHTML="";
    alert("todas las tareas fueron eliminadas...");
}








// function eliminarTarea(componentes) {
//     componentes.forEach((comp) => {
//         comp.remove();
//     });
//     // tarea.remove();// elimina el boton
//     // botonE.remove();// elimina la tarea
//     // botonA.remove();
// }

export { agregarTarea, eliminarTarea, eliminartodas };
