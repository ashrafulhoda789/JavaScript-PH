const persons = ['rakib', 'jamshed', 'nokib', 'dakib', 'akib'];

const sortedPersons = persons.sort();

console.log(sortedPersons); 

// sort --> ascending, descending
const numbers = [4, 7, 12, 8, 43, 6, 1];

/* 
    * Ascending --> Smaller to Larger
    * Descending --> Larger to Smaller
    
*/

// const numbers_asc = numbers.sort(); // Not working properly
const numbers_asc = [...numbers].sort(function(a, b){return a - b}); 
const numbers_dec = [...numbers].sort(function(a, b){return b - a}); 
console.log(numbers_asc);
console.log(numbers_dec);