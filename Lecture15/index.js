
const handleData = (e) => {
    e.preventDefault();

    let user = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        number: document.getElementById('number').value,
        password: document.getElementById('password').value
    }

    if (user.username.length < 2) {
        alert("username must be at least 2 characters")
        return

    }

    if (user.number.length != 10) {
        alert("number must be at least 10 characters")
        return
    }

    if (user.password.length < 6) {
        alert("password must be at least 6 characters")
        return
    }


    console.log(user);

    // if (user.username.length >= 2 && user.email.length > 0 && user.password.length >= 6 && user.number.length == 10) {
    //     console.log(user);
    // }
    // else {
    //     alert('Please enter  all  required fields')
    // }




}




document.getElementById("userData").addEventListener("submit", handleData)