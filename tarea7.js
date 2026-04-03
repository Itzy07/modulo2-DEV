function findMax(arr) {
    // Caso base: divider el arreglo hasta que tenga un solo elemento
    if (arr.length === 1) {
        return arr[0];
        //.slice(): Es un método que extrae una sección de un arreglo sin modificar el original.
    }

    // Dividir el arreglo en dos
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Llamadas recursivas
    const leftMax = findMax(left);
    const rightMax = findMax(right);

    // Comparar y retornar el mayor de los dos
    // si leftMax es mayor que rightMax, retorna leftMax, de lo contrario retorna rightMax
    // (:) es el operador ternario, que es una forma compacta de escribir un if-else
    return leftMax > rightMax ? leftMax : rightMax;

}

const numbers = [3, 18, 2, 10, 25, 7];
console.log(findMax(numbers)); // Salida: 25
