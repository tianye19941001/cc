
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
	$(".tt_header .menu,.ty_dialog .menu").click(function(){
		if ($('.ty_dialog').hasClass('ty_show')) {
			$('.ty_dialog').slideUp(300).removeClass('ty_show');
		}else{
			$('.ty_dialog').slideDown(300).addClass('ty_show');
		}
	});
	$(".works a").click(function(e){
		stophref(e);
		var imgw = $(this).attr('href');
		$('.ty_dialog2 img').attr("src",imgw);
		$('.ty_dialog2').fadeIn(500);
	});
	$(".ty_dialog2 .close").click(function(e){
		$('.ty_dialog2').fadeOut(500);
	});
	$(window).scroll(function() {
  		var listNT = parseInt(document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop),
  			NH = parseInt(document.body.offsetHeight),
  			WH = parseInt(document.documentElement.clientHeight);
  		if((NH-listNT-WH)<200){
  			$('.tt_down').hide(100);
  		}else{
  			$('.tt_down').show(100);
  		}
	});
	$('.tt_down').click(function(e){
		stophref(e);
		var listNT = parseInt(document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop);
		$('html,body').animate({scrollTop: listNT+300},600);
	})
	$('.ty_dialog .listB a').click(function(){
		$('.ty_dialog').slideUp(300).removeClass('ty_show');
	})
});