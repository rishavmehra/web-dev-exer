// It's better save file name without spaces specially in the case when you need to export that file

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

module.exports = User;
