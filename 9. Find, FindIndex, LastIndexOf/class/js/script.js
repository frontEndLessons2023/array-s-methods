//find
const a = [
    {name: 'ivan', age: 54},
    {name: 'ivar', age: 64},
    {name: 'den', age: 34},
    {name: 'severn', age: 44},
    {name: 'oleg', age: 14},
];

let b = a.find(item => {
    if(item.age <= 18) {
        return true;
    }
});
console.log(b);

//findIndex
const c = [22, 33, 44, 55, 66, 33, 77];
const e = 'hello';

let d = c.findIndex(item => {
    if(item === 'o'){
        return true;
    }
});
console.log(d)

//lastIndexOf
let f = c.lastIndexOf(33);
console.log(f)






