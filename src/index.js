import {createTodo} from "./todo.js"
import {makeSideBar, renderTodos, initializeDashboard} from "./domChanger.js"

let todoList = [];
let todo1 = createTodo("erg","description", "August 18th");
let todo2 = createTodo("read","read book", "August 15th");

todoList.push(todo1);
todoList.push(todo2);

const initializePage = () => {
    initializeDashboard();
    renderTodos(todoList);
}

initializePage();