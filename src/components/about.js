import React from 'react';

var WhoWeAre = React.createClass({
	render: function() {
		var description = this.props.description;
		var title = this.props.title;
		return(
			<div className = "aboutContainer" >
				<AboutTitle text = {title}/>
				<AboutDescription text = {description} />
			</div>
		);
	}
})

var AboutTitle = React.createClass({
	render: function() {
		var text = this.props.text;
		return (
			<div className = "aboutTitle">
				{text}
			</div>
		);
	}
})

var AboutDescription = React.createClass({
	render: function(){
		var text = this.props.text;
		return(
			<div className = "aboutDescription"> 
				{text}
			</div>
		);
}
})

export default WhoWeAre;