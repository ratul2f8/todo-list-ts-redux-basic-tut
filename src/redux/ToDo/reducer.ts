import { addTodo, deleteToDo, toggleTodo, updateTodo } from "./utils";
import { IToDoStore } from "./types";
import { ActionTypes, ADD_TODO, DELETE_TODO, RESET, SET_NEWTODO, SET_TODOS, TOGGLE_TODO, UPDATE_TODO } from "./actions";

const initialState:IToDoStore = {
    todos: [],
    newTodo: ""
}

const toDoReducer = (state: IToDoStore = initialState, action: ActionTypes ):IToDoStore => {
    switch(action.type){
        case SET_TODOS:
            return {
                ...state,
                todos: action.payload
            }
        case SET_NEWTODO:
            return{
                ...state,
                newTodo: action.payload
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: deleteToDo(state.todos, action.payload)
            }
        case TOGGLE_TODO:
            return{
                ...state,
                todos: toggleTodo(state.todos, action.payload)
            }
        case UPDATE_TODO:
            return {
                ...state,
                todos: updateTodo(state.todos, action.payload.id, action.payload.text)
            }
        case ADD_TODO:
            return {
                ...state,
                todos: addTodo(state.todos, state.newTodo),
                newTodo: ""
            }
        case RESET:
            return initialState                           
        default:
            return state;
    }
}
export default toDoReducer;

