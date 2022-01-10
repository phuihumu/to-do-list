import Project from './projectObject';

function setTodoComplete(project) {
    if (project.getProjectStatus() === "Incomplete") {
        project.setProjectStatus("Complete");
    }

    return project;
}

export default setTodoComplete;