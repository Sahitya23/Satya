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
