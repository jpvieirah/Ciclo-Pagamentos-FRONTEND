import React from "react";
import  ReactDOM  from "react-dom";
import { createStore } from "redux";
import reducers from "./main/reducers"
import App from "./main/app";
import { Provider } from "react-redux";

const store = createStore(reducers)
ReactDOM.render(
    <Provider store={store}>
<App />
    </Provider>
, document.getElementById('app'))