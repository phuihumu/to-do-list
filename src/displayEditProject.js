
function displayEditProject() {

    const editTitle = document.querySelector('.createTitle');
    editTitle.innerHTML = 'Edit Project';

    const editTitleInput = document.querySelector('#title');
    //editTitleInput.value = project.getProjectTitle();

    const editDescriptionInput = document.querySelector('#description');
    //editDescriptionInput.value = project.getProjectDescription();

    const editPriorityInput = document.querySelector('#priority');
    //editPriorityInput.value = project.getProjectPriority();

    const editProjectButton = document.querySelector('.createProjectButton');
    editProjectButton.innerHTML = 'Edit';

}

export default displayEditProject;