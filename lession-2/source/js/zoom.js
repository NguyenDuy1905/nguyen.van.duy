$(window).on('load resize', function() {
  $('.zoomContainer').remove();

  //re-initialize zoom
  if($(window).width()>768){
    $(".zoom-img").elevateZoom({
      responsive: true,
      zoomType: "inner",
      cursor: "crosshair"
    });
  } else {
    $('.zoomContainer').remove();
    $(".zoom-img").removeData("elevateZoom");
    return false;
  }
});
