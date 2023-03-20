//Flat
let a = [3, [6, 7], [[9, 10], 8]];
// let a = [3, [6, 7]];
// a[100] = 100;//return [3, 6, 7, 100]
let b = a.flat(2);
console.log(b);


//Fill
let c = [1, 1, 1, 1, 1, 1, 1];
let d = c.fill(2, 0, 4);
console.log(c);
console.log(d)


//Keys
let e = [3, 4, 5];
let res = Object.keys(a);
console.log(e);
console.log(res);

let f = {hi: 3, hello: 5};
let g = Object.keys(f);
console.log(f);
console.log(g);












