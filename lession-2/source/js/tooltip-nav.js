$(document).ready(function($) {
  $('.tooltip-close').click(function() {
    $('.js-tooltip-nav').removeClass('is-show');
  });

  function setTooltipNavPosition() {
    if($(window).width() < 992) {
      $('.js-tooltip-nav').css('margin-top', $(document).scrollTop() + 10);
    } else {
      $('.js-tooltip-nav').removeAttr('style');
    }
  }

  $(document).on('click', '.js-data-tooltip', function(){
    var input = $(this);
    var attr = input.attr('data-title');

    $('.js-tooltip-nav').removeClass('is-show');

    if (typeof attr !== typeof undefined && attr !== false) {
      $('.js-tooltip-nav').addClass('is-show');
      $('.js-tooltip-nav .tooltip-text p').html(attr);

      setTimeout(function() {
        setTooltipNavPosition();
      }, 100);
    }
  });

  $(document).on('blur', '.js-data-tooltip', function() {
    setTooltipNavPosition();
  });

  $(window).on('scroll resize', function() {
    setTooltipNavPosition();
  });

  if($('.registration-form-step-2 .registration-form').length === 1) {
    $('.form-horizontal').addClass('in');
    $('.js-tooltip-nav .tooltip-text p').html('製品(ﾗｲﾄｸﾞﾘｰﾝ:磁気有り)を使用される方がお申込者(あなた)と同一の場合は□にﾁｪｯｸしてください');
  }

});
