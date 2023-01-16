//TODO: part 1 for this keyword
// for  all the regular function calls, this points to windows object
console.log(this);

var user = {
    name: "Rishav",
    courseCount: 4,
    getCourseCount: function () {
        console.log("Line 9", this);
        function getInside() {
            console.log("Line 11", this);
        }
        getInside();
    },
}

user.getCourseCount();