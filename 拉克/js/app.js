
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
});