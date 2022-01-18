import {createTodos, defaultTodo} from './createTodos';
import displayPage from './displayPage';
import {displayHeader, displayFooter} from './displayHeadFoot';
import {addProject,removeProjectDisplay} from './displayTodoList';
import {displayEditProject,revertToDisplay} from './displayEditProject';
import {editProject,updateStatus} from './updateProject';
import {updateProjectCard} from './displayProjectCards';
import removeProject from './removeProject';
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
    const length = () => listOfProjects.length;
    const indexOf = (proj) => listOfProjects.indexOf(proj);
    const splice = (index, num) => listOfProjects.splice(index,num);
    return {getListOfProjects, addNewProject,length,indexOf,splice};
}

const loadPage = (projects) => {
    const element = document.querySelector('#content');
    element.appendChild(displayHeader());
    displayPage(projectList.getListOfProjects());
    element.appendChild(displayFooter());
}

//displayPage(getListOfProjects());
const projectList = allProjects();
const stack = [];
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
        let proj = stack.pop();
        editProject(proj._variable);
        updateProjectCard(proj);
        revertToDisplay();
    }
    else {
        projectList.addNewProject(createTodos());
        addProject(createTodos(), projectList.length()-1);
    }
    document.querySelector('.createScreenModal').style.display = "none";
});

const closeCreateScreen = document.querySelector('.closeIcon');
closeCreateScreen.addEventListener("click", function(e) {
    if (e.target && e.target.innerHTML == 'Edit') {
        stack.pop();
    }
    revertToDisplay();
    document.querySelector('.createScreenModal').style.display = "none";
});

const editProjectButtons = document.querySelector('#content');
editProjectButtons.addEventListener("click", function(e) {
    if (e.target && e.target.classList.contains('editIcon')) {
        const proj = e.target.parentElement.parentElement;
        stack.push(proj);
        displayEditProject(e.target.parentElement.parentElement._variable);
        document.querySelector('.createScreenModal').style.display = "flex";
    }
});

const statusCheckButton = document.querySelector('#content');
statusCheckButton.addEventListener("click", function(e) {
    if (e.target && e.target.classList.contains('checkIcon')) {
        const proj = e.target.parentElement.parentElement;
        updateStatus(proj._variable);
        updateProjectCard(proj);
    }
});

const deleteButton = document.querySelector('#content');
deleteButton.addEventListener("click", function(e) {
    if (e.target && e.target.classList.contains('delete')) {
        const proj = e.target.parentElement.parentElement;
        removeProject(projectList, proj._variable);
        removeProjectDisplay(proj);
    }
})

