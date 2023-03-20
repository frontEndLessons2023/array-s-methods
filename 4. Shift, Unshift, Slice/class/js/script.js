let a = [13, 4, 5];

//shift
let b = a.shift();
console.log(b);// 3
console.log(a);//4, 5

//unshift
let c = a.unshift(22, 13);
console.log(a);
console.log(c);

//slice
let d = [22, 33, 44, 55, 66, 77, 88, 99];
let f = d.slice(3, 4);
console.log(d);//not changed
console.log(f);//55, 66, 77, 88, 99

//doesn't work on String -> give a TypeError
let e = 'hello';
//e.shift();
console.log(e);
//but
let h = e.slice(1, 4);
console.log(h);// -> ell




