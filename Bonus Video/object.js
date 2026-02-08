const nayok = {
    name : 'Ashraful Hoda',
    id : 26,
    address : 'CTG',
    isSingle: true,
    friends : ['Mumir', 'Tibra', 'Salman', 'Amir'],
    movies : [{name: 'no 1', year : 2015}, {name : 'King khan', year : 2018}],
    act : function(){
        console.log('Acting like Sakib Khan');
    },
    car : {
        brand : 'Tesla',
        price : 5000000,
        made : 2025,
        manufecturer : {
            name : 'Tesla',
            ceo : 'Elon Musk',
        }
    }
}

// console.log(student);
// console.log(student.friends);
// console.log(student.car.manufecturer);

// nayok.act()
console.log(nayok.act);
nayok.act();