$(window).load(function(){
  $('#myModal1').modal({display:'show',backdrop:'static',keyboard:false});
});

$(document).ready(function(){
  $('.carousel').carousel({
 interval: 5000
});

$('#trailer1').on('hidden.bs.modal', function () {
    $("#trailer1 iframe").attr("src", $("#trailer1 iframe").attr("src"));
});

$('#trailer2').on('hidden.bs.modal', function () {
    $("#trailer2 iframe").attr("src", $("#trailer2 iframe").attr("src"));
});

$('.my-slick-slider').slick({
autoplay:false,
infinite: true,
slidesToShow: 2,
slidesToScroll: 2
});
});

$(document).ready(function(){

$('.hspan').mouseover(function() {
  $('.hoverspan').css("visibility","visible");
  $('.hspan img').css("opacity","0.1");
});

$('.hoverspan').mouseover(function() {
  $('.hoverspan').css("visibility","visible");
  $('.hspan img').css("opacity","0.1");
});

$('.hspan').mouseout(function() {
  $('.hoverspan').css("visibility","hidden");
  $('.hspan img').css("opacity","1");
});

$('.hspan1').mouseover(function() {
  $('.hoverspan1').css("visibility","visible");
  $('.hspan1 img').css("opacity","0.1");
});

$('.hoverspan1').mouseover(function() {
  $('.hoverspan1').css("visibility","visible");
  $('.hspan1 img').css("opacity","0.1");
});

$('.hspan1').mouseout(function() {
  $('.hoverspan1').css("visibility","hidden");
  $('.hspan1 img').css("opacity","1");
});

$('.hspan2').mouseover(function() {
  $('.hoverspan2').css("visibility","visible");
  $('.hspan2 img').css("opacity","0.1");
});

$('.hoverspan2').mouseover(function() {
  $('.hoverspan2').css("visibility","visible");
  $('.hspan2 img').css("opacity","0.1");
});

$('.hspan2').mouseout(function() {
  $('.hoverspan2').css("visibility","hidden");
  $('.hspan2 img').css("opacity","1");
});

$('.hspan3').mouseover(function() {
  $('.hoverspan3').css("visibility","visible");
  $('.hspan3 img').css("opacity","0.1");
});

$('.hoverspan3').mouseover(function() {
  $('.hoverspan3').css("visibility","visible");
  $('.hspan3 img').css("opacity","0.1");
});

$('.hspan3').mouseout(function() {
  $('.hoverspan3').css("visibility","hidden");
  $('.hspan3 img').css("opacity","1");
});

$('#book').on('hidden.bs.modal', function () {
    $(".hoverspan ").css("visibility","hidden");
    $('.hspan img').css("opacity","1");
});

$('#book').on('hidden.bs.modal', function () {
    $(".hoverspan1").css("visibility","hidden");
    $('.hspan1 img').css("opacity","1");
});

$('#book').on('hidden.bs.modal', function () {
    $(".hoverspan2").css("visibility","hidden");
    $('.hspan2 img').css("opacity","1");
});

$('#book').on('hidden.bs.modal', function () {
    $(".hoverspan3").css("visibility","hidden");
    $('.hspan3 img').css("opacity","1");
});
});

$(document).ready(function(){

$('#thoongavanam').click(function(){
  $('.col-12 .thoongavanam').css("visibility","visible");
  $('.col-12 .hotelt2').css("visibility","hidden");
  $('.col-12 .kanche').css("visibility","hidden");
  $('.col-12 .pkp2').css("visibility","hidden");
  $('.col-12 .martian').css("visibility","hidden");

  $('.col-12 .thoongavanam').css("display","block");
  $('.col-12 .hotelt2').css("display","none");
  $('.col-12 .kanche').css("display","none");
  $('.col-12 .pkp2').css("display","none");
  $('.col-12 .martian').css("display","none");
});

$('#hotelt2').click(function(){
  $('.col-12 .thoongavanam').css("visibility","hidden");
  $('.col-12 .kanche').css("visibility","hidden");
  $('.col-12 .pkp2').css("visibility","hidden");
  $('.col-12 .martian').css("visibility","hidden");
  $('.col-12 .hotelt2').css("visibility","visible");

  $('.col-12 .thoongavanam').css("display","none");
  $('.col-12 .hotelt2').css("display","block");
  $('.col-12 .kanche').css("display","none");
  $('.col-12 .pkp2').css("display","none");
  $('.col-12 .martian').css("display","none");
});

$('#kanche').click(function(){
  $('.col-12 .thoongavanam').css("visibility","hidden");
  $('.col-12 .hotelt2').css("visibility","hidden");
  $('.col-12 .kanche').css("visibility","visible");
  $('.col-12 .pkp2').css("visibility","hidden");
  $('.col-12 .martian').css("visibility","hidden");

  $('.col-12 .thoongavanam').css("display","none");
  $('.col-12 .hotelt2').css("display","none");
  $('.col-12 .kanche').css("display","block");
  $('.col-12 .pkp2').css("display","none");
  $('.col-12 .martian').css("display","none");
});

$('#pkp2').click(function(){
  $('.col-12 .thoongavanam').css("visibility","hidden");
  $('.col-12 .hotelt2').css("visibility","hidden");
  $('.col-12 .kanche').css("visibility","hidden");
  $('.col-12 .pkp2').css("visibility","visible");
  $('.col-12 .martian').css("visibility","hidden");

  $('.col-12 .thoongavanam').css("display","none");
  $('.col-12 .hotelt2').css("display","none");
  $('.col-12 .kanche').css("display","none");
  $('.col-12 .pkp2').css("display","block");
  $('.col-12 .martian').css("display","none");
});

$('#martian').click(function(){
  $('.col-12 .thoongavanam').css("visibility","hidden");
  $('.col-12 .hotelt2').css("visibility","hidden");
  $('.col-12 .kanche').css("visibility","hidden");
  $('.col-12 .pkp2').css("visibility","hidden");
  $('.col-12 .martian').css("visibility","visible");

  $('.col-12 .thoongavanam').css("display","none");
  $('.col-12 .hotelt2').css("display","none");
  $('.col-12 .kanche').css("display","none");
  $('.col-12 .pkp2').css("display","none");
  $('.col-12 .martian').css("display","block");
});

});
/*Show Reviews End*/
$(document).ready(function(){

$('.hmovie').mouseover(function() {
  $('.hreview').css("visibility","visible");
  $('.hmovie img').css("opacity","0.1");
});

$('.hreview').mouseover(function() {
  $('.hreview').css("visibility","visible");
  $('.hmovie img').css("opacity","0.1");
});

$('.hmovie').mouseout(function() {
  $('.hreview').css("visibility","hidden");
  $('.hmovie img').css("opacity","1");
});

$('.hmovie1').mouseover(function() {
  $('.hreview1').css("visibility","visible");
  $('.hmovie1 img').css("opacity","0.1");
});

$('.hreview1').mouseover(function() {
  $('.hreview1').css("visibility","visible");
  $('.hmovie1 img').css("opacity","0.1");
});

$('.hmovie1').mouseout(function() {
  $('.hreview1').css("visibility","hidden");
  $('.hmovie1 img').css("opacity","1");
});


$('.hmovie2').mouseover(function() {
  $('.hreview2').css("visibility","visible");
  $('.hmovie2 img').css("opacity","0.1");
});

$('.hreview2').mouseover(function() {
  $('.hreview2').css("visibility","visible");
  $('.hmovie2 img').css("opacity","0.1");
});

$('.hmovie2').mouseout(function() {
  $('.hreview2').css("visibility","hidden");
  $('.hmovie2 img').css("opacity","1");
});


$('.hmovie3').mouseover(function() {
  $('.hreview3').css("visibility","visible");
  $('.hmovie3 img').css("opacity","0.1");
});

$('.hreview3').mouseover(function() {
  $('.hreview3').css("visibility","visible");
  $('.hmovie3 img').css("opacity","0.1");
});

$('.hmovie3').mouseout(function() {
  $('.hreview3').css("visibility","hidden");
  $('.hmovie3 img').css("opacity","1");
});

$('.hmovie4').mouseover(function() {
  $('.hreview4').css("visibility","visible");
  $('.hmovie4 img').css("opacity","0.1");
});

$('.hreview4').mouseover(function() {
  $('.hreview4').css("visibility","visible");
  $('.hmovie4 img').css("opacity","0.1");
});

$('.hmovie4').mouseout(function() {
  $('.hreview4').css("visibility","hidden");
  $('.hmovie4 img').css("opacity","1");
});


});
