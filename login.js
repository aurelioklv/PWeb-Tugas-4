const form = document.querySelector("form");

form.onsubmit = () => {
    alert("Login successfully");
};

const link_signup = document.querySelector(".form .link .signup-link");
link_signup.href = "signup.html";
