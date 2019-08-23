"use strict";
function greet(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(perosn) {
    person.firstName = "Anna";
}
var person = {
    firstName: "Mike",
    age: 27,
    hobbies: ["Cooking", "Sports"],
    greet: function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};
//greet(person);
changeName(person);
greet(person);
person.greet('Someone');
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
    return Person;
}());
var myPerson = new Person();
myPerson.firstName = "Mike";
myPerson.lastName = "Anything";
greet(myPerson);
myPerson.greet(myPerson.lastName);
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleFunction(10, 20));
var oldPerson = {
    age: 27,
    firstName: 'Mike',
    greet: function (lastName) {
        console.log("Hello");
    }
};
console.log(oldPerson);
