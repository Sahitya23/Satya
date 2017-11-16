//call examples
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
