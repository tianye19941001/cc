 $(document).ready(function(){
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
	function Resize(){
		var ScreenWidth =  $(window).width();
		if (ScreenWidth>1300) {
			$('.md_swiper img,.md_bannar_PDD img').height(ScreenWidth/1920*650);
		}else{
			$('.md_swiper img,.md_bannar_PDD img').height(1300/1920*650);
		}
		if ( ScreenWidth < 1665) {
			$('.md_PR_list li').eq(3).css('display','none');
			$('.md_PR_list').width(1665-45-380);
		}
		if ( ScreenWidth < 1370) {
			$('.lbtn').css('left','-60px');
			$('.rbtn').css('right','-60px');
		}else{
			$('.lbtn').css('left','-100px');
			$('.rbtn').css('right','-100px');
		}
	}
	Resize();
	$(window).resize(function(){
    	Resize();
	});

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
	})
	$('.picList img').mouseleave(function(){
		var img3 = $(this).attr('src');
		var img4 = $(this).attr('alt');
		$(this).attr('src',img3);
		$(this).attr('alt',img4);
		// $(this).attr('src',$(this).attr('alt'));
	})

	if (document.body.clientWidth>=768) {
		$('.red_nav .logo').css('margin','34px 0 20px')
		if ($('.picScroll-left').length>0) {
			jQuery(".picScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:5,trigger:"click"});
		}
		$('.md-news-in .lf').html($('.md-news-in li').eq(0).html());
		$('.md-news-in li').hover(function(){
			$(this).addClass('on').siblings().removeClass('on');
			$('.md-news-in .lf').html($(this).html());
		});
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
		if ($('.picScroll-left').length>0) {
			jQuery(".picScroll-left").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"left",autoPlay:true,vis:2,trigger:"click"});
		}

		$('body').on('click','.icon_menu',function(){
  		$('html,body').animate({scrollTop: 0},600);
  		if($('.md_head').hasClass('open-nav')){
  			$('.md_head').removeClass('open-nav');
  			$('body').removeClass('oh')
  		}else{
  			$('.md_head').addClass('open-nav');
  			$('body').addClass('oh')
  		}
  	})
	}

	// 动画延时函数
	function adddelay(obj,time){
		if (obj.length>0) {
			for (var i = 0; i < obj.length; i++) {
				obj.eq(i).addClass('an_delay'+(i*time+3));
			}
		}
	}

	// 动画增加函数
	function addAnimate(elem,Class,count,nums){
		if( elem.length > 0){
			var offsetT = elem.offset().top;
			var overHeight = $(document).scrollTop() + $(window).height() - 80;
			if (elem.length>=1){
				for( var i = 0; i < elem.length; i++ ){
					if (overHeight > elem.eq(i).offset().top){
						if (!elem.eq(i).hasClass(Class)) {
							elem.eq(i).addClass(Class);
						}
					}
				}
			}
		}
	}

	// 动画
	function animateInit(){
		var toTop = '.card,.md_CMP_about li,.bottom-connect form,.md_index_about a,.md_PDR_list li,.swiper-slide,.md_bannar_PDD2,.md-nav,.md-list-text h3,.md-list-text p,.md-list-text img';
		var toLeft = '.md_CMP_deIn .de,.md_CMP_honour li,.qj-in p,.md_index_about img,.md-news-in .rf,.md-list-con li,.md_xyl_bottom i,.yds-list li,.md_yly-about .r-text,.yw_in .big';
		var toRight = '.md_CMP_deIn img,.qj-in h3,.numberBar,.md-news-in .lf,.hsxx-all .big,.yyxl-in li,.md_xyl_videos li,.md_xyl_bottom .text,.md_yly-about .l-video';
		var toBottom = '.md_title, .qj-in img,.bottom-connect .list,.md_index_about p,.md_index_about h3,.hsxx-all .small,.md_xyl_bottom .bac,.ways-in li,.yw_in .small';
		addAnimate($(toTop),'an_toTop');
		addAnimate($(toLeft),'an_toLeft');
		addAnimate($(toRight),'an_toRight');
		addAnimate($(toBottom),'an_toBottom');
	}

	$(window).scroll(function() {
  	animateInit();
	});

	(function init(){
		animateInit();
	})();

	if ($('.ty_map').length>0) {
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
	    local.search('百瑞牡丹籽油牡丹（北京）有限公司');

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
	    $('#map').on('click', function () {
	    	local.search('中国时代远望科技有限公司');
	    	$('.ty_dialog').show();
	    })
	}
});
