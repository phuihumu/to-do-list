import Project from './projectObject';

function createTodos() {
    const todoItem = Project();
    todoItem.title = document.querySelector('#title');
    todoItem.description = document.querySelector('#description');
    todoItem.dueDate = document.querySelector('#date')
    todoItem.priority = document.querySelector('#priority');
    return todoItem;
}

function defaultTodo() {
    const defaultProject = Project();
    defaultProject.title = 'New Project';
    defaultProject.description = 'Add a Description';
    defaultProject.dueDate = '1/1/2021';
    defaultProject.priority = '1';
    return defaultProject;
}

export {createTodos,defaultTodo};