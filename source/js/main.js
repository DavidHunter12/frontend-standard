//=require jquery/dist/jquery.min.js
//=require bootstrap-sass/assets/javascripts/bootstrap.js
//=require jquery.elevatezoom.js
//=require zoom.js
//=require side-bar.js
$(function(){
	$('.target-menu').click(function(){
		$('#menu-sub').css({'-webkit-transform' : 'translateX(0)',
        'transform' : 'translateX(0)', 'visibility' : 'visible'});
	});
	$('.close').click(function(){
		$('#menu-sub').css({'-webkit-transform' : 'translateX(-40em)',
        'transform' : 'translateX(-40em)', 'visibility' : 'hidden'});
	});
});