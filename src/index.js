document.addEventListener("DOMContentLoaded", () => {
//grabbing all the necessary DOM elements
const tasklist = new taskList();

const newtaskForm = document.getElementById('taskform');
const taskList = document.getElementById('tasklist');
const taskUl = document.getElementById('tasklistUl');
//attach all event listeners
const attachevents = () => (taskUl.innerHTML = tasklist.eventTasks);

newtaskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  taskList.Save-Task(Todotask.value);
  // reset form
  e.target.reset();
  attachevents();
});

taskUl.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    taskList.deleteTask(e.target.dataset.description);
    attachevents();
  }
});
});