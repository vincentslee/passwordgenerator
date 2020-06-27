// Assignment Code
var generateBtn = document.querySelector("#generate");

//Character Strings
//spc characters 36-47,58-64
//numbers 48-57
//uppers 65-90
//lowers 97-122


//password generate function
function generatePassword(p) {
  
  //Criteria selection
  var len = prompt("How long do you want the password to be? (8-128)");
  if ((len<8) || (len>128)) {
    alert("Invalid length");
    return "***invalid***";
  }
  
  var sml = confirm("Allow lowercase letters?");
  var big = confirm("Allow uppercase letters?");
  var num = confirm("Allow numbers?");
  var spc = confirm("Allow special characters?");
  
  if (sml != true && big != true && num !=true && spc != true) {
    alert("Invalid criteria (press ok at least once)");
    return "***invalid***";
  }

  //Randomly generates one of each selected character type and adds to beginning of the password string, in order to match criteria
  var p ="";
  var max = 122;
  var min = 36;

  if (sml == true) {
    max = 122;
    min = 97;
    var i = Math.floor(Math.random() * (max - min +1)) + min;
    var p = p + String.fromCharCode(i);
  }
  
  if (big == true) {
    max = 65;
    min = 90;
    var i = Math.floor(Math.random() * (max - min +1)) + min;
    var p = p + String.fromCharCode(i);
  }
  
  if (num == true) {
    max = 48;
    min = 57;
    var i = Math.floor(Math.random() * (max - min +1)) + min;
    var p = p + String.fromCharCode(i);
  }

  if (spc == true) {
    max = 36;
    min = 47;
    var i = Math.floor(Math.random() * (max - min +1)) + min;
    var p = p + String.fromCharCode(i);
  }
  
  //loop that adds randomly generated charcters to end of string until string reaches desired length
  while(p.length<len) {
    max = 122;
    min = 36;
    var i = Math.floor(Math.random() * (max - min +1)) + min;
    
    if (sml == true) {
      if (97<i && i<122) {
        var p = p + String.fromCharCode(i);
      }
    }
    
    if (big == true) {
      if (65<i && i<90){
        var p = p + String.fromCharCode(i);
      }
    }
    
    if (num == true) {
      if (48<i && i<57) {
        var p = p + String.fromCharCode(i);
      }
    }
  
    if (spc == true) {
      if ( (36<i && i<47) || (58<i && i<64) ) {
        var p = p + String.fromCharCode(i);
      }
    }
  
  
  }
  
  return p;
  console.log(p);

}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
