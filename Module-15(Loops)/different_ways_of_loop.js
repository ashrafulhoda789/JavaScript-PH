// Odd numbers
// for (let i = 0; i < 20; i++) {
//     if(i%2 === 1){
//         console.log(i);
//     }
// }
// for (let i = 0; i < 20; i++) {
//     if(i%2 !== 0){
//         console.log(i);
//     }
// }

let last = 0;
for(let i = 1; i <= 30; i++){

    if(i%5 === 0){
        last = i;
    }
}

console.log(last);