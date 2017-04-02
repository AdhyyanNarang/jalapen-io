import React, { Component } from "react";
import ButtonContainer from './signup';


class Home extends Component {
	render() {
		return (
			<div>
			<ShowCase />
			<ButtonContainer />
			<Image />
			</div>
		)
	}
}


/* SHOWCASE COMPONENTS */


class Image extends Component {
	render() {
		return(
			<div className = "showiphone">
				<img  src= "../../public/img/iPhone.png" className ="iphone" />
			</div>
		);
	}
}

class ShowCase extends Component {
  render() {
    return (
      <div className = "showcase">
      	<div className = "text">
      	<Title name = "HOWL" />
      	<TagLine tag = "The social media app that connects you with people in your location." />
      	</div>
      </div>
    );
  }
}

var Title = React.createClass({
	render() {
		var name = this.props.name;
		return (
			<div className = "title"> 
			{name}
			</div>
		);
	}
});

class TagLine extends Component {
	render() {
		var tag = this.props.tag;
		return (
			<div className = "tagline">
			{tag}
			</div>
		);
	}
}


/*IDENTITIY COMPONENTS */
class Identity extends Component {
	render() {
		var problem = "Current social Media Applications do a great job of helping the user meet new people. However, our team at Howl Believes that they lack the ability to help the users meet new people.";
		var solution = "By helping people in the same location connect with each other based on similar interests, or utility, our app solves many problems.";
		var lightPath = "../public/img/light-bulb.png";
		var wrongPath = "../public/img/cross.png"; 

		return (
			<div className = "Identity">
			<Facet heading = "The Problem" imagePath = {wrongPath} content = {problem} />
			<Facet heading = "The Solution" imagePath = {lightPath} content = {solution} />	
			</div>
		);
	}
}


class Facet extends Component {
	render() {
	var heading = this.props.heading;
	var imagePath = this.props.imagePath;
	var content = this.props.content;

	return(
		<div className = "card">
		<div> <img className = "icon" src = {imagePath} />  </div>
		<div className = "head"> {heading} </div>
		<div className = "content"> {content} </div>
		</div>
	);
	}
}

export default Home;