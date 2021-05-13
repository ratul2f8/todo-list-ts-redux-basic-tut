import { ToDo } from  "./types";
export const updateTodo = (todos: ToDo[], id: number, text: string): ToDo[] =>
  todos.map((todo) => ({
    ...todo,
    text: todo.id === id ? text : todo.text,
  }));

export const toggleTodo = (todos: ToDo[], id: number): ToDo[] =>
  todos.map((todo) => ({
    ...todo,
    done: todo.id === id ? !todo.done : todo.done,
  }));

export const deleteToDo = (todos: ToDo[], id: number): ToDo[] =>
  todos.filter((todo) => todo.id !== id);

export const addTodo = (todos: ToDo[], text: string): ToDo[] => [
  ...todos,
  {
    id: Math.max(0, Math.max(...todos.map(({ id }) => id))) + 1,
    text,
    done: false,
  },
];