/**
 * Objective: Write a function to give me the sum of all numbers in an array
*/

function sum(numbers){
    let sum = 0;
    
    for(const number of numbers){
        sum += number;
    }
    
    return sum;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
const result = sum(numbers);
console.log("Sum of numbers: ", result);