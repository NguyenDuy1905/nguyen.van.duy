$(document).ready(function() {
  var $menubar = $('.btn-menubar');
  var $ddmenu  = $('.dd-menu');
  $menubar.click(function() { 
    var $checkDdmenuVisible = $ddmenu.is(":visible");
    if($checkDdmenuVisible == true) {
      $ddmenu.slideUp(); 
    }else {
      $ddmenu.slideDown(); 
    }
  });
  $menubar.click(function(e) { e.stopPropagation(); });
  $(document).click(function() { 
    var $btnMenu = $('.btn-menubar');
    if ($btnMenu.hasClass('change')) $btnMenu.removeClass('change');
    $ddmenu.slideUp(); 
  }); 
});

$(window).on('resize', function () {
  var $btnMenu = $('.btn-menubar');
  var $ddMenu  = $('.dd-menu');
  var isMenuShowed = $btnMenu.hasClass('change');
  if(window.innerWidth >= 992 && isMenuShowed) {
    $ddMenu.hide();
    $btnMenu.removeClass('change');
  }
});
