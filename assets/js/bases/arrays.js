// const arr = new Array(10);
// const arr = [];
// console.log(arr);

let videojuegos = ['Mario 3', 'Megaman', 'Chrono Trigger'];
console.log({videojuegos});
console.log(videojuegos[0]);

let arregloDeCosas = [
    true,
    123,
    'Ronald',
    1 + 2,
    function(){},
    ()=>{},
    {a: 1},
    ['X','Megaman', 'Zero', 'Dr Light', ['Dr. Willy', 'Woodman']]
];

console.log({arregloDeCosas});

console.log(arregloDeCosas[2]);
console.log(arregloDeCosas[7][3]);
console.log(arregloDeCosas[7][4][1]);