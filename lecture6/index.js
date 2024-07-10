

const sum = () => {

    // value from input field
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    // sum
    let sum = Number(num1) + Number(num2)


    // display to the screen
    document.getElementById('result').innerHTML = `sum of ${num1} and ${num2} :  ${sum}`;


}