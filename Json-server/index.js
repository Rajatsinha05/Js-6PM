import studentApi from "./api.js";

let id = -1
const handleSubmit = (e) => {
    e.preventDefault();
    let student = {
        name: document.getElementById('name').value,
        number: document.getElementById('number').value,
        course: document.getElementById('course').value
    }
    console.log(student);
    if (id == -1) {
        studentApi.post(student)
    }
    else {
        studentApi.patch(id, student)
    }

    window.location.reload()

}
document.getElementById("form").addEventListener("submit", handleSubmit)

const handleUpdate = (ele) => {
    document.getElementById('name').value = ele.name;
    document.getElementById('number').value = ele.number;
    document.getElementById('course').value = ele.course;
    document.getElementById('type').value = "update"
    id = ele.id;
}
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
        let btn2 = document.createElement("button");
        btn2.innerHTML = "Update"
        btn2.addEventListener("click", () => handleUpdate(ele))
        btn1.addEventListener("click", () => {
            studentApi.delete(ele.id)
            window.location.reload()
        })
        div.append(name, course, number, btn1, btn2)
        document.getElementById("list").append(div)
    })

}
const getStudent = async () => {
    console.log(await studentApi.get())
    uiMaker(await studentApi.get())
}
getStudent()