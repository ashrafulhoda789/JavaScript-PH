const employee = {
    name : 'Jamshed',
    1 : 'Desk',
    'home-address' : 'BGB Camp',
    salary : 50000,
    family : {
        father : 'Faridul',
        mother : {
            name : 'Rajia Momtaj',
            age : 45
        }
    },
    position : 'Developer'
};

const value = employee.name;
console.log(employee?.family?.mother?.name);