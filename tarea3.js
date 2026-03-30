// USAR  métodos filter(), sort(), y map() para manipular datos de un arreglo.
//Problema: Filtro y Orden de Productos de una Tienda Online
//Eres el encargado de gestionar los datos de una tienda online. 
//Tienes un listado de productos con información como nombre, precio y categoría.
//Tu tarea será filtrar los productos por precio, ordenarlos alfabéticamente y generar una lista con los nombres.

// arreglo de objetos con al menos 5 productos, cada uno con las propiedades nombre, precio y categoría.

const  productos  =  [
    {  nombre : "Camiseta" ,  precio : 15 ,  categoria : "Ropa"  } ,
    {  nombre : "Laptop" ,  precio : 800 ,  categoria : "Electrónica"  } ,
    {  nombre : "Libro" ,  precio : 12 ,  categoria : "Educación"  } ,
    {  nombre : "Zapatos" ,  precio : 50 ,  categoría : "Ropa"  } ,
    {  nombre : "Celular" ,  precio : 600 ,  categoría : "Electrónica"  } ,
] ;



const filtrar = (preciomenosDe100) => {
    return productos.filter((item) => item.precio <= preciomenosDe100);
}
console.log("Baratos:", filtrar(100));

//use item para llamar a un UN OBJETO DE PRODUCTOS 

const ordenarAlfabeticamente = ()=> {
    return productos.sort((a, b) => a.nombre.localeCompare(b.nombre));
}
console.log("Ordenados:", ordenarAlfabeticamente());
// compara el objeto a con el b, a.nombre le dice compara el primer nombre con el segundo (b.nombre)
// localeCompare es la herramienta que decide cuál va primero en el abecedario (A antes que B).

const ordenPorCategoria=() =>{
    return productos.map((p) => p.categoria);
}

console.log("categorias= ",ordenPorCategoria());

const buscarPorNombre = (nombreABuscar) => {
    return productos.find((p) => p.nombre === nombreABuscar);
}

// Ejemplo de uso:
console.log(buscarPorNombre("Laptop")); 
// Resultado: nombre: "Laptop", precio: 800, categoria: "Electrónica" 