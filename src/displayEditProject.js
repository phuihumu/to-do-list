
function displayEditProject(project) {

    const editTitle = document.querySelector('.createTitle');
    editTitle.innerHTML = 'Edit Project';

    const editTitleInput = document.querySelector('#title');
    editTitleInput.value = project.getProjectTitle();

    const editDescriptionInput = document.querySelector('#description');
    editDescriptionInput.value = project.getProjectDescription();

    const editPriorityInput = document.querySelector('#priority');
    editPriorityInput.value = project.getProjectPriority();

    const editProjectButton = document.querySelector('.createProjectButton');
    editProjectButton.innerHTML = 'Edit';

}

function revertToDisplay() {
    
    document.querySelector('.createTitle').innerHTML = 'Create New Project';

    document.querySelector('.createProjectButton').innerHTML = 'Create';
}

export {displayEditProject,revertToDisplay};