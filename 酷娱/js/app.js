
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
	if ($('.happy_we_people .name .p2')) {
		$('.happy_we_people .name .p2').each(function(){
			if($(this).text().length>4){
				$(this).width(40)
			}
		})
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
	$('.ty_flipster .lbtn,.happy_lr_btns .leftbtn').click(function(){
		$('.flip-prev').trigger('click');
		$('.slideBox .prev').trigger('click');
	});
	$('.ty_flipster .rbtn,.happy_lr_btns .rightbtn').click(function(){
		$('.flip-next').trigger('click');
		$('.slideBox .next').trigger('click');
	});
	if ($('.ty_flipster').length > 0) {
		flipIn = setInterval(function(argument) {
			$('.flip-next').trigger('click');
		},4000);
	}
	$('.flipster').hover(function(){
		clearInterval(flipIn);
	})
	$('.flipster').mouseleave(function(){
		flipIn = setInterval(function(argument) {
			$('.flip-next').trigger('click');
		},4000);
	})
	$('.happy_ZP_thing .icon_down').click(function(){
		if ($(this).parent().parent().hasClass('on')) {
			$(this).parent().parent().removeClass('on');
		}else{
			$(this).parent().parent().addClass('on');	
		}
	});
	$('#ty_iframe').load(
        function(){
        	if ($(this).contents().find("body").find('.newframe_about').length > 0) {
	            $(this).height($(this).contents().find("body").find(".news-article").height() + 15);  
        	}else{
	            $(this).height($(this).contents().find("body").find(".news-article").height() + 50);  
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
		var minH = $(window).height();
		$(".ty_wrapbac").css('min-height',minH+'px');
		$(".ty_wrapbac").height($('#ty_iframe').height() + 70);
		var openH = $('.open-news').height();
		if (openH<minH) {
			$('.inner-right').css('margin-left',"470px");
		}else{
			$('.inner-right').css('margin-left',"462px");
		}
	},200);
    $('.intro_con_t .dian i').click(function() {
    	$('.intro_con_t .dian i').removeClass('on');
    	$('.intro_con_t .text').hide(100);
    	$(this).addClass('on');
    	var index = $('.intro_con_t .dian i').index($(this));
    	$('.intro_con_t .text').eq(index).show(300);
    });
	$(document).on("click",'.happy_small_dy a,.happy_big_dy a,.happy_we_leader a,.flipster a,.happy_index_bottoms li a,.happy_we_people a,.intro_con_t .ty_more,.intro_con_m a,.intro_top .bd a,.happy_where_bottom a', function(e){
		stophref(e);
		$('#ty_iframe').attr('src',$(this).attr('href'));
		$('body').addClass('oh');
		$('.newframe').height("100%").addClass("show");
	});
	
	$('.newframe').on("click",'.close', function(e){
		stophref(e);
		if ($(this).hasClass('ty_wrapbac')) {
			$(this).parent().removeClass("show");
		}else{
			$(this).parents('.newframe').removeClass("show");
		}
		$('body').removeClass('oh');
	});
	$('.ty_moreB').on("click", function(e){
		stophref(e);
		var stepMore = 3;
		var nums = parseInt($(".happy_con_in_hide").length);
		if (nums >= stepMore) {
			for (var i = 0; i < stepMore; i++) {
				$(".happy_con_in_hide").eq(0).removeClass('happy_con_in_hide');
			}
		}else if(nums == 0){
			alert("没有更多啦！")
		}else{
			for (var i = 0; i < nums; i++) {
				$(".happy_con_in_hide").eq(0).removeClass('happy_con_in_hide');
			}
		}
	});
	function cuoluo(){
		$(".happy_small_dy").removeClass('type2');
		var len = $(".happy_small_dy").length;
		if (document.body.clientWidth>=1800) {
			$(".happy_small_dy").eq(2).addClass('type2');
			$(".happy_small_dy").eq(3).addClass('type2');
			var step = 6,
				top = 4;
			if (len>top) {
				for (var i = 0; i <= (len-top) ; i++) {
					if ((i%step)>(step/2)||(i%step)==0) {
						$(".happy_small_dy").eq(i+top-1).addClass('type2');
					}
				}
			}
		}else{
			$(".happy_small_dy").eq(1).addClass('type2');
			var step = 4,
				top = 2;
			if (len>top) {
				for (var i = 0; i <= (len-top) ; i++) {
					if ( (i%step)>(step/2) || (i%step)==0) {
						$(".happy_small_dy").eq(i+top-1).addClass('type2');
					}
				}
			}
		}
	}
	$(window).resize(function() {
 		cuoluo();
	});
	cuoluo();
	$('.happy_cooplist img').hover(function(){
		if ($(this).attr('src').indexOf('_hover')<=0) {
			var nSrc = $(this).attr('src');
			$(this).attr('alt',nSrc);
			var mSrcArr =  nSrc.split('.');
			var newSrc = mSrcArr[0]+"_hover."+mSrcArr[1];
			$(this).attr('src',newSrc);
		}
	})
	$('.happy_cooplist img').mouseleave(function(){
		$(this).attr('src',$(this).attr('alt'));
	})
});