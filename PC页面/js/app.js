
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
	alert(myBrowser());
	function stophref(e) {
		if ( e && e.stopPropagation ){
			e.stopPropagation(); 
		}else{
			window.event.cancelBubble = true;
			return false;
		}
	}
	if (document.body.clientWidth>=768) {
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
		$(document).on("click",'.ty_big_con .imgs,.ty_small_con .imgs,.ty_small_con h3 a', function(e){
			stophref(e);
			$(this).hasClass('imgs')? itname = "." + $(this).parent().attr("id") : itname = "." + $(this).parent().parent().attr("id");
			$(itname).addClass("show");
		});
		$('.newframe').on("click",'.ty_wrapbac,.close', function(e){
			stophref(e);
			if ($(this).hasClass('ty_wrapbac')) {
				$(this).parent().removeClass("show");
			}else{
				$(this).parents('.newframe').removeClass("show");
			}
		});
	}else{
		$(document).on("click",'.phone_menu', function(e){
			stophref(e);
			$(".ty_listbar .list1").addClass("showlist");
			$(".ty_phone_bac").show();
		});
		$(document).on("touchend click",'.ty_phone_bac', function(e){
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
		$(document).on("click",'.ty_big_con .imgs,.ty_small_con .imgs,.ty_small_con h3 a', function(e){
			stophref(e);
			$(this).hasClass('imgs')? itname = "." + $(this).parent().attr("id") : itname = "." + $(this).parent().parent().attr("id");
			$(itname).addClass("show");
			$(".ty_content,.ty_more,.ty_footer").hide();
		});
	}

});