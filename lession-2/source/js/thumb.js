$(document).ready(function () {

  var $imgContainer = $('.image-container');
  var interVal = setInterval(function(){ thumbTimer() }, 3000);
  function thumbTimer() {
    var $imgContainerActive = $('.image-container.active');

    if($imgContainerActive.is(':last-child')) {
      $('.image-container:first-child').addClass('active');
      $imgContainerActive.removeClass('active');
      } else {
        $imgContainerActive.next($imgContainer).addClass('active');
        $imgContainerActive.removeClass('active');
    }
  }


  $('body').on('click', '.view-image', function (e) {
    e.preventDefault();
    clearInterval(interVal);
    $imgContainer.removeClass('active');
    $(this).closest($imgContainer).addClass('active');
    interVal = setInterval(function(){ thumbTimer() }, 3000);
  });


});
