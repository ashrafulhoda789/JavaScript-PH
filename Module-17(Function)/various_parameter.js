function evenSizedString(str) {
    const sized = str.length;
    console.log(sized);
    if(sized%2 === 0){
        console.log('Even Size');
        return true;
    }
    else{
        console.log('Odd Size');
        return false;
    }
}

// evenSizedString('Dhaka');

function doubleOrTriple(number, doDouble){
    if(doDouble){
        const result = number*2;
        return result;
    }
    else{
        const result = number*3;
        return result;
    }
}

// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5, false));

function numberOffElements(numbers){
    const len = numbers.length;
    return len;
}

const array = [12, 15, 7, 12, 1, 5, 3];
console.log(numberOffElements(array));