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

// start login validation

function loginvalidation(){
    if(loginemail.value =="" || loginpwd.value ==""){
        error_message.innerText = "field cannot be empty";
        return false;
    }
}

// end of login validation

// start signup validation

function signupvalidation(){
    if(loginemail.value =="" || loginpwd.value ==""){
        error_message.innerText = "field cannot be empty";
        return false;
    }
}

// start signup validation