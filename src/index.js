import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import { todoApp } from './reducers';

import { App } from "./components/app"

import { addTodo } from './actions'

import "./index.css";

let store = createStore(todoApp);
store.dispatch(addTodo('Pierwsze zadanie'));
console.log(store.getState());

ReactDOM.render(
    <App />,
    document.getElementById("root")
);

