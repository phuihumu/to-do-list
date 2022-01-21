import {createTodos, defaultTodo} from './createTodos';
import displayPage from './displayPage';
import {displayHeader, displayFooter} from './displayHeadFoot';
import {addProject,removeProjectDisplay} from './displayTodoList';
import {displayEditProject,revertToDisplay} from './displayEditProject';
import {editProject,updateStatus} from './updateProject';
import {updateProjectCard} from './displayProjectCards';
import removeProject from './removeProject';
import './style.css';
import Project from './projectObject';

const loadPage = (projects) => {
    const element = document.querySelector('#content');
    element.appendChild(displayHeader());
    displayPage(projects);
    element.appendChild(displayFooter());
}

let projectList = defaultTodo();

function getFromStorage() {
    const reference = localStorage.getItem('projectList');
    if (reference != null) {
        let projectListParsed = JSON.parse(reference);
        let storageList = [];
        projectListParsed.forEach(element => {
            let parsedProject = Project();
            parsedProject.setProjectTitle(element.title);
            parsedProject.setProjectDescription(element.description);
            parsedProject.setProjectDate(element.dueDate);
            parsedProject.setProjectPriority(element.priority);
            parsedProject.setProjectStatus(element.status);
            storageList.push(parsedProject);
        })

        projectList = storageList;
    }
}

function populateStorage(list) {
    let storageList = [];
    list.forEach(element => {
        storageList.push(parseProjects(element));
    });
    localStorage.setItem('projectList', JSON.stringify(storageList));
}

function parseProjects(project) {
    let parsedProject = {
        title: project.getProjectTitle(),
        description: project.getProjectDescription(),
        dueDate: project.getProjectDueDate(),
        priority: project.getProjectPriority(),
        status: project.getProjectStatus()
    };

    return parsedProject;
}

getFromStorage();
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
        populateStorage(projectList);
    }
    else {
        projectList.push(createTodos());
        populateStorage(projectList);
        addProject(createTodos());
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
        populateStorage(projectList);
    }
});

const deleteButton = document.querySelector('#content');
deleteButton.addEventListener("click", function(e) {
    if (e.target && e.target.classList.contains('delete')) {
        const proj = e.target.parentElement.parentElement;
        removeProject(projectList, proj._variable);
        removeProjectDisplay(proj);
        populateStorage(projectList);
    }
})

