import editIcon from './edit.png';
import uncheckedIcon from './uncheckedBox.png';
import checkedIcon from './checkedBox.png';

function displayProjectCard(project) {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project');
    projectCard._variable = project;

    const projectLeft = document.createElement('div');
    projectLeft.classList.add('projectLeft');
    const projectTitle = document.createElement('div');
    projectTitle.classList.add('pTitle');
    projectTitle.innerHTML = project.getProjectTitle();
    if (projectTitle.innerHTML === "") {
        projectTitle.innerHTML = "New Project";
    }

    const projectDescription = document.createElement('div');
    projectDescription.classList.add('pDescription');
    projectDescription.innerHTML = project.getProjectDescription();
    const projectDue = document.createElement('div');
    projectDue.classList.add('pDate');
    projectDue.innerHTML = "Due Date: " + project.getProjectDueDate();
    const projectPriority = document.createElement('div');
    projectPriority.classList.add('pPriority');
    projectPriority.innerHTML = "Priority: " + project.getProjectPriority();
    projectPriority.id = project.getProjectPriority();

    const projectStatus = document.createElement('div');
    projectStatus.classList.add('pStatus');
    projectStatus.innerHTML = "Status: " + project.getProjectStatus();

    projectLeft.appendChild(projectTitle);
    projectLeft.appendChild(projectDescription);
    projectLeft.appendChild(projectDue);
    projectLeft.appendChild(projectPriority);
    projectLeft.appendChild(projectStatus);

    const projectRight = document.createElement('div');
    projectRight.classList.add('projectRight');
    const edit = new Image();
    edit.src = editIcon;
    edit.classList.add('editIcon');
    const unchecked = new Image();
    unchecked.src = uncheckedIcon;
    unchecked.classList.add('checkIcon');
    unchecked.id = 'unchecked';
    const checked = new Image();
    checked.src = checkedIcon;
    checked.classList.add('checkIcon')
    checked.id = 'checked';
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('delete');
    deleteButton.innerHTML = "Delete";

    if (project.getProjectStatus() === "Complete") {
        unchecked.style.display = "none";
        checked.style.display = "flex";
    }

    projectRight.appendChild(edit);
    projectRight.appendChild(unchecked);
    projectRight.appendChild(checked);
    projectRight.appendChild(deleteButton);

    projectCard.appendChild(projectLeft);
    projectCard.appendChild(projectRight);

    return projectCard;
}

function updateProjectCard(project) {
    project.querySelector('.pTitle').innerHTML = project._variable.getProjectTitle();
    project.querySelector('.pDescription').innerHTML = project._variable.getProjectDescription();
    project.querySelector('.pDate').innerHTML = "Due Date: " + project._variable.getProjectDueDate();
    project.querySelector('.pPriority').innerHTML = "Priority: " + project._variable.getProjectPriority();
    project.querySelector('.pPriority').id = project._variable.getProjectPriority();
    project.querySelector('.pStatus').innerHTML = "Status: " + project._variable.getProjectStatus();

    if (project._variable.getProjectStatus() === "Incomplete") {
        project.querySelector('#unchecked').style.display = "flex";
        project.querySelector('#checked').style.display = "none";
    }
    else {
        project.querySelector('#unchecked').style.display = "none";
        project.querySelector('#checked').style.display = "flex";
    }
}

export {displayProjectCard, updateProjectCard};