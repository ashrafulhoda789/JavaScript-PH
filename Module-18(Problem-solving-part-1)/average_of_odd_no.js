function oddAvg(numbers){
    let sum = 0, cnt = 0;
    for(const num of numbers){
        if(num % 2 !== 0){
            cnt++;
            sum += num;
        }
    }

    const avg = sum / cnt;
    // console.log(sum, cnt);
    return avg;
}

const numbers = [42, 13, 58, 65, 81];
const avg = oddAvg(numbers);

console.log(avg);