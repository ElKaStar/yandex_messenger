
document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();
    const loginFormLogin = document.getElementById("loginForm_login");
    const loginFormPassword = document.getElementById("loginForm_password");
    console.log(`loginForm: login: ${loginFormLogin.value}, password: ${loginFormPassword.value}`)
});

