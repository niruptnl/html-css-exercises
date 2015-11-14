$(document).ready(function(){
  $('.my-slick-slider').slick({
  autoplay:false,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2
});
});

$(window).resize(function(){

       if ($(window).width() <= 320) {
    $('#searchInput').css("width", "150px");
  }
});
