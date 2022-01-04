
function setTodoComplete(project) {
    if (project.getStatus() === "Incomplete") {
        project.status = "Complete";
    }

    return project;
}

export default setTodoComplete;