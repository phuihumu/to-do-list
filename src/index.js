import createTodos from './createTodos';
import setTodoComplete from './updateTodoStatus';
import changeTodoPriority from './changeTodoPriority';

//todo-projects
const Project = () => {
    let title, description, dueDate, priority;
    let status = "Incomplete";
    const getProjectTitle = () => title;
    const getProjectDescription = () => description;
    const getDueDate= () => dueDate;
    const getPriority = () => priority;
    const getStatus = () => status;
    return {getProjectTitle,getProjectDescription,getDueDate,getPriority,getStatus}
};