
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
	function adddelay(obj,time){
		if (obj.length>0) {
			for (var i = 0; i < obj.length; i++) {
				obj.eq(i).addClass('an_delay'+(i*time+3));
			}
		}
	}

	function addMore(element,step) {
		var allLength = element.length;
		var eleHide = element.filter('.none').length;
		if(eleHide > 0) {
            for (var i = 0; i < step; i++) {
                element.eq(allLength - eleHide + i).removeClass('none')
            }
        }else {
			alert('没有可以加载的内容了！')
		}
    }

	if (document.body.clientWidth>=768) {

		function initBefore(){
			// 浏览器hack
			if (myBrowser() == '8' ) {
				$('.ty_index_good img,.swiper-slide img').css('left','0');
			}
			adddelay($('.ty_sdv_In_list li'),2)
			adddelay($('.ty_cases .type2 .list'),2)
			adddelay($('.ty_cases .type3 li'),3)
			adddelay($('.ty_togo_ani .togo_ani1 .togo li'),2);
			adddelay($('.ty_togo_ani .togo_ani2 .togo li'),2);
		}
		initBefore();
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
	        addAnimate($('.ty_cases .type1 .left'),'an_toTop');
	        addAnimate($('.ty_cases .type1 .right'),'an_toTop');
	        addAnimate($('.ty_cases .type2 .list'),'an_toTop');
	        addAnimate($('.ty_cases .type3 li'),'an_toTop');

	        addAnimate($('.ty_daliimg .img_top'),'an_toBottom');
	        addAnimate($('.ty_daliimg .img_left'),'an_toRight');
	        addAnimate($('.ty_daliimg .img_right'),'an_toLeft');
	        addAnimate($('.ty_daliimg .img_middle'),'an_show');
	        addAnimate($('.ty_daliimg .img_bottom'),'an_toTop');
	        addAnimate($('.ty_daili_bottom .main li'),'an_toTop');
	        addAnimate($('.ty_togo_ani .togo li'),'an_toRight');
		}
	}else{
        fnResize();
        window.addEventListener("resize", function() {
            fnResize()
        }, false);

        function fnResize(){
            var docWidth = document.documentElement.clientWidth,
                body = document.getElementsByTagName('html')[0];
            body.style.fontSize = docWidth / 32 + 'px';
        }
        $('.ty_daliimg').css({'transform':'scale(' + $(window).width()/1228 +')','-webkit-transform':'scale(' + $(window).width()/1228 +')'})

        function addAnimate(elem,Class,count,nums){
			if(elem.length > 0){
				var offsetT = elem.offset().top;
				var overHeight = $(document).scrollTop() + $(window).height() - 10;
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
			addAnimate($('.ty_index_nums li').eq(1),'an_toTop','ty_num2',2);
			addAnimate($('.ty_index_nums li').eq(2),'an_toTop','ty_num3',3);
			addAnimate($('.ty_index_aboutIn img'),'an_toTop');
			addAnimate($('.ty_index_aboutIn .right'),'an_toTop');
			addAnimate($('.ty_index_aboutIn .more'),'an_toTop');
			addAnimate($('.ty_index_solutions .bottom').eq(0),'an_toTop');
			addAnimate($('.ty_index_solutions .bottom').eq(1),'an_toTop');
			addAnimate($('.ty_index_solutions .top .left').eq(0),'an_toTop');
			addAnimate($('.ty_index_solutions .top .left').eq(1),'an_toTop');
			addAnimate($('.ty_index_solutions .top ul').eq(0),'an_toTop');
			addAnimate($('.ty_index_solutions .top ul').eq(1),'an_toTop');
			addAnimate($('.ty_index_goodIn .adv'),'an_toTop');
			addAnimate($('.ty_index_goodIn .advs'),'an_toTop');
			addAnimate($('.ty_index_goodIn .more'),'an_toTop');
			addAnimate($('.ty_index_good img'),'an_show');
			addAnimate($('.ty_connectIn .left'),'an_toTop');
			addAnimate($('.ty_connectIn .right'),'an_toTop');
			addAnimate($('.ty_about_text .ty_top'),'an_toTop');
	        addAnimate($('.ty_about_text p').eq(0),'an_toTop');
	        addAnimate($('.ty_news_list .lists li'),'an_toTop');
	        addAnimate($('.ty_news_list h4'),'an_toTop');
	        addAnimate($('.ty_news_list p'),'an_toTop');
	        addAnimate($('.ty_news_list img'),'an_toTop');
	        addAnimate($('.ty_connect_page .left'),'an_toTop');
	        addAnimate($('.ty_connect_page .right'),'an_toTop');
	        addAnimate($('.ty_sdv_In_list li'),'an_toTop');
	        addAnimate($('.ty_cases .type1 .left'),'an_toTop');
	        addAnimate($('.ty_cases .type1 .right'),'an_toTop');
	        addAnimate($('.ty_cases .type2 .list'),'an_toTop');
	        addAnimate($('.ty_cases .type3 li'),'an_toTop');

	        addAnimate($('.ty_daliimg .img_top'),'an_toBottom');
	        addAnimate($('.ty_daliimg .img_left'),'an_toTop');
	        addAnimate($('.ty_daliimg .img_right'),'an_toTop');
	        addAnimate($('.ty_daliimg .img_middle'),'an_show');
	        addAnimate($('.ty_daliimg .img_bottom'),'an_toTop');
	        addAnimate($('.ty_daili_bottom .main li'),'an_toTop');
	        addAnimate($('.ty_togo_ani .togo li'),'an_toTop');
		}
		$('.ty_phone_header .menu').click(function(){
			if ($('.ty_phone_header>ul').hasClass('on')) {
                $('.ty_phone_header>ul').removeClass('on').css({'left':'-25rem'});
                $('body,.menu').css({'margin-left':'0'})
                $('.mark').hide(0);
			}else{
				$('.ty_phone_header>ul').addClass('on').css({'left':'0'});
				$('body,.menu').css({'margin-left':'25rem'})
				$('.mark').show(0);
			}
		});
		$('.ty_phone_header .mark').click(function () {
            $('.ty_phone_header .menu').trigger('click')
        })
        $('.ty_phone_header>ul>li').click(function (e) {
			var index = $(this).index();
			if (index == 1 || index == 2){
				stophref(e);
				if ($(this).hasClass('on')){
                    $(this).removeClass('on').find('ul').slideUp().removeClass('cur');
				}else{
                    $(this).siblings().removeClass('on').find('ul').slideUp().removeClass('cur')
                    $(this).addClass('on').find('ul').slideDown().addClass('cur');
				}

			}
        })
        $('.ty_phone_header>ul>li li').click(function (e) {
			stopbubble(e)
        })
	}

	function resize(){
		var ScreenW = $(window).width();
		var ttiles = $('.ty_news_list .titles') || $('.ty_daili_list .ty_case_titles');
		if (ttiles.text() != ''){
            if ( 768 < ScreenW &&  ScreenW < 1500 ) {
                $('.ty_news_list .titles,.ty_daili_list .ty_case_titles').addClass('titles2');
            }else{
                $('.ty_news_list .titles,.ty_daili_list .ty_case_titles').removeClass('titles2');
            }
        }
		// everyinit();
	}
	resize();
	init();

	window.onresize = function(){
		resize();
	}
	if ($('.ty_news_list .titles').length>0) {
		NoffsetT = $('.ty_news_list .titles').offset().top;
		moveE = $('.ty_news_list .titles');
	}else if($('.ty_daili_list .ty_case_titles').length>0){
		NoffsetT = $('.ty_daili_list .ty_case_titles').offset().top;
		moveE = $('.ty_daili_list .ty_case_titles');
	}else{
		moveE = null;
	}
	$(window).scroll(function() {
  		init();
  		if (document.body.clientWidth>=768) {
  			if (moveE != undefined) {
				var overHeight = $(document).scrollTop();
				if (NoffsetT<overHeight) {
					moveE.addClass('nav_fix');
					$('.ty_news_list .nav').addClass('nav_st');
				}else{
					moveE.removeClass('nav_fix');
					$('.ty_news_list .nav').removeClass('nav_st');
				}
  			}
	  		var listNT = parseInt(document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop);
	  		if ($('#import1').length>0) {
		  		var t1 = parseInt($('#import1').offset().top-200),
		  			t2 = parseInt($('#import2').offset().top-200),
		  			t4 = parseInt($('#import3').offset().top-200);
			  		if ( t2 > listNT  && listNT > t1 ) {
			  			$('.ty_case_titles li a').eq(0).addClass('on').parent().siblings().find('a').removeClass('on');
			  		}else if( t4 > listNT  && listNT > t2 ){
			  			$('.ty_case_titles li a').eq(1).addClass('on').parent().siblings().find('a').removeClass('on');
			  		}else if( t4 < listNT ){
			  			$('.ty_case_titles li a').eq(2).addClass('on').parent().siblings().find('a').removeClass('on');
			  		}
			  		
	  		}else if($('#export1').length>0){
	  			var t1 = parseInt($('#export1').offset().top-200),
		  			t2 = parseInt($('#export2').offset().top-200),
		  			t4 = parseInt($('#export3').offset().top-200);
		  			if ( t2 > listNT  && listNT > t1 ) {
			  			$('.ty_case_titles li a').eq(0).addClass('on').parent().siblings().find('a').removeClass('on');
			  		}else if( t4 > listNT  && listNT > t2 ){
			  			$('.ty_case_titles li a').eq(1).addClass('on').parent().siblings().find('a').removeClass('on');
			  		}else if( t4 < listNT ){
			  			$('.ty_case_titles li a').eq(2).addClass('on').parent().siblings().find('a').removeClass('on');
			  		}
			  		
	  		}
  		}

	});
	// 事件监听
	$('.ty_index_solutions li').click(function(){
		tabsChange($(this),$(this).parents('.top').siblings('.bottom').find('li'));
	})
	$('#more_new').click(function (e) {
		stophref(e);
		addMore($('.ty_news_list .lists li'),3);
    })
    $('#more_sol').click(function (e) {
        stophref(e);
        addMore($('.ty_sdv_In_list li'),3);
    })
    $('#more_solution').click(function (e) {
        stophref(e);
        addMore($('.solutions_lists li'),3);
    })
	$('.ty_main_titles li a').click(function(e){
		if ($(this).attr('href').indexOf('#') == 0) {
			stophref(e);
			movescroll($(this),$(this).attr('href'));
		}
	});

	if ($('.ty_dialog').length>0) {
		var map = new BMap.Map("container");
	    // 洪泽湖坐标
	    var point = new BMap.Point(116.299818,39.94346);
	    map.centerAndZoom(point, 12);
	    map.addControl(new BMap.ScaleControl());
	    map.addControl(new BMap.OverviewMapControl());
	    map.addControl(new BMap.MapTypeControl());
	    //启用滚动放大
	    map.enableScrollWheelZoom()
	    // 创建标注
	    var marker = new BMap.Marker(point);
	    marker.enableDragging();
	    //本地搜索
	    var local = new BMap.LocalSearch(map, {
	        renderOptions: {map: map}
	    });
	    local.search('北京时代远望科技有限公司');

	    //驾车路线
	    var driving = new BMap.DrivingRoute(map, {
	        renderOptions: {
	            map: map,
	            autoViewport: true,
	            panel: "r-results"
	        }
	    });
	    //步行路线
	    var walking = new BMap.WalkingRoute(map, {
	        renderOptions: {
	            map: map,
	            panel: "r-results"
	        }
	    });
	    //公交路线
	    var transit = new BMap.TransitRoute(map, {
	        renderOptions: {map: map, panel: "r-results"}
	    });
	    $(function () {
	        // 行车
	        $('#car').on('click', function () {
	            driving.search($('#star').val(), $('#end').val());
	            $('#r-results').show();
	        })
	        // 公交
	        $('#bus').on('click', function () {
	            transit.search($('#bStar').val(), $('#bEnd').val());
	            $('#r-results').show();
	        })
	        // 步行
	        $('#walk').on('click', function () {
	            walking.search($('#wStar').val(), $('#wEnd').val());
	            $('#r-results').show();
	        })
	    })
	    $("#show").on('click', function () {
	        $('.pageShow').slideToggle();
	    })
	    $('#close').on('click', function () {
	    	$('.ty_dialog').hide();
	    })
        $('#close').on('click', function () {
            $('.ty_dialog').hide();
        })
	    $('#map').on('click', function () {
	    	local.search('北京时代远望科技有限公司');
	    	$('.ty_dialog').show();
	    })
	}

});