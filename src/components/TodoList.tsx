import { Button, Checkbox, Flex, Input } from "@chakra-ui/react";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteToDo, toggleTodo, updateToDo } from "../redux/ToDo/actions";
import { selectToDos } from "../redux/ToDo/selectors";
import { ToDo } from "../redux/ToDo/types";

function TodoListItems() {
  const todos = useSelector(selectToDos);
  const dispatch = useDispatch();
  return (
    <>
      {todos.map((todo: ToDo) => (
        <Flex pt={2} key={todo.id}>
          <Checkbox
            onChange={() => dispatch(toggleTodo(todo.id))}
            isChecked={todo.done}
          />
          <Input
            mx={2}
            value={todo.text}
            onChange={(event) =>
              dispatch(updateToDo(todo.id, event.target.value))
            }
          />
          <Button onClick={() => dispatch(deleteToDo(todo.id))}>Delete</Button>
        </Flex>
      ))}
    </>
  );
}

function TodoList() {
  return (
    <div style={{ marginTop: "15px" }}>
      <TodoListItems />
    </div>
  );
}

export default TodoList;
