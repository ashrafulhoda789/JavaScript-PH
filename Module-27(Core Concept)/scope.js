const pi = 3.14;
// add(2,4);

function add(a, b){
    const factor = 0.5;
    const result = (a + b) * factor + pi;
    const total = doubleIt(result);
    const value = addTwo(total);

    function addTwo(num){
        num = num + pi;
        return num + 2;
    }

    return value;
}

function doubleIt(num){
    return num * 2;
}

// console.log(add(5, 7));

const multiply = (a, b) =>{
    console.log(result);
    // TDZ: Temporal Dead Zone
    const result = a*b;
    return result;
}

multiply(2,5);

// create a block-scope
if(true){

}

while(true){

}


// Hoisted and no-error
console.log(a);
var a = 5;

// hoisted but error. Because block scope not accessible before initialization.
console.log(b);
let b = 5;

