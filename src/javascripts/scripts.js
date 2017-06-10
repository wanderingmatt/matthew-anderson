(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-13229620-3', 'auto');
ga('send', 'pageview');

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