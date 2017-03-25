
$(document).ready(function(){
	function autoheight(){
		var Nwidth = $(window).width(),
			Nheight = Nwidth/1920*800;
		if (Nwidth > 1280) {
			$('.video_con,.wx_list_f').height(Nheight);
		}else{
			$('.video_con,.wx_list_f').height(1280/1920*800);
		}
	}
	autoheight();
	$(window).resize(function() {
 		autoheight();
	});
	function myBrowser(){
		var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
	    var isOpera = userAgent.indexOf("Opera") > -1;
	    if (isOpera) {
	        return "Opera"
	    }; 
	    if (userAgent.indexOf("Firefox") > -1) {
	        return "FF";
	    } 
	    if (userAgent.indexOf("Chrome") > -1){
		  return "Chrome";
		 }
	    if (userAgent.indexOf("Safari") > -1) {
	        return "Safari";
	    } 
	    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
	    	var IEMethod = userAgent.slice(userAgent.indexOf("MSIE")+5,userAgent.indexOf("MSIE")+6);
	        return IEMethod;
	    };
	}
	
	function stophref(e) {
		if ( e && e.preventDefault ){
			e.preventDefault(); 
		}else{
			window.event.returnValue = false; 
			return false;
		}
	}
	function stopbubble(e) {
		if ( e && e.stopPropagation ){
			e.stopPropagation(); 
		}else{
			window.event.cancelBubble = true;
			return false;
		}
	}

	function setIframeHeight(id){
		try{
			var iframe = document.getElementById(id);
			if(iframe.attachEvent){
				iframe.attachEvent("onload", function(){
					iframe.height =  iframe.contentWindow.document.documentElement.scrollHeight;
				});
				return;
			}else{
				iframe.onload = function(){
					iframe.height = iframe.contentDocument.body.scrollHeight;
				};
				return;				 
			}	 
		}catch(e){
			throw new Error('setIframeHeight Error');
		}
	}
	$('.lake_lunbo_control .lbtn').click(function(){
		$('.lake_con1 .slideBox .prev').trigger('click');
	});
	$('.lake_lunbo_control .rbtn').click(function(){
		$('.lake_con1 .slideBox .next').trigger('click');
	});

	function movescroll(btn,to) {
		$('html,body').animate({scrollTop: $(to).offset().top-60},600);
	}
	$('.lake_header_list li').click(function(){
		var thisIndex = parseInt($('.lake_header_list li').index($(this)));
		switch (thisIndex){
			case 0:
				movescroll($(this),'.lake_con2');
				break;
			case 1:
				movescroll($(this),'.lake_con3');
				break;
			case 2:
				movescroll($(this),'.lake_con4');
				break;
			case 3:
				movescroll($(this),'.lake_con5');
				break;
			default:
				break;
		}
	});

	$('.lake_con4 .rbtn').click(function(){
		if($('.lake_con4 ul').is(":animated")){
			return false;
		} else{
			var indexcop = $('.lake_con4 ul').index($('.lake_con4 .show')),
				lengthcop = $('.lake_con4 ul').length - 1;
			if (lengthcop == indexcop) {
				return false;
			}else{
				$('.lake_con4 .show').removeClass('show');
				$('.lake_con4 .cops').eq(indexcop+1).addClass('show');
			}
		}
	})
	$('.lake_con4 .lbtn').click(function(){
		if($('.lake_con4 ul').is(":animated")){
			return false;
		} else{
			var indexcop = $('.lake_con4 ul').index($('.lake_con4 .show')),
				lengthcop = $('.lake_con4 ul').length - 1;
			if (indexcop == 0) {
				return false;
			}else{
				$('.lake_con4 .show').removeClass('show');
				$('.lake_con4 .cops').eq(indexcop-1).addClass('show');
			}
		}
	})
});