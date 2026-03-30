const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo"];

function encontrarPareja(arr) {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
        // 1. Extraemos la primera letra de cada nombre (posición 0 de la cadena)
        const letraInicio = arr[inicio][0]; 
        const letraSiguiente = arr[siguiente][0]; 

        if(letraInicio === letraSiguiente) {  
            return [arr[inicio], arr[siguiente]]; // Encontramos una pareja, devolvemos los dos nombres en un arreglo
        } else {
            inicio++;
            siguiente++;
             
        }
       
    }
     return null; // Si no se encuentra ningún par
}


console.log(encontrarPareja(invitados));
// Resultado: ["Carlos", "Cecilia"]