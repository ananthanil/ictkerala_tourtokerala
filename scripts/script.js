var loginemail = document.getElementById("loginemail");
var loginpwd = document.getElementById("loginpwd");

function loginvalidation(){
    if(loginemail.value =="" || loginpwd.value ==""){
        alert("you cannot be login");
        return false;
    }
    else{
        alert("you can login");
        return true;
    }
}