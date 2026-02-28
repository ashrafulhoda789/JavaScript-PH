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

// create a scope
if(true){

}

while(true){

}

