function firstSUm(arr1, arr2){
    arr1[0] = 100;
    arr2[0] = 200;
    const first = arr1[0];
    const second = arr2[0];

    return first + second;
}

const num1 = [1, 2, 4];
const num2 = [4, 5, 6];

console.log("Before the function calling ", num1 , num2);

const result = firstSUm(num1, num2);

console.log("After the function calling ", num1 , num2);