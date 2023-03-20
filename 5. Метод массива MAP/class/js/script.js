const temp = [0, 4, 4, 6, 8, 10, 6, 4, 3, -1, -2, -2];
//F = C*1.8 + 32;

let tF = temp.map(item => {
    return 10 + item * 1.8;
});
console.log(tF);
console.log(temp);// not change given array

let a = [33, 44, 55];
//a[10] = 90;
let b = a.map((item, index, array)=> {
    if(index == 2){
        array[index + 1] = 66;//will change array a
    }
    return item;//but array b will be same as a before it was changed
});

console.log(b);
console.log(a);

const z = [
    {'name': 'Ivan', 'order': 12, 'sum': '123,5'},
    {'name': 'Sergey   ', 'order': 12, 'sum': '123,5'},
    {'name': 'matilda     ', 'order': 12, 'sum': '123,5'},
    {'name': 'Ivan Petr    ', 'order': 12, 'sum': '123,50'},
];

const zBack = z.map(item => {
    item.name = item.name.trim().toLocaleLowerCase();
    return item;
});

console.log(zBack);






