import React,{Component} from 'react';

export default class Home extends Component{
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
								<li>Info Graphics&lrm;</li>
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
							<div className="owl-carousel owl-carousel3 owl-theme" style={{opacity: 1, display: "block"}}>
								<div className="owl-wrapper-outer">
									<div className="owl-wrapper" style={{width: 1698 + "px", left: 0 + "px", display: "block"}}>
										<div className="owl-item active" style={{width: 283 + "px"}}>
											<div className="recent-work-item">
												<em>
													<img src="assets/img/works/img1.jpg" alt="Green Technology Systems" className="img-responsive" />
													<a href="http://greentechnologysystems.com/"><i className="fa fa-link"></i></a>
													<a href="assets/img/works/img1.jpg" className="fancybox-button" title="Green Technology Systems" data-rel="fancybox-button"><i className="fa fa-search"></i></a>
												</em>
												<a className="recent-work-description" href="javascript:;">
													<strong>Green Technology Systems</strong>
													<b>Green Tech.</b>
												</a>
											</div>
										</div>
										<div className="owl-item active" style={{width: 283 + "px"}}>
											<div className="recent-work-item">
												<em>
													<img src="assets/img/works/img2.jpg" alt="EZ Ride" className="img-responsive" />
													<a href="http://www.mindseyeapp.com/"><i className="fa fa-link"></i></a>
													<a href="assets/img/works/img2.jpg" className="fancybox-button" title="EZ Ride" data-rel="fancybox-button"><i className="fa fa-search"></i></a>
												</em>
												<a className="recent-work-description" href="javascript:;">
													<strong>EZ Ride</strong>
													<b>Mindseye Invo.</b>
												</a>
											</div>
										</div>
										<div className="owl-item active" style={{width: 283 + "px"}}>
											<div className="recent-work-item">
												<em>
													<img src="assets/img/works/img4.jpg" alt="Matrassen" className="img-responsive" />
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
								<div className="owl-controls clickable" style={{display: "none"}}>
									<div className="owl-buttons">
										<div className="owl-prev">prev</div>
										<div className="owl-next">next</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="row mix-block margin-bottom-40">
						<div className="col-md-12 testimonials-v1">
							<div id="myCarousel" className="carousel slide">
								<div className="carousel-inner">
									<div className="active item">
										<blockquote>
											<p>Denim you probably haven't heard of. Lorem ipsum dolor met consectetur adipisicing sit amet, consectetur adipisicing elit, of them jean shorts sed magna aliqua. Lorem ipsum dolor met.</p>
										</blockquote>
										<div className="carousel-info">
											<img className="pull-left" src="assets/img/people/img1-small.jpg" alt="" />
											<div className="pull-left">
												<span className="testimonials-name">Lina Mars</span>
												<span className="testimonials-post">Commercial Director</span>
											</div>
										</div>
									</div>
									<div className="item">
										<blockquote>
											<p>Raw denim you Mustache cliche tempor, williamsburg carles vegan helvetica probably haven't heard of them jean shorts austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica.</p>
										</blockquote>
										<div className="carousel-info">
											<img className="pull-left" src="assets/img/people/img5-small.jpg" alt="" />
											<div className="pull-left">
												<span className="testimonials-name">Kate Ford</span>
												<span className="testimonials-post">Commercial Director</span>
											</div>
										</div>
									</div>
									<div className="item">
										<blockquote>
											<p>Reprehenderit butcher stache cliche tempor, williamsburg carles vegan helvetica.retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid Aliquip placeat salvia cillum iphone.</p>
										</blockquote>
										<div className="carousel-info">
											<img className="pull-left" src="assets/img/people/img2-small.jpg" alt="" />
											<div className="pull-left">
												<span className="testimonials-name">Jake Witson</span>
												<span className="testimonials-post">Commercial Director</span>
											</div>
										</div>
									</div>
								</div>
								<a className="left-btn" href="#myCarousel" data-slide="prev"></a>
								<a className="right-btn" href="#myCarousel" data-slide="next"></a>
							</div>
						</div>
					</div>
				</div>
			</div>			
		);
	}
}