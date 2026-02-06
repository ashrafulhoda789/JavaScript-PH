function gonoVote(array) {
    //write your code here
    if(!Array.isArray(array)){
        return 'Invalid';
    }

    let haVote = 0, naVote = 0;
    for(const vote of array){
        if(vote === "ha"){
            haVote++;
        }
        else{
            naVote++;
        }
    }

    if(haVote > naVote){
        return true;
    }
    else if(haVote === naVote){
        return "equal";
    }
    else{
        return false;
    }
}

const array = ["ha", "na", "na", "na"];
console.log(gonoVote(array));