let products = JSON.parse(localStorage.getItem("products")) || [];


const handleDelete = (index) => {
    console.log(index);

    products.splice(index, 1);
    mapper(products)
    localStorage.setItem("products", JSON.stringify(products))

}

const mapper = (products) => {
    // for(let i=0; i<products.length; i++){

    //     let title=document.createElement("h3")
    //     title.innerHTML=products[i].title
    // }
    document.getElementById("productsList").innerHTML = ""
    products.map((ele, index) => {
        let title = document.createElement("h3");
        title.innerHTML = ele.title;
        let price = document.createElement("p");
        price.innerHTML = ele.price;
        let img = document.createElement("img");
        img.src = ele.img;
        let category = document.createElement("p");
        category.innerHTML = ele.category;
        let btnDlt = document.createElement("button");
        btnDlt.innerHTML = "<a h"
        btnDlt.addEventListener("click", () => handleDelete(index))
        let div = document.createElement("div");
        div.append(img, title, price, category, btnDlt);
        document.getElementById("productsList").append(div);
    });
};

mapper(products);
