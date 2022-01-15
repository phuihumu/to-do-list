import {createTodos, defaultTodo} from './createTodos';
import setTodoComplete from './updateTodoStatus';
import changeTodoPriority from './changeTodoPriority';
import displayPage from './displayPage';
import displayCreateProject from './displayCreateProject';
import {displayHeader, displayFooter} from './displayHeadFoot';
import {addProject} from './displayTodoList';
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
createProjBtn.addEventListener("click", () => {
    projectList.addNewProject(createTodos());
    document.querySelector('.createScreenModal').style.display = "none";
    addProject(createTodos());
});

