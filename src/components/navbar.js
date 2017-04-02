import React, { Component } from "react";

var Finished = React.createClass({
	render:function() {
			var listOfNavItems = 
			[
			 {
			  "text": "Home",
			  "url": "../../index.html"
			 },
			 {
			  "text": "About",
			  "url": "../../index.html"
			 }
			]
		return (
			<div className = "NavWrapper">
			<div> <img src = "../../public/img/logo.jpg" className= "Navlogo"/> </div>
			<NavBar items={listOfNavItems} />
			</div>
		);
	}
})

var NavBarLink = React.createClass({
	render:function(){
		return (
			<a href = {this.props.url}> {this.props.text} </a>
		);
	}
})

var NavBarItem = React.createClass({
	generateLink: function(){
		return <NavBarLink url = {this.props.url} text = {this.props.text} />;
	},
	generateSubmenu: function(){
		return <NavBar items={this.props.submenu} />
	},
	generateContent: function(){
		var content = [this.generateLink()]
		if (this.props.submenu) {
			content.push(this.generateSubmenu());
		}
		return content;
	},
	render: function() {
		var content = this.generateContent();
		return (
			<li> 
				{content}
			</li>
		)
	}
})


var NavBar = React.createClass({
  generateItem: function(item){
    return <NavBarItem text={item.text} url={item.url} submenu={item.submenu} />
  },
  render: function() {
    var items = this.props.items.map(this.generateItem);
    return (
      <ul className="menu">
      {items}
      </ul>
    );
  }
})



export default Finished;