import { ToDo } from "./types";
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_NEWTODO = "SET_NEWTODO";
export const SET_TODOS = "SET_TODOS";
export const RESET = "RESET";

export type ActionTypes =
  | { type: typeof ADD_TODO }
  | { type: typeof DELETE_TODO; payload: number }
  | { type: typeof UPDATE_TODO; payload: { id: number; text: string } }
  | { type: typeof TOGGLE_TODO; payload: number }
  | { type: typeof SET_NEWTODO; payload: string }
  | { type: typeof SET_TODOS; payload: ToDo[] }
  | {type: typeof RESET}

export const setNewToDos = (todos: ToDo[]): ActionTypes => ({
  type: SET_TODOS,
  payload: todos,
});
export const setNewToDo = (text: string): ActionTypes => ({
  type: SET_NEWTODO,
  payload: text,
});
export const toggleTodo = (id: number): ActionTypes => ({
  type: TOGGLE_TODO,
  payload: id,
});
export const updateToDo = (id: number, text: string): ActionTypes => ({
  type: UPDATE_TODO,
  payload: {
    id,
    text,
  },
});
export const deleteToDo = (id: number): ActionTypes => ({
  type: DELETE_TODO,
  payload: id,
});
export const addTodo = (): ActionTypes => ({
  type: ADD_TODO,
});
export const reset = (): ActionTypes => ({
  type: RESET
})