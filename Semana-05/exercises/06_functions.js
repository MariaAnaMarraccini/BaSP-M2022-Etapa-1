console.log('--EXERCISE 6: FUNCIONES');

//a. Create a sum function that receives two numeric values ​​and returns the result.
//Execute the function and save the result in a variable, showing the value of
// this variable in the browser console.

console.log('Exercise 6.a.');
function sum(n1, n2) {
    return n1 + n2;
}
console.log('result: ' + sum(2,5));

//b. To the sum function above, add a validation to check if any of the parameters is not a number,
//display an alert clarifying that one of the parameters has an error and return the NaN value as the result.

console.log('Exercise 6.b.');
function sum2(n1, n2) {
    var number1 = isNaN(n1);
    var number2 = isNaN(n2);
    if(number1==false && number2==false) {
        return n1 + n2;
    }else{
        alert('One of the parameters has an error')
        return NaN;
    }
}
console.log('result: ' + sum2('abc',5));

//c. Create a validate integer function that takes a number as a parameter and returns true if it's an integer.

console.log('Exercise 6.c.');
function validateInteger(n) {
    return Number.isInteger(n);
}
console.log('result: ' + validateInteger(2.5));
console.log('result: ' + validateInteger(8))

//d.To the sum function of exercise 6b) add a call that validates that the numbers are integers.
//If there are decimals, show an alert with the error and return the number converted to an integer (rounded).

console.log('Exercise 6.d.');
function sum3(n1, n2) {
    var number1 = validateInteger(n1);
    var number2 = validateInteger(n2);
    if(number1==true && number2==true && isNaN(n1)==false && isNaN(n2)==false) {
        return n1 + n2;
    }else if(isNaN(n1)!=false || isNaN(n2)!=false){
        alert('One of the parameters has an error')
        return NaN
    }else if(number1==false && number2==true){
        alert('The number is a decimal');
        return Math.round(n1);
    }else if(number1==true && number2==false){
         alert('The number is a decimal');
         return Math.round(n2);
    }else{
        alert('Both numbers are decimals');
        return Math.round(n1) + ' ' + Math.round(n2);
    }
}
console.log('result: ' + sum3(5.2,8.9));
console.log('result: ' + sum3(9,6.147));
console.log('result: ' + sum3('abc', 9));

//e.Convert validation from exercise 6d) to a separate function
//and call it inside the sum function testing that everything still works the same.
console.log('Exercise 6.e.');
function validation(n1, n2) {
    var number1 = validateInteger(n1);
    var number2 = validateInteger(n2);
    if(number1==true && number2==true && isNaN(n1)==false && isNaN(n2)==false) {
        return n1 + n2;
    }else if(isNaN(n1)!=false || isNaN(n2)!=false) {
        alert('One of the parameters has an error');
        return NaN;
    }else if(number1==false && number2==true){
        alert('The number is a decimal');
        return Math.round(n1);
    }else if(number1==true && number2==false){
        alert('The number is a decimal');
        return Math.round(n2);
    }else{
        alert('Both numbers are decimals');
        return Math.round(n1) + ' ' + Math.round(n2);
    }
}
function sum4(n1,n2) {
    return validation(n1,n2);
}
console.log('result: ' + sum3(5,7.4));
console.log('result: ' + sum3(3.1,4.9))
console.log('result: ' + sum3('nnn',8));