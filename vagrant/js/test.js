$(function() {
	$('#questionNavi .list li') .hover(
		function(){
			$(this).stop().animate({
				'height':'30px'
			},'fast');
		},
		function(){
			$(this).stop().animate({

			},'fast');
		}
	);
});