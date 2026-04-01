function findLongestWord(text) {
    // TODO: Dividir el texto en palabras y almacenarlas en una variable
    // const words = ...
    const words = text.split(' ');

    let longestWord = ''; // Inicializar la palabra más larga

      for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    // TODO: Recorrer el arreglo de palabras con un ciclo
    // for (...) {
        // TODO: Comparar la longitud de la palabra actual con la más larga
        // if (...) {
            // Actualizar la palabra más larga
            // longestWord = ...;
        // }
    }
    return longestWord;
    // TODO: Retornar la palabra más larga encontrada
    // return ...;
  
}

// Ejemplo de uso
const text = "JavaScript es un lenguaje de programación increíble para aprender.";
// TODO: Llama a la función y muestra el resultado
console.log(findLongestWord(text)); // Resultado esperado: "programación"