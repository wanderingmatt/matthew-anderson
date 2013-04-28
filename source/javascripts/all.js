//= require "jquery-1.7.2"
//= require "jquery.easing-1.3"
//= require "jquery.scrollTo"
//= require "jquery.flexslider"

$(document).ready(function() {
  $('.toggle-work').click(function() {
    $(this).toggleClass('toggled');
    $('.work').slideToggle('fast');
  });

  $('.monogram, #back-to-top').click(function(event) {
    event.preventDefault();
    $.scrollTo(0, 500, {easing: 'easeOutExpo'});
  });

  $('.work a').click(function(event) {
    event.preventDefault();
    var target = $(this).attr('href');
    $.scrollTo(target, 500, {easing: 'easeOutExpo'});
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() >= $('section').first().offset().top) { // Determine when the first project section is visible.
      $('#back-to-top').addClass('available');
    }
    else {
      $('#back-to-top').removeClass('available');
    }
  });
});

$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    slideshow: false,
    // start: function(slider) {
    //   slider.removeClass('loading');
    // }
  });
});