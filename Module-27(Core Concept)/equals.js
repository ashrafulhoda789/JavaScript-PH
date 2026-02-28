console.log(2 === 2);
console.log(2 === '2'); 
/*
    (===) Triple equal
    *compares the data type first. If data types are different,
    it returns false. If data types are same, it compares the values and
    returns true or false accordingly.
*/


// Double equals does type coericon.
console.log(2 == 2);
console.log(2 == '2'); // Converts the string '2' to number 2 then compares, returns true 
console.log(1 == true);
console.log(0 == false);
console.log(true == '1');
console.log(false == '0');
console.log(null == undefined);
console.log(NaN == NaN);
console.log([5] == '5');
console.log({} == {}); // Non-primitive data compare by reference, Not by value.



