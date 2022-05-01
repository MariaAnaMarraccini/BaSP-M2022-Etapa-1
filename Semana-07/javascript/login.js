
window.onload = function(){
  document.getElementById('email').addEventListener('blur',reviewEmail);
  document.getElementById('email').addEventListener('focus',clearEmail);
  document.getElementById('send').addEventListener('click',logIn);
  document.getElementById('password').addEventListener('blur',reviewPassword);
  document.getElementById('password').addEventListener('focus',clearPassword);
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
    document.getElementById('wrong-email').textContent='The email is not valid';
  }
}
function logIn(event){
  event.preventDefault();
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value; 
  var validateEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  if(!validateEmail.test(email)) {
    document.getElementById('wrong-email').textContent='The email is not valid';
    window.confirm('The email is not valid')
  }
  var validatePassword = reviewPassword();
  if(email.length > 0 && password.length > 0 && validatePassword == true && validateEmail.test(email) == true){
    //Using FETCH.
    fetch(`https://basp-m2022-api-rest-server.herokuapp.com/login?email=${email}&password=${password}`)
    .then(function (response){
      console.log(response)
      return response.json()
      })
      .then(function (jsonResponse){
      console.log("Data", jsonResponse)
      if (jsonResponse.success){
      console.log("Good")
      localStorage.setItem('Email', JSON.stringify(email));
      localStorage.setItem('Password', JSON.stringify(password));
      return window.confirm(email + ' valid user detected with password: ' + password);
      //return jsonResponse
      } else {
      //throw jsonResponse
      return alert(jsonResponse.msg);
      }
      })
      .catch(function (error){
      console.warn('Error', error)
      })
}else if(validatePassword == false || password.length < 8){
  window.confirm('The password is not valid')
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
  var validatePassword2 = ['0','1','2','3','4','5','6','7','8','9']
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
      error = true; //the loop didn't find a letter or a number (it found another character)
      break;
    }
  }
  if(password.length < 8){
    error = true;
  }
  if (error == true){
    document.getElementById('wrong-password').textContent="The password is not valid";
    return false;
  }else if(isLetter == false || isNumber == false){
    document.getElementById('wrong-password').textContent="The password is not valid";
    return false;
  }
  return true;
}