
function removeProject (projectList, project) {
    const index = projectList.indexOf(project);
    if (index > -1) {
        projectList.splice(index, 1);
    }
    return projectList;
}

export default removeProject;