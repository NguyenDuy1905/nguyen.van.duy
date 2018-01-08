//=require jquery/dist/jquery.min.js
//=require owl.carousel2/dist/owl.carousel.min.js

// [Header]: Click Menu
$(document).on('click', '.js-menu-responsive', function() {
	$('.js-menu').slideToggle();
});
// [Slider]
$(document).ready(function(){
  $('.js-slider').owlCarousel({
  	loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: false,
    animateOut: 'fadeOut',
    items: 1
  });
});
// [Product-Slider]
$(document).ready(function(){
  $('.js-product-slider').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    navText: ['<span><i class="product-slider__icon fa fa-arrow-left" aria-hidden="true"></i></span>','<span><i class="product-slider__icon fa fa-arrow-right" aria-hidden="true"></i></span>'],
    autoplay: false,
    items: 4,
    responsive:{
      320:{
        items:2
      },
      991:{
        items:3
      },
      1199:{
        items:4
      }
    }
  });
});
