
let count = 0
let maxCount = document.getElementById("count").innerHTML
let id = setInterval(() => {
    document.getElementById("count").innerHTML = count
    count += 1
    if (count == Number(maxCount) + 1) {
        clearInterval(id)
    }
}, 10)