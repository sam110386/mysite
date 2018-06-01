import React, { Component } from 'react';

class Header extends Component {
	state ={
		currentPage: this.props.currentPage
	};
	setNav = (value) =>{
		var stateObj = {currentPage: value}
		this.setState(stateObj);
		this.props.setCurrentPage(stateObj);
	}
	render(){
		return(
			<div>
				<div className="pre-header">
					<div className="container">
						<div className="row">
							<div className="col-md-6 col-sm-6 additional-shop-info">
								<ul className="list-unstyled list-inline">
									<li><i className="fa fa-phone"></i><span>+91 9478518430</span></li>
									<li><i className="fa fa-envelope-o"></i><span>sales@semanticglobal.com</span></li>
								</ul>
							</div>
							<div className="col-md-6 col-sm-6 additional-nav">
								<ul className="list-unstyled list-inline pull-right">
									<li><a href="javascript:;"><i className="fa fa-facebook"></i></a></li>              
									<li><a href="javascript:;"><i className="fa fa-linkedin"></i></a></li>
									<li><a href="javascript:;"><i className="fa fa-twitter"></i></a></li>
									<li><a href="javascript:;"><i className="fa fa-skype"></i></a></li>
								</ul>
							</div>
						</div>
					</div>        
				</div>
				<div className="header">
				  <div className="container">
						<a className="site-logo" href="">
							<img className="bigimg" src="assets/img/logos/final-logo-approved-v3-final.png" alt="Semantic Global Services" />
							<img className="smallimg" src="assets/img/logos/logo-small.png" alt="Semantic Global Services" />
						</a>
						<a href="javascript:void(0);" className="mobi-toggler"><i className="fa fa-bars"></i></a>
						<div className="header-navigation pull-right">
							<ul>
								<li><a href="javascript:;" className={(this.state.currentPage === 'home') ? 'active' : '' } onClick={this.setNav.bind(this,"home")}>Home </a></li>
								<li><a href="javascript:;" className={(this.state.currentPage === 'about') ? 'active' : '' } onClick={this.setNav.bind(this,"about")}>About Us</a></li>
								<li><a href="javascript:;" className={(this.state.currentPage === 'services') ? 'active' : '' } onClick={this.setNav.bind(this,"services")}>Services</a></li>
								<li><a href="javascript:;" className={(this.state.currentPage === 'portfolio') ? 'active' : '' } onClick={this.setNav.bind(this,"portfolio")}>Portfolio</a></li>
								<li><a href="javascript:;" className={(this.state.currentPage === 'career') ? 'active' : '' } onClick={this.setNav.bind(this,"career")}>Career</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Header;