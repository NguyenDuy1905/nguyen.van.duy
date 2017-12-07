$(document).ready(function () {
  $('body').on('click', '.btn-arrow', function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: 0
    }, 700);
  });
});
