
//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
//Functions
function addTodo(event){

event.preventDefault();
//Todo Div
const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");
//create li
const newTodo = document.createElement("li");
newTodo.innerText = todoInput.value;
newTodo.classList.add("todo-item");
todoDiv.appendChild(newTodo);
//checkmark button
const completedButton = document.createElement("buttton");
completedButton.classList.add("complete-btn");
const iTag1 = document.createElement("i");
iTag1.classList.add("fas");
iTag1.classList.add("fa-check");
completedButton.appendChild(iTag1);
todoDiv.appendChild(completedButton);
//trashbutton
const trashButton = document.createElement("button");
trashButton.classList.add("trash-btn");
const iTag2 = document.createElement("i");
iTag2.classList.add("fas");
iTag2.classList.add("fa-trash");
trashButton.appendChild(iTag2);
todoDiv.appendChild(trashButton);
todoList.appendChild(todoDiv);
todoInput.value ="";
}
function deleteCheck(e){
const item = e.target;
if(item.classList[0]=== "trash-btn"){
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function(){
        todo.remove();
    });
      
   
}
if(item.classList[0]==="complete-btn"){
const todo = item.parentElement;
todo.classList.toggle("completed");
}
}