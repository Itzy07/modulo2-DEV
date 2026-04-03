const gifts= ["Muñeca","Carro de juguetes","Rompecabezas","Lego", "Pelota"];


function findGift(gifts, giftName, index=0){
    if(index === gifts.length){   // si el indice es igual a la longitud del arreglo, 
    // significa que ya se recorrió todo el arreglo y no se encontró el regalo
        return `${giftName} No se encontró el regalo`;
    }
    if(gifts[index] === giftName){ // si el regalo en la posición actual es igual al regalo que se busca
        return `${giftName} encontrado en la lista de regalos en la posicion ${index}`;
    }
    return findGift(gifts, giftName, index + 1);
}
let gifttoFind = "globo";
console.log(findGift(gifts, gifttoFind));

// al usar giftName Aunque se llamen igual, viven en lugares distintos:
// La variable de afuera es la "global" (el dato real).
// La variable de adentro (el parámetro) es un "alias" o una copia que solo existe mientras la función se está ejecutando.