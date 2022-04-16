console.log('--EXERCISE 2: STRINGS')

//a.Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

console.log('Exercise 2.a.')
var stringWord = 'maria ana';
stringWord = stringWord.toLocaleUpperCase();
console.log('result: ' + stringWord);

//b. Crear una variable de tipo string con al menos 10 caracteres
//y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('Exercise 2.b.');
var stringWord = 'inglaterra';
var stringWord2 = stringWord.substring(0,5);
console.log('result: ' + 'The first five characters of ' + stringWord + ' are ' + stringWord2);

//c. Crear una variable de tipo string con al menos 10 caracteres y 
//generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

console.log('Exercise 2.c.');
var stringWord = 'inglaterra';
var stringWord2 = stringWord.substring(7,10);
console.log('result: ' + 'The last three caracters of ' + stringWord + ' are ' + stringWord2);

//d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y 
//las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

console.log('Exercise 2.d.');
var stringWord = 'inglaterra';
var stringWord2 = stringWord.substring(0,1).toUpperCase() + stringWord.substring(1,10).toLowerCase();
console.log('result: ' + stringWord2);

//e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. 
//Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

console.log('Exercise 2.e.');
var word = 'Maria Ana';
var spacePosition = word.indexOf(' ');
console.log('result: the space in the var ' + word + ' is in character number ' + spacePosition);

//f.Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
//Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de 
//ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

console.log('Exercise 2.f.');
var twoWords = 'termo yerba';
var result = twoWords.substring(twoWords.indexOf('t'),1).toUpperCase() + twoWords.substring(1,5).toLowerCase()+ twoWords.substring(twoWords.indexOf(' '),6) + twoWords.substring(twoWords.indexOf('y'),7).toUpperCase() +  twoWords.substring(7,11).toLowerCase();
console.log('result: ' + result);
