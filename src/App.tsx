import * as React from "react";
import { Provider } from "react-redux";
import { ChakraProvider, Box, theme, Heading } from "@chakra-ui/react";
import { PersistGate } from "redux-persist/integration/react";
import TopBar from "./components/TopBar";
import TodoList from "./components/TodoList";
import TodoAdd from "./components/TodoAdd";
import { store, persistor } from "./redux/store";

export function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ChakraProvider theme={theme}>
          <Box maxWidth="8xl" margin="auto" p={5}>
            <TopBar />
            <Heading mb="20px" mt="30px">
              Todo List
            </Heading>
            <TodoAdd />
            <TodoList />
          </Box>
        </ChakraProvider>
      </PersistGate>
    </Provider>
  );
}
