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


// start login validation

function loginvalidation(){
    if(loginemail.value =="" || loginpwd.value ==""){
        error_message.innerText = "field cannot be empty";
        return false;
    }
    else if(loginemail.value != ""){
        let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
        if(regexp.test(loginemail.value)){
            return true;
        }
        else{
            error_message.innerText = "required proper email address formate";
            return false;   
        }
    }
    else{
        return true;
    }
}

// end of login validation

// start signup validation

function signupvalidation(){
    var state = signup_inputState.options[signup_inputState.selectedIndex].value;
    if(signup_firstName.value =="" || signup_lastName.value =="" || signup_inputEmail4.value =="" || signup_inputPassword4.value =="" || signup_confirminputPassword4.value == "" || signup_inputAddress.value == "" || signup_inputAddress2.value == "" || signup_inputCity.value == "" || signup_mobile4.value == "" || signup_inputZip.value == "" || signup_gridCheck.checked == "" || state==0){
        error_message.innerText = "field cannot be empty";
        return false;
    }

    else if(signup_inputEmail4.value != ""){
        let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
        if(regexp.test(signup_inputEmail4.value)){
            return true;
        }
        else{
            error_message.innerText = "required email address formate";
            return false;   
        }
    }
    
    else if(signup_mobile4.value != ""){
        var mobile =/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;         
        if(signup_mobile4.value.match(mobile)){
            return true;
            }
        else{
            error_message.innerText = "required 10 digit mobile only";
            return false;
            }
        }
    
    else{
        return true;
    }
}

// start signup validation