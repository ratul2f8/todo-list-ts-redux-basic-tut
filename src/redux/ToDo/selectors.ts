import  {TRootState} from "../rootReducer";

export const selectNewToDo = ({toDoReducer}: TRootState) => toDoReducer.newTodo;
export const selectToDos = ({ toDoReducer }: TRootState) => toDoReducer.todos;