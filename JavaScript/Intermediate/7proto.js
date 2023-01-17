const User = function (firstName, courseCount) {   // this is kind of prototype
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`Course count is ${this.courseCount}`);
    };
};

User.prototype.getFirstName = function () {
    console.log(`Your firstname is: ${this.firstName}`);
};

const Rishav = new User("Rishav", 2)
Rishav.getCourseCount();
Rishav.getFirstName();
// console.log(Rishav);


const hitesh = new User("Hitesh", 1)
hitesh.getCourseCount();
// console.log(hitesh);

