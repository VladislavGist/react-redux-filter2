import React, {Component} from "react";
import Menu from "./Menu.jsx";
import {Link} from "react-router";

//redux
import {connect} from "react-redux";

class Track extends Component {
	constructor(track) {
		super();
		this.track = track;
	}

	render() {
		return (
			<div className="container">
				<Menu />
				<p>{this.track.track.name}</p>
			</div>
		);
	}
}

let mapStateToProps = (state, ownProps) => {
	return {
		track: state.firstReducer.find(track => track.id === Number(ownProps.params.id))
	}
};

export default connect(mapStateToProps)(Track);