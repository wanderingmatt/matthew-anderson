$(document).ready(function(){
  $('.slides-list').slick({
    arrows: false,
    dots: true,
    lazyLoad: 'progressive',
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: true
        }
      }
    ]
  });
});