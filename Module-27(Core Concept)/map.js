const numbers = [1, 2, 3, 4, 5];
// const doubled = [];
// for(const num of numbers){
//     doubled.push(num * 2);
// }

// const doubleIt = num => num * 2;
// const doubled = numbers.map(doubleIt);

const doubled = numbers.map(num => num * 2);
const squared = numbers.map(num => num * num);

const friends = ['Jamshed', 'Mumir', 'Alo', 'Tomato']
const firstLetter = friends.map(letter => letter[0]);
console.log(firstLetter);

const products = [
    {name : 'Laptop', price : 45000},
    {name : 'Phone', price : 15000},
    {name : 'Tablet', price : 25000},

];

const prices = products.map(pd => pd.price * 2);
const names = products.map((pd, index, productsArray) => {
    const UpCase = pd.name.toUpperCase();
    console.log(index, UpCase,productsArray);
    return UpCase;
});
console.log(names);

products.forEach(pd => console.log(pd.name));