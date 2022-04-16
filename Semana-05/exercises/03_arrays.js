console.log('--EXERCISE 3: ARRAY');

//a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
 //"Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).

console.log('Exercise 3.a.');
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"];
console.log('result: ' + months[4] + ' ' + months[10]);

//b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log('Exercise 3.b.');
var ordered = months.sort();
console.log('result: ' + ordered);

//c. Agregar un elemento al principio y al final del array (utilizar unshift y push).

console.log('Exercise 3.c.');
months.unshift(2022) + months.push(2023);
console.log('result: ' + months);

//d. Quitar un elemento del principio y del final del array (utilizar shift y pop).

console.log('Exercise 3.d.');
months.shift() + months.pop(); //I removed the "2022" and "2023" elements that I've put before.
console.log('result: ' + months);

//e. Invertir el orden del array (utilizar reverse).

console.log('Exercise 3.e.');
months.reverse(); //I reversed the order of the alphabetical ordered array.
console.log('result: ' + months);

//f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

console.log('Exercise 3.f.');
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"];
var separetedMonths = months.join('-');
console.log('result: ' + separetedMonths);

//g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

console.log('Exercise 3.g.');
var mayNov = months.slice(4,11);
console.log('result: ' + mayNov);

