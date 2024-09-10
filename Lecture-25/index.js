let arr = [];

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
        title: document.getElementById("title").value,
        price: document.getElementById("price").value
    }
    arr.push(data)
    createDataToDB(data)

    showData();
})

const showData = (arr) => {
    document.getElementById("product-list").innerHTML = ""
    arr.map((e) => {
        console.log(e);
        const div = document.createElement("div");
        const title = document.createElement("h2");
        const price = document.createElement("p");

        title.innerHTML = e.title
        price.innerHTML = e.price
        div.append(title, price)
        document.getElementById("product-list").append(div)
    })
}

const getDataTODB = async () => {
    let req = await fetch('http://localhost:3000/products');
    let data = await req.json();
    showData(data);
}

const createDataToDB = async (data) => {
    await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(data)
    });
}


getDataTODB();


