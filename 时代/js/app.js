
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

	function addClass(elem,Class){
		if(elem.length > 0){
			var offsetT = elem.offset().top;
			var overHeight = $(document).scrollTop() + $(window).height() -80;
			if ( overHeight > offsetT ) {
				elem.addClass(Class);
			}
		}
	}
	function init(){
		addClass($('.ty_index_nums li').eq(0),'an_toTop');
		addClass($('.ty_index_nums li').eq(1),'an_delay4 an_toTop');
		addClass($('.ty_index_nums li').eq(2),'an_delay8 an_toTop');
		addClass($('.ty_index_aboutIn img'),'an_toTop');
		addClass($('.ty_index_aboutIn .right'),'an_delay5 an_toTop');
		addClass($('.ty_index_aboutIn .more'),'an_delay6 an_toTop');
	}

	function resize(){
		var ScreenW = $(window).width();
		$('.ty_header .logo').css('margin-left',ScreenW/1920*10+'%')
		$('.ty_header ty_Hlist').css('margin-left',ScreenW/1920*8+'%')
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