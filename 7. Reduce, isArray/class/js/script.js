//*****************reduce
let a = [
    {"id": 55, "city": "arc"},
    {"id": 75, "city": "rca"},
    {"id": 175, "city": "bra"}
];

//[55, 75, 175]

let b = a.reduce((accum, item) => {
    //accum = accum + ' ' + item;// For String result
    accum.push(item.id);
    return accum;
}, []);
console.log('=============');
console.log(b);

//*****************isArray
b;//true
b = 'new Set([1, 2])';//false
b = new Set([1, 2]);//false
console.log(Array.isArray(b));










