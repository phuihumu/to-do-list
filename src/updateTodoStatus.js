
function setTodoComplete(project) {
    if (project.getProjectStatus() === "Incomplete") {
        project.setProjectStatus("Complete");
    }
    else {
        project.setProjectStatus("Incomplete");
    }

    return project;
}

export default setTodoComplete;