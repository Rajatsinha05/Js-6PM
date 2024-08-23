let products = JSON.parse(localStorage.getItem("products")) || []

const handleData = (e) => {
    e.preventDefault();

    let data = {
        title: document.getElementById("title").value,
        price: document.getElementById("price").value,
        img: document.getElementById("img").value,
        category: document.getElementById("category").value,
    };
    products.push(data);
    localStorage.setItem("products", JSON.stringify(products));
};

document.getElementById("productData").addEventListener("submit", handleData);
