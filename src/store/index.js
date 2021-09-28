import { combineReducers, createStore } from "redux";
import FruitsReducer from "./modules/fruits/reducer";

const reducer = combineReducers({ Fruit: FruitsReducer });

const store = createStore(reducer);

export default store;
