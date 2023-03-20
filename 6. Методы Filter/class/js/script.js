const clients = [
    {"iin": "g8f0s0sf", "user": "Ivanov", "debt": 4},
    {"iin": "a8f0s0sf", "user": "Petrov", "debt": 0},
    {"iin": "g7f0s0sf", "user": "Sidorov", "debt": 0},
    {"iin": "s1f0s0sf", "user": "ItGit.info", "debt": 14},
    {"iin": "d0f0s0sf", "user": "OOO MMM", "debt": 71400},
    {"iin": "m3f0s0sf", "user": "Spirtbank", "debt": 2654},
];

const a = [3, 1, 3, -5, -3, -4, 5, -2, 67, 2, 9, 6, 7, 0];

let b = a.filter((item, index) => {
    return true;
});

console.log(a);
console.log(b);

let debts = clients.filter(item => item.debt >= 10)
.sort((a, b) => b.debt - a.debt);

console.log(debts);







