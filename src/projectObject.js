//todo-projects
const Project = () => {
    let title, description, dueDate, priority;
    let status = "Incomplete";
    const getProjectTitle = () => title;
    const getProjectDescription = () => description;
    const getProjectDueDate= () => dueDate;
    const getProjectPriority = () => priority;
    const getProjectStatus = () => status;

    const setProjectTitle = (inputTitle) => {title = inputTitle};
    const setProjectDescription = (inputDescription) => {description = inputDescription};
    const setProjectDate = (inputDate) => {dueDate = inputDate};
    const setProjectPriority = (inputPriority) => {priority = inputPriority};
    const setProjectStatus = (inputStatus) => {status = inputStatus};
    return {getProjectTitle,getProjectDescription,getProjectDueDate,getProjectPriority,getProjectStatus
    , setProjectTitle,setProjectDescription,setProjectDate,setProjectPriority,setProjectStatus}
};

export default Project;