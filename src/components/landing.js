import React from 'react';
import Home from './app';
import Finished from './navbar';

var Landing = React.createClass({
	render: function() {
		return (
			<div>
			<Finished />
			<Home />
			</div>
		);
	}
})

export default Landing;