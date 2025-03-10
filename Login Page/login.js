var signinobj = {};
let loader = document.getElementsByClassName('loader')[0];
function changehandle(e, type) {
    if (type == "email") {
        signinobj["email"] = e.target.value;
    }
    else {
        signinobj["password"] = e.target.value;
    }
}
var entireloginpage = document.getElementById('login-section');
var loginloader = document.getElementsByClassName('loader1')[0];
function clickhandle() {
    if (signinobj && Object.values(signinobj).length == 2) {
        var email = document.getElementById('email');
        var pwd = document.getElementById('password');
        email.value = "";
        pwd.value = "";
        var getdata = localStorage.getItem('user_register_data');
        var storeddata = JSON.parse(getdata);
        var somefun = storeddata.some(function(val){
            return (val.email == signinobj.email && val.password == signinobj.password);
        });
        console.log(somefun);
        if (somefun === true){
            entireloginpage.style.display = 'none';
            loginloader.style.display = 'block';
            setTimeout(function(){
                loginloader.style.display = 'none';
                console.log("suc");
                window.location.href = "http://127.0.0.1:5500/Exercise%202.html";
            },5000);
        };
    }
    else{
        alert ("please enter all the valid input fields");
    }
}
function clicksignup() {
    var signin = document.getElementsByClassName('signin-div')[0];
    signin.style.display = "none";
    var signup = document.getElementsByClassName('form-div')[0];
    signup.style.display = "block";
}
var signup_obj = {};
var masterstorage = [];
var signup_name = document.getElementById('Username');
var signup_email = document.getElementById('emailaddress');
var signup_password = document.getElementById('passwordfield');
var signup_mobilenumber = document.getElementById('Mobile');
var register = document.getElementsByClassName('reg-button')[0];
var signin = document.getElementsByClassName('signin-div')[0];
var signup = document.getElementsByClassName('form-div')[0];
function reghandler(event, type) {
    if (type == "username") {
        signup_obj["username"] = event.target.value;
    }
    else if (type == "email") {
        signup_obj["email"] = event.target.value
    }
    else if (type == "password") {
        signup_obj["password"] = event.target.value
    }
    else if (type == "mobile") {
        signup_obj["mobile"] = event.target.value
    }
}

function clickregister() {
    if(signup_obj&&Object.keys(signup_obj).length == 4){
        masterstorage.push(signup_obj);
        signup_name.value="";
        signup_email.value="";
        signup_password.value="";
        signup_mobilenumber.value="";
        signup_obj={};
        localStorage.setItem("user_register_data", JSON.stringify(masterstorage));
        register.style.display = "none";
        loader.style.display ='block';
    setTimeout(function () {
        register.style.display = "block";
        loader.style.display ='none';
        signin.style.display = "block";
        signup.style.display = "none";
    }, 3000);
    }  
    else{
        alert("please enter all the valid input fields");
    }
        
    //console.log(masterstorage);
}







