const numbers = [1, 2, 4, 5, 6];

// for(const number of numbers){
//     console.log(number);
// }

const employee = {
    name : 'Jamshed',
    1 : 'Desk',
    'home-address' : 'BGB Camp',
    position : 'Developer'
}

for(const key in employee){
    const value = employee[key];
    console.log(key , value);
}