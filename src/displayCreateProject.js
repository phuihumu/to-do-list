
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
    createTitleLabel.innerHTML = 'Project Title';
    const createTitleInput = document.createElement('input');
    createTitleInput.id = 'title';
    createTitleInput.type = 'text';
    createTitleInput.placeholder = 'Enter Project Title';

    const createDescriptionLabel = document.createElement('div');
    createDescriptionLabel.classList.add('createFormLabel');
    createDescriptionLabel.innerHTML = 'Description'
    const createDescriptionInput = document.createElement('input');
    createDescriptionInput.id = 'description';
    createDescriptionInput.type = 'text';
    createDescriptionInput.placeholder = 'Enter Project Description';

    const createDateLabel = document.createElement('div');
    createDateLabel.classList.add('createFormLabel');
    createDateLabel.innerHTML = 'Due Date';
    const createDateInput = document.createElement('input');
    createDateInput.id = 'date';
    createDateInput.type = 'date';

    const createPriorityLabel = document.createElement('div');
    createPriorityLabel.classList.add('createFormLabel');
    createPriorityLabel.innerHTML = 'Priority';
    const createPriorityInput = document.createElement('input');
    createPriorityInput.id = 'priority';
    createPriorityInput.type = 'text';
    createPriorityInput.placeholder = 'Enter Project Priority';

    createProjectContainer.appendChild(createTitleLabel);
    createProjectContainer.appendChild(createTitleInput);
    createProjectContainer.appendChild(createDescriptionLabel);
    createProjectContainer.appendChild(createDescriptionInput);
    createProjectContainer.appendChild(createDateLabel);
    createProjectContainer.appendChild(createDateInput);
    createProjectContainer.appendChild(createPriorityLabel);
    createProjectContainer.appendChild(createPriorityInput);

    createScreen.appendChild(createTitle);
    createScreen.appendChild(createProjectContainer);

    return createScreen;
}

export default displayCreateProject;