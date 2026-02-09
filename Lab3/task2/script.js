const inputField = document.querySelector(".input_field");
const addBtn = document.querySelector(".btn_submit");
const todoList = document.querySelector(".list");

function addTask() {
    const taskValue = inputField.value.trim();

    if (taskValue === "") {
        alert("Please enter a task!");
        inputField.focus();
        return;
    }

    const taskItem = document.createElement("div");
    taskItem.className = "todo-item";

    taskItem.innerHTML = `
    <input type="checkbox" class="task-check">
    <span class="todo-text"></span>
    <button class="delete-btn" type="button" aria-label="Delete task">🗑️</button>
  `;

    taskItem.querySelector(".todo-text").textContent = taskValue;

    todoList.appendChild(taskItem);
    inputField.value = "";
    inputField.focus();

    const checkbox = taskItem.querySelector(".task-check");
    const text = taskItem.querySelector(".todo-text");

    checkbox.addEventListener("change", () => {
        text.classList.toggle("completed", checkbox.checked);
    });

    const deleteBtn = taskItem.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
        taskItem.remove();
    });
}

addBtn.addEventListener("click", addTask);

inputField.addEventListener("keydown", (e) => {
    if (e.key === "Enter") addTask();
});