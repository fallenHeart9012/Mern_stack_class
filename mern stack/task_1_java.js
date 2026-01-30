// JavaScript
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function renderTasks() {
  const list = document.getElementById("taskList");
  list.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span contenteditable="false">${task}</span>
      <button onclick="editTask(${index}, this)">Edit</button>
      <button onclick="deleteTask(${index})">Delete</button>
    `;
    list.appendChild(li);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const input = document.getElementById("taskInput");
  if (input.value.trim()) {
    tasks.push(input.value.trim());
    input.value = "";
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function editTask(index, btn) {
  const span = btn.parentElement.querySelector("span");
  if (btn.textContent === "Edit") {
    span.contentEditable = true;
    span.focus();
    btn.textContent = "Save";
  } else {
    tasks[index] = span.textContent.trim();
    span.contentEditable = false;
    btn.textContent = "Edit";
    renderTasks();
  }
}

renderTasks();