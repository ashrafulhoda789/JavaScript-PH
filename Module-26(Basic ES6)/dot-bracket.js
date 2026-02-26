const employee = {
    name : 'Jamshed',
    1 : 'Desk',
    'home-address' : 'BGB Camp',
    position : 'Developer'
};

console.log(employee.position);
// console.log(employee.1);
// console.log(employee.home-address);

// bracket notation
console.log(employee["home-address"]);
console.log(employee[1]);
console.log(employee['name']);

const name = employee['name'];
const key = 'position';
console.log(employee[key]);