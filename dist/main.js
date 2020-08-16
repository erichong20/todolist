/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/domChanger.js":
/*!***************************!*\
  !*** ./src/domChanger.js ***!
  \***************************/
/*! exports provided: makeSideBar, renderTodos, newTaskButton, initializeDashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"makeSideBar\", function() { return makeSideBar; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderTodos\", function() { return renderTodos; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"newTaskButton\", function() { return newTaskButton; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initializeDashboard\", function() { return initializeDashboard; });\nconst main = document.querySelector(\"div#content\");\n\nconst makeSideBar = () => {\n    \n\n    \n}\n\nconst renderTodos = (todos = []) => {\n    let todoContainer = document.createElement(\"div\");\n    todoContainer.classList.add(\"todo-container\");\n    for (let i = 0; i< todos.length; i++){\n        let todo = todos[i];\n        let container = document.createElement(\"p\");\n        container.classList.add(\"todo-element\");\n        container.innerHTML = `${todo.name} should be done before ${todo.dueDate}`;\n        console.log(`${todo.name} should be done before ${todo.dueDate}`);\n        todoContainer.appendChild(container);\n    }\n\n    main.appendChild(todoContainer);\n}\n\nconst newTaskButton = () => {\n    let newTaskButton = document.createElement(\"button\");\n    newTaskButton.classList.add(\"new-task\");\n    newTaskButton.innerHTML = \"New Task\"\n\n    return newTaskButton;\n}\n\nconst initializeDashboard = () => {\n    let dashboard = document.createElement(\"div\");\n    dashboard.classList.add(\"dashboard\");\n\n    let button = newTaskButton();\n    button.addEventListener(\"click\",(e)=>{\n        console.log(\"clicked\");\n    });\n\n    dashboard.appendChild(button);\n\n    main.appendChild(dashboard);\n}\n\n\n\n\n//# sourceURL=webpack:///./src/domChanger.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _domChanger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domChanger.js */ \"./src/domChanger.js\");\n\n\n\nlet todoList = [];\nlet todo1 = Object(_todo_js__WEBPACK_IMPORTED_MODULE_0__[\"createTodo\"])(\"erg\",\"description\", \"August 18th\");\nlet todo2 = Object(_todo_js__WEBPACK_IMPORTED_MODULE_0__[\"createTodo\"])(\"read\",\"read book\", \"August 15th\");\n\ntodoList.push(todo1);\ntodoList.push(todo2);\n\nconst initializePage = () => {\n    Object(_domChanger_js__WEBPACK_IMPORTED_MODULE_1__[\"initializeDashboard\"])();\n    Object(_domChanger_js__WEBPACK_IMPORTED_MODULE_1__[\"renderTodos\"])(todoList);\n}\n\ninitializePage();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/*! exports provided: createTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createTodo\", function() { return createTodo; });\nconst createTodo = (name = \"\", description =\"\", dueDate =\"\", priority =\"\", notes = \"\") => {\n    \n    \n\n    return {name, description, dueDate,priority,notes}\n}\n\n\n\n\n//# sourceURL=webpack:///./src/todo.js?");

/***/ })

/******/ });