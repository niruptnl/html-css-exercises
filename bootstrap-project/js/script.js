/*

My Custom JS
============

Author:  Brad Hussey
Updated: August 2013
Notes:	 Hand coded for Udemy.com

*/
$(window).load(function(){
  $('#myModal1').modal({display:'show',backdrop:'static',keyboard:false});
});

$(document).ready(function(){

  $('#myModal1').on('hidden.bs.modal', function () {
      $("#myModal1 iframe").attr("src", $("#myModal1 iframe").attr("src"));
  });

  $('#hoverchange1').click(function(e){
    e.preventDefault();
  });

    $('#alertMe').click(function(e){
      e.preventDefault();
      $('#successAlert').slideDown();
    });

    $('.carousel').carousel({
   interval: 3000
 });

 $('a.pop').click(function(e){
   e.preventDefault();
 });

 $('a.pop').popover();

 $('#tooltip').tooltip({html:"true"});

  });
