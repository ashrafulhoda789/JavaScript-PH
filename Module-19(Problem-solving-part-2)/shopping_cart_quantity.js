const products = [
    {name: 'Shampoo', price: 300, quantity: 2},
    {name: 'Chiruni', price: 100, quantity: 3},
    {name: 'Pant', price: 1200, quantity: 5},
    {name: 'Shirt', price: 700, quantity: 1}
];

function cartTotal(products){
    let sum = 0;
    for(const product of products){
        sum += product.price*product.quantity;
    }

    return sum;
}

const soppingCost = cartTotal(products);
console.log("Total: ", soppingCost);