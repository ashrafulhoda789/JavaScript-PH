function leapYear(year){
    if(year%400 === 0 || (year%4 === 0 && year%100 !== 0)){
        return true;
    }
    else{
        return false;
    }
}

const checkLeapYear = leapYear(2020);
if(checkLeapYear){
    console.log("Leap Year");
}

else{
    console.log("Not Leap Year");
}