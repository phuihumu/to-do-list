import displayList from './displayTodoList';
import displayCreateProject from './displayCreateProject';

function displayPage(project) {
    const element = document.querySelector('#content');
    
    const titleOfPage = document.createElement('div');
    titleOfPage.classList.add('pageTitle');
    titleOfPage.innerHTML = 'Todo List';

    const listContainer = document.createElement('div');
    listContainer.classList.add('listContainer');
    listContainer.appendChild(displayList(project));

    const footer = document.createElement('div');
    footer.classList.add('footer');
    footer.innerHTML = 'Copyright Information';

    element.appendChild(titleOfPage);
    element.appendChild(listContainer);
    element.appendChild(displayCreateProject());
    element.appendChild(footer);
}

export default displayPage;