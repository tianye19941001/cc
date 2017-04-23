$(document).ready(function(){
	// setTimeout(function(){
	// 	$(".red_index_main1 .text").mCustomScrollbar({
	// 		scrollButtons:{
	// 			enable:true
	// 		}
	// 	});
	// },1000)
	// $(window).load(function(){
		
	// });
	var ty_public = { 
		brower: function(){
			var userAgent = navigator.userAgent; 
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
		    }
		},
		stopDefault:function(e){
			if ( e && e.preventDefault ){
				e.preventDefault(); 
			}else{
				window.event.returnValue = false; 
				return false;
			}
		},
		stopBubble:function(e){
			if ( e && e.stopPropagation ){
				e.stopPropagation(); 
			}else{
				window.event.cancelBubble = true;
				return false;
			}
		},
		setCookies: function (c_name,value,expiredays)
		{
			var exdate=new Date();
			exdate.setDate(exdate.getDate()+expiredays);
			document.cookie= c_name+ "=" + escape(value) + ((expiredays==null) ? "" : ";expires="+exdate.toGMTString());
		},
		getCookies: function(c_name){
			if (document.cookie.length>0){
				c_start=document.cookie.indexOf(c_name + "=")
				if (c_start!=-1){ 
				    c_start=c_start + c_name.length+1 
				    c_end=document.cookie.indexOf(";",c_start)
			    	if (c_end==-1) c_end=document.cookie.length
			   		return unescape(document.cookie.substring(c_start,c_end))
			    } 
			}
			return ""
		}
	}
	// 初始化
	// $('.red_lun').height($(window).height());
	function setall(){
		var mainW = $('.red_main').width();
		$('.red_lun,.red_culIN').height(mainW/1676*890);

		var main3 = $('.red_index_main3IN .pic').width();
		$('.red_index_main3IN .picword').height(main3/396*425)

		var about1 = $('.product .proIN').width();
		$('.product .proIN img').height(about1/345*358)

		var about2 = $('.gov .l').width();
		$('.gov,.jidiIn .outer').height(about2)

		var intro2 = $('.wayin').width();
		$('.wayin .img').height(intro2/324*254)
	}
	$(window).resize(function() {
 		setall();
	});
	setall();

	// iframe
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
	$(document).on("click",'.red_new a', function(e){
		ty_public.stopDefault(e);
		$('#ty_iframe').attr('src',$(this).attr('href'));
		$('body').addClass('oh');
		$('.newframe').height("100%").addClass("show");
	});
	
	$('.newframe').on("click",'.close', function(e){
		ty_public.stopDefault(e);
		if ($(this).hasClass('ty_wrapbac')) {
			$(this).parent().removeClass("show");
		}else{
			$(this).parents('.newframe').removeClass("show");
		}
		$('body').removeClass('oh');
	});

	// 
	$('.red_add_more').on("click", function(e){
		ty_public.stopDefault(e);
		var stepMore = 3;
		var nums = parseInt($(".red_new_hide").length);
		if (nums >= stepMore) {
			for (var i = 0; i < stepMore; i++) {
				$(".red_new_hide").eq(0).removeClass('red_new_hide');
			}
		}else if(nums == 0){
			alert("没有更多啦！")
		}else{
			for (var i = 0; i < nums; i++) {
				$(".red_new_hide").eq(0).removeClass('red_new_hide');
			}
		}
	});

	$('#contact a').click(function(e){
		stophref(e);
		$('.header_contact').show(200);
		if ($(".wx_header .contact_bar .con").hasClass('mCustomScrollbar')) {
			return false;
		}else{
			setTimeout(function(){
				$(".wx_header .contact_bar .con").mCustomScrollbar({
					scrollButtons:{
						enable:true
					}
				});
			},100)
			
		}
		stopbubble(e);
	})
	$('.lbtn').click(function(){
		$('.hd .prev').trigger('click')
	})
	$('.rbtn').click(function(){
		$('.hd .next').trigger('click')
	})
	$('.picList img').hover(function(){
		var img1 = $(this).attr('src');
		var img2 = $(this).attr('alt');
		$(this).attr('src',img2);
		$(this).attr('alt',img1);
		// if ($(this).attr('src').indexOf('_hover')<=0) {
		// 	var nSrc = $(this).attr('src');
		// 	$(this).attr('alt',nSrc);
		// 	var mSrcArr =  nSrc.split('.');
		// 	var newSrc = mSrcArr[0]+"_hover."+mSrcArr[1];
		// 	$(this).attr('src',newSrc);
		// }
	})
	$('.picList img').mouseleave(function(){
		var img3 = $(this).attr('src');
		var img4 = $(this).attr('alt');
		$(this).attr('src',img3);
		$(this).attr('alt',img4);
		// $(this).attr('src',$(this).attr('alt'));
	})
	$('.red_index_main2T .tit').click(function(){
		$('.red_index_main2T .tit').removeClass('on');
		$(this).addClass('on')
	})
	$('.detialselect').click(function(){
		var index = $('.detialselect').index($(this));
		$('.detialselect').removeClass('on').eq(index).addClass('on');
		$('.detialmain').removeClass('on').eq(index).addClass('on');
	})
});