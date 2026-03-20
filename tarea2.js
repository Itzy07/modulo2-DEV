let listaDeCompras=["leche","pan","huevos","frutas"];

// Agregar nuevo producto a la lista de compras
const agregarCompras = () => {
    let nuevaCompra = prompt("Ingrese el nombre del producto que desea agregar:");

    // .includes() devuelve true si el producto ya está en el arreglo
    if (listaDeCompras.includes(nuevaCompra)) {
        console.warn("¡Aviso! El producto '" + nuevaCompra + "' ya está en la lista. No se agregará de nuevo.");
    } else {
        listaDeCompras.push(nuevaCompra);
        console.log("Producto agregado con éxito: " + nuevaCompra);
    }

    console.log("Lista de compras actual: ", listaDeCompras);
};


//Eliminar producto de la lista de compras
const eliminarCompras = () => {
    let productoAEliminar = prompt("¿Qué producto deseas eliminar?"); // Pedimos el producto
    let indice = listaDeCompras.indexOf(productoAEliminar);

    if (indice !== -1) {
        listaDeCompras.splice(indice, 1);
        console.log("Producto eliminado: " + productoAEliminar);
    } else {
        console.log("El producto no está en la lista.");
    }
    console.log("Lista final: " + listaDeCompras);
};

// Ejecución de las funciones
agregarCompras();
eliminarCompras();