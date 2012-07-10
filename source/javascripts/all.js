//= require "jquery-1.7.2"
//= require "jquery.easing.1.3"
//= require "jquery.mobile.customized.min"
//= require "jquery.camera"

$(function(){
  $('#onehub .slides').camera({
    autoAdvance: false,
    fx: 'simpleFade',
    height: '50%',
    imagePath: '/images/',
    thumbnails: true
  });
  $('#carlos-lamas .slides').camera({
    autoAdvance: false,
    // height: '70%',
    imagePath: '/images/',
    thumbnails: true
  });
  $('#kenny-meyers .slides').camera({
    autoAdvance: false,
    // height: '70%',
    imagePath: '/images/',
    thumbnails: true
  });
});