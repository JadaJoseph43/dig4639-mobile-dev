console.log("Hello World");
var x = 1;
var y = [1];
function scopeDemo() {
    console.log(x)
    let a = 3, b = 4, c = 5;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(y1);
    var x = 2;
    if(true) {
        var x = 0;
    }
    return a;

}
console.log(scopeDemo(y)+10);
console.log(y);
console.log(0);

