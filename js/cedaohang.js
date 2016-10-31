$(document).ready(function(){
    $(".cedaohang .ce-xia a").each(function(index){	
	$(this).hover(function(){
		$(".cedaohang .ce-xia a span").eq(index).show();
	},function(){
		$(".cedaohang .ce-xia a span").eq(index).hide();
	})
})
    
})
