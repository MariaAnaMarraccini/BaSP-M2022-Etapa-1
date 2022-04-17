console.log('--EXERCISE 6: FUNCIONES');

//a. Crear una función suma que reciba dos valores numéricos y retorne el resultado.
//Ejecutar la función y guardar el resultado en una variable, mostrando el valor de
//dicha variable en la consola del navegador.

console.log('Exercise 6.a.');
function sum(n1, n2) {
    return n1 + n2;
}
console.log('result: ' + sum(2,5));

//b. A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número,
//mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

console.log('Exercise 6.b.');
function sum2(n1, n2) {
    let number1 = isNaN(n1);
    let number2 = isNaN(n2);
    if(number1==false && number2==false) {
        return n1 + n2;
    }else{
        return alert('One of the parameters has an error')
    }
}
console.log('result: ' + sum2('abc',5));

//c. Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.

console.log('Exercise 6.c.');
function validateInteger(n) {
    return Number.isInteger(n);
}
console.log('result: ' + validateInteger(2.5));

//d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. 
//En caso que haya decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).

console.log('Exercise 6.d.');
function sum3(n1, n2) {
    let number1 = validateInteger(n1);
    let number2 = validateInteger(n2);
    if(number1==true && number2==true && isNaN(n1)==false && isNaN(n2)==false) {
        return n1 + n2;
    }else if(isNaN(n1)!=false || isNaN(n2)!=false){
        return alert('One of the parameters has an error')
    }else if(number1==false && number2==true){
        return alert(Math.round(n1));
    }else if(number1==true && number2==false){
        return alert(Math.round(n2));
    }else{
        return alert(Math.round(n1) + ' ' + Math.round(n2));
    }
}
console.log('result: ' + sum3(5.2,8.9));

//e.Convertir la validación del ejercicio 6d) en una función separada 
//y llamarla dentro de la función suma probando que todo siga funcionando igual.

console.log('Exercise 6.e.');
function validation(n1, n2) {
    let number1 = validateInteger(n1);
    let number2 = validateInteger(n2);
    if(number1==true && number2==true && isNaN(n1)==false && isNaN(n2)==false) {
        return n1 + n2;
    }else if(isNaN(n1)!=false || isNaN(n2)!=false){
        return alert('One of the parameters has an error')
    }else if(number1==false && number2==true){
        return alert(Math.round(n1));
    }else if(number1==true && number2==false){
        return alert(Math.round(n2));
    }else{
        return alert(Math.round(n1) + ' ' + Math.round(n2));
    }
}
function sum4(n1,n2) {
    return validation(n1,n2);
}
console.log('result: ' + sum3('nnn',8));