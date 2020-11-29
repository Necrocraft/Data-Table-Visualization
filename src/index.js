import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { combineReducers, createStore, applyMiddleware } from "redux";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {TableReducer} from "./reducers/table-reducer";

class Screen extends Component {
	render() {
		return (
			<Provider store={store}>
				<App />
			</Provider>
		);
	}
}

const reducers = combineReducers({
  table_store: TableReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));


ReactDOM.render(
  <React.StrictMode>
    <Screen />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
