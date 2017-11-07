import React from "react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers';
import { addTodo } from './actions';
import { App } from "./components/app";

import "./index.css";

// let preloadedState = {
// };

let store = createStore(todoApp, /* preloadedState, */
                        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// let unsubscribe = store.subscribe(()=>{
//     console.log(store.getState());
// });

store.dispatch(addTodo("hello"));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

// window.onunload = () => {
//     unsubscribe();
// }

