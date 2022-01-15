import displayList from './displayTodoList';
import displayCreateProject from './displayCreateProject';

function displayPage(project) {
    const element = document.querySelector('#content');

    const listContainer = document.createElement('div');
    listContainer.classList.add('listContainer');
    listContainer.appendChild(displayList(project));

    element.appendChild(listContainer);
    element.appendChild(displayCreateProject());
}

export default displayPage;