const form = document.querySelector("form");
const email_val = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

form.onsubmit = () => {
    var email = document.getElementById("email").value;

    if (!email_val.test(email)) {
        alert("Invalid email format. Please enter valid email");
        return;
    }
    alert("Login successfully");
};

const link_signup = document.querySelector(".form .link .signup-link");
link_signup.href = "signup.html";