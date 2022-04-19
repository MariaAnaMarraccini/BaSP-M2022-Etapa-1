console.log('--EXERCISE 3: ARRAYS');

//a. Given the following array: ["January", "February", "March", "April", "May", "June", "July", "August", "September",
//"October", "November", "December"] display months 5 and 11 on the console (use console.log).

console.log('Exercise 3.a.');
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
"October", "November", "December"];
console.log('result: ' + months[4] + ' ' + months[10]);

//b. Sort the month array alphabetically and display it on the console (use sort).

console.log('Exercise 3.b.');
var ordered = months.sort();
console.log('result: ' + ordered);

//c. Add an element to the beginning and end of the array (use unshift and push).

console.log('Exercise 3.c.');
months.unshift(2022) + months.push(2023);
console.log('result: ' + months);

//d. Remove an element from the beginning and the end of the array (use shift and pop).

console.log('Exercise 3.d.');
months.shift() + months.pop(); //I removed the "2022" and "2023" elements that I've put before.
console.log('result: ' + months);

//e. Reverse the order of the array (use reverse).

console.log('Exercise 3.e.');
months.reverse(); //I reversed the order of the alphabetical ordered array.
console.log('result: ' + months);

//F. Join all the elements of the array into a single string where each month is separated by a hyphen - (use join).

console.log('Exercise 3.f.');
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
"October", "November", "December"];  
var separetedMonths = months.join('-');
console.log('result: ' + separetedMonths);

//g. Create a copy of the month array containing May through November (use slice).

console.log('Exercise 3.g.');
var mayNov = months.slice(4,11);
console.log('result: ' + mayNov);

