function layerDiscount(quantity){
    const firstHundred = 100;
    const secondHundred = 90;
    const above = 70;

    if(quantity <= 100){
        const first100Total = quantity * firstHundred;
        return first100Total;
    }
    else if(quantity <= 200){
        const first100Total = 100 * firstHundred;
        const remainingTotal = secondHundred * (quantity - 100);
        const total = first100Total + remainingTotal;
        return total;
    }
    else{
        const first100Total = 100 * firstHundred;
        const second100Total = 100 * secondHundred;
        const remainingTotal = (quantity - 200) * above;
        const total = first100Total + second100Total + remainingTotal;
        return total;
    }
}

const total = layerDiscount(300);
console.log(total);