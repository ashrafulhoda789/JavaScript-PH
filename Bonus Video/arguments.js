function add(num1, num2){
    console.log(num1, num2);
    console.log(arguments); // It will return array like object
}

add(12, 13, 45, 67, 78);