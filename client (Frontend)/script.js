const API_URL = "https://your-render-backend-url.com/api/tasks"; 
document.getElementById("task-form").addEventListener("submit", async (e) => 
    { e.preventDefault(); 
    const taskInput = document.getElementById("task-input").value; 
    const response = await fetch(API_URL, { method: "POST", headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify({ text: taskInput }), }); if (response.ok) { fetchTasks(); document.getElementById("task-input").value = ""; } }); async function fetchTasks() { const response = await fetch(API_URL); const tasks = await response.json(); const taskList = document.getElementById("task-list"); taskList.innerHTML = ""; tasks.forEach((task) => { const li = document.createElement("li"); li.innerHTML = ` <span>${task.text}</span> <button onclick="deleteTask('${task._id}')">Delete</button> `; taskList.appendChild(li); }); } async function deleteTask(id) { await fetch(`${API_URL}/${id}`, { method: "DELETE" }); fetchTasks(); } fetchTasks();
