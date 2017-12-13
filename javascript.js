//factory method
var peopleFactory= function(name,age,city) {
    var temp = {};
    temp.name = name;
    temp.age = age;
    temp.city = city;
    temp.printPerson = function () {
        console.log(this.name + ',' + this.age + ',' + this.city)
    };
    return temp;
}
var person1= peopleFactory('bob',26,'fremont');
var person2= peopleFactory('john',32,'fremont');
person1.printPerson();
person2.printPerson();
//construction method
var peopleConstructor= function(name,age,city) {
    this.name = name;
    this.age = age;
    this.city = city;
    this.printPerson = function () {
        console.log(this.name + ',' + this.age + ',' + this.city)
    };
}
var person1= new peopleConstructor('bob',30,'fremont');
var person2= new peopleConstructor('john',34,'fremont');
person1.printPerson();
person2.printPerson();
//prototype chain

var peoplePrototype= function() {

}
peoplePrototype.prototype.name = 'noname';
peoplePrototype.prototype.age = 'number';
peoplePrototype.prototype.city = 'cityname';
peoplePrototype.prototype.printPerson = function () {
    console.log(this.name + ',' + this.age + ',' + this.city)
};
var person1= new peoplePrototype()
person1.name='john';
person1.age=34;
person1.city='fremont';
var person2= new peoplePrototype();
console.log('name' in person1);
person1.printPerson();
person2.printPerson();
//dynamic prototype
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;

    if (typeof this.sayName != "function") {
        Person.prototype.sayName = function () {
            console.log(this.name + ',' + this.age + ',' + this.city)
        };
    }
}
var person1= new Person('bob',30,'fremont');
var person2= new Person('john',34,'fremont');
person1.sayName();
person2.sayName();

//'''''''''''''''''''''''''''
var OtherObject = function () {
}
OtherObject.prototype.test = function () {
    console.log(this.id);
}

var TestObject = function (id) {
    this.id = id;
}
TestObject.prototype = new OtherObject ();

var a = new TestObject("variable");
a.test ();
//call example
//example1
var obj = {name:"Satya"};

var greeting = function(a,b){
    return "welcome "+this.name+" to "+a+"  "+b;
};

console.log(greeting.call(obj,"Fremont","CA"));
//example2
var person = {
    name: "Satya",
    hello: function(thing) {
        console.log(this.name + " says hello " + thing);
    }
}

person.hello("world");
person.hello.call({ name: "Satya" }, "world");
//example3
function sayHello(){
    console.log(this.message);
}

var obj3 = {
    message : "hello"
};
console.log(setTimeout(function(){sayHello.call(obj3)}, 1000))
//Apply examples
//example1
function sayHello(){
    console.log(this.message);
}

var obj1 = {
    message : "hello"
};
console.log(setTimeout(function(){sayHello.apply(obj1)}, 1000))
//example2
var obj2 = {name:"Satya"};

var greeting = function(a,b){
    return "welcome "+this.name+" to "+a+" "+b;
};
var args = ["Fremont","CA"];
console.log(greeting.apply(obj2,args));
//example3
function personContainer() {
    var person = {
        name: "Satya",
        hello: function() {
            console.log(this.name + " says hello " + arguments[1]);
        }
    }
    person.hello.apply(person, arguments);
}
personContainer("world", "world");
//bind examples
//example1
var person = {
    name: "Satya",
    hello: function(thing) {
        console.log(this.name + " says hello " + thing);
    }
}

person.hello("world");
var helloFunc = person.hello.bind({ name: "Satya" });
helloFunc("world");
//example2
function sayHello(){
    console.log(this.message);
}

var obj = {
    message : "hello"
};

console.log(setTimeout(sayHello.bind(obj), 1000));
//example3

var obj = {name:"Satya"};

var greeting = function(a,b,c){
    return "welcome "+this.name+" to "+a+" "+b;
};
var bound = greeting.bind(obj);


console.dir(bound);

console.log(bound("Fremont","CA"));
//closer examples
//example1
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

console.log(add());
console.log(add());
console.log(add());

//example2
function makerAdder(x) {
    return function(y) {
        return x + y;
    };
}

var add5 = makerAdder(5);
var add10 = makerAdder(10);

console.log(add5(2));
console.log(add10(2));
//example3
function makeFunc() {
    var name = 'Satya';
    function displayName() {
        console.log(name);
    }
    return displayName;
}

var myFunc = makeFunc();
myFunc();
//callbacks
//example1
function done(){
    console.log("Done");
}

function increment(num, callBack){
    for(var i = 0; i <= num; i++){
        console.log(i);
    }
    return callBack();
}
increment(10, done);
//example2
function greeting(name) {
    console.log('Hello ' + name);
}

function processUserInput(callback) {
    var name = prompt('Please enter your name.');
    callback(name);
}

processUserInput(greeting);
//example3
function mySandwich(param1, param2, callback) {
    console.log('Started eating my sandwich.\n\nIt has: ' + param1 + ', ' + param2);
    if (callback && typeof(callback) === "function") {
        callback();
    }
}

mySandwich('ham', 'cheese', 'vegetables');
//promises
//example1
var myFirstPromise = new Promise(function(resolve, reject) {

    setTimeout(function(){
        resolve("Success!");
    }, 250);
});

myFirstPromise.then(function(successMessage) {

    console.log("Yay! " + successMessage);
});
//example2
var p2 = new Promise(function(resolve, reject) {
    resolve(1);
});

p2.then(function(value) {
    console.log(value);
    return value + 1;
}).then(function(value) {
    console.log(value + '- This synchronous usage is virtually pointless');
});

p2.then(function(value) {
    console.log(value);
});
//example3
new Promise(function(resolve, reject) {
    setTimeout(function() { resolve(10); }, 3000);
})
    .then(function(result) {
        console.log(result);
    });
