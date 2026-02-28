function outerFunction(){
    function innerFunction(){
        console.log('This is the inner function');
    }

    return innerFunction;
}

const result = outerFunction();
result();
// console.log('In the outside', result);

function counter(owner){
    let count = 0;
    function increment(){
        count++;
        console.log('Value of counter',owner, count);
    }

    return increment;
}

const jamshedCounter = counter('Jamshed');
jamshedCounter();
jamshedCounter();
jamshedCounter();
jamshedCounter();

const mumirCounter = counter('Mumir');
mumirCounter();
mumirCounter();
mumirCounter();
jamshedCounter();

// const count1 = counter();
// count1();
// count1();
// count1();
// count1();
