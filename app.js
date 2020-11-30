//selector

let todoInput= document.querySelector(".todo-input");
let todoButton= document.querySelector(".todo-button");
let todoList= document.querySelector(".todo-list");
let filterOption= document.querySelector(".filter-todo");

//Eventlistner
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);



//Function
function addTodo(event){
    
    //prevent form from submitting
   event.preventDefault();
   let todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Create list
  let newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  
  //Create Completed Button
  let completedButton = document.createElement("button");
  completedButton.innerHTML = `<i class="fas fa-check"></i>`;
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

  //Create trash button
  let trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);
  //attach final Todo
  todoList.appendChild(todoDiv);

  //clear todo input value
  todoInput.value="";
}

function deleteCheck(event){
  let item=event.target;
  //delete todo
  if(item.classList[0]==="trash-btn"){
    let todo=item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", e => {
      todo.remove();
    });
  }

  //check mark

if(item.classList[0]==="complete-btn"){
    let todo4=item.parentElement;
    todo4.classList.toggle("completed");
  }

}

function filterTodo(event) {
  let todos = todoList.childNodes;
  
  todos.forEach(function(todo) {

    switch (event.target.value) {
      case "all":
        todo.style.display = "flex";
        break;
      case "completed":
        if (todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
        break;
      case "uncompleted":
        if (!todo.classList.contains("completed")) {
          todo.style.display = "flex";
        } else {
          todo.style.display = "none";
        }
    }
  });
}





   



