function add(num1, num2){
    console.log('Arguments: ', arguments, arguments[2]);
    const args = [...arguments];
    console.log(args);
    return num1 + num2;
}

add(2, 5, 8, 45);