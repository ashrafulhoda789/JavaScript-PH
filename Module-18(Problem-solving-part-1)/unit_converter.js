// 12 inch = 1 feet

function inchToFeet(inch){
    const feet = inch / 12;
    return feet;
}

function inchToFeet2(inch){
    const feetFraction = inch / 12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetNumber + ' ft ' + inchRemaining + ' inch.';
    return result;
}

const feet = inchToFeet(75);
console.log(feet);

const feet2 = inchToFeet2(75);
console.log(feet2);


// Miles to Kilometer. 1 mile = 1.60934 Km

function milesToKm(mile){
    const kilometer = mile*1.60934;
    return kilometer;
}

const kilometer = milesToKm(5);
console.log(kilometer);