
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
	$('.lake_lunbo_control .lbtn').click(function(){
		$('.slideBox .prev').trigger('click');
	});
	$('.lake_lunbo_control .rbtn').click(function(){
		$('.slideBox .next').trigger('click');
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
	$(window).scroll(function() {
  		var listNT = parseInt(document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop);
  		var t1 = parseInt($('.lake_con2').offset().top),
  			t2 = parseInt($('.lake_con3').offset().top),
  			t3 = parseInt($('.lake_con4').offset().top),
  			t4 = parseInt($('.lake_con5').offset().top);
  		if ( t2 > listNT  && listNT > t1 ) {
  			console.log(110);
  			$('.lake_header_list li').eq(0).addClass('on').siblings().removeClass('on');
  		}else if( t3 > listNT  && listNT > t2 ){
  			$('.lake_header_list li').eq(1).addClass('on').siblings().removeClass('on');
  		}else if( t4 > listNT  && listNT > t3 ){
  			$('.lake_header_list li').eq(2).addClass('on').siblings().removeClass('on');
  		}else if( listNT > t4 ){
  			$('.lake_header_list li').eq(3).addClass('on').siblings().removeClass('on');
  		}
	});
});