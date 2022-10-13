
function Person(first, last, age, eyecolor) {
    this.x = first;
    this.y = last;
    this.age = age;
    this.eyecolor = eyecolor;

}
Person.prototype.nationality = "English";
Person.prototype.fullName = function(){
    return this.x +  " " + this.y;
}
const p1 = new Person("John", "Doe", 40, "blue");
// p1.nationality = "English";
// console.log(p1.nationality);
console.log(p1.fullName());