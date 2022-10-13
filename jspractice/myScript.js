


const numbers = [2,3,4,5,6,7];
// let greaterNum = numbers.filter(checkNum);
// // console.log(greaterNum);
// document.getElementById("mypara").innerHTML = "some text for: " + greaterNum;
// function checkNum(x){
//     return x > 3;
// }


//foreach

 numbers.forEach(getNum);
function getNum(x, index, arr){
    arr[index] = x * 5 ;

}
document.getElementById("mypara").innerHTML = "Numbers multiplication: " + numbers;