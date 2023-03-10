const form = document.querySelector("form");

const link_login = document.querySelector(".form .link .login-link");
link_login.href = "index.html";

function create_account() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmationPassword = document.getElementById("confirmation-password").value;

    var letters = /^[A-Za-z]+$/;
    var email_val = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (username == '' || email == '' || password == '' || confirmationPassword == '') {
        alert("Enter each details correctly");
    }
    else if (!letters.test(username)) {
        alert("Name is incorrect. Must contain alphabets");
    }
    else if (!email_val.test(email)) {
        alert("Invalid email format. Please enter valid email");
    }
    else if (password != confirmationPassword) {
        alert("Password not matching");
    }
    else if (document.getElementById("password").value.length > 12) {
        alert("Password maximum length is 12");
    }
    else {
        alert("Your account has been created successfully");
    }
}