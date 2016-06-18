$(document).ready(function () {
    $("#homeSection,#aboutSection").fadeIn(2000);
    setBindings();
});


function setBindings() {
		$(".buttons a").click(function(e){
			e.preventDefault();
			var sectionID = e.currentTarget.id + "Section";

		$("html body").animate({
			scrollTop:$("#" + sectionID).offset().top
		}, 1000)
	})
}