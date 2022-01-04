
function setTodoComplete(project) {
    if (project.getProjectStatus() === "Incomplete") {
        project.status = "Complete";
    }

    return project;
}

export default setTodoComplete;