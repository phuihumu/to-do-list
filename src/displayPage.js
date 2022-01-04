import displayList from './displayTodoList';

function displayPage() {
    const element = document.querySelector('#content');
    
    const titleOfPage = document.createElement('div');
    titleOfPage.classList.add('pageTitle');
    titleOfPage.innerHTML = 'Todo List';

    const listContainer = document.createElement('div');
    listContainer.classList.add('listContainer');
    listContainer.appendChild(displayList());

    const footer = document.createElement('div');
    footer.classList.add('footer');
    footer.innerHTML = 'Copyright Information';

    element.appendChild(titleOfPage);
    element.appendChild(listContainer);
    element.appendChild(footer);
}

export default displayPage;