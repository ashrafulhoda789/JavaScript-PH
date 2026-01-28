const mobile = {
    brand : 'Xiaomi',
    price : 30000,
    color : 'White',
    camera : '200MP',
    isNew : true
}

// for of : Array
// for in : object
for(const prop in mobile){
    // console.log(prop);
    // console.log(mobile[prop]);
}

const keys = Object.keys(mobile);
console.log(keys);

for(const key of keys){
    console.log(key, ": ", mobile[key]);
}