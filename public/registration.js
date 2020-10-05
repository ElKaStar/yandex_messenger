document.getElementById("regForm").addEventListener("submit", function(event){
    event.preventDefault();
    const regForm_firstName = document.getElementById("regForm_firstName");
    const regForm_lastName = document.getElementById("regForm_lastName");
    const regForm_email = document.getElementById("regForm_email");
    const regForm_phone = document.getElementById("regForm_phone");
    const regForm_login = document.getElementById("regForm_login");
    const regForm_password = document.getElementById("regForm_password");
    console.log(`firstName: login: ${regForm_firstName.value}, 
                lastName: ${regForm_lastName.value},
                email: ${regForm_email.value},
                phone: ${regForm_phone.value},
                login: ${regForm_login.value},
                password: ${regForm_password.value}`
    )
});