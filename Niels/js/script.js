$(document).ready(function () {
    $('.title').fadeIn(2000);
});

$(document).ready(function () {
    $('.uilfoto').fadeIn(2000);
});


var divs = $('.uilfoto,.title');
$(window).scroll(function(){
   if($(window).scrollTop()<10){
         divs.fadeIn(500);
   } else {
         divs.fadeOut(500);
   }
});

$('#logo-hoofd').hover(function(){
    $(this).css({width:"300px",height:"300px"});
},function(){
    $(this).css({width:"250px",height:"250px"});   
});