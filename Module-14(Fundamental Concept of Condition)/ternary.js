/**
 * TERNARY --> Three parts
 * 
 * ?   :
 * 
 * (condition) ? do somthing when true : do something when false
*/

const age = 12;

// if(age >= 18){
//     console.log("You can give vote");
// }
// else{
//     console.log("You can't vote");
// }

// Simple ternary
// (age >= 18) ? console.log("You can give vote") : console.log("You can't give vote");

let price = 500;
const isLeader = false;

// if(isLeader === true){
//     price = 0;
// }
// else{
//     price = price + 100;
// }
// console.log(price);

// price = (isLeader === true) ? 0 : price + 100;
// console.log(price);

// OPTIONAL: Semi-advance ternary
// if(isLeader === true){
//     if(price > 1000){
//         price /= 2;
//     }
//     else{
//         price = 0;
//     }
// }
// else{
//     price += 1000;
// }

price = (isLeader === true) ? (price > 1000 ? price/2 : 0 ): price + 1000
console.log(price);

