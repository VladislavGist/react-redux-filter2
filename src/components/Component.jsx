import React from "react";
import Slider from "react-slick";

import "../styles/styles.sass";
import "./Component.sass";

let Component = React.createClass({
	render() {
		let settings = {
	      dots: true,
	      infinite: false,
	      speed: 500,
	      slidesToShow: 3,
	      slidesToScroll: 2,
	      vertical: false
	    };

	    return (
	      <Slider {...settings}>
	        <div><h3>1</h3></div>
	        <div><h3>2</h3></div>
	        <div><h3>3</h3></div>
	        <div><h3>4</h3></div>
	        <div><h3>5</h3></div>
	        <div><h3>6</h3></div>
	      </Slider>
	    );
	}
});

export default Component;