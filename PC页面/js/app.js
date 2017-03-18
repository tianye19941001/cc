
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
	$('#ty_iframe').load(
        function(){
        	if ($(this).contents().find("body").find('.newframe_about').length > 0) {
	            $(this).height($(this).contents().find("body").find(".news-article").height() + 15);  
        	}else{
	            $(this).height($(this).contents().find("body").find(".news-article").height() + 55);  
        	}
			var minH = $(window).height();
			$(".ty_wrapbac").css('min-height',minH+'px');
			$(".ty_wrapbac").height($('#ty_iframe').height() + 70);
        }
    );
    var iframeit  = setInterval(function(){
    	if ($('#ty_iframe').length>0 && $('#ty_iframe').attr('src')!='#') {
    		if ($('#ty_iframe').contents().find("body").find('.newframe_about').length > 0) {
    			if ($('#ty_iframe').height()==($('#ty_iframe').contents().find("body").find(".news-article").height() + 15)) {
    				return false;
    			}else{
    				$('#ty_iframe').height($('#ty_iframe').contents().find("body").find(".news-article").height() + 15); 
    			}
	             
	    	}else{
	            if ($('#ty_iframe').height()==($('#ty_iframe').contents().find("body").find(".news-article").height() + 55)) {
    				return false;
    			}else{
    				$('#ty_iframe').height($('#ty_iframe').contents().find("body").find(".news-article").height() + 55); 
	    		}
	    	}
    	}else if($('#ty_iframe').attr('src')=='#'){
    		return false;
    	}else if($('#ty_iframe').length=0){
    		clearInterval(iframeit);
    	}
	},300);
	$('.ty_more').on("click", function(e){
		stophref(e);
		var stepMore = 6;
		var nums = parseInt($(".ty_small_con_hide").length);
		if (nums >= stepMore) {
			for (var i = 0; i < stepMore; i++) {
				$(".ty_small_con_hide").eq(0).removeClass('ty_small_con_hide');
			}
		}else if(nums == 0){
			alert("没有更多啦！")
		}else{
			for (var i = 0; i < nums; i++) {
				$(".ty_small_con_hide").eq(0).removeClass('ty_small_con_hide');
			}
		}
	});
	if ( myBrowser() == 8 ) {
		var clentWidth = document.body.clientWidth;
		$(".ty_all").css("min-width","1270px");
		if (clentWidth >= 1880) {
			$(".ty_all,.ty_content,.ty_footerIn").css("width","1800px");
			$(".ty_footer").css("min-width","1800px");
		}else if( 1880 > clentWidth >= 1500 ){
			$(".ty_all,.ty_content,.ty_footerIn").css("width","1500px");
			$(".ty_footer").css("min-width","1500px");
		}else if( 1500 > clentWidth >= 0 ){
			$(".ty_all,.ty_content,.ty_footerIn").css("width","1200px");
			$(".ty_footer").css("min-width","1200px");
		}
	}
	if (document.body.clientWidth>=768) {

		$('#ty_tb').click(function(e){
			stophref(e);
			$('html,body').animate({scrollTop: $('.ty_footer').offset().top},600);
		});
		$(window).scroll(function() {
	  		var listTop = 240;
	  		var listNT = parseInt(document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop);
	  		(listNT>listTop)? $(".ty_about_con .menu").css({"position":"fixed","top":"0"}) : $(".ty_about_con .menu").css("position","relative");
		});
		$(".ty_service_list li").on("hover mousemove", function(){
			if($(".ty_service_list .arrow").is(":animated")){
				return false;
			} else{
				var step = 132;
				var index = $(".ty_service_list li").index($(this));
				$(".ty_service_list .arrow").animate({top:index*step+"px"});
				$(".ty_service_list .arrow .arrow-t").eq(0).animate({ 'margin-top' : -index*step+"px"});
			}
		});
		$(document).on("click",'.ty_big_con .imgs,.ty_small_con .imgs,.ty_small_con h3 a,.ty_detial2 .person li a', function(e){
			stophref(e);
			$('#ty_iframe').attr('src',$(this).attr('href'));
			$('#ty_iframe').height(1000);
			$('body').addClass('oh');
			$('.newframe').height("100%").addClass("show");
			
		});
		
		$('.newframe').on("click",'.ty_wrapbac,.close', function(e){
			stophref(e);
			if ($(this).hasClass('ty_wrapbac')) {
				$(this).parent().removeClass("show");
			}else{
				$(this).parents('.newframe').removeClass("show");
			}
			$('body').removeClass('oh');
		});
		
	}else{
		$('#ty_tb').click(function(e){
			stophref(e);
			$('html,body').animate({scrollTop: $('.ty_footer').offset().top},600);
			$(".ty_listbar .list1").removeClass("showlist");
			$(".ty_phone_bac").hide();
		});
		$(document).on("click",'.phone_menu', function(e){
			stophref(e);
			$(".ty_listbar .list1").addClass("showlist");
			$(".ty_phone_bac").show();
		});
		$(document).on("click",'.ty_phone_bac', function(e){
			stophref(e);
			$(".ty_listbar .list1").removeClass("showlist");
			$(".ty_phone_bac").hide();
		});
		$(document).on("click",'.ty_phone_title', function(e){
			if ($(this).hasClass("up")) {
				$(this).removeClass("up");
				$(".ty_content .menu").slideUp();
			}else{
				$(this).addClass("up");
				$(".ty_content .menu").slideDown();
			}
		});
		$(".ty_small_con img").height($(".ty_small_con img").width());
		$(".ty_big_con img").height($(".ty_big_con img").width()/290*176);
		$(document).on("click",'.ty_big_con .imgs,.ty_small_con .imgs,.ty_small_con h3 a,.ty_detial2 .person li a', function(e){
			stophref(e);
			$('#ty_iframe').attr('src',$(this).attr('href'));
			$('.newframe').addClass("show");
			$(".ty_detial2,.ty_footer,.ty_small_con,.ty_big_con").hide();
		});
	}

});