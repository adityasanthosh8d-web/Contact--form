const input = document.getElementById("taskInput");
const button = document.getElementById("addBtn");
const list = document.getElementById("taskList");

button.addEventListener("click", function () {

    const task = input.value;

    if (task === "") return;

    const li = document.createElement("li");
    li.textContent = task;

    list.appendChild(li);

    input.value = "";
});function addTask() {
    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") return;

    let li = document.createElement("li");
    li.textContent = task;

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
