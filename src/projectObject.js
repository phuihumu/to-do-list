//todo-projects
const Project = () => {
    let title, description, dueDate, priority;
    let status = "Incomplete";
    const getProjectTitle = () => title;
    const getProjectDescription = () => description;
    const getProjectDueDate= () => dueDate;
    const getProjectPriority = () => priority;
    const getProjectStatus = () => status;
    return {getProjectTitle,getProjectDescription,getProjectDueDate,getProjectPriority,getProjectStatus}
};

export default Project;