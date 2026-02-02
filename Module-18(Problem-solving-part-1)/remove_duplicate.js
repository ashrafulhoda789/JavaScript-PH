function removeDuplicate(numbers){
    const unique = [];
    for(const num of numbers){
        if(!unique.includes(num)){
            unique.push(num);
        }
    }

    return unique;
}

const numbers = [1, 5, 61, 5, 87, 7, 5, 81, 61];
const res = removeDuplicate(numbers);
console.log(res);