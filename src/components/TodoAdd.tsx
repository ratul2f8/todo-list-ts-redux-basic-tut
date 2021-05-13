import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { selectNewToDo } from "../redux/ToDo/selectors";
import { setNewToDo, addTodo } from "../redux/ToDo/actions";

function TodoAdd() {
  const newToDo = useSelector(selectNewToDo);
  const dispatch = useDispatch();
  return (
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        placeholder="New todo"
        value={newToDo}
        onChange={(event) => dispatch(setNewToDo(event.target.value))}
      />
      <Button onClick={() => dispatch(addTodo())}>Add Todo</Button>
    </Grid>
  );
}

export default TodoAdd;
