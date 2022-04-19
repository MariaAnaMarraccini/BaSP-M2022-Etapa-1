console.log('--EXERCISE 4: IF ELSE');

//a. Create a random number between 0 and 1 using the Math.random() function, if the value
//is greater than or equal to 0.5 show an alert with the message “Greater than 0.5” and otherwise an alert with the
// message “Lower than 0.5”.

console.log('Exercise 4.a.');
var  number = Math.random();
if (number >= 0.5) {
    alert ('Greater than 0,5');
}
else {
    alert ('Lower than 0.5');
}

// b. Create a variable “Age” that contains an integer between 0 and 100 and displays the following alert messages:
//"Baby" if the age is less than 2 years;
//"Child" if the age is between 2 and 12 years;
//“Teenager” between 13 and 19 years old;
//“Young” between 20 and 30 years old;
//“Adult” between 31 and 60 years old;
//“Older Adult” between 61 and 75 years old;
//“Elderly” if he is older than 75 years.

console.log('Exercise 4.b.');
var age = Math.floor(Math.random() * 101);
if (age < 2) {
    alert ('Baby');
}
else if (age >= 2 && age <=12) {
    alert ('Kid');
}
else if (age >= 13 && age <=19) {
    alert ('Teenager');
}
else if (age >= 20 && age <=30) {
    alert ('Young');
}
else if (age >= 31 && age <=60) {
    alert ('Adult');
}
else if (age >= 61 && age <=75) {
    alert ('Older Adult');
}
else {
    alert ('Elderly');
}
