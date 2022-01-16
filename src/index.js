import {createTodos, defaultTodo} from './createTodos';
import setTodoComplete from './updateTodoStatus';
import changeTodoPriority from './changeTodoPriority';
import displayPage from './displayPage';
import displayCreateProject from './displayCreateProject';
import {displayHeader, displayFooter} from './displayHeadFoot';
import {addProject} from './displayTodoList';
import {displayEditProject,revertToDisplay} from './displayEditProject';
import './style.css';

const Tasks = () => {
    let title, description, priority;
    let status = "Incomplete";
    const getTaskTitle = () => title;
    const getTaskDescription = () => description;
    const getTaskPriority = () => priority;
    const getTaskStatus = () => status;
    return {getTaskTitle,getTaskDescription,getTaskPriority,getTaskStatus}
};

const allProjects = () => {
    let listOfProjects = defaultTodo();
    const getListOfProjects = () => listOfProjects;
    const addNewProject = (element) => listOfProjects.push(element);
    return {getListOfProjects, addNewProject};
}

const loadPage = (projects) => {
    const element = document.querySelector('#content');
    element.appendChild(displayHeader());
    displayPage(projectList.getListOfProjects());
    element.appendChild(displayFooter());
}

//displayPage(getListOfProjects());
const projectList = allProjects();
loadPage(projectList);

const newProjectBtn = document.querySelector(".newProjectButton");
newProjectBtn.addEventListener("click", () => {
    document.querySelector('#title').value = "";
    document.querySelector('#description').value = "";
    document.querySelector('#date').value = "";
    document.querySelector('#priority').value = "";
    document.querySelector('.createScreenModal').style.display = "flex";
});

const createProjBtn = document.querySelector(".createProjectButton");
createProjBtn.addEventListener("click", function(e) {
    if (e.target && e.target.innerHTML == 'Edit') {
        revertToDisplay();
    }
    else {
        projectList.addNewProject(createTodos());
        addProject(createTodos());
    }
    document.querySelector('.createScreenModal').style.display = "none";
});

const closeCreateScreen = document.querySelector('.closeIcon');
closeCreateScreen.addEventListener("click", () => {
    revertToDisplay();
    document.querySelector('.createScreenModal').style.display = "none";
});

const editProjectButtons = document.querySelector('#content');
editProjectButtons.addEventListener("click", function(e) {
    if (e.target && e.target.classList.contains('editIcon')) {
        displayEditProject(e.target.parentElement.parentElement._variable);
        console.log(e.target.parentElement.parentElement._variable);
        document.querySelector('.createScreenModal').style.display = "flex";
    }
});

