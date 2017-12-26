// Start & Option OwlCarousel
$(document).ready(function() {
  $('.js-owl-slide').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ["<span><img src='../images/left-arrow.svg'></span>","<span><img src='../images/right-arrow.svg'></span>"],
    autoplay: true,
    responsive:{
      320:{
        items:2
      },
      768:{
        items: 3
      },
      991:{
        items:3
      },
      1199:{
        items:4
      }
    },
    items: 4
  })
  $('.js-owl-customer').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ["<span><img src='../images/left-arrow.svg'></span>","<span><img src='../images/right-arrow.svg'></span>"],
    autoplay: true,
    responsive:{
      320:{
        items:3
      },
      600:{
        items:4
      },
      991:{
        items:5
      }
    },
    items: 6
  })
});
  // Click Menu
$(document).on('click', '.js-menu-responsive', function() {
  $('.js-navigation').slideToggle();
});
  // Click Search
$(document).on('click', '.js-search__button', function() {
  $('.js-search__input').toggleClass('search__input--active');
});
  // Show category
$(document).on('click', '.js-filter__title .title-h4', function() {
  $('.js-filter__body').slideToggle();
});
