//= require "jquery-1.7.2"
//= require "jquery.flexslider"

$(function() {
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