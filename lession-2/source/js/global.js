// Start & Option OwlCarousel
$('.owl-customer').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
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
$('.owl-hot').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  autoplay: true,
  responsive:{
    320:{
      items:2
    },
    600:{
      items:3
    },
    991:{
      items:4
    }
  },
  items: 4
})
  // Change icon control
$(".owl-next").html('<span><img src="../images/right-arrow.svg" alt="" /></span>');
$(".owl-prev").html('<span><img src="../images/left-arrow.svg" alt="" /></span>');
  // Click Menu
$(document).on('click','.menu-reponsive',function() {
  $('.menu__wrap ').slideToggle();
});
  // Click Search
$(document).on('click','.wrap-navbar .navbar__right button',function() {
  $('.wrap-navbar .navbar__right input').toggleClass('active');
  $('.wrap-navbar .navbar__right input').toggleClass('active-phone');
});
$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active');
    $('.intro__category').toggleClass('active');
    $('body').toggleClass('overflow-hidden');
  });
});