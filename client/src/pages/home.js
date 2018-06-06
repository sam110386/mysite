import React,{Component} from 'react';
var loadjs = require('loadjs');
export default class Home extends Component{
	componentWillReceiveProps (nextProps) {
		loadjs('/assets/js/page-scripts.js');
		this.setState({ page: nextProps.page });  
	}	
	render(){
		return(
			<div className="main">
				<div className="container">
					<div className="row service-box margin-bottom-40">
						<div className="col-md-4 col-sm-4">
							<div className="service-box-heading">
								<em><i className="fa fa-cog blue"></i></em>
								<span>Web Development</span>
							</div>
							<ul>
								<li>Web Application</li>
								<li>Web Services</li>
								<li>Website Management</li>
								<li>E-Commerce Solutions</li>
							</ul>
						</div>
						<div className="col-md-4 col-sm-4">
							<div className="service-box-heading">
								<em><i className="fa fa-mobile red"></i></em>
								<span>Mobile App Development</span>
							</div>
							<ul>
								<li>Android Application Development</li>
								<li>iPhone Application Development</li>
								<li>iPAD Application Development</li>
								<li>iOS/Mac Application Development</li>
							</ul>
						</div>
						<div className="col-md-4 col-sm-4">
							<div className="service-box-heading">
								<em><i className="fa fa-desktop green"></i></em>
								<span>Creative Design</span>
							</div>
							<ul>
								<li>Web Designs</li>
								<li>Mobile App Designs</li>
								<li>Graphics Designs</li>
								<li>Info Graphics‎</li>
							</ul>
						</div>
					</div>
					<div className="row margin-bottom-30 expertise">
						<div className="col-md-12">
							<span>Semantic Global Services is one of the business solution IT Industry head-quartered in India which provides world class IT solution to clients. We are leading Software development industry and always offering innovative, contemporary and cost-effective technology solutions</span>
						</div>
					</div>
					<div className="row recent-work margin-bottom-40">
						<div className="col-md-3">
							<h2><a href="portfolio.html">Our Recent Works</a></h2>
							<p>Take a moment to view some of our latest work. While most of the sites were built by us from the ground up, we experience a wide range of involvement with our client’s websites. We do everything from web design, web development, consulting, maintenance, graphics, and everything in between!</p>
						</div>
						<div className="col-md-9">
							<div className="owl-carousel owl-carousel3">
								<div className="recent-work-item">
									<em>
										<img src="assets/img/works/img1.jpg" alt="Green Technology Systems" className="img-responsive"/>
										<a href="http://greentechnologysystems.com/"><i className="fa fa-link"></i></a>
										<a href="assets/img/works/img1.jpg" className="fancybox-button" title="Green Technology Systems" data-rel="fancybox-button"><i className="fa fa-search"></i></a>
									</em>
									<a className="recent-work-description" href="javascript:;">
										<strong>Green Technology Systems</strong>
										<b>Green Tech.</b>
									</a>
								</div>
								<div className="recent-work-item">
									<em>
										<img src="assets/img/works/img2.jpg" alt="EZ Ride" className="img-responsive"/>
										<a href="http://www.mindseyeapp.com/"><i className="fa fa-link"></i></a>
										<a href="assets/img/works/img2.jpg" className="fancybox-button" title="EZ Ride" data-rel="fancybox-button"><i className="fa fa-search"></i></a>
									</em>
									<a className="recent-work-description" href="javascript:;">
										<strong>EZ Ride</strong>
										<b>Mindseye Invo.</b>
									</a>
								</div>
								<div className="recent-work-item">
									<em>
										<img src="assets/img/works/img4.jpg" alt="Matrassen" className="img-responsive"/>
										<a href="http://www.matrassen.nl/"><i className="fa fa-link"></i></a>
										<a href="assets/img/works/img4.jpg" className="fancybox-button" title="Matrassen.nl" data-rel="fancybox-button"><i className="fa fa-search"></i></a>
									</em>
									<a className="recent-work-description" href="javascript:;">
										<strong>Matrassen.nl</strong>
										<b>Matrassen.nl</b>
									</a>
								</div>
								<div className="recent-work-item">
									<em>
										<img src="assets/img/works/img1.jpg" alt="Green Technology Systems" className="img-responsive"/>
										<a href="http://greentechnologysystems.com/"><i className="fa fa-link"></i></a>
										<a href="assets/img/works/img1.jpg" className="fancybox-button" title="Green Technology Systems" data-rel="fancybox-button"><i className="fa fa-search"></i></a>
									</em>
									<a className="recent-work-description" href="javascript:;">
										<strong>Green Technology Systems</strong>
										<b>Green Tech.</b>
									</a>
								</div>
								<div className="recent-work-item">
									<em>
										<img src="assets/img/works/img2.jpg" alt="EZ Ride" className="img-responsive"/>
										<a href="http://www.mindseyeapp.com/"><i className="fa fa-link"></i></a>
										<a href="assets/img/works/img2.jpg" className="fancybox-button" title="EZ Ride" data-rel="fancybox-button"><i className="fa fa-search"></i></a>
									</em>
									<a className="recent-work-description" href="javascript:;">
										<strong>EZ Ride</strong>
										<b>Mindseye Invo.</b>
									</a>
								</div>
								<div className="recent-work-item">
									<em>
										<img src="assets/img/works/img4.jpg" alt="Matrassen" className="img-responsive"/>
										<a href="http://www.matrassen.nl/"><i className="fa fa-link"></i></a>
										<a href="assets/img/works/img4.jpg" className="fancybox-button" title="Matrassen.nl" data-rel="fancybox-button"><i className="fa fa-search"></i></a>
									</em>
									<a className="recent-work-description" href="javascript:;">
										<strong>Matrassen.nl</strong>
										<b>Matrassen.nl</b>
									</a>
								</div>								
							</div>
						</div>
					</div>
				</div>
			</div>		
		);
	}
}