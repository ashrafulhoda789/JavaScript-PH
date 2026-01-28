const computer = {
    brand : 'Customize',
    processor : 'AMD Ryzan 5 5600G',
    motherboard: 'Gygabyte',
    ram : '16GB',
    hdd: '1TB',
    ssd : '256GB',
    powerSupply : '400W',
    monitor : 'Walton',
    prices : {
        processorPrice : 16000,
        motherboardPrice : 9000,
        storagePrice : {
            ramPrice: 4200,
            hddPrice : 3200,
            ssdPrice : 2000,
        },
        powerSupplyPrice : 3400,
        monitorPrice: 14000
    }
}

computer.prices.storagePrice.hddPrice = 3600;
console.log(computer.prices.storagePrice);

delete computer.powerSupply;
console.log(computer);