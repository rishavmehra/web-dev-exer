var countries = ["india", "USA", "Japan", "Russia"];

var states = new Array("Himachal", "Delhi", "Mumbai", "Assam")

// console.log(states[1]);

// console.log(states.length);
states[0] = "Punjab";
// console.log(states);

var user = ["Rahul ", "rishav@gmail", 3, 34, true];
// console.log(user);
 
user.pop();
user.pop();
// console.log(user);
user.unshift("New Value")
// console.log(user);
user.shift()
// console.log(user);
console.log(user);
console.log(user.indexOf("Rahul"));

console.log(Array.from("Rishav"));