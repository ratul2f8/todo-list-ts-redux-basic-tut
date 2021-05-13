import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import toDoReducer from "./ToDo/reducer";

const persistConfig = {
    key: 'hello-world',
    storage,
    whitelist: ['toDoReducer'],
    blacklist: []
}

const rootReducer = combineReducers({
    toDoReducer: toDoReducer
})

export type TRootState = ReturnType<typeof rootReducer>;
export default persistReducer(persistConfig, rootReducer);
