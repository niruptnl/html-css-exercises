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
