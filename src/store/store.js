import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import prodReducer from "../reducers/prodReducers";

const store = createStore(prodReducer, applyMiddleware(thunk));

export default store;