var a=[4,16,25,36,49,81];
var h= function(){
    alert("elements in array a=" + a)
}
var f= function(){
    alert("length of array a=" + a.length);
}
var g=function(){
    alert("IndexOf array a="+ a.indexOf(3))
}

var u= function () {
    a.push(23);
    alert("Array after push="+a)
}
var t=function(){
    a.pop();
    alert("Array after pop="+a)
}
var e= function(){
    a.unshift(45);
    alert("Array after unshift="+a)
}
var j= function()
{
    a.shift();
    alert("Array after shift="+a)
}
var k= function(){
    a.slice(2,3);
    alert("Array after slice="+a)
}
var l= function(){
    a.splice(3,4);
    alert("Array after splice="+a)
}
var s= function(){
    a.sort();
    alert("Array after sort="+a)
}
var r= function(){
    a.reverse()
    alert("Array after reverse="+a)

}
var w=function(){
    alert("map"+a.map(Math.sqrt))
}
var d=[]
var s2= function() {
    var s1 = function (str) {
        var b = str.split("");
        //  var c = b.reverse();
        //  var d = c.join(" ");
        // alert(d);
        for(var i=0;i<=b.length;i++){
            var c=c+1;
            if(b[i]=' '){
                d.push(c);

            }
            alert(Math.max.apply(null,d));
        }
    };
    s1("this is a string");
}

var b=[];
var n=function(){
    for(var i=0;i<6;i++){
        var c= b.push(a.pop());
    }
    alert(b);
}
var g1= function() {
    var sum = a.reduce(function (a, b) {
        return a + b;

    }, 0);
    alert(sum);
}
var arr=[];

var d1=function() {

    a.forEach(function (item) {
        arr.push(item+1)
    });
    alert(arr)
}
var obj={num:2};
var addToThis=function (a1) {
    console.log(this.obj + a1)
};
addToThis.call(obj,2);



