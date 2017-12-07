$(document).on('ready', function () {
  $('.clt-dropdown ul li').click(function() {
      var $toggle = $(this).parent().siblings('.dropdown-toggle');
      $toggle.html($(this).text());
  });
  $('.user-order').on('click', function () {
    var isShowed = $(this).hasClass('is-showed');
    isShowed ?  $(this).removeClass('is-showed') : $(this).addClass('is-showed');
  });

  $('.btn-menubar').on('click', function (e) {
    $(this).toggleClass('change');
    return false;
  });
});
