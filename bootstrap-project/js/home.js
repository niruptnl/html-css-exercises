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

});
