const person1 = {
    firstName: "John",
    lastName: "Doe"
}

const person2 = {
    firstName: "Mary",
    lastName: "Doee"
}

const person = {
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
}

let name = person.fullName.call(person1);
// console.log(name);
console.log(person1.firstName.call());