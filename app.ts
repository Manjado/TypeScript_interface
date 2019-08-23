interface NamedPerson {
    firstName: string;
    age?: number;
    [propName: string]: any;
    greet(lastName: string): void;
}

function greet(person: NamedPerson) {
    console.log("Hello, " + person.firstName);
}

function changeName(perosn: NamedPerson) {
    person.firstName = "Anna";
}

const person = {
    firstName: "Mike",
    age: 27,
    hobbies: ["Cooking", "Sports"],
    greet(lastName: string) {
        console.log("Hi, I am " + this.firstName + " " + lastName)
    }
};

//greet(person);
changeName(person);
greet(person);
person.greet('Someone');

class Person implements NamedPerson {
    firstName: string;
    lastName: string;
    greet(lastName: string) {
        console.log("Hi, I am " + this.firstName + " " + lastName)
    }
}

const myPerson = new Person();
myPerson.firstName = "Mike";
myPerson.lastName = "Anything";
greet(myPerson);
myPerson.greet(myPerson.lastName );

//function types

interface DoubleValueFunc {
    (number1: number, number2: number): number
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function (value1: number, value2: number) {
    return (value1 + value2) * 2;
};

console.log(myDoubleFunction(10,20));

// Interface Inheritance

interface AgedPerson extends NamedPerson {
    age: number;
}

const oldPerson: AgedPerson = {  //some properties are optional in the basic interface so you don't have to specify them
    age: 27,
    firstName: 'Mike',
    greet(lastName: string) {
        console.log("Hello");
    }
};

console.log(oldPerson);
