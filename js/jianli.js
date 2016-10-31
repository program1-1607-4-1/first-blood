$(document).ready(function(){
	$('.jianli .content .say').click(function(){
			$(".jianli .content .say .zhezhao").addClass('zhezhao-h')
		});
    $('.jianli .content .say').mouseout(function(){
			$(".jianli .content .say .zhezhao-h").removeClass('zhezhao-h')
		});
    
})
