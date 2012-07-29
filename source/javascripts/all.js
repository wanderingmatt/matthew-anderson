//= require "jquery-1.7.2"
//= require "jquery.easing-1.3"
//= require "jquery.scrollTo"
//= require "jquery.flexslider"

$(function() {
  $('.toggle-work').click(function() {
    $('.work').slideToggle('fast');
  });

  $('.monogram, .back-top-top').click(function() {
    $.scrollTo(0, 500, {easing: 'easeOutExpo'});
  });

  $('.work a').click(function() {
    var target = $(this).attr('href');
    $.scrollTo(target, 500, {easing: 'easeOutExpo'});
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() >= $('section').first().offset().top) { // Determine when the first project section is visible.
      $('.back-to-top').addClass('test');
    }
    else {
      $('.back-to-top').removeClass('test');
    }
  });

  $('.flexslider').flexslider({
    animation: "slide",
    slideshow: false
  });
});