function newPrice(currentPrice, discount) {
    // Your code here
    if(typeof currentPrice !== 'number' || typeof discount !== 'number'){
        return "Invalid";
    }

    if(discount < 0 || discount > 100){
        return "Invalid";
    }
    
    const discountPrice = (currentPrice*discount) / 100;
    return (currentPrice - discountPrice).toFixed(3);
}

console.log(newPrice(1500, -1));