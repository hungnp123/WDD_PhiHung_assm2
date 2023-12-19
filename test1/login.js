let username = document.getElementById("username");
let password = document.getElementById("password");
let loginBtn = document.getElementById("Login");
let form = document.getElementsByClassName("login-form");

function checkLogin(user, pass) {
    if ((user == "admin") && (pass == "123@123a")) {
        alert("Login succesfuly");
        window.location.href = "D:/xampp/htdocs/test1/home.html";
    }
    else {
        alert("Wrong username or password");
        username.textContent = "";
        password.textContent = "";
    }
}

loginBtn.addEventListener("click", function (event) {
    event.preventDefault();
    let user = username.value;
    let pass = password.value;
    checkLogin(user, pass);
});