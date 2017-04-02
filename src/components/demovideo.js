import React, { Component } from "react";

var VidContainer = React.createClass({
	render: function(){
		return(
			<Video/>
		);
	}
})

var Video = React.createClass({
	render: function(){
		return(
			<div className = "video"> 
				<iframe class="videoFrame" src="http://www.youtube.com/embed/UGLzBQ1eGXk" frameborder="0" allowfullscreen>
				</iframe>
			</div>
		);
	}
})

export default VidContainer;