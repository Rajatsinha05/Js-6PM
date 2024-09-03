import getValue from "../components/helper.js";
import Navbar from "../components/Navbar.js";

document.getElementById("navbar").innerHTML = Navbar();

let isLogin = localStorage.getItem("isLogin") || false;

if (isLogin == false) {
    window.location.href = "/pages/login.html";
}


let products = JSON.parse(localStorage.getItem("products")) || [];


const handleSubmit = (e) => {
    e.preventDefault();

    let product = {
        title: getValue(".title"),
        price: getValue(".price"),
        category: getValue(".category"),
        img: getValue(".img"),
    };
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));

};

document.getElementById("productData").addEventListener("submit", handleSubmit);
