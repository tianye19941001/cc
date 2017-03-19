/**
@name 计算 瀑布流布局
@version 1.0
@authorby 孙昊
*/

var _hobbit = window._hobbit || {};

'use strict';
// Create the defaults once
var pluginName = 'autoLayout_h';

function Plugin(scope, options) {

    this.opt = {
        source: window,
        minborder: 8,
        rule: [{
            maxw: 1304,
            minw: 100,
            cut: 4,
            mincut: 3,

        }],
        smallRule: [{
            maxw: 1304,
            minw: 100,
            cut: 8,
            mincut: 4
        }],
        call: function() {

        },
        smallCall: function() {

        }
    };

    $.extend(this.opt, options);
    this.init();
    this.bindEvent();
}



$.extend(Plugin.prototype, {
    init: function() {
        var self = this;
        self.reSizeHandle();
        self.call();

        //var ua = navigator.userAgent.toLowerCase();
        //if (/iphone|ipad|ipod/.test(ua) || /android/.test(ua)) {

        $(".nav-app-icon").on('click', function() {

            if ($(".nav-app").hasClass("active")) {
                $(".nav-app-menu").fadeOut();
                $(".nav-app").removeClass('active');
            } else {
                $(".nav-app-menu").fadeIn();
                $(".nav-app").addClass('active');
            }
        });

        // }

        $(".go-top").on('click', function() {
            $('body,html').animate({
                scrollTop: 0
            }, 1000);
            return false;
        });

        $(window).on('reSizeHandle',function(){
            self.set();
        });
    },
    bindEvent: function() {
        var self = this;
        $(window).on('resize', function() {
            self.reSizeHandle();
        });
    },
    reSizeHandle: function() {
        var self = this;
        self.set();
        self.setSmall();
        // setTimeout(function() {
        //     $('.content').width($('.packery').width());
        // }, 300)


    },
    call: function() {
        var self = this;
        if (self.opt.smallCall && typeof self.opt.smallCall === "function") {
            setTimeout(function() {
                self.opt.smallCall();
            }, 100);
        }

        if (self.opt.call && typeof self.opt.call === "function") {
            setTimeout(function() {
                self.opt.call();
            }, 100);
        }
    },
    setSmall: function() {
        var self = this;
        var w = $(self.opt.source).width() - 8 >= 1304 ? 1304 : $(self.opt.source).width() - 8;
        var now = new Date().getTime();

        $('.cp-packery').css({
            maxWidth: w - self.opt.minborder,
        });

        for (var i = 0; i < self.opt.smallRule.length; i++) {
            var _rule = self.opt.smallRule[i];
            if (w >= _rule.minw && w <= _rule.maxw) {
                var _w;
                if (w <= 500)
                    _w = parseInt(w / _rule.mincut) - 8;
                else
                    _w = parseInt(w / _rule.cut) - 8;


                $('.box-small').css({
                    width: _w,
                    height: _w,
                });

                $('.grid-small-sizer').css({
                    width: _w,
                });
            }
        }



    },
    set: function() { //根据屏幕尺寸计算
        var self = this;
        var w = $(self.opt.source).width() >= 1304 ? 1304 : $(self.opt.source).width();
        $('.add').css("width", w);
        // if ($(window).width() >= 1304) {
        //     $('.cp-packery').css({
        //         maxWidth: 1304
        //     });
        //     //self.call();
        //     //return false;
        // }

        // $('.packery').css({
        //     maxWidth: self.opt.minwrapw ? self.opt.minboxw : w - self.opt.minborder
        // });

        $('.packery').css({
            maxWidth: w - self.opt.minborder
        });

        for (var i = 0; i < self.opt.rule.length; i++) {
            var _rule = self.opt.rule[i];
            if (w >= _rule.minw && w <= _rule.maxw) {

                if (w <= 500)
                    _w = parseInt(w / _rule.mincut) - 8;
                else
                    _w = parseInt(w / _rule.cut) - 8;

                if (_rule.minwrapw) {
                    $('.grid-sizer').css({
                        width: _rule.minboxw,
                    });
                } else {
                    $('.grid-sizer').css({
                        width: _w,
                    });
                }
                $('.box').css({
                    width: _rule.minboxw && w <= 500 ? _rule.minboxw : _w,
                    height: _rule.minboxw && w <= 500 ? "auto" : _w,
                });

                $('.size1x2').css({
                    width: _rule.minboxw && w <= 500 ? _rule.minboxw : _w,
                    height: _rule.minboxw && w <= 500 ? "auto" : _w * 2 + 8
                });

                $('.size2x1').css({
                    width: _rule.minboxw && w <= 500 ? _rule.minboxw : _w * 2 + 8,
                    height: _rule.minboxw && w <= 500 ? "auto" : _w
                });

                $('.size2x2').css({
                    width: _rule.minboxw && w <= 500 ? _rule.minboxw : _w * 2 + 8,
                    height: _rule.minboxw && w <= 500 ? "auto" : _w * 2 + 8
                });

            }
        }
    },
    ForDight: function(Dight, How) {
        Dight = Math.round(Dight * Math.pow(10, How)) / Math.pow(10, How);
        return Dight;
    }
});


if (!(pluginName in _hobbit)) {
    _hobbit[pluginName] = function(options) {
        return new Plugin(this, options);
    };
} else {
    throw ('插件命名存在冲突，请修改你的插件命名!');
}
// if (module)
//     window._hobbit = module.exports = _hobbit;
// else
window._hobbit = _hobbit;