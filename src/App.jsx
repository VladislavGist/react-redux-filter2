import React, {Component} from "react";
import {Link} from "react-router";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import "./styles/styles.sass";
import "./styles/base.sass";
import "./App.sass";

//redux
import {connect} from "react-redux";

//actions
import {asycnGetTracks} from "./actions/tracks.jsx";

//components
import Menu from "./components/Menu.jsx";

class App extends Component {

	searchTrack = () => {
		this.props.onFindTrack(this.refs.searchTrack.value);
		this.refs.searchTrack.value = "";
	}

	addTrack = () => {
		this.props.onAddTrack(this.refs.addTrackInput.value);
		this.refs.addTrackInput.value = "";
	}

	removeTrack = () => {
		this.props.onRemoveTrack(this.refs.removeTrackInput.value);
		this.refs.removeTrackInput.value = "";
	}

	render() {
		return (
			<MuiThemeProvider>
				<div className="container">
					<Menu />
					<div>
						<input type="text" ref="searchTrack" />
						<button onClick={this.searchTrack}>Search track</button>
					</div>
					<div>
						<input type="text" ref="addTrackInput" />
						<button onClick={this.addTrack}>Add track</button>
					</div>
					<div>
						<input type="text" ref="removeTrackInput" />
						<button onClick={this.removeTrack}>Remove track</button>
					</div>
					<div>
						<button onClick={this.props.onGetTracks}>Get tracks</button>
					</div>
					<ul>
						{
							this.props.state.map((elem, idx) => {
								return (
									<li key={idx}>
										<Link to={`/track/${elem.id}`}>{elem.name}</Link>
									</li>
								);	
							})
						}
					</ul>
					{this.props.children}
				</div>
			</MuiThemeProvider>
		);
	}
}
//Если компонент хочет получать обновления состояния, или dispatche's он оборачивает себя в connect()
//state, dispatch
//state - получаем главный state, по желанию можем его изменить. он будет доступен в this.props.x
//dispatch - все методы в dispatch будут доступны в this.props.x
export default connect((state, ownProps) => 
	({
		state: state.firstReducer.filter(track => track.name.includes(state.filterTracks)),
		ownProps
	}), 
	dispatch => ({
		onAddTrack: trackName => {
			const payload = {
				id: Date.now(),
				name: trackName
			};

			dispatch({type: "ADD_TRACK", payload})
		},
		onRemoveTrack: trackName => {
			dispatch({type: "REMOVE_TRACK", payload: trackName})
		},
		onFindTrack: name => {
			dispatch({type: "FIND_TRACK", payload: name})
		},
		onGetTracks: () => {
			dispatch(asycnGetTracks());
		}
	}))(App);