
window.onload = function(){
  document.getElementById("email").addEventListener("blur",reviewEmail);
  document.getElementById("email").addEventListener("focus",clearEmail);
  document.getElementById("send").addEventListener("click",logIn);
}

function reviewEmail(){
  var email = document.getElementById('email').value;
  var validateEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  if(!validateEmail.test(email)) { // I've put the "!" in order to validate if the condition is FALSE
    document.getElementById("wrong-email").textContent="The email is not valid";
    document.getElementById("email").focus(); //Getting "focus" event in the incorrect email.
    email = '';
  }
}
function clearEmail(){
  var email = document.getElementById("email"); //Getting "focus" event in the incorrect email.
  email.value = '';
}

function logIn(event) {
  event.preventDefault(); //This prevents the page of being re-directed
  var email = document.getElementById('email').value;
  var validateEmail = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/; //Regular expression
  if(!validateEmail.test(email)) { // I've put the "!" in order to validate if the condition is FALSE
    document.getElementById("wrong-email").textContent="The email is not valid";
    document.getElementById("email").focus(); //Getting "focus" event in the incorrect email.
    // email = '';
  }

    /*¡`'
    var password = document.getElementById('password').value;
    if (clave.length < 6) {
      alert('La clave no es válida');
      return;
    }
    this.submit();
    */
   return false;
  }
  //Blur event:
  function writeEmail(email) { 
    document.getElementById("email").blur();

  }

//buttonSend.addEventListener('Click', logIn); //This event allows me to make the click and then executes the function above.