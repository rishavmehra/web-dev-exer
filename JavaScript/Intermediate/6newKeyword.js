const User = function (firstName, courseCount) {   // this is kind of prototype
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`Course count is ${this.courseCount}`);
    };
};

const Rishav = new User("Rishav", 2)
console.log(Rishav);


const hitesh = new User("Hitesh", 1)
console.log(hitesh);

