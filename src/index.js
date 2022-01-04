
//todo-projects
const Project = () => {
    let title, description, dueDate, priority;
    const getProjectTitle = () => title;
    const getProjectDescription = () => description;
    const getDueDate= () => dueDate;
    const getPriority = () => priority;
    return {getProjectTitle,getProjectDescription,getDueDate,getPriority}
};