import { combineReducers } from "redux";
import { DApp } from "./app.reducers";

const reducers = combineReducers({
    dapp: DApp
})

export default reducers;
