var items = ["bike", "tv", "car", "camera", "table"];
document.write(items +"<br>");
items.splice(1,0,"Freeze","Laptop");
document.write(items +"<br>");
// items.splice(1,2,"Freeze","Laptop");
// document.write(items +"<br>");
var newArray = items.slice(1);
document.write(newArray +"<br>");
document.write(items +"<br>");

var sortArray = items.sort();
document.write(sortArray +"<br>");
