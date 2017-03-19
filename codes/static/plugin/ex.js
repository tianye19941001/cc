var landor = window.landor || {};
landor.behavior = {};
landor.helper = {};

landor.debouncer=function(a, b) {
    var c;
    return function() {
        var d = this,
            e = arguments,
            f = function() {
                c = null,
                    a.apply(d, e)
            };
        window.clearTimeout(c),
            c = window.setTimeout(f, b)
    }
};

landor.loadBehaviors = function(a) {
    var b;
    b = a ? a instanceof window.jQuery ? a : $(a) : $(document),
        b.find("*[data-behavior]").each(function() {
            var a = this;
            $.each($(this).data("behavior").split(" "), function(b, c) {
                landor.behavior[c].apply(a, [$(a)])
            })
        })
        // landor.helper.custom_select(b),
        // landor.helper.imgix(b)
};
$(document).ready(function() {
    for (var a = 0, b = ["ms", "moz", "webkit", "o"], c = 0; c < b.length && !window.requestAnimationFrame; ++c)
        window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"],
        window.cancelAnimationFrame = window[b[c] + "CancelAnimationFrame"] || window[b[c] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function(b, c) {
            var d = (new Date).getTime(),
                e = Math.max(0, 16 - (d - a)),
                f = window.setTimeout(function() {
                    b(d + e)
                }, e);
            return a = d + e,
                f
        }),
        window.cancelAnimationFrame || (window.cancelAnimationFrame = function(a) {
            clearTimeout(a)
        }),
        landor.loadBehaviors()
});

landor.behavior.header_scroll = function(a) {
    "use strict";
    function b() {
        var c = window.pageYOffset;
        c != m && (f = m > c ? "up" : "down"),
        c > l ? (a.addClass("page-header--scrolling"),
        "down" == f && c > 250 && landor.smoothscroll ? (a.addClass("page-header--hide"),
        $('.page-header [data-behavior="toggle"]').hasClass("active") && $('.page-header [data-behavior="toggle"]').trigger("click").blur()) : a.removeClass("page-header--hide")) : a.removeClass("page-header--scrolling"),
        m = c,
        g(b)
    }
    function c() {
        h = d(),
        i = e(),
        j = h - i,
        l = $("body").hasClass("home") ? $(".home-hero").outerHeight() - window.innerHeight : 1,
        l = 1 > l ? 1 : l
    }
    function d() {
        return $(".page__header, .post__header", a).outerHeight()
    }
    function e() {
        return $(".page-header", a).outerHeight()
    }
    var f, g = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame || window.onscroll, h = d(), i = e(), j = h - i, k = a.hasClass("page-header--white"), l = $("body").hasClass("home") ? $(".home-hero").outerHeight() - window.innerHeight : 1, m = window.pageYOffset;
    l = 1 > l ? 1 : l,
    b(),
    k && $(window).on("resize", $.debounce(250, function() {
        c()
    }
    ))
    //,$(".home-hero").on("home_hero_resize", c)
},
landor.behavior.home_hero = function(a) {
    "use strict";
    function b() {
        var c = window.pageYOffset;
        if (!p) {
            var d = Math.ceil(c / n)
              , e = j.eq(d)
              , f = c / l - (d - 1)
              , g = 0;
            g = 1 === d ? 1 - f.toFixed(2) : 1 > d ? 1 : 0,
            k.css("opacity", g),
            e.css("opacity", f.toFixed(2)).nextAll(".home-hero__image").css("opacity", "")
        }
        c + l >= m ? (j.css("opacity", 1),
        p || (a.addClass("home-hero--stop"),
        j.last().css("opacity", 1),
        k.css("top", (j.length - 1) * n),
        p = !0)) : p && (a.removeClass("home-hero--stop"),
        k.css("top", ""),
        p = !1),
        h = i(b)
    }
    function c() {
        if (landor.localstorage) {
            var b = parseInt(localStorage.getItem("hero_group"));
            hero_images = $.grep(hero_images, function(a, c) {
                return a.key !== b
            }
            )
        }
        var c = $(".home-hero__images", a)
          , d = Math.floor(Math.random() * hero_images.length)
          , e = hero_images[d];
        a.addClass("home-hero--" + (e.images.length - 1)),
        $.each(e.images, function(a, b) {
            c.append('<div class="home-hero__image imgix-fluid-bg" data-src="' + b + '"></div>')
        }
        ),
        landor.localstorage && localStorage.setItem("hero_group", parseInt(e.key))
    }
    function d() {
        l = window.innerHeight,
        m = a.outerHeight(),
        n = j.outerHeight(),
        o = a.offset().top,
        a.trigger("home_hero_resize")
    }
    function e() {
        a.addClass("home-hero--running"),
        d(),
        h = b()
    }
    function f() {
        cancelAnimationFrame(h),
        j.css("opacity", ""),
        a.removeClass("home-hero--running")
    }
    
    //c();
    var g = $(".home-hero__arrow", a);
    if (g.on("click", function(a) {
        var b = $(".home-listing").offset().top - 60;
        $("html, body").animate({
            scrollTop: b
        }, 1750),
        a.preventDefault()
    }
    ),
     1===1) {
        var h, i = window.requestAnimationFrame, j = $(".home-hero__image", a), k = $(".home-hero__content", a), l = window.innerHeight, m = a.outerHeight(), n = j.outerHeight(), o = a.offset().top, p = !1;
        j.each(function(a, b) {
            $(b).css("z-index", a + 1)
        }
        ),
        window.innerWidth > 767 && e(),
        $(window).on("resize.home_hero", function() {
            d(),
            window.innerWidth < 768 ? f() : e()
        });
        // $(window).on("resize.home_hero", $.debounce(200, function() {
        //     d(),
        //     window.innerWidth < 768 ? f() : e()
        // }
        // ))
    }
},
landor.behavior.home_listing = function(a) {
    "use strict";
    function b() {
        var a = window.pageYOffset,
            c = a + k;
        j.each(function(b, d) {
                var e = Math.round(this.getBoundingClientRect().top + (document.documentElement.scrollTop || document.body.scrollTop)) + l,
                    f = $(this).closest(".home-listing__item--case-study");
                if (c >= e) {
                    var i = this.offsetHeight,
                        j = k - (e - a),
                        n = $(this).hasClass("home-listing__item--news") ? k / 2 : i,
                        o = j / n,
                        p = Math.floor(m - o * m);
                    i >= j ? (h != o && (this.style.opacity = o,
                            $(this).parent("a").is(":first-child") && $(".home-listing__main", f).css("opacity", o),
                            h = o),
                        g != p && p >= 0 & m >= p && ($(this).css("transform", "translateY(" + p + "%)"),
                            $(this).parent("a").is(":first-child") ? $(".home-listing__main", f).css("transform", "translateY(" + p + "%)") : $(".home-listing__main", f).css("transform", "translateY(0)"),
                            g = p)) : ($(".home-listing__main", f).css("opacity", 1),
                        this.style.opacity = 1,
                        $(this).css("transform", "translateY(0)"))
                } else
                    this.style.opacity = 0,
                    $(this).css("transform", "translateY(" + m + "%)")
            }),
            f = i(b)
    }

    function c() {
        k = window.innerHeight,
            l = k / 7
    }

    function d() {
        n || (a.addClass("home-listing--running"),
            c(),
            f = b(),
            n = !0)
    }

    function e() {
        n && (cancelAnimationFrame(f),
            j.css({
                opacity: "",
                transform: ""
            }),
            a.removeClass("home-listing--running"),
            n = !1)
    }
    //if (landor.smoothscroll) {
        var f, g, h, i = window.requestAnimationFrame, j = $("img, .home-listing__item--news", a), k = window.innerHeight, l = k / 7, m = 30, n = !1;
        window.innerWidth > 767 && d(),
        // $(window).on("resize.home_hero", landor.debounce(200, function() {
        //     c(),
        //     window.innerWidth < 768 ? e() : d()
        // }
        // ));

        $(window).on("resize.home_hero", function() {
            c(),
            window.innerWidth < 768 ? e() : d()
        });
    //}
},
landor.behavior.sticky = function(a) {
    "use strict";
    function b() {
        var c = window.pageYOffset,
            d = a.offset().top,
            h = g.outerHeight(),
            l = a.outerHeight(),
            m = $("body").hasClass("page-header--hide") ? 40 : 150,
            n = a.offset().top + (l - h),
            o = c + m;
        return h + 40 >= l ? !0 : (d >= o ? g.removeClass(i + " " + j).width("") : o > d && n > o ? g.removeClass(j).addClass(i).width(k) : g.removeClass(i).addClass(j).width(""),
            void(e = f(b)))
    }

    function c() {
        e = b(),
            l = !0
    }

    function d() {
        cancelAnimationFrame(e),
            g.removeClass(i + " " + j).width(""),
            l = !1
    }
    var e, f = window.requestAnimationFrame,
        g = $("[data-sticky]", a),
        h = ($(window),
            $(".home-listing__guide", a)),
        i = "sticky-fixed",
        j = "sticky-abs",
        k = h.width(),
        l = !1;
    $(document).imagesLoaded(function() {
            //window.innerWidth > 767 && landor.smoothscroll && c()
            window.innerWidth > 767 && c()
        }),
        // $(window).on("resize", $.debounce(200, function() {
        //     k = h.width(),
        //     g.width(k),
        //     window.innerWidth < 768 && l ? d() : window.innerWidth > 767 && !l && c()
        // }
        // ))
        $(window).on("resize", function() {
            k = h.width(),
                g.width(k),
                window.innerWidth < 768 && l ? d() : window.innerWidth > 767 && !l && c()
        });
};