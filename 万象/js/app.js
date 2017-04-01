
$(document).ready(function(){
	function autoheight(){
		var Nwidth = $(window).width(),
			Nheight = Nwidth/1920*800,
			Nheighti = Nwidth/1920*680;
		if (Nwidth > 1280) {
			$('.video_con,.wx_list_f').height(Nheight);
			$('.wx_lunbo .bd li').height(Nheighti);
		}else{
			$('.video_con,.wx_list_f').height(1280/1920*800);
			$('.wx_lunbo .bd li').height(1280/1920*680);
		}
	}
	$('.wlIn li').height($('.wlIn li').width());
	autoheight();
	$(window).resize(function() {
 		autoheight();
	});
	function stop(){
		return false;
	}
	$(document).not($(".contact_bar")).click(function(){
        $(".contact_bar").hide(300);
    });
	document.oncontextmenu=stop;
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
	function movescroll(btn,to) {
		$('html,body').animate({scrollTop: $(to).offset().top-60},600);
	}
	// $('.navlist .list2 a').click(function(e){
	// 	stophref(e);
	// 	var thisIndex = parseInt($('.navlist .list2 li').index($(this).parent()));
	// 	switch (thisIndex){
	// 		case 0:
	// 			movescroll($(this),'.wx_about');
	// 			break;
	// 		case 1:
	// 			movescroll($(this),'.wx_business');
	// 			break;
	// 		case 2:
	// 			movescroll($(this),'.wx_studio');
	// 			break;
	// 		default:
	// 			break;
	// 	}
	// });
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
	$('.wx_business .contact_bar').eq(2).addClass('contact_bar2');
	$('.wx_business .contact_bar').eq(3).addClass('contact_bar2');
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
	$('.wlIn li a').click(function(e){
		stophref(e);
		var tindex = $('.wlIn li').index($(this).parent());
        $('.wlIn li').removeClass('on').eq(tindex).addClass('on');
		$('.workright .hd li').eq(tindex).trigger('click');
	})
	$('.contact_bar .icon_close').click(function(){
		$(this).parents('.contact_bar').hide(500);
	})
	$('#contact a').click(function(e){
		stophref(e);
		$('.header_contact').show(200);
		stopbubble(e) 
	})
	$('.wx_business .btn').click(function(e){
		stophref(e);
		$('.wx_business li').removeClass('on');
		$(this).parent().addClass('on');
		$('.wx_business .contact_bar').hide(200);
		$(this).siblings('.contact_bar').show(200);
		stopbubble(e) 
		
	})
	$('.wx_business .icon_close').click(function(e){
		stophref(e);
		$(this).parents('.contact_bar').hide(200);
	})
	$('.wx_aboutIn .rightde .r a').click(function(e){
		stophref(e);
		var index = $('.wx_aboutIn .rightde .r a').index($(this));
		$('.wx_aboutIn .rightde .l p').removeClass('on').eq(index).addClass('on');
	})
	function headerword(){
		var all =  $('.navlist .list1 span,.navlist .list2 span');
		all.each(function(){
			var length = $(this).text().length;
			switch (length){
				case 3:
					$(this).addClass('ltsp3');
					break;
				case 4:
					$(this).addClass('ltsp4');
					break;
				case 5:
					$(this).addClass('ltsp5');
					break;
				case 6:
					$(this).addClass('ltsp6');
					break;
				case 7:
					$(this).addClass('ltsp7');
					break;
				case 8:
					$(this).addClass('ltsp8');
					break;
				default:
					break;
			}
		})
	}
	headerword();
});