import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import todoApp from './reducers';

import { App } from "./components/app"

import "./index.css";

let store = createStore(todoApp);
let unsubscribe = store.subscribe(()=>{
    console.log(store.getState());
});


ReactDOM.render(
    <App />,
    document.getElementById("root")
);

window.onunload = () => {
    unsubscribe();
}

