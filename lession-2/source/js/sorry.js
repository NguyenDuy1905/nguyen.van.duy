$(document).ready(function($) {
  function resizeHeigth(){
    if($('.header-sorry').length) {
      var headerHeight = $('.header-sorry').outerHeight();
      var contentHeight = $('section').outerHeight()+1;
      var totalHeight = headerHeight + contentHeight;
      var footerHeight = $(window).height() - totalHeight;
      $('.bottom-sorry').css('height',footerHeight);
    }
  }
 resizeHeigth();
 $(window).on('resize',resizeHeigth);
});
