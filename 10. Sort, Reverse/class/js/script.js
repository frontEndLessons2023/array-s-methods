// reverse
let a = [2, 3, 4, 5];
a[100] = 200;
let b = a.reverse();
console.log(b);
a.reverse();
console.log(a)

//sort
let f = [3, 2, 4, 1, 5];
// f = ['c', 'a', 'C', 4];
// f = ['aah', 'aaz', 'aa'];
//f.sort();
f.sort((a, b) => {
    return a - b;
})
console.log(f)

let g = [
    {name: 'U', age: 13},
    {name: 'K', age: 23},
    {name: 'L', age: 32},
    {name: 'R', age: 11},
    {name: 'X', age: 43},
];
g.sort((a, b) => {
    return a.age - b.age;
});
console.log(g)













