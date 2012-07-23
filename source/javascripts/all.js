//= require "jquery-1.7.2"
//= require "jquery.easing-1.3"
//= require "jquery.scrollTo"
//= require "jquery.flexslider"

$(function() {
  $('.monogram').click(function() {
    $.scrollTo(0, 500, {easing: 'easeOutExpo'});
  });

  $('.work a').click(function() {
    var target = $(this).attr('href');
    $.scrollTo(target, 500, {easing: 'easeOutExpo'});
  });

  $('.toggle-work').click(function() {
    $('.work').slideToggle('fast');
  });
});

$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: false,
    pauseOnHover: false,
    slideshow: false
  });
});