//For loop
const myState = [
    "Himachal",
    "Punjab",
    "Rajasthan",
    1947,
    "Maharashtra",
    "Tamil Nadu"
];

for (let i = 0; i < myState.length; i++) {
    if(typeof myState[i] != 'string') continue;
    console.log(myState[i]);
}
