import React from 'react';

var TimeLine = React.createClass({
	render: function() {
		return(
			<div className = "timeLine">
				<div className = "processTitle"> PROCESS </div>
				<div id = "spineContainer">
					<div id = "spine"> </div>
					<Button url = "../../public/img/initiate.png" text = "Initiate" explanation = "Farmer initiates smart contract with expected index. " />
					<Button url = "../../public/img/deployment.png" text = "Deployment"/>
					<Button url = "../../public/img/produce.png" text = "Produce"/>
					<Button url = "../../public/img/delivery.png" text = "Delivery"/>
					<Button url = "../../public/img/verification.png" text = "Verification"/>
				</div>
			</div>
		);
	}
})


class Button extends React.Component {
	constructor(props) {
		super(props);
		this.state = {isHover: false }; 
	}
	render(){
		return(
		<div className = "buttonContainer">
			<div className = "button"> 
				<img className = "buttonImage" src = {this.props.url}/>
			</div>
			<div className = "buttonText"> {this.props.text} </div> 
			<div className = "buttonExplanation"> {this.props.explanation} </div>
		</div>
		);
	}
}
export default TimeLine;