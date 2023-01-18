const User = require("./15class.js");

const Rishav = new User("Rishav", "rishav@google.com")

console.log(Rishav.getInfo())

Rishav.enrollCourse("JS")
Rishav.enrollCourse("Python")
let cList = Rishav.getCourseList();

console.log(cList);
