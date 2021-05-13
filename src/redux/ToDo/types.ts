export interface ToDo{
    text: string;
    id: number;
    done: boolean;
}

export interface IToDoStore{
    todos: ToDo[];
    newTodo: string;
}
