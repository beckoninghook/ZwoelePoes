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