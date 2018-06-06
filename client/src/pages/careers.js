import React, { Component } from 'react';
var loadjs = require('loadjs');
export default class Careers extends Component {
	componentWillReceiveProps (nextProps) {
		loadjs('/assets/js/page-scripts.js');
		this.setState({ page: nextProps.page });  
	}	
	render(){
		return(
			<div className="main">
				<div className="container">
					<div className="row margin-bottom-40">
						<div className="col-md-9 col-sm-9">
							<h1>Careers</h1>
							<div className="content-page">
								<div className="front-carousel margin-bottom-20">
									<div id="myCarousel" className="carousel slide">
										<div className="carousel-inner">
											<div className="item active">
												<img src="assets/img/careers/careers.jpg" alt="" />
											</div>
											<div className="item">
												<img src="assets/img/careers/careers.jpg" alt=""/>
											</div>
										</div>
										<a className="carousel-control left" href="#myCarousel" data-slide="prev">
											<i className="fa fa-angle-left"></i>
										</a>
										<a className="carousel-control right" href="#myCarousel" data-slide="next">
											<i className="fa fa-angle-right"></i>
										</a>
									</div>                
								</div>
								<h2>Vero eos et accusamus</h2>
								<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.</p> 
								<div className="row front-lists-v1">
									<div className="col-md-6">
										<ul className="list-unstyled margin-bottom-20">
											<li><i className="fa fa-check"></i> Officia deserunt molliti</li>
											<li><i className="fa fa-check"></i> Consectetur adipiscing </li>
											<li><i className="fa fa-check"></i> Deserunt fpicia</li>
										</ul>
									</div>
									<div className="col-md-6">
										<ul className="list-unstyled">
											<li><i className="fa fa-check"></i> Officia deserunt molliti</li>
											<li><i className="fa fa-check"></i> Consectetur adipiscing </li>
											<li><i className="fa fa-check"></i> Deserunt fpicia</li>
										</ul>
									</div>
								</div>
								<h2>Our positions</h2>
							</div>
						</div>
						<div className="col-md-3 col-sm-3 sidebar2">
							<h2 className="padding-top-30">Our Contacts</h2>
							<address>
								<strong>Loop, Inc.</strong><br />
								#1304 Sector 125<br/>
								Mohali, Punjab IN<br/>
								<abbr title="Phone">P:</abbr> (+91) 9478518430
							</address>
							<address>
								<strong>Email</strong><br/>
								<a href="mailto:sales@semanticglobal.com">sales@semanticglobal.com</a><br/>
								<strong>Email</strong><br/>
								<a href="skype:semanticglobal">semanticglobal</a><br/>
							</address>
						</div>
					</div>
				</div>

			</div>
		)
	}
}