console.log('--EXERCISE 1: VARIABLES AND OPERATORS')

//a. Create two numeric variables and use the addition operator to store the value of the sum of both
//numbers in a 3rd variable.

console.log('Excercise 1.a:')
var number1 = 50;
var number2 = 20;
var result = number1 + number2;
console.log('result: ' + number1 + '+' + number2 + '=' + result); 

//b. Create two variables of type String and concatenate them saving the result in a 3rd variable.

console.log('Exercise 1.b')
var string1 = 'I am';
var string2 = 'Maria Ana';
var result = string1 + " " + string2;
console.log('result: ' + result);

//c. Create two variables of type String and add the length of each variable (number of letters in the string) saving the result of the
//sum in a 3rd variable (use length).

console.log('Exercise 1.c')
var string1 = "Radium";
var string2 = "Rocket";
var result = string1.length + string2.length;
console.log('result: ' + 'first var ' + string1+ ' and second var ' + string2 + ' have a total of ' + result + ' characters' );