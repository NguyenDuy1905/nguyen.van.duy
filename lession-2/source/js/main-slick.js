$(document).ready(function($) {
  var userAgent, ieReg, ie;
  userAgent = window.navigator.userAgent;
  ieReg = /msie|Trident.*rv[ :]*11\./gi;
  ie = ieReg.test(userAgent);

  if(ie) {
    $(".fadeOut .item").each(function () {
      var $container = $(this),
          imgUrl = $container.find("img.slider-img").prop("src");
      if (imgUrl) {
        $container.css("backgroundImage", 'url(' + imgUrl + ')').addClass("custom-object-fit");
      }
    });
  }

  var $slick = $('.fadeOut');
  $slick.slick({
    infinite: true,
    autoplay: true,
    fade: true,
    autoplaySpeed: 3500,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  $slick.on('afterChange', function(event, slick, currentSlide){
    var $slickLength = $('.fadeOut .item').length -1;
    if ($slickLength === currentSlide){
      $slick.slick('slickPause');
      setTimeout(function(){
        $slick.slick('slickPlay');
      }, 8000);
    }
  });
});
