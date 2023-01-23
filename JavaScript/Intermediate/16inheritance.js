class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    courseList = [];

    getInfo(){
        return {name: this.name, email: this.email};
    }
    enrollCourse(name){
        this.courseList.push(name);
    }
    getCourseList(){
        return this.courseList;
    }
}

class subAdmin extends User {
    constructor(name, email){
        super(name, email);
    }

    getAdminInfo() {
        return "This the subadmin class"
    }


}


module.exports = User;


var subA = new subAdmin("rishav", "google@rishav.com");
console.log(subA.getInfo());
console.log(subA.getAdminInfo());