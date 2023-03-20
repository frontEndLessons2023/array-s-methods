const browser = [

];
//***push***
let a = [99, 88];
console.log(a);//99,88
a[0] = 66;
console.log(a);//66,88
a[a.length] = 55;
console.log(a);//66,88,55
a.push(44);
console.log(a);//66,88,55,44
a.push(33, 22, 11);
console.log(a);//66, 88, 55, 44, 33, 22, 11
console.log(a.push(111));

//***pop***
console.log(a);
a.pop();
console.log(a);
console.log(a.pop());
console.log(a);

const b = [3];
console.log(b);
console.log(b.pop());
console.log(b);
console.log(b.pop());
console.log(b);

//***push + pop***
let car = [];
document.querySelector('.push').onclick = () => {
    let id = document.querySelector('#goods').value;
    if(!car.includes(id)){
        car.push(id);
    }
    console.log(car);
}
document.querySelector('.pop').onclick = () => {
    let id = document.querySelector('#goods').value;
    let goods = car.pop();
    console.log('Item with id: ' + goods + ' was deleted');
    console.log(car);
}





