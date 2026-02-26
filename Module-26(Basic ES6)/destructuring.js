// const product = {
//     name : 'iphone',
//     price : 799,
//     description : 'A smartphone by apple'
// };

// const newPrice = product.price + 100;
// const phoneName = `This is ${product.name}`;

// const price = product.price;
// const name = product.name;

const price = 700;
// const product = { name : 'iphone', price : 799, brand : 'Apple' };
const {name, price : productPrice, camera} = { name : 'iphone', price : 799, brand : 'Apple' };
console.log(name);
console.log(productPrice);
console.log(camera);

const [first, second] = [1, 20, 30, 40, 50];
console.log(first, second);
