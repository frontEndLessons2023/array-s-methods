//concat
const a1 = [21, 22, 23, 24];
const a2 = [31, 32, 33, 34];
const a3 = [48, 49, 50];
const a4 = [];
a4[50] = 100;
// console.log(a1.concat(a4));
// console.log(a2.concat([]))
 const b = a2.concat(a1, a3);
// console.log(b)

 let c = 'hello';
 let d = 'hi';
 let f = c.concat(d);
// console.log(f);

//splice
let k = [33, 44, 55, 66, 77, 88];
k.splice(2, 2, 'hi', 'hello', 55555555);
console.log(k);















