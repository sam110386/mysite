import React, { Component } from 'react';

class HomeSlider extends Component{
	render(){
		return (
				<div className="page-slider margin-bottom-40">
					<div className="fullwidthbanner-container revolution-slider">
						<div className="fullwidthabnner">
							<ul id="revolutionul">
								<li data-transition="fade" data-slotamount="8" data-masterspeed="700" data-delay="2400" data-thumb="">
									<img src="assets/img/slider/banner1.png" />
									<div className="caption lft slide_title_white slide_item_left" data-x="30" data-y="90" data-speed="400" data-start="1500" data-easing="easeOutExpo">
										Explore the Power<br />
										<span className="slide_title_white_bold">of Metronic</span>
									</div>
									<div className="caption lft slide_subtitle_white slide_item_left" data-x="87" data-y="245" data-speed="400" data-start="2000" data-easing="easeOutExpo">
										This is what you were looking for
									</div>
									<a className="caption lft btn dark slide_btn slide_item_left" href="" data-x="187" data-y="315" data-speed="400" data-start="3000" data-easing="easeOutExpo">
										Purchase Now!
									</a>                        
									<div className="caption lfb" data-x="640" data-y="0" data-speed="700" data-start="1000" data-easing="easeOutExpo">
										<img src="assets/img/revolutionslider/lady.png" />
									</div>
								</li>    

								<li data-transition="fade" data-slotamount="8" data-masterspeed="700" data-delay="9400" data-thumb="">
									<img src="assets/img/slider/banner2.png" />
									<div className="caption lft slide_title slide_item_left" data-x="30" data-y="105" data-speed="400" data-start="1500" data-easing="easeOutExpo">
										Need a website design? 
									</div>
									<div className="caption lft slide_subtitle slide_item_left" data-x="30" data-y="180" data-speed="400" data-start="2000" data-easing="easeOutExpo">
										This is what you were looking for
									</div>
									<div className="caption lft slide_desc slide_item_left" data-x="30" data-y="220" data-speed="400" data-start="2500" data-easing="easeOutExpo">
										Lorem ipsum dolor sit amet, dolore eiusmod<br /> quis tempor incididunt. Sed unde omnis iste.
									</div>
									<a className="caption lft btn green slide_btn slide_item_left" href="" data-x="30" data-y="290" data-speed="400" data-start="3000" data-easing="easeOutExpo">
										Purchase Now!
									</a>                        
									<div className="caption lfb" data-x="640" data-y="55" data-speed="700" data-start="1000" data-easing="easeOutExpo">
										<img src="assets/img/revolutionslider/man-winner.png" />
									</div>
								</li>

								<li data-transition="fade" data-slotamount="7" data-masterspeed="300" data-delay="9400" data-thumb=""> 
									<img src="assets/img/slider/banner3.png" />
									<div className="caption lfl slide_title slide_item_left" data-x="30" data-y="125" data-speed="400" data-start="3500" data-easing="easeOutExpo">
										Powerfull &amp; Clean
									</div>
									<div className="caption lfl slide_subtitle slide_item_left" data-x="30" data-y="200" data-speed="400" data-start="4000" data-easing="easeOutExpo">
										Responsive Admin &amp; Website Theme
									</div>
									<div className="caption lfl slide_desc slide_item_left" data-x="30" data-y="245" data-speed="400" data-start="4500" data-easing="easeOutExpo">
										Lorem ipsum dolor sit amet, consectetuer elit sed diam<br /> nonummy amet euismod dolore.
									</div>
									<div className="caption lfr slide_item_right" data-x="635" data-y="105" data-speed="1200" data-start="1500" data-easing="easeOutBack">
										<img src="assets/img/revolutionslider/mac.png" />
									</div>
									<div className="caption lfr slide_item_right" data-x="580" data-y="245" data-speed="1200" data-start="2000" data-easing="easeOutBack">
										<img src="assets/img/revolutionslider/ipad.png" />
									</div>
									<div className="caption lfr slide_item_right" data-x="735" data-y="290" data-speed="1200" data-start="2500" data-easing="easeOutBack">
										<img src="assets/img/revolutionslider/iphone.png" />
									</div>
									<div className="caption lfr slide_item_right" data-x="835" data-y="230" data-speed="1200" data-start="3000" data-easing="easeOutBack">
										<img src="assets/img/revolutionslider/macbook.png" />
									</div>
									<div className="caption lft slide_item_right" data-x="865" data-y="45" data-speed="500" data-start="5000" data-easing="easeOutBack">
										<img src="assets/img/revolutionslider/hint1-red.png" />
									</div>                        
									<div className="caption lfb slide_item_right" data-x="355" data-y="355" data-speed="500" data-start="5500" data-easing="easeOutBack">
										<img src="assets/img/revolutionslider/hint2-red.png" />
									</div>
								</li>
							</ul>
							<div className="tp-bannertimer tp-bottom"></div>
						</div>
					</div>
				</div>
		)		
	}
}

export default HomeSlider;