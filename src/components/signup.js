import React, { Component } from "react";

var ButtonContainer = React.createClass({
	render: function(){
		return(
			<Button/>
		);
	}
});

var Button = React.createClass({
	render: function(){
		return(
			<div>
				<div className = "signup-button"> REGISTER FOR BETA </div>
			</div>
		);
	}
});

export default ButtonContainer;