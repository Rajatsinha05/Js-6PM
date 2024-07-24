let users = [];

const handleDelete = (index) => {
  users.splice(index, 1);
  uiMaker();

};


const deleteAll = () => {
  users = [];
  document.getElementById("tbody").innerHTML = "";
}
const uiMaker = () => {
  document.getElementById("tbody").innerHTML = "";
  for (let i = 0; i < users.length; i++) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = users[i].username;
    let td2 = document.createElement("td");
    td2.innerHTML = users[i].email;
    let td3 = document.createElement("td");
    td3.innerHTML = users[i].number;
    let td4 = document.createElement("td");
    td4.innerHTML = users[i].salary;

    let td5 = document.createElement("td");
    td5.innerHTML = "remove";

    let td6 = document.createElement("td");

    if (users[i].salary.length > 0) {
      if (users[i].salary >= 100000) {
        td6.innerHTML = "amir";
      } else {
        td6.innerHTML = "normal";
      }
    }
    td5.addEventListener("click", () => handleDelete(i));
    tr.append(td1, td2, td3, td4, td6, td5);
    document.getElementById("tbody").append(tr);
    debugger
  }
};

const handleData = (e) => {
  e.preventDefault();

  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;
  let salary = document.getElementById("salary").value;

  let user = {
    username: username,
    email: email,
    number: number,
    salary: salary,
  };


  users.push(user);
  console.log(users);
  uiMaker();

};

document.getElementById("userData").addEventListener("submit", handleData);

