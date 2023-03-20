//indexOf
const a = [3, 9, 8, 7, 5, 3, 5, 2];
//-1
console.table(a)
//console.log(a.indexOf(5));//will find first '5' and return it's index
//console.log(a.indexOf(3, -8));//out put 0; means '3' was found on position '0'
// if(a.indexOf('7') !== -1){
//     console.log('yes');
// } else {
//     console.log('no');
// }

const b = ['Hi', 'hello'];
// console.log(b.indexOf('Hello'));

// function indexOfEmul1(ar, item){
//     for(let i = 0; i < ar.length; i++){
//         if(ar[i] === item){
//             return i;
//         }
//         return -1;
//     }
// }

function indexOfEmul(ar, item, from = 0){
    for(let i = from; i < ar.length; i++){
        if(ar[i] == item){
            return i;
        } 
    }
    return -1;
}
console.log(a.indexOf(5, 5));
console.log(indexOfEmul(a, 5, 5));














