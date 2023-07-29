// // Synchronous code
// console.log(" 1 ");
// console.log(" 2");
// console.log(" 3");
// console.log(" 4");
// console.log(" 5");

// Asynchronous code
console.log(" 1 ");
console.log(" 2");
console.log(" 3");

setTimeout(()=>{
    console.log(" 4");
}, 4000)

console.log(" 5");