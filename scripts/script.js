var loginemail = document.getElementById("loginemail");
var loginpwd = document.getElementById("loginpwd");
var error_message =document.getElementById("error_message");
var signup_firstName = document.getElementById("signup_firstName");
var signup_lastName = document.getElementById("signup_lastName");
var signup_inputEmail4 = document.getElementById("signup_inputEmail4");
var signup_mobile4 = document.getElementById("signup_mobile4");
var signup_inputPassword4 = document.getElementById("signup_inputPassword4");
var signup_confirminputPassword4 = document.getElementById("signup_confirminputPassword4");
var signup_inputAddress = document.getElementById("signup_inputAddress");
var signup_inputAddress2 = document.getElementById("signup_inputAddress2");
var signup_inputCity = document.getElementById("signup_inputCity");
var signup_inputZip = document.getElementById("signup_inputZip");
var signup_gridCheck = document.getElementById("signup_gridCheck");
var signup_inputState = document.getElementById("signup_inputState");



// starting of regular express

var mobile =/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;   
var regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/; 
var zipexp = /^([0-9]{6})$/;
var regpass = /^(?=.*[A-Za-z])(?=.*\d)[A-za-z0-9]{8,}$/;

// end of regular express

// staring of login validation

function loginvalidation(){

    if(loginemail.value == "" || loginpwd == ""){
        error_message.innerText = "field cannot be empty";
        return false;
    }

    if(!regexp.test(loginemail.value)){
        error_message.innerText = "required email address formate";   
        return false; 
      }

      if(!regpass.test(loginpwd.value)){
        error_message.innerText = "Password doesnot meet";
        return false;
    }
    
}

// end of login validation

// starting of sign up validation

function signupvalidation(){
  var state = signup_inputState.options[signup_inputState.selectedIndex].value;

  if(signup_firstName.value =="" || signup_lastName.value =="" || signup_inputEmail4.value =="" || signup_inputPassword4.value =="" || signup_confirminputPassword4.value == "" || signup_inputAddress.value == "" || signup_inputAddress2.value == "" || signup_inputCity.value == "" || signup_mobile4.value == "" || signup_inputZip.value == "" || signup_gridCheck.checked == "" || state==0){
      error_message.innerText = "field cannot be empty";
      return false;
  }
    
  if(!regexp.test(signup_inputEmail4.value)){
    email_message.innerText = "invalid emaill address";   
    return false; 
  }

  if(!signup_mobile4.value.match(mobile)){
    mobile_message.innerText = "invalid mobile number";
    return false;
    }

    if(!regpass.test(signup_inputPassword4.value)){
        password_message.innerText = "Password doesnot meet";
        return false;
    }

    if(signup_inputPassword4.value != signup_confirminputPassword4.value){
        confirm_password_message.innerText = "Password is not matching";
        return false;
    }

  if(!zipexp.test(signup_inputZip.value)){
    zip_message.innerText = "required 6 digit code";
      return false;
  }       
}
// end of sign up validation