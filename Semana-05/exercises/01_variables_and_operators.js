console.log('--EXERCISE 1: VARIABLES AND OPERATORS')

//a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la suma de ambos 
//números en una 3er variable.

console.log('Excercise 1.a:')
var number1 = 50;
var number2 = 20;
var result = number1 + number2;
console.log('result: ' + number1 + '+' + number2 + '=' + result); 

//b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er variable.

console.log('Exercise 1.b')
var string1 = 'I am';
var string2 = 'Maria Ana';
var result = string1 + " " + string2;
console.log('result: ' + result);

//c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras del string) guardando el resultado de la 
//suma en una 3er variable (utilizar length).

console.log('Exercise 1.c')
var string1 = "Radium";
var string2 = "Rocket";
var result = string1.length + string2.length;
console.log('result: ' + 'first var ' + string1+ ' and second var ' + string2 + ' have a total of ' + result + ' characters' );