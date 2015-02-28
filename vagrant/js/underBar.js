$(function() {
	$("#navi li a").hover(
		function() {

			var left = $(this).position().left;
			$("#underBar").stop().animate({
				marginLeft : parseInt($(this).css('margin-left'),10) + left+1 - 480 +'px'
			},'fast');
		},

		function(){

			var clickedLeft = $(".clicked").position().left;
			$("#underBar").stop().animate({
				marginLeft : clickedLeft - 480 + 'px'
			}, 'fast');
		}
	);
});


$(function() {
	var clickedLeft = $(".clicked").position().left;
	$("#underBar").css('margin-left' , clickedLeft - 480 + "px");

});

/*
$(function() {
	$(document).on('load scroll', function() {

		if ($(document).scrollTo() > 91) {
			$("#navi").addClass('fixed');
		} else {
			$("#navi").removeClass('fixed');
		}

	});
});
*/

$(function() {
	var bt = $("#navi").offset().top;
	var ds = 0;

$(document).scroll(function(){
    ds = $(this).scrollTop();

    if (bt <= ds ) {
        $("#navi").addClass('fixed');
    } else if (bt >= ds) {
        $("#navi").removeClass('fixed');
    }
	});
});


function goTop() {
	scrollTo(0,0);
}