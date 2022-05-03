
window.onload = function(){
  document.getElementById('first-name').addEventListener('blur',reviewFirstName);
  document.getElementById('first-name').addEventListener('focus',clearFirstName);
  document.getElementById('last-name').addEventListener('blur',reviewLastName);
  document.getElementById('last-name').addEventListener('focus',clearLastName);
  document.getElementById('document').addEventListener('blur',reviewDocument);
  document.getElementById('document').addEventListener('focus',clearDocument);
  document.getElementById('date').addEventListener('blur',reviewDate);
  document.getElementById('date').addEventListener('focus',clearDate);
  document.getElementById('phone').addEventListener('blur',reviewPhone);
  document.getElementById('phone').addEventListener('focus',clearPhone);
  document.getElementById('adress').addEventListener('blur',reviewAdress);
  document.getElementById('adress').addEventListener('focus',clearAdress);
  document.getElementById('city').addEventListener('blur',reviewCity);
  document.getElementById('city').addEventListener('focus',clearCity);
  document.getElementById('post-code').addEventListener('blur',reviewPostCode);
  document.getElementById('post-code').addEventListener('focus',clearPostCode);
  document.getElementById('email').addEventListener('blur',reviewEmail);
  document.getElementById('email').addEventListener('focus',clearEmail);
  document.getElementById('password').addEventListener('blur',reviewPassword);
  document.getElementById('password').addEventListener('focus',clearPassword);
  document.getElementById('repeat-password').addEventListener('blur',reviewRepeatPassword);
  document.getElementById('repeat-password').addEventListener('focus',clearRepeatPassword);
  document.getElementById('send').addEventListener('click',signUp);
  //Putting the values saved in the localStorage in the form.
  var firstName = localStorage.getItem('Name');
  console.log(firstName)
  if(firstName != null){
    if(firstName.length > 0 ){
      var field = document.getElementById('first-name').value= JSON.parse(firstName);
      console.log(field)
    }
  }
  var lastName = localStorage.getItem('Last Name');
  console.log(lastName)
  if(lastName != null){
    if(lastName.length > 0){
      var field = document.getElementById('last-name').value= JSON.parse(lastName);
      console.log(field)
    }
  }
  var dni = localStorage.getItem('D.N.I');
  console.log(dni);
  if(dni != null){
    if(dni.length > 0){
      var field = document.getElementById('document').value= JSON.parse(dni);
      console.log(field);
    }
  }
  var birth = localStorage.getItem('Date of Birth');
  console.log(birth);
  if(birth != null){
    if(birth.length > 0){
      var date_birth_format = new Date(JSON.parse(birth));
      var date_to_send = date_birth_format.getFullYear()+ '-'+ ("0" + (date_birth_format.getMonth() + 1)).slice(-2) 
      +'-'+ ("0" + date_birth_format.getDate()).slice(-2);
      var field = document.getElementById('date').value= date_to_send;
      console.log(field);
    }
  }
  var phoneNumber = localStorage.getItem('Phone');
  console.log(phoneNumber);
  if(phoneNumber != null){
    if(phoneNumber.length > 0){
      var field = document.getElementById('phone').value= JSON.parse(phoneNumber);
      console.log(field);
    }
  }
  var adress = localStorage.getItem('Adress');
  console.log(adress);
  if(adress != null){
    if(adress.length > 0){
      var field = document.getElementById('adress').value= JSON.parse(adress);
      console.log(field);
    }
  }
  var city = localStorage.getItem('City');
  console.log(city);
  if(city != null){
    if(city.length > 0){
      var field = document.getElementById('city').value= JSON.parse(city);
      console.log(field);
    }
  }
  var postCode = localStorage.getItem('Post Code');
  console.log(postCode);
  if(postCode != null){
    if(postCode.length > 0){
      var field = document.getElementById('post-code').value= JSON.parse(postCode);
      console.log(field);
    }
  }
  var email = localStorage.getItem('Email');
  console.log(email);
  if(email != null){
    if(email.length > 0){
      var field = document.getElementById('email').value= JSON.parse(email);
      console.log(field);
    }
  }
  var password = localStorage.getItem('Password');
  console.log(password);
  if(password != null){
    if(password.length > 0){
      var field = document.getElementById('password').value= JSON.parse(password);
      console.log(field);
    }
  }
  var repeatPass = localStorage.getItem('Repeat the Password');
  console.log(repeatPass);
  if(repeatPass != null){
    if(repeatPass.length > 0){
      var field = document.getElementById('repeat-password').value= JSON.parse(repeatPass);
      console.log(field);
    }
  }
}
const validateLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' '];
const validateNumbers = ['1','2','3','4','5','6','7','8','9', '0'];
function signUp(event){
  event.preventDefault();
  var error = false;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var repeatPassword = document.getElementById('repeat-password').value;
  var validateEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  if(!validateEmail.test(email)){
    document.getElementById('wrong-email');
    error = true;
  }
  if (reviewPassword() == false){
    error = true;
  } 
  if (reviewRepeatPassword() == false){
    error = true;
  }
  // Compare the passwords
  if(password !== repeatPassword){
    error = true;
    document.getElementById('wrong-repeat-password').textContent='The password is not valid';
  }
  // Validations without ternary.
  if(reviewFirstName() == false){ 
    error = true;
  }
  if(reviewLastName() == false){
    error = true;
  }
  if(reviewDate() == false){
    error = true;
  }
  if(reviewDocument() == false){
    error = true;
  }
  if(reviewPhone() == false){
    error = true;
  }
  if(reviewCity() == false){
    error = true;
  }
  if(reviewAdress() == false){
    error = true;
  }
  if(reviewPostCode() == false){
    error = true;
  }
  if(error == false){
    var name = document.getElementById('first-name').value;
    var lastname = document.getElementById('last-name').value;
    var document_number = document.getElementById('document').value;
    var date_birth = document.getElementById('date'). value;
    var date_birth_format = new Date(date_birth);
    var date_to_send = ("0" + (date_birth_format.getMonth() + 1)).slice(-2) +'/'+("0" + date_birth_format.getDate()).slice(-2) + '/'+date_birth_format.getFullYear();
    var phone_number = document.getElementById('phone').value;
    var adress = document.getElementById('adress').value;
    var city = document.getElementById('city').value;
    var postCode = document.getElementById('post-code').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var repeatPassword = document.getElementById('repeat-password').value;
    fetch(`https://basp-m2022-api-rest-server.herokuapp.com/signup?name=${name}&lastName=${lastname}&dni=${document_number}&dob=${date_to_send}&phone=${phone_number}&address=${adress}&city=${city}&zip=${postCode}&email=${email}&password=${password}&repeatpass=${repeatPassword}`)
    .then(function (response){
      console.log(response);
      return response.json()
      })
    .then(function (jsonResponse){
      console.log("Data", jsonResponse)
      if (jsonResponse.success){
        localStorage.setItem('Name', JSON.stringify(name));
        localStorage.setItem('Last Name', JSON.stringify(lastname));
        localStorage.setItem('D.N.I', JSON.stringify(document_number));
        localStorage.setItem('Date of Birth', JSON.stringify(date_to_send));
        localStorage.setItem('Phone', JSON.stringify(phone_number));
        localStorage.setItem('Adress', JSON.stringify(adress));
        localStorage.setItem('City', JSON.stringify(city));
        localStorage.setItem('Post Code', JSON.stringify(postCode));
        localStorage.setItem('Email', JSON.stringify(email));
        localStorage.setItem('Password', JSON.stringify(password));
        localStorage.setItem('Repeat the Password', JSON.stringify(repeatPassword));
        window.confirm('New User '+ name + ' ' + lastname + ' ' + document_number + ' '+ date_birth + ' ' + 
        adress + ' ' + city + ' ' + postCode + ' ' + email + ' ' + password);
      }else{
    //throw jsonResponse
        for(var i=0;i<jsonResponse.errors.length; i++){
          alert(jsonResponse.errors[i].msg);
        }
      return false;
    }
  })
}
}
function clearFirstName(){
  var name = document.getElementById('first-name');
  document.getElementById('wrong-first-name').textContent=' ';
  name.value = '';
}
function reviewFirstName(){
  var name = document.getElementById('first-name').value;
  var error = false;
  var nameToArray = name.split('');
  if(name.length < 3){
    error = true;
    console.log('Name has less than 3 letters')
  }
  for(var i = 0; i < name.length; i++){
    var findLetter = validateLetters.indexOf(nameToArray[i]);
    if(findLetter == -1){
    error = true;
    console.log('Wrong character')
    break;
  }
  }
  if(error == true){
    document.getElementById('wrong-first-name').textContent='The First Name is not valid';
    return false;
  }
  return true;
}
function clearLastName(){
  var lastname = document.getElementById('last-name');
  document.getElementById('wrong-last-name').textContent=' ';
  lastname.value = '';
}
function reviewLastName(){
  var lastname = document.getElementById('last-name').value;
  var error = false;
  var nameToArray = lastname.split('');
  if(lastname.length < 3){
    error  = true;
    console.log('The lastname has less than 3 letters');
  }
  for(var i = 0; i < lastname.length; i++){
    var findLetter = validateLetters.indexOf(nameToArray[i]);
    if(findLetter == -1){
      error = true;
      console.log('Wrong character');
      break;
    }
    }
  if(error == true){
      document.getElementById('wrong-last-name').textContent='The Last Name is not valid';
      return false;
  }
  return true;
}
function clearDocument(){
  var document_number = document.getElementById('document');
  document.getElementById('wrong-document').textContent=' ';
  document_number.value = '';
}
function reviewDocument(){
  var document_number = document.getElementById('document').value;
  var error = false;
  var documentToArray = document_number.split('');
  if(document_number.length < 8){
    error = true;
    console.log('The number has less than 8 digits')
  }
  for(var i = 0; i < document_number.length; i++){
    var number_position = parseInt(documentToArray[i]);
    if(isNaN(number_position) == true){
      error = true;
      console.log('Wrong character')
      break;
    }
  }
  if(error == true){
    document.getElementById('wrong-document').textContent='The Document is not valid';
    return false;
  }
  return true;
}
function clearDate(){
  var date_birth = document.getElementById('date');
  document.getElementById('wrong-date').textContent=' ';
  date_birth.value = '';
}
function reviewDate(){
  var date_birth = document.getElementById('date').value;
  var error = false;
  var date = new Date(date_birth);
  var today = new Date();
  var calculateAge = today.getFullYear() - date.getFullYear();
  if(calculateAge < 18){
    error = true;
    console.log('The person is not an adult');
  }
  if(date.toString() == 'Invalid Date'){
    console.log('Invalid date');
    error = true;
  }
  if(error == true){
    document.getElementById('wrong-date').textContent='The Date of Birth is not valid';
    return false;
  }
  return true;
}
function clearPhone(){
  var phone = document.getElementById('phone');
  document.getElementById('wrong-phone').textContent=' ';
  phone.value = '';
}
function reviewPhone(){
  var phone_number = document.getElementById('phone').value;
  var error = false;
  var phoneToArray = phone_number.split('');
  if(phone_number.length != 10 ){
    error = true;
    console.log('The phone has more or lees than 10 digits');
  }
  for(var i = 0; i < phone_number.length; i++){
    var number_position = parseInt(phoneToArray[i]);
    if(isNaN(number_position) == true){
      error = true;
      console.log('Wrong character');
      break;
    }
  }
  if(error == true){
    document.getElementById('wrong-phone').textContent='The Phone Number is not valid';
    return false;
  }
  return true;
}
function clearAdress(){
  var adress = document.getElementById('adress'); 
  document.getElementById('wrong-adress').textContent=' ';
  adress.value = '';
}
function reviewAdress(){
  var adress = document.getElementById('adress').value;
  var error = false;
  var illegalChars = [',', '#', '-', '/', '!', '@', '$', '%',  '^', '*', '(', ')' , '{',  '}', '|', '[',  ']' , '\\'];
  var space = [' '];
  var adressToArray = adress.split('');
  if(adress.length < 5){
    error = true;
    console.log('The Adress has less than 5 characters');
  }
  for(var i = 0; i < adress.length; i++) {
    var findInvalidChar = illegalChars.indexOf(adressToArray[i]);
    if(findInvalidChar != -1){
    error = true;
    console.log('Wrong character')
    }
  }
  var findSpace = adress.indexOf(space);
    if(findSpace == -1 || findSpace ==  adress.length -1){ //If there is a space at the end, the index will be equal to the lenght of the adress - 1
      error = true;
      console.log('The adress has not space in the middle');
    }
  if(error == true){
    document.getElementById('wrong-adress').textContent='The Adress is not valid';
    return false;
  }
  return true;
}
function clearCity(){
  var city = document.getElementById('city'); 
  document.getElementById('wrong-city').textContent=' ';
  city.value = '';
}
function reviewCity(){
  var city = document.getElementById('city').value;
  var cityToArray = city.split('');
  var error = false;
  isNumber = false;
  isLetter = false;
  if(city.length < 3){
    error = true;
    console.log('The city has less than 3 letters');
  } 
  for (var i=0; i < city.length; i++){
    var findLetter = validateLetters.indexOf(cityToArray[i]);
    var findNumber = validateNumbers.indexOf(cityToArray[i]);
    if(findLetter != -1){
      isLetter = true;
      }
    if(findNumber != -1){
      isNumber = true;
    }
    if (findLetter == -1 && findNumber == -1) {
      error = true; //the loop didn't find a letter or a number
      console.log('Wrong character');
      break;
    }
  }
  if(error == true){
    document.getElementById('wrong-city').textContent='The City is not valid';
    return false;
  }
  return true;
}
function clearPostCode(){
  var postCode = document.getElementById('post-code'); 
  document.getElementById('wrong-post-code').textContent=' ';
  postCode.value = '';
}
function reviewPostCode(){
  var postCode = document.getElementById('post-code').value;
  var error = false;
  var phoneToArray = postCode.split('');
  if(postCode.length < 4 || postCode.length > 5){
    error = true;
    console.log('The code has less than 4 characters and more than 5 characters')
  }
  for(var i = 0; i < postCode.length; i++){
    var number_position = parseInt(phoneToArray[i]);
    if(isNaN(number_position) == true){
      error = true;
      console.log('Wrong character')
      break;
    }
  }
  if(error == true){
    document.getElementById('wrong-post-code').textContent='The Postal Code is not valid';
    return false;
  }
  return true;
}

function clearEmail(){
  var email = document.getElementById('email'); //Getting "focus" event in the input email.
  document.getElementById('wrong-email').textContent=' ';
  email.value = '';
}
function reviewEmail(){
  var email = document.getElementById('email').value;
  var validateEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  if(!validateEmail.test(email)) { //I've put the "!" in order to validate if the condition is FALSE
    document.getElementById('wrong-email').textContent='The email is not valid'
    console.log('Wrong email')
  }
}
function clearPassword(){
  var password = document.getElementById('password'); 
  document.getElementById('wrong-password').textContent=' ';
  password.value = '';
}
function reviewPassword(){
  var password = document.getElementById('password').value;
  var passwordToArray = password.split(''); 
  var error = false; //This is in order to display the alert or not. We presume that the password is correct.
  var isLetter = false;
  var isNumber = false;
  for (var i=0; i < password.length; i++){
    var findLetter = validateLetters.indexOf(passwordToArray[i]);
    var findNumber = validateNumbers.indexOf(passwordToArray[i]);
    if(findLetter != -1){
        isLetter = true;
    }
    if(findNumber != -1){
      isNumber = true;
    }
    if (findLetter == -1 && findNumber == -1) {
      error = true; //the loop didn't find a letter or a number
      console.log('Wrong character');
      break;
    }
  }
  if(password.length < 8){
    error = true;
    console.log('The password has less than 8 letters');
  }
  if (error == true){
    document.getElementById('wrong-password').textContent='The password is not valid';
    return false;
  }else if(isLetter == false || isNumber == false){
    document.getElementById('wrong-password').textContent='The password is not valid';
    return false;
  }
  return true;
}
function clearRepeatPassword(){
  var password = document.getElementById('repeat-password'); 
  document.getElementById('wrong-repeat-password').textContent=' ';
  password.value = '';
}
function reviewRepeatPassword(){
  var password = document.getElementById('repeat-password').value;
  var passwordToArray = password.split(''); 
  var error = false; //This is in order to display the alert or not. We presume that the password is correct.
  var isLetter = false;
  var isNumber = false;
  for (var i=0; i < password.length; i++){
    var findLetter = validateLetters.indexOf(passwordToArray[i]);
    var findNumber = validateNumbers.indexOf(passwordToArray[i]);
    if(findLetter != -1){
    isLetter = true;
    }
    if(findNumber != -1){
      isNumber = true;
    }
    if (findLetter == -1 && findNumber == -1) {
      error = true; //the loop didn't find a letter or a number
      console.log('Wrong character');
      break;
    }
  }
  if(password.length < 8){
    error = true;
    console.log('The password has less than 8 letters');
  }
  if (error == true){
    document.getElementById('wrong-repeat-password').textContent='The password is not valid';
    return false;
  }else if(isLetter == false || isNumber == false){
    document.getElementById('wrong-repeat-password').textContent='The password is not valid';
    return false;
  }
  return true;
}