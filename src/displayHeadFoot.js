
function displayHeader() {
    const titleOfPage = document.createElement('div');
    titleOfPage.classList.add('pageTitle');
    titleOfPage.innerHTML = 'Todo List';

    return titleOfPage;
}

function displayFooter() {
    const footer = document.createElement('div');
    footer.classList.add('footer');
    footer.innerHTML = 'Copyright Information';

    return footer;
}

export {displayHeader,displayFooter};