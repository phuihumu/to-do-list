
function displayCreateProject() {
    const createScreenModal = document.createElement('div');
    createScreenModal.classList.add('createScreenModal');

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
    const createPriorityInput = document.createElement('select');
    createPriorityInput.id = 'priority';
    createPriorityInput.name = 'priority';
    createPriorityInput.placeholder = 'Enter Project Priority';
    const priorityLow = document.createElement('option');
    priorityLow.id = 'low';
    priorityLow.value = 'low';
    priorityLow.innerHTML = 'Low';
    const priorityMedium = document.createElement('option');
    priorityMedium.id = 'medium';
    priorityMedium.value = 'medium';
    priorityMedium.innerHTML = 'Medium';
    const priorityHigh = document.createElement('option');
    priorityHigh.id = 'high';
    priorityHigh.value = 'high';
    priorityHigh.innerHTML = 'High';
    createPriorityInput.appendChild(priorityLow);
    createPriorityInput.appendChild(priorityMedium);
    createPriorityInput.appendChild(priorityHigh);


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

    createScreenModal.appendChild(createScreen);

    return createScreenModal;
}

export default displayCreateProject;