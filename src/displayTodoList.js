import displayProjectCard from './displayProjectCards';

function displayList(projects) {
    const todoList = document.createElement('div');
    todoList.classList.add('todoList');

    todoList.appendChild(displayProjectCard(projects));

    const newProject = document.createElement('button');
    newProject.classList.add('newProjectButton');
    newProject.innerHTML = 'New Project';

    todoList.appendChild(newProject);

    return todoList;
}

export default displayList;