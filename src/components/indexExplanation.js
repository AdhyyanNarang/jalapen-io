import React from 'react';

var Index = React.createClass({
	render: function() {
		var description = this.props.description;
		var title = this.props.title;
		return(
			<div className = "indexContainer" >
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
			<div className = "indexTitle">
				{text}
			</div>
		);
	}
})

var AboutDescription = React.createClass({
	render: function(){
		var text = this.props.text;
		return(
			<div className = "indexDescription"> 
				{text}
			</div>
		);
}
})

export default Index;