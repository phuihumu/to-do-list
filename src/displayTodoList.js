import displayProjectCard from './displayProjectCards';

function displayList(projects) {
    const todoList = document.createElement('div');
    todoList.classList.add('todoList');

    projects.forEach(element => {
        todoList.appendChild(displayProjectCard(element));
    });

    const newProject = document.createElement('button');
    newProject.classList.add('newProjectButton');
    newProject.innerHTML = 'New Project';

    todoList.appendChild(newProject);

    return todoList;
}

function addProject(project) {
    const todoList = document.querySelector('.todoList');
    todoList.appendChild(displayProjectCard(project));
}

export {displayList, addProject};