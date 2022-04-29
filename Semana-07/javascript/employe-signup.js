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
  }

function signUp(event){
  event.preventDefault();
  var error = false;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var repeatPassword = document.getElementById('repeat-password').value;
  var validateEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  if(!validateEmail.test(email)) {
    document.getElementById('wrong-email');
    error = true;
  }
  var validatePassword = reviewPassword() == false ? error = true : ''; //Ternary conditional to simplificate
  var validateRepeatPassword = reviewRepeatPassword() == false ? error = true : '';
  // Compare the passwords
  if(password !== repeatPassword){
    error = true;
    document.getElementById('wrong-repeat-password').textContent='The password is not valid';
  }
  var validateFirstName = reviewFirstName() == false ? error = true : '';
  var validateLastName = reviewLastName() == false ? error = true : '';
  var validateDate = reviewDate() == false ? error = true : '';
  var validateDocument = reviewDocument() == false ? error = true : '';
  var validatePhone = reviewPhone() == false ? error = true : '';
  var validateCity = reviewCity() == false ? error = true : '';
  var validateAdress = reviewAdress() == false ? error = true : '';
  var validatePostCode = reviewPostCode() == false ? error = true : '';
  if(error == false){
    var name = document.getElementById('first-name').value;
    var lastname = document.getElementById('last-name').value;
    var document_number = document.getElementById('document').value;
    var date_birth = document.getElementById('date'). value;
    var phone_number = document.getElementById('phone').value;
    var adress = document.getElementById('adress').value;
    var city = document.getElementById('city').value;
    var postCode = document.getElementById('post-code').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var repeatPassword = document.getElementById('repeat-password').value;
    return  window.confirm('New User '+ name + ' ' + lastname + ' ' + document_number + ' '+ date_birth + ' ' + 
    adress + ' ' + city + ' ' + postCode + ' ' + email + ' ' + password);
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
  var validateName = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' '];
  var nameToArray = name.split('');
  if(name.length < 3){
    error = true;
  }
  for(var i = 0; i < name.length; i++){
    var findLetter = validateName.indexOf(nameToArray[i]);
    if(findLetter == -1){
    error = true;
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
  var validateName = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' '];
  var nameToArray = lastname.split('');
  if(lastname.length < 3){
    error  = true;
  }
  for(var i = 0; i < lastname.length; i++){
    var findLetter = validateName.indexOf(nameToArray[i]);
    if(findLetter == -1){
      error = true;
      break;
    }
    }
  if(error == true){
      document.getElementById('wrong-last-name').textContent="The Last Name is not valid";
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
  }
  for(var i = 0; i < document_number.length; i++){
    var number_position = parseInt(documentToArray[i]);
    if(isNaN(number_position) == true){
      error = true;
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
  }
  
  if(date.toString() == 'Invalid Date'){
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
  }
  for(var i = 0; i < phone_number.length; i++){
    var number_position = parseInt(phoneToArray[i]);
    if(isNaN(number_position) == true){
      error = true;
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
  }
  for(var i = 0; i < adress.length; i++) {
    var findInvalidChar = illegalChars.indexOf(adressToArray[i]);
    if(findInvalidChar != -1){
    error = true;
    }
  }
  var findSpace = adress.indexOf(space);
  console.log(findSpace, adress.length)
    if(findSpace == -1 || findSpace ==  adress.length -1){ //If there is a space at the end, the index will be equal to the lenght of the adress - 1
      error = true;
    }
    console.log(findSpace)
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
  var validateCityLetter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' '];
  var cityToArray = city.split('');
  var error = false;
  if(city.length < 3){
    error = true;
  } 
  for (var i=0; i < city.length; i++){
    var findLetter = validateCityLetter.indexOf(cityToArray[i]);
    if (findLetter == -1 ){
      error = true; 
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
  }
  for(var i = 0; i < postCode.length; i++){
    var number_position = parseInt(phoneToArray[i]);
    if(isNaN(number_position) == true){
      error = true;
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
  if(!validateEmail.test(email)) { // I've put the "!" in order to validate if the condition is FALSE
    document.getElementById('wrong-email').textContent='The email is not valid'
  }
}
function clearPassword(){
  var password = document.getElementById('password'); 
  document.getElementById('wrong-password').textContent=' ';
  password.value = '';
}
function reviewPassword(){
  var password = document.getElementById('password').value;
  var validatePassword = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' '];
  var validatePassword2 = ['1','2','3','4','5','6','7','8','9', '0'];
  var passwordToArray = password.split(''); 
  var error = false; //This is in order to display the alert or not. We presume that the password is correct.
  var isLetter = false;
  var isNumber = false;
  for (var i=0; i < password.length; i++){
    var findLetter = validatePassword.indexOf(passwordToArray[i]);
    var findNumber = validatePassword2.indexOf(passwordToArray[i]);
    if(findLetter != -1){
        isLetter = true;
    }
    if(findNumber != -1){
      isNumber = true;
    }
    if (findLetter == -1 && findNumber == -1) {
      error = true; //the loop didn't find a letter or a number
      break;
    }
  }
  if(password.length < 8){
    error = true;
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
  var validatePassword = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',' '];
  var validatePassword2 = ['1','2','3','4','5','6','7','8','9', '0'];
  var passwordToArray = password.split(''); 
  var error = false; //This is in order to display the alert or not. We presume that the password is correct.
  var isLetter = false;
  var isNumber = false;
  for (var i=0; i < password.length; i++){
    var findLetter = validatePassword.indexOf(passwordToArray[i]);
    var findNumber = validatePassword2.indexOf(passwordToArray[i]);
    if(findLetter != -1){
    isLetter = true;
    }
    if(findNumber != -1){
      isNumber = true;
    }
    if (findLetter == -1 && findNumber == -1) {
      error = true; //the loop didn't find a letter or a number
      break;
    }
  }
  if(password.length < 8){
    error = true;
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