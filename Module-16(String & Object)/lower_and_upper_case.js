// Uppercase: ABCD EFG
// Lowercase: abcd efg

const school = "Baitush Sharaf Jabbaria Acadamy";
console.log(school.toLowerCase());
console.log(school.toUpperCase());

const subject = 'Chemistry';
const book = 'chemistry';

if(subject.toUpperCase() === book.toUpperCase()){
    console.log("I am reading same book of my subject");
}
else{
    console.log("It's not the same book of my subject");
}

// trim ---> remove the whitespace
const drink = ' water';
const liquid = '     water  ';

if(drink.trim() === liquid.trim()){
    console.log("You can drink");
}
else{
    console.log("You can't drink");
}