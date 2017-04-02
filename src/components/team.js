import React, { Component } from "react";

var TeamPage = React.createClass({
	render(){
		return(
	<div className = "teamBox">
		<Title title = "Our Team" />
		<div className = "allMembers">
			<Card path = "../../public/img/will.jpg" name = "Will Park" position= "Founder" />
			<Card path = "../../public/img/adhyyan.jpg" name = "Adhyyan Narang" position= "Web and iOS Developer" />
			<Card path = "../../public/img/nihar.jpg" name = "Nihar Dalal" position= "Backend Developer" />
		</div>
	</div>
	);
	}
})

var Title = React.createClass({
	render: function(){
		var teamTitle = this.props.title;
		return(
		<div className = "teamTitle"> {teamTitle} </div>
		);
	}
})

var Card = React.createClass({
	render: function(){
	var imagePath = this.props.path;
	var name = this.props.name;
	var position = this.props.position;
	return(
		<div className = "member">
			<div > 
				<img src = {imagePath} className = "headshot"/>
			</div>

			<div class="dark"> 
				<div className="details"> {name} </div> 
				<div className = "details"> {position} </div>
			</div>
 		</div>
	);
	}
})

export default TeamPage;