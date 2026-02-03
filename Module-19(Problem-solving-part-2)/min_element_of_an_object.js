const mobile = [
    {name : 'Samsung', price: 20000, camera: '200MP', color: 'White'},
    {name : 'Xiaomi', price: 30000, camera: '200MP', color: 'White'},
    {name : 'Oppo', price: 14000, camera: '200MP', color: 'White'},
    {name : 'Iphone', price: 100000, camera: '200MP', color: 'White'},
    {name : 'Walton', price: 31000, camera: '200MP', color: 'White'},
    {name : 'HTC', price: 27000, camera: '200MP', color: 'White'}
];

function getCheapestPhone(phones){
    // console.log(phones);
    let cheap = phones[0];
    for(const phone of phones){
        if(cheap.price > phone.price){
            cheap = phone;
        }
    }

    return cheap;
}

const cheap = getCheapestPhone(mobile);
console.log("Cheapest Phone is:", cheap);