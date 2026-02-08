const numbers = [45, 65, 23, 98, 19];

// for(let i = 0; i < numbers.length; i++){
//     const number = numbers[i];
//     console.log(number);
// }

for(const number of numbers){
    // console.log(number);
}

const products = [
    {id: 1, name: 'Xiaomi Phone', price: 19000},
    {id: 2, name: 'Iphone', price: 19000},
    {id: 3, name: 'Mac Book laptop', price: 119000},
    {id: 4, name: 'Lenovo laptop', price: 19000},
    {id: 5, name: 'Dell laptop', price: 19000},
    {id: 6, name: 'Samsung Phone', price: 19000},
    {id: 7, name: 'Nokia Phone', price: 19000},
    {id: 8, name: 'One Plus', price: 19000},
];

for(const product of products){
    // console.log(product);
}

function matchedProducts(products, search){
    const matched = [];
    for(const product of products){
        if(product.name.toUpperCase().includes(search.toUpperCase())){
            matched.push(product);
        }
    }

    return matched;
}

const result = matchedProducts(products, 'laptop');
console.log(result);