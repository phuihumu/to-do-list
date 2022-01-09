import {createTodos, defaultTodo} from './createTodos';
import setTodoComplete from './updateTodoStatus';
import changeTodoPriority from './changeTodoPriority';
import displayPage from './displayPage';

const Tasks = () => {
    let title, description, priority;
    let status = "Incomplete";
    const getTaskTitle = () => title;
    const getTaskDescription = () => description;
    const getTaskPriority = () => priority;
    const getTaskStatus = () => status;
    return {getTaskTitle,getTaskDescription,getTaskPriority,getTaskStatus}
};

displayPage(defaultTodo());

