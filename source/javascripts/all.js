//= require "jquery-1.7.2"
//= require "jquery.easing.1.3"
//= require "jquery.mobile.customized.min"
//= require "jquery.camera"

jQuery(function(){
  jQuery('#onehub .slides').camera({
    autoAdvance: false,
    fx: 'simpleFade',
    // height: '55.5%',
    imagePath: '/images/'
  });
  jQuery('#carlos-lamas .slides').camera({
    autoAdvance: false,
    // height: '70%',
    imagePath: '/images/'
  });
});