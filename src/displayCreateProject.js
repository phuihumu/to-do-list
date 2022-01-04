
function displayCreateProject() {
    const createScreen = document.createElement('div');
    createScreen.classList.add('createScreen');

    const createTitle = document.createElement('div');
    createTitle.classList.add('createTitle');
    createTitle.innerHTML = 'Create New Project';

    const createProjectContainer = document.createElement('div');
    createProjectContainer.classList.add('projectContainer');

    const createTitleLabel = document.createElement('div');
    createTitleLabel.classList.add('createFormLabel');
    const createTitleInput = document.createElement('input');
    createTitleInput.id = 'title';
    createTitleInput.type = 'text';
    createTitleInput.placeholder = 'Enter Project Title';

    const createDescriptionLabel = document.createElement('div');
    createDescriptionLabel.classList.add('createFormLabel');
    const createDescriptionInput = document.createElement('input');
    createDescriptionInput.id = 'description';
    createDescriptionInput.type = 'text';
    createDescriptionInput.placeholder = 'Enter Project Description';

    const createDateLabel = document.createElement('div');
    createDateLabel.classList.add('createFormLabel');
    const createDateInput = document.createElement('input');
    createDateInput.id = 'date';
    createDateInput.type = 'date';

    const createPriorityLabel = document.createElement('div');
    createPriorityLabel.classList.add('createFormLabel');
    const createPriorityInput = document.createElement('input');
    createPriorityInput.id = 'priority';
    createPriorityInput.type = 'text';
    createPriorityInput.placeholder = 'Enter Project Priority';
}

export default displayCreateProject;