console.log('--EXERCISE 2: STRINGS')

//a.Create a variable of type string with at least 10 characters and convert all text to uppercase (use toUpperCase).

console.log('Exercise 2.a.')
var stringWord = 'maria ana';
stringWord = stringWord.toLocaleUpperCase();
console.log('result: ' + stringWord);

//b. Create a variable of type string with at least 10 characters
//and generate a new string with the first 5 characters saving the result in a new variable (use substring).

console.log('Exercise 2.b.');
var stringWord = 'Kazakhstan';
var stringWord2 = stringWord.substring(0,5);
console.log('result: ' + 'The first five characters of ' + stringWord + ' are ' + stringWord2);

//c. Create a variable of type string with at least 10 characters and
//generate a new string with the last 3 characters saving the result in a new variable (use substring).

console.log('Exercise 2.c.');
var stringWord = 'Luxembourg';
var stringWord2 = stringWord.substring(7,10);
console.log('result: ' + 'The last three caracters of ' + stringWord + ' are ' + stringWord2);

//d. Create a variable of type string with at least 10 characters and generate a new string with the first letter in uppercase and
// the rest in lowercase. Save the result in a new variable (use substring, toUpperCase, toLowerCase and the + operator).

console.log('Exercise 2.d.');
var stringWord = 'bangladesh';
var stringWord2 = stringWord.substring(0,1).toUpperCase() + stringWord.substring(1,10).toLowerCase();
console.log('result: ' + stringWord2);

//e. Create a variable of type string with at least 10 characters and some white space.
//Find the position of the first whitespace and save it in a variable (use indexOf).

console.log('Exercise 2.e.');
var word = 'Maria Ana';
var spacePosition = word.indexOf(' ');
console.log('result: the space in the var ' + word + ' is in character number ' + spacePosition);

//f.Create a variable of type string with at least 2 words long (10 characters and some space in between).
//Use the methods from the previous exercises to generate a new string that has the first letter of
//both words capitalized and all other letters lowercase (use indexOf, substring, toUpperCase, toLowerCase, and the + operator).

console.log('Exercise 2.f.');
var twoWords = 'tjken adopt';
var result = twoWords.substring(twoWords.indexOf('t'),1).toUpperCase() + twoWords.substring(1,5).toLowerCase()+ 
twoWords.substring(twoWords.indexOf(' '),6) + twoWords.substring(twoWords.indexOf('a'),7).toUpperCase() +  
twoWords.substring(7,11).toLowerCase();
console.log('result: ' + result);
