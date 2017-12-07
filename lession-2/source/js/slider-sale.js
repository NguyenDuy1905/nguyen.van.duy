$(document).ready(function() {
  var owl = $('.sync-slide');
  owl.owlCarousel({
    loop:true,
    nav: false,
    dots: false,
    responsive:{
      0:{
        items:3
      },
      600:{
        items:3
      },
      1000:{
        items:4
      }
    }
  })



  $('body').on('click', '.prev-image', function () {
    owl.trigger('prev.owl.carousel');
  });
  $('body').on('click', '.next-image', function () {
    owl.trigger('next.owl.carousel');
  });
  $('.owl-carousel').on('click', '.item', function () {

    //replace image to show and add zoom config
    var img_src = $(this).find('img').data('view-image');
    var img_target = $('.image-product-wrapper').find('img');
    var zoom_img = $(this).find('img').data('zoom-image');
    img_target.attr('src', img_src);
    img_target.attr('data-zoom-image', zoom_img);
    img_target.addClass('zoom-img');

    $('.zoomContainer').remove();

    //re-initialize zoom
    $('.zoom-img').data('zoom-image', zoom_img).elevateZoom({
        responsive: true,
        zoomType: 'inner',
        cursor: "crosshair"
    });
  });

});
