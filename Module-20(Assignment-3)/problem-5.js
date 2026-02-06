const str = "I am a little honest person";

function analyzeText(str) {
    if(typeof str !== 'string' || str.length <= 0){
        return 'Invalid';
    }

    let cnt = 0;
    for(const ch of str){
        if(ch === ' '){
            continue;
        }
        cnt++;
    }

    const newStr = str.split(" ");
    let mx = "";
    for(const word of newStr){
        if(word.length > mx.length){
            mx = word;
        }
    }

    const result = {
        longwords : mx,
        token : cnt
    }

    return result;
}

console.log(analyzeText(str));