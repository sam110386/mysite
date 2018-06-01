import React, { Component } from 'react';

class Footer extends Component {
	state ={
		currentNave: this.props.currentNave
	};
	setNav = (value) =>{
		var stateObj = {currentNave: value}
		this.setState(stateObj);
		this.props.setNav(stateObj);
	}
	render(){
		return(
			<div>
				<div className="pre-footer">
					<div className="container">
						<div className="row">
							<div className="col-md-4 col-sm-6 pre-footer-col">
								<h2>Site Map</h2>
								<ul className="list-item">
									<li><a href="<?php echo $this->Html->url('/', true); ?>">Home </a></li>
									<li><a href="<?php echo $this->Html->url('/aboutus', true); ?>">About Us</a></li>
									<li><a href="<?php echo $this->Html->url('/services', true); ?>">Services</a></li>
									<li><a href="<?php echo $this->Html->url('/portfolio', true); ?>">Portfolio</a></li>
									<li ><a  href="<?php echo $this->Html->url('/career', true); ?>">Career</a></li>
								</ul>
							</div>
							<div className="col-md-4 col-sm-6 pre-footer-col">
								<h2 className="margin-bottom-0">Our Services</h2>
								<ul className="list-item">
									<li><a href="javascript:;">Web Development</a></li>
									<li><a href="javascript:;">Mobile App Development</a></li>
									<li><a href="javascript:;">Creative Digital Designs</a></li>
									<li><a href="javascript:;">E-Commerce Solutions</a></li>
									<li><a href="javascript:;">Web Services</a></li>
									<li><a href="javascript:;">CMS Development</a></li>
								</ul>
							</div>
							<div className="col-md-4 col-sm-6 pre-footer-col">
								<h2>Our Contacts</h2>
								<address className="margin-bottom-40">
									#1304 Sector 125<br/>
									Mohali, Punjab IN<br/>
									Phone: 9478518430<br/>              
									Email: <a href="mailto:sales@semanticglobal.com">sales@semanticglobal.com</a><br/>
									Skype: <a href="skype:semanticglobal">semanticglobal</a>
								</address>
							</div>
						</div>
					</div>
				</div>
				<div className="footer">
				  <div className="container">
					<div className="row">
					  <div className="col-md-6 col-sm-6 padding-top-10">
						2018 © Semantic Global Services. ALL Rights Reserved. 
					  </div>
					  <div className="col-md-6 col-sm-6">
						<ul className="social-footer list-unstyled list-inline pull-right">
						  <li><a href="javascript:;"><i className="fa fa-facebook"></i></a></li>              
						  <li><a href="javascript:;"><i className="fa fa-linkedin"></i></a></li>
						  <li><a href="javascript:;"><i className="fa fa-twitter"></i></a></li>
						  <li><a href="javascript:;"><i className="fa fa-skype"></i></a></li>              
						</ul>  
					  </div>
					</div>
				  </div>
				</div>
			</div>
		)
	}
}

export default Footer;