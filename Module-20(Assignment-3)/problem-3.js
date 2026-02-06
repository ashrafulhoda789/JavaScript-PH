function finalScore(omr) {
    
    if(typeof omr !== 'object' || Array.isArray(omr)){
        return 'Invalid';
    }

    const sum = omr.right + omr.wrong + omr.skip;
    if(sum > 100){
        return 'Invalid';
    }

    const wrongMark = omr.wrong * 0.5;
    const totalMark = omr.right - wrongMark;
    return Math.round(totalMark);
}

omr = {
  right: 67,
  wrong: 23,
  skip: 10
}

console.log(finalScore(["Raj"]));