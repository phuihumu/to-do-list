import editIcon from './edit.png';

function displayProjectCard(project) {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project');

    const projectLeft = document.createElement('div');
    projectLeft.classList.add('projectLeft');
    const projectTitle = document.createElement('div');
    projectTitle.classList.add('pTitle');
    projectTitle.innerHTML = project.getProjectTitle();
    const projectDescription = document.createElement('div');
    projectDescription.classList.add('pDescription');
    projectDescription.innerHTML = project.getProjectDescription();
    const projectDue = document.createElement('div');
    projectDue.classList.add('pDate');
    projectDue.innerHTML = "Due Date: " + project.getProjectDueDate();
    const projectPriority = document.createElement('div');
    projectPriority.classList.add('pPriority');
    projectPriority.innerHTML = "Priority: " + project.getProjectPriority();
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

    projectRight.appendChild(edit);

    projectCard.appendChild(projectLeft);
    projectCard.appendChild(projectRight);

    return projectCard;
}

export default displayProjectCard;