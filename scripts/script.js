var loginemail = document.getElementById("loginemail");
var loginpwd = document.getElementById("loginpwd");
var error_message =document.getElementById("error_message");

function loginvalidation(){
    if(loginemail.value =="" || loginpwd.value ==""){
        error_message.innerText = "field cannot be empty";
        return false;
    }
}