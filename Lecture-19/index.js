

setInterval(() => {
    const date = new Date()
    console.log(`${date.getHours()}: ${date.getMinutes()} : ${date.getSeconds()}`);
    document.getElementById("hrs").innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()
}, 1000)