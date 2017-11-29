
	// Click Menu
$(document).on('click','.menu-reponsive',function() {
	$('.sunshop-menu__wrap ').slideToggle();
});

	// Click Search
$(document).on('click','.wrap-navbar .navbar__right button',function() {
	$('.wrap-navbar .navbar__right input').toggleClass('active');
	$('.wrap-navbar .navbar__right input').toggleClass('active-phone');
});