
const handleData = (e) => {
    e.preventDefault();

    let user = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        number: document.getElementById('number').value,
        password: document.getElementById('password').value
    }

    let regexNumber = /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[6789]\d{9}|(\d[ -]?){10}\d$/
    let regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    if (!(regexNumber.test(user.number))) {
        alert("Invalid number")
        document.getElementById('number').style.border = "5px solid red"
    }
    if (!regexPassword.test(user.password)) {
        alert("Invalid password")
    }




    // if (user.username.length < 2) {
    //     alert("username must be at least 2 characters")
    //     return

    // }



    // if (user.password.length < 6) {
    //     alert("password must be at least 6 characters")
    //     return
    // }




    // if (user.username.length >= 2 && user.email.length > 0 && user.password.length >= 6 && user.number.length == 10) {
    //     console.log(user);
    // }
    // else {
    //     alert('Please enter  all  required fields')
    // }




}


document.getElementById('password').addEventListener("input", () => {
    let password = document.getElementById('password').value
    let regexPassword = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    if (!regexPassword.test(password)) {
        document.getElementById('password').classList.add('error')
    }
    else {
        document.getElementById('password').classList.remove('error')
    }



})



document.getElementById("userData").addEventListener("submit", handleData)