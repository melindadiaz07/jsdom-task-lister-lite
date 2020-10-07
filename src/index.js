document.addEventListener("DOMContentLoaded", () => {
  // your code here
  getForm();
  getDeleteButton();
});

function getForm(){
  let formEl = document.querySelector("#create-task-form")
  formEl.addEventListener('submit', handleSubmit)
}

function addToDo(todo){
  let newToDo = document.createElement('li')
  let ul = document.querySelector('#tasks')
  newToDo.innerText = todo
  ul.appendChild(newToDo)
}

function handleSubmit(e){
  e.preventDefault()
  let input = document.querySelector("#new-task-description").value
  addToDo(input)
}

function getDeleteButton(){
  let deleteEl = document.querySelector('#delete-button')
  deleteEl.addEventListener('click', handleDelete)
}

function handleDelete(e){
  e.preventDefault()
  let lastTask = document.querySelector('ul').lastChild
  lastTask.remove()
}




// getForm()