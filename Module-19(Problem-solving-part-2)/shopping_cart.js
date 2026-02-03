const products = [
    {name: 'Shampoo', price: 300},
    {name: 'Chiruni', price: 100},
    {name: 'Pant', price: 1200},
    {name: 'Shirt', price: 700}
];

function totalCost(products){
    let sum = 0;
    for(const product of products){
        sum += product.price;
    }

    return sum;
}

const total = totalCost(products);
console.log("Total cost of products is: ", total);