
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
	// 浏览器hack
	function initBefore(){
		if (myBrowser() == '8' ) {
			$('.ty_index_good img,.swiper-slide img').css('left','0');
		}
		if ($('.ty_sdv_In_list li').length>0) {
			for (var i = 0; i < $('.ty_sdv_In_list li').length; i++) {
				$('.ty_sdv_In_list li').eq(i).addClass('an_delay'+(i*3+3));
			}
		}
		
	}
	initBefore();
	function movescroll(btn,to) {
		$('html,body').animate({scrollTop: $(to).offset().top-60},600);
	}

	function tabsChange(ClickE,ChangeE){
		var indexIt = ClickE.index();
		ClickE.siblings().removeClass('on');
		ClickE.addClass('on');
		console.log(indexIt)
		ChangeE.fadeOut(300);
		setTimeout(function(){
			ChangeE.eq(indexIt).fadeIn(300);
		},300)
	}


	function addAnimate(elem,Class,count,nums){
		if(elem.length > 0){
			var offsetT = elem.offset().top;
			var overHeight = $(document).scrollTop() + $(window).height() - 80;
			if (elem.length>1){
				for( var i = 0; i < elem.length; i++ ){
					if (overHeight> elem.eq(i).offset().top){
                        if (!elem.eq(i).hasClass(Class)) {
							elem.eq(i).addClass(Class);
                        }
					}
				}
			}else{
				if ( overHeight > offsetT ) {
                    if (!elem.hasClass(Class)) {
                        elem.addClass(Class);
                        if (count) {
                            var options = {
                                useEasing : true,
                                useGrouping : true,
                                separator : ',',
                                decimal : '.',
                            };
                            var number = parseInt($('#'+count).text());
                            var numCount = new CountUp(count, 0, number, 0, 2.5, options);
                            numCount.start()
                        }
                    }

                }

			}
		}
	}
	function init(){
		addAnimate($('.ty_index_nums li').eq(0),'an_toTop','ty_num1',1);
		addAnimate($('.ty_index_nums li').eq(1),'an_delay3 an_toTop','ty_num2',2);
		addAnimate($('.ty_index_nums li').eq(2),'an_delay7 an_toTop','ty_num3',3);
		addAnimate($('.ty_index_aboutIn img'),'an_toTop');
		addAnimate($('.ty_index_aboutIn .right'),'an_delay4 an_toTop');
		addAnimate($('.ty_index_aboutIn .more'),'an_delay5 an_toTop');
		addAnimate($('.ty_index_solutions .bottom').eq(0),'an_delay2 an_toTop');
		addAnimate($('.ty_index_solutions .bottom').eq(1),'an_delay2 an_toTop');
		addAnimate($('.ty_index_solutions .top .left').eq(0),'an_delay2 an_toRight');
		addAnimate($('.ty_index_solutions .top .left').eq(1),'an_delay2 an_toRight');
		addAnimate($('.ty_index_solutions .top ul').eq(0),'an_delay2 an_toLeft');
		addAnimate($('.ty_index_solutions .top ul').eq(1),'an_delay2 an_toLeft');
		addAnimate($('.ty_index_goodIn .adv'),'an_delay2 an_toTop');
		addAnimate($('.ty_index_goodIn .advs'),'an_delay5 an_toTop');
		addAnimate($('.ty_index_goodIn .more'),'an_delay5 an_toTop');
		addAnimate($('.ty_index_good img'),'an_delay2 an_show');
		addAnimate($('.ty_connectIn .left'),'an_delay2 an_toRight');
		addAnimate($('.ty_connectIn .right'),'an_delay2 an_toLeft');
		addAnimate($('.ty_about_text .ty_top'),'an_delay2 an_toRight');
        addAnimate($('.ty_about_text p').eq(0),'an_delay2 an_toTop');
        addAnimate($('.ty_news_list .lists li'),'an_delay2 an_toTop');
        addAnimate($('.ty_news_list h4'),'an_delay2 an_toRight');
        addAnimate($('.ty_news_list p'),'an_delay2 an_toLeft');
        addAnimate($('.ty_news_list img'),'an_delay2 an_toTop');
        addAnimate($('.ty_connect_page .left'),'an_delay2 an_toLeft');
        addAnimate($('.ty_connect_page .right'),'an_delay2 an_toRight');
        addAnimate($('.ty_sdv_In_list li'),'an_toTop');
	}

	function resize(){
		var ScreenW = $(window).width();
		// $('.ty_header .logo').css('margin-left',ScreenW/1920*10+'%')
		// $('.ty_header ty_Hlist').css('margin-left',ScreenW/1920*8+'%')
	}
	resize();
	init();
	window.onresize = function(){
		resize();
	}
	$(window).scroll(function() {
  		init();
	});

	// 事件监听
	$('.ty_index_solutions li').click(function(){
		tabsChange($(this),$(this).parents('.top').siblings('.bottom').find('li'));
	})


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
});