$(document).ready(function () {
    $('.title').fadeIn(2000);
    setBindings();
});

$(document).ready(function () {
    $('#logo-hoofd').fadeIn(2000);
});


var divs = $('#logo-hoofd,.title');
$(window).scroll(function(){
   if($(window).scrollTop()<10){
         divs.fadeIn(500);
   } else {
         divs.fadeOut(500);
   }
});


function setBindings() {
		$("nav a").click(function(e){
			e.preventDefault();
			var sectionID = e.currentTarget.id + "Section";

		$("html body").animate({
			scrollTop:$("#" + sectionID).offset().top
		}, 1000)
	})
}