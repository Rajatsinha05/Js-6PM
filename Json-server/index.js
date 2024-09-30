import studentApi from "./api.js";

const handleSubmit = (e) => {
    e.preventDefault();
    let student = {
        name: document.getElementById('name').value,
        number: document.getElementById('number').value,
        course: document.getElementById('course').value
    }
    console.log(student);
    studentApi.post(student)

}
document.getElementById("form").addEventListener("submit", handleSubmit)


// ui 
const uiMaker = (students) => {
    students.map((ele) => {
        let div = document.createElement("div");
        let name = document.createElement("h1");
        name.innerHTML = ele.name;
        let course = document.createElement("h2");
        course.innerHTML = ele.course
        let number = document.createElement("h3");
        number.innerHTML = ele.number
        let btn1 = document.createElement("button");
        btn1.innerHTML = "Delete"
        btn1.addEventListener("click", () => studentApi.delete(ele.id))
        div.append(name, course, number, btn1)
        document.getElementById("list").append(div)
    })

}
const getStudent = async () => {
    console.log(await studentApi.get())
    uiMaker(await studentApi.get())
}
getStudent()