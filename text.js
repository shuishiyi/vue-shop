













/////////////////this
function f() {
    console.log(this.a)
}
var obj = {
    a: 10,
    f: f
}
var a = 'win'
obj.f();
//10



function f() {
    console.log(this.a)
}
var obj = {
    a: 10,
    f: f()
}
var a = 'win'
obj.f;
//win


function f() {
    console.log(this.a)
}
var obj = {
    a: 10,
    f: f
}
var a = 'win'
var f2 = obj.f();
f2;
//10


function f() {
    console.log(this.a)
}
var obj = {
    a: 10,
    f: f
}
var a = 'win'
f2 = obj.f
f2();
//win


////////////////////////提升
(function (num) {
    console.log(num)
    function num() { }
    var num = 10
})(100)
//fn


var a = 1;
function b(){
    a = 10;//10赋给了函数a
    return;
    function a(){
        console.log(a);
    }	
}
b();
console.log(a);
//1


