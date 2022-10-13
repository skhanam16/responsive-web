// const numbers = [4, 5, 8, 7, 9];
// const myNumbers = numbers.map(myFunction);

// function myFunction(num){
//     return num*10;
// }

const persons = [
    {firstName : "Malcom", lastName: "Reynolds"},
    {firstName : "Kaylee", lastName: "Frye"},
    {firstName : "Jayne", lastName: "Cobb"},
    {firstName : "Michelle", lastName: "Parker"},
];
const personList = persons.map(myfunction);
function myfunction(item){
    return [item.firstName,item.lastName] .join ( " ")

}
document.getElementById("demo").innerHTML = personList;
// console.log(newNubers);