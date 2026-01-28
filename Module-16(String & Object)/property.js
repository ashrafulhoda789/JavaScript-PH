const person = {
    name: 'Ashraful Hoda',
    age: 25,
    profession: 'Developer',
    salary: 25000,
    married: false,
    'fav places' : ['bandarban', 'Saint martin', 'Kuakata']
}

// console.log(person);

// dot notation
// console.log(person.profession);
const income = person.salary;
// console.log(income);
// console.log(person.'fav places'); // we cant access it using dot notation

// bracket notation
console.log(person['age']);
const status = person['married'];
console.log(status);
console.log(person["fav places"]);


