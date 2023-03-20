//every
let a = [4, 5, 6, 7, 8];

let b = a.every(item => {
    if(item > 0 && item < 20) {
        return true;
    }
})
console.log(b);

let c = [
    {name: 'ivan', age: '112'},
    {name: 'inna', age: '22'},
    {name: 'serg', age: '23'},
    {name: 'antony', age: '33'},
];
b = c.every(item => {
    if(item.age >= 16) {
        return true;
    }
})
console.log(b);
//some
b = c.some(item => {
    if(item.age <= 16) {
        return true;
    }
})
console.log(b);

let e = []; // for empty array always return false












