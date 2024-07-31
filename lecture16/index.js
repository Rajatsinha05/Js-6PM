
class Student {
    constructor(name, number, grid, course, fee) {
        this.name = name
        this.number = number
        this.grid = grid
        this.course = course
        this.fee = fee
    }
    leave(name) {
        console.log("you can take leave");
    }
   
    exam(){

    }
}


let stu = new Student("mayan", 54667674746, 4563, "full stack", 567657)
let student2 = new Student("riya", 8784563, 6576, "full stack", 657657)
