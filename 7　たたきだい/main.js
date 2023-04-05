
let numbers = [2, 5, 12, 13, 15, 18, 22];


function isEven(num) {
    return num % 2 == 0;
}

function isEvenIncluded(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        if (isEven(num)) {
            return true;
        }
    }
    return false;
}   

console.log(num + 'は偶数です');



