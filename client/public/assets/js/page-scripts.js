jQuery(document).ready(function() {
	Layout.init();    
	Layout.initOWL();
	RevosliderInit.initRevoSlider();
	// Layout.initTwitter();
	Layout.initFixHeaderWithPreHeader(); /* Switch On Header Fixing (only if you have pre-header) */
	Layout.initNavScrolling(); 
	Portfolio.init();
	jQuery('.carousel').carousel({interval: 1000,keyboard: true, pause: false})
});