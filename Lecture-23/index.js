
let count = sessionStorage.getItem('count') ||0
console.log("count", count);

document.getElementById('count').innerHTML = count

const handleCount = () => {
    count++
    document.getElementById('count').innerHTML = count
    sessionStorage.setItem("count", count)
};


document.getElementById("add").addEventListener("click", handleCount)