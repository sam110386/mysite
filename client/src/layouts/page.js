import React, { Component } from 'react';
import HomeSlider from './../elements/home-slider';

import Home from './../pages/home';
import About from './../pages/about';
class Page extends Component {
	state = {
		page: this.props.page
	};

	componentWillReceiveProps (nextProps) {
		this.setState({ page: nextProps.page });  
	}

	getPage = ()=> {
		if(this.state.page === 'home'){
			return (
				<div>
				<HomeSlider />
				<Home />
				</div>
			);
		}else if(this.state.page === 'about'){
			return(
				<div>
				<About/>
				</div>
			);
		}else{
			return(
				<h1>{this.state.page}</h1>
			);
		}
	}

	render(){
		return(this.getPage());
	}
}

export default Page;