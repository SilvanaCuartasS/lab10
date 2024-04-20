import { cargaInformacion } from "./utils.js";

const render = async () => {

    let contador = 0;

    const respuesta = await cargaInformacion();
    console.log(respuesta);

    const contenedor = document.querySelector("#info");
    contenedor.classList.add("productos");

    // Crea un elemento para mostrar el mensaje del contador
    const mensajeContador = document.createElement("div");
    mensajeContador.classList.add("mensaje-contador");
    contenedor.appendChild(mensajeContador);

    for (const producto of respuesta.Productos) {
        const foto = document.createElement("div");
        foto.id = producto.id;
        foto.classList.add("producto");

        const divImagen = document.createElement("div");
        divImagen.classList.add("producto-img");

        const img = document.createElement("img");
        img.alt = producto.nombre;
        img.src = producto.imagen;

        divImagen.appendChild(img);
        foto.appendChild(divImagen);
        contenedor.appendChild(foto);

        const botonAgregar = document.createElement("button-script");
        botonAgregar.textContent = "Agregar al Carrito";

        botonAgregar.addEventListener("click", () => {
            contador++;
            mensajeContador.textContent = `Productos en el carrito: ${contador}`;

            const botonRedireccion = document.createElement("button-script");
            botonRedireccion.textContent = hre;
        });

        foto.appendChild(botonAgregar);
    }

    const botonLimpiarContador = document.createElement("button-script");
    botonLimpiarContador.textContent = "Limpiar Contador";

    botonLimpiarContador.addEventListener("click", () => {
        contador = 0;
        mensajeContador.textContent = `Productos en el carrito: ${contador}`;
    });

    contenedor.appendChild(botonLimpiarContador);
};

document.addEventListener("DOMContentLoaded", render);
