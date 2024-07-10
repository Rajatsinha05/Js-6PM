

const printArray = (arr) => {
    let n = arr.length;

    for (let i = 0; i < n; i++) {
        console.log(`index ${i} value ${arr[i]}`);
    }

}


const arraySum = (arr) => {
    let n = arr.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += arr[i];
    }
    console.log(sum);

}

const oddIndexSum = (arr) => {

    let n = arr.length;
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (i % 2 == 1) {
            sum += arr[i];
        }

    }
    console.log(sum);
}


const evenValueSum = (arr) => {
    let n = arr.length;
    let evensum = 0;
    let oddSum = 0
    for (let i = 0; i < n; i++) {
        if (arr[i] % 2 == 0) {
            evensum += arr[i];
        }
        else {
            oddSum += arr[i];
        }
    }


    if (evensum > oddSum) {
        console.log(evensum - oddSum);
    }
    else {
        console.log(oddSum - evensum);
    }

}



let arr = [10, 24, 35, 40, 53, 67]
let arr2 = [30, 49, 60]
evenValueSum(arr2)