//= require_tree .

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