//= require "jquery-1.7.2"
//= require "jquery.easing-1.3"
//= require "jquery.scrollTo"
//= require "jquery.flexslider"
//= require "respond.src"

$(document).ready(function() {
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
    start: function(slider) {
      slider.removeClass('loading');
    }
  });
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-13229620-3', 'matthew-anderson.com');
ga('send', 'pageview');