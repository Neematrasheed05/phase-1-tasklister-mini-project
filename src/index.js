document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
let listform = document.querySelector('#create-New-Task');
listform.addEventListener('submit', function(e){
  //this line adds an event of the 'listform' element
  e.preventDefault();
  createToDo(e.target['new-task-description'].value);
  //the code prevents the default behavior like
  //(refreshing the page) and calls a function 
  //called 'createToDo' with the value entered in the 
  //'new-task-description' inputfield
});

function createToDo(description){
  let bttn = document.createElement('button')
  bttn.addEventListener('click', Deleteitem)
  bttn.textContent = 'x'
  //this button is created inside the 'myToDolists'
  //element and is added as an event listener to the 
  //'click' event.
  //the 'click' event is triggered when the user clicks on the 
  //button.
  let li_items = document.createElement('li');
  li_items.textContent = description;
  li_items.appendChild(bttn);
  document.querySelector('#list').appendChild(li_items);
  //the 'li_items' element is created inside the 'list'
  //element and is added as an event listener to the 
  //'click' event.
  //the 'click' event is triggered when the user clicks on the 
  //button.
}

function Deleteitem(e){
  //this line adds an event of the 'listform' element
  e.target.parentElement.remove();
  //the code prevents the default behavior like
  //(refreshing the page) and calls a function 
  //called 'createToDo' with the value entered in the 
  //'new-task-description' inputfield
}