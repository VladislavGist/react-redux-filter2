import ReactDOM from "react-dom";
import React from "react";
import {Router, Route, hashHistory} from "react-router";

//components
import Track from "./components/Track.jsx";
import About from "./components/About.jsx";
import Component from "./components/Component.jsx";
import App from "./App.jsx";

//redux
import {Provider} from "react-redux";
import {createStore, applyMiddleware} from "redux";
import combReducers from "./reducers/index.jsx"
//добавляет devtools ко всему что мы ему передадим
import {composeWithDevTools} from "redux-devtools-extension";
//thunk нужна чтобы писать async action's
import thunk from "redux-thunk"
import {syncHistoryWithStore} from "react-router-redux";

let store = createStore(combReducers, composeWithDevTools(applyMiddleware(thunk))),
	history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<Route path="/component" component={Component} />
			</Route>
			<Route path="/about" component={About}></Route>
			<Route path="/track/:id" component={Track} />
		</Router>
	</Provider>,
	document.getElementById("app")
);