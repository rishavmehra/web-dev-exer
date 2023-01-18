const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);
map1.set('d', 4);

// for( let key of map1.keys()){
//     console.log(key);   
// }
// for( let value of map1.values()){
//     console.log(value);   
// }

for( let [key, value] of map1){
    console.log(`Key is: ${key}, Value is ${value}`);   
}


map1.forEach((key) => console.log(key))  // forEach do opposite for loop
