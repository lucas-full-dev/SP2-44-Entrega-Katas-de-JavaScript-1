/**
 * Entrega: Katas de JavaScript 1:
01- oneThroughTwenty - Retornar os números de 1 a 20. (1, 2, 3,…, 19, 20)
02- evensToTwenty - Retornar os números pares de 1 a 20. (2, 4, 6,…, 18, 20)
03- oddsToTwenty - Retornar os números ímpares de 1 a 20. (1, 3, 5,…, 17, 19)
04- multiplesOfFive - Retornar os múltiplos de 5 até 100. (5, 10, 15,…, 95, 100)
05- squareNumbers - Retornar todos os números até 100 que forem quadrados perfeitos. (1, 4, 9, …, 81, 100)
06- countingBackwards - Retornar os números contando de trás para frente de 20 até 1. (20, 19, 18, …, 2, 1)
07- evenNumbersBackwards - Retornar os números pares de 20 até 1. (20, 18, 16, …, 4, 2)
08- oddNumbersBackwards - Retornar os números ímpares de 20 até 1. (19, 17, 15, …, 3, 1)
09- multiplesOfFiveBackwards - Retornar os múltiplos de 5 contando de trás para frente a partir de 100. (100, 95, 90, …, 10, 5)
10- squareNumbersBackwards - Retornar os quadrados perfeitos contando de trás para frente a partir de 100. (100, 81, 64, …, 4, 1)
 */

//01- oneThroughTwenty - Retornar os números de 1 a 20. (1, 2, 3,…, 19, 20)

function oneThroughTwenty() {

    let arrayNumeros = [];

    for (let i = 1; i <= 20; i++) {
        arrayNumeros.push(i)
    }

    return arrayNumeros;
} 
//Validação do exercício  número 1:
console.log(oneThroughTwenty())

//02- evensToTwenty - Retornar os números pares de 1 a 20. (2, 4, 6,…, 18, 20)
function evensToTwenty() {

    let arrayNumeros = [];

    for (let i = 1; i <= 20; i++) {
        if(i%2 === 0 ){
            arrayNumeros.push(i)
        }
        
    }

    return arrayNumeros;
} 
//Validação do exercício  número 2:
console.log(evensToTwenty())

//03- oddsToTwenty - Retornar os números ímpares de 1 a 20. (1, 3, 5,…, 17, 19)
function oddsToTwenty() {

    let arrayNumeros = [];

    for (let i = 1; i <= 20; i++) {
        if(i%2 !== 0 ){
            arrayNumeros.push(i)
        }
        
    }

    return arrayNumeros;
} 
//Validação do exercício  número 3:
console.log(oddsToTwenty())

//04- multiplesOfFive - Retornar os múltiplos de 5 até 100. (5, 10, 15,…, 95, 100)
function multiplesOfFive() {

    let arrayNumeros = [];

    for (let i = 1; i <= 100; i++) {
        if(i%5 === 0 ){
            arrayNumeros.push(i)
        }
        
    }

    return arrayNumeros;
} 
//Validação do exercício  número 4:
console.log(multiplesOfFive())

//05- squareNumbers - Retornar todos os números até 100 que forem quadrados perfeitos. (1, 4, 9, …, 81, 100)
function squareNumbers() {

    let arrayNumeros = [];

    for (let i = 1; i <= 100; i++) {
        if( Math.sqrt( i ) % 1 === 0){
            arrayNumeros.push(i)
        }
        
    }

    return arrayNumeros;
} 
//Validação do exercício  número 5:
console.log(squareNumbers())

//06- countingBackwards - Retornar os números contando de trás para frente de 20 até 1. (20, 19, 18, …, 2, 1)
function countingBackwards() {

    let arrayNumeros = [];

    for (let i = 20; i > 0; i--) {
        arrayNumeros.push(i)
        }
    return arrayNumeros;
}
//Validação do exercício  número 6:
console.log(countingBackwards())

//07- evenNumbersBackwards - Retornar os números pares de 20 até 1. (20, 18, 16, …, 4, 2)
function evenNumbersBackwards() {

    let arrayNumeros = [];

    for (let i = 20; i > 0; i--) {
        if(i%2 === 0 ){
            arrayNumeros.push(i)
        }       
        }
    return arrayNumeros;
}
//Validação do exercício  número 7:
console.log(evenNumbersBackwards())

//08- oddNumbersBackwards - Retornar os números ímpares de 20 até 1. (19, 17, 15, …, 3, 1)
function oddNumbersBackwards() {

    let arrayNumeros = [];

    for (let i = 20; i > 0; i--) {
        if(i%2 !== 0 ){
            arrayNumeros.push(i)
        }       
        }
    return arrayNumeros;
}
//Validação do exercício  número 8:
console.log(oddNumbersBackwards())

//09- multiplesOfFiveBackwards - Retornar os múltiplos de 5 contando de trás para frente a partir de 100. (100, 95, 90, …, 10, 5)
function multiplesOfFiveBackwards() {

    let arrayNumeros = [];

    for (let i = 100; i > 0; i--) {
        if(i%5 === 0){
            arrayNumeros.push(i)
        }       
        }
    return arrayNumeros;
}
//Validação do exercício  número 9:
console.log(multiplesOfFiveBackwards())

//10- squareNumbersBackwards - Retornar os quadrados perfeitos contando de trás para frente a partir de 100. (100, 81, 64, …, 4, 1)
function squareNumbersBackwards() {

    let arrayNumeros = [];

    for (let i = 100; i > 0; i--) {
        if(Math.sqrt( i ) % 1 === 0){
            arrayNumeros.push(i)
        }       
        }
    return arrayNumeros;
}
//Validação do exercício  número 9:
console.log(squareNumbersBackwards())