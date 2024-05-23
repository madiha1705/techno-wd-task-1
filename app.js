


function changeTextColor() {
    var input = document.getElementById("dobInput");
    input.style.color = "black";
  };
  
  function changeTextColor() {
    var input = document.getElementById("countryInput");
    input.style.color = "black";
  };
  
  // Function to handle login
  function login() {
    // Get the username and password input values
    var usernameInput = document.querySelector(".sign-in-form input[type='text']");
    var passwordInput = document.querySelector(".sign-in-form input[type='password']");
  
    // Check if both fields are filled
    if (usernameInput.value.trim() !== "" && passwordInput.value.trim() !== "") {
      // Simulate a successful login
      alert('Login successful!');
    } else {
      // If fields are not filled, show an alert
      alert('Please enter both username and password.');
    }
  }
  
  var myInput = document.getElementById("psw");
  var letter = document.getElementById("letter");
  var capital = document.getElementById("capital");
  var number = document.getElementById("number");
  var length = document.getElementById("length");
  
  // When the user clicks on the password field, show the message box
  myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
  }
  
  // When the user clicks outside of the password field, hide the message box
  myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
  }
  
  // When the user starts to type something inside the password field
  myInput.onkeyup = function() {
    // Validate lowercase letters
    var lowerCaseLetters = /[a-z]/g;
    if(myInput.value.match(lowerCaseLetters)) {  
      letter.classList.remove("invalid");
      letter.classList.add("valid");
    } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
    }
    
    // Validate capital letters
    var upperCaseLetters = /[A-Z]/g;
    if(myInput.value.match(upperCaseLetters)) {  
      capital.classList.remove("invalid");
      capital.classList.add("valid");
    } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
    }
  
    // Validate numbers
    var numbers = /[0-9]/g;
    if(myInput.value.match(numbers)) {  
      number.classList.remove("invalid");
      number.classList.add("valid");
    } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
    }
    
    // Validate length
    if(myInput.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
    } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
    }
  }
  