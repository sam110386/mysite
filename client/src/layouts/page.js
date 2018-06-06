import React, { Component } from 'react';
import HomeSlider from './../elements/home-slider';


import Home from './../pages/home';
import About from './../pages/about';
import Services from './../pages/services';
import Careers from './../pages/careers';
import Portfolio from './../pages/portfolio';

var loadjs = require('loadjs');

class Page extends Component {
	state = {
		page: this.props.page
	};
	componentWillReceiveProps (nextProps) {
		loadjs('/assets/js/page-scripts.js');
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
			}else if(this.state.page === 'services'){
				return(
				<div>
				<Services/>
				</div>
				);
			}else if(this.state.page === 'portfolio'){
				return(
				<div>
				<Portfolio/>
				</div>
				);				
			}else if(this.state.page === 'career'){
				return(
				<div>
				<Careers/>
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