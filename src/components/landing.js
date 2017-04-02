import React from 'react';
import Home from './app';
import Finished from './navbar';
import TeamPage from './team';
import VidContainer from './demovideo';

var Landing = React.createClass({
	render: function() {
		return (
			<div>
			<Finished />
			<Home />
			<VidContainer />
			<TeamPage />
			</div>
		);
	}
})

export default Landing;