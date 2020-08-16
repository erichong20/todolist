import {createTodo} from ".todo.js"

const main = document.querySelector("div#content");
const form = document.querySelector("div#form");


const makeSideBar = () => {
    

    
}

const renderTodos = (todos = []) => {
    let todoContainer = document.createElement("div");
    todoContainer.classList.add("todo-container");
    for (let i = 0; i< todos.length; i++){
        let todo = todos[i];
        let container = document.createElement("p");
        container.classList.add("todo-element");
        container.innerHTML = `${todo.name} should be done before ${todo.dueDate}`;
        console.log(`${todo.name} should be done before ${todo.dueDate}`);
        todoContainer.appendChild(container);
    }

    main.appendChild(todoContainer);
}

const newTaskButton = () => {
    let newTaskButton = document.createElement("button");
    newTaskButton.classList.add("new-task");
    newTaskButton.innerHTML = "New Task"

    return newTaskButton;
}

const initializeDashboard = () => {
    let dashboard = document.createElement("div");
    dashboard.classList.add("dashboard");

    let button = newTaskButton();
    button.addEventListener("click",(e)=>{
        openForm();
    });

    dashboard.appendChild(button);

    form.style.display = "none";

    main.appendChild(dashboard);
}

const openForm = () => {
    form.style.display = "block";

    form.addEventListener("submit", function(e) {
        e.preventDefault();
        modal.style.display = "none";
        if (document.querySelector("input#high")){
            createTodo(document.querySelector("#task-name"),document.querySelector("#description"),document.querySelector("#deadline"),"high");
        } else if (document.querySelector("input#low")){
            createTodo(document.querySelector("#task-name"),document.querySelector("#description"),document.querySelector("#deadline"),"medium");
        } else {
            createTodo(document.querySelector("#task-name"),document.querySelector("#description"),document.querySelector("#deadline"),"low");
        }
        Array.from(formInputFields).forEach(function(inputField) {
            inputField.value = "";
        })
        Array.from(formInputRadios).forEach(function(radio) {
            radio.checked = false;
        })
    })
}


export {makeSideBar, renderTodos, newTaskButton, initializeDashboard}