console.log('--EXERCISE 5: FOR');

//a. Create an array containing 5 words and iterate through that array using a for loop
//from JavaScript to display an alert using each of the words.

console.log('Exercise 5.a.');
var days = ["monday","tuesday","wednesday","thursday","friday"];
for (let i = 0; i < days.length; i++) {
    alert(days[i]);
}

//b. To the previous array convert the first letter of each word to uppercase and show an alert
//for each modified word.

console.log('Exercise 5.b.');
for (let i = 0; i < days.length; i++) {
    alert(days[i].substring(0,1).toUpperCase()+days[i].substring(1));
}

//c. Create a variable called "sentence" that has an empty string, then go throug the array from point a) with
//a for loop to save each word inside the sentence variable. At the end show a
//single alert with the full string.

console.log('Exercise 5.c.');
var sentence = '';
for (let i = 0; i < days.length; i++) {
    sentence = sentence + days[i] + ' ';
}
alert(sentence);

//d. Create an empty array with a for loop of 10 repetitions. Fill the array with the number of the
//repetition, i.e. at the end of the execution of the for loop there should be 10 elements inside
//of the array, from number 0 to number 9. Show the array in the browser console
//final (use console.log).

console.log('Exercise 5.d.');
var empty = [];
for (let i = 0; i < 10; i++ ) {
    empty.push(i);
}
console.log(empty);