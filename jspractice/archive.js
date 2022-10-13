// == function ==
// var mynum = parseInt(prompt("enter a number"));
// var mynum2 = parseInt(prompt("enter a number"));
// var num1 = 200;
// document.write(num1  + "<br>");


// ==traditional function====
// function square(x,y){
//     var num = x;
//     var num2 = y
//     var output = num * num2;
//     return output;
//     document.write(output  + "<br>");
//     console.log(output);
// }
// var z = square(mynum, mynum2);
// document.write(z);



// == Ternary Operator ==

// var num = Number(prompt("enter a number"));
// document.write(num);
// if( num >0){
//     document.write(num + "num is positive");
// }

// else {
//     document.write(num + "num is negative");
// }
// var result = num > 0 ? "positive" : "negitive";
// var result = num > 0 ? "positive" : num < 0? "negitive" : "zero";
// document.write(result);



//==iife===
(function display(x){
    document.write(x + "<br/>")
})(" this is terrific");

// var z = display();
// document.write(z);

// TASK 7: create an IIFEs that print sum of two numbers

(function myfunc(x,y){
    var x = x;
    var y = y;
    var sum = x + y;
    document.write(sum + "<br/>")
})(10,20);

// function expression
let myExp = function displayMessage(x){
    document.write(x + "<br/>");
}
myExp(" HI this is my terrific message from func expression");


// ===Array==
var items = ["bike", "tv", "car", "camera", "table"];
// document.write(items.length);
var newArray = items.push("Microwave");
document.write(items.length + "<br>");
document.write(items + "<br>");
items.pop();
document.write(items + "<br>");
items.shift();
document.write(items + "<br/>");
items.unshift("Bed");
document.write(items + "<br>");

for(var x=0; x<=items.length; x=x+1){
    document.write(items[x] +"<br>");
}