import React, { Component } from "react";
import Finished from './navbar';

var Home = React.createClass({
	render:function() {
		return (
			<div>
				<Title text = "Jalapen.io" />
				<TagLine />
				<Background />
			</div>
		);
	}
})

var Title = React.createClass({
	render: function() {
		var titleText = this.props.text;
		return (
			<div className = "title">
				{titleText}
			</div>
		)
	}
})

var TagLine = React.createClass({
	render: function(){
		return (
			<div className = "tagline">
				A smart contract between farmers and vendors on the blockchain.
			</div>
		)
	}
})

var Background = React.createClass({
	render: function(){
		return(
			<div className = "bg-container">
				<img src = "../../public/img/bg.jpg" className = "bg-image"/>
			</div>
		)
	}
})

export default Home;