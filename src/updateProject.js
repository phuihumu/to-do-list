import setTodoComplete from './updateTodoStatus';
import changeTodoPriority from './changeTodoPriority';

function editProject(project) {
    project.setProjectTitle(document.querySelector('#title').value);
    project.setProjectDescription(document.querySelector('#description').value);
    project.setProjectDate(document.querySelector('#date').value);
    changeTodoPriority(project, document.querySelector('#priority').value);
}

function updateStatus(project) {
    setTodoComplete(project);
}

export {editProject,updateStatus};