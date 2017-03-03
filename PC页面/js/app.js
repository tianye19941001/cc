
$(document).ready(function(){
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
	  		if (listNT>listTop) {
	  			$(".ty_about_con .menu").css({
	  				"position":"fixed",
	  				"top":"0"
	  			})
	  		}else{
	  			$(".ty_about_con .menu").css("position","relative")
	  		}
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
			if ($(this).hasClass('imgs')) {
				var itname = "." + $(this).parent().attr("id");
			}else{
				var itname = "." + $(this).parent().parent().attr("id");
			}
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
		$(document).on("touchend",'.phone_menu', function(e){
			stophref(e);
			$(".ty_listbar .list1").addClass("showlist");
			$(".ty_phone_bac").show();
		});
		$(document).on("touchend",'.ty_phone_bac', function(e){
			stophref(e);
			$(".ty_listbar .list1").removeClass("showlist");
			$(".ty_phone_bac").hide();
		});
		$(document).on("touchend",'.ty_phone_title', function(e){
			stophref(e);
			if ($(this).hasClass("up")) {
				$(this).removeClass("up");
				$(".ty_content .menu").slideUp();
			}else{
				$(this).addClass("up");
				$(".ty_content .menu").slideDown();
			}
		});
	}

});