// objects are variables that can store multiaple values or properties, and methods

//  we can create objects with classes
class Person {
    constructor(username, age, isMarried) {
        this.username = username;
        this.age = age;
        this.isMarried = isMarried;
    }

    canTalk = () => console.log('Hello, I am ' + this.username);
}

let person3 = new Person('Sam', 30, true);
console.log(person3);
person3.canTalk();

document.getElementById('username').innerHTML = person3.username;
document.getElementById('age').innerHTML = person3.age;
document.getElementById('isMarried').innerHTML = person3.isMarried;