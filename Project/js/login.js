import getValue from "../components/helper.js";
import Navbar from "../components/Navbar.js";

document.getElementById("navbar").innerHTML = Navbar();

let users = JSON.parse(localStorage.getItem("users")) || [];
const handleData = (e) => {
  e.preventDefault();

  let user = {
    email: getValue(".email"),
    password: getValue(".password"),
  };

  let isMatched = users.filter(
    (ele) => ele.email == user.email && ele.password == user.password
  );

  if (isMatched.length > 0) {
    alert("login success")
     
    localStorage.setItem("username",isMatched[0].username)


    localStorage.setItem("isLogin", true)


    window.location.href = "/index.html"
  }
  else {
    alert("login failure")
  }
};

document.querySelector("#userData").addEventListener("submit", handleData);
