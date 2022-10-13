const numbers = [5,8,9,7];
let sum = 0;
function sumAdd(){
    for(let i =0; i<numbers.length; i++){
        sum +=numbers[i];
    }

    return sum;
}

let result = sumAdd(numbers);
document.getElementById("mypara").innerHTML = "Numbers multiplication: " + result;