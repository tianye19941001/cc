
$(document).ready(function(){
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

	function resize(){
		var ScreenW = $(window).width();
		$('.ty_header .logo').css('margin-left',ScreenW/1920*10+'%')
		$('.ty_header ty_Hlist').css('margin-left',ScreenW/1920*8+'%')
	}
	resize()
	window.onresize = function(){
		resize();
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
				movescroll($(this),'.lake_con5');
				break;
			default:
				break;
		}
	});
	$(window).scroll(function() {
  		
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
	$('.cops img').hover(function(){
		if ($(this).attr('src').indexOf('_hover')<=0) {
			var nSrc = $(this).attr('src');
			$(this).attr('alt',nSrc);
			var mSrcArr =  nSrc.split('.');
			var newSrc = mSrcArr[0]+"_hover."+mSrcArr[1];
			$(this).attr('src',newSrc);
		}
	})
	$('.cops img').mouseleave(function(){
		$(this).attr('src',$(this).attr('alt'));
	})
});