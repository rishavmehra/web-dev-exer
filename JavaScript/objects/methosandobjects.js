var user = {
    firstName: "Rishav",
    lastName: "Mehra",
    role: "Admin",
    loginCount: 32,
    facebookSignedIn: true,
    courseList: [],
    buyCourse: function (courseName) {
        this.courseList.push(this.courseName)
    },
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} course`;
    },
    getInfo: function (){
        return `${this.firstName} ${this.lastName} is the ${this.role} and login in ${this.loginCount} times using ${this.facebookSignedIn} and have ${this.courseList.length} course   `
    }
};


var courseList = true;
console.log(user.firstName);
console.log(user.getCourseCount());
user.buyCourse("React JS course");
user.buyCourse("JS course");
console.log(user.getCourseCount());
console.log(user.getInfo());

