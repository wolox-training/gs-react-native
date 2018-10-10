import { createStore, applyMiddleware, combineReducers } from "redux";

import thunk from "redux-thunk";
import { reducer as formReducer } from "redux-form";

import item from "./item/reducer";

const reducers = {
  form: formReducer,
  item
};
const reducer = combineReducers(reducers);
const middleware = [thunk];

export default createStore(reducer, applyMiddleware(...middleware));
