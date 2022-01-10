import Project from './projectObject';

function createTodos() {
    const todoItem = Project();
    todoItem.setProjectTitle(document.querySelector('#title').value);
    todoItem.setProjectDescription(document.querySelector('#description').value);
    todoItem.setProjectDate(document.querySelector('#date').value);
    todoItem.setProjectPriority(document.querySelector('#priority').value);
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