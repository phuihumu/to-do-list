import Project from './projectObject';

function createTodos() {
    const todoItem = Project();
    todoItem.setProjectTitle(document.querySelector('#title'));
    todoItem.setProjectDescription(document.querySelector('#description'));
    todoItem.setProjectDate(document.querySelector('#date'));
    todoItem.setProjectPriority(document.querySelector('#priority'));
    return todoItem;
}

function defaultTodo() {
    const defaultProject = Project();
    defaultProject.setProjectTitle('New Project');
    defaultProject.setProjectDescription('Add a Description');
    defaultProject.setProjectDate('1/1/2021');
    defaultProject.setProjectPriority('1');
    return defaultProject;
}

export {createTodos,defaultTodo};