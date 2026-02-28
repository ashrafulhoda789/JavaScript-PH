let data;
data = 0; //Falsy
data = '0' //truthy 
// data = ''; // Falsy
data = ' '; // Truthy
if(data){
    console.log("truthy");
}
else{
    console.log('Falsy');
    
}

let price = 22;
if(price){
    console.log('Price is Truthy');
}
else{
    console.log('Price is falsy');
}