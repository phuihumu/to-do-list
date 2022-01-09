import createTodos from './createTodos';
import setTodoComplete from './updateTodoStatus';
import changeTodoPriority from './changeTodoPriority';
import displayPage from './displayPage';

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

const Tasks = () => {
    let title, description, priority;
    let status = "Incomplete";
    const getTaskTitle = () => title;
    const getTaskDescription = () => description;
    const getTaskPriority = () => priority;
    const getTaskStatus = () => status;
    return {getTaskTitle,getTaskDescription,getTaskPriority,getTaskStatus}
};

displayPage(createTodos());

