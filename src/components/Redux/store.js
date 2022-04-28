import { legacy_createStore as createStore} from "redux";

import { todoReducer } from "./reducer";

const init ={todos: []};
export const store = createStore(todoReducer, init);
