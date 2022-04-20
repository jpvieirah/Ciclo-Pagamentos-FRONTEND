import React from "react";
import  ReactDOM  from "react-dom";
import { applyMiddleware, createStore } from "redux";
import reducers from "./main/reducers"
import App from "./main/app";
import { Provider } from "react-redux";
import promise from "redux-promise";
import multi from 'redux-multi'
import thunk from 'redux-thunk'

const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers)
ReactDOM.render(
    <Provider store={store}>
<App />
    </Provider>
, document.getElementById('app'))