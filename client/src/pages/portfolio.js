import React, { Component } from 'react';
var loadjs = require('loadjs');

export default class Portfolio extends Component {
	componentWillReceiveProps (nextProps) {
		loadjs('/assets/js/page-scripts.js');
	}
	render(){
		return(
			<div className="main">
				<div className="container">
					<div className="row margin-bottom-40">
						<div className="col-md-12 col-sm-12">
							<h1>Portfolio </h1>
							<div className="content-page">
								<div className="filter-v1">
									<ul className="mix-filter">
										<li data-filter="all" className="filter active">All</li>
										<li data-filter="category_2" className="filter">Web Development</li>
										<li data-filter="category_3" className="filter">Mobile App Development</li>
										<li data-filter="category_1" className="filter">UI Design</li>
									</ul>
									<div className="row mix-grid thumbnails">
										<div className="col-md-4 col-sm-6 mix category_1 mix_all" style={{display: "block",  opacity: 1}}>
											<div className="mix-inner">
												<img alt="" src="assets/img/works/img1.jpg" className="img-responsive" />
												<div className="mix-details">
													<h4>Cascusamus et iusto odio</h4>
													<p>At vero eos et accusamus et iusto odio digniss imos duc sasdimus qui sint blanditiis prae sentium voluptatum deleniti atque corrupti quos dolores.</p>
													<a className="mix-link"><i className="fa fa-link"></i></a>
													<a data-rel="fancybox-button" title="Project Name" href="assets/img/works/img1.jpg" className="mix-preview fancybox-button"><i className="fa fa-search"></i></a>
												</div>           
											</div>                       
										</div>
										<div className="col-md-4 col-sm-6 mix category_2 mix_all" style={{display: "block",  opacity: 1}}>
											<div className="mix-inner">
												<img alt="" src="assets/img/works/img2.jpg" className="img-responsive"/>
												<div className="mix-details">
													<h4>Cascusamus et iusto odio</h4>
													<p>At vero eos et accusamus et iusto odio digniss imos duc sasdimus qui sint blanditiis prae sentium voluptatum deleniti atque corrupti quos dolores.</p>
													<a className="mix-link"><i className="fa fa-link"></i></a>
													<a data-rel="fancybox-button" title="Project Name" href="assets/img/works/img2.jpg" className="mix-preview fancybox-button"><i className="fa fa-search"></i></a>
												</div>               
											</div>                    
										</div>
										<div className="col-md-4 col-sm-6 mix category_3 mix_all" style={{display: "block",  opacity: 1}}>
											<div className="mix-inner">
												<img alt="" src="assets/img/works/img3.jpg" className="img-responsive"/>
												<div className="mix-details">
													<h4>Cascusamus et iusto odio</h4>
													<p>At vero eos et accusamus et iusto odio digniss imos duc sasdimus qui sint blanditiis prae sentium voluptatum deleniti atque corrupti quos dolores.</p>
													<a className="mix-link"><i className="fa fa-link"></i></a>
													<a data-rel="fancybox-button" title="Project Name" href="assets/img/works/img3.jpg" className="mix-preview fancybox-button"><i className="fa fa-search"></i></a>
												</div>              
											</div>      
										</div>
										<div className="col-md-4 col-sm-6 mix category_1 category_2 mix_all" style={{display: "block",  opacity: 1}}>
											<div className="mix-inner">
												<img alt="" src="assets/img/works/img4.jpg" className="img-responsive"/>
												<div className="mix-details">
													<h4>Cascusamus et iusto odio</h4>
													<p>At vero eos et accusamus et iusto odio digniss imos duc sasdimus qui sint blanditiis prae sentium voluptatum deleniti atque corrupti quos dolores.</p>
													<a className="mix-link"><i className="fa fa-link"></i></a>
													<a data-rel="fancybox-button" title="Project Name" href="assets/img/works/img4.jpg" className="mix-preview fancybox-button"><i className="fa fa-search"></i></a>                            
												</div>                  
											</div>                      
										</div>
										<div className="col-md-4 col-sm-6 mix category_2 category_1 mix_all" style={{display: "block",  opacity: 1}}>
											<div className="mix-inner">
												<img alt="" src="assets/img/works/img5.jpg" className="img-responsive"/>
												<div className="mix-details">
													<h4>Cascusamus et iusto odio</h4>
													<p>At vero eos et accusamus et iusto odio digniss imos duc sasdimus qui sint blanditiis prae sentium voluptatum deleniti atque corrupti quos dolores.</p>
													<a className="mix-link"><i className="fa fa-link"></i></a>
													<a data-rel="fancybox-button" title="Project Name" href="assets/img/works/img5.jpg" className="mix-preview fancybox-button"><i className="fa fa-search"></i></a>                            
												</div>     
											</div>                                   
										</div>
										<div className="col-md-4 col-sm-6 mix category_1 category_2 mix_all" style={{display: "block",  opacity: 1}}>
											<div className="mix-inner">
												<img alt="" src="assets/img/works/img6.jpg" className="img-responsive"/>
												<div className="mix-details">
													<h4>Cascusamus et iusto odio</h4>
													<p>At vero eos et accusamus et iusto odio digniss imos duc sasdimus qui sint blanditiis prae sentium voluptatum deleniti atque corrupti quos dolores.</p>
													<a className="mix-link"><i className="fa fa-link"></i></a>
													<a data-rel="fancybox-button" title="Project Name" href="assets/img/works/img6.jpg" className="mix-preview fancybox-button"><i className="fa fa-search"></i></a>                            
												</div>     
											</div>                                   
										</div>
										<div className="col-md-4 col-sm-6 mix category_2 category_3 mix_all" style={{display: "block",  opacity: 1}}>
											<div className="mix-inner">
												<img alt="" src="assets/img/works/img1.jpg" className="img-responsive"/>
												<div className="mix-details">
													<h4>Cascusamus et iusto odio</h4>
													<p>At vero eos et accusamus et iusto odio digniss imos duc sasdimus qui sint blanditiis prae sentium voluptatum deleniti atque corrupti quos dolores.</p>
													<a className="mix-link"><i className="fa fa-link"></i></a>
													<a data-rel="fancybox-button" title="Project Name" href="assets/img/works/img1.jpg" className="mix-preview fancybox-button"><i className="fa fa-search"></i></a>                            
												</div>    
											</div>                                    
										</div>
										<div className="col-md-4 col-sm-6 mix category_1 category_2 mix_all" style={{display: "block",  opacity: 1}}>
											<div className="mix-inner">
												<img alt="" src="assets/img/works/img2.jpg" className="img-responsive"/>
												<div className="mix-details">
													<h4>Cascusamus et iusto odio</h4>
													<p>At vero eos et accusamus et iusto odio digniss imos duc sasdimus qui sint blanditiis prae sentium voluptatum deleniti atque corrupti quos dolores.</p>
													<a className="mix-link"><i className="fa fa-link"></i></a>
													<a data-rel="fancybox-button" title="Project Name" href="assets/img/works/img2.jpg" className="mix-preview fancybox-button"><i className="fa fa-search"></i></a>                            
												</div>   
											</div>                                     
										</div>
										<div className="col-md-4 col-sm-6 mix category_3 mix_all" style={{display: "block",  opacity: 1}}>
											<div className="mix-inner">
												<img alt="" src="assets/img/works/img4.jpg" className="img-responsive"/>
												<div className="mix-details">
													<h4>Cascusamus et iusto odio</h4>
													<p>At vero eos et accusamus et iusto odio digniss imos duc sasdimus qui sint blanditiis prae sentium voluptatum deleniti atque corrupti quos dolores.</p>
													<a className="mix-link"><i className="fa fa-link"></i></a>
													<a data-rel="fancybox-button" title="Project Name" href="assets/img/works/img4.jpg" className="mix-preview fancybox-button"><i className="fa fa-search"></i></a>                            
												</div>    
											</div>                                    
										</div>
										<div className="col-md-4 col-sm-6 mix category_1 mix_all" style={{display: "block",  opacity: 1}}>
											<div className="mix-inner">
												<img alt="" src="assets/img/works/img3.jpg" className="img-responsive"/>
												<div className="mix-details">
													<h4>Cascusamus et iusto odio</h4>
													<p>At vero eos et accusamus et iusto odio digniss imos duc sasdimus qui sint blanditiis prae sentium voluptatum deleniti atque corrupti quos dolores.</p>
													<a className="mix-link"><i className="fa fa-link"></i></a>
													<a data-rel="fancybox-button" title="Project Name" href="assets/img/works/img3.jpg" className="mix-preview fancybox-button"><i className="fa fa-search"></i></a>
												</div> 
											</div>                                       
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}