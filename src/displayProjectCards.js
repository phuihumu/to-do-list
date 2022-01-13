import editIcon from './edit.png';

function displayProjectCard(project) {
    const projectCard = document.createElement('div');
    projectCard.classList.add('project');

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
    const edit = new Image();
    edit.src = editIcon;
    edit.classList.add('editIcon');

    projectCard.appendChild(projectTitle);
    projectCard.appendChild(projectDescription);
    projectCard.appendChild(projectDue);
    projectCard.appendChild(projectPriority);
    projectCard.appendChild(edit);

    return projectCard;
}

export default displayProjectCard;