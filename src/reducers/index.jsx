//redux
import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";

import firstReducer from "./tracks.jsx";
import secondReducer from "./playlist.jsx";
import filterTracks from "./findFilterTracks.jsx";

export default combineReducers({
	routing: routerReducer,
	firstReducer,
	secondReducer,
	filterTracks
});