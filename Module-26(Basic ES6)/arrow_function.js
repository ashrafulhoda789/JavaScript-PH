// function declaration
// It can be use before the function initialization

// console.log(add(10,20));

function add(num1, num2){
    return num1 + num2;
}

// function expression
// It can't be call before the function declaration

// console.log(add2(10,20));
const add2 = function(num1, num2){
    return num1 + num2;
}

// console.log(add2(10,20));

// arrow function
const add3 = (num1, num2) => num1 + num2;
console.log(add3(10,20));

const doMath = (x,y) => {
    const sum = x + y;
    const diff = x - y;
    const mul = x * y;

    const total = sum + diff + mul;
    return total;
}

console.log(doMath(5,7));

// In DOM
// document.getElementById('btn').addEventListener('click',
//     (event) => {

//     }
// )

const sq = x => x*x;
console.log(sq(5));
