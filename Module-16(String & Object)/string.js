const country = 'Bangladesh';
const division = "Chittagong";
const district = `CHittagong`;
// const thana = new String('Chawkbazar')

// console.log(typeof country);
// console.log(typeof division);
// console.log(typeof district);
// console.log(typeof thana);

const capital = 'Dhaka';
console.log(capital.length);
console.log(capital[3]);

// String is Immutable --> Not changable.
// But array is mutable --> We can change. 
capital[3] = 'm'; //In string we can't change any value or index value.
console.log(capital);