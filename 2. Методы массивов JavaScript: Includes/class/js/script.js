const transactions = ['571a319c8c', 'bd32bd6c05', '1c28a0c411', '9b425707b3', '979d1c10a1', '94641b2966'];
const test = [44, 55, 66, 77, 88, 2, 3, 4];


//true
//false
// if(transactions.includes('571a319c8c')){
//     console.log('yes')
// } else {
//     console.log('no')
// }

// const str = 'abcdefgh';
// if(str.includes('fg')){
//     console.log('yes')
// }

const users = [
    {"name":"ivanov", "age":44},
    {"name":"petrov", "age":14},
    {"name":"pitrov", "age":37},
    {"name":"alexeev", "age":43}
];

let newUsers = users.filter(item => item.name.includes('pe'));
console.log(newUsers)









