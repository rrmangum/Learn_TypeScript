import axios from 'axios';

const url = "http://jsonplaceholder.typicode.com/todos/1";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {
    const todo = response.data as Todo;

    const taskId = todo.id;
    const taskTitle = todo.title;
    const taskCompleted = todo.completed;

    logTodo(taskId, taskTitle, taskCompleted);
});

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
`);
}