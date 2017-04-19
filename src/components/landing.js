import React, { Component } from "react";
import Finished from './navbar';
import Home from './home';
import WhoWeAre from './about';
import TimeLine from './timeline';
import Index from './indexExplanation'

var Landing = React.createClass({ 
	render: function(){
		return (
			<div className = "landing">
			<Finished />
			<Home />
			<WhoWeAre title = "WHAT WE DO" description = "Jalapen.io is a venture that implements Blockchain technology to decentralize the agricultural sector. With case-specific smart contracts, well suited for farmers and vendors alike, we leverage Blockchain to increase transparency at the root level, so that you can stay assured of the quality and origin of the food you are eating. This paradigm shift – whereby trust is transferred to technology – is the future of the agricultural industry. We are an enterprise that provides this technology based on real-time data collection, scalability, and security."/>
			<Index title = "INDEX" description = "Our revolutionary index provides for an objective evaluation of crop quality. Currently, “farmers” are funded by “vendors” based on the subjective opinions of “buyers” about which farmers produce good crops or not. This hand-wavey system that is currently in place introduces a lot of unpredictability in the farmer’s income and uncertainty in the agricultural sector in general. The index takes various parameters that influence crop quality into account, such as water retention, nutrients in the soil etc. and provides the vendors with a score out of 10 on the basis of which they can decide whether they wish to fund the farmers or not. The expected crop index is laid out at the time of formation of the smart contract, and farmers would not receive their full stipulated income unless they adhere to this expectation. " />
			<TimeLine />
			</div>
		);
	}
})

export default Landing;