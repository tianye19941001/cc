
$(document).ready(function(){
	function autoheight(){
		var Nwidth = $(window).width(),
			Nheight = Nwidth/1680*700,
			Nheighti = Nwidth/1920*680,
			allpoint = Nwidth/1680;
		if (Nwidth > 1480) {
			$('.wx_lunbo .bd li').height(Nheighti);
			$('html').css('zoom',allpoint)
		}else{
			if (Nwidth>768) {
				if (Nwidth<=1280) {
					$('.wx_lunbo .bd li').height(1280/1920*680);
					$('html').css('zoom',1480/1680);
				}else{
					$('.wx_lunbo .bd li').height(Nheighti);
					$('html').css('zoom',1480/1680);
				}
			}
		}
		// if(myBrowser() == 'FF'){
		// 	console.log(Nwidth);
		// 	$('html').css({
		// 		'-moz-transform':'scale(' + allpoint +')',
		// 		'-moz-transform-origin':'top left'
		// 	})
		// 	$('body').css('min-width',1680+'px')
		// };
	}

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
	
	
	$('.wx_aboutIn .rightde .r a').click(function(e){
		stophref(e);
		var index = $('.wx_aboutIn .rightde .r a').index($(this));
		$('.wx_aboutIn .rightde .l p').removeClass('on').eq(index).addClass('on');
		$('.wx_aboutIn .rightde .r a').removeClass('on').eq(index).addClass('on');
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
	if (document.body.clientWidth>=768) {
		//初始化
		$('.wx_list_f>div').slice(0,4).addClass('on');
		if ($('.workright').length>0) {
			setInterval(function(){
				var bili = 1260/700;
				$('.workright .bd img').each(function(){
					var bili2 = $(this).width()/$(this).height();
					if (bili2 > bili) {
						$(this).css({
							'width':'100%',
							'height':'auto'
						})
					}else if(bili2 < bili){
						$(this).css({
							'width':'auto',
							'height':'100%'
						})
					}
				})
			},100)
		}

		var alltylen = $('.wx_list_f>div').length;
		$('.video_con .ty_next').click(function(){
			if (alltylen<4) {
				return false;
			}else{
				var indexL = $('.wx_list_f>div').index($('.wx_list_f>.on').last());
				$('.wx_list_f>.on').removeClass('on');
				if( indexL == (alltylen-1)){
					$('.wx_list_f>div').slice(0,4).addClass('on');
				}else{
					$('.wx_list_f>div').slice(indexL+1,indexL+5).addClass('on');
				}
			}
		})
		$('.video_con .ty_prev').click(function(){
			if (alltylen<4) {
				return false;
			}else{
				var indexL = $('.wx_list_f>div').index($('.wx_list_f>.on').last());
				console.log(indexL)
				$('.wx_list_f>.on').removeClass('on');
				if( indexL == 3){
					var lastnum = alltylen % 4;
					$('.wx_list_f>div').slice(alltylen-lastnum,alltylen).addClass('on');
				}else{
					$('.wx_list_f>div').slice(indexL-5,indexL-1).addClass('on');
				}
			}
		})
		tyLLL = setInterval(function(){
			$('.video_con .ty_next').trigger('click');
		},5000)
		$('.wx_list_f').hover(function(){
			clearInterval(tyLLL);
		})
		$('.wx_list_f').mouseleave(function(){
			tyLLL = setInterval(function(){
				$('.video_con .ty_next').trigger('click');
			},5000)
		})
		$('.wlIn li').height($('.wlIn li').width());
		autoheight();
		$(window).resize(function() {
	 		autoheight();
	 		$('.wlIn li').height($('.wlIn li').width());
		});
		headerword();
		$('.workleft .t_icon,.workleft .b_icon').click(function(){
			var taht = parseInt($('.workleft .wlIn ul').css('top'));
			var hW = $('.wlin').height();
			var hU = $('.workleft .wlIn ul').height();
			if (taht == 0) {
				return false;
			}else if( taht < 0 ){
				var ww = $('.workleft .wlIn ul li').width();
				if (taht > -ww) {
					$('.workleft .wlIn ul').css('top','0');
				}else{
					$('.workleft .wlIn ul').css('top',taht+ww);
				}
			}
		})
		$('.workleft .b_icon').click(function(){
			var taht = parseInt($('.workleft .wlIn ul').css('top'));
			var hW = $('.wlIn').height();
			var hU = $('.workleft .wlIn ul').height();
			if (hW > hU) {
				return false;
			}else{
				$('.workleft .wlIn ul').css('top',taht-$('.workleft .wlIn ul li').width());
			}
		})
		$('.wx_business .icon_close').click(function(e){
			stophref(e);
			$(this).parents('.contact_bar').hide(200);
		})
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
		$('.wx_business .btn').click(function(e){
			stophref(e);
			$('.wx_business li').removeClass('on');
			$(this).parent().addClass('on');
			$('.wx_business .contact_bar').hide(200);
			$(this).siblings('.contact_bar').show(200);
			if ($(this).siblings('.contact_bar').children(".con").hasClass('mCustomScrollbar')) {
				return false;
			}else{
				var index1 = $('.wx_business .btn').index($(this));
				setTimeout(function(){
					$('.wx_business .btn').eq(index1).siblings('.contact_bar').children(".con").mCustomScrollbar({
						scrollButtons:{
							enable:true
						}
					});
				},100)
				
			}
			
			stopbubble(e) 
		})
	}else{
		fnResize();
		window.addEventListener("resize", function() {
		    fnResize()
		}, false);
		$('.wlIn li').height($('.wlIn li').width());

		function fnResize(){
		    var docWidth = document.documentElement.clientWidth,
		            body = document.getElementsByTagName('html')[0];
		    body.style.fontSize = docWidth / 40 + 'px';
		}
		$(".wx_header .menu,.ty_dialog .menu").click(function(){
			if ($('.ty_dialog').hasClass('ty_show')) {
				$('.ty_dialog').slideUp(300).removeClass('ty_show');
			}else{
				$('.ty_dialog').slideDown(300).addClass('ty_show');
			}
		});
		$(".wlIn a").click(function(e){
			stophref(e);
			var imgw = $(this).attr('href');
			$('.ty_dialog2 img').attr("src",imgw);
			$('.ty_dialog2').fadeIn(500);
		});
		$(".ty_dialog2 .close").click(function(e){
			$('.ty_dialog2').fadeOut(500);
		});
		$(window).scroll(function() {
	  		var listNT = parseInt(document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop),
	  			NH = parseInt(document.body.offsetHeight),
	  			WH = parseInt(document.documentElement.clientHeight);
	  		if((NH-listNT-WH)<200){
	  			$('.tt_down').hide(100);
	  		}else{
	  			$('.tt_down').show(100);
	  		}
		});
		$('.tt_down').click(function(e){
			stophref(e);
			var listNT = parseInt(document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop);
			$('html,body').animate({scrollTop: listNT+300},600);
		})
		$('.ty_dialog .listB a').click(function(){
			$('.ty_dialog').slideUp(300).removeClass('ty_show');
		})
		$('#about .leftbar li').click(function(){
			var indexit = $('#about .leftbar li').index($(this));
			$('#about .leftbar li').removeClass('on').eq(indexit).addClass('on');
			$('#about .rightbar li').removeClass('on').eq(indexit).addClass('on');
		});
	}
});