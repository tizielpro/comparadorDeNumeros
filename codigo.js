'use strict';
/*
hacer un sistema para detectar si los numeros son inguales,
cual es menor y cual mayor.
*/

let numero1 = parseInt(prompt("escribe el primer número para comparar"));
let numero2 = parseInt(prompt("escribe el segundo número para comparar"));

while(numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt("escribe el primer número para comparar"));
    numero2 = parseInt(prompt("escribe el segundo número para comparar"));    
}

if(numero1 === numero2){
    alert("los números son IGUALES");
}else if(numero1 > numero2){
    alert(`el número mas grande es el ${numero1} y el mas chico es el ${numero2}`);
}else if(numero1 < numero2){
    alert(`el número mas chico es el ${numero1} y el mas grande es el ${numero2}`);
}