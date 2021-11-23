/* ar-Landing.js */
$(document).ready(function () {
		function e(e) {
			e.sliderObject.find("div").removeClass("show"), e.currentSlideObject.find("div").addClass("show");
			for (var t = 1; t <= e.data.numberOfSlides;) $(e.sliderObject).parents(".inner").find(".iosSliderButtons ul").append('<li><div class="button item"></div></li>'), t++;
			$(e.sliderObject).parents(".inner").find(".iosSliderButtons li").removeClass("selected"), $(e.sliderObject).parents(".inner").find(".iosSliderButtons li:eq(" + (e.currentSlideNumber - 1) + ")").addClass("selected"), e.sliderObject.parents(".iosSlider").addClass("show")
		}

		function t(e) {
			e.sliderObject.find("div").removeClass("show"), e.targetSlideObject.find("div").addClass("show"), $(e.sliderObject).parents(".inner").find(".iosSliderButtons li").removeClass("selected"), $(e.sliderObject).parents(".inner").find(".iosSliderButtons li:eq(" + (e.currentSlideNumber - 1) + ")").addClass("selected")
		}

		function i(e) {
			e.sliderObject.find("div").removeClass("show"), e.targetSlideObject.find("div").addClass("show"), $(".selectors .item").removeClass("selected"), $(".selectors .item:eq(" + (e.currentSlideNumber - 1) + ")").addClass("selected")
		}

		function n() {
			$(".slider .item img").each(function () {
				681 > d ? $(this).attr("src", $(this).attr("data-small")) : $(this).attr("src", $(this).attr("data-big"))
			})
		}

		function r(e) {
			if ($(".expander").length) {
				var t, i, n = $(".expander"),
					r = n.attr("data-trigger-index"),
					s = n.closest(".box-wrap").find(".box"),
					o = n.attr("data-trigger-type"),
					l = $("#ms-designer-ribbon").length > 0;
				494 > d ? (t = s.eq(r), i = -80) : 772 > d ? (t = a(Number(r)) ? s.eq(Number(r) + 1) : s.eq(r), i = -110) : ("four" == o && (4 > r ? t = s.eq(3) : 8 > r ? t = s.eq(7) : 12 > r && (t = s.eq(11))), "three" == o && (3 > r ? t = s.eq(2) : 6 > r ? t = s.eq(5) : 9 > r && (t = s.eq(8))), i = -80), t.after(n), $(".close").click(function () {
					return l || $.scrollTo(t, 1e3, {
						offset: i
					}), $(".expander").slideUp("slow"), s.removeClass("clicked"), !1
				}), e && !l && $.scrollTo(t, 300, {
					offset: i
				})
			}
		}

		function a(e) {
			return e = Number(e), 0 === e || !(!e || e % 2)
		}
		$(".faculty-filter h3").click(function () {
			$(window).width() < 1024 && ($(this).siblings("ul").toggle(), $(this).toggleClass("active"))
		}), $(".faculty-filter ul li > a").click(function () {
			var e = $(this).siblings("div");
			return e.hasClass("open") ? (e.removeClass("open"), $(this).removeClass("active")) : ($(".faculty-filter ul li div").removeClass("open"), $(".faculty-filter a.active").removeClass("active"), e.addClass("open"), $(this).addClass("active")), window.location.href = $(this).attr("href"), !1
		}), $(".faculty-filter h3").each(function () {
			$(this).append('<i class="icon ksticon-nav-arrow"></i>')
		}), $(".faculty-filter > ul > li > a").each(function () {
			$(this).append('<i class="icon ksticon-nav-arrow"></i>')
		}), $(".sitemap h2").each(function () {
			$(this).append('<i class="icon ksticon-nav-arrow-big ksticon-chevron-left"></i>')
		}), $(".filters").on("click", ".js-dropdown", function () {
			return $(this).next("ul").toggle(), !1
		}), $(".filters ul li a").on("click", function () {
			return $(this).parents("ul").hide(), !1
		});
		var s = $(".filters ul");
		$.each(s, function (e) {
			$(this).find("a").on("click", function () {
				return window.location.href = $(this).attr("href"), !1
			})
		}), setTimeout(function () {
			var e = location.hash;
			if (e && $(e).length) {
				var t = $(e).offset().top,
					i = $("header").height();
				$(window).scrollTop(70), $("html,body").animate({
					scrollTop: t - i
				}, 1e3)
			}
		}, 1), smoothScroll.init({
			speed: 500,
			easing: "easeInOutCubic",
			updateURL: !0,
			offset: 70
		}), $("#part").easyResponsiveTabs({
			type: "default",
			width: "auto",
			fit: !0,
			tabidentify: "hor_1",
			activate: function (e) {
				var t = $(this),
					i = $("#nested-tabInfo"),
					n = $("span", i);
				n.text(t.text()), i.show()
			}
		});
		var o = void 0;
		$(document).ready(function () {
			var e = 1;
			l() && ($(".iosSlider .item").css({
				direction: "rtl"
			}), $(".iosSlider").css({
				direction: "ltr"
			}), $(".iosSlider .slider").children().each(function (e, t) {
				$(".iosSlider .slider").prepend(t)
			}), e = $(".iosSlider .slider .item").length), $(".iosSlider").iosSlider({
				desktopClickDrag: !0,
				snapToChildren: !0,
				startAtSlide: e
			}), $(".iosSlider").hover(function () {
				clearTimeout(o)
			}, function () {
				custom_autoslide()
			})
		});
		var l = function () {
			var e = $(".iosSlider").css("direction");
			return "rtl" == e ? !0 : !1
		};
		$(".carousel .iosSlider").iosSlider({
			snapToChildren: !0,
			desktopClickDrag: !0,
			infiniteSlider: !0,
			responsiveSlides: !0,
			keyboardControls: !0,
			autoSlideTimer: 2e3,
			autoSlideHoverPause: !0,
			snapSlideCenter: !0,
			navNextSelector: $(".carousel .next"),
			navPrevSelector: $(".carousel .prev"),
			autoSlide: !0
		}), $(".slider .iosSlider").iosSlider({
			frictionCoefficient: 0,
			snapToChildren: !0,
			keyboardControls: !0,
			onSliderLoaded: e,
			onSlideChange: t
		}), $(".landing-slider .iosSlider").iosSlider({
			snapToChildren: !0,
			desktopClickDrag: !0,
			keyboardControls: !0,
			infiniteSlider: !0,
			autoSlideTimer: 3e3,
			autoSlide: !0,
			responsiveSlides: !0,
			navNextSelector: $(".next-landing"),
			navPrevSelector: $(".prev-landing"),
			navSlideSelector: $(".selectors .item"),
			onSliderLoaded: e,
			onSlideChange: i
		}), $(".slider").load(function () {
			$(this).css("opacity", 0)
		});
		var d = $(window).width();
		n(), $(window).resize(function () {
			d = $(window).width(), n(), r(!1)
		}), $("a[data-expander-target]").click(function () {
			var e = $(this),
				t = $(this).closest(".box"),
				i = t.hasClass("xfour") ? "four" : "three",
				n = e.attr("data-content-type"),
				a = $("#" + e.attr("data-expander-target")),
				s = t.parent().children(".box").index(t),
				o = $('<div class="expander ' + n + '"></div>');
			return $(".expander").remove(), $(".expand.clicked").removeClass("clicked"), o.attr("data-trigger-index", s).attr("data-trigger-type", i), o.html(a.html()), t.addClass("clicked"), t.after(o), r(!0), !1
		})
	}),
	function (e) {
		e.fn.scrollPagination = function (t) {
			function i(e) {
				3 == e.nodeType && (e.nodeValue = e.nodeValue.replace(/[0-9]/g, n))
			}

			function n(e) {
				return o[parseInt(e, 10)]
			}

			function r(e, t) {
				for (t(e), e = e.firstChild; e;) r(e, t), e = e.nextSibling
			}
			var a = e.extend(e.fn.scrollPagination.defaults, t),
				s = a.scrollTarget;
			null == s && (s = obj), a.scrollTarget = s;
			var o = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
			return r(document.body, i), this.each(function () {
				e.fn.scrollPagination.init(e(this), a)
			})
		}, e.fn.stopScrollPagination = function () {
			return this.each(function () {
				e(this).attr("scrollPagination", "disabled")
			})
		}, e.fn.scrollPagination.loadContent = function (t, i) {
			function n(e) {
				3 == e.nodeType && (e.nodeValue = e.nodeValue.replace(/[0-9]/g, r))
			}

			function r(e) {
				return o[parseInt(e, 10)]
			}

			function a(e, t) {
				for (t(e), e = e.firstChild; e;) a(e, t), e = e.nextSibling
			}
			var s = i.scrollTarget,
				o = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
			a(document.body, n);
			var l = e(s).scrollTop() + i.heightOffset >= e(document).height() - e(s).height();
			l && (null != i.beforeLoad && i.beforeLoad(), e(t).children().attr("rel", "loaded"), e.ajax({
				type: "POST",
				url: i.contentPage,
				data: i.contentData,
				success: function (n) {
					e(t).append(n);
					var r = e(t).children("[rel!=loaded]");
					null != i.afterLoad && i.afterLoad(r)
				},
				dataType: "html"
			}))
		}, e.fn.scrollPagination.init = function (t, i) {
			var n = i.scrollTarget;
			e(t).attr("scrollPagination", "enabled"), e(n).scroll(function (n) {
				"enabled" == e(t).attr("scrollPagination") ? e.fn.scrollPagination.loadContent(t, i) : n.stopPropagation()
			}), e.fn.scrollPagination.loadContent(t, i)
		}, e.fn.scrollPagination.defaults = {
			contentPage: null,
			contentData: {},
			beforeLoad: null,
			afterLoad: null,
			scrollTarget: null,
			heightOffset: 0
		}
	}(jQuery),
	function (e) {
		e.fn.extend({
			easyResponsiveTabs: function (t) {
				var i = {
						type: "default",
						width: "auto",
						fit: !0,
						closed: !1,
						tabidentify: "",
						activetab_bg: "white",
						inactive_bg: "#F5F5F5",
						active_border_color: "#c1c1c1",
						active_content_border_color: "#c1c1c1",
						activate: function () {}
					},
					t = e.extend(i, t),
					n = t,
					r = n.type,
					a = n.fit,
					s = n.width,
					o = "vertical",
					l = "accordion",
					d = window.location.hash,
					c = !(!window.history || !history.replaceState);
				e(this).bind("tabactivate", function (e, i) {
					"function" == typeof t.activate && t.activate.call(i, e)
				}), this.each(function () {
					function i() {
						r == o && n.addClass("resp-vtabs").addClass(t.tabidentify), 1 == a && n.css({
							width: "100%",
							margin: "0px"
						}), r == l && (n.addClass("resp-easy-accordion").addClass(t.tabidentify), n.find(".resp-tabs-list").css("display", "none"))
					}
					var n = e(this),
						f = n.find("ul.resp-tabs-list." + t.tabidentify),
						u = n.attr("id");
					n.find("ul.resp-tabs-list." + t.tabidentify + " li").addClass("resp-tab-item").addClass(t.tabidentify), n.css({
						display: "block",
						width: s
					}), "vertical" == t.type && f.css("margin-top", "3px"), n.find(".resp-tabs-container." + t.tabidentify).css("border-color", t.active_content_border_color), n.find(".resp-tabs-container." + t.tabidentify + " > div").addClass("resp-tab-content").addClass(t.tabidentify), i();
					var h;
					n.find(".resp-tab-content." + t.tabidentify).before("<h2 class='resp-accordion " + t.tabidentify + "' role='tab'><span class='resp-arrow'></span></h2>"), n.find(".resp-tab-content." + t.tabidentify).prev("h2").css({
						"background-color": t.inactive_bg,
						"border-color": t.active_border_color
					});
					var g = 0;
					n.find(".resp-accordion").each(function () {
						h = e(this);
						var i = n.find(".resp-tab-item:eq(" + g + ")"),
							r = n.find(".resp-accordion:eq(" + g + ")");
						r.append(i.html()), r.data(i.data()), h.attr("aria-controls", t.tabidentify + "_tab_item-" + g), g++
					});
					var p, v = 0;
					n.find(".resp-tab-item").each(function () {
						$tabItem = e(this), $tabItem.attr("aria-controls", t.tabidentify + "_tab_item-" + v), $tabItem.attr("role", "tab"), $tabItem.css({
							"background-color": t.inactive_bg,
							"border-color": "none"
						});
						var i = 0;
						n.find(".resp-tab-content." + t.tabidentify).each(function () {
							p = e(this), p.attr("aria-labelledby", t.tabidentify + "_tab_item-" + i).css({
								"border-color": t.active_border_color
							}), i++
						}), v++
					});
					var b = 0;
					if ("" != d) {
						var S = d.match(new RegExp(u + "([0-9]+)"));
						null !== S && 2 === S.length && (b = parseInt(S[1], 10) - 1, b > v && (b = 0))
					}
					e(n.find(".resp-tab-item." + t.tabidentify)[b]).addClass("resp-tab-active").css({
						"background-color": t.activetab_bg,
						"border-color": t.active_border_color
					}), t.closed === !0 || "accordion" === t.closed && !f.is(":visible") || "tabs" === t.closed && f.is(":visible") || (e(n.find(".resp-accordion." + t.tabidentify)[b]).addClass("resp-tab-active").css({
						"background-color": t.activetab_bg + " !important",
						"border-color": t.active_border_color,
						background: "none"
					}), e(n.find(".resp-tab-content." + t.tabidentify)[b]).addClass("resp-tab-content-active").addClass(t.tabidentify).attr("style", "display:block")), n.find("[role=tab]").each(function () {
						var i = e(this);
						i.click(function () {
							var i = e(this),
								r = i.attr("aria-controls");
							if (i.hasClass("resp-accordion") && i.hasClass("resp-tab-active")) return n.find(".resp-tab-content-active." + t.tabidentify).slideUp("", function () {
								e(this).addClass("resp-accordion-closed")
							}), i.removeClass("resp-tab-active").css({
								"background-color": t.inactive_bg,
								"border-color": "none"
							}), !1;
							if (!i.hasClass("resp-tab-active") && i.hasClass("resp-accordion") ? (n.find(".resp-tab-active." + t.tabidentify).removeClass("resp-tab-active").css({
									"background-color": t.inactive_bg,
									"border-color": "none"
								}), n.find(".resp-tab-content-active." + t.tabidentify).slideUp().removeClass("resp-tab-content-active resp-accordion-closed"), n.find("[aria-controls=" + r + "]").addClass("resp-tab-active").css({
									"background-color": t.activetab_bg,
									"border-color": t.active_border_color
								}), n.find(".resp-tab-content[aria-labelledby = " + r + "]." + t.tabidentify).slideDown().addClass("resp-tab-content-active")) : (console.log("here"), n.find(".resp-tab-active." + t.tabidentify).removeClass("resp-tab-active").css({
									"background-color": t.inactive_bg,
									"border-color": "none"
								}), n.find(".resp-tab-content-active." + t.tabidentify).removeAttr("style").removeClass("resp-tab-content-active").removeClass("resp-accordion-closed"), n.find("[aria-controls=" + r + "]").addClass("resp-tab-active").css({
									"background-color": t.activetab_bg,
									"border-color": t.active_border_color
								}), n.find(".resp-tab-content[aria-labelledby = " + r + "]." + t.tabidentify).addClass("resp-tab-content-active").attr("style", "display:block")), i.trigger("tabactivate", i), c) {
								var a = window.location.hash,
									s = r.split("tab_item-"),
									o = u + (parseInt(s[1], 10) + 1).toString();
								if ("" != a) {
									var l = new RegExp(u + "[0-9]+");
									o = null != a.match(l) ? a.replace(l, o) : a + "|" + o
								} else o = "#" + o;
								history.replaceState(null, null, o)
							}
						})
					}), e(window).resize(function () {
						n.find(".resp-accordion-closed").removeAttr("style")
					})
				})
			}
		})
	}(jQuery),
	function (e) {
		var t = {
			init: function (i) {
				var n = e.extend({
						items: 1,
						itemsOnPage: 1,
						pages: 0,
						displayedPages: 5,
						edges: 2,
						currentPage: 0,
						hrefTextPrefix: "#page-",
						hrefTextSuffix: "",
						prevText: "السابق",
						nextText: "التالي",
						ellipseText: "&hellip;",
						cssStyle: "light-theme",
						labelMap: [],
						selectOnClick: !0,
						nextAtFront: !1,
						invertPageOrder: !1,
						useStartEdge: !0,
						useEndEdge: !0,
						onPageClick: function (e, t) {},
						onInit: function () {}
					}, i || {}),
					r = this;
				return n.pages = n.pages ? n.pages : Math.ceil(n.items / n.itemsOnPage) ? Math.ceil(n.items / n.itemsOnPage) : 1, n.currentPage ? n.currentPage = n.currentPage - 1 : n.currentPage = n.invertPageOrder ? n.pages - 1 : 0, n.halfDisplayed = n.displayedPages / 2, this.each(function () {
					r.addClass(n.cssStyle + " simple-pagination").data("pagination", n), t._draw.call(r)
				}), n.onInit(), this
			},
			selectPage: function (e) {
				return t._selectPage.call(this, e - 1), this
			},
			prevPage: function () {
				var e = this.data("pagination");
				return e.invertPageOrder ? e.currentPage < e.pages - 1 && t._selectPage.call(this, e.currentPage + 1) : e.currentPage > 0 && t._selectPage.call(this, e.currentPage - 1), this
			},
			nextPage: function () {
				var e = this.data("pagination");
				return e.invertPageOrder ? e.currentPage > 0 && t._selectPage.call(this, e.currentPage - 1) : e.currentPage < e.pages - 1 && t._selectPage.call(this, e.currentPage + 1), this
			},
			getPagesCount: function () {
				return this.data("pagination").pages
			},
			getCurrentPage: function () {
				return this.data("pagination").currentPage + 1
			},
			destroy: function () {
				return this.empty(), this
			},
			drawPage: function (e) {
				var i = this.data("pagination");
				return i.currentPage = e - 1, this.data("pagination", i), t._draw.call(this), this
			},
			redraw: function () {
				return t._draw.call(this), this
			},
			disable: function () {
				var e = this.data("pagination");
				return e.disabled = !0, this.data("pagination", e), t._draw.call(this), this
			},
			enable: function () {
				var e = this.data("pagination");
				return e.disabled = !1, this.data("pagination", e), t._draw.call(this), this
			},
			updateItems: function (e) {
				var i = this.data("pagination");
				i.items = e, i.pages = t._getPages(i), this.data("pagination", i), t._draw.call(this)
			},
			updateItemsOnPage: function (e) {
				var i = this.data("pagination");
				return i.itemsOnPage = e, i.pages = t._getPages(i), this.data("pagination", i), t._selectPage.call(this, 0), this
			},
			_draw: function () {
				function i(e) {
					3 == e.nodeType && (e.nodeValue = e.nodeValue.replace(/[0-9]/g, n))
				}

				function n(e) {
					return u[parseInt(e, 10)]
				}

				function r(e, t) {
					for (t(e), e = e.firstChild; e;) r(e, t), e = e.nextSibling
				}
				var a, s, o = this.data("pagination"),
					l = t._getInterval(o);
				t.destroy.call(this), s = "function" == typeof this.prop ? this.prop("tagName") : this.attr("tagName");
				var d = "UL" === s ? this : e("<ul></ul>").appendTo(this);
				if (o.prevText && t._appendItem.call(this, o.invertPageOrder ? o.currentPage + 1 : o.currentPage - 1, {
						text: o.prevText,
						classes: "prev"
					}), o.nextText && o.nextAtFront && t._appendItem.call(this, o.invertPageOrder ? o.currentPage - 1 : o.currentPage + 1, {
						text: o.nextText,
						classes: "next"
					}), o.invertPageOrder) {
					if (l.end < o.pages && o.edges > 0) {
						if (o.useStartEdge) {
							var c = Math.max(o.pages - o.edges, l.end);
							for (a = o.pages - 1; a >= c; a--) t._appendItem.call(this, a)
						}
						o.pages - o.edges > l.end && o.pages - o.edges - l.end != 1 ? d.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + "</span></li>") : o.pages - o.edges - l.end == 1 && t._appendItem.call(this, l.end)
					}
				} else if (l.start > 0 && o.edges > 0) {
					if (o.useStartEdge) {
						var f = Math.min(o.edges, l.start);
						for (a = 0; f > a; a++) t._appendItem.call(this, a)
					}
					o.edges < l.start && l.start - o.edges != 1 ? d.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + "</span></li>") : l.start - o.edges == 1 && t._appendItem.call(this, o.edges)
				}
				if (o.invertPageOrder)
					for (a = l.end - 1; a >= l.start; a--) t._appendItem.call(this, a);
				else
					for (a = l.start; a < l.end; a++) t._appendItem.call(this, a);
				if (o.invertPageOrder) {
					if (l.start > 0 && o.edges > 0 && (o.edges < l.start && l.start - o.edges != 1 ? d.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + "</span></li>") : l.start - o.edges == 1 && t._appendItem.call(this, o.edges), o.useEndEdge)) {
						var f = Math.min(o.edges, l.start);
						for (a = f - 1; a >= 0; a--) t._appendItem.call(this, a)
					}
				} else {
					var u = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
					if (r(document.body, i), l.end < o.pages && o.edges > 0 && (o.pages - o.edges > l.end && o.pages - o.edges - l.end != 1 ? d.append('<li class="disabled"><span class="ellipse">' + o.ellipseText + "</span></li>") : o.pages - o.edges - l.end == 1 && t._appendItem.call(this, l.end), o.useEndEdge)) {
						var c = Math.max(o.pages - o.edges, l.end);
						for (a = c; a < o.pages; a++) t._appendItem.call(this, a)
					}
				}
				o.nextText && !o.nextAtFront && t._appendItem.call(this, o.invertPageOrder ? o.currentPage - 1 : o.currentPage + 1, {
					text: o.nextText,
					classes: "next"
				})
			},
			_getPages: function (e) {
				var t = Math.ceil(e.items / e.itemsOnPage);
				return t || 1
			},
			_getInterval: function (e) {
				return {
					start: Math.ceil(e.currentPage > e.halfDisplayed ? Math.max(Math.min(e.currentPage - e.halfDisplayed, e.pages - e.displayedPages), 0) : 0),
					end: Math.ceil(e.currentPage > e.halfDisplayed ? Math.min(e.currentPage + e.halfDisplayed, e.pages) : Math.min(e.displayedPages, e.pages))
				}
			},
			_appendItem: function (i, n) {
				function r(e) {
					3 == e.nodeType && (e.nodeValue = e.nodeValue.replace(/[0-9]/g, a))
				}

				function a(e) {
					return h[parseInt(e, 10)]
				}

				function s(e, t) {
					for (t(e), e = e.firstChild; e;) s(e, t), e = e.nextSibling
				}
				var o, l, d = this,
					c = d.data("pagination"),
					f = e("<li></li>"),
					u = d.find("ul");
				if (i = 0 > i ? 0 : i < c.pages ? i : c.pages - 1, o = {
						text: i + 1,
						classes: ""
					}, c.labelMap.length && c.labelMap[i] && (o.text = c.labelMap[i]), o = e.extend(o, n || {}), i == c.currentPage || c.disabled) c.disabled ? f.addClass("disabled") : f.addClass("active"), l = e('<span class="current">' + o.text + "</span>");
				else {
					l = e('<a href="' + c.hrefTextPrefix + (i + 1) + c.hrefTextSuffix + '" class="page-link">' + o.text + "</a>");
					var h = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
					s(document.body, r), l.click(function (e) {
						return t._selectPage.call(d, i, e)
					})
				}
				o.classes && l.addClass(o.classes), f.append(l), u.length ? u.append(f) : d.append(f)
			},
			_selectPage: function (e, i) {
				var n = this.data("pagination");
				return n.currentPage = e, n.selectOnClick && t._draw.call(this), n.onPageClick(e + 1, i)
			}
		};
		e.fn.pagination = function (i) {
			return t[i] && "_" != i.charAt(0) ? t[i].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof i && i ? void e.error("Method " + i + " does not exist on jQuery.pagination") : t.init.apply(this, arguments)
		}
	}(jQuery), ! function (e, t) {
		"use strict";

		function i(t) {
			t = e.extend(!0, {}, d, t);
			for (var i = e(this), r = 0, a = i.length; a > r; r++) n(i.eq(r), t);
			return i
		}

		function n(i, n) {
			if (!i.data("naver")) {
				n = e.extend(!0, {}, n, i.data("naver-options"));
				var a = i.find(".naver-handle").length ? i.find(".naver-handle").detach() : e('<span class="naver-handle"></span>');
				i.addClass("naver " + n.customClass).wrapInner('<div class="naver-container"></div>').wrapInner('<div class="naver-wrapper"></div>').prepend(a);
				var s = e.extend(!0, {
					$nav: i,
					$container: i.find(".naver-container"),
					$wrapper: i.find(".naver-wrapper"),
					$handle: i.find(".naver-handle")
				}, n);
				s.$handle.text(n.label ? n.labels.closed : ""), s.$nav.on("touchstart.naver", ".naver-handle", s, r).on("click.naver", ".naver-handle", s, o).data("naver", s), void 0 !== t.matchMedia && (s.mediaQuery = t.matchMedia("(max-width:" + (1 / 0 === s.maxWidth ? "100000px" : s.maxWidth) + ")"), s.mediaQuery.addListener(function () {
					l.apply(s.$nav)
				}), l.apply(s.$nav))
			}
		}

		function r(e) {
			e.stopPropagation();
			var t = e.data;
			t.touchStartEvent = e.originalEvent, t.touchStartX = t.touchStartEvent.touches[0].clientX, t.touchStartY = t.touchStartEvent.touches[0].clientY, t.$nav.on("touchmove.naver", ".naver-handle", t, a).on("touchend.naver", ".naver-handle", t, s)
		}

		function a(e) {
			var t = e.data,
				i = e.originalEvent;
			(Math.abs(i.touches[0].clientX - t.touchStartX) > 10 || Math.abs(i.touches[0].clientY - t.touchStartY) > 10) && t.$nav.off("touchmove.naver touchend.naver")
		}

		function s(e) {
			e.preventDefault(), e.stopPropagation();
			var t = e.data;
			t.touchStartEvent.preventDefault(), t.$nav.off("touchmove.naver touchend.naver click.naver"), o(e)
		}

		function o(t) {
			t.preventDefault(), t.stopPropagation();
			var i = (e(t.currentTarget), t.data);
			e(".naver").not(i.$nav).naver("close"), i.$nav.hasClass("open") ? c.close.apply(i.$nav) : c.open.apply(i.$nav)
		}

		function l() {
			var t = e(this).data("naver");
			t.mediaQuery.matches ? c.enable.apply(t.$nav) : c.disable.apply(t.$nav)
		}
		var d = {
				customClass: "",
				label: !0,
				labels: {
					closed: "",
					open: ""
				},
				maxWidth: "780px"
			},
			c = {
				close: function () {
					return e(this).each(function (t, i) {
						var n = e(i).data("naver");
						n && n.$nav.hasClass("enabled") && (n.$wrapper.css({
							height: 0
						}), n.label && n.$handle.html(n.labels.closed), n.$nav.removeClass("open").trigger("close.naver"))
					})
				},
				defaults: function (t) {
					return d = e.extend(!0, d, t || {}), "object" == typeof this ? e(this) : !0
				},
				disable: function () {
					return e(this).each(function (t, i) {
						var n = e(i).data("naver");
						n && (n.$nav.removeClass("enabled"), n.$wrapper.css({
							height: ""
						}))
					})
				},
				destroy: function () {
					return e(this).each(function (t, i) {
						var n = e(i).data("naver");
						n && (n.$handle.remove(), n.$container.contents().unwrap().unwrap(), n.$nav.removeClass("enabled disabled naver " + n.customClass).off(".naver").removeData("naver"))
					})
				},
				enable: function () {
					return e(this).each(function (t, i) {
						var n = e(i).data("naver");
						n && (n.$nav.addClass("enabled"), c.close.apply(n.$nav))
					})
				},
				open: function () {
					return e(this).each(function (t, i) {
						var n = e(i).data("naver");
						n && n.$nav.hasClass("enabled") && (n.$wrapper.css({
							height: n.$container.outerHeight(!0)
						}), n.label && n.$handle.html(n.labels.open), n.$nav.addClass("open").trigger("open.naver"))
					})
				}
			};
		e.fn.naver = function (e) {
			return c[e] ? c[e].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof e && e ? this : i.apply(this, arguments)
		}, e.naver = function (e) {
			"defaults" === e && c.defaults.apply(this, Array.prototype.slice.call(arguments, 1))
		}
	}(jQuery, window), ! function (e, t, i, n) {
		"use strict";
		e.tab = e.fn.tab = function (i) {
			var r, a, s = e(e.isFunction(this) ? t : this),
				o = e.isPlainObject(i) ? e.extend(!0, {}, e.fn.tab.settings, i) : e.extend({}, e.fn.tab.settings),
				l = s.selector || "",
				d = (new Date).getTime(),
				c = [],
				f = arguments[0],
				u = "string" == typeof f,
				h = [].slice.call(arguments, 1);
			return s.each(function () {
				var i, g, p, v, b, S = o.className,
					m = o.metadata,
					y = o.selector,
					w = o.error,
					C = "." + o.namespace,
					x = "module-" + o.namespace,
					O = e(this),
					T = {},
					k = !0,
					P = 0,
					$ = this,
					N = O.data(x);
				r = {
					initialize: function () {
						r.debug("Initializing tab menu item", O), r.determineTabs(), r.debug("Determining tabs", o.context, g), o.auto && (r.verbose("Setting up automatic tab retrieval from server"), o.apiSettings = {
							url: o.path + "/{$tab}"
						}), e.isWindow($) || (r.debug("Attaching tab activation events to element", O), O.on("click" + C, r.event.click)), r.instantiate()
					},
					determineTabs: function () {
						var t;
						"parent" === o.context ? (O.closest(y.ui).size() > 0 ? (t = O.closest(y.ui), r.verbose("Using closest UI element for determining parent", t)) : t = O, i = t.parent(), r.verbose("Determined parent element for creating context", i)) : o.context ? (i = e(o.context), r.verbose("Using selector for tab context", o.context, i)) : i = e("body"), o.childrenOnly ? (g = i.children(y.tabs), r.debug("Searching tab context children for tabs", i, g)) : (g = i.find(y.tabs), r.debug("Searching tab context for tabs", i, g))
					},
					initializeHistory: function () {
						if (o.history) {
							if (r.debug("Initializing page state"), e.address === n) return r.error(w.state), !1;
							if ("state" == o.historyType) {
								if (r.debug("Using HTML5 to manage state"), o.path === !1) return r.error(w.path), !1;
								e.address.history(!0).state(o.path)
							}
							e.address.bind("change", r.event.history.change)
						}
					},
					instantiate: function () {
						r.verbose("Storing instance of module", r), O.data(x, r)
					},
					destroy: function () {
						r.debug("Destroying tabs", O), O.removeData(x).off(C)
					},
					event: {
						click: function (t) {
							var i = e(this).data(m.tab);
							i !== n ? (o.history ? (r.verbose("Updating page state", t), e.address.value(i)) : (r.verbose("Changing tab", t), r.changeTab(i)), t.preventDefault()) : r.debug("No tab specified")
						},
						history: {
							change: function (t) {
								var i = t.pathNames.join("/") || r.get.initialPath(),
									a = o.templates.determineTitle(i) || !1;
								r.performance.display(), r.debug("History change event", i, t), b = t, i !== n && r.changeTab(i), a && e.address.title(a)
							}
						}
					},
					refresh: function () {
						p && (r.debug("Refreshing tab", p), r.changeTab(p))
					},
					cache: {
						read: function (e) {
							return e !== n ? T[e] : !1
						},
						add: function (e, t) {
							e = e || p, r.debug("Adding cached content for", e), T[e] = t
						},
						remove: function (e) {
							e = e || p, r.debug("Removing cached content for", e), delete T[e]
						}
					},
					set: {
						state: function (t) {
							e.address.value(t)
						}
					},
					changeTab: function (n) {
						var a = t.history && t.history.pushState,
							s = a && o.ignoreFirstLoad && k,
							l = o.auto || e.isPlainObject(o.apiSettings),
							d = l && !s ? r.utilities.pathToArray(n) : r.get.defaultPathArray(n);
						n = r.utilities.arrayToPath(d), e.each(d, function (t, a) {
							var c, f, u, h, g = d.slice(0, t + 1),
								S = r.utilities.arrayToPath(g),
								m = r.is.tab(S),
								y = t + 1 == d.length,
								C = r.get.tabElement(S);
							if (r.verbose("Looking for tab", a), m) {
								if (r.verbose("Tab was found", a), p = S, v = r.utilities.filterArray(d, g), y ? h = !0 : (f = d.slice(0, t + 2), u = r.utilities.arrayToPath(f), h = !r.is.tab(u), h && r.verbose("Tab parameters found", f)), h && l) return s ? (r.debug("Ignoring remote content on first tab load", S), k = !1, r.cache.add(n, C.html()), r.activate.all(S), e.proxy(o.onTabInit, C)(S, v, b), e.proxy(o.onTabLoad, C)(S, v, b)) : (r.activate.navigation(S), r.content.fetch(S, n)), !1;
								r.debug("Opened local tab", S), r.activate.all(S), r.cache.read(S) || (r.cache.add(S, !0), r.debug("First time tab loaded calling tab init"), e.proxy(o.onTabInit, C)(S, v, b)), e.proxy(o.onTabLoad, C)(S, v, b)
							} else {
								if (-1 != n.search("/")) return r.error(w.missingTab, O, i, S), !1;
								if (c = e("#" + n + ', a[name="' + n + '"]'), S = c.closest("[data-tab]").data("tab"), C = r.get.tabElement(S), c && c.size() > 0 && S) return r.debug("No tab found, but deep anchor link present, opening parent tab"), r.activate.all(S), r.cache.read(S) || (r.cache.add(S, !0), r.debug("First time tab loaded calling tab init"), e.proxy(o.onTabInit, C)(S, v, b)), !1
							}
						})
					},
					content: {
						fetch: function (t, i) {
							var a, s, l = r.get.tabElement(t),
								d = {
									dataType: "html",
									stateContext: l,
									onSuccess: function (n) {
										r.cache.add(i, n), r.content.update(t, n), t == p ? (r.debug("Content loaded", t), r.activate.tab(t)) : r.debug("Content loaded in background", t), e.proxy(o.onTabInit, l)(t, v, b), e.proxy(o.onTabLoad, l)(t, v, b)
									},
									urlData: {
										tab: i
									}
								},
								c = l.data(m.promise) || !1,
								f = c && "pending" === c.state();
							i = i || t, s = r.cache.read(i), o.cache && s ? (r.debug("Showing existing content", i), r.content.update(t, s), r.activate.tab(t), e.proxy(o.onTabLoad, l)(t, v, b)) : f ? (r.debug("Content is already loading", i), l.addClass(S.loading)) : e.api !== n ? (a = e.extend(!0, {
								headers: {
									"X-Remote": !0
								}
							}, o.apiSettings, d), r.debug("Retrieving remote content", i, a), e.api(a)) : r.error(w.api)
						},
						update: function (e, t) {
							r.debug("Updating html for", e);
							var i = r.get.tabElement(e);
							i.html(t)
						}
					},
					activate: {
						all: function (e) {
							r.activate.tab(e), r.activate.navigation(e)
						},
						tab: function (e) {
							var t = r.get.tabElement(e);
							r.verbose("Showing tab content for", t), t.addClass(S.active).siblings(g).removeClass(S.active + " " + S.loading)
						},
						navigation: function (e) {
							var t = r.get.navElement(e);
							r.verbose("Activating tab navigation for", t, e), t.addClass(S.active).siblings(s).removeClass(S.active + " " + S.loading)
						}
					},
					deactivate: {
						all: function () {
							r.deactivate.navigation(), r.deactivate.tabs()
						},
						navigation: function () {
							s.removeClass(S.active)
						},
						tabs: function () {
							g.removeClass(S.active + " " + S.loading)
						}
					},
					is: {
						tab: function (e) {
							return e !== n ? r.get.tabElement(e).size() > 0 : !1
						}
					},
					get: {
						initialPath: function () {
							return s.eq(0).data(m.tab) || g.eq(0).data(m.tab)
						},
						path: function () {
							return e.address.value()
						},
						defaultPathArray: function (e) {
							return r.utilities.pathToArray(r.get.defaultPath(e))
						},
						defaultPath: function (e) {
							var t = s.filter("[data-" + m.tab + '^="' + e + '/"]').eq(0),
								i = t.data(m.tab) || !1;
							if (i) {
								if (r.debug("Found default tab", i), P < o.maxDepth) return P++, r.get.defaultPath(i);
								r.error(w.recursion)
							} else r.debug("No default tabs found for", e, g);
							return P = 0, e
						},
						navElement: function (e) {
							return e = e || p, s.filter("[data-" + m.tab + '="' + e + '"]')
						},
						tabElement: function (e) {
							var t, i, n, a;
							return e = e || p, n = r.utilities.pathToArray(e), a = r.utilities.last(n), t = g.filter("[data-" + m.tab + '="' + a + '"]'), i = g.filter("[data-" + m.tab + '="' + e + '"]'), t.size() > 0 ? t : i
						},
						tab: function () {
							return p
						}
					},
					utilities: {
						filterArray: function (t, i) {
							return e.grep(t, function (t) {
								return -1 == e.inArray(t, i)
							})
						},
						last: function (t) {
							return e.isArray(t) ? t[t.length - 1] : !1
						},
						pathToArray: function (e) {
							return e === n && (e = p), "string" == typeof e ? e.split("/") : [e]
						},
						arrayToPath: function (t) {
							return e.isArray(t) ? t.join("/") : !1
						}
					},
					setting: function (t, i) {
						if (r.debug("Changing setting", t, i), e.isPlainObject(t)) e.extend(!0, o, t);
						else {
							if (i === n) return o[t];
							o[t] = i
						}
					},
					internal: function (t, i) {
						if (e.isPlainObject(t)) e.extend(!0, r, t);
						else {
							if (i === n) return r[t];
							r[t] = i
						}
					},
					debug: function () {
						o.debug && (o.performance ? r.performance.log(arguments) : (r.debug = Function.prototype.bind.call(console.info, console, o.name + ":"), r.debug.apply(console, arguments)))
					},
					verbose: function () {
						o.verbose && o.debug && (o.performance ? r.performance.log(arguments) : (r.verbose = Function.prototype.bind.call(console.info, console, o.name + ":"), r.verbose.apply(console, arguments)))
					},
					error: function () {
						r.error = Function.prototype.bind.call(console.error, console, o.name + ":"), r.error.apply(console, arguments)
					},
					performance: {
						log: function (e) {
							var t, i, n;
							o.performance && (t = (new Date).getTime(), n = d || t, i = t - n, d = t, c.push({
								Name: e[0],
								Arguments: [].slice.call(e, 1) || "",
								Element: $,
								"Execution Time": i
							})), clearTimeout(r.performance.timer), r.performance.timer = setTimeout(r.performance.display, 100)
						},
						display: function () {
							var t = o.name + ":",
								i = 0;
							d = !1, clearTimeout(r.performance.timer), e.each(c, function (e, t) {
								i += t["Execution Time"]
							}), t += " " + i + "ms", l && (t += " '" + l + "'"), (console.group !== n || console.table !== n) && c.length > 0 && (console.groupCollapsed(t), console.table ? console.table(c) : e.each(c, function (e, t) {
								console.log(t.Name + ": " + t["Execution Time"] + "ms")
							}), console.groupEnd()), c = []
						}
					},
					invoke: function (t, i, s) {
						var o, l, d, c = N;
						return i = i || h, s = $ || s, "string" == typeof t && c !== n && (t = t.split(/[\. ]/), o = t.length - 1, e.each(t, function (i, a) {
							var s = i != o ? a + t[i + 1].charAt(0).toUpperCase() + t[i + 1].slice(1) : t;
							if (e.isPlainObject(c[s]) && i != o) c = c[s];
							else {
								if (c[s] !== n) return l = c[s], !1;
								if (!e.isPlainObject(c[a]) || i == o) return c[a] !== n ? (l = c[a], !1) : (r.error(w.method, t), !1);
								c = c[a]
							}
						})), e.isFunction(l) ? d = l.apply(s, i) : l !== n && (d = l), e.isArray(a) ? a.push(d) : a !== n ? a = [a, d] : d !== n && (a = d), l
					}
				}, u ? (N === n && r.initialize(), r.invoke(f)) : (N !== n && r.destroy(), r.initialize())
			}), r && !u && r.initializeHistory(), a !== n ? a : this
		}, e.tab = function (i) {
			e(t).tab(i)
		}, e.fn.tab.settings = {
			name: "Tab",
			namespace: "tab",
			debug: !1,
			verbose: !0,
			performance: !0,
			auto: !1,
			history: !1,
			historyType: "hash",
			path: !1,
			context: !1,
			childrenOnly: !1,
			maxDepth: 25,
			ignoreFirstLoad: !1,
			alwaysRefresh: !1,
			cache: !0,
			apiSettings: !1,
			onTabInit: function () {},
			onTabLoad: function () {},
			templates: {
				determineTitle: function () {}
			},
			error: {
				api: "You attempted to load content without API module",
				method: "The method you called is not defined",
				missingTab: "Activated tab cannot be found for this context.",
				noContent: "The tab you specified is missing a content url.",
				path: "History enabled, but no path was specified",
				recursion: "Max recursive depth reached",
				state: "History requires Asual's Address library <https://github.com/asual/jquery-address>"
			},
			metadata: {
				tab: "tab",
				loaded: "loaded",
				promise: "promise"
			},
			className: {
				loading: "loading",
				active: "active"
			},
			selector: {
				tabs: ".ui.tab",
				ui: ".ui"
			}
		}
	}(jQuery, window, document),
	function (e) {
		"function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
	}(function (e) {
		function t(t) {
			return e.isFunction(t) || "object" == typeof t ? t : {
				top: t,
				left: t
			}
		}
		var i = e.scrollTo = function (t, i, n) {
			return e(window).scrollTo(t, i, n)
		};
		return i.defaults = {
			axis: "xy",
			duration: parseFloat(e.fn.jquery) >= 1.3 ? 0 : 1,
			limit: !0
		}, i.window = function (t) {
			return e(window)._scrollable()
		}, e.fn._scrollable = function () {
			return this.map(function () {
				var t = this,
					i = !t.nodeName || -1 != e.inArray(t.nodeName.toLowerCase(), ["iframe", "#document", "html", "body"]);
				if (!i) return t;
				var n = (t.contentWindow || t).document || t.ownerDocument || t;
				return /webkit/i.test(navigator.userAgent) || "BackCompat" == n.compatMode ? n.body : n.documentElement
			})
		}, e.fn.scrollTo = function (n, r, a) {
			return "object" == typeof r && (a = r, r = 0), "function" == typeof a && (a = {
				onAfter: a
			}), "max" == n && (n = 9e9), a = e.extend({}, i.defaults, a), r = r || a.duration, a.queue = a.queue && a.axis.length > 1, a.queue && (r /= 2), a.offset = t(a.offset), a.over = t(a.over), this._scrollable().each(function () {
				function s(e) {
					d.animate(f, r, a.easing, e && function () {
						e.call(this, c, a)
					})
				}
				if (null != n) {
					var o, l = this,
						d = e(l),
						c = n,
						f = {},
						u = d.is("html,body");
					switch (typeof c) {
						case "number":
						case "string":
							if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(c)) {
								c = t(c);
								break
							}
							if (c = e(c, this), !c.length) return;
						case "object":
							(c.is || c.style) && (o = (c = e(c)).offset())
					}
					var h = e.isFunction(a.offset) && a.offset(l, c) || a.offset;
					e.each(a.axis.split(""), function (e, t) {
						var n = "x" == t ? "Left" : "Top",
							r = n.toLowerCase(),
							g = "scroll" + n,
							p = l[g],
							v = i.max(l, t);
						if (o) f[g] = o[r] + (u ? 0 : p - d.offset()[r]), a.margin && (f[g] -= parseInt(c.css("margin" + n)) || 0, f[g] -= parseInt(c.css("border" + n + "Width")) || 0), f[g] += h[r] || 0, a.over[r] && (f[g] += c["x" == t ? "width" : "height"]() * a.over[r]);
						else {
							var b = c[r];
							f[g] = b.slice && "%" == b.slice(-1) ? parseFloat(b) / 100 * v : b
						}
						a.limit && /^\d+$/.test(f[g]) && (f[g] = f[g] <= 0 ? 0 : Math.min(f[g], v)),
							!e && a.queue && (p != f[g] && s(a.onAfterFirst), delete f[g])
					}), s(a.onAfter)
				}
			}).end()
		}, i.max = function (t, i) {
			var n = "x" == i ? "Width" : "Height",
				r = "scroll" + n;
			if (!e(t).is("html,body")) return t[r] - e(t)[n.toLowerCase()]();
			var a = "client" + n,
				s = t.ownerDocument.documentElement,
				o = t.ownerDocument.body;
			return Math.max(s[r], o[r]) - Math.min(s[a], o[a])
		}, i
	}),
	function (e) {
		var t = 0,
			i = 0,
			n = 0,
			r = 0,
			a = "ontouchstart" in window || 0 < navigator.msMaxTouchPoints,
			s = "onorientationchange" in window,
			o = !1,
			l = !1,
			d = !1,
			c = !1,
			f = !1,
			u = "pointer",
			h = "pointer",
			g = [],
			p = [],
			v = [],
			b = [],
			S = [],
			m = [],
			y = [],
			w = [],
			C = [],
			x = [],
			O = [],
			T = {
				showScrollbar: function (t, i) {
					t.scrollbarHide && e("." + i).css({
						opacity: t.scrollbarOpacity,
						filter: "alpha(opacity:" + 100 * t.scrollbarOpacity + ")"
					})
				},
				hideScrollbar: function (e, t, i, n, r, a, s, o, l, d) {
					if (e.scrollbar && e.scrollbarHide)
						for (var c = i; i + 25 > c; c++) t[t.length] = T.hideScrollbarIntervalTimer(10 * c, n[i], (i + 24 - c) / 24, r, a, s, o, l, d, e)
				},
				hideScrollbarInterval: function (t, i, n, a, s, o, l, d, c) {
					r = -1 * t / C[d] * (s - o - l - a), T.setSliderOffset("." + n, r), e("." + n).css({
						opacity: c.scrollbarOpacity * i,
						filter: "alpha(opacity:" + c.scrollbarOpacity * i * 100 + ")"
					})
				},
				slowScrollHorizontalInterval: function (t, i, n, a, s, o, l, d, c, f, u, h, g, p, v, b, O, k, P) {
					if (P.infiniteSlider) {
						if (n <= -1 * C[b] || n <= -1 * x[b]) {
							var $ = e(t).width();
							if (n <= -1 * x[b]) {
								var N = -1 * u[0];
								e(i).each(function (t) {
									T.setSliderOffset(e(i)[t], N + O), t < h.length && (h[t] = -1 * N), N += v[t]
								}), n += -1 * h[0], w[b] = -1 * h[0] + O, C[b] = w[b] + $ - o, y[b] = 0
							}
							for (; n <= -1 * C[b];) {
								var E = 0,
									_ = T.getSliderOffset(e(i[0]), "x");
								e(i).each(function (e) {
									T.getSliderOffset(this, "x") < _ && (_ = T.getSliderOffset(this, "x"), E = e)
								}), g = w[b] + $, T.setSliderOffset(e(i)[E], g), w[b] = -1 * h[1] + O, C[b] = w[b] + $ - o, h.splice(0, 1), h.splice(h.length, 0, -1 * g + O), y[b]++
							}
						}
						if (n >= -1 * w[b] || n >= 0) {
							if ($ = e(t).width(), n > 0)
								for (N = -1 * u[0], e(i).each(function (t) {
										T.setSliderOffset(e(i)[t], N + O), t < h.length && (h[t] = -1 * N), N += v[t]
									}), n -= -1 * h[0], w[b] = -1 * h[0] + O, C[b] = w[b] + $ - o, y[b] = p; 0 < -1 * h[0] - $ + O;) {
									var A = 0,
										I = T.getSliderOffset(e(i[0]), "x");
									e(i).each(function (e) {
										T.getSliderOffset(this, "x") > I && (I = T.getSliderOffset(this, "x"), A = e)
									}), g = w[b] - v[A], T.setSliderOffset(e(i)[A], g), h.splice(0, 0, -1 * g + O), h.splice(h.length - 1, 1), w[b] = -1 * h[0] + O, C[b] = w[b] + $ - o, y[b]--, S[b]++
								}
							for (; n > -1 * w[b];) A = 0, I = T.getSliderOffset(e(i[0]), "x"), e(i).each(function (e) {
								T.getSliderOffset(this, "x") > I && (I = T.getSliderOffset(this, "x"), A = e)
							}), g = w[b] - v[A], T.setSliderOffset(e(i)[A], g), h.splice(0, 0, -1 * g + O), h.splice(h.length - 1, 1), w[b] = -1 * h[0] + O, C[b] = w[b] + $ - o, y[b]--
						}
					}
					return u = !1, o = T.calcActiveOffset(P, n, h, o, y[b], p, f, b), g = (o + y[b] + p) % p, P.infiniteSlider ? g != m[b] && (u = !0) : o != S[b] && (u = !0), u && (p = new T.args("change", P, t, e(t).children(":eq(" + g + ")"), g, k), e(t).parent().data("args", p), "" != P.onSlideChange) && P.onSlideChange(p), S[b] = o, m[b] = g, n = Math.floor(n), b != e(t).parent().data("args").data.sliderNumber ? !0 : (T.setSliderOffset(t, n), void(P.scrollbar && (r = Math.floor((-1 * n - w[b] + O) / (C[b] - w[b] + O) * (l - d - s)), t = s - c, n >= -1 * w[b] + O ? (t = s - c - -1 * r, T.setSliderOffset(e("." + a), 0)) : (n <= -1 * C[b] + 1 && (t = l - d - c - r), T.setSliderOffset(e("." + a), r)), e("." + a).css({
						width: t + "px"
					}))))
				},
				slowScrollHorizontal: function (t, i, n, r, a, s, o, l, d, c, f, u, h, g, p, v, x, O, k, P, $) {
					var N = T.getSliderOffset(t, "x");
					s = [];
					var E = 0,
						_ = 25 / 1024 * l;
					if (frictionCoefficient = $.frictionCoefficient, elasticFrictionCoefficient = $.elasticFrictionCoefficient, snapFrictionCoefficient = $.snapFrictionCoefficient, a > $.snapVelocityThreshold && $.snapToChildren && !k ? E = 1 : a < -1 * $.snapVelocityThreshold && $.snapToChildren && !k && (E = -1), -1 * _ > a ? a = -1 * _ : a > _ && (a = _), e(t)[0] !== e(O)[0] && (E *= -1, a *= -2), O = y[p], $.infiniteSlider) var A = w[p],
						I = C[p];
					k = [];
					for (var _ = [], M = 0; M < h.length; M++) k[M] = h[M], M < i.length && (_[M] = T.getSliderOffset(e(i[M]), "x"));
					for (; a > 1 || -1 > a;) {
						if (a *= frictionCoefficient, N += a, (N > -1 * w[p] || N < -1 * C[p]) && !$.infiniteSlider && (a *= elasticFrictionCoefficient, N += a), $.infiniteSlider) {
							if (-1 * I >= N) {
								for (var I = e(t).width(), j = 0, q = _[0], M = 0; M < _.length; M++) _[M] < q && (q = _[M], j = M);
								M = A + I, _[j] = M, A = -1 * k[1] + P, I = A + I - l, k.splice(0, 1), k.splice(k.length, 0, -1 * M + P), O++
							}
							if (N >= -1 * A) {
								for (I = e(t).width(), j = 0, q = _[0], M = 0; M < _.length; M++) _[M] > q && (q = _[M], j = M);
								M = A - g[j], _[j] = M, k.splice(0, 0, -1 * M + P), k.splice(k.length - 1, 1), A = -1 * k[0] + P, I = A + I - l, O--
							}
						}
						s[s.length] = N
					}
					if (_ = !1, a = T.calcActiveOffset($, N, k, l, O, x, S[p], p), A = (a + O + x) % x, $.snapToChildren && ($.infiniteSlider ? A != m[p] && (_ = !0) : a != S[p] && (_ = !0), 0 > E && !_ ? (a++, a >= h.length && !$.infiniteSlider && (a = h.length - 1)) : E > 0 && !_ && (a--, 0 > a && !$.infiniteSlider && (a = 0))), $.snapToChildren || (N > -1 * w[p] || N < -1 * C[p]) && !$.infiniteSlider) {
						for ((N > -1 * w[p] || N < -1 * C[p]) && !$.infiniteSlider ? s.splice(0, s.length) : (s.splice(.1 * s.length, s.length), N = 0 < s.length ? s[s.length - 1] : N); N < k[a] - .5 || N > k[a] + .5;) N = (N - k[a]) * snapFrictionCoefficient + k[a], s[s.length] = N;
						s[s.length] = k[a]
					}
					for (E = 1, 0 != s.length % 2 && (E = 0), N = 0; N < n.length; N++) clearTimeout(n[N]);
					for (O = (a + O + x) % x, A = 0, N = E; N < s.length; N += 2)(N == E || 1 < Math.abs(s[N] - A) || N >= s.length - 2) && (A = s[N], n[n.length] = T.slowScrollHorizontalIntervalTimer(10 * N, t, i, s[N], r, o, l, d, c, f, a, u, h, v, x, g, p, P, O, $));
					A = (a + y[p] + x) % x, "" != $.onSlideComplete && 1 < s.length && (n[n.length] = T.onSlideCompleteTimer(10 * (N + 1), $, t, e(t).children(":eq(" + A + ")"), O, p)), n[n.length] = T.updateBackfaceVisibilityTimer(10 * (N + 1), i, p, x, $), b[p] = n, T.hideScrollbar($, n, N, s, r, o, l, c, f, p)
				},
				onSlideComplete: function (t, i, n, r, a) {
					n = new T.args("complete", t, e(i), n, r, r), e(i).parent().data("args", n), "" != t.onSlideComplete && t.onSlideComplete(n)
				},
				getSliderOffset: function (t, i) {
					var n = 0;
					if (i = "x" == i ? 4 : 5, !o || l || d) n = parseInt(e(t).css("left"), 10);
					else {
						for (var r, n = ["-webkit-transform", "-moz-transform", "transform"], a = 0; a < n.length; a++)
							if (void 0 != e(t).css(n[a]) && 0 < e(t).css(n[a]).length) {
								r = e(t).css(n[a]).split(",");
								break
							}
						n = void 0 == r[i] ? 0 : parseInt(r[i], 10)
					}
					return n
				},
				setSliderOffset: function (t, i) {
					i = parseInt(i, 10), !o || l || d ? e(t).css({
						left: i + "px"
					}) : e(t).css({
						msTransform: "matrix(1,0,0,1," + i + ",0)",
						webkitTransform: "matrix(1,0,0,1," + i + ",0)",
						MozTransform: "matrix(1,0,0,1," + i + ",0)",
						transform: "matrix(1,0,0,1," + i + ",0)"
					})
				},
				setBrowserInfo: function () {
					null != navigator.userAgent.match("WebKit") ? (u = "-webkit-grab", h = "-webkit-grabbing") : null != navigator.userAgent.match("Gecko") ? (f = !0, u = "move", h = "-moz-grabbing") : null != navigator.userAgent.match("MSIE 7") ? c = l = !0 : null != navigator.userAgent.match("MSIE 8") ? c = d = !0 : null != navigator.userAgent.match("MSIE 9") && (c = !0)
				},
				has3DTransform: function () {
					var t = !1,
						i = e("<div />").css({
							msTransform: "matrix(1,1,1,1,1,1)",
							webkitTransform: "matrix(1,1,1,1,1,1)",
							MozTransform: "matrix(1,1,1,1,1,1)",
							transform: "matrix(1,1,1,1,1,1)"
						});
					return "" == i.attr("style") ? t = !1 : f && 21 <= parseInt(navigator.userAgent.split("/")[3], 10) ? t = !1 : void 0 != i.attr("style") && (t = !0), t
				},
				getSlideNumber: function (e, t, i) {
					return (e - y[t] + i) % i
				},
				calcActiveOffset: function (e, t, i, n, r, a, s, o) {
					r = !1, e = [];
					var l;
					for (t > i[0] && (l = 0), t < i[i.length - 1] && (l = a - 1), a = 0; a < i.length; a++) i[a] <= t && i[a] > t - n && (r || i[a] == t || (e[e.length] = i[a - 1]), e[e.length] = i[a], r = !0);
					for (0 == e.length && (e[0] = i[i.length - 1]), a = r = 0; a < e.length; a++) s = Math.abs(t - e[a]), n > s && (r = e[a], n = s);
					for (a = 0; a < i.length; a++) r == i[a] && (l = a);
					return l
				},
				changeSlide: function (t, i, n, r, a, s, o, l, d, c, f, u, h, g, p, v, w, C) {
					T.autoSlidePause(g);
					for (var x = 0; x < r.length; x++) clearTimeout(r[x]);
					var O = Math.ceil(C.autoSlideTransTimer / 10) + 1,
						k = T.getSliderOffset(i, "x"),
						P = u[t],
						P = P - k,
						$ = t - (S[g] + y[g] + v) % v;
					if (C.infiniteSlider) {
						t = (t - y[g] + 2 * v) % v, x = !1, 0 == t && 2 == v && (t = v, u[t] = u[t - 1] - e(n).eq(0).outerWidth(!0), x = !0);
						var P = u[t],
							P = P - k,
							N = [u[t] - e(i).width(), u[t] + e(i).width()];
						for (x && u.splice(u.length - 1, 1), x = 0; x < N.length; x++) Math.abs(N[x] - k) < Math.abs(P) && (P = N[x] - k)
					}
					for (0 > P && -1 == $ ? P += e(i).width() : P > 0 && 1 == $ && (P -= e(i).width()), $ = [], T.showScrollbar(C, a), x = 0; O >= x; x++) N = x, N /= O, N--, N = k + P * (Math.pow(N, 5) + 1), $[$.length] = N;
					for (O = (t + y[g] + v) % v, x = k = 0; x < $.length; x++)(0 == x || 1 < Math.abs($[x] - k) || x >= $.length - 2) && (k = $[x], r[x] = T.slowScrollHorizontalIntervalTimer(10 * (x + 1), i, n, $[x], a, s, o, l, d, c, t, f, u, p, v, h, g, w, O, C)), 0 == x && "" != C.onSlideStart && (P = (S[g] + y[g] + v) % v, C.onSlideStart(new T.args("start", C, i, e(i).children(":eq(" + P + ")"), P, t)));
					k = !1, C.infiniteSlider ? O != m[g] && (k = !0) : t != S[g] && (k = !0), k && "" != C.onSlideComplete && (r[r.length] = T.onSlideCompleteTimer(10 * (x + 1), C, i, e(i).children(":eq(" + O + ")"), O, g)), b[g] = r, T.hideScrollbar(C, r, x, $, a, s, o, d, c, g), T.autoSlide(i, n, r, a, s, o, l, d, c, f, u, h, g, p, v, w, C)
				},
				changeOffset: function (t, i, n, r, a, s, o, l, d, c, f, u, h, g, p, v, x, O) {
					T.autoSlidePause(g);
					for (var k = 0; k < r.length; k++) clearTimeout(r[k]);
					O.infiniteSlider || (t = t > -1 * w[g] + x ? -1 * w[g] + x : t, t = t < -1 * C[g] ? -1 * C[g] : t);
					var P = Math.ceil(O.autoSlideTransTimer / 10) + 1,
						$ = T.getSliderOffset(i, "x"),
						k = (T.calcActiveOffset(O, t, u, o, y, v, S[g], g) + y[g] + v) % v,
						N = u.slice();
					if (O.snapToChildren && !O.infiniteSlider) t = u[k];
					else if (O.infiniteSlider && O.snapToChildren) {
						for (; t >= N[0];) N.splice(0, 0, N[v - 1] + e(i).width()), N.splice(v, 1);
						for (; t <= N[v - 1];) N.splice(v, 0, N[0] - e(i).width()), N.splice(0, 1);
						k = T.calcActiveOffset(O, t, N, o, y, v, S[g], g), t = N[k]
					}
					var E = t - $;
					t = [];
					var _;
					for (T.showScrollbar(O, a), N = 0; P >= N; N++) _ = N, _ /= P, _--, _ = $ + E * (Math.pow(_, 5) + 1), t[t.length] = _;
					for (P = (k + y[g] + v) % v, N = $ = 0; N < t.length; N++)(0 == N || 1 < Math.abs(t[N] - $) || N >= t.length - 2) && ($ = t[N], r[N] = T.slowScrollHorizontalIntervalTimer(10 * (N + 1), i, n, t[N], a, s, o, l, d, c, k, f, u, p, v, h, g, x, P, O)), 0 == N && "" != O.onSlideStart && (P = (S[g] + y[g] + v) % v, O.onSlideStart(new T.args("start", O, i, e(i).children(":eq(" + P + ")"), P, k)));
					$ = !1, O.infiniteSlider ? P != m[g] && ($ = !0) : k != S[g] && ($ = !0), $ && "" != O.onSlideComplete && (r[r.length] = T.onSlideCompleteTimer(10 * (N + 1), O, i, e(i).children(":eq(" + P + ")"), P, g)), b[g] = r, T.hideScrollbar(O, r, N, t, a, s, o, d, c, g), T.autoSlide(i, n, r, a, s, o, l, d, c, f, u, h, g, p, v, x, O)
				},
				autoSlide: function (e, t, i, n, r, a, s, o, l, d, c, f, u, h, v, b, m) {
					return p[u].autoSlide ? (T.autoSlidePause(u), void(g[u] = setTimeout(function () {
						!m.infiniteSlider && S[u] > c.length - 1 && (S[u] -= v), T.changeSlide(S[u] + y[u] + 1, e, t, i, n, r, a, s, o, l, d, c, f, u, h, v, b, m), T.autoSlide(e, t, i, n, r, a, s, o, l, d, c, f, u, h, v, b, m)
					}, m.autoSlideTimer + m.autoSlideTransTimer))) : !1
				},
				autoSlidePause: function (e) {
					clearTimeout(g[e])
				},
				isUnselectable: function (t, i) {
					return "" != i.unselectableSelector && 1 == e(t).closest(i.unselectableSelector).length ? !0 : !1
				},
				slowScrollHorizontalIntervalTimer: function (e, t, i, n, r, a, s, o, l, d, c, f, u, h, g, p, v, b, S, m) {
					return setTimeout(function () {
						T.slowScrollHorizontalInterval(t, i, n, r, a, s, o, l, d, c, f, u, h, g, p, v, b, S, m)
					}, e)
				},
				onSlideCompleteTimer: function (e, t, i, n, r, a) {
					return setTimeout(function () {
						T.onSlideComplete(t, i, n, r, a)
					}, e)
				},
				hideScrollbarIntervalTimer: function (e, t, i, n, r, a, s, o, l, d) {
					return setTimeout(function () {
						T.hideScrollbarInterval(t, i, n, r, a, s, o, l, d)
					}, e)
				},
				updateBackfaceVisibilityTimer: function (e, t, i, n, r) {
					return setTimeout(function () {
						T.updateBackfaceVisibility(t, i, n, r)
					}, e)
				},
				updateBackfaceVisibility: function (t, i, n, r) {
					i = (S[i] + y[i] + n) % n;
					for (var a = [], s = 0; s < 2 * r.hardwareAccelBuffer; s++) {
						var o = T.mod(i + s - r.hardwareAccelBuffer, n);
						if ("visible" == e(t).eq(o).css("-webkit-backface-visibility")) {
							a[a.length] = o;
							var l = T.mod(o + 2 * r.hardwareAccelBuffer, n),
								d = T.mod(o - 2 * r.hardwareAccelBuffer, n);
							e(t).eq(o).css("-webkit-backface-visibility", "hidden"), -1 == a.indexOf(d) && e(t).eq(d).css("-webkit-backface-visibility", ""), -1 == a.indexOf(l) && e(t).eq(l).css("-webkit-backface-visibility", "")
						}
					}
				},
				mod: function (e, t) {
					var i = e % t;
					return 0 > i ? i + t : i
				},
				args: function (t, i, n, r, a, s) {
					this.prevSlideNumber = void 0 == e(n).parent().data("args") ? void 0 : e(n).parent().data("args").prevSlideNumber, this.prevSlideObject = void 0 == e(n).parent().data("args") ? void 0 : e(n).parent().data("args").prevSlideObject, this.targetSlideNumber = s + 1, this.targetSlideObject = e(n).children(":eq(" + s + ")"), this.slideChanged = !1, "load" == t ? this.targetSlideObject = this.targetSlideNumber = void 0 : "start" == t ? this.targetSlideObject = this.targetSlideNumber = void 0 : "change" == t ? (this.slideChanged = !0, this.prevSlideNumber = void 0 == e(n).parent().data("args") ? i.startAtSlide : e(n).parent().data("args").currentSlideNumber, this.prevSlideObject = e(n).children(":eq(" + this.prevSlideNumber + ")")) : "complete" == t && (this.slideChanged = e(n).parent().data("args").slideChanged), this.settings = i, this.data = e(n).parent().data("iosslider"), this.sliderObject = n, this.sliderContainerObject = e(n).parent(), this.currentSlideObject = r, this.currentSlideNumber = a + 1, this.currentSliderOffset = -1 * T.getSliderOffset(n, "x")
				},
				preventDrag: function (e) {
					e.preventDefault()
				},
				preventClick: function (e) {
					return e.stopImmediatePropagation(), !1
				},
				enableClick: function () {
					return !0
				}
			};
		T.setBrowserInfo();
		var k = {
			init: function (f, g) {
				o = T.has3DTransform();
				var P = e.extend(!0, {
					elasticPullResistance: .6,
					frictionCoefficient: .92,
					elasticFrictionCoefficient: .6,
					snapFrictionCoefficient: .92,
					snapToChildren: !1,
					snapSlideCenter: !1,
					startAtSlide: 1,
					scrollbar: !1,
					scrollbarDrag: !1,
					scrollbarHide: !0,
					scrollbarPaging: !1,
					scrollbarLocation: "top",
					scrollbarContainer: "",
					scrollbarOpacity: .4,
					scrollbarHeight: "4px",
					scrollbarBorder: "0",
					scrollbarMargin: "5px",
					scrollbarBackground: "#000",
					scrollbarBorderRadius: "100px",
					scrollbarShadow: "0 0 0 #000",
					scrollbarElasticPullResistance: .9,
					desktopClickDrag: !1,
					keyboardControls: !1,
					tabToAdvance: !1,
					responsiveSlideContainer: !0,
					responsiveSlides: !0,
					navSlideSelector: "",
					navPrevSelector: "",
					navNextSelector: "",
					autoSlideToggleSelector: "",
					autoSlide: !1,
					autoSlideTimer: 5e3,
					autoSlideTransTimer: 750,
					autoSlideHoverPause: !0,
					infiniteSlider: !1,
					snapVelocityThreshold: 5,
					slideStartVelocityThreshold: 0,
					horizontalSlideLockThreshold: 5,
					verticalSlideLockThreshold: 3,
					hardwareAccelBuffer: 5,
					stageCSS: {
						position: "relative",
						top: "0",
						left: "0",
						overflow: "hidden",
						zIndex: 1
					},
					unselectableSelector: "",
					onSliderLoaded: "",
					onSliderUpdate: "",
					onSliderResize: "",
					onSlideStart: "",
					onSlideChange: "",
					onSlideComplete: ""
				}, f);
				return void 0 == g && (g = this), e(g).each(function (o) {
					function f() {
						T.autoSlidePause(g), ue = e(ie).find("a"), he = e(ie).find("[onclick]"), ge = e(ie).find("*"), e(R).css("width", ""), e(R).css("height", ""), e(ie).css("width", ""), Y = e(ie).children().not("script").get(), Q = [], G = [], P.responsiveSlides && e(Y).css("width", ""), C[g] = 0, U = [], I = e(R).parent().width(), j = e(R).outerWidth(!0), P.responsiveSlideContainer && (j = e(R).outerWidth(!0) > I ? I : e(R).width()), e(R).css({
							position: P.stageCSS.position,
							top: P.stageCSS.top,
							left: P.stageCSS.left,
							overflow: P.stageCSS.overflow,
							zIndex: P.stageCSS.zIndex,
							webkitPerspective: 1e3,
							webkitBackfaceVisibility: "hidden",
							msTouchAction: "pan-y",
							width: j
						}), e(P.unselectableSelector).css({
							cursor: "default"
						});
						for (var t = 0; t < Y.length; t++) {
							Q[t] = e(Y[t]).width(), G[t] = e(Y[t]).outerWidth(!0);
							var i = G[t];
							P.responsiveSlides && (G[t] > j ? (i = j + -1 * (G[t] - Q[t]), Q[t] = i, G[t] = j) : i = Q[t], e(Y[t]).css({
								width: i
							})), e(Y[t]).css({
								overflow: "hidden",
								position: "absolute"
							}), U[t] = -1 * C[g], C[g] = C[g] + i + (G[t] - Q[t])
						}
						for (P.snapSlideCenter && (X = .5 * (j - G[0]), P.responsiveSlides && G[0] > j && (X = 0)), x[g] = 2 * C[g], t = 0; t < Y.length; t++) T.setSliderOffset(e(Y[t]), -1 * U[t] + C[g] + X), U[t] -= C[g];
						if (!P.infiniteSlider && !P.snapSlideCenter) {
							for (t = 0; t < U.length && !(U[t] <= -1 * (2 * C[g] - j)); t++) ae = t;
							U.splice(ae + 1, U.length), U[U.length] = -1 * (2 * C[g] - j)
						}
						for (t = 0; t < U.length; t++) J[t] = U[t];
						if (V && (p[g].startAtSlide = p[g].startAtSlide > U.length ? U.length : p[g].startAtSlide, P.infiniteSlider ? (p[g].startAtSlide = (p[g].startAtSlide - 1 + ne) % ne, S[g] = p[g].startAtSlide) : (p[g].startAtSlide = 0 > p[g].startAtSlide - 1 ? U.length - 1 : p[g].startAtSlide, S[g] = p[g].startAtSlide - 1), m[g] = S[g]), w[g] = C[g] + X, e(ie).css({
								position: "relative",
								cursor: u,
								webkitPerspective: "0",
								webkitBackfaceVisibility: "hidden",
								width: C[g] + "px"
							}), fe = C[g], C[g] = 2 * C[g] - j + 2 * X, (le = j > fe + X || 0 == j ? !0 : !1) && e(ie).css({
								cursor: "default"
							}), M = e(R).parent().outerHeight(!0), q = e(R).height(), P.responsiveSlideContainer && (q = q > M ? M : q), e(R).css({
								height: q
							}), T.setSliderOffset(ie, U[S[g]]), P.infiniteSlider && !le) {
							for (t = T.getSliderOffset(e(ie), "x"), i = (y[g] + ne) % ne * -1; 0 > i;) {
								var n = 0,
									r = T.getSliderOffset(e(Y[0]), "x");
								e(Y).each(function (e) {
									T.getSliderOffset(this, "x") < r && (r = T.getSliderOffset(this, "x"), n = e)
								});
								var a = w[g] + fe;
								T.setSliderOffset(e(Y)[n], a), w[g] = -1 * U[1] + X, C[g] = w[g] + fe - j, U.splice(0, 1), U.splice(U.length, 0, -1 * a + X), i++
							}
							for (; 0 < -1 * U[0] - fe + X && P.snapSlideCenter && V;) {
								var s = 0,
									o = T.getSliderOffset(e(Y[0]), "x");
								e(Y).each(function (e) {
									T.getSliderOffset(this, "x") > o && (o = T.getSliderOffset(this, "x"), s = e)
								}), a = w[g] - G[s], T.setSliderOffset(e(Y)[s], a), U.splice(0, 0, -1 * a + X), U.splice(U.length - 1, 1), w[g] = -1 * U[0] + X, C[g] = w[g] + fe - j, y[g]--, S[g]++
							}
							for (; t <= -1 * C[g];) n = 0, r = T.getSliderOffset(e(Y[0]), "x"), e(Y).each(function (e) {
								T.getSliderOffset(this, "x") < r && (r = T.getSliderOffset(this, "x"), n = e)
							}), a = w[g] + fe, T.setSliderOffset(e(Y)[n], a), w[g] = -1 * U[1] + X, C[g] = w[g] + fe - j, U.splice(0, 1), U.splice(U.length, 0, -1 * a + X), y[g]++, S[g]--
						}
						return T.setSliderOffset(ie, U[S[g]]), T.updateBackfaceVisibility(Y, g, ne, P), P.desktopClickDrag || e(ie).css({
							cursor: "default"
						}), P.scrollbar && (e("." + F).css({
							margin: P.scrollbarMargin,
							overflow: "hidden",
							display: "none"
						}), e("." + F + " ." + H).css({
							border: P.scrollbarBorder
						}), W = parseInt(e("." + F).css("marginLeft")) + parseInt(e("." + F).css("marginRight")), D = parseInt(e("." + F + " ." + H).css("borderLeftWidth"), 10) + parseInt(e("." + F + " ." + H).css("borderRightWidth"), 10), _ = "" != P.scrollbarContainer ? e(P.scrollbarContainer).width() : j, A = j / fe * (_ - W), P.scrollbarHide || (Z = P.scrollbarOpacity), e("." + F).css({
							position: "absolute",
							left: 0,
							width: _ - W + "px",
							margin: P.scrollbarMargin
						}), "top" == P.scrollbarLocation ? e("." + F).css("top", "0") : e("." + F).css("bottom", "0"), e("." + F + " ." + H).css({
							borderRadius: P.scrollbarBorderRadius,
							background: P.scrollbarBackground,
							height: P.scrollbarHeight,
							width: A - D + "px",
							minWidth: P.scrollbarHeight,
							border: P.scrollbarBorder,
							webkitPerspective: 1e3,
							webkitBackfaceVisibility: "hidden",
							position: "relative",
							opacity: Z,
							filter: "alpha(opacity:" + 100 * Z + ")",
							boxShadow: P.scrollbarShadow
						}), T.setSliderOffset(e("." + F + " ." + H), Math.floor((-1 * U[S[g]] - w[g] + X) / (C[g] - w[g] + X) * (_ - W - A))), e("." + F).css({
							display: "block"
						}), N = e("." + F + " ." + H), E = e("." + F)), P.scrollbarDrag && !le && e("." + F + " ." + H).css({
							cursor: u
						}), P.infiniteSlider && (K = (C[g] + j) / 3), "" != P.navSlideSelector && e(P.navSlideSelector).each(function (t) {
							e(this).css({
								cursor: "pointer"
							}), e(this).unbind(be).bind(be, function (i) {
								"touchstart" == i.type ? e(this).unbind("click.iosSliderEvent") : e(this).unbind("touchstart.iosSliderEvent"), be = i.type + ".iosSliderEvent", T.changeSlide(t, ie, Y, $, H, A, j, _, W, D, J, U, G, g, K, ne, X, P)
							})
						}), "" != P.navPrevSelector && (e(P.navPrevSelector).css({
							cursor: "pointer"
						}), e(P.navPrevSelector).unbind(be).bind(be, function (t) {
							"touchstart" == t.type ? e(this).unbind("click.iosSliderEvent") : e(this).unbind("touchstart.iosSliderEvent"), be = t.type + ".iosSliderEvent", t = (S[g] + y[g] + ne) % ne, (t > 0 || P.infiniteSlider) && T.changeSlide(t - 1, ie, Y, $, H, A, j, _, W, D, J, U, G, g, K, ne, X, P)
						})), "" != P.navNextSelector && (e(P.navNextSelector).css({
							cursor: "pointer"
						}), e(P.navNextSelector).unbind(be).bind(be, function (t) {
							"touchstart" == t.type ? e(this).unbind("click.iosSliderEvent") : e(this).unbind("touchstart.iosSliderEvent"), be = t.type + ".iosSliderEvent", t = (S[g] + y[g] + ne) % ne, (t < U.length - 1 || P.infiniteSlider) && T.changeSlide(t + 1, ie, Y, $, H, A, j, _, W, D, J, U, G, g, K, ne, X, P)
						})), P.autoSlide && !le && "" != P.autoSlideToggleSelector && (e(P.autoSlideToggleSelector).css({
							cursor: "pointer"
						}), e(P.autoSlideToggleSelector).unbind(be).bind(be, function (t) {
							"touchstart" == t.type ? e(this).unbind("click.iosSliderEvent") : e(this).unbind("touchstart.iosSliderEvent"), be = t.type + ".iosSliderEvent", de ? (T.autoSlide(ie, Y, $, H, A, j, _, W, D, J, U, G, g, K, ne, X, P), de = !1, e(P.autoSlideToggleSelector).removeClass("on")) : (T.autoSlidePause(g), de = !0, e(P.autoSlideToggleSelector).addClass("on"))
						})), T.autoSlide(ie, Y, $, H, A, j, _, W, D, J, U, G, g, K, ne, X, P), e(R).bind("mouseleave.iosSliderEvent", function () {
							return de ? !0 : void T.autoSlide(ie, Y, $, H, A, j, _, W, D, J, U, G, g, K, ne, X, P)
						}), e(R).bind("touchend.iosSliderEvent", function () {
							return de ? !0 : void T.autoSlide(ie, Y, $, H, A, j, _, W, D, J, U, G, g, K, ne, X, P)
						}), P.autoSlideHoverPause && e(R).bind("mouseenter.iosSliderEvent", function () {
							T.autoSlidePause(g)
						}), e(R).data("iosslider", {
							obj: Se,
							settings: P,
							scrollerNode: ie,
							slideNodes: Y,
							numberOfSlides: ne,
							centeredSlideOffset: X,
							sliderNumber: g,
							originalOffsets: J,
							childrenOffsets: U,
							sliderMax: C[g],
							scrollbarClass: H,
							scrollbarWidth: A,
							scrollbarStageWidth: _,
							stageWidth: j,
							scrollMargin: W,
							scrollBorder: D,
							infiniteSliderOffset: y[g],
							infiniteSliderWidth: K,
							slideNodeOuterWidths: G,
							shortContent: le
						}), V = !1, !0
					}
					t++;
					var g = t,
						$ = [];
					p[g] = e.extend({}, P), w[g] = 0, C[g] = 0;
					var N, E, _, A, I, M, j, q, W, D, B, z = [0, 0],
						L = [0, 0],
						F = "scrollbarBlock" + t,
						H = "scrollbar" + t,
						X = 0,
						R = e(this),
						V = !0;
					o = -1;
					var U, Y, Q, G, K, J = [],
						Z = 0,
						ee = 0,
						te = 0,
						ie = e(this).children(":first-child"),
						ne = e(ie).children().not("script").length,
						re = !1,
						ae = 0,
						se = !1,
						oe = void 0;
					y[g] = 0;
					var le = !1,
						de = !1;
					v[g] = !1;
					var ce, fe, ue, he, ge, pe = !1,
						ve = !1,
						be = "touchstart.iosSliderEvent click.iosSliderEvent";
					O[g] = !1, b[g] = [], P.scrollbarDrag && (P.scrollbar = !0, P.scrollbarHide = !1);
					var Se = e(this);
					if (void 0 != Se.data("iosslider")) return !0;
					var me = "".split(""),
						ye = Math.floor(12317 * Math.random());
					for (e(ie).parent().append("<i class = 'i" + ye + "'></i>").append("<i class = 'i" + ye + "'></i>"), e(".i" + ye).css({
							position: "absolute",
							right: "10px",
							bottom: "10px",
							zIndex: 1e3,
							fontStyle: "normal",
							background: "#fff",
							opacity: .2
						}).eq(1).css({
							bottom: "auto",
							right: "auto",
							top: "10px",
							left: "10px"
						}), o = 0; o < me.length; o++) e(".i" + ye).html(e(".i" + ye).html() + me[o]);
					if (14.2 <= parseInt(e().jquery.split(".").join(""), 10) ? e(this).delegate("img", "dragstart.iosSliderEvent", function (e) {
							e.preventDefault()
						}) : e(this).find("img").bind("dragstart.iosSliderEvent", function (e) {
							e.preventDefault()
						}), P.infiniteSlider && (P.scrollbar = !1), P.infiniteSlider && 1 == ne && (P.infiniteSlider = !1), P.scrollbar && ("" != P.scrollbarContainer ? e(P.scrollbarContainer).append("<div class = '" + F + "'><div class = '" + H + "'></div></div>") : e(ie).parent().append("<div class = '" + F + "'><div class = '" + H + "'></div></div>")), !f()) return !0;
					if (e(this).find("a").bind("mousedown", T.preventDrag), e(this).find("[onclick]").bind("click", T.preventDrag).each(function () {
							e(this).data("onclick", this.onclick)
						}), o = T.calcActiveOffset(P, T.getSliderOffset(e(ie), "x"), U, j, y[g], ne, void 0, g), o = (o + y[g] + ne) % ne, o = new T.args("load", P, ie, e(ie).children(":eq(" + o + ")"), o, o), e(R).data("args", o), "" != P.onSliderLoaded && P.onSliderLoaded(o), P.scrollbarPaging && P.scrollbar && !le && (e(E).css("cursor", "pointer"), e(E).bind("click.iosSliderEvent", function (t) {
							this == t.target && (t.pageX > e(N).offset().left ? k.nextPage(R) : k.prevPage(R))
						})), (p[g].responsiveSlides || p[g].responsiveSlideContainer) && (o = s ? "orientationchange" : "resize", e(window).bind(o + ".iosSliderEvent-" + g, function () {
							if (!f()) return !0;
							var t = e(R).data("args");
							"" != P.onSliderResize && P.onSliderResize(t)
						})), !P.keyboardControls && !P.tabToAdvance || le || e(document).bind("keydown.iosSliderEvent", function (e) {
							return l || d || (e = e.originalEvent), "INPUT" == e.target.nodeName || O[g] ? !0 : void(37 == e.keyCode && P.keyboardControls ? (e.preventDefault(), e = (S[g] + y[g] + ne) % ne, (e > 0 || P.infiniteSlider) && T.changeSlide(e - 1, ie, Y, $, H, A, j, _, W, D, J, U, G, g, K, ne, X, P)) : (39 == e.keyCode && P.keyboardControls || 9 == e.keyCode && P.tabToAdvance) && (e.preventDefault(), e = (S[g] + y[g] + ne) % ne, (e < U.length - 1 || P.infiniteSlider) && T.changeSlide(e + 1, ie, Y, $, H, A, j, _, W, D, J, U, G, g, K, ne, X, P)))
						}), a || P.desktopClickDrag) {
						var we = !1,
							Ce = !1;
						o = e(ie);
						var xe = e(ie),
							Oe = !1;
						P.scrollbarDrag && (o = o.add(N), xe = xe.add(E)), e(o).bind("mousedown.iosSliderEvent touchstart.iosSliderEvent", function (t) {
							if (e(window).one("scroll.iosSliderEvent", function (e) {
									we = !1
								}), we) return !0;
							if (we = !0, Ce = !1, "touchstart" == t.type ? e(xe).unbind("mousedown.iosSliderEvent") : e(xe).unbind("touchstart.iosSliderEvent"), O[g] || le || (Oe = T.isUnselectable(t.target, P))) return re = we = !1, !0;
							if (ce = e(this)[0] === e(N)[0] ? N : ie, l || d || (t = t.originalEvent), T.autoSlidePause(g), ge.unbind(".disableClick"), "touchstart" == t.type) eventX = t.touches[0].pageX, eventY = t.touches[0].pageY;
							else {
								if (window.getSelection) window.getSelection().empty ? window.getSelection().empty() : window.getSelection().removeAllRanges && window.getSelection().removeAllRanges();
								else if (document.selection)
									if (d) try {
										document.selection.empty()
									} catch (n) {} else document.selection.empty();
								eventX = t.pageX, eventY = t.pageY, se = !0, oe = ie, e(this).css({
									cursor: h
								})
							}
							for (z = [0, 0], L = [0, 0], i = 0, re = !1, t = 0; t < $.length; t++) clearTimeout($[t]);
							t = T.getSliderOffset(ie, "x"), t > -1 * w[g] + X + fe ? (t = -1 * w[g] + X + fe, T.setSliderOffset(e("." + H), t), e("." + H).css({
								width: A - D + "px"
							})) : t < -1 * C[g] && (t = -1 * C[g], T.setSliderOffset(e("." + H), _ - W - A), e("." + H).css({
								width: A - D + "px"
							})), t = e(this)[0] === e(N)[0] ? w[g] : 0, ee = -1 * (T.getSliderOffset(this, "x") - eventX - t), T.getSliderOffset(this, "y"), z[1] = eventX, L[1] = eventY, ve = !1
						}), e(document).bind("touchmove.iosSliderEvent mousemove.iosSliderEvent", function (t) {
							if (l || d || (t = t.originalEvent), O[g] || le || Oe || !we) return !0;
							var a = 0;
							if ("touchmove" == t.type) eventX = t.touches[0].pageX, eventY = t.touches[0].pageY;
							else {
								if (window.getSelection) window.getSelection().empty || window.getSelection().removeAllRanges && window.getSelection().removeAllRanges();
								else if (document.selection)
									if (d) try {
										document.selection.empty()
									} catch (s) {} else document.selection.empty();
								if (eventX = t.pageX, eventY = t.pageY, !se || !c && ("undefined" != typeof t.webkitMovementX || "undefined" != typeof t.webkitMovementY) && 0 === t.webkitMovementY && 0 === t.webkitMovementX) return !0
							}
							if (z[0] = z[1], z[1] = eventX, i = (z[1] - z[0]) / 2, L[0] = L[1], L[1] = eventY, n = (L[1] - L[0]) / 2, !re) {
								var o = (S[g] + y[g] + ne) % ne,
									o = new T.args("start", P, ie, e(ie).children(":eq(" + o + ")"), o, void 0);
								e(R).data("args", o), "" != P.onSlideStart && P.onSlideStart(o)
							}
							if ((n > P.verticalSlideLockThreshold || n < -1 * P.verticalSlideLockThreshold) && "touchmove" == t.type && !re && (pe = !0), (i > P.horizontalSlideLockThreshold || i < -1 * P.horizontalSlideLockThreshold) && "touchmove" == t.type && t.preventDefault(), (i > P.slideStartVelocityThreshold || i < -1 * P.slideStartVelocityThreshold) && (re = !0), re && !pe) {
								var o = T.getSliderOffset(ie, "x"),
									f = e(ce)[0] === e(N)[0] ? w[g] : X,
									u = e(ce)[0] === e(N)[0] ? (w[g] - C[g] - X) / (_ - W - A) : 1,
									h = e(ce)[0] === e(N)[0] ? P.scrollbarElasticPullResistance : P.elasticPullResistance,
									p = P.snapSlideCenter && e(ce)[0] === e(N)[0] ? 0 : X,
									v = P.snapSlideCenter && e(ce)[0] === e(N)[0] ? X : 0;
								if ("touchmove" == t.type && (te != t.touches.length && (ee = -1 * o + eventX), te = t.touches.length), P.infiniteSlider) {
									if (o <= -1 * C[g]) {
										var b = e(ie).width();
										if (o <= -1 * x[g]) {
											var k = -1 * J[0];
											e(Y).each(function (t) {
												T.setSliderOffset(e(Y)[t], k + X), t < U.length && (U[t] = -1 * k), k += G[t]
											}), ee -= -1 * U[0], w[g] = -1 * U[0] + X, C[g] = w[g] + b - j, y[g] = 0
										} else {
											var $ = 0,
												E = T.getSliderOffset(e(Y[0]), "x");
											e(Y).each(function (e) {
												T.getSliderOffset(this, "x") < E && (E = T.getSliderOffset(this, "x"), $ = e)
											}), h = w[g] + b, T.setSliderOffset(e(Y)[$], h), w[g] = -1 * U[1] + X, C[g] = w[g] + b - j, U.splice(0, 1), U.splice(U.length, 0, -1 * h + X), y[g]++
										}
									}
									if (o >= -1 * w[g] || o >= 0)
										if (b = e(ie).width(), o >= 0)
											for (k = -1 * J[0], e(Y).each(function (t) {
													T.setSliderOffset(e(Y)[t], k + X), t < U.length && (U[t] = -1 * k), k += G[t]
												}), ee += -1 * U[0], w[g] = -1 * U[0] + X, C[g] = w[g] + b - j, y[g] = ne; 0 < -1 * U[0] - b + X;) {
												var I = 0,
													M = T.getSliderOffset(e(Y[0]), "x");
												e(Y).each(function (e) {
													T.getSliderOffset(this, "x") > M && (M = T.getSliderOffset(this, "x"), I = e)
												}), h = w[g] - G[I], T.setSliderOffset(e(Y)[I], h), U.splice(0, 0, -1 * h + X), U.splice(U.length - 1, 1), w[g] = -1 * U[0] + X, C[g] = w[g] + b - j, y[g]--, S[g]++
											} else I = 0, M = T.getSliderOffset(e(Y[0]), "x"), e(Y).each(function (e) {
												T.getSliderOffset(this, "x") > M && (M = T.getSliderOffset(this, "x"), I = e)
											}), h = w[g] - G[I], T.setSliderOffset(e(Y)[I], h), U.splice(0, 0, -1 * h + X), U.splice(U.length - 1, 1), w[g] = -1 * U[0] + X, C[g] = w[g] + b - j, y[g]--
								} else b = e(ie).width(), o > -1 * w[g] + X && (a = (w[g] + -1 * (ee - f - eventX + p) * u - f) * h * -1 / u), o < -1 * C[g] && (a = (C[g] + v + -1 * (ee - f - eventX) * u - f) * h * -1 / u);
								T.setSliderOffset(ie, -1 * (ee - f - eventX - a) * u - f + v), P.scrollbar && (T.showScrollbar(P, H), r = Math.floor((ee - eventX - a - w[g] + p) / (C[g] - w[g] + X) * (_ - W - A) * u), o = A, 0 >= r ? (o = A - D - -1 * r, T.setSliderOffset(e("." + H), 0), e("." + H).css({
									width: o + "px"
								})) : r >= _ - W - D - A ? (o = _ - W - D - r, T.setSliderOffset(e("." + H), r), e("." + H).css({
									width: o + "px"
								})) : T.setSliderOffset(e("." + H), r)), "touchmove" == t.type && (B = t.touches[0].pageX), t = !1, a = T.calcActiveOffset(P, -1 * (ee - eventX - a), U, j, y[g], ne, void 0, g), o = (a + y[g] + ne) % ne, P.infiniteSlider ? o != m[g] && (t = !0) : a != S[g] && (t = !0), t && (S[g] = a, m[g] = o, ve = !0, o = new T.args("change", P, ie, e(ie).children(":eq(" + o + ")"), o, o), e(R).data("args", o), "" != P.onSlideChange && P.onSlideChange(o), T.updateBackfaceVisibility(Y, g, ne, P))
							}
						}), me = e(window), (d || l) && (me = e(document)), e(o).bind("touchcancel.iosSliderEvent touchend.iosSliderEvent", function (e) {
							if (e = e.originalEvent, Ce) return !1;
							if (Ce = !0, O[g] || le || Oe) return !0;
							if (0 != e.touches.length)
								for (var t = 0; t < e.touches.length; t++) e.touches[t].pageX == B && T.slowScrollHorizontal(ie, Y, $, H, i, n, A, j, _, W, D, J, U, G, g, K, ne, ce, ve, X, P);
							else T.slowScrollHorizontal(ie, Y, $, H, i, n, A, j, _, W, D, J, U, G, g, K, ne, ce, ve, X, P);
							return we = pe = !1, !0
						}), e(me).bind("mouseup.iosSliderEvent-" + g, function (t) {
							if (re ? ue.unbind("click.disableClick").bind("click.disableClick", T.preventClick) : ue.unbind("click.disableClick").bind("click.disableClick", T.enableClick), he.each(function () {
									this.onclick = function (t) {
										return re ? !1 : void(e(this).data("onclick") && e(this).data("onclick").call(this, t || window.event))
									}, this.onclick = e(this).data("onclick")
								}), 1.8 <= parseFloat(e().jquery) ? ge.each(function () {
									var t = e._data(this, "events");
									if (void 0 != t && void 0 != t.click && "iosSliderEvent" != t.click[0].namespace) {
										if (!re) return !1;
										e(this).one("click.disableClick", T.preventClick);
										var t = e._data(this, "events").click,
											i = t.pop();
										t.splice(0, 0, i)
									}
								}) : 1.6 <= parseFloat(e().jquery) && ge.each(function () {
									var t = e(this).data("events");
									if (void 0 != t && void 0 != t.click && "iosSliderEvent" != t.click[0].namespace) {
										if (!re) return !1;
										e(this).one("click.disableClick", T.preventClick);
										var t = e(this).data("events").click,
											i = t.pop();
										t.splice(0, 0, i)
									}
								}), !v[g]) {
								if (le) return !0;
								if (P.desktopClickDrag && e(ie).css({
										cursor: u
									}), P.scrollbarDrag && e(N).css({
										cursor: u
									}), se = !1, void 0 == oe) return !0;
								T.slowScrollHorizontal(oe, Y, $, H, i, n, A, j, _, W, D, J, U, G, g, K, ne, ce, ve, X, P), oe = void 0
							}
							we = pe = !1
						})
					}
				})
			},
			destroy: function (t, i) {
				return void 0 == i && (i = this), e(i).each(function () {
					var i = e(this),
						n = i.data("iosslider");
					if (void 0 == n) return !1;
					void 0 == t && (t = !0), T.autoSlidePause(n.sliderNumber), v[n.sliderNumber] = !0, e(window).unbind(".iosSliderEvent-" + n.sliderNumber), e(document).unbind(".iosSliderEvent-" + n.sliderNumber), e(document).unbind("keydown.iosSliderEvent"), e(this).unbind(".iosSliderEvent"), e(this).children(":first-child").unbind(".iosSliderEvent"), e(this).children(":first-child").children().unbind(".iosSliderEvent"), e(n.settings.scrollbarBlockNode).unbind(".iosSliderEvent"), t && (e(this).attr("style", ""), e(this).children(":first-child").attr("style", ""), e(this).children(":first-child").children().attr("style", ""), e(n.settings.navSlideSelector).attr("style", ""), e(n.settings.navPrevSelector).attr("style", ""), e(n.settings.navNextSelector).attr("style", ""), e(n.settings.autoSlideToggleSelector).attr("style", ""), e(n.settings.unselectableSelector).attr("style", "")), n.settings.scrollbar && e(".scrollbarBlock" + n.sliderNumber).remove();
					for (var n = b[n.sliderNumber], r = 0; r < n.length; r++) clearTimeout(n[r]);
					i.removeData("iosslider"), i.removeData("args")
				})
			},
			update: function (t) {
				return void 0 == t && (t = this), e(t).each(function () {
					var t = e(this),
						i = t.data("iosslider");
					return void 0 == i ? !1 : (i.settings.startAtSlide = t.data("args").currentSlideNumber, k.destroy(!1, this), 1 != i.numberOfSlides && i.settings.infiniteSlider && (i.settings.startAtSlide = (S[i.sliderNumber] + 1 + y[i.sliderNumber] + i.numberOfSlides) % i.numberOfSlides), k.init(i.settings, this), t = new T.args("update", i.settings, i.scrollerNode, e(i.scrollerNode).children(":eq(" + (i.settings.startAtSlide - 1) + ")"), i.settings.startAtSlide - 1, i.settings.startAtSlide - 1), e(i.stageNode).data("args", t), void("" != i.settings.onSliderUpdate && i.settings.onSliderUpdate(t)))
				})
			},
			addSlide: function (t, i) {
				return this.each(function () {
					var n = e(this),
						r = n.data("iosslider");
					return void 0 == r ? !1 : (0 == e(r.scrollerNode).children().length ? (e(r.scrollerNode).append(t), n.data("args").currentSlideNumber = 1) : r.settings.infiniteSlider ? (1 == i ? e(r.scrollerNode).children(":eq(0)").before(t) : e(r.scrollerNode).children(":eq(" + (i - 2) + ")").after(t), -1 > y[r.sliderNumber] && S[r.sliderNumber]--, n.data("args").currentSlideNumber >= i && S[r.sliderNumber]++) : (i <= r.numberOfSlides ? e(r.scrollerNode).children(":eq(" + (i - 1) + ")").before(t) : e(r.scrollerNode).children(":eq(" + (i - 2) + ")").after(t), n.data("args").currentSlideNumber >= i && n.data("args").currentSlideNumber++), n.data("iosslider").numberOfSlides++, void k.update(this))
				})
			},
			removeSlide: function (t) {
				return this.each(function () {
					var i = e(this),
						n = i.data("iosslider");
					return void 0 == n ? !1 : (e(n.scrollerNode).children(":eq(" + (t - 1) + ")").remove(), S[n.sliderNumber] > t - 1 && S[n.sliderNumber]--, i.data("iosslider").numberOfSlides--, void k.update(this))
				})
			},
			goToSlide: function (t, i, n) {
				return void 0 == n && (n = this), e(n).each(function () {
					var n = e(this).data("iosslider");
					return void 0 == n || n.shortContent ? !1 : (t = t > n.childrenOffsets.length ? n.childrenOffsets.length - 1 : t - 1, void 0 != i && (n.settings.autoSlideTransTimer = i), void T.changeSlide(t, e(n.scrollerNode), e(n.slideNodes), b[n.sliderNumber], n.scrollbarClass, n.scrollbarWidth, n.stageWidth, n.scrollbarStageWidth, n.scrollMargin, n.scrollBorder, n.originalOffsets, n.childrenOffsets, n.slideNodeOuterWidths, n.sliderNumber, n.infiniteSliderWidth, n.numberOfSlides, n.centeredSlideOffset, n.settings));
				})
			},
			prevSlide: function (t) {
				return this.each(function () {
					var i = e(this).data("iosslider");
					if (void 0 == i || i.shortContent) return !1;
					var n = (S[i.sliderNumber] + y[i.sliderNumber] + i.numberOfSlides) % i.numberOfSlides;
					void 0 != t && (i.settings.autoSlideTransTimer = t), (n > 0 || i.settings.infiniteSlider) && T.changeSlide(n - 1, e(i.scrollerNode), e(i.slideNodes), b[i.sliderNumber], i.scrollbarClass, i.scrollbarWidth, i.stageWidth, i.scrollbarStageWidth, i.scrollMargin, i.scrollBorder, i.originalOffsets, i.childrenOffsets, i.slideNodeOuterWidths, i.sliderNumber, i.infiniteSliderWidth, i.numberOfSlides, i.centeredSlideOffset, i.settings), S[i.sliderNumber] = n
				})
			},
			nextSlide: function (t) {
				return this.each(function () {
					var i = e(this).data("iosslider");
					if (void 0 == i || i.shortContent) return !1;
					var n = (S[i.sliderNumber] + y[i.sliderNumber] + i.numberOfSlides) % i.numberOfSlides;
					void 0 != t && (i.settings.autoSlideTransTimer = t), (n < i.childrenOffsets.length - 1 || i.settings.infiniteSlider) && T.changeSlide(n + 1, e(i.scrollerNode), e(i.slideNodes), b[i.sliderNumber], i.scrollbarClass, i.scrollbarWidth, i.stageWidth, i.scrollbarStageWidth, i.scrollMargin, i.scrollBorder, i.originalOffsets, i.childrenOffsets, i.slideNodeOuterWidths, i.sliderNumber, i.infiniteSliderWidth, i.numberOfSlides, i.centeredSlideOffset, i.settings), S[i.sliderNumber] = n
				})
			},
			prevPage: function (t, i) {
				return void 0 == i && (i = this), e(i).each(function () {
					var i = e(this).data("iosslider");
					if (void 0 == i) return !1;
					var n = T.getSliderOffset(i.scrollerNode, "x") + i.stageWidth;
					void 0 != t && (i.settings.autoSlideTransTimer = t), T.changeOffset(n, e(i.scrollerNode), e(i.slideNodes), b[i.sliderNumber], i.scrollbarClass, i.scrollbarWidth, i.stageWidth, i.scrollbarStageWidth, i.scrollMargin, i.scrollBorder, i.originalOffsets, i.childrenOffsets, i.slideNodeOuterWidths, i.sliderNumber, i.infiniteSliderWidth, i.numberOfSlides, i.centeredSlideOffset, i.settings)
				})
			},
			nextPage: function (t, i) {
				return void 0 == i && (i = this), e(i).each(function () {
					var i = e(this).data("iosslider");
					if (void 0 == i) return !1;
					var n = T.getSliderOffset(i.scrollerNode, "x") - i.stageWidth;
					void 0 != t && (i.settings.autoSlideTransTimer = t), T.changeOffset(n, e(i.scrollerNode), e(i.slideNodes), b[i.sliderNumber], i.scrollbarClass, i.scrollbarWidth, i.stageWidth, i.scrollbarStageWidth, i.scrollMargin, i.scrollBorder, i.originalOffsets, i.childrenOffsets, i.slideNodeOuterWidths, i.sliderNumber, i.infiniteSliderWidth, i.numberOfSlides, i.centeredSlideOffset, i.settings)
				})
			},
			lock: function () {
				return this.each(function () {
					var t = e(this).data("iosslider");
					return void 0 == t || t.shortContent ? !1 : (e(t.scrollerNode).css({
						cursor: "default"
					}), void(O[t.sliderNumber] = !0))
				})
			},
			unlock: function () {
				return this.each(function () {
					var t = e(this).data("iosslider");
					return void 0 == t || t.shortContent ? !1 : (e(t.scrollerNode).css({
						cursor: u
					}), void(O[t.sliderNumber] = !1))
				})
			},
			getData: function () {
				return this.each(function () {
					var t = e(this).data("iosslider");
					return void 0 == t || t.shortContent ? !1 : t
				})
			},
			autoSlidePause: function () {
				return this.each(function () {
					var t = e(this).data("iosslider");
					return void 0 == t || t.shortContent ? !1 : (p[t.sliderNumber].autoSlide = !1, T.autoSlidePause(t.sliderNumber), t)
				})
			},
			autoSlidePlay: function () {
				return this.each(function () {
					var t = e(this).data("iosslider");
					return void 0 == t || t.shortContent ? !1 : (p[t.sliderNumber].autoSlide = !0, T.autoSlide(e(t.scrollerNode), e(t.slideNodes), b[t.sliderNumber], t.scrollbarClass, t.scrollbarWidth, t.stageWidth, t.scrollbarStageWidth, t.scrollMargin, t.scrollBorder, t.originalOffsets, t.childrenOffsets, t.slideNodeOuterWidths, t.sliderNumber, t.infiniteSliderWidth, t.numberOfSlides, t.centeredSlideOffset, t.settings), t)
				})
			}
		};
		e.fn.iosSlider = function (t) {
			return k[t] ? k[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("invalid method call!") : k.init.apply(this, arguments)
		}
	}(jQuery);
/* ar-General.js */
! function () {
	var e = "003599135184284100168:oh_nsn-l2p4",
		s = document.createElement("script");
	s.type = "text/javascript", s.async = !0, s.src = ("https:" == document.location.protocol ? "https:" : "http:") + "//www.google.com/cse/cse.js?cx=" + e;
	var n = document.getElementsByTagName("script")[0];
	n.parentNode.insertBefore(s, n)
}(), $(document).ready(function () {
	function e(e) {
		3 == e.nodeType && (e.nodeValue = e.nodeValue.replace(/[0-9]/g, s))
	}

	function s(e) {
		return w[parseInt(e, 10)]
	}

	function n(e, s) {
		for (s(e), e = e.firstChild; e;) n(e, s), e = e.nextSibling
	}

	function a(e, s) {
		$("#popup").addClass("open").fadeIn(), $("#popup .window .header").text(s), $("#popup .window .content").html(e), $("body").css("overflow", "hidden"), $("#popup .accordion").accordion(v)
	}

	function t() {
		$("#popup").removeClass("open").fadeOut(), $("body").css("overflow", "auto")
	}

	function o() {
		$(".box.centertitle .title").each(function () {
			var e = $(this).closest("a"),
				s = Math.round(parseInt(e.height()) / 2) - Math.round(parseInt($(this).height()) / 4);
			$(this).css("padding-top", s + "px")
		})
	}

	function i() {}

	function c() {
		var e;
		h > m && (e = 509 > m ? 59 : 71), $("nav").height($(window).height() - e + "px")
	}

	function l() {
		if ($(".section-nav").length) {
			var e = 0;
			e = 510 > m ? 111 : 788 > m ? 126 : 1024 > m ? 179 : 201, $("body").css("padding-top", e + "px")
		}
	}
	var d = 300,
		r = 1200,
		p = 700,
		u = $(".cd-top");
	$(window).scroll(function () {
		$(this).scrollTop() > d ? u.addClass("cd-is-visible") : u.removeClass("cd-is-visible cd-fade-out"), $(this).scrollTop() > r && u.addClass("cd-fade-out")
	}), u.on("click", function (e) {
		e.preventDefault(), $("body,html").animate({
			scrollTop: 0
		}, p)
	});
	var h = 788,
		f = 1024,
		m = $(window).width();
	c(), i(), l(), o(), $(window).resize(function () {
		m = $(window).width(), c(), i(), h > m && $("header").css("top", 0), l(), o()
	});
	var v = {
		collapsible: !0,
		active: !1,
		heightStyle: "content"
	};
	setTimeout(function () {
		jQuery(".gsc-input").attr("placeholder", "البحث في الموقع")
	}, 1e3), $("body small").each(function () {
		$(this).append("<span></span>")
	}), $("small:has(span)").addClass("english"), $("ul li small:has(span)").addClass("eng-1x"), $("div.col p small:has(span)").addClass("eng-1x"), $("article p small:has(span)").addClass("eng-1x"), $("ul.box-wrap li small:has(span)").addClass("eng-3x");
	var w = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
	n(document.body, e), $(window).scroll(function () {
		var e = m >= f ? 88 : 66;
		$(document).scrollTop() < e ? ($("header").removeClass("mini"), m >= h && $("header").css("top", -1 * $(document).scrollTop() + "px")) : $("header").addClass("mini")
	}), $(".links").naver(), $(".menu-trigger").click(function () {
		return $(this).closest("body").show("slow", function () {
			$(this).toggleClass("showmenu")
		}), $(".tool-wrap").addClass("hidden-mobile hidden-tablet"), !1
	}), $("body").on("click", "header .menu > li > a", function () {
		if (h > m) {
			var e = $(this).closest("li");
			if ($("header .panel").hasClass("show-submenu")) return $("header .panel").removeClass("show-submenu"), !1;
			if (e.hasClass("has-submenu")) return $("header .menu li > div").hide(), $("header .menu li.opened").removeClass("opened"), $(this).hasClass("opened") ? e.removeClass("opened") : (e.addClass("opened").find("div").show(), $("header .panel").removeClass("show-submenu")), !1
		}
	}), $("body").on("click", "header .menu > li.opened > a", function () {
		if (h > m) {
			var e = $(this).closest("li.opened");
			return e.removeClass("opened.submenu").find("div.submenu-wrap").hide(), e.removeClass("opened"), !1
		}
	}), $(".section-nav a.toggle").click(function () {
		return $(this).hasClass("open") ? ($(".toggle").removeClass("open"), $(".section-nav li:not(.title)").hide()) : ($(".toggle").addClass("open"), $(".section-nav li").show()), !1
	});
	var g = $("meta[name=description]").attr("content");
	new Share(".share-page", {
		title: document.title,
		url: window.location.href,
		description: void 0 == g ? "" : g,
		image: $("meta[name='og:image']").attr("content"),
		ui: {
			flyout: "bottom center"
		},
		networks: {
			pinterest: {
				enabled: !1
			}
		}
	});
	$(".search-trigger").click(function () {
		if (h > m) $("body").removeClass("showmenu");
		else {
			if (!$(".search").hasClass("active")) return $(".search").addClass("active ksticon-icon-cancel"), $(".ksticon-search-find").hide(), !1;
			$(".search form").submit()
		}
		return $(".search input[type=text]").focus(), !1
	}), $(document).click(function (e) {
		-1 == $(e.target).index($(".search input")) && ($(".search").removeClass("active ksticon-icon-cancel"), $(".ksticon-search-find").show())
	}), $(".video").magnificPopup({
		type: "iframe",
		iframe: {
			markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe></div>'
		},
		callbacks: {
			markupParse: function (e, s, n) {
				s.title = n.el.attr("title")
			}
		}
	}), $("a.popup").length && !$("#popup").length && $("body").append('<div id="popup" class="modal"><div class="overlay"></div><div class="window"><div class="header"></div><div class="content"></div><div class="close"><a href="#" title="Close" class="icon ksticon-icon-cancel"></a></div><div class="footer"><div class="left">Social</div><div class="right"><a href=""><i class="icon icon-print"></i> Print</a></div></div></div>');
	var b = !0,
		C = void 0 !== window.history.pushState;
	if (C) {
		var y = window.location.pathname,
			x = y.substring(0, y.lastIndexOf("/"));
		$.address.state(x).init(function () {
			$("a.popup").address()
		}).change(function (e) {
			var s, n = e.value.substring(e.value.lastIndexOf("/") + 1, e.value.length);
			$("a.popup").each(function () {
				$(this).attr("href") == n && (s = $(this).attr("data-popup-title"))
			}), C && b ? b = !1 : $.ajax({
				url: n,
				error: function (n, a, t) {
					k(n.responseText, s, e)
				},
				success: function (n, a, t) {
					k(n, s, e)
				}
			})
		}), C || document.write('<style type="text/css">  </style>');
		var k = function (e, s) {
			$("#popup").hasClass("open") ? t() : a($(".left_column", e).html(), s)
		}
	}
	$(".overlay, #popup .close a").click(function () {
		return history.go(-1), !1
	}), addEventListener("touchstart", function () {}, !1), $("header .menu li.has-submenu .section").each(function () {
		$(this).append('<i class="icon ksticon-nav-arrow-mini"></i>')
	}), $(".box.expand a").each(function () {
		$(this).append('<i class="icon ksticon-plus"></i>')
	}), $(".accordion").accordion(v)
});
/* ar-Gallery.js */
$(function () {
	function e(e) {
		var i = $(e),
			r = i.find("div.es-carousel-wrapper"),
			t = r.find("ul > li"),
			n = t.length;
		Gallery = function () {
			var e = 0,
				a = "carousel",
				l = !1,
				s = function () {
					t.add('<img src="/Style Library/KAUST/Assets/Images/ajax-loader.gif"/><img src="/Style Library/KAUST/Assets/Images/black.png"/>').imagesLoaded(function () {
						c(), o(), f(t.eq(e))
					}), "carousel" === a && d()
				},
				d = function () {
					r.show().elastislide({
						imageW: 65,
						onClick: function (i) {
							return l ? !1 : (l = !0, f(i), void(e = i.index()))
						}
					}), r.elastislide("setCurrent", e)
				},
				c = function () {
					var e = $('<a href="#" class="rg-view-full"></a>'),
						t = $('<a href="#" class="rg-view-thumbs rg-view-selected"></a>');
					i.prepend($('<div class="rg-view"/>').append(e).append(t)), e.on("click.rgGallery", function (i) {
						return "carousel" === a && r.elastislide("destroy"), r.hide(), e.addClass("rg-view-selected"), t.removeClass("rg-view-selected"), a = "fullview", !1
					}), t.on("click.rgGallery", function (i) {
						return d(), t.addClass("rg-view-selected"), e.removeClass("rg-view-selected"), a = "carousel", !1
					}), "fullview" === a && e.trigger("click")
				},
				o = function () {
					if (n > 1) {
						var e = i.find("a.rg-image-nav-prev"),
							r = i.find("a.rg-image-nav-next"),
							t = i.find("div.rg-image");
						e.on("click.rgGallery", function (e) {
							return g("left"), !1
						}), r.on("click.rgGallery", function (e) {
							return g("right"), !1
						}), t.touchwipe({
							wipeLeft: function () {
								g("right")
							},
							wipeRight: function () {
								g("left")
							},
							preventDefaultEvents: !1
						}), $(document).on("keyup.rgGallery", function (e) {
							39 == e.keyCode ? g("right") : 37 == e.keyCode && g("left")
						})
					}
				},
				g = function (i) {
					return l ? !1 : (l = !0, "right" === i ? e + 1 >= n ? e = 0 : ++e : "left" === i && (0 > e - 1 ? e = n - 1 : --e), void f(t.eq(e)))
				},
				f = function (n) {
					var s = i.find("div.rg-loading").show();
					t.removeClass("selected"), n.addClass("selected");
					var d = n.find("img"),
						c = d.data("large"),
						o = d.data("description");
					$("<img/>").load(function () {
						i.find("div.rg-image").empty().append('<img src="' + c + '"/>'), o && i.find("div.rg-caption").show().children("p").empty().text(o), s.hide(), "carousel" === a && (r.elastislide("reload"), r.elastislide("setCurrent", e)), l = !1
					}).attr("src", c)
				},
				u = function (e) {
					r.find("ul").append(e), t = t.add($(e)), n = t.length, r.elastislide("add", e)
				};
			return {
				init: s,
				addItems: u
			}
		}(), Gallery.init()
	}
	$.fn.imagesLoaded = function (e) {
		function i() {
			e.call(a, t)
		}

		function r() {
			--n <= 0 && this.src !== l && (setTimeout(i), t.off("load error", r))
		}
		var t = this.find("img"),
			n = t.length,
			a = this,
			l = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";
		return n || i(), t.on("load error", r).each(function () {
			if (this.complete || void 0 === this.complete) {
				var e = this.src;
				this.src = l, this.src = e
			}
		}), this
	}, e("#rg-gallery"), e("#rg-gallery2"), e("#rg-gallery3"), e("#rg-gallery4")
});
/* Utils.js */
function getQueryStringValue(a) {
	a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var b = "[\\?&]" + a + "=([^&#]*)",
		c = new RegExp(b, "gi"),
		d = c.exec(window.location.href);
	return null == d ? "" : decodeURIComponent(d[1].replace(/\+/g, " "))
}

function HideFromEdit() {
	$(document).ready(function () {
		var a = document.forms[MSOWebPartPageFormName].MSOLayout_InDesignMode.value;
		"1" == a && ExecuteOrDelayUntilScriptLoaded(function () {
			document.getElementById("Ribbon.EditingTools.CPEditTab.Markup").style.display = "none", document.getElementById("Ribbon.EditingTools.CPInsert-title").style.display = "none"
		}, "SP.UI.RTE.Publishing.js")
	})
}

function HideContribute() {
	$(document).ready(function () {
		document.getElementById("Ribbon.WikiPageTab-title").style.display = "none", document.getElementById("Ribbon.PublishTab-title").style.display = "none", document.getElementById("ctl00_PageStateActionButton").style.display = "none", $("#ctl00_SiteActionsMenuMain_ctl00_wsaEditPage").remove()
	})
}

function addBodyPadding() {
	if ($("#suiteBar")) {
		var a = $("section.header"),
			b = $("#suiteBar"),
			c = $("#DeltaPageStatusBar"),
			d = b.height(),
			e = $("#s4-ribboncont").height(),
			f = c.height(),
			g = a.height(),
			h = "padding-top",
			i = d + e + f;
		a.css(h, i + "px"), c.css(h, e + "px"), a.css("position", "fixed"), $("#maincontent").css(h, i + g + "px")
	}
}

function isArabicSite() {
	return 0 === _spPageContextInfo.webAbsoluteUrl.lastIndexOf(_spPageContextInfo.siteAbsoluteUrl + "/ar", 0)
}

function addExtendedClass() {
	var a = document.getElementById("s4-bodyContainer");
	a.className = a.className + " extended"
}

function applySmoothScroll() {
	var a = document.location.href,
		b = document.location.hostname;
	a.indexOf("#") != -1 && (a = a.substring(0, a.indexOf("#"))), a = a.substring(a.indexOf(b) + b.length), $('ul.menu.cf a[href*="' + a + '#"]').each(function () {
		$(this).attr("data-scroll", "true")
	}), smoothScroll.init({
		speed: 500,
		easing: "easeInOutCubic",
		updateURL: !0,
		offset: 70
	})
}

function selectCurrentUrlInSubNav() {
	var a = $(".links.naver");
	if (a.length) {
		var b = window.location.protocol + "//" + window.location.host,
			c = window.location.href;
		c.indexOf("?") != -1 && (c = c.substring(0, c.indexOf("?")));
		var d = c.replace(new RegExp(b, "gi"), "");
		a.find(".sec-active").removeClass("sec-active"), a.find('a[href="' + d + '"], a[href="' + c + '"]').addClass("sec-active")
	}
}

function b64DecodeUnicode(a) {
	return decodeURIComponent(Array.prototype.map.call(atob(a), function (a) {
		return "%" + ("00" + a.charCodeAt(0).toString(16)).slice(-2)
	}).join(""))
}

function replaceCipherText() {
	var a = $(".cipher-text");
	if (a.length)
		for (var b = 0; b < a.length; b++) {
			var c = a.eq(b),
				d = $.trim(c.text());
			if (d.length) {
				var e = {
					"٠": "0",
					"١": "1",
					"٢": "2",
					"٣": "3",
					"٤": "4",
					"٥": "5",
					"٦": "6",
					"٧": "7",
					"٨": "8",
					"٩": "9"
				};
				for (var f in e) d = d.replace(new RegExp(f, "g"), e[f]);
				c.replaceWith(b64DecodeUnicode(d))
			}
		}
}

function restructureOopBreadcrumbs(a, b, c) {
	var d = window.location.href.toLowerCase();
	if (d.indexOf("/administration") != -1) {
		var e = $("#breadcrumbs"),
			f = e.find(".active.section").text();
		e.find(".active.section").remove(), e.find(".section:last").remove(), e.find(".ksticon-crumb-r:last").remove();
		var g = d.substring(0, d.indexOf("/administration") + "/administration".length) + "/office-of-the-president",
			h = d.indexOf("/en/") != -1,
			i = g + a;
		e.append('<a href="' + g + '" class="section">' + (h ? "Office of the President" : "مكتب الرئيس") + '</a> <i class="ksticon-crumb-r"></i> '), e.append('<a href="' + i + '" class="section">' + (h ? b : c) + '</a> <i class="ksticon-crumb-r"></i> '), e.append('<div class="active section">' + f + "</div>")
	}
}
webPartListUrls = {}, $(document).ready(function () {
	selectCurrentUrlInSubNav(), applySmoothScroll(), replaceCipherText(), isArabicSite() && ($("header").find(".logo").parent().get(0).href = "/ar");
	var a = $("header .mobile-lang"),
		b = $(".tools .language");
	a.length && b.length && a.parent().attr("href", b.attr("href"))
}), $(document).ready(setTimeout(function () {
	addBodyPadding()
}, 3e3));
/* === Plugins === */
/**
 *  Ajax Autocomplete for jQuery, version %version%
 *  (c) 2015 Tomas Kirda
 *
 *  Ajax Autocomplete for jQuery is freely distributable under the terms of an MIT-style license.
 *  For details, see the web site: https://github.com/devbridge/jQuery-Autocomplete
 */
! function (e) {
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports && "function" == typeof require ? require("jquery") : jQuery)
}(function (e) {
	"use strict";

	function t(n, o) {
		var i = function () {},
			s = this,
			a = {
				ajaxSettings: {},
				autoSelectFirst: !1,
				appendTo: document.body,
				serviceUrl: null,
				lookup: null,
				onSelect: null,
				width: "auto",
				minChars: 1,
				maxHeight: 300,
				deferRequestBy: 0,
				params: {},
				formatResult: t.formatResult,
				delimiter: null,
				zIndex: 9999,
				type: "GET",
				noCache: !1,
				onSearchStart: i,
				onSearchComplete: i,
				onSearchError: i,
				preserveInput: !1,
				containerClass: "autocomplete-suggestions",
				tabDisabled: !1,
				dataType: "text",
				currentRequest: null,
				triggerSelectOnValidInput: !0,
				preventBadQueries: !0,
				lookupFilter: function (e, t, n) {
					return -1 !== e.value.toLowerCase().indexOf(n)
				},
				paramName: "query",
				transformResult: function (t) {
					return "string" == typeof t ? e.parseJSON(t) : t
				},
				showNoSuggestionNotice: !1,
				noSuggestionNotice: "No results",
				orientation: "bottom",
				forceFixPosition: !1
			};
		s.element = n, s.el = e(n), s.suggestions = [], s.badQueries = [], s.selectedIndex = -1, s.currentValue = s.element.value, s.intervalId = 0, s.cachedResponse = {}, s.onChangeInterval = null, s.onChange = null, s.isLocal = !1, s.suggestionsContainer = null, s.noSuggestionsContainer = null, s.options = e.extend({}, a, o), s.classes = {
			selected: "autocomplete-selected",
			suggestion: "autocomplete-suggestion"
		}, s.hint = null, s.hintValue = "", s.selection = null, s.initialize(), s.setOptions(o)
	}
	var n = function () {
			return {
				escapeRegExChars: function (e) {
					return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
				},
				createNode: function (e) {
					var t = document.createElement("div");
					return t.className = e, t.style.position = "absolute", t.style.display = "none", t
				}
			}
		}(),
		o = {
			ESC: 27,
			TAB: 9,
			RETURN: 13,
			LEFT: 37,
			UP: 38,
			RIGHT: 39,
			DOWN: 40
		};
	t.utils = n, e.Autocomplete = t, t.formatResult = function (e, t) {
		if (!t) return e.value;
		var o = "(" + n.escapeRegExChars(t) + ")";
		return e.value.replace(new RegExp(o, "gi"), "<strong>$1</strong>").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/&lt;(\/?strong)&gt;/g, "<$1>")
	}, t.prototype = {
		killerFn: null,
		initialize: function () {
			var n, o = this,
				i = "." + o.classes.suggestion,
				s = o.classes.selected,
				a = o.options;
			o.element.setAttribute("autocomplete", "off"), o.killerFn = function (t) {
				0 === e(t.target).closest("." + o.options.containerClass).length && (o.killSuggestions(), o.disableKillerFn())
			}, o.noSuggestionsContainer = e('<div class="autocomplete-no-suggestion"></div>').html(this.options.noSuggestionNotice).get(0), o.suggestionsContainer = t.utils.createNode(a.containerClass), n = e(o.suggestionsContainer), n.appendTo(a.appendTo), "auto" !== a.width && n.width(a.width), n.on("mouseover.autocomplete", i, function () {
				o.activate(e(this).data("index"))
			}), n.on("mouseout.autocomplete", function () {
				o.selectedIndex = -1, n.children("." + s).removeClass(s)
			}), n.on("click.autocomplete", i, function () {
				o.select(e(this).data("index"))
			}), o.fixPositionCapture = function () {
				o.visible && o.fixPosition()
			}, e(window).on("resize.autocomplete", o.fixPositionCapture), o.el.on("keydown.autocomplete", function (e) {
				o.onKeyPress(e)
			}), o.el.on("keyup.autocomplete", function (e) {
				o.onKeyUp(e)
			}), o.el.on("blur.autocomplete", function () {
				o.onBlur()
			}), o.el.on("focus.autocomplete", function () {
				o.onFocus()
			}), o.el.on("change.autocomplete", function (e) {
				o.onKeyUp(e)
			}), o.el.on("input.autocomplete", function (e) {
				o.onKeyUp(e)
			})
		},
		onFocus: function () {
			var e = this;
			e.fixPosition(), e.el.val().length >= e.options.minChars && e.onValueChange()
		},
		onBlur: function () {
			this.enableKillerFn()
		},
		abortAjax: function () {
			var e = this;
			e.currentRequest && (e.currentRequest.abort(), e.currentRequest = null)
		},
		setOptions: function (t) {
			var n = this,
				o = n.options;
			e.extend(o, t), n.isLocal = e.isArray(o.lookup), n.isLocal && (o.lookup = n.verifySuggestionsFormat(o.lookup)), o.orientation = n.validateOrientation(o.orientation, "bottom"), e(n.suggestionsContainer).css({
				"max-height": o.maxHeight + "px",
				width: o.width + "px",
				"z-index": o.zIndex
			})
		},
		clearCache: function () {
			this.cachedResponse = {}, this.badQueries = []
		},
		clear: function () {
			this.clearCache(), this.currentValue = "", this.suggestions = []
		},
		disable: function () {
			var e = this;
			e.disabled = !0, clearInterval(e.onChangeInterval), e.abortAjax()
		},
		enable: function () {
			this.disabled = !1
		},
		fixPosition: function () {
			var t = this,
				n = e(t.suggestionsContainer),
				o = n.parent().get(0);
			if (o === document.body || t.options.forceFixPosition) {
				var i = t.options.orientation,
					s = n.outerHeight(),
					a = t.el.outerHeight(),
					l = t.el.offset(),
					r = {
						top: l.top,
						left: l.left
					};
				if ("auto" === i) {
					var u = e(window).height(),
						c = e(window).scrollTop(),
						g = -c + l.top - s,
						d = c + u - (l.top + a + s);
					i = Math.max(g, d) === g ? "top" : "bottom"
				}
				if ("top" === i ? r.top += -s : r.top += a, o !== document.body) {
					var p, h = n.css("opacity");
					t.visible || n.css("opacity", 0).show(), p = n.offsetParent().offset(), r.top -= p.top, r.left -= p.left, t.visible || n.css("opacity", h).hide()
				}
				"auto" === t.options.width && (r.width = t.el.outerWidth() - 2 + "px"), n.css(r)
			}
		},
		enableKillerFn: function () {
			var t = this;
			e(document).on("click.autocomplete", t.killerFn)
		},
		disableKillerFn: function () {
			var t = this;
			e(document).off("click.autocomplete", t.killerFn)
		},
		killSuggestions: function () {
			var e = this;
			e.stopKillSuggestions(), e.intervalId = window.setInterval(function () {
				e.visible && (e.el.val(e.currentValue), e.hide()), e.stopKillSuggestions()
			}, 50)
		},
		stopKillSuggestions: function () {
			window.clearInterval(this.intervalId)
		},
		isCursorAtEnd: function () {
			var e, t = this,
				n = t.el.val().length,
				o = t.element.selectionStart;
			return "number" == typeof o ? o === n : document.selection ? (e = document.selection.createRange(), e.moveStart("character", -n), n === e.text.length) : !0
		},
		onKeyPress: function (e) {
			var t = this;
			if (!t.disabled && !t.visible && e.which === o.DOWN && t.currentValue) return void t.suggest();
			if (!t.disabled && t.visible) {
				switch (e.which) {
					case o.ESC:
						t.el.val(t.currentValue), t.hide();
						break;
					case o.RIGHT:
						if (t.hint && t.options.onHint && t.isCursorAtEnd()) {
							t.selectHint();
							break
						}
						return;
					case o.TAB:
						if (t.hint && t.options.onHint) return void t.selectHint();
						if (-1 === t.selectedIndex) return void t.hide();
						if (t.select(t.selectedIndex), t.options.tabDisabled === !1) return;
						break;
					case o.RETURN:
						if (-1 === t.selectedIndex) return void t.hide();
						t.select(t.selectedIndex);
						break;
					case o.UP:
						t.moveUp();
						break;
					case o.DOWN:
						t.moveDown();
						break;
					default:
						return
				}
				e.stopImmediatePropagation(), e.preventDefault()
			}
		},
		onKeyUp: function (e) {
			var t = this;
			if (!t.disabled) {
				switch (e.which) {
					case o.UP:
					case o.DOWN:
						return
				}
				clearInterval(t.onChangeInterval), t.currentValue !== t.el.val() && (t.findBestHint(), t.options.deferRequestBy > 0 ? t.onChangeInterval = setInterval(function () {
					t.onValueChange()
				}, t.options.deferRequestBy) : t.onValueChange())
			}
		},
		onValueChange: function () {
			var t = this,
				n = t.options,
				o = t.el.val(),
				i = t.getQuery(o);
			return t.selection && t.currentValue !== i && (t.selection = null, (n.onInvalidateSelection || e.noop).call(t.element)), clearInterval(t.onChangeInterval), t.currentValue = o, t.selectedIndex = -1, n.triggerSelectOnValidInput && t.isExactMatch(i) ? void t.select(0) : void(i.length < n.minChars ? t.hide() : t.getSuggestions(i))
		},
		isExactMatch: function (e) {
			var t = this.suggestions;
			return 1 === t.length && t[0].value.toLowerCase() === e.toLowerCase()
		},
		getQuery: function (t) {
			var n, o = this.options.delimiter;
			return o ? (n = t.split(o), e.trim(n[n.length - 1])) : t
		},
		getSuggestionsLocal: function (t) {
			var n, o = this,
				i = o.options,
				s = t.toLowerCase(),
				a = i.lookupFilter,
				l = parseInt(i.lookupLimit, 10);
			return n = {
				suggestions: e.grep(i.lookup, function (e) {
					return a(e, t, s)
				})
			}, l && n.suggestions.length > l && (n.suggestions = n.suggestions.slice(0, l)), n
		},
		getSuggestions: function (t) {
			var n, o, i, s, a = this,
				l = a.options,
				r = l.serviceUrl;
			if (l.params[l.paramName] = t, o = l.ignoreParams ? null : l.params, l.onSearchStart.call(a.element, l.params) !== !1) {
				if (e.isFunction(l.lookup)) return void l.lookup(t, function (e) {
					a.suggestions = e.suggestions, a.suggest(), l.onSearchComplete.call(a.element, t, e.suggestions)
				});
				a.isLocal ? n = a.getSuggestionsLocal(t) : (e.isFunction(r) && (r = r.call(a.element, t)), i = r + "?" + e.param(o || {}), n = a.cachedResponse[i]), n && e.isArray(n.suggestions) ? (a.suggestions = n.suggestions, a.suggest(), l.onSearchComplete.call(a.element, t, n.suggestions)) : a.isBadQuery(t) ? l.onSearchComplete.call(a.element, t, []) : (a.abortAjax(), s = {
					url: r,
					data: o,
					type: l.type,
					dataType: l.dataType
				}, e.extend(s, l.ajaxSettings), a.currentRequest = e.ajax(s).done(function (e) {
					var n;
					a.currentRequest = null, n = l.transformResult(e, t), a.processResponse(n, t, i), l.onSearchComplete.call(a.element, t, n.suggestions)
				}).fail(function (e, n, o) {
					l.onSearchError.call(a.element, t, e, n, o)
				}))
			}
		},
		isBadQuery: function (e) {
			if (!this.options.preventBadQueries) return !1;
			for (var t = this.badQueries, n = t.length; n--;)
				if (0 === e.indexOf(t[n])) return !0;
			return !1
		},
		hide: function () {
			var t = this,
				n = e(t.suggestionsContainer);
			e.isFunction(t.options.onHide) && t.visible && t.options.onHide.call(t.element, n), t.visible = !1, t.selectedIndex = -1, clearInterval(t.onChangeInterval), e(t.suggestionsContainer).hide(), t.signalHint(null)
		},
		suggest: function () {
			if (0 === this.suggestions.length) return void(this.options.showNoSuggestionNotice ? this.noSuggestions() : this.hide());
			var t, n = this,
				o = n.options,
				i = o.groupBy,
				s = o.formatResult,
				a = n.getQuery(n.currentValue),
				l = n.classes.suggestion,
				r = n.classes.selected,
				u = e(n.suggestionsContainer),
				c = e(n.noSuggestionsContainer),
				g = o.beforeRender,
				d = "",
				p = function (e, n) {
					var o = e.data[i];
					return t === o ? "" : (t = o, '<div class="autocomplete-group"><strong>' + t + "</strong></div>")
				};
			return o.triggerSelectOnValidInput && n.isExactMatch(a) ? void n.select(0) : (e.each(n.suggestions, function (e, t) {
				i && (d += p(t, a, e)), d += '<div class="' + l + '" data-index="' + e + '">' + s(t, a) + "</div>"
			}), this.adjustContainerWidth(), c.detach(), u.html(d), e.isFunction(g) && g.call(n.element, u), n.fixPosition(), u.show(), o.autoSelectFirst && (n.selectedIndex = 0, u.scrollTop(0), u.children("." + l).first().addClass(r)), n.visible = !0, void n.findBestHint())
		},
		noSuggestions: function () {
			var t = this,
				n = e(t.suggestionsContainer),
				o = e(t.noSuggestionsContainer);
			this.adjustContainerWidth(), o.detach(), n.empty(), n.append(o), t.fixPosition(), n.show(), t.visible = !0
		},
		adjustContainerWidth: function () {
			var t, n = this,
				o = n.options,
				i = e(n.suggestionsContainer);
			"auto" === o.width && (t = n.el.outerWidth() - 2, i.width(t > 0 ? t : 300))
		},
		findBestHint: function () {
			var t = this,
				n = t.el.val().toLowerCase(),
				o = null;
			n && (e.each(t.suggestions, function (e, t) {
				var i = 0 === t.value.toLowerCase().indexOf(n);
				return i && (o = t), !i
			}), t.signalHint(o))
		},
		signalHint: function (t) {
			var n = "",
				o = this;
			t && (n = o.currentValue + t.value.substr(o.currentValue.length)), o.hintValue !== n && (o.hintValue = n, o.hint = t, (this.options.onHint || e.noop)(n))
		},
		verifySuggestionsFormat: function (t) {
			return t.length && "string" == typeof t[0] ? e.map(t, function (e) {
				return {
					value: e,
					data: null
				}
			}) : t
		},
		validateOrientation: function (t, n) {
			return t = e.trim(t || "").toLowerCase(), -1 === e.inArray(t, ["auto", "bottom", "top"]) && (t = n), t
		},
		processResponse: function (e, t, n) {
			var o = this,
				i = o.options;
			e.suggestions = o.verifySuggestionsFormat(e.suggestions), i.noCache || (o.cachedResponse[n] = e, i.preventBadQueries && 0 === e.suggestions.length && o.badQueries.push(t)), t === o.getQuery(o.currentValue) && (o.suggestions = e.suggestions, o.suggest())
		},
		activate: function (t) {
			var n, o = this,
				i = o.classes.selected,
				s = e(o.suggestionsContainer),
				a = s.find("." + o.classes.suggestion);
			return s.find("." + i).removeClass(i), o.selectedIndex = t, -1 !== o.selectedIndex && a.length > o.selectedIndex ? (n = a.get(o.selectedIndex), e(n).addClass(i), n) : null
		},
		selectHint: function () {
			var t = this,
				n = e.inArray(t.hint, t.suggestions);
			t.select(n)
		},
		select: function (e) {
			var t = this;
			t.hide(), t.onSelect(e)
		},
		moveUp: function () {
			var t = this;
			if (-1 !== t.selectedIndex) return 0 === t.selectedIndex ? (e(t.suggestionsContainer).children().first().removeClass(t.classes.selected), t.selectedIndex = -1, t.el.val(t.currentValue), void t.findBestHint()) : void t.adjustScroll(t.selectedIndex - 1)
		},
		moveDown: function () {
			var e = this;
			e.selectedIndex !== e.suggestions.length - 1 && e.adjustScroll(e.selectedIndex + 1)
		},
		adjustScroll: function (t) {
			var n = this,
				o = n.activate(t);
			if (o) {
				var i, s, a, l = e(o).outerHeight();
				i = o.offsetTop, s = e(n.suggestionsContainer).scrollTop(), a = s + n.options.maxHeight - l, s > i ? e(n.suggestionsContainer).scrollTop(i) : i > a && e(n.suggestionsContainer).scrollTop(i - n.options.maxHeight + l), n.options.preserveInput || n.el.val(n.getValue(n.suggestions[t].value)), n.signalHint(null)
			}
		},
		onSelect: function (t) {
			var n = this,
				o = n.options.onSelect,
				i = n.suggestions[t];
			n.currentValue = n.getValue(i.value), n.currentValue === n.el.val() || n.options.preserveInput || n.el.val(n.currentValue), n.signalHint(null), n.suggestions = [], n.selection = i, e.isFunction(o) && o.call(n.element, i)
		},
		getValue: function (e) {
			var t, n, o = this,
				i = o.options.delimiter;
			return i ? (t = o.currentValue, n = t.split(i), 1 === n.length ? e : t.substr(0, t.length - n[n.length - 1].length) + e) : e
		},
		dispose: function () {
			var t = this;
			t.el.off(".autocomplete").removeData("autocomplete"), t.disableKillerFn(), e(window).off("resize.autocomplete", t.fixPositionCapture), e(t.suggestionsContainer).remove()
		}
	}, e.fn.autocomplete = e.fn.devbridgeAutocomplete = function (n, o) {
		var i = "autocomplete";
		return 0 === arguments.length ? this.first().data(i) : this.each(function () {
			var s = e(this),
				a = s.data(i);
			"string" == typeof n ? a && "function" == typeof a[n] && a[n](o) : (a && a.dispose && a.dispose(), a = new t(this, n), s.data(i, a))
		})
	}
});
/*! jQuery Address v${version} | (c) 2009, 2013 Rostislav Hristov | jquery.org/license */
! function (t) {
	t.address = function () {
		var e, r, n = function (e) {
				var r = t.extend(t.Event(e), function () {
					for (var e = {}, r = t.address.parameterNames(), n = 0, a = r.length; a > n; n++) e[r[n]] = t.address.parameter(r[n]);
					return {
						value: t.address.value(),
						path: t.address.path(),
						pathNames: t.address.pathNames(),
						parameterNames: r,
						parameters: e,
						queryString: t.address.queryString()
					}
				}.call(t.address));
				return t(t.address).trigger(r), r
			},
			a = function (t) {
				return Array.prototype.slice.call(t)
			},
			i = function (e, r, n) {
				return t().bind.apply(t(t.address), Array.prototype.slice.call(arguments)), t.address
			},
			s = function (e, r) {
				return t().unbind.apply(t(t.address), Array.prototype.slice.call(arguments)), t.address
			},
			o = function () {
				return B.pushState && L.state !== e
			},
			c = function () {
				return ("/" + P.pathname.replace(new RegExp(L.state), "") + P.search + (u() ? "#" + u() : "")).replace(K, "/")
			},
			u = function () {
				var t = P.href.indexOf("#");
				return -1 != t ? P.href.substr(t + 1) : ""
			},
			d = function () {
				return o() ? c() : u()
			},
			l = function () {
				try {
					return top.document !== e && top.document.title !== e && top.jQuery !== e && top.jQuery.address !== e && top.jQuery.address.frames() !== !1 ? top : window
				} catch (t) {
					return window
				}
			},
			p = function () {
				return "javascript"
			},
			h = function (t) {
				return t = t.toString(), (L.strict && "/" != t.substr(0, 1) ? "/" : "") + t
			},
			f = function (t, e) {
				return parseInt(t.css(e), 10)
			},
			g = function () {
				if (!Y) {
					var t = d(),
						e = decodeURI(rt) != decodeURI(t);
					e && (W && 7 > C ? P.reload() : (W && !H && L.history && D(y, 50), rt = t, v(O)))
				}
			},
			v = function (t) {
				return D(m, 10), n(A).isDefaultPrevented() || n(t ? q : N).isDefaultPrevented()
			},
			m = function () {
				if ("null" !== L.tracker && L.tracker !== I) {
					var r = t.isFunction(L.tracker) ? L.tracker : _[L.tracker],
						n = (P.pathname + P.search + (t.address && !o() ? t.address.value() : "")).replace(/\/\//, "/").replace(/^\/$/, "");
					t.isFunction(r) ? r(n) : t.isFunction(_.urchinTracker) ? _.urchinTracker(n) : _.pageTracker !== e && t.isFunction(_.pageTracker._trackPageview) ? _.pageTracker._trackPageview(n) : _._gaq !== e && t.isFunction(_._gaq.push) && _._gaq.push(["_trackPageview", decodeURI(n)])
				}
			},
			y = function () {
				var t = p() + ":" + O + ";document.open();document.writeln('<html><head><title>" + z.title.replace(/\'/g, "\\'") + "</title><script>var " + U + ' = "' + encodeURIComponent(d()).replace(/\'/g, "\\'") + (z.domain != P.hostname ? '";document.domain="' + z.domain : "") + "\";</script></head></html>');document.close();";
				7 > C ? r.src = t : r.contentWindow.location.replace(t)
			},
			w = function () {
				if (J && -1 != V) {
					var t, e, r = J.substr(V + 1).split("&");
					for (t = 0; t < r.length; t++) e = r[t].split("="), /^(autoUpdate|history|strict|wrap)$/.test(e[0]) && (L[e[0]] = isNaN(e[1]) ? /^(true|yes)$/i.test(e[1]) : 0 !== parseInt(e[1], 10)), /^(state|tracker)$/.test(e[0]) && (L[e[0]] = e[1]);
					J = I
				}
				rt = d()
			},
			b = function () {
				if (!Z) {
					if (Z = $, w(), t('a[rel*="address:"]').address(), L.wrap) {
						var a = t("body");
						t("body > *").wrapAll('<div style="padding:' + (f(a, "marginTop") + f(a, "paddingTop")) + "px " + (f(a, "marginRight") + f(a, "paddingRight")) + "px " + (f(a, "marginBottom") + f(a, "paddingBottom")) + "px " + (f(a, "marginLeft") + f(a, "paddingLeft")) + 'px;" />').parent().wrap('<div id="' + U + '" style="height:100%;overflow:auto;position:relative;' + (M && !window.statusbar.visible ? "resize:both;" : "") + '" />');
						t("html, body").css({
							height: "100%",
							margin: 0,
							padding: 0,
							overflow: "hidden"
						}), M && t('<style type="text/css" />').appendTo("head").text("#" + U + "::-webkit-resizer { background-color: #fff; }")
					}
					if (W && !H) {
						var i = z.getElementsByTagName("frameset")[0];
						r = z.createElement((i ? "" : "i") + "frame"), r.src = p() + ":" + O, i ? (i.insertAdjacentElement("beforeEnd", r), i[i.cols ? "cols" : "rows"] += ",0", r.noResize = $, r.frameBorder = r.frameSpacing = 0) : (r.style.display = "none", r.style.width = r.style.height = 0, r.tabIndex = -1, z.body.insertAdjacentElement("afterBegin", r)), D(function () {
							t(r).bind("load", function () {
								var t = r.contentWindow;
								rt = t[U] !== e ? t[U] : "", rt != d() && (v(O), P.hash = rt)
							}), r.contentWindow[U] === e && y()
						}, 50)
					}
					D(function () {
						n("init"), v(O)
					}, 1), o() || (W && C > 7 || !W && H ? _.addEventListener ? _.addEventListener(R, g, O) : _.attachEvent && _.attachEvent("on" + R, g) : Q(g, 50)), "state" in window.history && t(window).trigger("popstate")
				}
			},
			x = function () {
				decodeURI(rt) != decodeURI(d()) && (rt = d(), v(O))
			},
			k = function () {
				_.removeEventListener ? _.removeEventListener(R, g, O) : _.detachEvent && _.detachEvent("on" + R, g)
			},
			E = function (t) {
				t = t.toLowerCase();
				var e = /(chrome)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || t.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || [];
				return {
					browser: e[1] || "",
					version: e[2] || "0"
				}
			},
			S = function () {
				var t = {},
					e = E(navigator.userAgent);
				return e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), t
			},
			I = null,
			U = "jQueryAddress",
			j = "string",
			R = "hashchange",
			T = "init",
			A = "change",
			q = "internalChange",
			N = "externalChange",
			$ = !0,
			O = !1,
			L = {
				autoUpdate: $,
				history: $,
				strict: $,
				frames: $,
				wrap: O
			},
			F = S(),
			C = parseFloat(F.version),
			M = F.webkit || F.safari,
			W = !t.support.opacity,
			_ = l(),
			z = _.document,
			B = _.history,
			P = _.location,
			Q = setInterval,
			D = setTimeout,
			K = /\/{2,9}/g,
			G = navigator.userAgent,
			H = "on" + R in _,
			J = t("script:last").attr("src"),
			V = J ? J.indexOf("?") : -1,
			X = z.title,
			Y = O,
			Z = O,
			tt = $,
			et = O,
			rt = d();
		if (W) {
			C = parseFloat(G.substr(G.indexOf("MSIE") + 4)), z.documentMode && z.documentMode != C && (C = 8 != z.documentMode ? 7 : 8);
			var nt = z.onpropertychange;
			z.onpropertychange = function () {
				nt && nt.call(z), z.title != X && -1 != z.title.indexOf("#" + d()) && (z.title = X)
			}
		}
		if (B.navigationMode && (B.navigationMode = "compatible"), "complete" == document.readyState) var at = setInterval(function () {
			t.address && (b(), clearInterval(at))
		}, 50);
		else w(), t(b);
		return t(window).bind("popstate", x).bind("unload", k), {
			bind: function (t, e, r) {
				return i.apply(this, a(arguments))
			},
			unbind: function (t, e) {
				return s.apply(this, a(arguments))
			},
			init: function (t, e) {
				return i.apply(this, [T].concat(a(arguments)))
			},
			change: function (t, e) {
				return i.apply(this, [A].concat(a(arguments)))
			},
			internalChange: function (t, e) {
				return i.apply(this, [q].concat(a(arguments)))
			},
			externalChange: function (t, e) {
				return i.apply(this, [N].concat(a(arguments)))
			},
			baseURL: function () {
				var t = P.href;
				return -1 != t.indexOf("#") && (t = t.substr(0, t.indexOf("#"))), /\/$/.test(t) && (t = t.substr(0, t.length - 1)), t
			},
			autoUpdate: function (t) {
				return t !== e ? (L.autoUpdate = t, this) : L.autoUpdate
			},
			history: function (t) {
				return t !== e ? (L.history = t, this) : L.history
			},
			state: function (t) {
				if (t !== e) {
					L.state = t;
					var r = c();
					return L.state !== e && (B.pushState ? "/#/" == r.substr(0, 3) && P.replace(L.state.replace(/^\/$/, "") + r.substr(2)) : "/" != r && r.replace(/^\/#/, "") != u() && D(function () {
						P.replace(L.state.replace(/^\/$/, "") + "/#" + r)
					}, 1)), this
				}
				return L.state
			},
			frames: function (t) {
				return t !== e ? (L.frames = t, _ = l(), this) : L.frames
			},
			strict: function (t) {
				return t !== e ? (L.strict = t, this) : L.strict
			},
			tracker: function (t) {
				return t !== e ? (L.tracker = t, this) : L.tracker
			},
			wrap: function (t) {
				return t !== e ? (L.wrap = t, this) : L.wrap
			},
			update: function () {
				return et = $, this.value(rt), et = O, this
			},
			title: function (t) {
				return t !== e ? (D(function () {
					X = z.title = t, tt && r && r.contentWindow && r.contentWindow.document && (r.contentWindow.document.title = t, tt = O)
				}, 50), this) : z.title
			},
			value: function (t) {
				if (t !== e) {
					if (t = h(t), "/" == t && (t = ""), rt == t && !et) return;
					if (rt = t, L.autoUpdate || et) {
						if (v($)) return this;
						o() ? B[L.history ? "pushState" : "replaceState"]({}, "", L.state.replace(/\/$/, "") + ("" === rt ? "/" : rt)) : (Y = $, M ? L.history ? P.hash = "#" + rt : P.replace("#" + rt) : rt != d() && (L.history ? P.hash = "#" + rt : P.replace("#" + rt)), W && !H && L.history && D(y, 50), M ? D(function () {
							Y = O
						}, 1) : Y = O)
					}
					return this
				}
				return h(rt)
			},
			path: function (t) {
				if (t !== e) {
					var r = this.queryString(),
						n = this.hash();
					return this.value(t + (r ? "?" + r : "") + (n ? "#" + n : "")), this
				}
				return h(rt).split("#")[0].split("?")[0]
			},
			pathNames: function () {
				var t = this.path(),
					e = t.replace(K, "/").split("/");
				return ("/" == t.substr(0, 1) || 0 === t.length) && e.splice(0, 1), "/" == t.substr(t.length - 1, 1) && e.splice(e.length - 1, 1), e
			},
			queryString: function (t) {
				if (t !== e) {
					var r = this.hash();
					return this.value(this.path() + (t ? "?" + t : "") + (r ? "#" + r : "")), this
				}
				var n = rt.split("?");
				return n.slice(1, n.length).join("?").split("#")[0]
			},
			parameter: function (r, n, a) {
				var i, s;
				if (n !== e) {
					var o = this.parameterNames();
					for (s = [], n = n === e || n === I ? "" : n.toString(), i = 0; i < o.length; i++) {
						var c = o[i],
							u = this.parameter(c);
						typeof u == j && (u = [u]), c == r && (u = n === I || "" === n ? [] : a ? u.concat([n]) : [n]);
						for (var d = 0; d < u.length; d++) s.push(c + "=" + u[d])
					}
					return -1 == t.inArray(r, o) && n !== I && "" !== n && s.push(r + "=" + n), this.queryString(s.join("&")), this
				}
				if (n = this.queryString()) {
					var l = [];
					for (s = n.split("&"), i = 0; i < s.length; i++) {
						var p = s[i].split("=");
						p[0] == r && l.push(p.slice(1).join("="))
					}
					if (0 !== l.length) return 1 != l.length ? l : l[0]
				}
			},
			parameterNames: function () {
				var e = this.queryString(),
					r = [];
				if (e && -1 != e.indexOf("="))
					for (var n = e.split("&"), a = 0; a < n.length; a++) {
						var i = n[a].split("=")[0]; - 1 == t.inArray(i, r) && r.push(i)
					}
				return r
			},
			hash: function (t) {
				if (t !== e) return this.value(rt.split("#")[0] + (t ? "#" + t : "")), this;
				var r = rt.split("#");
				return r.slice(1, r.length).join("#")
			}
		}
	}(), t.fn.address = function (e) {
		return t(this).each(function (r) {
			t(this).data("address") || t(this).on("click", function (r) {
				if (r.shiftKey || r.ctrlKey || r.metaKey || 2 == r.which) return !0;
				var n = r.currentTarget;
				if (t(n).is("a")) {
					r.preventDefault();
					var a = e ? e.call(n) : /address:/.test(t(n).attr("rel")) ? t(n).attr("rel").split("address:")[1].split(" ")[0] : void 0 === t.address.state() || /^\/?$/.test(t.address.state()) ? t(n).attr("href").replace(/^(#\!?|\.)/, "") : t(n).attr("href").replace(new RegExp("^(.*" + t.address.state() + "|\\.)"), "");
					t.address.value(a)
				}
			}).on("submit", function (r) {
				var n = r.currentTarget;
				if (t(n).is("form")) {
					r.preventDefault();
					var a = t(n).attr("action"),
						i = e ? e.call(n) : (-1 != a.indexOf("?") ? a.replace(/&$/, "") : a + "?") + t(n).serialize();
					t.address.value(i)
				}
			}).data("address", !0)
		}), this
	}
}(jQuery);
/* jquery.elastislide.js */
! function (t, i, s) {
	i.fn.touchwipe = function (t) {
		var s = {
			min_move_x: 20,
			min_move_y: 20,
			wipeLeft: function () {},
			wipeRight: function () {},
			wipeUp: function () {},
			wipeDown: function () {},
			preventDefaultEvents: !0
		};
		return t && i.extend(s, t), this.each(function () {
			function t() {
				this.removeEventListener("touchmove", i), n = null, h = !1
			}

			function i(i) {
				if (s.preventDefaultEvents && i.preventDefault(), h) {
					var e = i.touches[0].pageX,
						r = i.touches[0].pageY,
						l = n - e,
						a = o - r;
					Math.abs(l) >= s.min_move_x ? (t(), l > 0 ? s.wipeLeft() : s.wipeRight()) : Math.abs(a) >= s.min_move_y && (t(), a > 0 ? s.wipeDown() : s.wipeUp())
				}
			}

			function e(t) {
				1 == t.touches.length && (n = t.touches[0].pageX, o = t.touches[0].pageY, h = !0, this.addEventListener("touchmove", i, !1))
			}
			var n, o, h = !1;
			"ontouchstart" in document.documentElement && this.addEventListener("touchstart", e, !1)
		}), this
	}, i.elastislide = function (t, s) {
		this.$el = i(s), this._init(t)
	}, i.elastislide.defaults = {
		speed: 450,
		easing: "",
		imageW: 190,
		margin: 3,
		border: 2,
		minItems: 1,
		current: 0,
		onClick: function () {
			return !1
		}
	}, i.elastislide.prototype = {
		_init: function (t) {
			this.options = i.extend(!0, {}, i.elastislide.defaults, t), this.$slider = this.$el.find("ul"), this.$items = this.$slider.children("li"), this.itemsCount = this.$items.length, this.$esCarousel = this.$slider.parent(), this._validateOptions(), this._configure(), this._addControls(), this._initEvents(), this.$slider.show(), this._slideToCurrent(!1)
		},
		_validateOptions: function () {
			this.options.speed < 0 && (this.options.speed = 450), this.options.margin < 0 && (this.options.margin = 4), this.options.border < 0 && (this.options.border = 1), (this.options.minItems < 1 || this.options.minItems > this.itemsCount) && (this.options.minItems = 1), this.options.current > this.itemsCount - 1 && (this.options.current = 0)
		},
		_configure: function () {
			this.current = this.options.current, this.visibleWidth = this.$esCarousel.width(), this.visibleWidth < this.options.minItems * (this.options.imageW + 2 * this.options.border) + (this.options.minItems - 1) * this.options.margin ? (this._setDim((this.visibleWidth - (this.options.minItems - 1) * this.options.margin) / this.options.minItems), this._setCurrentValues(), this.fitCount = this.options.minItems) : (this._setDim(), this._setCurrentValues()), this.$slider.css({
				width: this.sliderW
			})
		},
		_setDim: function (t) {
			this.$items.css({
				marginRight: this.options.margin,
				width: t ? t : this.options.imageW + 2 * this.options.border
			}).children("a").css({
				borderWidth: this.options.border
			})
		},
		_setCurrentValues: function () {
			this.itemW = this.$items.outerWidth(!0), this.sliderW = this.itemW * this.itemsCount, this.visibleWidth = this.$esCarousel.width(), this.fitCount = Math.floor(this.visibleWidth / this.itemW)
		},
		_addControls: function () {
			this.$navNext = i('<span class="es-nav-next">Next</span>'), this.$navPrev = i('<span class="es-nav-prev">Previous</span>'), i('<div class="es-nav"/>').append(this.$navPrev).append(this.$navNext).appendTo(this.$el)
		},
		_toggleControls: function (t, i) {
			t && i ? 1 === i ? "right" === t ? this.$navNext.show() : this.$navPrev.show() : "right" === t ? this.$navNext.hide() : this.$navPrev.hide() : (this.current === this.itemsCount - 1 || this.fitCount >= this.itemsCount) && this.$navNext.hide()
		},
		_initEvents: function () {
			var s = this;
			i(t).on("resize.elastislide", function (t) {
				s._reload(), clearTimeout(s.resetTimeout), s.resetTimeout = setTimeout(function () {
					s._slideToCurrent()
				}, 200)
			}), this.$navNext.on("click.elastislide", function (t) {
				s._slide("right")
			}), this.$navPrev.on("click.elastislide", function (t) {
				s._slide("left")
			}), this.$slider.on("click.elastislide", "li", function (t) {
				return s.options.onClick(i(this)), !1
			}), s.$slider.touchwipe({
				wipeLeft: function () {
					s._slide("right")
				},
				wipeRight: function () {
					s._slide("left")
				}
			})
		},
		reload: function (t) {
			this._reload(), t && t.call()
		},
		_reload: function () {
			var t = this;
			t._setCurrentValues(), t.visibleWidth < t.options.minItems * (t.options.imageW + 2 * t.options.border) + (t.options.minItems - 1) * t.options.margin ? (t._setDim((t.visibleWidth - (t.options.minItems - 1) * t.options.margin) / t.options.minItems), t._setCurrentValues(), t.fitCount = t.options.minItems) : (t._setDim(), t._setCurrentValues()), t.$slider.css({
				width: t.sliderW + 10
			})
		},
		_slide: function (t, e, n, o) {
			var h = parseFloat(this.$slider.css("margin-left"));
			if (e === s) {
				var e, r = this.fitCount * this.itemW;
				if (0 > r) return !1;
				if ("right" === t && this.sliderW - (Math.abs(h) + r) < this.visibleWidth) r = this.sliderW - (Math.abs(h) + this.visibleWidth) - this.options.margin, this._toggleControls("right", -1), this._toggleControls("left", 1);
				else if ("left" === t && Math.abs(h) - r < 0) r = Math.abs(h), this._toggleControls("left", -1), this._toggleControls("right", 1);
				else {
					var l;
					l = "right" === t ? Math.abs(h) + this.options.margin + Math.abs(r) : Math.abs(h) - this.options.margin - Math.abs(r), l > 0 ? this._toggleControls("left", 1) : this._toggleControls("left", -1), l < this.sliderW - this.visibleWidth ? this._toggleControls("right", 1) : this._toggleControls("right", -1)
				}
				e = "right" === t ? "-=" + r : "+=" + r
			} else {
				var l = Math.abs(e);
				Math.max(this.sliderW, this.visibleWidth) - l < this.visibleWidth && (e = -(Math.max(this.sliderW, this.visibleWidth) - this.visibleWidth), 0 !== e && (e += this.options.margin), this._toggleControls("right", -1), l = Math.abs(e)), l > 0 ? this._toggleControls("left", 1) : this._toggleControls("left", -1), Math.max(this.sliderW, this.visibleWidth) - this.visibleWidth > l + this.options.margin ? this._toggleControls("right", 1) : this._toggleControls("right", -1)
			}
			i.fn.applyStyle = n === s ? i.fn.animate : i.fn.css;
			var a = {
				marginLeft: e
			};
			this.$slider.stop().applyStyle(a, i.extend(!0, [], {
				duration: this.options.speed,
				easing: this.options.easing,
				complete: function () {
					o && o.call()
				}
			}))
		},
		_slideToCurrent: function (t) {
			var i = this.current * this.itemW;
			this._slide("", -i, t)
		},
		add: function (t, i) {
			this.$items = this.$items.add(t), this.itemsCount = this.$items.length, this._setDim(), this._setCurrentValues(), this.$slider.css({
				width: this.sliderW
			}), this._slideToCurrent(), i && i.call(t)
		},
		setCurrent: function (t, i) {
			this.current = t;
			var s = Math.abs(parseFloat(this.$slider.css("margin-left"))),
				e = s + this.visibleWidth,
				n = Math.abs(this.current * this.itemW);
			(n + this.itemW > e || s > n) && this._slideToCurrent(), i && i.call()
		},
		destroy: function (t) {
			this._destroy(t)
		},
		_destroy: function (s) {
			this.$el.off(".elastislide").removeData("elastislide"), i(t).off(".elastislide"), s && s.call()
		}
	};
	var e = function (t) {
		this.console && console.error(t)
	};
	i.fn.elastislide = function (t) {
		if ("string" == typeof t) {
			var s = Array.prototype.slice.call(arguments, 1);
			this.each(function () {
				var n = i.data(this, "elastislide");
				return n ? i.isFunction(n[t]) && "_" !== t.charAt(0) ? void n[t].apply(n, s) : void e("no such method '" + t + "' for elastislide instance") : void e("cannot call methods on elastislide prior to initialization; attempted to call method '" + t + "'")
			})
		} else this.each(function () {
			var s = i.data(this, "elastislide");
			s || i.data(this, "elastislide", new i.elastislide(t, this))
		});
		return this
	}
}(window, jQuery);
/* jquery.royalslider.min.js 
// jQuery RoyalSlider plugin. Custom build. Copyright Dmitry Semenov, http://dimsemenov.com 
// jquery.royalslider v9.5.1
*/
(function (n) {
	function u(b, f) {
		var c, a = this,
			e = window.navigator,
			g = e.userAgent.toLowerCase();
		a.uid = n.rsModules.uid++;
		a.ns = ".rs" + a.uid;
		var d = document.createElement("div").style,
			h = ["webkit", "Moz", "ms", "O"],
			k = "",
			l = 0,
			r;
		for (c = 0; c < h.length; c++) r = h[c], !k && r + "Transform" in d && (k = r), r = r.toLowerCase(), window.requestAnimationFrame || (window.requestAnimationFrame = window[r + "RequestAnimationFrame"], window.cancelAnimationFrame = window[r + "CancelAnimationFrame"] || window[r + "CancelRequestAnimationFrame"]);
		window.requestAnimationFrame ||
			(window.requestAnimationFrame = function (a, b) {
				var c = (new Date).getTime(),
					d = Math.max(0, 16 - (c - l)),
					e = window.setTimeout(function () {
						a(c + d)
					}, d);
				l = c + d;
				return e
			});
		window.cancelAnimationFrame || (window.cancelAnimationFrame = function (a) {
			clearTimeout(a)
		});
		a.isIPAD = g.match(/(ipad)/);
		a.isIOS = a.isIPAD || g.match(/(iphone|ipod)/);
		c = function (a) {
			a = /(chrome)[ \/]([\w.]+)/.exec(a) || /(webkit)[ \/]([\w.]+)/.exec(a) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(a) || /(msie) ([\w.]+)/.exec(a) || 0 > a.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(a) || [];
			return {
				browser: a[1] || "",
				version: a[2] || "0"
			}
		}(g);
		h = {};
		c.browser && (h[c.browser] = !0, h.version = c.version);
		h.chrome && (h.webkit = !0);
		a._a = h;
		a.isAndroid = -1 < g.indexOf("android");
		a.slider = n(b);
		a.ev = n(a);
		a._b = n(document);
		a.st = n.extend({}, n.fn.royalSlider.defaults, f);
		a._c = a.st.transitionSpeed;
		a._d = 0;
		!a.st.allowCSS3 || h.webkit && !a.st.allowCSS3OnWebkit || (c = k + (k ? "T" : "t"), a._e = c + "ransform" in d && c + "ransition" in d, a._e && (a._f = k + (k ? "P" : "p") + "erspective" in d));
		k = k.toLowerCase();
		a._g = "-" + k + "-";
		a._h = "vertical" === a.st.slidesOrientation ?
			!1 : !0;
		a._i = a._h ? "left" : "top";
		a._j = a._h ? "width" : "height";
		a._k = -1;
		a._l = "fade" === a.st.transitionType ? !1 : !0;
		a._l || (a.st.sliderDrag = !1, a._m = 10);
		a._n = "z-index:0; display:none; opacity:0;";
		a._o = 0;
		a._p = 0;
		a._q = 0;
		n.each(n.rsModules, function (b, c) {
			"uid" !== b && c.call(a)
		});
		a.slides = [];
		a._r = 0;
		(a.st.slides ? n(a.st.slides) : a.slider.children().detach()).each(function () {
			a._s(this, !0)
		});
		a.st.randomizeSlides && a.slides.sort(function () {
			return 0.5 - Math.random()
		});
		a.numSlides = a.slides.length;
		a._t();
		a.st.startSlideId ? a.st.startSlideId >
			a.numSlides - 1 && (a.st.startSlideId = a.numSlides - 1) : a.st.startSlideId = 0;
		a._o = a.staticSlideId = a.currSlideId = a._u = a.st.startSlideId;
		a.currSlide = a.slides[a.currSlideId];
		a._v = 0;
		a.pointerMultitouch = !1;
		a.slider.addClass((a._h ? "rsHor" : "rsVer") + (a._l ? "" : " rsFade"));
		d = '<div class="rsOverflow"><div class="rsContainer">';
		a.slidesSpacing = a.st.slidesSpacing;
		a._w = (a._h ? a.slider.width() : a.slider.height()) + a.st.slidesSpacing;
		a._x = Boolean(0 < a._y);
		1 >= a.numSlides && (a._z = !1);
		a._a1 = a._z && a._l ? 2 === a.numSlides ? 1 : 2 : 0;
		a._b1 =
			6 > a.numSlides ? a.numSlides : 6;
		a._c1 = 0;
		a._d1 = 0;
		a.slidesJQ = [];
		for (c = 0; c < a.numSlides; c++) a.slidesJQ.push(n('<div style="' + (a._l ? "" : c !== a.currSlideId ? a._n : "z-index:0;") + '" class="rsSlide "></div>'));
		a._e1 = d = n(d + "</div></div>");
		var m = a.ns,
			k = function (b, c, d, e, f) {
				a._j1 = b + c + m;
				a._k1 = b + d + m;
				a._l1 = b + e + m;
				f && (a._m1 = b + f + m)
			};
		c = e.pointerEnabled;
		a.pointerEnabled = c || e.msPointerEnabled;
		a.pointerEnabled ? (a.hasTouch = !1, a._n1 = 0.2, a.pointerMultitouch = Boolean(1 < e[(c ? "m" : "msM") + "axTouchPoints"]), c ? k("pointer", "down", "move", "up",
			"cancel") : k("MSPointer", "Down", "Move", "Up", "Cancel")) : (a.isIOS ? a._j1 = a._k1 = a._l1 = a._m1 = "" : k("mouse", "down", "move", "up"), "ontouchstart" in window || "createTouch" in document ? (a.hasTouch = !0, a._j1 += " touchstart" + m, a._k1 += " touchmove" + m, a._l1 += " touchend" + m, a._m1 += " touchcancel" + m, a._n1 = 0.5, a.st.sliderTouch && (a._f1 = !0)) : (a.hasTouch = !1, a._n1 = 0.2));
		a.st.sliderDrag && (a._f1 = !0, h.msie || h.opera ? a._g1 = a._h1 = "move" : h.mozilla ? (a._g1 = "-moz-grab", a._h1 = "-moz-grabbing") : h.webkit && -1 != e.platform.indexOf("Mac") && (a._g1 =
			"-webkit-grab", a._h1 = "-webkit-grabbing"), a._i1());
		a.slider.html(d);
		a._o1 = a.st.controlsInside ? a._e1 : a.slider;
		a._p1 = a._e1.children(".rsContainer");
		a.pointerEnabled && a._p1.css((c ? "" : "-ms-") + "touch-action", a._h ? "pan-y" : "pan-x");
		a._q1 = n('<div class="rsPreloader"></div>');
		e = a._p1.children(".rsSlide");
		a._r1 = a.slidesJQ[a.currSlideId];
		a._s1 = 0;
		a._e ? (a._t1 = "transition-property", a._u1 = "transition-duration", a._v1 = "transition-timing-function", a._w1 = a._x1 = a._g + "transform", a._f ? (h.webkit && !h.chrome && a.slider.addClass("rsWebkit3d"),
			a._y1 = "translate3d(", a._z1 = "px, ", a._a2 = "px, 0px)") : (a._y1 = "translate(", a._z1 = "px, ", a._a2 = "px)"), a._l ? a._p1[a._g + a._t1] = a._g + "transform" : (h = {}, h[a._g + a._t1] = "opacity", h[a._g + a._u1] = a.st.transitionSpeed + "ms", h[a._g + a._v1] = a.st.css3easeInOut, e.css(h))) : (a._x1 = "left", a._w1 = "top");
		var p;
		n(window).on("resize" + a.ns, function () {
			p && clearTimeout(p);
			p = setTimeout(function () {
				a.updateSliderSize()
			}, 50)
		});
		a.ev.trigger("rsAfterPropsSetup");
		a.updateSliderSize();
		a.st.keyboardNavEnabled && a._b2();
		a.st.arrowsNavHideOnTouch &&
			(a.hasTouch || a.pointerMultitouch) && (a.st.arrowsNav = !1);
		a.st.arrowsNav && (e = a._o1, n('<div class="rsArrow rsArrowLeft"><div class="rsArrowIcn"></div></div><div class="rsArrow rsArrowRight"><div class="rsArrowIcn"></div></div>').appendTo(e), a._c2 = e.children(".rsArrowLeft").click(function (b) {
			b.preventDefault();
			a.prev()
		}), a._d2 = e.children(".rsArrowRight").click(function (b) {
			b.preventDefault();
			a.next()
		}), a.st.arrowsNavAutoHide && !a.hasTouch && (a._c2.addClass("rsHidden"), a._d2.addClass("rsHidden"), e.one("mousemove.arrowshover",
			function () {
				a._c2.removeClass("rsHidden");
				a._d2.removeClass("rsHidden")
			}), e.hover(function () {
			a._e2 || (a._c2.removeClass("rsHidden"), a._d2.removeClass("rsHidden"))
		}, function () {
			a._e2 || (a._c2.addClass("rsHidden"), a._d2.addClass("rsHidden"))
		})), a.ev.on("rsOnUpdateNav", function () {
			a._f2()
		}), a._f2());
		if (a._f1) a._p1.on(a._j1, function (b) {
			a._g2(b)
		});
		else a.dragSuccess = !1;
		var q = ["rsPlayBtnIcon", "rsPlayBtn", "rsCloseVideoBtn", "rsCloseVideoIcn"];
		a._p1.click(function (b) {
			if (!a.dragSuccess) {
				var c = n(b.target).attr("class");
				if (-1 !== n.inArray(c, q) && a.toggleVideo()) return !1;
				if (a.st.navigateByClick && !a._h2) {
					if (n(b.target).closest(".rsNoDrag", a._r1).length) return !0;
					a._i2(b)
				}
				a.ev.trigger("rsSlideClick", b)
			}
		}).on("click.rs", "a", function (b) {
			if (a.dragSuccess) return !1;
			a._h2 = !0;
			setTimeout(function () {
				a._h2 = !1
			}, 3)
		});
		a.ev.trigger("rsAfterInit")
	}
	n.rsModules || (n.rsModules = {
		uid: 0
	});
	u.prototype = {
		constructor: u,
		_i2: function (b) {
			b = b[this._h ? "pageX" : "pageY"] - this._j2;
			b >= this._q ? this.next() : 0 > b && this.prev()
		},
		_t: function () {
			var b;
			b = this.st.numImagesToPreload;
			if (this._z = this.st.loop) 2 === this.numSlides ? (this._z = !1, this.st.loopRewind = !0) : 2 > this.numSlides && (this.st.loopRewind = this._z = !1);
			this._z && 0 < b && (4 >= this.numSlides ? b = 1 : this.st.numImagesToPreload > (this.numSlides - 1) / 2 && (b = Math.floor((this.numSlides - 1) / 2)));
			this._y = b
		},
		_s: function (b, f) {
			function c(b, c) {
				c ? g.images.push(b.attr(c)) : g.images.push(b.text());
				if (h) {
					h = !1;
					g.caption = "src" === c ? b.attr("alt") : b.contents();
					g.image = g.images[0];
					g.videoURL = b.attr("data-rsVideo");
					var d = b.attr("data-rsw"),
						e = b.attr("data-rsh");
					"undefined" !== typeof d && !1 !== d && "undefined" !== typeof e && !1 !== e ? (g.iW = parseInt(d, 10), g.iH = parseInt(e, 10)) : a.st.imgWidth && a.st.imgHeight && (g.iW = a.st.imgWidth, g.iH = a.st.imgHeight)
				}
			}
			var a = this,
				e, g = {},
				d, h = !0;
			b = n(b);
			a._k2 = b;
			a.ev.trigger("rsBeforeParseNode", [b, g]);
			if (!g.stopParsing) return b = a._k2, g.id = a._r, g.contentAdded = !1, a._r++, g.images = [], g.isBig = !1, g.hasCover || (b.hasClass("rsImg") ? (d = b, e = !0) : (d = b.find(".rsImg"), d.length && (e = !0)), e ? (g.bigImage = d.eq(0).attr("data-rsBigImg"), d.each(function () {
				var a = n(this);
				a.is("a") ? c(a, "href") : a.is("img") ? c(a, "src") : c(a)
			})) : b.is("img") && (b.addClass("rsImg rsMainSlideImage"), c(b, "src"))), d = b.find(".rsCaption"), d.length && (g.caption = d.remove()), g.content = b, a.ev.trigger("rsAfterParseNode", [b, g]), f && a.slides.push(g), 0 === g.images.length && (g.isLoaded = !0, g.isRendered = !1, g.isLoading = !1, g.images = null), g
		},
		_b2: function () {
			var b = this,
				f, c, a = function (a) {
					37 === a ? b.prev() : 39 === a && b.next()
				};
			b._b.on("keydown" + b.ns, function (e) {
				b._l2 || (c = e.keyCode, 37 !== c && 39 !== c || f || (a(c), f = setInterval(function () {
						a(c)
					},
					700)))
			}).on("keyup" + b.ns, function (a) {
				f && (clearInterval(f), f = null)
			})
		},
		goTo: function (b, f) {
			b !== this.currSlideId && this._m2(b, this.st.transitionSpeed, !0, !f)
		},
		destroy: function (b) {
			this.ev.trigger("rsBeforeDestroy");
			this._b.off("keydown" + this.ns + " keyup" + this.ns + " " + this._k1 + " " + this._l1);
			this._p1.off(this._j1 + " click");
			this.slider.data("royalSlider", null);
			n.removeData(this.slider, "royalSlider");
			n(window).off("resize" + this.ns);
			this.loadingTimeout && clearTimeout(this.loadingTimeout);
			b && this.slider.remove();
			this.ev = this.slider = this.slides = null
		},
		_n2: function (b, f) {
			function c(c, f, g) {
				c.isAdded ? (a(f, c), e(f, c)) : (g || (g = d.slidesJQ[f]), c.holder ? g = c.holder : (g = d.slidesJQ[f] = n(g), c.holder = g), c.appendOnLoaded = !1, e(f, c, g), a(f, c), d._p2(c, g, b), c.isAdded = !0)
			}

			function a(a, c) {
				c.contentAdded || (d.setItemHtml(c, b), b || (c.contentAdded = !0))
			}

			function e(a, b, c) {
				d._l && (c || (c = d.slidesJQ[a]), c.css(d._i, (a + d._d1 + p) * d._w))
			}

			function g(a) {
				if (l) {
					if (a > r - 1) return g(a - r);
					if (0 > a) return g(r + a)
				}
				return a
			}
			var d = this,
				h, k, l = d._z,
				r = d.numSlides;
			if (!isNaN(f)) return g(f);
			var m = d.currSlideId,
				p, q = b ? Math.abs(d._o2 - d.currSlideId) >= d.numSlides - 1 ? 0 : 1 : d._y,
				s = Math.min(2, q),
				v = !1,
				u = !1,
				t;
			for (k = m; k < m + 1 + s; k++)
				if (t = g(k), (h = d.slides[t]) && (!h.isAdded || !h.positionSet)) {
					v = !0;
					break
				}
			for (k = m - 1; k > m - 1 - s; k--)
				if (t = g(k), (h = d.slides[t]) && (!h.isAdded || !h.positionSet)) {
					u = !0;
					break
				}
			if (v)
				for (k = m; k < m + q + 1; k++) t = g(k), p = Math.floor((d._u - (m - k)) / d.numSlides) * d.numSlides, (h = d.slides[t]) && c(h, t);
			if (u)
				for (k = m - 1; k > m - 1 - q; k--) t = g(k), p = Math.floor((d._u - (m - k)) / r) * r, (h = d.slides[t]) && c(h, t);
			if (!b)
				for (s = g(m - q),
					m = g(m + q), q = s > m ? 0 : s, k = 0; k < r; k++) s > m && k > s - 1 || !(k < q || k > m) || (h = d.slides[k]) && h.holder && (h.holder.detach(), h.isAdded = !1)
		},
		setItemHtml: function (b, f) {
			var c = this,
				a = function () {
					if (!b.images) b.isRendered = !0, b.isLoaded = !0, b.isLoading = !1, d(!0);
					else if (!b.isLoading) {
						var a, f;
						b.content.hasClass("rsImg") ? (a = b.content, f = !0) : a = b.content.find(".rsImg:not(img)");
						a && !a.is("img") && a.each(function () {
							var a = n(this),
								c = '<img class="rsImg" src="' + (a.is("a") ? a.attr("href") : a.text()) + '" />';
							f ? b.content = n(c) : a.replaceWith(c)
						});
						a = f ? b.content : b.content.find("img.rsImg");
						k();
						a.eq(0).addClass("rsMainSlideImage");
						b.iW && b.iH && (b.isLoaded || c._q2(b), d());
						b.isLoading = !0;
						if (b.isBig) n("<img />").on("load.rs error.rs", function (a) {
							n(this).off("load.rs error.rs");
							e([this], !0)
						}).attr("src", b.image);
						else {
							b.loaded = [];
							b.numStartedLoad = 0;
							a = function (a) {
								n(this).off("load.rs error.rs");
								b.loaded.push(this);
								b.loaded.length === b.numStartedLoad && e(b.loaded, !1)
							};
							for (var g = 0; g < b.images.length; g++) {
								var h = n("<img />");
								b.numStartedLoad++;
								h.on("load.rs error.rs",
									a).attr("src", b.images[g])
							}
						}
					}
				},
				e = function (a, c) {
					if (a.length) {
						var d = a[0];
						if (c !== b.isBig)(d = b.holder.children()) && 1 < d.length && l();
						else if (b.iW && b.iH) g();
						else if (b.iW = d.width, b.iH = d.height, b.iW && b.iH) g();
						else {
							var e = new Image;
							e.onload = function () {
								e.width ? (b.iW = e.width, b.iH = e.height, g()) : setTimeout(function () {
									e.width && (b.iW = e.width, b.iH = e.height);
									g()
								}, 1E3)
							};
							e.src = d.src
						}
					} else g()
				},
				g = function () {
					b.isLoaded = !0;
					b.isLoading = !1;
					d();
					l();
					h()
				},
				d = function () {
					if (!b.isAppended && c.ev) {
						var a = c.st.visibleNearby,
							d = b.id - c._o;
						f || b.appendOnLoaded || !c.st.fadeinLoadedSlide || 0 !== d && (!(a || c._r2 || c._l2) || -1 !== d && 1 !== d) || (a = {
							visibility: "visible",
							opacity: 0
						}, a[c._g + "transition"] = "opacity 400ms ease-in-out", b.content.css(a), setTimeout(function () {
							b.content.css("opacity", 1)
						}, 16));
						b.holder.find(".rsPreloader").length ? b.holder.append(b.content) : b.holder.html(b.content);
						b.isAppended = !0;
						b.isLoaded && (c._q2(b), h());
						b.sizeReady || (b.sizeReady = !0, setTimeout(function () {
							c.ev.trigger("rsMaybeSizeReady", b)
						}, 100))
					}
				},
				h = function () {
					!b.loadedTriggered &&
						c.ev && (b.isLoaded = b.loadedTriggered = !0, b.holder.trigger("rsAfterContentSet"), c.ev.trigger("rsAfterContentSet", b))
				},
				k = function () {
					c.st.usePreloader && b.holder.html(c._q1.clone())
				},
				l = function (a) {
					c.st.usePreloader && (a = b.holder.find(".rsPreloader"), a.length && a.remove())
				};
			b.isLoaded ? d() : f ? !c._l && b.images && b.iW && b.iH ? a() : (b.holder.isWaiting = !0, k(), b.holder.slideId = -99) : a()
		},
		_p2: function (b, f, c) {
			this._p1.append(b.holder);
			b.appendOnLoaded = !1
		},
		_g2: function (b, f) {
			var c = this,
				a, e = "touchstart" === b.type;
			c._s2 = e;
			c.ev.trigger("rsDragStart");
			if (n(b.target).closest(".rsNoDrag", c._r1).length) return c.dragSuccess = !1, !0;
			!f && c._r2 && (c._t2 = !0, c._u2());
			c.dragSuccess = !1;
			if (c._l2) e && (c._v2 = !0);
			else {
				e && (c._v2 = !1);
				c._w2();
				if (e) {
					var g = b.originalEvent.touches;
					if (g && 0 < g.length) a = g[0], 1 < g.length && (c._v2 = !0);
					else return
				} else b.preventDefault(), a = b, c.pointerEnabled && (a = a.originalEvent);
				c._l2 = !0;
				c._b.on(c._k1, function (a) {
					c._x2(a, f)
				}).on(c._l1, function (a) {
					c._y2(a, f)
				});
				c._z2 = "";
				c._a3 = !1;
				c._b3 = a.pageX;
				c._c3 = a.pageY;
				c._d3 = c._v = (f ? c._e3 : c._h) ? a.pageX : a.pageY;
				c._f3 = 0;
				c._g3 = 0;
				c._h3 = f ? c._i3 : c._p;
				c._j3 = (new Date).getTime();
				if (e) c._e1.on(c._m1, function (a) {
					c._y2(a, f)
				})
			}
		},
		_k3: function (b, f) {
			if (this._l3) {
				var c = this._m3,
					a = b.pageX - this._b3,
					e = b.pageY - this._c3,
					g = this._h3 + a,
					d = this._h3 + e,
					h = f ? this._e3 : this._h,
					g = h ? g : d,
					d = this._z2;
				this._a3 = !0;
				this._b3 = b.pageX;
				this._c3 = b.pageY;
				"x" === d && 0 !== a ? this._f3 = 0 < a ? 1 : -1 : "y" === d && 0 !== e && (this._g3 = 0 < e ? 1 : -1);
				d = h ? this._b3 : this._c3;
				a = h ? a : e;
				f ? g > this._n3 ? g = this._h3 + a * this._n1 : g < this._o3 && (g = this._h3 + a * this._n1) : this._z || (0 >= this.currSlideId &&
					0 < d - this._d3 && (g = this._h3 + a * this._n1), this.currSlideId >= this.numSlides - 1 && 0 > d - this._d3 && (g = this._h3 + a * this._n1));
				this._h3 = g;
				200 < c - this._j3 && (this._j3 = c, this._v = d);
				f ? this._q3(this._h3) : this._l && this._p3(this._h3)
			}
		},
		_x2: function (b, f) {
			var c = this,
				a, e = "touchmove" === b.type;
			if (!c._s2 || e) {
				if (e) {
					if (c._r3) return;
					var g = b.originalEvent.touches;
					if (g) {
						if (1 < g.length) return;
						a = g[0]
					} else return
				} else a = b, c.pointerEnabled && (a = a.originalEvent);
				c._a3 || (c._e && (f ? c._s3 : c._p1).css(c._g + c._u1, "0s"), function h() {
					c._l2 && (c._t3 =
						requestAnimationFrame(h), c._u3 && c._k3(c._u3, f))
				}());
				if (c._l3) b.preventDefault(), c._m3 = (new Date).getTime(), c._u3 = a;
				else if (g = f ? c._e3 : c._h, a = Math.abs(a.pageX - c._b3) - Math.abs(a.pageY - c._c3) - (g ? -7 : 7), 7 < a) {
					if (g) b.preventDefault(), c._z2 = "x";
					else if (e) {
						c._v3(b);
						return
					}
					c._l3 = !0
				} else if (-7 > a) {
					if (!g) b.preventDefault(), c._z2 = "y";
					else if (e) {
						c._v3(b);
						return
					}
					c._l3 = !0
				}
			}
		},
		_v3: function (b, f) {
			this._r3 = !0;
			this._a3 = this._l2 = !1;
			this._y2(b)
		},
		_y2: function (b, f) {
			function c(a) {
				return 100 > a ? 100 : 500 < a ? 500 : a
			}

			function a(a, b) {
				if (e._l ||
					f) h = (-e._u - e._d1) * e._w, k = Math.abs(e._p - h), e._c = k / b, a && (e._c += 250), e._c = c(e._c), e._x3(h, !1)
			}
			var e = this,
				g, d, h, k;
			g = -1 < b.type.indexOf("touch");
			if (!e._s2 || g)
				if (e._s2 = !1, e.ev.trigger("rsDragRelease"), e._u3 = null, e._l2 = !1, e._r3 = !1, e._l3 = !1, e._m3 = 0, cancelAnimationFrame(e._t3), e._a3 && (f ? e._q3(e._h3) : e._l && e._p3(e._h3)), e._b.off(e._k1).off(e._l1), g && e._e1.off(e._m1), e._i1(), !e._a3 && !e._v2 && f && e._w3) {
					var l = n(b.target).closest(".rsNavItem");
					l.length && e.goTo(l.index())
				} else {
					d = f ? e._e3 : e._h;
					if (!e._a3 || "y" === e._z2 &&
						d || "x" === e._z2 && !d)
						if (!f && e._t2) {
							e._t2 = !1;
							if (e.st.navigateByClick) {
								e._i2(e.pointerEnabled ? b.originalEvent : b);
								e.dragSuccess = !0;
								return
							}
							e.dragSuccess = !0
						} else {
							e._t2 = !1;
							e.dragSuccess = !1;
							return
						}
					else e.dragSuccess = !0;
					e._t2 = !1;
					e._z2 = "";
					var r = e.st.minSlideOffset;
					g = g ? b.originalEvent.changedTouches[0] : e.pointerEnabled ? b.originalEvent : b;
					var m = d ? g.pageX : g.pageY,
						p = e._d3;
					g = e._v;
					var q = e.currSlideId,
						s = e.numSlides,
						v = d ? e._f3 : e._g3,
						u = e._z;
					Math.abs(m - p);
					g = m - g;
					d = (new Date).getTime() - e._j3;
					d = Math.abs(g) / d;
					if (0 === v || 1 >=
						s) a(!0, d);
					else {
						if (!u && !f)
							if (0 >= q) {
								if (0 < v) {
									a(!0, d);
									return
								}
							} else if (q >= s - 1 && 0 > v) {
							a(!0, d);
							return
						}
						if (f) {
							h = e._i3;
							if (h > e._n3) h = e._n3;
							else if (h < e._o3) h = e._o3;
							else {
								m = d * d / 0.006;
								l = -e._i3;
								p = e._y3 - e._z3 + e._i3;
								0 < g && m > l ? (l += e._z3 / (15 / (m / d * 0.003)), d = d * l / m, m = l) : 0 > g && m > p && (p += e._z3 / (15 / (m / d * 0.003)), d = d * p / m, m = p);
								l = Math.max(Math.round(d / 0.003), 50);
								h += m * (0 > g ? -1 : 1);
								if (h > e._n3) {
									e._a4(h, l, !0, e._n3, 200);
									return
								}
								if (h < e._o3) {
									e._a4(h, l, !0, e._o3, 200);
									return
								}
							}
							e._a4(h, l, !0)
						} else l = function (a) {
							var b = Math.floor(a / e._w);
							a - b * e._w >
								r && b++;
							return b
						}, p + r < m ? 0 > v ? a(!1, d) : (l = l(m - p), e._m2(e.currSlideId - l, c(Math.abs(e._p - (-e._u - e._d1 + l) * e._w) / d), !1, !0, !0)) : p - r > m ? 0 < v ? a(!1, d) : (l = l(p - m), e._m2(e.currSlideId + l, c(Math.abs(e._p - (-e._u - e._d1 - l) * e._w) / d), !1, !0, !0)) : a(!1, d)
					}
				}
		},
		_p3: function (b) {
			b = this._p = b;
			this._e ? this._p1.css(this._x1, this._y1 + (this._h ? b + this._z1 + 0 : 0 + this._z1 + b) + this._a2) : this._p1.css(this._h ? this._x1 : this._w1, b)
		},
		updateSliderSize: function (b) {
			var f, c;
			if (this.st.autoScaleSlider) {
				var a = this.st.autoScaleSliderWidth,
					e = this.st.autoScaleSliderHeight;
				this.st.autoScaleHeight ? (f = this.slider.width(), f != this.width && (this.slider.css("height", e / a * f), f = this.slider.width()), c = this.slider.height()) : (c = this.slider.height(), c != this.height && (this.slider.css("width", a / e * c), c = this.slider.height()), f = this.slider.width())
			} else f = this.slider.width(), c = this.slider.height();
			if (b || f != this.width || c != this.height) {
				this.width = f;
				this.height = c;
				this._b4 = f;
				this._c4 = c;
				this.ev.trigger("rsBeforeSizeSet");
				this.ev.trigger("rsAfterSizePropSet");
				this._e1.css({
					width: this._b4,
					height: this._c4
				});
				this._w = (this._h ? this._b4 : this._c4) + this.st.slidesSpacing;
				this._d4 = this.st.imageScalePadding;
				for (f = 0; f < this.slides.length; f++) b = this.slides[f], b.positionSet = !1, b && b.images && b.isLoaded && (b.isRendered = !1, this._q2(b));
				if (this._e4)
					for (f = 0; f < this._e4.length; f++) b = this._e4[f], b.holder.css(this._i, (b.id + this._d1) * this._w);
				this._n2();
				this._l && (this._e && this._p1.css(this._g + "transition-duration", "0s"), this._p3((-this._u - this._d1) * this._w));
				this.ev.trigger("rsOnUpdateNav")
			}
			this._j2 = this._e1.offset();
			this._j2 =
				this._j2[this._i]
		},
		appendSlide: function (b, f) {
			var c = this._s(b);
			if (isNaN(f) || f > this.numSlides) f = this.numSlides;
			this.slides.splice(f, 0, c);
			this.slidesJQ.splice(f, 0, n('<div style="' + (this._l ? "position:absolute;" : this._n) + '" class="rsSlide"></div>'));
			f < this.currSlideId && this.currSlideId++;
			this.ev.trigger("rsOnAppendSlide", [c, f]);
			this._f4(f);
			f === this.currSlideId && this.ev.trigger("rsAfterSlideChange")
		},
		removeSlide: function (b) {
			var f = this.slides[b];
			f && (f.holder && f.holder.remove(), b < this.currSlideId && this.currSlideId--,
				this.slides.splice(b, 1), this.slidesJQ.splice(b, 1), this.ev.trigger("rsOnRemoveSlide", [b]), this._f4(b), b === this.currSlideId && this.ev.trigger("rsAfterSlideChange"))
		},
		_f4: function (b) {
			var f = this;
			b = f.numSlides;
			b = 0 >= f._u ? 0 : Math.floor(f._u / b);
			f.numSlides = f.slides.length;
			0 === f.numSlides ? (f.currSlideId = f._d1 = f._u = 0, f.currSlide = f._g4 = null) : f._u = b * f.numSlides + f.currSlideId;
			for (b = 0; b < f.numSlides; b++) f.slides[b].id = b;
			f.currSlide = f.slides[f.currSlideId];
			f._r1 = f.slidesJQ[f.currSlideId];
			f.currSlideId >= f.numSlides ?
				f.goTo(f.numSlides - 1) : 0 > f.currSlideId && f.goTo(0);
			f._t();
			f._l && f._z && f._p1.css(f._g + f._u1, "0ms");
			f._h4 && clearTimeout(f._h4);
			f._h4 = setTimeout(function () {
				f._l && f._p3((-f._u - f._d1) * f._w);
				f._n2();
				f._l || f._r1.css({
					display: "block",
					opacity: 1
				})
			}, 14);
			f.ev.trigger("rsOnUpdateNav")
		},
		_i1: function () {
			this._f1 && this._l && (this._g1 ? this._e1.css("cursor", this._g1) : (this._e1.removeClass("grabbing-cursor"), this._e1.addClass("grab-cursor")))
		},
		_w2: function () {
			this._f1 && this._l && (this._h1 ? this._e1.css("cursor", this._h1) :
				(this._e1.removeClass("grab-cursor"), this._e1.addClass("grabbing-cursor")))
		},
		next: function (b) {
			this._m2("next", this.st.transitionSpeed, !0, !b)
		},
		prev: function (b) {
			this._m2("prev", this.st.transitionSpeed, !0, !b)
		},
		_m2: function (b, f, c, a, e) {
			var g = this,
				d, h, k;
			g.ev.trigger("rsBeforeMove", [b, a]);
			k = "next" === b ? g.currSlideId + 1 : "prev" === b ? g.currSlideId - 1 : b = parseInt(b, 10);
			if (!g._z) {
				if (0 > k) {
					g._i4("left", !a);
					return
				}
				if (k >= g.numSlides) {
					g._i4("right", !a);
					return
				}
			}
			g._r2 && (g._u2(!0), c = !1);
			h = k - g.currSlideId;
			k = g._o2 = g.currSlideId;
			var l = g.currSlideId + h;
			a = g._u;
			var n;
			g._z ? (l = g._n2(!1, l), a += h) : a = l;
			g._o = l;
			g._g4 = g.slidesJQ[g.currSlideId];
			g._u = a;
			g.currSlideId = g._o;
			g.currSlide = g.slides[g.currSlideId];
			g._r1 = g.slidesJQ[g.currSlideId];
			var l = g.st.slidesDiff,
				m = Boolean(0 < h);
			h = Math.abs(h);
			var p = Math.floor(k / g._y),
				q = Math.floor((k + (m ? l : -l)) / g._y),
				p = (m ? Math.max(p, q) : Math.min(p, q)) * g._y + (m ? g._y - 1 : 0);
			p > g.numSlides - 1 ? p = g.numSlides - 1 : 0 > p && (p = 0);
			k = m ? p - k : k - p;
			k > g._y && (k = g._y);
			if (h > k + l)
				for (g._d1 += (h - (k + l)) * (m ? -1 : 1), f *= 1.4, k = 0; k < g.numSlides; k++) g.slides[k].positionSet = !1;
			g._c = f;
			g._n2(!0);
			e || (n = !0);
			d = (-a - g._d1) * g._w;
			n ? setTimeout(function () {
				g._j4 = !1;
				g._x3(d, b, !1, c);
				g.ev.trigger("rsOnUpdateNav")
			}, 0) : (g._x3(d, b, !1, c), g.ev.trigger("rsOnUpdateNav"))
		},
		_f2: function () {
			this.st.arrowsNav && (1 >= this.numSlides ? (this._c2.css("display", "none"), this._d2.css("display", "none")) : (this._c2.css("display", "block"), this._d2.css("display", "block"), this._z || this.st.loopRewind || (0 === this.currSlideId ? this._c2.addClass("rsArrowDisabled") : this._c2.removeClass("rsArrowDisabled"), this.currSlideId ===
				this.numSlides - 1 ? this._d2.addClass("rsArrowDisabled") : this._d2.removeClass("rsArrowDisabled"))))
		},
		_x3: function (b, f, c, a, e) {
			function g() {
				var a;
				h && (a = h.data("rsTimeout")) && (h !== k && h.css({
					opacity: 0,
					display: "none",
					zIndex: 0
				}), clearTimeout(a), h.data("rsTimeout", ""));
				if (a = k.data("rsTimeout")) clearTimeout(a), k.data("rsTimeout", "")
			}
			var d = this,
				h, k, l = {};
			isNaN(d._c) && (d._c = 400);
			d._p = d._h3 = b;
			d.ev.trigger("rsBeforeAnimStart");
			d._e ? d._l ? (d._c = parseInt(d._c, 10), c = d._g + d._v1, l[d._g + d._u1] = d._c + "ms", l[c] = a ? n.rsCSS3Easing[d.st.easeInOut] :
				n.rsCSS3Easing[d.st.easeOut], d._p1.css(l), a || !d.hasTouch ? setTimeout(function () {
					d._p3(b)
				}, 5) : d._p3(b)) : (d._c = d.st.transitionSpeed, h = d._g4, k = d._r1, k.data("rsTimeout") && k.css("opacity", 0), g(), h && h.data("rsTimeout", setTimeout(function () {
				l[d._g + d._u1] = "0ms";
				l.zIndex = 0;
				l.display = "none";
				h.data("rsTimeout", "");
				h.css(l);
				setTimeout(function () {
					h.css("opacity", 0)
				}, 16)
			}, d._c + 60)), l.display = "block", l.zIndex = d._m, l.opacity = 0, l[d._g + d._u1] = "0ms", l[d._g + d._v1] = n.rsCSS3Easing[d.st.easeInOut], k.css(l), k.data("rsTimeout",
				setTimeout(function () {
					k.css(d._g + d._u1, d._c + "ms");
					k.data("rsTimeout", setTimeout(function () {
						k.css("opacity", 1);
						k.data("rsTimeout", "")
					}, 20))
				}, 20))) : d._l ? (l[d._h ? d._x1 : d._w1] = b + "px", d._p1.animate(l, d._c, a ? d.st.easeInOut : d.st.easeOut)) : (h = d._g4, k = d._r1, k.stop(!0, !0).css({
				opacity: 0,
				display: "block",
				zIndex: d._m
			}), d._c = d.st.transitionSpeed, k.animate({
				opacity: 1
			}, d._c, d.st.easeInOut), g(), h && h.data("rsTimeout", setTimeout(function () {
				h.stop(!0, !0).css({
					opacity: 0,
					display: "none",
					zIndex: 0
				})
			}, d._c + 60)));
			d._r2 = !0;
			d.loadingTimeout && clearTimeout(d.loadingTimeout);
			d.loadingTimeout = e ? setTimeout(function () {
				d.loadingTimeout = null;
				e.call()
			}, d._c + 60) : setTimeout(function () {
				d.loadingTimeout = null;
				d._k4(f)
			}, d._c + 60)
		},
		_u2: function (b) {
			this._r2 = !1;
			clearTimeout(this.loadingTimeout);
			if (this._l)
				if (!this._e) this._p1.stop(!0), this._p = parseInt(this._p1.css(this._x1), 10);
				else {
					if (!b) {
						b = this._p;
						var f = this._h3 = this._l4();
						this._p1.css(this._g + this._u1, "0ms");
						b !== f && this._p3(f)
					}
				}
			else 20 < this._m ? this._m = 10 : this._m++
		},
		_l4: function () {
			var b =
				window.getComputedStyle(this._p1.get(0), null).getPropertyValue(this._g + "transform").replace(/^matrix\(/i, "").split(/, |\)$/g),
				f = 0 === b[0].indexOf("matrix3d");
			return parseInt(b[this._h ? f ? 12 : 4 : f ? 13 : 5], 10)
		},
		_m4: function (b, f) {
			return this._e ? this._y1 + (f ? b + this._z1 + 0 : 0 + this._z1 + b) + this._a2 : b
		},
		_k4: function (b) {
			this._l || (this._r1.css("z-index", 0), this._m = 10);
			this._r2 = !1;
			this.staticSlideId = this.currSlideId;
			this._n2();
			this._n4 = !1;
			this.ev.trigger("rsAfterSlideChange")
		},
		_i4: function (b, f) {
			var c = this,
				a = (-c._u - c._d1) *
				c._w;
			if (0 !== c.numSlides && !c._r2)
				if (c.st.loopRewind) c.goTo("left" === b ? c.numSlides - 1 : 0, f);
				else if (c._l) {
				c._c = 200;
				var e = function () {
					c._r2 = !1
				};
				c._x3(a + ("left" === b ? 30 : -30), "", !1, !0, function () {
					c._r2 = !1;
					c._x3(a, "", !1, !0, e)
				})
			}
		},
		_q2: function (b, f) {
			if (!b.isRendered) {
				var c = b.content,
					a = "rsMainSlideImage",
					e, g = this.st.imageAlignCenter,
					d = this.st.imageScaleMode,
					h;
				b.videoURL && (a = "rsVideoContainer", "fill" !== d ? e = !0 : (h = c, h.hasClass(a) || (h = h.find("." + a)), h.css({
					width: "100%",
					height: "100%"
				}), a = "rsMainSlideImage"));
				c.hasClass(a) ||
					(c = c.find("." + a));
				if (c) {
					var k = b.iW,
						l = b.iH;
					b.isRendered = !0;
					if ("none" !== d || g) {
						a = "fill" !== d ? this._d4 : 0;
						h = this._b4 - 2 * a;
						var n = this._c4 - 2 * a,
							m, p, q = {};
						"fit-if-smaller" === d && (k > h || l > n) && (d = "fit");
						if ("fill" === d || "fit" === d) m = h / k, p = n / l, m = "fill" == d ? m > p ? m : p : "fit" == d ? m < p ? m : p : 1, k = Math.ceil(k * m, 10), l = Math.ceil(l * m, 10);
						"none" !== d && (q.width = k, q.height = l, e && c.find(".rsImg").css({
							width: "100%",
							height: "100%"
						}));
						g && (q.marginLeft = Math.floor((h - k) / 2) + a, q.marginTop = Math.floor((n - l) / 2) + a);
						c.css(q)
					}
				}
			}
		}
	};
	n.rsProto = u.prototype;
	n.fn.royalSlider = function (b) {
		var f = arguments;
		return this.each(function () {
			var c = n(this);
			if ("object" !== typeof b && b) {
				if ((c = c.data("royalSlider")) && c[b]) return c[b].apply(c, Array.prototype.slice.call(f, 1))
			} else c.data("royalSlider") || c.data("royalSlider", new u(c, b))
		})
	};
	n.fn.royalSlider.defaults = {
		slidesSpacing: 8,
		startSlideId: 0,
		loop: !1,
		loopRewind: !1,
		numImagesToPreload: 4,
		fadeinLoadedSlide: !0,
		slidesOrientation: "horizontal",
		transitionType: "move",
		transitionSpeed: 600,
		controlNavigation: "bullets",
		controlsInside: !0,
		arrowsNav: !0,
		arrowsNavAutoHide: !0,
		navigateByClick: !0,
		randomizeSlides: !1,
		sliderDrag: !0,
		sliderTouch: !0,
		keyboardNavEnabled: !1,
		fadeInAfterLoaded: !0,
		allowCSS3: !0,
		allowCSS3OnWebkit: !0,
		addActiveClass: !1,
		autoHeight: !1,
		easeOut: "easeOutSine",
		easeInOut: "easeInOutSine",
		minSlideOffset: 10,
		imageScaleMode: "fit-if-smaller",
		imageAlignCenter: !0,
		imageScalePadding: 4,
		usePreloader: !0,
		autoScaleSlider: !1,
		autoScaleSliderWidth: 800,
		autoScaleSliderHeight: 400,
		autoScaleHeight: !0,
		arrowsNavHideOnTouch: !1,
		globalCaption: !1,
		slidesDiff: 2
	};
	n.rsCSS3Easing = {
		easeOutSine: "cubic-bezier(0.390, 0.575, 0.565, 1.000)",
		easeInOutSine: "cubic-bezier(0.445, 0.050, 0.550, 0.950)"
	};
	n.extend(jQuery.easing, {
		easeInOutSine: function (b, f, c, a, e) {
			return -a / 2 * (Math.cos(Math.PI * f / e) - 1) + c
		},
		easeOutSine: function (b, f, c, a, e) {
			return a * Math.sin(f / e * (Math.PI / 2)) + c
		},
		easeOutCubic: function (b, f, c, a, e) {
			return a * ((f = f / e - 1) * f * f + 1) + c
		}
	})
})(jQuery, window);
// jquery.rs.bullets v1.0.1
(function (c) {
	c.extend(c.rsProto, {
		_i5: function () {
			var a = this;
			"bullets" === a.st.controlNavigation && (a.ev.one("rsAfterPropsSetup", function () {
				a._j5 = !0;
				a.slider.addClass("rsWithBullets");
				for (var b = '<div class="rsNav rsBullets">', e = 0; e < a.numSlides; e++) b += '<div class="rsNavItem rsBullet"><span></span></div>';
				a._k5 = b = c(b + "</div>");
				a._l5 = b.appendTo(a.slider).children();
				a._k5.on("click.rs", ".rsNavItem", function (b) {
					a._m5 || a.goTo(c(this).index())
				})
			}), a.ev.on("rsOnAppendSlide", function (b, c, d) {
				d >= a.numSlides ? a._k5.append('<div class="rsNavItem rsBullet"><span></span></div>') :
					a._l5.eq(d).before('<div class="rsNavItem rsBullet"><span></span></div>');
				a._l5 = a._k5.children()
			}), a.ev.on("rsOnRemoveSlide", function (b, c) {
				var d = a._l5.eq(c);
				d && d.length && (d.remove(), a._l5 = a._k5.children())
			}), a.ev.on("rsOnUpdateNav", function () {
				var b = a.currSlideId;
				a._n5 && a._n5.removeClass("rsNavSelected");
				b = a._l5.eq(b);
				b.addClass("rsNavSelected");
				a._n5 = b
			}))
		}
	});
	c.rsModules.bullets = c.rsProto._i5
})(jQuery);
// jquery.rs.thumbnails v1.0.6
(function (g) {
	g.extend(g.rsProto, {
		_h6: function () {
			var a = this;
			"thumbnails" === a.st.controlNavigation && (a._i6 = {
				drag: !0,
				touch: !0,
				orientation: "horizontal",
				navigation: !0,
				arrows: !0,
				arrowLeft: null,
				arrowRight: null,
				spacing: 4,
				arrowsAutoHide: !1,
				appendSpan: !1,
				transitionSpeed: 600,
				autoCenter: !0,
				fitInViewport: !0,
				firstMargin: !0,
				paddingTop: 0,
				paddingBottom: 0
			}, a.st.thumbs = g.extend({}, a._i6, a.st.thumbs), a._j6 = !0, !1 === a.st.thumbs.firstMargin ? a.st.thumbs.firstMargin = 0 : !0 === a.st.thumbs.firstMargin && (a.st.thumbs.firstMargin =
				a.st.thumbs.spacing), a.ev.on("rsBeforeParseNode", function (a, b, c) {
				b = g(b);
				c.thumbnail = b.find(".rsTmb").remove();
				c.thumbnail.length ? c.thumbnail = g(document.createElement("div")).append(c.thumbnail).html() : (c.thumbnail = b.attr("data-rsTmb"), c.thumbnail || (c.thumbnail = b.find(".rsImg").attr("data-rsTmb")), c.thumbnail = c.thumbnail ? '<img src="' + c.thumbnail + '"/>' : "")
			}), a.ev.one("rsAfterPropsSetup", function () {
				a._k6()
			}), a._n5 = null, a.ev.on("rsOnUpdateNav", function () {
				var e = g(a._l5[a.currSlideId]);
				e !== a._n5 && (a._n5 &&
					(a._n5.removeClass("rsNavSelected"), a._n5 = null), a._l6 && a._m6(a.currSlideId), a._n5 = e.addClass("rsNavSelected"))
			}), a.ev.on("rsOnAppendSlide", function (e, b, c) {
				e = "<div" + a._n6 + ' class="rsNavItem rsThumb">' + a._o6 + b.thumbnail + "</div>";
				c >= a.numSlides ? a._s3.append(e) : a._l5.eq(c).before(e);
				a._l5 = a._s3.children();
				a.updateThumbsSize()
			}), a.ev.on("rsOnRemoveSlide", function (e, b) {
				var c = a._l5.eq(b);
				c && (c.remove(), a._l5 = a._s3.children(), a.updateThumbsSize())
			}))
		},
		_k6: function () {
			var a = this,
				e = "rsThumbs",
				b = a.st.thumbs,
				c = "",
				f, d, h = b.spacing;
			a._j5 = !0;
			a._e3 = "vertical" === b.orientation ? !1 : !0;
			a._n6 = f = h ? ' style="margin-' + (a._e3 ? "right" : "bottom") + ":" + h + 'px;"' : "";
			a._i3 = 0;
			a._p6 = !1;
			a._m5 = !1;
			a._l6 = !1;
			a._q6 = b.arrows && b.navigation;
			d = a._e3 ? "Hor" : "Ver";
			a.slider.addClass("rsWithThumbs rsWithThumbs" + d);
			c += '<div class="rsNav rsThumbs rsThumbs' + d + '"><div class="' + e + 'Container">';
			a._o6 = b.appendSpan ? '<span class="thumbIco"></span>' : "";
			for (var k = 0; k < a.numSlides; k++) d = a.slides[k], c += "<div" + f + ' class="rsNavItem rsThumb">' + d.thumbnail + a._o6 +
				"</div>";
			c = g(c + "</div></div>");
			f = {};
			b.paddingTop && (f[a._e3 ? "paddingTop" : "paddingLeft"] = b.paddingTop);
			b.paddingBottom && (f[a._e3 ? "paddingBottom" : "paddingRight"] = b.paddingBottom);
			c.css(f);
			a._s3 = g(c).find("." + e + "Container");
			a._q6 && (e += "Arrow", b.arrowLeft ? a._r6 = b.arrowLeft : (a._r6 = g('<div class="' + e + " " + e + 'Left"><div class="' + e + 'Icn"></div></div>'), c.append(a._r6)), b.arrowRight ? a._s6 = b.arrowRight : (a._s6 = g('<div class="' + e + " " + e + 'Right"><div class="' + e + 'Icn"></div></div>'), c.append(a._s6)), a._r6.click(function () {
				var b =
					(Math.floor(a._i3 / a._t6) + a._u6) * a._t6 + a._v6;
				a._a4(b > a._n3 ? a._n3 : b)
			}), a._s6.click(function () {
				var b = (Math.floor(a._i3 / a._t6) - a._u6) * a._t6 + a._v6;
				a._a4(b < a._o3 ? a._o3 : b)
			}), b.arrowsAutoHide && !a.hasTouch && (a._r6.css("opacity", 0), a._s6.css("opacity", 0), c.one("mousemove.rsarrowshover", function () {
				a._l6 && (a._r6.css("opacity", 1), a._s6.css("opacity", 1))
			}), c.hover(function () {
				a._l6 && (a._r6.css("opacity", 1), a._s6.css("opacity", 1))
			}, function () {
				a._l6 && (a._r6.css("opacity", 0), a._s6.css("opacity", 0))
			})));
			a._k5 = c;
			a._l5 =
				a._s3.children();
			a.msEnabled && a.st.thumbs.navigation && a._s3.css("-ms-touch-action", a._e3 ? "pan-y" : "pan-x");
			a.slider.append(c);
			a._w3 = !0;
			a._v6 = h;
			b.navigation && a._e && a._s3.css(a._g + "transition-property", a._g + "transform");
			a._k5.on("click.rs", ".rsNavItem", function (b) {
				a._m5 || a.goTo(g(this).index())
			});
			a.ev.off("rsBeforeSizeSet.thumbs").on("rsBeforeSizeSet.thumbs", function () {
				a._w6 = a._e3 ? a._c4 : a._b4;
				a.updateThumbsSize(!0)
			});
			a.ev.off("rsAutoHeightChange.thumbs").on("rsAutoHeightChange.thumbs", function (b, c) {
				a.updateThumbsSize(!0,
					c)
			})
		},
		updateThumbsSize: function (a, e) {
			var b = this,
				c = b._l5.first(),
				f = {},
				d = b._l5.length;
			b._t6 = (b._e3 ? c.outerWidth() : c.outerHeight()) + b._v6;
			b._y3 = d * b._t6 - b._v6;
			f[b._e3 ? "width" : "height"] = b._y3 + b._v6;
			b._z3 = b._e3 ? b._k5.width() : void 0 !== e ? e : b._k5.height();
			b._w3 && (b.isFullscreen || b.st.thumbs.fitInViewport) && (b._e3 ? b._c4 = b._w6 - b._k5.outerHeight() : b._b4 = b._w6 - b._k5.outerWidth());
			b._z3 && (b._o3 = -(b._y3 - b._z3) - b.st.thumbs.firstMargin, b._n3 = b.st.thumbs.firstMargin, b._u6 = Math.floor(b._z3 / b._t6), b._y3 < b._z3 ? (b.st.thumbs.autoCenter &&
				b._q3((b._z3 - b._y3) / 2), b.st.thumbs.arrows && b._r6 && (b._r6.addClass("rsThumbsArrowDisabled"), b._s6.addClass("rsThumbsArrowDisabled")), b._l6 = !1, b._m5 = !1, b._k5.off(b._j1)) : b.st.thumbs.navigation && !b._l6 && (b._l6 = !0, !b.hasTouch && b.st.thumbs.drag || b.hasTouch && b.st.thumbs.touch) && (b._m5 = !0, b._k5.on(b._j1, function (a) {
				b._g2(a, !0)
			})), b._s3.css(f), a && e && b._m6(b.currSlideId), b._e && (f[b._g + "transition-duration"] = "0ms"))
		},
		setThumbsOrientation: function (a, e) {
			this._w3 && (this.st.thumbs.orientation = a, this._k5.remove(),
				this.slider.removeClass("rsWithThumbsHor rsWithThumbsVer"), this._k6(), this._k5.off(this._j1), e || this.updateSliderSize(!0))
		},
		_q3: function (a) {
			this._i3 = a;
			this._e ? this._s3.css(this._x1, this._y1 + (this._e3 ? a + this._z1 + 0 : 0 + this._z1 + a) + this._a2) : this._s3.css(this._e3 ? this._x1 : this._w1, a)
		},
		_a4: function (a, e, b, c, f) {
			var d = this;
			if (d._l6) {
				e || (e = d.st.thumbs.transitionSpeed);
				d._i3 = a;
				d._x6 && clearTimeout(d._x6);
				d._p6 && (d._e || d._s3.stop(), b = !0);
				var h = {};
				d._p6 = !0;
				d._e ? (h[d._g + "transition-duration"] = e + "ms", h[d._g + "transition-timing-function"] =
					b ? g.rsCSS3Easing[d.st.easeOut] : g.rsCSS3Easing[d.st.easeInOut], d._s3.css(h), d._q3(a)) : (h[d._e3 ? d._x1 : d._w1] = a + "px", d._s3.animate(h, e, b ? "easeOutCubic" : d.st.easeInOut));
				c && (d._i3 = c);
				d._y6();
				d._x6 = setTimeout(function () {
					d._p6 = !1;
					f && (d._a4(c, f, !0), f = null)
				}, e)
			}
		},
		_y6: function () {
			this._q6 && (this._i3 === this._n3 ? this._r6.addClass("rsThumbsArrowDisabled") : this._r6.removeClass("rsThumbsArrowDisabled"), this._i3 === this._o3 ? this._s6.addClass("rsThumbsArrowDisabled") : this._s6.removeClass("rsThumbsArrowDisabled"))
		},
		_m6: function (a, e) {
			var b = 0,
				c, f = a * this._t6 + 2 * this._t6 - this._v6 + this._n3,
				d = Math.floor(this._i3 / this._t6);
			this._l6 && (this._j6 && (e = !0, this._j6 = !1), f + this._i3 > this._z3 ? (a === this.numSlides - 1 && (b = 1), d = -a + this._u6 - 2 + b, c = d * this._t6 + this._z3 % this._t6 + this._v6 - this._n3) : 0 !== a ? (a - 1) * this._t6 <= -this._i3 + this._n3 && a - 1 <= this.numSlides - this._u6 && (c = (-a + 1) * this._t6 + this._n3) : c = this._n3, c !== this._i3 && (b = void 0 === c ? this._i3 : c, b > this._n3 ? this._q3(this._n3) : b < this._o3 ? this._q3(this._o3) : void 0 !== c && (e ? this._q3(c) : this._a4(c))),
				this._y6())
		}
	});
	g.rsModules.thumbnails = g.rsProto._h6
})(jQuery);
// jquery.rs.tabs v1.0.2
(function (e) {
	e.extend(e.rsProto, {
		_f6: function () {
			var a = this;
			"tabs" === a.st.controlNavigation && (a.ev.on("rsBeforeParseNode", function (a, d, b) {
				d = e(d);
				b.thumbnail = d.find(".rsTmb").remove();
				b.thumbnail.length ? b.thumbnail = e(document.createElement("div")).append(b.thumbnail).html() : (b.thumbnail = d.attr("data-rsTmb"), b.thumbnail || (b.thumbnail = d.find(".rsImg").attr("data-rsTmb")), b.thumbnail = b.thumbnail ? '<img src="' + b.thumbnail + '"/>' : "")
			}), a.ev.one("rsAfterPropsSetup", function () {
				a._g6()
			}), a.ev.on("rsOnAppendSlide",
				function (c, d, b) {
					b >= a.numSlides ? a._k5.append('<div class="rsNavItem rsTab">' + d.thumbnail + "</div>") : a._l5.eq(b).before('<div class="rsNavItem rsTab">' + item.thumbnail + "</div>");
					a._l5 = a._k5.children()
				}), a.ev.on("rsOnRemoveSlide", function (c, d) {
				var b = a._l5.eq(d);
				b && (b.remove(), a._l5 = a._k5.children())
			}), a.ev.on("rsOnUpdateNav", function () {
				var c = a.currSlideId;
				a._n5 && a._n5.removeClass("rsNavSelected");
				c = a._l5.eq(c);
				c.addClass("rsNavSelected");
				a._n5 = c
			}))
		},
		_g6: function () {
			var a = this,
				c;
			a._j5 = !0;
			c = '<div class="rsNav rsTabs">';
			for (var d = 0; d < a.numSlides; d++) c += '<div class="rsNavItem rsTab">' + a.slides[d].thumbnail + "</div>";
			c = e(c + "</div>");
			a._k5 = c;
			a._l5 = c.children(".rsNavItem");
			a.slider.append(c);
			a._k5.click(function (b) {
				b = e(b.target).closest(".rsNavItem");
				b.length && a.goTo(b.index())
			})
		}
	});
	e.rsModules.tabs = e.rsProto._f6
})(jQuery);
// jquery.rs.fullscreen v1.0.5
(function (c) {
	c.extend(c.rsProto, {
		_q5: function () {
			var a = this;
			a._r5 = {
				enabled: !1,
				keyboardNav: !0,
				buttonFS: !0,
				nativeFS: !1,
				doubleTap: !0
			};
			a.st.fullscreen = c.extend({}, a._r5, a.st.fullscreen);
			if (a.st.fullscreen.enabled) a.ev.one("rsBeforeSizeSet", function () {
				a._s5()
			})
		},
		_s5: function () {
			var a = this;
			a._t5 = !a.st.keyboardNavEnabled && a.st.fullscreen.keyboardNav;
			if (a.st.fullscreen.nativeFS) {
				a._u5 = {
					supportsFullScreen: !1,
					isFullScreen: function () {
						return !1
					},
					requestFullScreen: function () {},
					cancelFullScreen: function () {},
					fullScreenEventName: "",
					prefix: ""
				};
				var b = ["webkit", "moz", "o", "ms", "khtml"];
				if (!a.isAndroid)
					if ("undefined" != typeof document.cancelFullScreen) a._u5.supportsFullScreen = !0;
					else
						for (var d = 0; d < b.length; d++)
							if (a._u5.prefix = b[d], "undefined" != typeof document[a._u5.prefix + "CancelFullScreen"]) {
								a._u5.supportsFullScreen = !0;
								break
							}
				a._u5.supportsFullScreen ? (a.nativeFS = !0, a._u5.fullScreenEventName = a._u5.prefix + "fullscreenchange" + a.ns, a._u5.isFullScreen = function () {
					switch (this.prefix) {
						case "":
							return document.fullScreen;
						case "webkit":
							return document.webkitIsFullScreen;
						default:
							return document[this.prefix + "FullScreen"]
					}
				}, a._u5.requestFullScreen = function (a) {
					return "" === this.prefix ? a.requestFullScreen() : a[this.prefix + "RequestFullScreen"]()
				}, a._u5.cancelFullScreen = function (a) {
					return "" === this.prefix ? document.cancelFullScreen() : document[this.prefix + "CancelFullScreen"]()
				}) : a._u5 = !1
			}
			a.st.fullscreen.buttonFS && (a._v5 = c('<div class="rsFullscreenBtn"><div class="rsFullscreenIcn"></div></div>').appendTo(a._o1).on("click.rs", function () {
				a.isFullscreen ? a.exitFullscreen() : a.enterFullscreen()
			}))
		},
		enterFullscreen: function (a) {
			var b = this;
			if (b._u5)
				if (a) b._u5.requestFullScreen(c("html")[0]);
				else {
					b._b.on(b._u5.fullScreenEventName, function (a) {
						b._u5.isFullScreen() ? b.enterFullscreen(!0) : b.exitFullscreen(!0)
					});
					b._u5.requestFullScreen(c("html")[0]);
					return
				}
			if (!b._w5) {
				b._w5 = !0;
				b._b.on("keyup" + b.ns + "fullscreen", function (a) {
					27 === a.keyCode && b.exitFullscreen()
				});
				b._t5 && b._b2();
				a = c(window);
				b._x5 = a.scrollTop();
				b._y5 = a.scrollLeft();
				b._z5 = c("html").attr("style");
				b._a6 = c("body").attr("style");
				b._b6 = b.slider.attr("style");
				c("body, html").css({
					overflow: "hidden",
					height: "100%",
					width: "100%",
					margin: "0",
					padding: "0"
				});
				b.slider.addClass("rsFullscreen");
				var d;
				for (d = 0; d < b.numSlides; d++) a = b.slides[d], a.isRendered = !1, a.bigImage && (a.isBig = !0, a.isMedLoaded = a.isLoaded, a.isMedLoading = a.isLoading, a.medImage = a.image, a.medIW = a.iW, a.medIH = a.iH, a.slideId = -99, a.bigImage !== a.medImage && (a.sizeType = "big"), a.isLoaded = a.isBigLoaded, a.isLoading = !1, a.image = a.bigImage, a.images[0] = a.bigImage, a.iW = a.bigIW, a.iH = a.bigIH, a.isAppended = a.contentAdded = !1, b._c6(a));
				b.isFullscreen = !0;
				b._w5 = !1;
				b.updateSliderSize();
				b.ev.trigger("rsEnterFullscreen")
			}
		},
		exitFullscreen: function (a) {
			var b = this;
			if (b._u5) {
				if (!a) {
					b._u5.cancelFullScreen(c("html")[0]);
					return
				}
				b._b.off(b._u5.fullScreenEventName)
			}
			if (!b._w5) {
				b._w5 = !0;
				b._b.off("keyup" + b.ns + "fullscreen");
				b._t5 && b._b.off("keydown" + b.ns);
				c("html").attr("style", b._z5 || "");
				c("body").attr("style", b._a6 || "");
				var d;
				for (d = 0; d < b.numSlides; d++) a = b.slides[d], a.isRendered = !1, a.bigImage && (a.isBig = !1, a.slideId = -99, a.isBigLoaded =
					a.isLoaded, a.isBigLoading = a.isLoading, a.bigImage = a.image, a.bigIW = a.iW, a.bigIH = a.iH, a.isLoaded = a.isMedLoaded, a.isLoading = !1, a.image = a.medImage, a.images[0] = a.medImage, a.iW = a.medIW, a.iH = a.medIH, a.isAppended = a.contentAdded = !1, b._c6(a, !0), a.bigImage !== a.medImage && (a.sizeType = "med"));
				b.isFullscreen = !1;
				a = c(window);
				a.scrollTop(b._x5);
				a.scrollLeft(b._y5);
				b._w5 = !1;
				b.slider.removeClass("rsFullscreen");
				b.updateSliderSize();
				setTimeout(function () {
					b.updateSliderSize()
				}, 1);
				b.ev.trigger("rsExitFullscreen")
			}
		},
		_c6: function (a,
			b) {
			var d = a.isLoaded || a.isLoading ? '<img class="rsImg rsMainSlideImage" src="' + a.image + '"/>' : '<a class="rsImg rsMainSlideImage" href="' + a.image + '"></a>';
			a.content.hasClass("rsImg") ? a.content = c(d) : a.content.find(".rsImg").eq(0).replaceWith(d);
			a.isLoaded || a.isLoading || !a.holder || a.holder.html(a.content)
		}
	});
	c.rsModules.fullscreen = c.rsProto._q5
})(jQuery);
// jquery.rs.autoplay v1.0.5
(function (b) {
	b.extend(b.rsProto, {
		_x4: function () {
			var a = this,
				d;
			a._y4 = {
				enabled: !1,
				stopAtAction: !0,
				pauseOnHover: !0,
				delay: 2E3
			};
			!a.st.autoPlay && a.st.autoplay && (a.st.autoPlay = a.st.autoplay);
			a.st.autoPlay = b.extend({}, a._y4, a.st.autoPlay);
			a.st.autoPlay.enabled && (a.ev.on("rsBeforeParseNode", function (a, c, f) {
				c = b(c);
				if (d = c.attr("data-rsDelay")) f.customDelay = parseInt(d, 10)
			}), a.ev.one("rsAfterInit", function () {
				a._z4()
			}), a.ev.on("rsBeforeDestroy", function () {
				a.stopAutoPlay();
				a.slider.off("mouseenter mouseleave");
				b(window).off("blur" +
					a.ns + " focus" + a.ns)
			}))
		},
		_z4: function () {
			var a = this;
			a.startAutoPlay();
			a.ev.on("rsAfterContentSet", function (b, e) {
				a._l2 || a._r2 || !a._a5 || e !== a.currSlide || a._b5()
			});
			a.ev.on("rsDragRelease", function () {
				a._a5 && a._c5 && (a._c5 = !1, a._b5())
			});
			a.ev.on("rsAfterSlideChange", function () {
				a._a5 && a._c5 && (a._c5 = !1, a.currSlide.isLoaded && a._b5())
			});
			a.ev.on("rsDragStart", function () {
				a._a5 && (a.st.autoPlay.stopAtAction ? a.stopAutoPlay() : (a._c5 = !0, a._d5()))
			});
			a.ev.on("rsBeforeMove", function (b, e, c) {
				a._a5 && (c && a.st.autoPlay.stopAtAction ?
					a.stopAutoPlay() : (a._c5 = !0, a._d5()))
			});
			a._e5 = !1;
			a.ev.on("rsVideoStop", function () {
				a._a5 && (a._e5 = !1, a._b5())
			});
			a.ev.on("rsVideoPlay", function () {
				a._a5 && (a._c5 = !1, a._d5(), a._e5 = !0)
			});
			b(window).on("blur" + a.ns, function () {
				a._a5 && (a._c5 = !0, a._d5())
			}).on("focus" + a.ns, function () {
				a._a5 && a._c5 && (a._c5 = !1, a._b5())
			});
			a.st.autoPlay.pauseOnHover && (a._f5 = !1, a.slider.hover(function () {
				a._a5 && (a._c5 = !1, a._d5(), a._f5 = !0)
			}, function () {
				a._a5 && (a._f5 = !1, a._b5())
			}))
		},
		toggleAutoPlay: function () {
			this._a5 ? this.stopAutoPlay() :
				this.startAutoPlay()
		},
		startAutoPlay: function () {
			this._a5 = !0;
			this.currSlide.isLoaded && this._b5()
		},
		stopAutoPlay: function () {
			this._e5 = this._f5 = this._c5 = this._a5 = !1;
			this._d5()
		},
		_b5: function () {
			var a = this;
			a._f5 || a._e5 || (a._g5 = !0, a._h5 && clearTimeout(a._h5), a._h5 = setTimeout(function () {
				var b;
				a._z || a.st.loopRewind || (b = !0, a.st.loopRewind = !0);
				a.next(!0);
				b && (a.st.loopRewind = !1)
			}, a.currSlide.customDelay ? a.currSlide.customDelay : a.st.autoPlay.delay))
		},
		_d5: function () {
			this._f5 || this._e5 || (this._g5 = !1, this._h5 && (clearTimeout(this._h5),
				this._h5 = null))
		}
	});
	b.rsModules.autoplay = b.rsProto._x4
})(jQuery);
// jquery.rs.video v1.1.3
(function (f) {
	f.extend(f.rsProto, {
		_z6: function () {
			var a = this;
			a._a7 = {
				autoHideArrows: !0,
				autoHideControlNav: !1,
				autoHideBlocks: !1,
				autoHideCaption: !1,
				disableCSS3inFF: !0,
				youTubeCode: '<iframe src="https://www.youtube.com/embed/%id%?rel=1&showinfo=0&autoplay=1&wmode=transparent" frameborder="no"></iframe>',
				vimeoCode: '<iframe src="https://player.vimeo.com/video/%id%?byline=0&portrait=0&autoplay=1" frameborder="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'
			};
			a.st.video = f.extend({}, a._a7,
				a.st.video);
			a.ev.on("rsBeforeSizeSet", function () {
				a._b7 && setTimeout(function () {
					var b = a._r1,
						b = b.hasClass("rsVideoContainer") ? b : b.find(".rsVideoContainer");
					a._c7 && a._c7.css({
						width: b.width(),
						height: b.height()
					})
				}, 32)
			});
			var d = a._a.mozilla;
			a.ev.on("rsAfterParseNode", function (b, c, e) {
				b = f(c);
				if (e.videoURL) {
					a.st.video.disableCSS3inFF && d && (a._e = a._f = !1);
					c = f('<div class="rsVideoContainer"></div>');
					var g = f('<div class="rsBtnCenterer"><div class="rsPlayBtn"><div class="rsPlayBtnIcon"></div></div></div>');
					b.hasClass("rsImg") ?
						e.content = c.append(b).append(g) : e.content.find(".rsImg").wrap(c).after(g)
				}
			});
			a.ev.on("rsAfterSlideChange", function () {
				a.stopVideo()
			})
		},
		toggleVideo: function () {
			return this._b7 ? this.stopVideo() : this.playVideo()
		},
		playVideo: function () {
			var a = this;
			if (!a._b7) {
				var d = a.currSlide;
				if (!d.videoURL) return !1;
				a._d7 = d;
				var b = a._e7 = d.content,
					d = d.videoURL,
					c, e;
				d.match(/youtu\.be/i) || d.match(/youtube\.com/i) ? (e = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/, (e = d.match(e)) && 11 == e[7].length &&
					(c = e[7]), void 0 !== c && (a._c7 = a.st.video.youTubeCode.replace("%id%", c))) : d.match(/vimeo\.com/i) && (e = /(www\.)?vimeo.com\/(\d+)($|\/)/, (e = d.match(e)) && (c = e[2]), void 0 !== c && (a._c7 = a.st.video.vimeoCode.replace("%id%", c)));
				a.videoObj = f(a._c7);
				a.ev.trigger("rsOnCreateVideoElement", [d]);
				a.videoObj.length && (a._c7 = f('<div class="rsVideoFrameHolder"><div class="rsPreloader"></div><div class="rsCloseVideoBtn"><div class="rsCloseVideoIcn"></div></div></div>'), a._c7.find(".rsPreloader").after(a.videoObj), b = b.hasClass("rsVideoContainer") ?
					b : b.find(".rsVideoContainer"), a._c7.css({
						width: b.width(),
						height: b.height()
					}).find(".rsCloseVideoBtn").off("click.rsv").on("click.rsv", function (b) {
						a.stopVideo();
						b.preventDefault();
						b.stopPropagation();
						return !1
					}), b.append(a._c7), a.isIPAD && b.addClass("rsIOSVideo"), a._f7(!1), setTimeout(function () {
						a._c7.addClass("rsVideoActive")
					}, 10), a.ev.trigger("rsVideoPlay"), a._b7 = !0);
				return !0
			}
			return !1
		},
		stopVideo: function () {
			var a = this;
			return a._b7 ? (a.isIPAD && a.slider.find(".rsCloseVideoBtn").remove(), a._f7(!0), setTimeout(function () {
				a.ev.trigger("rsOnDestroyVideoElement",
[a.videoObj]);
				var d = a._c7.find("iframe");
				if (d.length) try {
					d.attr("src", "")
				} catch (b) {}
				a._c7.remove();
				a._c7 = null
			}, 16), a.ev.trigger("rsVideoStop"), a._b7 = !1, !0) : !1
		},
		_f7: function (a, d) {
			var b = [],
				c = this.st.video;
			c.autoHideArrows && (this._c2 && (b.push(this._c2, this._d2), this._e2 = !a), this._v5 && b.push(this._v5));
			c.autoHideControlNav && this._k5 && b.push(this._k5);
			c.autoHideBlocks && this._d7.animBlocks && b.push(this._d7.animBlocks);
			c.autoHideCaption && this.globalCaption && b.push(this.globalCaption);
			this.slider[a ? "removeClass" :
				"addClass"]("rsVideoPlaying");
			if (b.length)
				for (c = 0; c < b.length; c++) a ? b[c].removeClass("rsHidden") : b[c].addClass("rsHidden")
		}
	});
	f.rsModules.video = f.rsProto._z6
})(jQuery);
// jquery.rs.animated-blocks v1.0.7
(function (l) {
	l.extend(l.rsProto, {
		_p4: function () {
			function m() {
				var g = a.currSlide;
				if (a.currSlide && a.currSlide.isLoaded && a._t4 !== g) {
					if (0 < a._s4.length) {
						for (b = 0; b < a._s4.length; b++) clearTimeout(a._s4[b]);
						a._s4 = []
					}
					if (0 < a._r4.length) {
						var f;
						for (b = 0; b < a._r4.length; b++)
							if (f = a._r4[b]) a._e ? (f.block.css(a._g + a._u1, "0s"), f.block.css(f.css)) : f.block.stop(!0).css(f.css), a._t4 = null, g.animBlocksDisplayed = !1;
						a._r4 = []
					}
					g.animBlocks && (g.animBlocksDisplayed = !0, a._t4 = g, a._u4(g.animBlocks))
				}
			}
			var a = this,
				b;
			a._q4 = {
				fadeEffect: !0,
				moveEffect: "top",
				moveOffset: 20,
				speed: 400,
				easing: "easeOutSine",
				delay: 200
			};
			a.st.block = l.extend({}, a._q4, a.st.block);
			a._r4 = [];
			a._s4 = [];
			a.ev.on("rsAfterInit", function () {
				m()
			});
			a.ev.on("rsBeforeParseNode", function (a, b, d) {
				b = l(b);
				d.animBlocks = b.find(".rsABlock").css("display", "none");
				d.animBlocks.length || (b.hasClass("rsABlock") ? d.animBlocks = b.css("display", "none") : d.animBlocks = !1)
			});
			a.ev.on("rsAfterContentSet", function (b, f) {
				f.id === a.slides[a.currSlideId].id && setTimeout(function () {
						m()
					}, a.st.fadeinLoadedSlide ?
					300 : 0)
			});
			a.ev.on("rsAfterSlideChange", function () {
				m()
			})
		},
		_v4: function (l, a) {
			setTimeout(function () {
				l.css(a)
			}, 6)
		},
		_u4: function (m) {
			var a = this,
				b, g, f, d, h, e, n;
			a._s4 = [];
			m.each(function (m) {
				b = l(this);
				g = {};
				f = {};
				d = null;
				var c = b.attr("data-move-offset"),
					c = c ? parseInt(c, 10) : a.st.block.moveOffset;
				if (0 < c && ((e = b.data("move-effect")) ? (e = e.toLowerCase(), "none" === e ? e = !1 : "left" !== e && "top" !== e && "bottom" !== e && "right" !== e && (e = a.st.block.moveEffect, "none" === e && (e = !1))) : e = a.st.block.moveEffect, e && "none" !== e)) {
					var p;
					p = "right" ===
						e || "left" === e ? !0 : !1;
					var k;
					n = !1;
					a._e ? (k = 0, h = a._x1) : (p ? isNaN(parseInt(b.css("right"), 10)) ? h = "left" : (h = "right", n = !0) : isNaN(parseInt(b.css("bottom"), 10)) ? h = "top" : (h = "bottom", n = !0), h = "margin-" + h, n && (c = -c), a._e ? k = parseInt(b.css(h), 10) : (k = b.data("rs-start-move-prop"), void 0 === k && (k = parseInt(b.css(h), 10), isNaN(k) && (k = 0), b.data("rs-start-move-prop", k))));
					f[h] = a._m4("top" === e || "left" === e ? k - c : k + c, p);
					g[h] = a._m4(k, p)
				}
				c = b.attr("data-fade-effect");
				if (!c) c = a.st.block.fadeEffect;
				else if ("none" === c.toLowerCase() ||
					"false" === c.toLowerCase()) c = !1;
				c && (f.opacity = 0, g.opacity = 1);
				if (c || e) d = {}, d.hasFade = Boolean(c), Boolean(e) && (d.moveProp = h, d.hasMove = !0), d.speed = b.data("speed"), isNaN(d.speed) && (d.speed = a.st.block.speed), d.easing = b.data("easing"), d.easing || (d.easing = a.st.block.easing), d.css3Easing = l.rsCSS3Easing[d.easing], d.delay = b.data("delay"), isNaN(d.delay) && (d.delay = a.st.block.delay * m);
				c = {};
				a._e && (c[a._g + a._u1] = "0ms");
				c.moveProp = g.moveProp;
				c.opacity = g.opacity;
				c.display = "none";
				a._r4.push({
					block: b,
					css: c
				});
				a._v4(b,
					f);
				a._s4.push(setTimeout(function (b, d, c, e) {
					return function () {
						b.css("display", "block");
						if (c) {
							var g = {};
							if (a._e) {
								var f = "";
								c.hasMove && (f += c.moveProp);
								c.hasFade && (c.hasMove && (f += ", "), f += "opacity");
								g[a._g + a._t1] = f;
								g[a._g + a._u1] = c.speed + "ms";
								g[a._g + a._v1] = c.css3Easing;
								b.css(g);
								setTimeout(function () {
									b.css(d)
								}, 24)
							} else setTimeout(function () {
								b.animate(d, c.speed, c.easing)
							}, 16)
						}
						delete a._s4[e]
					}
				}(b, g, d, m), 6 >= d.delay ? 12 : d.delay))
			})
		}
	});
	l.rsModules.animatedBlocks = l.rsProto._p4
})(jQuery);
// jquery.rs.auto-height v1.0.3
(function (b) {
	b.extend(b.rsProto, {
		_w4: function () {
			var a = this;
			if (a.st.autoHeight) {
				var b, c, e, f = !0,
					d = function (d) {
						e = a.slides[a.currSlideId];
						(b = e.holder) && (c = b.height()) && void 0 !== c && c > (a.st.minAutoHeight || 30) && (a._c4 = c, a._e || !d ? a._e1.css("height", c) : a._e1.stop(!0, !0).animate({
							height: c
						}, a.st.transitionSpeed), a.ev.trigger("rsAutoHeightChange", c), f && (a._e && setTimeout(function () {
							a._e1.css(a._g + "transition", "height " + a.st.transitionSpeed + "ms ease-in-out")
						}, 16), f = !1))
					};
				a.ev.on("rsMaybeSizeReady.rsAutoHeight",
					function (a, b) {
						e === b && d()
					});
				a.ev.on("rsAfterContentSet.rsAutoHeight", function (a, b) {
					e === b && d()
				});
				a.slider.addClass("rsAutoHeight");
				a.ev.one("rsAfterInit", function () {
					setTimeout(function () {
						d(!1);
						setTimeout(function () {
							a.slider.append('<div style="clear:both; float: none;"></div>')
						}, 16)
					}, 16)
				});
				a.ev.on("rsBeforeAnimStart", function () {
					d(!0)
				});
				a.ev.on("rsBeforeSizeSet", function () {
					setTimeout(function () {
						d(!1)
					}, 16)
				})
			}
		}
	});
	b.rsModules.autoHeight = b.rsProto._w4
})(jQuery);
// jquery.rs.global-caption v1.0
(function (b) {
	b.extend(b.rsProto, {
		_d6: function () {
			var a = this;
			a.st.globalCaption && (a.ev.on("rsAfterInit", function () {
				a.globalCaption = b('<div class="rsGCaption"></div>').appendTo(a.st.globalCaptionInside ? a._e1 : a.slider);
				a.globalCaption.html(a.currSlide.caption)
			}), a.ev.on("rsBeforeAnimStart", function () {
				a.globalCaption.html(a.currSlide.caption)
			}))
		}
	});
	b.rsModules.globalCaption = b.rsProto._d6
})(jQuery);
// jquery.rs.active-class v1.0.1
(function (c) {
	c.rsProto._o4 = function () {
		var b, a = this;
		if (a.st.addActiveClass) a.ev.on("rsOnUpdateNav", function () {
			b && clearTimeout(b);
			b = setTimeout(function () {
				a._g4 && a._g4.removeClass("rsActiveSlide");
				a._r1 && a._r1.addClass("rsActiveSlide");
				b = null
			}, 50)
		})
	};
	c.rsModules.activeClass = c.rsProto._o4
})(jQuery);
// jquery.rs.deeplinking v1.0.6 + jQuery hashchange plugin v1.3 Copyright (c) 2010 Ben Alman
(function (d) {
	d.extend(d.rsProto, {
		_o5: function () {
			var a = this,
				l, g, f;
			a._p5 = {
				enabled: !1,
				change: !1,
				prefix: ""
			};
			a.st.deeplinking = d.extend({}, a._p5, a.st.deeplinking);
			if (a.st.deeplinking.enabled) {
				var k = a.st.deeplinking.change,
					c = a.st.deeplinking.prefix,
					e = "#" + c,
					h = function () {
						var b = window.location.hash;
						return b && 0 < b.indexOf(c) && (b = parseInt(b.substring(e.length), 10), 0 <= b) ? b - 1 : -1
					},
					m = h(); - 1 !== m && (a.st.startSlideId = m);
				k && (d(window).on("hashchange" + a.ns, function (b) {
					l || (b = h(), 0 > b || (b > a.numSlides - 1 && (b = a.numSlides - 1),
						a.goTo(b)))
				}), a.ev.on("rsBeforeAnimStart", function () {
					g && clearTimeout(g);
					f && clearTimeout(f)
				}), a.ev.on("rsAfterSlideChange", function () {
					g && clearTimeout(g);
					f && clearTimeout(f);
					f = setTimeout(function () {
						l = !0;
						window.location.replace(("" + window.location).split("#")[0] + e + (a.currSlideId + 1));
						g = setTimeout(function () {
							l = !1;
							g = null
						}, 60)
					}, 400)
				}));
				a.ev.on("rsBeforeDestroy", function () {
					g = f = null;
					k && d(window).off("hashchange" + a.ns)
				})
			}
		}
	});
	d.rsModules.deeplinking = d.rsProto._o5
})(jQuery);
(function (d, a, l) {
	function g(b) {
		b = b || location.href;
		return "#" + b.replace(/^[^#]*#?(.*)$/, "$1")
	}
	"$:nomunge";
	var f = "hashchange",
		k = document,
		c, e = d.event.special,
		h = k.documentMode,
		m = "on" + f in a && (h === l || 7 < h);
	d.fn[f] = function (b) {
		return b ? this.bind(f, b) : this.trigger(f)
	};
	d.fn[f].delay = 50;
	e[f] = d.extend(e[f], {
		setup: function () {
			if (m) return !1;
			d(c.start)
		},
		teardown: function () {
			if (m) return !1;
			d(c.stop)
		}
	});
	c = function () {
		function b() {
			var c = g(),
				n = r(h);
			c !== h ? (p(h = c, n), d(a).trigger(f)) : n !== h && (location.href = location.href.replace(/#.*/,
				"") + n);
			e = setTimeout(b, d.fn[f].delay)
		}
		var c = {},
			e, h = g(),
			q = function (b) {
				return b
			},
			p = q,
			r = q;
		c.start = function () {
			e || b()
		};
		c.stop = function () {
			e && clearTimeout(e);
			e = l
		};
		a.attachEvent && !a.addEventListener && !m && function () {
			var a, e;
			c.start = function () {
				a || (e = (e = d.fn[f].src) && e + g(), a = d('<iframe tabindex="-1" title="empty"/>').hide().one("load", function () {
					e || p(g());
					b()
				}).attr("src", e || "javascript:0").insertAfter("body")[0].contentWindow, k.onpropertychange = function () {
					try {
						"title" === event.propertyName && (a.document.title =
							k.title)
					} catch (b) {}
				})
			};
			c.stop = q;
			r = function () {
				return g(a.location.href)
			};
			p = function (b, e) {
				var c = a.document,
					g = d.fn[f].domain;
				b !== e && (c.title = k.title, c.open(), g && c.write('<script>document.domain="' + g + '"\x3c/script>'), c.close(), a.location.hash = b)
			}
		}();
		return c
	}()
})(jQuery, this);
// jquery.rs.visible-nearby v1.0.2
(function (d) {
	d.rsProto._g7 = function () {
		var a = this;
		a.st.visibleNearby && a.st.visibleNearby.enabled && (a._h7 = {
			enabled: !0,
			centerArea: 0.6,
			center: !0,
			breakpoint: 0,
			breakpointCenterArea: 0.8,
			hiddenOverflow: !0,
			navigateByCenterClick: !1
		}, a.st.visibleNearby = d.extend({}, a._h7, a.st.visibleNearby), a.ev.one("rsAfterPropsSetup", function () {
			a._i7 = a._e1.css("overflow", "visible").wrap('<div class="rsVisibleNearbyWrap"></div>').parent();
			a.st.visibleNearby.hiddenOverflow || a._i7.css("overflow", "visible");
			a._o1 = a.st.controlsInside ?
				a._i7 : a.slider
		}), a.ev.on("rsAfterSizePropSet", function () {
			var b, c = a.st.visibleNearby;
			b = c.breakpoint && a.width < c.breakpoint ? c.breakpointCenterArea : c.centerArea;
			a._h ? (a._b4 *= b, a._i7.css({
				height: a._c4,
				width: a._b4 / b
			}), a._d = a._b4 * (1 - b) / 2 / b) : (a._c4 *= b, a._i7.css({
				height: a._c4 / b,
				width: a._b4
			}), a._d = a._c4 * (1 - b) / 2 / b);
			c.navigateByCenterClick || (a._q = a._h ? a._b4 : a._c4);
			c.center && a._e1.css("margin-" + (a._h ? "left" : "top"), a._d)
		}))
	};
	d.rsModules.visibleNearby = d.rsProto._g7
})(jQuery);
/*! jQuery UI - v1.11.2 - 2014-12-28
 * http://jqueryui.com
 * Includes: core.js, widget.js, accordion.js
 * Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */
! function (e) {
	"function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function (e) {
	function t(t, n) {
		var s, a, r, o = t.nodeName.toLowerCase();
		return "area" === o ? (s = t.parentNode, a = s.name, t.href && a && "map" === s.nodeName.toLowerCase() ? (r = e("img[usemap='#" + a + "']")[0], !!r && i(r)) : !1) : (/input|select|textarea|button|object/.test(o) ? !t.disabled : "a" === o ? t.href || n : n) && i(t)
	}

	function i(t) {
		return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
			return "hidden" === e.css(this, "visibility")
		}).length
	}
	e.ui = e.ui || {}, e.extend(e.ui, {
		version: "1.11.2",
		keyCode: {
			BACKSPACE: 8,
			COMMA: 188,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESCAPE: 27,
			HOME: 36,
			LEFT: 37,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			PERIOD: 190,
			RIGHT: 39,
			SPACE: 32,
			TAB: 9,
			UP: 38
		}
	}), e.fn.extend({
		scrollParent: function (t) {
			var i = this.css("position"),
				n = "absolute" === i,
				s = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
				a = this.parents().filter(function () {
					var t = e(this);
					return n && "static" === t.css("position") ? !1 : s.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
				}).eq(0);
			return "fixed" !== i && a.length ? a : e(this[0].ownerDocument || document)
		},
		uniqueId: function () {
			var e = 0;
			return function () {
				return this.each(function () {
					this.id || (this.id = "ui-id-" + ++e)
				})
			}
		}(),
		removeUniqueId: function () {
			return this.each(function () {
				/^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
			})
		}
	}), e.extend(e.expr[":"], {
		data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
			return function (i) {
				return !!e.data(i, t)
			}
		}) : function (t, i, n) {
			return !!e.data(t, n[3])
		},
		focusable: function (i) {
			return t(i, !isNaN(e.attr(i, "tabindex")))
		},
		tabbable: function (i) {
			var n = e.attr(i, "tabindex"),
				s = isNaN(n);
			return (s || n >= 0) && t(i, !s)
		}
	}), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (t, i) {
		function n(t, i, n, a) {
			return e.each(s, function () {
				i -= parseFloat(e.css(t, "padding" + this)) || 0, n && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
			}), i
		}
		var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
			a = i.toLowerCase(),
			r = {
				innerWidth: e.fn.innerWidth,
				innerHeight: e.fn.innerHeight,
				outerWidth: e.fn.outerWidth,
				outerHeight: e.fn.outerHeight
			};
		e.fn["inner" + i] = function (t) {
			return void 0 === t ? r["inner" + i].call(this) : this.each(function () {
				e(this).css(a, n(this, t) + "px")
			})
		}, e.fn["outer" + i] = function (t, s) {
			return "number" != typeof t ? r["outer" + i].call(this, t) : this.each(function () {
				e(this).css(a, n(this, t, !0, s) + "px")
			})
		}
	}), e.fn.addBack || (e.fn.addBack = function (e) {
		return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
	}), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
		return function (i) {
			return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
		}
	}(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
		focus: function (t) {
			return function (i, n) {
				return "number" == typeof i ? this.each(function () {
					var t = this;
					setTimeout(function () {
						e(t).focus(), n && n.call(t)
					}, i)
				}) : t.apply(this, arguments)
			}
		}(e.fn.focus),
		disableSelection: function () {
			var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
			return function () {
				return this.bind(e + ".ui-disableSelection", function (e) {
					e.preventDefault()
				})
			}
		}(),
		enableSelection: function () {
			return this.unbind(".ui-disableSelection")
		},
		zIndex: function (t) {
			if (void 0 !== t) return this.css("zIndex", t);
			if (this.length)
				for (var i, n, s = e(this[0]); s.length && s[0] !== document;) {
					if (i = s.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (n = parseInt(s.css("zIndex"), 10), !isNaN(n) && 0 !== n)) return n;
					s = s.parent()
				}
			return 0
		}
	}), e.ui.plugin = {
		add: function (t, i, n) {
			var s, a = e.ui[t].prototype;
			for (s in n) a.plugins[s] = a.plugins[s] || [], a.plugins[s].push([i, n[s]])
		},
		call: function (e, t, i, n) {
			var s, a = e.plugins[t];
			if (a && (n || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
				for (s = 0; s < a.length; s++) e.options[a[s][0]] && a[s][1].apply(e.element, i)
		}
	};
	var n = 0,
		s = Array.prototype.slice;
	e.cleanData = function (t) {
		return function (i) {
			var n, s, a;
			for (a = 0; null != (s = i[a]); a++) try {
				n = e._data(s, "events"), n && n.remove && e(s).triggerHandler("remove")
			} catch (r) {}
			t(i)
		}
	}(e.cleanData), e.widget = function (t, i, n) {
		var s, a, r, o, h = {},
			d = t.split(".")[0];
		return t = t.split(".")[1], s = d + "-" + t, n || (n = i, i = e.Widget), e.expr[":"][s.toLowerCase()] = function (t) {
			return !!e.data(t, s)
		}, e[d] = e[d] || {}, a = e[d][t], r = e[d][t] = function (e, t) {
			return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new r(e, t)
		}, e.extend(r, a, {
			version: n.version,
			_proto: e.extend({}, n),
			_childConstructors: []
		}), o = new i, o.options = e.widget.extend({}, o.options), e.each(n, function (t, n) {
			return e.isFunction(n) ? void(h[t] = function () {
				var e = function () {
						return i.prototype[t].apply(this, arguments)
					},
					s = function (e) {
						return i.prototype[t].apply(this, e)
					};
				return function () {
					var t, i = this._super,
						a = this._superApply;
					return this._super = e, this._superApply = s, t = n.apply(this, arguments), this._super = i, this._superApply = a, t
				}
			}()) : void(h[t] = n)
		}), r.prototype = e.widget.extend(o, {
			widgetEventPrefix: a ? o.widgetEventPrefix || t : t
		}, h, {
			constructor: r,
			namespace: d,
			widgetName: t,
			widgetFullName: s
		}), a ? (e.each(a._childConstructors, function (t, i) {
			var n = i.prototype;
			e.widget(n.namespace + "." + n.widgetName, r, i._proto)
		}), delete a._childConstructors) : i._childConstructors.push(r), e.widget.bridge(t, r), r
	}, e.widget.extend = function (t) {
		for (var i, n, a = s.call(arguments, 1), r = 0, o = a.length; o > r; r++)
			for (i in a[r]) n = a[r][i], a[r].hasOwnProperty(i) && void 0 !== n && (e.isPlainObject(n) ? t[i] = e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], n) : e.widget.extend({}, n) : t[i] = n);
		return t
	}, e.widget.bridge = function (t, i) {
		var n = i.prototype.widgetFullName || t;
		e.fn[t] = function (a) {
			var r = "string" == typeof a,
				o = s.call(arguments, 1),
				h = this;
			return a = !r && o.length ? e.widget.extend.apply(null, [a].concat(o)) : a, r ? this.each(function () {
				var i, s = e.data(this, n);
				return "instance" === a ? (h = s, !1) : s ? e.isFunction(s[a]) && "_" !== a.charAt(0) ? (i = s[a].apply(s, o), i !== s && void 0 !== i ? (h = i && i.jquery ? h.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + a + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + a + "'")
			}) : this.each(function () {
				var t = e.data(this, n);
				t ? (t.option(a || {}), t._init && t._init()) : e.data(this, n, new i(a, this))
			}), h
		}
	}, e.Widget = function () {}, e.Widget._childConstructors = [], e.Widget.prototype = {
		widgetName: "widget",
		widgetEventPrefix: "",
		defaultElement: "<div>",
		options: {
			disabled: !1,
			create: null
		},
		_createWidget: function (t, i) {
			i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = n++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
				remove: function (e) {
					e.target === i && this.destroy()
				}
			}), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
		},
		_getCreateOptions: e.noop,
		_getCreateEventData: e.noop,
		_create: e.noop,
		_init: e.noop,
		destroy: function () {
			this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
		},
		_destroy: e.noop,
		widget: function () {
			return this.element
		},
		option: function (t, i) {
			var n, s, a, r = t;
			if (0 === arguments.length) return e.widget.extend({}, this.options);
			if ("string" == typeof t)
				if (r = {}, n = t.split("."), t = n.shift(), n.length) {
					for (s = r[t] = e.widget.extend({}, this.options[t]), a = 0; a < n.length - 1; a++) s[n[a]] = s[n[a]] || {}, s = s[n[a]];
					if (t = n.pop(), 1 === arguments.length) return void 0 === s[t] ? null : s[t];
					s[t] = i
				} else {
					if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
					r[t] = i
				}
			return this._setOptions(r), this
		},
		_setOptions: function (e) {
			var t;
			for (t in e) this._setOption(t, e[t]);
			return this
		},
		_setOption: function (e, t) {
			return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
		},
		enable: function () {
			return this._setOptions({
				disabled: !1
			})
		},
		disable: function () {
			return this._setOptions({
				disabled: !0
			})
		},
		_on: function (t, i, n) {
			var s, a = this;
			"boolean" != typeof t && (n = i, i = t, t = !1), n ? (i = s = e(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, s = this.widget()), e.each(n, function (n, r) {
				function o() {
					return t || a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? a[r] : r).apply(a, arguments) : void 0
				}
				"string" != typeof r && (o.guid = r.guid = r.guid || o.guid || e.guid++);
				var h = n.match(/^([\w:-]*)\s*(.*)$/),
					d = h[1] + a.eventNamespace,
					c = h[2];
				c ? s.delegate(c, d, o) : i.bind(d, o)
			})
		},
		_off: function (t, i) {
			i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(i).undelegate(i), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
		},
		_delay: function (e, t) {
			function i() {
				return ("string" == typeof e ? n[e] : e).apply(n, arguments)
			}
			var n = this;
			return setTimeout(i, t || 0)
		},
		_hoverable: function (t) {
			this.hoverable = this.hoverable.add(t), this._on(t, {
				mouseenter: function (t) {
					e(t.currentTarget).addClass("ui-state-hover")
				},
				mouseleave: function (t) {
					e(t.currentTarget).removeClass("ui-state-hover")
				}
			})
		},
		_focusable: function (t) {
			this.focusable = this.focusable.add(t), this._on(t, {
				focusin: function (t) {
					e(t.currentTarget).addClass("ui-state-focus")
				},
				focusout: function (t) {
					e(t.currentTarget).removeClass("ui-state-focus")
				}
			})
		},
		_trigger: function (t, i, n) {
			var s, a, r = this.options[t];
			if (n = n || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent)
				for (s in a) s in i || (i[s] = a[s]);
			return this.element.trigger(i, n), !(e.isFunction(r) && r.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
		}
	}, e.each({
		show: "fadeIn",
		hide: "fadeOut"
	}, function (t, i) {
		e.Widget.prototype["_" + t] = function (n, s, a) {
			"string" == typeof s && (s = {
				effect: s
			});
			var r, o = s ? s === !0 || "number" == typeof s ? i : s.effect || i : t;
			s = s || {}, "number" == typeof s && (s = {
				duration: s
			}), r = !e.isEmptyObject(s), s.complete = a, s.delay && n.delay(s.delay), r && e.effects && e.effects.effect[o] ? n[t](s) : o !== t && n[o] ? n[o](s.duration, s.easing, a) : n.queue(function (i) {
				e(this)[t](), a && a.call(n[0]), i()
			})
		}
	});
	e.widget, e.widget("ui.accordion", {
		version: "1.11.2",
		options: {
			active: 0,
			animate: {},
			collapsible: !1,
			event: "click",
			header: "> li > :first-child,> :not(li):even",
			heightStyle: "auto",
			icons: {
				activeHeader: "ui-icon-triangle-1-s",
				header: "ui-icon-triangle-1-e"
			},
			activate: null,
			beforeActivate: null
		},
		hideProps: {
			borderTopWidth: "hide",
			borderBottomWidth: "hide",
			paddingTop: "hide",
			paddingBottom: "hide",
			height: "hide"
		},
		showProps: {
			borderTopWidth: "show",
			borderBottomWidth: "show",
			paddingTop: "show",
			paddingBottom: "show",
			height: "show"
		},
		_create: function () {
			var t = this.options;
			this.prevShow = this.prevHide = e(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), t.collapsible || t.active !== !1 && null != t.active || (t.active = 0), this._processPanels(), t.active < 0 && (t.active += this.headers.length), this._refresh()
		},
		_getCreateEventData: function () {
			return {
				header: this.active,
				panel: this.active.length ? this.active.next() : e()
			}
		},
		_createIcons: function () {
			var t = this.options.icons;
			t && (e("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"))
		},
		_destroyIcons: function () {
			this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
		},
		_destroy: function () {
			var e;
			this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId(), this._destroyIcons(), e = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && e.css("height", "")
		},
		_setOption: function (e, t) {
			return "active" === e ? void this._activate(t) : ("event" === e && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(e, t), "collapsible" !== e || t || this.options.active !== !1 || this._activate(0), "icons" === e && (this._destroyIcons(), t && this._createIcons()), void("disabled" === e && (this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!t))))
		},
		_keydown: function (t) {
			if (!t.altKey && !t.ctrlKey) {
				var i = e.ui.keyCode,
					n = this.headers.length,
					s = this.headers.index(t.target),
					a = !1;
				switch (t.keyCode) {
					case i.RIGHT:
					case i.DOWN:
						a = this.headers[(s + 1) % n];
						break;
					case i.LEFT:
					case i.UP:
						a = this.headers[(s - 1 + n) % n];
						break;
					case i.SPACE:
					case i.ENTER:
						this._eventHandler(t);
						break;
					case i.HOME:
						a = this.headers[0];
						break;
					case i.END:
						a = this.headers[n - 1]
				}
				a && (e(t.target).attr("tabIndex", -1), e(a).attr("tabIndex", 0), a.focus(), t.preventDefault())
			}
		},
		_panelKeyDown: function (t) {
			t.keyCode === e.ui.keyCode.UP && t.ctrlKey && e(t.currentTarget).prev().focus()
		},
		refresh: function () {
			var t = this.options;
			this._processPanels(), t.active === !1 && t.collapsible === !0 || !this.headers.length ? (t.active = !1, this.active = e()) : t.active === !1 ? this._activate(0) : this.active.length && !e.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = e()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
		},
		_processPanels: function () {
			var e = this.headers,
				t = this.panels;
			this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all"), this.panels = this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide(), t && (this._off(e.not(this.headers)), this._off(t.not(this.panels)))
		},
		_refresh: function () {
			var t, i = this.options,
				n = i.heightStyle,
				s = this.element.parent();
			this.active = this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function () {
				var t = e(this),
					i = t.uniqueId().attr("id"),
					n = t.next(),
					s = n.uniqueId().attr("id");
				t.attr("aria-controls", s), n.attr("aria-labelledby", i)
			}).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
				"aria-selected": "false",
				"aria-expanded": "false",
				tabIndex: -1
			}).next().attr({
				"aria-hidden": "true"
			}).hide(), this.active.length ? this.active.attr({
				"aria-selected": "true",
				"aria-expanded": "true",
				tabIndex: 0
			}).next().attr({
				"aria-hidden": "false"
			}) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === n ? (t = s.height(), this.element.siblings(":visible").each(function () {
				var i = e(this),
					n = i.css("position");
				"absolute" !== n && "fixed" !== n && (t -= i.outerHeight(!0))
			}), this.headers.each(function () {
				t -= e(this).outerHeight(!0)
			}), this.headers.next().each(function () {
				e(this).height(Math.max(0, t - e(this).innerHeight() + e(this).height()))
			}).css("overflow", "auto")) : "auto" === n && (t = 0, this.headers.next().each(function () {
				t = Math.max(t, e(this).css("height", "").height())
			}).height(t))
		},
		_activate: function (t) {
			var i = this._findActive(t)[0];
			i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
				target: i,
				currentTarget: i,
				preventDefault: e.noop
			}))
		},
		_findActive: function (t) {
			return "number" == typeof t ? this.headers.eq(t) : e()
		},
		_setupEvents: function (t) {
			var i = {
				keydown: "_keydown"
			};
			t && e.each(t.split(" "), function (e, t) {
				i[t] = "_eventHandler"
			}), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
				keydown: "_panelKeyDown"
			}), this._hoverable(this.headers), this._focusable(this.headers)
		},
		_eventHandler: function (t) {
			var i = this.options,
				n = this.active,
				s = e(t.currentTarget),
				a = s[0] === n[0],
				r = a && i.collapsible,
				o = r ? e() : s.next(),
				h = n.next(),
				d = {
					oldHeader: n,
					oldPanel: h,
					newHeader: r ? e() : s,
					newPanel: o
				};
			t.preventDefault(), a && !i.collapsible || this._trigger("beforeActivate", t, d) === !1 || (i.active = r ? !1 : this.headers.index(s), this.active = a ? e() : s, this._toggle(d), n.removeClass("ui-accordion-header-active ui-state-active"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), a || (s.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), s.next().addClass("ui-accordion-content-active")))
		},
		_toggle: function (t) {
			var i = t.newPanel,
				n = this.prevShow.length ? this.prevShow : t.oldPanel;
			this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = n, this.options.animate ? this._animate(i, n, t) : (n.hide(), i.show(), this._toggleComplete(t)), n.attr({
				"aria-hidden": "true"
			}), n.prev().attr("aria-selected", "false"), i.length && n.length ? n.prev().attr({
				tabIndex: -1,
				"aria-expanded": "false"
			}) : i.length && this.headers.filter(function () {
				return 0 === e(this).attr("tabIndex")
			}).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
				"aria-selected": "true",
				tabIndex: 0,
				"aria-expanded": "true"
			})
		},
		_animate: function (e, t, i) {
			var n, s, a, r = this,
				o = 0,
				h = e.length && (!t.length || e.index() < t.index()),
				d = this.options.animate || {},
				c = h && d.down || d,
				u = function () {
					r._toggleComplete(i)
				};
			return "number" == typeof c && (a = c), "string" == typeof c && (s = c), s = s || c.easing || d.easing, a = a || c.duration || d.duration, t.length ? e.length ? (n = e.show().outerHeight(), t.animate(this.hideProps, {
				duration: a,
				easing: s,
				step: function (e, t) {
					t.now = Math.round(e)
				}
			}), void e.hide().animate(this.showProps, {
				duration: a,
				easing: s,
				complete: u,
				step: function (e, i) {
					i.now = Math.round(e), "height" !== i.prop ? o += i.now : "content" !== r.options.heightStyle && (i.now = Math.round(n - t.outerHeight() - o), o = 0)
				}
			})) : t.animate(this.hideProps, a, s, u) : e.animate(this.showProps, a, s, u)
		},
		_toggleComplete: function (e) {
			var t = e.oldPanel;
			t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), t.length && (t.parent()[0].className = t.parent()[0].className), this._trigger("activate", null, e)
		}
	})
});

// Sharepage on top

! function (e) {
	if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
	else if ("function" == typeof define && define.amd) define([], e);
	else {
		var f;
		"undefined" != typeof window ? f = window : "undefined" != typeof global ? f = global : "undefined" != typeof self && (f = self), f.Share = e()
	}
}(function () {
	var define, module, exports;

	function getStyles(config) {
		return "" + config.selector + "{width:3%;margin-top:3px;-webkit-touch-callout:none;-khtml-user-select:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}" + config.selector + " [class*=entypo-]:before{font-family:entypo,sans-serif}" + config.selector + " label{font-size:17px;cursor:pointer;margin:0;padding:5px 10px;border-radius:5px;background:none;color:#555;-webkit-transition:all .3s ease;transition:all .3s ease}" + config.selector + " label:hover{opacity:.8}" + config.selector + " label span{text-transform:uppercase;font-size:.9em;font-family:Lato,sans-serif;font-weight:700;-webkit-font-smoothing:antialiased;padding-left:6px}" + config.selector + " .social{opacity:0;-webkit-transition:all .4s ease;transition:all .4s ease;margin-left:-15px;visibility:hidden}" + config.selector + " .social.top{-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;margin-top:-50px}" + config.selector + " .social.bottom{-webkit-transform-origin:0 0;-ms-transform-origin:0 0;transform-origin:0 0;margin-top:0px}" + config.selector + " .social.middle{margin-top:-34px}" + config.selector + " .social.middle.right{-webkit-transform-origin:5% 50%;-ms-transform-origin:5% 50%;transform-origin:5% 50%;margin-left:105px}" + config.selector + " .social.middle.left{-webkit-transform-origin:5% 50%;-ms-transform-origin:5% 50%;transform-origin:5% 50%}" + config.selector + " .social.right{margin-left:14px}" + config.selector + " .social.load{-webkit-transition:none!important;transition:none!important}" + config.selector + " .social.networks-1{width:60px}" + config.selector + " .social.networks-1.center," + config.selector + " .social.networks-1.left{margin-left:14px}" + config.selector + " .social.networks-1.middle.left{margin-left:-70px}" + config.selector + " .social.networks-1 ul{width:60px}" + config.selector + " .social.networks-2{width:120px}" + config.selector + " .social.networks-2.center{margin-left:-13px}" + config.selector + " .social.networks-2.left{margin-left:-44px}" + config.selector + " .social.networks-2.middle.left{margin-left:-130px}" + config.selector + " .social.networks-2 ul{width:120px}" + config.selector + " .social.networks-3{width:180px}" + config.selector + " .social.networks-3.center{margin-left:-45px}" + config.selector + " .social.networks-3.left{margin-left:-102px}" + config.selector + " .social.networks-3.middle.left{margin-left:-190px}" + config.selector + " .social.networks-3 ul{width:180px}" + config.selector + " .social.networks-4{width:240px}" + config.selector + " .social.networks-4.center{margin-left:-88px}" + config.selector + " .social.networks-4.left{margin-left:-155px}" + config.selector + " .social.networks-4.middle.left{margin-left:-250px}" + config.selector + " .social.networks-4 ul{width:240px}" + config.selector + " .social.networks-5{width:300px}" + config.selector + " .social.networks-5.center{margin-left:-105px}" + config.selector + " .social.networks-5.left{margin-left:-225px}" + config.selector + " .social.networks-5.middle.left{margin-left:-320px}" + config.selector + " .social.networks-5 ul{width:300px}" + config.selector + " .social.active{opacity:1;-webkit-transition:all .4s ease;transition:all .4s ease;visibility:visible}" + config.selector + " .social.active.top{-webkit-transform:scale(1) translateY(-10px);-ms-transform:scale(1) translateY(-10px);transform:scale(1) translateY(-10px)}" + config.selector + " .social.active.bottom{-webkit-transform:scale(1) translateY(8px);-moz-transform:scale(1) translateY(8px);-ms-transform:scale(1) translateY(8px);transform:scale(1) translateY(8px)}" + config.selector + " .social.active.middle.right{-webkit-transform:scale(1) translateX(10px);-ms-transform:scale(1) translateX(10px);transform:scale(1) translateX(10px)}" + config.selector + " .social.active.middle.left{-webkit-transform:scale(1) translateX(-10px);-ms-transform:scale(1) translateX(-10px);transform:scale(1) translateX(-10px)}" + config.selector + " .social ul{position:relative;left:0;right:0;height:46px;color:#fff;margin:auto;padding:0;list-style:none}" + config.selector + " .social ul li{font-size:16px;cursor:pointer;width:45px;margin:0;padding:5px 0;text-align:center;float:left;display:none;height:22px;position:relative;z-index:2;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;-webkit-transition:all .3s ease;transition:all .3s ease}" + config.selector + " .social ul li:hover{color:rgba(0,0,0,.5)}" + config.selector + " .social li[class*=facebook]{background:#3b5998;display:" + config.networks.facebook.display + "}" + config.selector + " .social li[class*=twitter]{background:#6cdfea;display:" + config.networks.twitter.display + "}" + config.selector + " .social li[class*=gplus]{background:#e34429;display:" + config.networks.google_plus.display + "}" + config.selector + " .social li[class*=pinterest]{background:#c5282f;display:" + config.networks.pinterest.display + "}" + config.selector + " .social li[class*=paper-plane]{background:#42c5b0;display:" + config.networks.email.display + "}"
	};
	var ShareUtils;
	"classList" in document.documentElement || !Object.defineProperty || "undefined" == typeof HTMLElement || Object.defineProperty(HTMLElement.prototype, "classList", {
		get: function () {
			var t, e, o;
			return o = function (t) {
				return function (o) {
					var n, i;
					n = e.className.split(/\s+/), i = n.indexOf(o), t(n, i, o), e.className = n.join(" ")
				}
			}, e = this, t = {
				add: o(function (t, e, o) {
					~e || t.push(o)
				}),
				remove: o(function (t, e) {
					~e && t.splice(e, 1)
				}),
				toggle: o(function (t, e, o) {
					~e ? t.splice(e, 1) : t.push(o)
				}),
				contains: function (t) {
					return !!~e.className.split(/\s+/).indexOf(t)
				},
				item: function (t) {
					return e.className.split(/\s+/)[t] || null
				}
			}, Object.defineProperty(t, "length", {
				get: function () {
					return e.className.split(/\s+/).length
				}
			}), t
		}
	}), String.prototype.to_rfc3986 = function () {
		var t;
		return t = encodeURIComponent(this), t.replace(/[!'()*]/g, function (t) {
			return "%" + t.charCodeAt(0).toString(16)
		})
	}, ShareUtils = function () {
		function t() {}
		return t.prototype.extend = function (t, e, o) {
			var n, i;
			for (i in e) n = void 0 !== t[i], n && "object" == typeof e[i] ? this.extend(t[i], e[i], o) : (o || !n) && (t[i] = e[i])
		}, t.prototype.hide = function (t) {
			return t.style.display = "none"
		}, t.prototype.show = function (t) {
			return t.style.display = ""
		}, t.prototype.has_class = function (t, e) {
			return t.classList.contains(e)
		}, t.prototype.add_class = function (t, e) {
			return t.classList.add(e)
		}, t.prototype.remove_class = function (t, e) {
			return t.classList.remove(e)
		}, t.prototype.is_encoded = function (t) {
			return t = t.to_rfc3986(), decodeURIComponent(t) !== t
		}, t.prototype.encode = function (t) {
			return "undefined" == typeof t || this.is_encoded(t) ? t : t.to_rfc3986()
		}, t.prototype.popup = function (t, e) {
			var o, n, i, r;
			return null == e && (e = {}), n = {
				width: 500,
				height: 350
			}, n.top = screen.height / 2 - n.height / 2, n.left = screen.width / 2 - n.width / 2, i = function () {
				var t;
				t = [];
				for (o in e) r = e[o], t.push("" + o + "=" + this.encode(r));
				return t
			}.call(this).join("&"), i && (i = "?" + i), window.open(t + i, "targetWindow", "toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,left=" + n.left + ",top=" + n.top + ",width=" + n.width + ",height=" + n.height)
		}, t
	}();
	var Share, __hasProp = {}.hasOwnProperty,
		__extends = function (t, e) {
			function o() {
				this.constructor = t
			}
			for (var n in e) __hasProp.call(e, n) && (t[n] = e[n]);
			return o.prototype = e.prototype, t.prototype = new o, t.__super__ = e.prototype, t
		};
	Share = function (t) {
		function e(t, e) {
			return this.element = t, this.el = {
				head: document.getElementsByTagName("head")[0],
				body: document.getElementsByTagName("body")[0]
			}, this.config = {
				enabled_networks: 0,
				protocol: -1 === ["http", "https"].indexOf(window.location.href.split(":")[0]) ? "https://" : "//",
				url: window.location.href,
				caption: null,
				title: this.default_title(),
				image: this.default_image(),
				description: this.default_description(),
				ui: {
					flyout: "top center",
					button_text: "",
					button_font: !0,
					icon_font: !0
				},
				networks: {
					google_plus: {
						enabled: !0,
						url: null
					},
					twitter: {
						enabled: !0,
						url: null,
						description: null
					},
					facebook: {
						enabled: !0,
						load_sdk: !0,
						url: null,
						app_id: null,
						title: null,
						caption: null,
						description: null,
						image: null
					},
					pinterest: {
						enabled: !0,
						url: null,
						image: null,
						description: null
					},
					email: {
						enabled: !0,
						title: null,
						description: null
					}
				}
			}, this.setup(t, e), this
		}
		return __extends(e, t), e.prototype.setup = function (t, e) {
			var o, n, i, r, s;
			for (i = document.querySelectorAll(t), this.extend(this.config, e, !0), this.set_global_configuration(), this.normalize_network_configuration(), this.config.ui.icon_font && this.inject_icons(), this.config.ui.button_font && this.inject_fonts(), this.config.networks.facebook.enabled && this.config.networks.facebook.load_sdk && this.inject_facebook_sdk(), o = r = 0, s = i.length; s > r; o = ++r) n = i[o], this.setup_instance(t, o)
		}, e.prototype.setup_instance = function (t, e) {
			var o, n, i, r, s, c, l, a, p = this;
			for (n = document.querySelectorAll(t)[e], this.hide(n), this.add_class(n, "sharer-" + e), n = document.querySelectorAll(t)[e], this.inject_css(n), this.inject_html(n), this.show(n), i = n.getElementsByTagName("label")[0], o = n.getElementsByClassName("social")[0], s = n.getElementsByTagName("li"), this.add_class(o, "networks-" + this.config.enabled_networks), i.addEventListener("click", function () {
					return p.event_toggle(o)
				}), p = this, a = [], e = c = 0, l = s.length; l > c; e = ++c) r = s[e], a.push(r.addEventListener("click", function () {
				return p.event_network(n, this), p.event_close(o)
			}));
			return a
		}, e.prototype.event_toggle = function (t) {
			return this.has_class(t, "active") ? this.event_close(t) : this.event_open(t)
		}, e.prototype.event_open = function (t) {
			return this.has_class(t, "load") && this.remove_class(t, "load"), this.add_class(t, "active")
		}, e.prototype.event_close = function (t) {
			return this.remove_class(t, "active")
		}, e.prototype.event_network = function (t, e) {
			var o;
			return o = e.getAttribute("data-network"), this.hook("before", o, t), this["network_" + o](), this.hook("after", o, t)
		}, e.prototype.open = function () {
			return this["public"]("open")
		}, e.prototype.close = function () {
			return this["public"]("close")
		}, e.prototype.toggle = function () {
			return this["public"]("toggle")
		}, e.prototype["public"] = function (t) {
			var e, o, n, i, r, s, c;
			for (s = document.querySelectorAll(this.element), c = [], o = i = 0, r = s.length; r > i; o = ++i) n = s[o], e = n.getElementsByClassName("social")[0], c.push(this["event_" + t](e));
			return c
		}, e.prototype.network_facebook = function () {
			return this.config.networks.facebook.load_sdk ? window.FB ? FB.ui({
				method: "feed",
				name: this.config.networks.facebook.title,
				link: this.config.networks.facebook.url,
				picture: this.config.networks.facebook.image,
				caption: this.config.networks.facebook.caption,
				description: this.config.networks.facebook.description
			}) : console.error("The Facebook JS SDK hasn't loaded yet.") : this.popup("https://www.facebook.com/sharer/sharer.php", {
				u: this.config.networks.facebook.url
			})
		}, e.prototype.network_twitter = function () {
			return this.popup("https://twitter.com/intent/tweet", {
				text: this.config.networks.twitter.description,
				url: this.config.networks.twitter.url
			})
		}, e.prototype.network_google_plus = function () {
			return this.popup("https://plus.google.com/share", {
				url: this.config.networks.google_plus.url
			})
		}, e.prototype.network_pinterest = function () {
			return this.popup("https://www.pinterest.com/pin/create/button", {
				url: this.config.networks.pinterest.url,
				media: this.config.networks.pinterest.image,
				description: this.config.networks.pinterest.description
			})
		}, e.prototype.network_email = function () {
			return this.popup("mailto:", {
				subject: this.config.networks.email.title,
				body: this.config.networks.email.description
			})
		}, e.prototype.inject_icons = function () {
			return this.inject_stylesheet("")
		}, e.prototype.inject_fonts = function () {
			return this.inject_stylesheet("https://fonts.googleapis.com/css?family=Lato:900&text=" + this.config.ui.button_text)
		}, e.prototype.inject_stylesheet = function (t) {
			var e;
			return this.el.head.querySelector('link[href="' + t + '"]') ? void 0 : (e = document.createElement("link"), e.setAttribute("rel", "stylesheet"), e.setAttribute("href", t), this.el.head.appendChild(e))
		}, e.prototype.inject_css = function (t) {
			var e, o, n, i;
			return n = "." + t.getAttribute("class").split(" ").join("."), this.el.head.querySelector("meta[name='sharer" + n + "']") ? void 0 : (this.config.selector = n, e = getStyles(this.config), i = document.createElement("style"), i.type = "text/css", i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(document.createTextNode(e)), this.el.head.appendChild(i), delete this.config.selector, o = document.createElement("meta"), o.setAttribute("name", "sharer" + n), this.el.head.appendChild(o))
		}, e.prototype.inject_html = function (t) {
			return t.innerHTML = "<label class='fa fa-share-alt'><span>" + this.config.ui.button_text + "</span></label><div class='social load " + this.config.ui.flyout + "'><ul><li class='entypo-pinterest' data-network='pinterest'></li><li class='entypo-twitter' data-network='twitter'></li><li class='entypo-facebook' data-network='facebook'></li><li class='entypo-gplus' data-network='google_plus'></li><li class='entypo-paper-plane' data-network='email'></li></ul></div>"
		}, e.prototype.inject_facebook_sdk = function () {
			var t, e;
			return window.FB || !this.config.networks.facebook.app_id || this.el.body.querySelector("#fb-root") ? void 0 : (e = document.createElement("script"), e.text = "window.fbAsyncInit=function(){FB.init({appId:'" + this.config.networks.facebook.app_id + "',status:true,xfbml:true})};(function(e,t,n){var r,i=e.getElementsByTagName(t)[0];if(e.getElementById(n)){return}r=e.createElement(t);r.id=n;r.src='" + this.config.protocol + "connect.facebook.net/en_US/all.js';i.parentNode.insertBefore(r,i)})(document,'script','facebook-jssdk')", t = document.createElement("div"), t.id = "fb-root", this.el.body.appendChild(t), this.el.body.appendChild(e))
		}, e.prototype.hook = function (t, e, o) {
			var n, i;
			n = this.config.networks[e][t], "function" == typeof n && (i = n.call(this.config.networks[e], o), void 0 !== i && (i = this.normalize_filter_config_updates(i), this.extend(this.config.networks[e], i, !0), this.normalize_network_configuration()))
		}, e.prototype.default_title = function () {
			var t;
			return (t = document.querySelector('meta[property="og:title"]') || document.querySelector('meta[name="twitter:title"]')) ? t.getAttribute("content") : (t = document.querySelector("title")) ? t.innerText : void 0
		}, e.prototype.default_image = function () {
			var t;
			return (t = document.querySelector('meta[property="og:image"]') || document.querySelector('meta[name="twitter:image"]')) ? t.getAttribute("content") : void 0
		}, e.prototype.default_description = function () {
			var t;
			return (t = document.querySelector('meta[property="og:description"]') || document.querySelector('meta[name="twitter:description"]') || document.querySelector('meta[name="description"]')) ? t.getAttribute("content") : ""
		}, e.prototype.set_global_configuration = function () {
			var t, e, o, n, i, r;
			i = this.config.networks, r = [];
			for (e in i) {
				n = i[e];
				for (o in n) null == this.config.networks[e][o] && (this.config.networks[e][o] = this.config[o]);
				this.config.networks[e].enabled ? (t = "block", this.config.enabled_networks += 1) : t = "none", r.push(this.config.networks[e].display = t)
			}
			return r
		}, e.prototype.normalize_network_configuration = function () {
			return this.config.networks.facebook.app_id || (this.config.networks.facebook.load_sdk = !1), this.is_encoded(this.config.networks.twitter.description) || (this.config.networks.twitter.description = encodeURIComponent(this.config.networks.twitter.description)), "number" == typeof this.config.networks.facebook.app_id ? this.config.networks.facebook.app_id = this.config.networks.facebook.app_id.toString() : void 0
		}, e.prototype.normalize_filter_config_updates = function (t) {
			return this.config.networks.facebook.app_id !== t.app_id && (console.warn("You are unable to change the Facebook app_id after the button has been initialized. Please update your Facebook filters accordingly."), delete t.app_id), this.config.networks.facebook.load_sdk !== t.load_sdk && (console.warn("You are unable to change the Facebook load_sdk option after the button has been initialized. Please update your Facebook filters accordingly."), delete t.app_id), t
		}, e
	}(ShareUtils);
	return Share;
});

/** smooth-scroll v5.3.3, by Chris Ferdinandi | http://github.com/cferdinandi/smooth-scroll | Licensed under MIT: http://gomakethings.com/mit/ */
! function (e, t) {
	"function" == typeof define && define.amd ? define("smoothScroll", t(e)) : "object" == typeof exports ? module.exports = t(e) : e.smoothScroll = t(e)
}(window || this, function (e) {
	"use strict";
	var t, n, o, r = {},
		a = !!document.querySelector && !!e.addEventListener,
		c = {
			speed: 500,
			easing: "easeInOutCubic",
			offset: 0,
			updateURL: !0,
			callbackBefore: function () {},
			callbackAfter: function () {}
		},
		u = function (e, t, n) {
			if ("[object Object]" === Object.prototype.toString.call(e))
				for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(n, e[o], o, e);
			else
				for (var r = 0, a = e.length; a > r; r++) t.call(n, e[r], r, e)
		},
		i = function (e, t) {
			var n = {};
			return u(e, function (t, o) {
				n[o] = e[o]
			}), u(t, function (e, o) {
				n[o] = t[o]
			}), n
		},
		l = function (e, t) {
			for (var n = t.charAt(0); e && e !== document; e = e.parentNode)
				if ("." === n) {
					if (e.classList.contains(t.substr(1))) return e
				} else if ("#" === n) {
				if (e.id === t.substr(1)) return e
			} else if ("[" === n && e.hasAttribute(t.substr(1, t.length - 2))) return e;
			return !1
		},
		s = function (e) {
			return Math.max(e.scrollHeight, e.offsetHeight, e.clientHeight)
		},
		f = function (e) {
			for (var t, n = String(e), o = n.length, r = -1, a = "", c = n.charCodeAt(0); ++r < o;) {
				if (t = n.charCodeAt(r), 0 === t) throw new InvalidCharacterError("Invalid character: the input contains U+0000.");
				a += t >= 1 && 31 >= t || 127 == t || 0 === r && t >= 48 && 57 >= t || 1 === r && t >= 48 && 57 >= t && 45 === c ? "\\" + t.toString(16) + " " : t >= 128 || 45 === t || 95 === t || t >= 48 && 57 >= t || t >= 65 && 90 >= t || t >= 97 && 122 >= t ? n.charAt(r) : "\\" + n.charAt(r)
			}
			return a
		},
		d = function (e, t) {
			var n;
			return "easeInQuad" === e && (n = t * t), "easeOutQuad" === e && (n = t * (2 - t)), "easeInOutQuad" === e && (n = .5 > t ? 2 * t * t : -1 + (4 - 2 * t) * t), "easeInCubic" === e && (n = t * t * t), "easeOutCubic" === e && (n = --t * t * t + 1), "easeInOutCubic" === e && (n = .5 > t ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1), "easeInQuart" === e && (n = t * t * t * t), "easeOutQuart" === e && (n = 1 - --t * t * t * t), "easeInOutQuart" === e && (n = .5 > t ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t), "easeInQuint" === e && (n = t * t * t * t * t), "easeOutQuint" === e && (n = 1 + --t * t * t * t * t), "easeInOutQuint" === e && (n = .5 > t ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t), n || t
		},
		h = function (e, t, n) {
			var o = 0;
			if (e.offsetParent)
				do o += e.offsetTop, e = e.offsetParent; while (e);
			return o = o - t - n, o >= 0 ? o : 0
		},
		m = function () {
			return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight)
		},
		p = function (e) {
			return e && "object" == typeof JSON && "function" == typeof JSON.parse ? JSON.parse(e) : {}
		},
		v = function (t, n) {
			history.pushState && (n || "true" === n) && history.pushState(null, null, [e.location.protocol, "//", e.location.host, e.location.pathname, e.location.search, t].join(""))
		};
	r.animateScroll = function (t, n, r) {
		var a = i(a || c, r || {}),
			u = p(t ? t.getAttribute("data-options") : null);
		a = i(a, u), n = "#" + f(n.substr(1));
		var l = "#" === n ? document.documentElement : document.querySelector(n),
			g = e.pageYOffset;
		o || (o = document.querySelector("[data-scroll-header]"));
		var b, O, y, S = null === o ? 0 : s(o) + o.offsetTop,
			I = h(l, S, parseInt(a.offset, 10)),
			H = I - g,
			E = m(),
			A = 0;
		v(n, a.updateURL);
		var L = function (o, r, c) {
				var u = e.pageYOffset;
				(o == r || u == r || e.innerHeight + u >= E) && (clearInterval(c), l.focus(), a.callbackAfter(t, n))
			},
			Q = function () {
				A += 16, O = A / parseInt(a.speed, 10), O = O > 1 ? 1 : O, y = g + H * d(a.easing, O), e.scrollTo(0, Math.floor(y)), L(y, I, b)
			},
			C = function () {
				a.callbackBefore(t, n), b = setInterval(Q, 16)
			};
		0 === e.pageYOffset && e.scrollTo(20, 0), C()
	};
	var g = function (e) {
			var n = l(e.target, "[data-scroll]");
			n && "a" === n.tagName.toLowerCase() && (e.preventDefault(), r.animateScroll(n, n.hash, t))
		},
		b = function () {
			n || (n = setTimeout(function () {
				n = null, headerHeight = null === o ? 0 : s(o) + o.offsetTop
			}, 66))
		};
	return r.destroy = function () {
		t && (document.removeEventListener("click", g, !1), e.removeEventListener("resize", b, !1), t = null, n = null, o = null)
	}, r.init = function (n) {
		a && (r.destroy(), t = i(c, n || {}), o = document.querySelector("[data-scroll-header]"), document.addEventListener("click", g, !1), o && e.addEventListener("resize", b, !1))
	}, r
});

/*! Magnific Popup - v0.9.9 - 2013-11-15
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2013 Dmitry Semenov; */
(function (e) {
	var t, n, i, o, r, a, s, l = "Close",
		c = "BeforeClose",
		d = "AfterClose",
		u = "BeforeAppend",
		p = "MarkupParse",
		f = "Open",
		m = "Change",
		g = "mfp",
		v = "." + g,
		h = "mfp-ready",
		C = "mfp-removing",
		y = "mfp-prevent-close",
		w = function () {},
		b = !!window.jQuery,
		I = e(window),
		x = function (e, n) {
			t.ev.on(g + e + v, n)
		},
		k = function (t, n, i, o) {
			var r = document.createElement("div");
			return r.className = "mfp-" + t, i && (r.innerHTML = i), o ? n && n.appendChild(r) : (r = e(r), n && r.appendTo(n)), r
		},
		T = function (n, i) {
			t.ev.triggerHandler(g + n, i), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(i) ? i : [i]))
		},
		E = function (n) {
			return n === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = n), t.currTemplate.closeBtn
		},
		_ = function () {
			e.magnificPopup.instance || (t = new w, t.init(), e.magnificPopup.instance = t)
		},
		S = function () {
			var e = document.createElement("p").style,
				t = ["ms", "O", "Moz", "Webkit"];
			if (void 0 !== e.transition) return !0;
			for (; t.length;)
				if (t.pop() + "Transition" in e) return !0;
			return !1
		};
	w.prototype = {
		constructor: w,
		init: function () {
			var n = navigator.appVersion;
			t.isIE7 = -1 !== n.indexOf("MSIE 7."), t.isIE8 = -1 !== n.indexOf("MSIE 8."), t.isLowIE = t.isIE7 || t.isIE8, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = S(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), i = e(document.body), o = e(document), t.popupsCache = {}
		},
		open: function (n) {
			var i;
			if (n.isObj === !1) {
				t.items = n.items.toArray(), t.index = 0;
				var r, s = n.items;
				for (i = 0; s.length > i; i++)
					if (r = s[i], r.parsed && (r = r.el[0]), r === n.el[0]) {
						t.index = i;
						break
					}
			} else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0;
			if (t.isOpen) return t.updateItemHTML(), void 0;
			t.types = [], a = "", t.ev = n.mainEl && n.mainEl.length ? n.mainEl.eq(0) : o, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = k("bg").on("click" + v, function () {
				t.close()
			}), t.wrap = k("wrap").attr("tabindex", -1).on("click" + v, function (e) {
				t._checkIfClose(e.target) && t.close()
			}), t.container = k("container", t.wrap)), t.contentContainer = k("content"), t.st.preloader && (t.preloader = k("preloader", t.container, t.st.tLoading));
			var l = e.magnificPopup.modules;
			for (i = 0; l.length > i; i++) {
				var c = l[i];
				c = c.charAt(0).toUpperCase() + c.slice(1), t["init" + c].call(t)
			}
			T("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (x(p, function (e, t, n, i) {
				n.close_replaceWith = E(i.type)
			}), a += " mfp-close-btn-in") : t.wrap.append(E())), t.st.alignTop && (a += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
				overflow: t.st.overflowY,
				overflowX: "hidden",
				overflowY: t.st.overflowY
			}) : t.wrap.css({
				top: I.scrollTop(),
				position: "absolute"
			}), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
				height: o.height(),
				position: "absolute"
			}), t.st.enableEscapeKey && o.on("keyup" + v, function (e) {
				27 === e.keyCode && t.close()
			}), I.on("resize" + v, function () {
				t.updateSize()
			}), t.st.closeOnContentClick || (a += " mfp-auto-cursor"), a && t.wrap.addClass(a);
			var d = t.wH = I.height(),
				u = {};
			if (t.fixedContentPos && t._hasScrollBar(d)) {
				var m = t._getScrollbarSize();
				m && (u.marginRight = m)
			}
			t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : u.overflow = "hidden");
			var g = t.st.mainClass;
			return t.isIE7 && (g += " mfp-ie7"), g && t._addClassToMFP(g), t.updateItemHTML(), T("BuildControls"), e("html").css(u), t.bgOverlay.add(t.wrap).prependTo(document.body), t._lastFocusedEl = document.activeElement, setTimeout(function () {
				t.content ? (t._addClassToMFP(h), t._setFocus()) : t.bgOverlay.addClass(h), o.on("focusin" + v, t._onFocusIn)
			}, 16), t.isOpen = !0, t.updateSize(d), T(f), n
		},
		close: function () {
			t.isOpen && (T(c), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(C), setTimeout(function () {
				t._close()
			}, t.st.removalDelay)) : t._close())
		},
		_close: function () {
			T(l);
			var n = C + " " + h + " ";
			if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
				var i = {
					marginRight: ""
				};
				t.isIE7 ? e("body, html").css("overflow", "") : i.overflow = "", e("html").css(i)
			}
			o.off("keyup" + v + " focusin" + v), t.ev.off(v), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, T(d)
		},
		updateSize: function (e) {
			if (t.isIOS) {
				var n = document.documentElement.clientWidth / window.innerWidth,
					i = window.innerHeight * n;
				t.wrap.css("height", i), t.wH = i
			} else t.wH = e || I.height();
			t.fixedContentPos || t.wrap.css("height", t.wH), T("Resize")
		},
		updateItemHTML: function () {
			var n = t.items[t.index];
			t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));
			var i = n.type;
			if (T("BeforeChange", [t.currItem ? t.currItem.type : "", i]), t.currItem = n, !t.currTemplate[i]) {
				var o = t.st[i] ? t.st[i].markup : !1;
				T("FirstMarkupParse", o), t.currTemplate[i] = o ? e(o) : !0
			}
			r && r !== n.type && t.container.removeClass("mfp-" + r + "-holder");
			var a = t["get" + i.charAt(0).toUpperCase() + i.slice(1)](n, t.currTemplate[i]);
			t.appendContent(a, i), n.preloaded = !0, T(m, n), r = n.type, t.container.prepend(t.contentContainer), T("AfterChange")
		},
		appendContent: function (e, n) {
			t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[n] === !0 ? t.content.find(".mfp-close").length || t.content.append(E()) : t.content = e : t.content = "", T(u), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content)
		},
		parseEl: function (n) {
			var i = t.items[n],
				o = i.type;
			if (i = i.tagName ? {
					el: e(i)
				} : {
					data: i,
					src: i.src
				}, i.el) {
				for (var r = t.types, a = 0; r.length > a; a++)
					if (i.el.hasClass("mfp-" + r[a])) {
						o = r[a];
						break
					}
				i.src = i.el.attr("data-mfp-src"), i.src || (i.src = i.el.attr("href"))
			}
			return i.type = o || t.st.type || "inline", i.index = n, i.parsed = !0, t.items[n] = i, T("ElementParse", i), t.items[n]
		},
		addGroup: function (e, n) {
			var i = function (i) {
				i.mfpEl = this, t._openClick(i, e, n)
			};
			n || (n = {});
			var o = "click.magnificPopup";
			n.mainEl = e, n.items ? (n.isObj = !0, e.off(o).on(o, i)) : (n.isObj = !1, n.delegate ? e.off(o).on(o, n.delegate, i) : (n.items = e, e.off(o).on(o, i)))
		},
		_openClick: function (n, i, o) {
			var r = void 0 !== o.midClick ? o.midClick : e.magnificPopup.defaults.midClick;
			if (r || 2 !== n.which && !n.ctrlKey && !n.metaKey) {
				var a = void 0 !== o.disableOn ? o.disableOn : e.magnificPopup.defaults.disableOn;
				if (a)
					if (e.isFunction(a)) {
						if (!a.call(t)) return !0
					} else if (a > I.width()) return !0;
				n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), o.el = e(n.mfpEl), o.delegate && (o.items = i.find(o.delegate)), t.open(o)
			}
		},
		updateStatus: function (e, i) {
			if (t.preloader) {
				n !== e && t.container.removeClass("mfp-s-" + n), i || "loading" !== e || (i = t.st.tLoading);
				var o = {
					status: e,
					text: i
				};
				T("UpdateStatus", o), e = o.status, i = o.text, t.preloader.html(i), t.preloader.find("a").on("click", function (e) {
					e.stopImmediatePropagation()
				}), t.container.addClass("mfp-s-" + e), n = e
			}
		},
		_checkIfClose: function (n) {
			if (!e(n).hasClass(y)) {
				var i = t.st.closeOnContentClick,
					o = t.st.closeOnBgClick;
				if (i && o) return !0;
				if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;
				if (n === t.content[0] || e.contains(t.content[0], n)) {
					if (i) return !0
				} else if (o && e.contains(document, n)) return !0;
				return !1
			}
		},
		_addClassToMFP: function (e) {
			t.bgOverlay.addClass(e), t.wrap.addClass(e)
		},
		_removeClassFromMFP: function (e) {
			this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
		},
		_hasScrollBar: function (e) {
			return (t.isIE7 ? o.height() : document.body.scrollHeight) > (e || I.height())
		},
		_setFocus: function () {
			(t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
		},
		_onFocusIn: function (n) {
			return n.target === t.wrap[0] || e.contains(t.wrap[0], n.target) ? void 0 : (t._setFocus(), !1)
		},
		_parseMarkup: function (t, n, i) {
			var o;
			i.data && (n = e.extend(i.data, n)), T(p, [t, n, i]), e.each(n, function (e, n) {
				if (void 0 === n || n === !1) return !0;
				if (o = e.split("_"), o.length > 1) {
					var i = t.find(v + "-" + o[0]);
					if (i.length > 0) {
						var r = o[1];
						"replaceWith" === r ? i[0] !== n[0] && i.replaceWith(n) : "img" === r ? i.is("img") ? i.attr("src", n) : i.replaceWith('<img src="' + n + '" class="' + i.attr("class") + '" />') : i.attr(o[1], n)
					}
				} else t.find(v + "-" + e).html(n)
			})
		},
		_getScrollbarSize: function () {
			if (void 0 === t.scrollbarSize) {
				var e = document.createElement("div");
				e.id = "mfp-sbm", e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
			}
			return t.scrollbarSize
		}
	}, e.magnificPopup = {
		instance: null,
		proto: w.prototype,
		modules: [],
		open: function (t, n) {
			return _(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = n || 0, this.instance.open(t)
		},
		close: function () {
			return e.magnificPopup.instance && e.magnificPopup.instance.close()
		},
		registerModule: function (t, n) {
			n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t)
		},
		defaults: {
			disableOn: 0,
			key: null,
			midClick: !1,
			mainClass: "",
			preloader: !0,
			focus: "",
			closeOnContentClick: !1,
			closeOnBgClick: !0,
			closeBtnInside: !0,
			showCloseBtn: !0,
			enableEscapeKey: !0,
			modal: !1,
			alignTop: !1,
			removalDelay: 0,
			fixedContentPos: "auto",
			fixedBgPos: "auto",
			overflowY: "auto",
			closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>',
			tClose: "Close (Esc)",
			tLoading: "Loading..."
		}
	}, e.fn.magnificPopup = function (n) {
		_();
		var i = e(this);
		if ("string" == typeof n)
			if ("open" === n) {
				var o, r = b ? i.data("magnificPopup") : i[0].magnificPopup,
					a = parseInt(arguments[1], 10) || 0;
				r.items ? o = r.items[a] : (o = i, r.delegate && (o = o.find(r.delegate)), o = o.eq(a)), t._openClick({
					mfpEl: o
				}, i, r)
			} else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
		else n = e.extend(!0, {}, n), b ? i.data("magnificPopup", n) : i[0].magnificPopup = n, t.addGroup(i, n);
		return i
	};
	var P, O, z, M = "inline",
		B = function () {
			z && (O.after(z.addClass(P)).detach(), z = null)
		};
	e.magnificPopup.registerModule(M, {
		options: {
			hiddenClass: "hide",
			markup: "",
			tNotFound: "Content not found"
		},
		proto: {
			initInline: function () {
				t.types.push(M), x(l + "." + M, function () {
					B()
				})
			},
			getInline: function (n, i) {
				if (B(), n.src) {
					var o = t.st.inline,
						r = e(n.src);
					if (r.length) {
						var a = r[0].parentNode;
						a && a.tagName && (O || (P = o.hiddenClass, O = k(P), P = "mfp-" + P), z = r.after(O).detach().removeClass(P)), t.updateStatus("ready")
					} else t.updateStatus("error", o.tNotFound), r = e("<div>");
					return n.inlineElement = r, r
				}
				return t.updateStatus("ready"), t._parseMarkup(i, {}, n), i
			}
		}
	});
	var F, H = "ajax",
		L = function () {
			F && i.removeClass(F)
		},
		A = function () {
			L(), t.req && t.req.abort()
		};
	e.magnificPopup.registerModule(H, {
		options: {
			settings: null,
			cursor: "mfp-ajax-cur",
			tError: '<a href="%url%">The content</a> could not be loaded.'
		},
		proto: {
			initAjax: function () {
				t.types.push(H), F = t.st.ajax.cursor, x(l + "." + H, A), x("BeforeChange." + H, A)
			},
			getAjax: function (n) {
				F && i.addClass(F), t.updateStatus("loading");
				var o = e.extend({
					url: n.src,
					success: function (i, o, r) {
						var a = {
							data: i,
							xhr: r
						};
						T("ParseAjax", a), t.appendContent(e(a.data), H), n.finished = !0, L(), t._setFocus(), setTimeout(function () {
							t.wrap.addClass(h)
						}, 16), t.updateStatus("ready"), T("AjaxContentAdded")
					},
					error: function () {
						L(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src))
					}
				}, t.st.ajax.settings);
				return t.req = e.ajax(o), ""
			}
		}
	});
	var j, N = function (n) {
		if (n.data && void 0 !== n.data.title) return n.data.title;
		var i = t.st.image.titleSrc;
		if (i) {
			if (e.isFunction(i)) return i.call(t, n);
			if (n.el) return n.el.attr(i) || ""
		}
		return ""
	};
	e.magnificPopup.registerModule("image", {
		options: {
			markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
			cursor: "mfp-zoom-out-cur",
			titleSrc: "title",
			verticalFit: !0,
			tError: '<a href="%url%">The image</a> could not be loaded.'
		},
		proto: {
			initImage: function () {
				var e = t.st.image,
					n = ".image";
				t.types.push("image"), x(f + n, function () {
					"image" === t.currItem.type && e.cursor && i.addClass(e.cursor)
				}), x(l + n, function () {
					e.cursor && i.removeClass(e.cursor), I.off("resize" + v)
				}), x("Resize" + n, t.resizeImage), t.isLowIE && x("AfterChange", t.resizeImage)
			},
			resizeImage: function () {
				var e = t.currItem;
				if (e && e.img && t.st.image.verticalFit) {
					var n = 0;
					t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n)
				}
			},
			_onImageHasSize: function (e) {
				e.img && (e.hasSize = !0, j && clearInterval(j), e.isCheckingImgSize = !1, T("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
			},
			findImageSize: function (e) {
				var n = 0,
					i = e.img[0],
					o = function (r) {
						j && clearInterval(j), j = setInterval(function () {
							return i.naturalWidth > 0 ? (t._onImageHasSize(e), void 0) : (n > 200 && clearInterval(j), n++, 3 === n ? o(10) : 40 === n ? o(50) : 100 === n && o(500), void 0)
						}, r)
					};
				o(1)
			},
			getImage: function (n, i) {
				var o = 0,
					r = function () {
						n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, T("ImageLoadComplete")) : (o++, 200 > o ? setTimeout(r, 100) : a()))
					},
					a = function () {
						n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", s.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0)
					},
					s = t.st.image,
					l = i.find(".mfp-img");
				if (l.length) {
					var c = document.createElement("img");
					c.className = "mfp-img", n.img = e(c).on("load.mfploader", r).on("error.mfploader", a), c.src = n.src, l.is("img") && (n.img = n.img.clone()), n.img[0].naturalWidth > 0 && (n.hasSize = !0)
				}
				return t._parseMarkup(i, {
					title: N(n),
					img_replaceWith: n.img
				}, n), t.resizeImage(), n.hasSize ? (j && clearInterval(j), n.loadError ? (i.addClass("mfp-loading"), t.updateStatus("error", s.tError.replace("%url%", n.src))) : (i.removeClass("mfp-loading"), t.updateStatus("ready")), i) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, i.addClass("mfp-loading"), t.findImageSize(n)), i)
			}
		}
	});
	var W, R = function () {
		return void 0 === W && (W = void 0 !== document.createElement("p").style.MozTransform), W
	};
	e.magnificPopup.registerModule("zoom", {
		options: {
			enabled: !1,
			easing: "ease-in-out",
			duration: 300,
			opener: function (e) {
				return e.is("img") ? e : e.find("img")
			}
		},
		proto: {
			initZoom: function () {
				var e, n = t.st.zoom,
					i = ".zoom";
				if (n.enabled && t.supportsTransition) {
					var o, r, a = n.duration,
						s = function (e) {
							var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
								i = "all " + n.duration / 1e3 + "s " + n.easing,
								o = {
									position: "fixed",
									zIndex: 9999,
									left: 0,
									top: 0,
									"-webkit-backface-visibility": "hidden"
								},
								r = "transition";
							return o["-webkit-" + r] = o["-moz-" + r] = o["-o-" + r] = o[r] = i, t.css(o), t
						},
						d = function () {
							t.content.css("visibility", "visible")
						};
					x("BuildControls" + i, function () {
						if (t._allowZoom()) {
							if (clearTimeout(o), t.content.css("visibility", "hidden"), e = t._getItemToZoom(), !e) return d(), void 0;
							r = s(e), r.css(t._getOffset()), t.wrap.append(r), o = setTimeout(function () {
								r.css(t._getOffset(!0)), o = setTimeout(function () {
									d(), setTimeout(function () {
										r.remove(), e = r = null, T("ZoomAnimationEnded")
									}, 16)
								}, a)
							}, 16)
						}
					}), x(c + i, function () {
						if (t._allowZoom()) {
							if (clearTimeout(o), t.st.removalDelay = a, !e) {
								if (e = t._getItemToZoom(), !e) return;
								r = s(e)
							}
							r.css(t._getOffset(!0)), t.wrap.append(r), t.content.css("visibility", "hidden"), setTimeout(function () {
								r.css(t._getOffset())
							}, 16)
						}
					}), x(l + i, function () {
						t._allowZoom() && (d(), r && r.remove(), e = null)
					})
				}
			},
			_allowZoom: function () {
				return "image" === t.currItem.type
			},
			_getItemToZoom: function () {
				return t.currItem.hasSize ? t.currItem.img : !1
			},
			_getOffset: function (n) {
				var i;
				i = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
				var o = i.offset(),
					r = parseInt(i.css("padding-top"), 10),
					a = parseInt(i.css("padding-bottom"), 10);
				o.top -= e(window).scrollTop() - r;
				var s = {
					width: i.width(),
					height: (b ? i.innerHeight() : i[0].offsetHeight) - a - r
				};
				return R() ? s["-moz-transform"] = s.transform = "translate(" + o.left + "px," + o.top + "px)" : (s.left = o.left, s.top = o.top), s
			}
		}
	});
	var Z = "iframe",
		q = "//about:blank",
		D = function (e) {
			if (t.currTemplate[Z]) {
				var n = t.currTemplate[Z].find("iframe");
				n.length && (e || (n[0].src = q), t.isIE8 && n.css("display", e ? "block" : "none"))
			}
		};
	e.magnificPopup.registerModule(Z, {
		options: {
			markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
			srcAction: "iframe_src",
			patterns: {
				youtube: {
					index: "youtube.com",
					id: "v=",
					src: "//www.youtube.com/embed/%id%?autoplay=1"
				},
				vimeo: {
					index: "vimeo.com/",
					id: "/",
					src: "//player.vimeo.com/video/%id%?autoplay=1"
				},
				gmaps: {
					index: "//maps.google.",
					src: "%id%&output=embed"
				}
			}
		},
		proto: {
			initIframe: function () {
				t.types.push(Z), x("BeforeChange", function (e, t, n) {
					t !== n && (t === Z ? D() : n === Z && D(!0))
				}), x(l + "." + Z, function () {
					D()
				})
			},
			getIframe: function (n, i) {
				var o = n.src,
					r = t.st.iframe;
				e.each(r.patterns, function () {
					return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0
				});
				var a = {};
				return r.srcAction && (a[r.srcAction] = o), t._parseMarkup(i, a, n), t.updateStatus("ready"), i
			}
		}
	});
	var K = function (e) {
			var n = t.items.length;
			return e > n - 1 ? e - n : 0 > e ? n + e : e
		},
		Y = function (e, t, n) {
			return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, n)
		};
	e.magnificPopup.registerModule("gallery", {
		options: {
			enabled: !1,
			arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
			preload: [0, 2],
			navigateByImgClick: !0,
			arrows: !0,
			tPrev: "Previous (Left arrow key)",
			tNext: "Next (Right arrow key)",
			tCounter: "%curr% of %total%"
		},
		proto: {
			initGallery: function () {
				var n = t.st.gallery,
					i = ".mfp-gallery",
					r = Boolean(e.fn.mfpFastClick);
				return t.direction = !0, n && n.enabled ? (a += " mfp-gallery", x(f + i, function () {
					n.navigateByImgClick && t.wrap.on("click" + i, ".mfp-img", function () {
						return t.items.length > 1 ? (t.next(), !1) : void 0
					}), o.on("keydown" + i, function (e) {
						37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
					})
				}), x("UpdateStatus" + i, function (e, n) {
					n.text && (n.text = Y(n.text, t.currItem.index, t.items.length))
				}), x(p + i, function (e, i, o, r) {
					var a = t.items.length;
					o.counter = a > 1 ? Y(n.tCounter, r.index, a) : ""
				}), x("BuildControls" + i, function () {
					if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
						var i = n.arrowMarkup,
							o = t.arrowLeft = e(i.replace(/%title%/gi, n.tPrev).replace(/%dir%/gi, "left")).addClass(y),
							a = t.arrowRight = e(i.replace(/%title%/gi, n.tNext).replace(/%dir%/gi, "right")).addClass(y),
							s = r ? "mfpFastClick" : "click";
						o[s](function () {
							t.prev()
						}), a[s](function () {
							t.next()
						}), t.isIE7 && (k("b", o[0], !1, !0), k("a", o[0], !1, !0), k("b", a[0], !1, !0), k("a", a[0], !1, !0)), t.container.append(o.add(a))
					}
				}), x(m + i, function () {
					t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function () {
						t.preloadNearbyImages(), t._preloadTimeout = null
					}, 16)
				}), x(l + i, function () {
					o.off(i), t.wrap.off("click" + i), t.arrowLeft && r && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(), t.arrowRight = t.arrowLeft = null
				}), void 0) : !1
			},
			next: function () {
				t.direction = !0, t.index = K(t.index + 1), t.updateItemHTML()
			},
			prev: function () {
				t.direction = !1, t.index = K(t.index - 1), t.updateItemHTML()
			},
			goTo: function (e) {
				t.direction = e >= t.index, t.index = e, t.updateItemHTML()
			},
			preloadNearbyImages: function () {
				var e, n = t.st.gallery.preload,
					i = Math.min(n[0], t.items.length),
					o = Math.min(n[1], t.items.length);
				for (e = 1;
					(t.direction ? o : i) >= e; e++) t._preloadItem(t.index + e);
				for (e = 1;
					(t.direction ? i : o) >= e; e++) t._preloadItem(t.index - e)
			},
			_preloadItem: function (n) {
				if (n = K(n), !t.items[n].preloaded) {
					var i = t.items[n];
					i.parsed || (i = t.parseEl(n)), T("LazyLoad", i), "image" === i.type && (i.img = e('<img class="mfp-img" />').on("load.mfploader", function () {
						i.hasSize = !0
					}).on("error.mfploader", function () {
						i.hasSize = !0, i.loadError = !0, T("LazyLoadError", i)
					}).attr("src", i.src)), i.preloaded = !0
				}
			}
		}
	});
	var U = "retina";
	e.magnificPopup.registerModule(U, {
			options: {
				replaceSrc: function (e) {
					return e.src.replace(/\.\w+$/, function (e) {
						return "@2x" + e
					})
				},
				ratio: 1
			},
			proto: {
				initRetina: function () {
					if (window.devicePixelRatio > 1) {
						var e = t.st.retina,
							n = e.ratio;
						n = isNaN(n) ? n() : n, n > 1 && (x("ImageHasSize." + U, function (e, t) {
							t.img.css({
								"max-width": t.img[0].naturalWidth / n,
								width: "100%"
							})
						}), x("ElementParse." + U, function (t, i) {
							i.src = e.replaceSrc(i, n)
						}))
					}
				}
			}
		}),
		function () {
			var t = 1e3,
				n = "ontouchstart" in window,
				i = function () {
					I.off("touchmove" + r + " touchend" + r)
				},
				o = "mfpFastClick",
				r = "." + o;
			e.fn.mfpFastClick = function (o) {
				return e(this).each(function () {
					var a, s = e(this);
					if (n) {
						var l, c, d, u, p, f;
						s.on("touchstart" + r, function (e) {
							u = !1, f = 1, p = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0], c = p.clientX, d = p.clientY, I.on("touchmove" + r, function (e) {
								p = e.originalEvent ? e.originalEvent.touches : e.touches, f = p.length, p = p[0], (Math.abs(p.clientX - c) > 10 || Math.abs(p.clientY - d) > 10) && (u = !0, i())
							}).on("touchend" + r, function (e) {
								i(), u || f > 1 || (a = !0, e.preventDefault(), clearTimeout(l), l = setTimeout(function () {
									a = !1
								}, t), o())
							})
						})
					}
					s.on("click" + r, function () {
						a || o()
					})
				})
			}, e.fn.destroyMfpFastClick = function () {
				e(this).off("touchstart" + r + " click" + r), n && I.off("touchmove" + r + " touchend" + r)
			}
		}(), _()
})(window.jQuery || window.Zepto);


/*  
 *  jQuery dotdotdot 1.6.10
 *  
 *  Copyright (c) 2013 Fred Heusschen
 *  www.frebsite.nl
 *
 *  Plugin website:
 *  dotdotdot.frebsite.nl
 *
 *  Dual licensed under the MIT and GPL licenses.
 *  http://en.wikipedia.org/wiki/MIT_License
 *  http://en.wikipedia.org/wiki/GNU_General_Public_License
 */
//!function(t,e){function n(t,e,n){var r=t.children(),o=!1;t.empty();for(var i=0,d=r.length;d>i;i++){var l=r.eq(i);if(t.append(l),n&&t.append(n),a(t,e)){l.remove(),o=!0;break}n&&n.detach()}return o}function r(e,n,i,d,l){var s=!1,c="table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style",u="script";return e.contents().detach().each(function(){var h=this,f=t(h);if("undefined"==typeof h||3==h.nodeType&&0==t.trim(h.data).length)return!0;if(f.is(u))e.append(f);else{if(s)return!0;e.append(f),l&&e[e.is(c)?"after":"append"](l),a(i,d)&&(s=3==h.nodeType?o(f,n,i,d,l):r(f,n,i,d,l),s||(f.detach(),s=!0)),s||l&&l.detach()}}),s}function o(e,n,r,o,d){var c=e[0];if(!c)return!1;var h=s(c),f=-1!==h.indexOf(" ")?" ":"ã€€",p="letter"==o.wrap?"":f,g=h.split(p),v=-1,w=-1,b=0,y=g.length-1;for(o.fallbackToLetter&&0==b&&0==y&&(p="",g=h.split(p),y=g.length-1);y>=b&&(0!=b||0!=y);){var m=Math.floor((b+y)/2);if(m==w)break;w=m,l(c,g.slice(0,w+1).join(p)+o.ellipsis),a(r,o)?(y=w,o.fallbackToLetter&&0==b&&0==y&&(p="",g=g[0].split(p),v=-1,w=-1,b=0,y=g.length-1)):(v=w,b=w)}if(-1==v||1==g.length&&0==g[0].length){var x=e.parent();e.detach();var T=d&&d.closest(x).length?d.length:0;x.contents().length>T?c=u(x.contents().eq(-1-T),n):(c=u(x,n,!0),T||x.detach()),c&&(h=i(s(c),o),l(c,h),T&&d&&t(c).parent().append(d))}else h=i(g.slice(0,v+1).join(p),o),l(c,h);return!0}function a(t,e){return t.innerHeight()>e.maxHeight}function i(e,n){for(;t.inArray(e.slice(-1),n.lastCharacter.remove)>-1;)e=e.slice(0,-1);return t.inArray(e.slice(-1),n.lastCharacter.noEllipsis)<0&&(e+=n.ellipsis),e}function d(t){return{width:t.innerWidth(),height:t.innerHeight()}}function l(t,e){t.innerText?t.innerText=e:t.nodeValue?t.nodeValue=e:t.textContent&&(t.textContent=e)}function s(t){return t.innerText?t.innerText:t.nodeValue?t.nodeValue:t.textContent?t.textContent:""}function c(t){do t=t.previousSibling;while(t&&1!==t.nodeType&&3!==t.nodeType);return t}function u(e,n,r){var o,a=e&&e[0];if(a){if(!r){if(3===a.nodeType)return a;if(t.trim(e.text()))return u(e.contents().last(),n)}for(o=c(a);!o;){if(e=e.parent(),e.is(n)||!e.length)return!1;o=c(e[0])}if(o)return u(t(o),n)}return!1}function h(e,n){return e?"string"==typeof e?(e=t(e,n),e.length?e:!1):e.jquery?e:!1:!1}function f(t){for(var e=t.innerHeight(),n=["paddingTop","paddingBottom"],r=0,o=n.length;o>r;r++){var a=parseInt(t.css(n[r]),10);isNaN(a)&&(a=0),e-=a}return e}if(!t.fn.dotdotdot){t.fn.dotdotdot=function(e){if(0==this.length)return t.fn.dotdotdot.debug('No element found for "'+this.selector+'".'),this;if(this.length>1)return this.each(function(){t(this).dotdotdot(e)});var o=this;o.data("dotdotdot")&&o.trigger("destroy.dot"),o.data("dotdotdot-style",o.attr("style")||""),o.css("word-wrap","break-word"),"nowrap"===o.css("white-space")&&o.css("white-space","normal"),o.bind_events=function(){return o.bind("update.dot",function(e,d){e.preventDefault(),e.stopPropagation(),l.maxHeight="number"==typeof l.height?l.height:f(o),l.maxHeight+=l.tolerance,"undefined"!=typeof d&&(("string"==typeof d||d instanceof HTMLElement)&&(d=t("<div />").append(d).contents()),d instanceof t&&(i=d)),g=o.wrapInner('<div class="dotdotdot" />').children(),g.contents().detach().end().append(i.clone(!0)).find("br").replaceWith("  <br />  ").end().css({height:"auto",width:"auto",border:"none",padding:0,margin:0});var c=!1,u=!1;return s.afterElement&&(c=s.afterElement.clone(!0),c.show(),s.afterElement.detach()),a(g,l)&&(u="children"==l.wrap?n(g,l,c):r(g,o,g,l,c)),g.replaceWith(g.contents()),g=null,t.isFunction(l.callback)&&l.callback.call(o[0],u,i),s.isTruncated=u,u}).bind("isTruncated.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(o[0],s.isTruncated),s.isTruncated}).bind("originalContent.dot",function(t,e){return t.preventDefault(),t.stopPropagation(),"function"==typeof e&&e.call(o[0],i),i}).bind("destroy.dot",function(t){t.preventDefault(),t.stopPropagation(),o.unwatch().unbind_events().contents().detach().end().append(i).attr("style",o.data("dotdotdot-style")||"").data("dotdotdot",!1)}),o},o.unbind_events=function(){return o.unbind(".dot"),o},o.watch=function(){if(o.unwatch(),"window"==l.watch){var e=t(window),n=e.width(),r=e.height();e.bind("resize.dot"+s.dotId,function(){n==e.width()&&r==e.height()&&l.windowResizeFix||(n=e.width(),r=e.height(),u&&clearInterval(u),u=setTimeout(function(){o.trigger("update.dot")},10))})}else c=d(o),u=setInterval(function(){var t=d(o);(c.width!=t.width||c.height!=t.height)&&(o.trigger("update.dot"),c=d(o))},100);return o},o.unwatch=function(){return t(window).unbind("resize.dot"+s.dotId),u&&clearInterval(u),o};var i=o.contents(),l=t.extend(!0,{},t.fn.dotdotdot.defaults,e),s={},c={},u=null,g=null;return l.lastCharacter.remove instanceof Array||(l.lastCharacter.remove=t.fn.dotdotdot.defaultArrays.lastCharacter.remove),l.lastCharacter.noEllipsis instanceof Array||(l.lastCharacter.noEllipsis=t.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis),s.afterElement=h(l.after,o),s.isTruncated=!1,s.dotId=p++,o.data("dotdotdot",!0).bind_events().trigger("update.dot"),l.watch&&o.watch(),o},t.fn.dotdotdot.defaults={ellipsis:"... ",wrap:"word",fallbackToLetter:!0,lastCharacter:{},tolerance:0,callback:null,after:null,height:null,watch:!1,windowResizeFix:!0},t.fn.dotdotdot.defaultArrays={lastCharacter:{remove:[" ","ã€€",",",";",".","!","?"],noEllipsis:[]}},t.fn.dotdotdot.debug=function(){};var p=1,g=t.fn.html;t.fn.html=function(n){return n!=e&&!t.isFunction(n)&&this.data("dotdotdot")?this.trigger("update",[n]):g.apply(this,arguments)};var v=t.fn.text;t.fn.text=function(n){return n!=e&&!t.isFunction(n)&&this.data("dotdotdot")?(n=t("<div />").text(n).html(),this.trigger("update",[n])):v.apply(this,arguments)}}}(jQuery);

/*! jQuery UI - v1.10.4 - 2014-01-19
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.accordion.js
 * Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */

(function (e, t) {
	function i(t, i) {
		var s, a, o, r = t.nodeName.toLowerCase();
		return "area" === r ? (s = t.parentNode, a = s.name, t.href && a && "map" === s.nodeName.toLowerCase() ? (o = e("img[usemap=#" + a + "]")[0], !!o && n(o)) : !1) : (/input|select|textarea|button|object/.test(r) ? !t.disabled : "a" === r ? t.href || i : i) && n(t)
	}

	function n(t) {
		return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
			return "hidden" === e.css(this, "visibility")
		}).length
	}
	var s = 0,
		a = /^ui-id-\d+$/;
	e.ui = e.ui || {}, e.extend(e.ui, {
		version: "1.10.4",
		keyCode: {
			BACKSPACE: 8,
			COMMA: 188,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESCAPE: 27,
			HOME: 36,
			LEFT: 37,
			NUMPAD_ADD: 107,
			NUMPAD_DECIMAL: 110,
			NUMPAD_DIVIDE: 111,
			NUMPAD_ENTER: 108,
			NUMPAD_MULTIPLY: 106,
			NUMPAD_SUBTRACT: 109,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			PERIOD: 190,
			RIGHT: 39,
			SPACE: 32,
			TAB: 9,
			UP: 38
		}
	}), e.fn.extend({
		focus: function (t) {
			return function (i, n) {
				return "number" == typeof i ? this.each(function () {
					var t = this;
					setTimeout(function () {
						e(t).focus(), n && n.call(t)
					}, i)
				}) : t.apply(this, arguments)
			}
		}(e.fn.focus),
		scrollParent: function () {
			var t;
			return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
				return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
			}).eq(0) : this.parents().filter(function () {
				return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
			}).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
		},
		zIndex: function (i) {
			if (i !== t) return this.css("zIndex", i);
			if (this.length)
				for (var n, s, a = e(this[0]); a.length && a[0] !== document;) {
					if (n = a.css("position"), ("absolute" === n || "relative" === n || "fixed" === n) && (s = parseInt(a.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
					a = a.parent()
				}
			return 0
		},
		uniqueId: function () {
			return this.each(function () {
				this.id || (this.id = "ui-id-" + ++s)
			})
		},
		removeUniqueId: function () {
			return this.each(function () {
				a.test(this.id) && e(this).removeAttr("id")
			})
		}
	}), e.extend(e.expr[":"], {
		data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
			return function (i) {
				return !!e.data(i, t)
			}
		}) : function (t, i, n) {
			return !!e.data(t, n[3])
		},
		focusable: function (t) {
			return i(t, !isNaN(e.attr(t, "tabindex")))
		},
		tabbable: function (t) {
			var n = e.attr(t, "tabindex"),
				s = isNaN(n);
			return (s || n >= 0) && i(t, !s)
		}
	}), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (i, n) {
		function s(t, i, n, s) {
			return e.each(a, function () {
				i -= parseFloat(e.css(t, "padding" + this)) || 0, n && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), s && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
			}), i
		}
		var a = "Width" === n ? ["Left", "Right"] : ["Top", "Bottom"],
			o = n.toLowerCase(),
			r = {
				innerWidth: e.fn.innerWidth,
				innerHeight: e.fn.innerHeight,
				outerWidth: e.fn.outerWidth,
				outerHeight: e.fn.outerHeight
			};
		e.fn["inner" + n] = function (i) {
			return i === t ? r["inner" + n].call(this) : this.each(function () {
				e(this).css(o, s(this, i) + "px")
			})
		}, e.fn["outer" + n] = function (t, i) {
			return "number" != typeof t ? r["outer" + n].call(this, t) : this.each(function () {
				e(this).css(o, s(this, t, !0, i) + "px")
			})
		}
	}), e.fn.addBack || (e.fn.addBack = function (e) {
		return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
	}), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
		return function (i) {
			return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
		}
	}(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), e.fn.extend({
		disableSelection: function () {
			return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (e) {
				e.preventDefault()
			})
		},
		enableSelection: function () {
			return this.unbind(".ui-disableSelection")
		}
	}), e.extend(e.ui, {
		plugin: {
			add: function (t, i, n) {
				var s, a = e.ui[t].prototype;
				for (s in n) a.plugins[s] = a.plugins[s] || [], a.plugins[s].push([i, n[s]])
			},
			call: function (e, t, i) {
				var n, s = e.plugins[t];
				if (s && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)
					for (n = 0; s.length > n; n++) e.options[s[n][0]] && s[n][1].apply(e.element, i)
			}
		},
		hasScroll: function (t, i) {
			if ("hidden" === e(t).css("overflow")) return !1;
			var n = i && "left" === i ? "scrollLeft" : "scrollTop",
				s = !1;
			return t[n] > 0 ? !0 : (t[n] = 1, s = t[n] > 0, t[n] = 0, s)
		}
	})
})(jQuery);
(function (t, e) {
	var i = 0,
		s = Array.prototype.slice,
		n = t.cleanData;
	t.cleanData = function (e) {
		for (var i, s = 0; null != (i = e[s]); s++) try {
			t(i).triggerHandler("remove")
		} catch (o) {}
		n(e)
	}, t.widget = function (i, s, n) {
		var o, a, r, h, l = {},
			c = i.split(".")[0];
		i = i.split(".")[1], o = c + "-" + i, n || (n = s, s = t.Widget), t.expr[":"][o.toLowerCase()] = function (e) {
			return !!t.data(e, o)
		}, t[c] = t[c] || {}, a = t[c][i], r = t[c][i] = function (t, i) {
			return this._createWidget ? (arguments.length && this._createWidget(t, i), e) : new r(t, i)
		}, t.extend(r, a, {
			version: n.version,
			_proto: t.extend({}, n),
			_childConstructors: []
		}), h = new s, h.options = t.widget.extend({}, h.options), t.each(n, function (i, n) {
			return t.isFunction(n) ? (l[i] = function () {
				var t = function () {
						return s.prototype[i].apply(this, arguments)
					},
					e = function (t) {
						return s.prototype[i].apply(this, t)
					};
				return function () {
					var i, s = this._super,
						o = this._superApply;
					return this._super = t, this._superApply = e, i = n.apply(this, arguments), this._super = s, this._superApply = o, i
				}
			}(), e) : (l[i] = n, e)
		}), r.prototype = t.widget.extend(h, {
			widgetEventPrefix: a ? h.widgetEventPrefix || i : i
		}, l, {
			constructor: r,
			namespace: c,
			widgetName: i,
			widgetFullName: o
		}), a ? (t.each(a._childConstructors, function (e, i) {
			var s = i.prototype;
			t.widget(s.namespace + "." + s.widgetName, r, i._proto)
		}), delete a._childConstructors) : s._childConstructors.push(r), t.widget.bridge(i, r)
	}, t.widget.extend = function (i) {
		for (var n, o, a = s.call(arguments, 1), r = 0, h = a.length; h > r; r++)
			for (n in a[r]) o = a[r][n], a[r].hasOwnProperty(n) && o !== e && (i[n] = t.isPlainObject(o) ? t.isPlainObject(i[n]) ? t.widget.extend({}, i[n], o) : t.widget.extend({}, o) : o);
		return i
	}, t.widget.bridge = function (i, n) {
		var o = n.prototype.widgetFullName || i;
		t.fn[i] = function (a) {
			var r = "string" == typeof a,
				h = s.call(arguments, 1),
				l = this;
			return a = !r && h.length ? t.widget.extend.apply(null, [a].concat(h)) : a, r ? this.each(function () {
				var s, n = t.data(this, o);
				return n ? t.isFunction(n[a]) && "_" !== a.charAt(0) ? (s = n[a].apply(n, h), s !== n && s !== e ? (l = s && s.jquery ? l.pushStack(s.get()) : s, !1) : e) : t.error("no such method '" + a + "' for " + i + " widget instance") : t.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + a + "'")
			}) : this.each(function () {
				var e = t.data(this, o);
				e ? e.option(a || {})._init() : t.data(this, o, new n(a, this))
			}), l
		}
	}, t.Widget = function () {}, t.Widget._childConstructors = [], t.Widget.prototype = {
		widgetName: "widget",
		widgetEventPrefix: "",
		defaultElement: "<div>",
		options: {
			disabled: !1,
			create: null
		},
		_createWidget: function (e, s) {
			s = t(s || this.defaultElement || this)[0], this.element = t(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this.bindings = t(), this.hoverable = t(), this.focusable = t(), s !== this && (t.data(s, this.widgetFullName, this), this._on(!0, this.element, {
				remove: function (t) {
					t.target === s && this.destroy()
				}
			}), this.document = t(s.style ? s.ownerDocument : s.document || s), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
		},
		_getCreateOptions: t.noop,
		_getCreateEventData: t.noop,
		_create: t.noop,
		_init: t.noop,
		destroy: function () {
			this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
		},
		_destroy: t.noop,
		widget: function () {
			return this.element
		},
		option: function (i, s) {
			var n, o, a, r = i;
			if (0 === arguments.length) return t.widget.extend({}, this.options);
			if ("string" == typeof i)
				if (r = {}, n = i.split("."), i = n.shift(), n.length) {
					for (o = r[i] = t.widget.extend({}, this.options[i]), a = 0; n.length - 1 > a; a++) o[n[a]] = o[n[a]] || {}, o = o[n[a]];
					if (i = n.pop(), 1 === arguments.length) return o[i] === e ? null : o[i];
					o[i] = s
				} else {
					if (1 === arguments.length) return this.options[i] === e ? null : this.options[i];
					r[i] = s
				}
			return this._setOptions(r), this
		},
		_setOptions: function (t) {
			var e;
			for (e in t) this._setOption(e, t[e]);
			return this
		},
		_setOption: function (t, e) {
			return this.options[t] = e, "disabled" === t && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!e).attr("aria-disabled", e), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
		},
		enable: function () {
			return this._setOption("disabled", !1)
		},
		disable: function () {
			return this._setOption("disabled", !0)
		},
		_on: function (i, s, n) {
			var o, a = this;
			"boolean" != typeof i && (n = s, s = i, i = !1), n ? (s = o = t(s), this.bindings = this.bindings.add(s)) : (n = s, s = this.element, o = this.widget()), t.each(n, function (n, r) {
				function h() {
					return i || a.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof r ? a[r] : r).apply(a, arguments) : e
				}
				"string" != typeof r && (h.guid = r.guid = r.guid || h.guid || t.guid++);
				var l = n.match(/^(\w+)\s*(.*)$/),
					c = l[1] + a.eventNamespace,
					u = l[2];
				u ? o.delegate(u, c, h) : s.bind(c, h)
			})
		},
		_off: function (t, e) {
			e = (e || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(e).undelegate(e)
		},
		_delay: function (t, e) {
			function i() {
				return ("string" == typeof t ? s[t] : t).apply(s, arguments)
			}
			var s = this;
			return setTimeout(i, e || 0)
		},
		_hoverable: function (e) {
			this.hoverable = this.hoverable.add(e), this._on(e, {
				mouseenter: function (e) {
					t(e.currentTarget).addClass("ui-state-hover")
				},
				mouseleave: function (e) {
					t(e.currentTarget).removeClass("ui-state-hover")
				}
			})
		},
		_focusable: function (e) {
			this.focusable = this.focusable.add(e), this._on(e, {
				focusin: function (e) {
					t(e.currentTarget).addClass("ui-state-focus")
				},
				focusout: function (e) {
					t(e.currentTarget).removeClass("ui-state-focus")
				}
			})
		},
		_trigger: function (e, i, s) {
			var n, o, a = this.options[e];
			if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
				for (n in o) n in i || (i[n] = o[n]);
			return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
		}
	}, t.each({
		show: "fadeIn",
		hide: "fadeOut"
	}, function (e, i) {
		t.Widget.prototype["_" + e] = function (s, n, o) {
			"string" == typeof n && (n = {
				effect: n
			});
			var a, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;
			n = n || {}, "number" == typeof n && (n = {
				duration: n
			}), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function (i) {
				t(this)[e](), o && o.call(s[0]), i()
			})
		}
	})
})(jQuery);
(function (e) {
	var t = 0,
		i = {},
		a = {};
	i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "hide", a.height = a.paddingTop = a.paddingBottom = a.borderTopWidth = a.borderBottomWidth = "show", e.widget("ui.accordion", {
		version: "1.10.4",
		options: {
			active: 0,
			animate: {},
			collapsible: !1,
			event: "click",
			header: "> li > :first-child,> :not(li):even",
			heightStyle: "auto",
			icons: {
				activeHeader: "ui-icon-triangle-1-s",
				header: "ui-icon-triangle-1-e"
			},
			activate: null,
			beforeActivate: null
		},
		_create: function () {
			var t = this.options;
			this.prevShow = this.prevHide = e(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), t.collapsible || t.active !== !1 && null != t.active || (t.active = 0), this._processPanels(), 0 > t.active && (t.active += this.headers.length), this._refresh()
		},
		_getCreateEventData: function () {
			return {
				header: this.active,
				panel: this.active.length ? this.active.next() : e(),
				content: this.active.length ? this.active.next() : e()
			}
		},
		_createIcons: function () {
			var t = this.options.icons;
			t && (e("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"))
		},
		_destroyIcons: function () {
			this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
		},
		_destroy: function () {
			var e;
			this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function () {
				/^ui-accordion/.test(this.id) && this.removeAttribute("id")
			}), this._destroyIcons(), e = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function () {
				/^ui-accordion/.test(this.id) && this.removeAttribute("id")
			}), "content" !== this.options.heightStyle && e.css("height", "")
		},
		_setOption: function (e, t) {
			return "active" === e ? (this._activate(t), undefined) : ("event" === e && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t)), this._super(e, t), "collapsible" !== e || t || this.options.active !== !1 || this._activate(0), "icons" === e && (this._destroyIcons(), t && this._createIcons()), "disabled" === e && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!t), undefined)
		},
		_keydown: function (t) {
			if (!t.altKey && !t.ctrlKey) {
				var i = e.ui.keyCode,
					a = this.headers.length,
					s = this.headers.index(t.target),
					n = !1;
				switch (t.keyCode) {
					case i.RIGHT:
					case i.DOWN:
						n = this.headers[(s + 1) % a];
						break;
					case i.LEFT:
					case i.UP:
						n = this.headers[(s - 1 + a) % a];
						break;
					case i.SPACE:
					case i.ENTER:
						this._eventHandler(t);
						break;
					case i.HOME:
						n = this.headers[0];
						break;
					case i.END:
						n = this.headers[a - 1]
				}
				n && (e(t.target).attr("tabIndex", -1), e(n).attr("tabIndex", 0), n.focus(), t.preventDefault())
			}
		},
		_panelKeyDown: function (t) {
			t.keyCode === e.ui.keyCode.UP && t.ctrlKey && e(t.currentTarget).prev().focus()
		},
		refresh: function () {
			var t = this.options;
			this._processPanels(), t.active === !1 && t.collapsible === !0 || !this.headers.length ? (t.active = !1, this.active = e()) : t.active === !1 ? this._activate(0) : this.active.length && !e.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = e()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
		},
		_processPanels: function () {
			this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
		},
		_refresh: function () {
			var i, a = this.options,
				s = a.heightStyle,
				n = this.element.parent(),
				r = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++t);
			this.active = this._findActive(a.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function (t) {
				var i = e(this),
					a = i.attr("id"),
					s = i.next(),
					n = s.attr("id");
				a || (a = r + "-header-" + t, i.attr("id", a)), n || (n = r + "-panel-" + t, s.attr("id", n)), i.attr("aria-controls", n), s.attr("aria-labelledby", a)
			}).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
				"aria-selected": "false",
				"aria-expanded": "false",
				tabIndex: -1
			}).next().attr({
				"aria-hidden": "true"
			}).hide(), this.active.length ? this.active.attr({
				"aria-selected": "true",
				"aria-expanded": "true",
				tabIndex: 0
			}).next().attr({
				"aria-hidden": "false"
			}) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(a.event), "fill" === s ? (i = n.height(), this.element.siblings(":visible").each(function () {
				var t = e(this),
					a = t.css("position");
				"absolute" !== a && "fixed" !== a && (i -= t.outerHeight(!0))
			}), this.headers.each(function () {
				i -= e(this).outerHeight(!0)
			}), this.headers.next().each(function () {
				e(this).height(Math.max(0, i - e(this).innerHeight() + e(this).height()))
			}).css("overflow", "auto")) : "auto" === s && (i = 0, this.headers.next().each(function () {
				i = Math.max(i, e(this).css("height", "").height())
			}).height(i))
		},
		_activate: function (t) {
			var i = this._findActive(t)[0];
			i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
				target: i,
				currentTarget: i,
				preventDefault: e.noop
			}))
		},
		_findActive: function (t) {
			return "number" == typeof t ? this.headers.eq(t) : e()
		},
		_setupEvents: function (t) {
			var i = {
				keydown: "_keydown"
			};
			t && e.each(t.split(" "), function (e, t) {
				i[t] = "_eventHandler"
			}), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
				keydown: "_panelKeyDown"
			}), this._hoverable(this.headers), this._focusable(this.headers)
		},
		_eventHandler: function (t) {
			var i = this.options,
				a = this.active,
				s = e(t.currentTarget),
				n = s[0] === a[0],
				r = n && i.collapsible,
				o = r ? e() : s.next(),
				h = a.next(),
				d = {
					oldHeader: a,
					oldPanel: h,
					newHeader: r ? e() : s,
					newPanel: o
				};
			t.preventDefault(), n && !i.collapsible || this._trigger("beforeActivate", t, d) === !1 || (i.active = r ? !1 : this.headers.index(s), this.active = n ? e() : s, this._toggle(d), a.removeClass("ui-accordion-header-active ui-state-active"), i.icons && a.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), n || (s.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), s.next().addClass("ui-accordion-content-active")))
		},
		_toggle: function (t) {
			var i = t.newPanel,
				a = this.prevShow.length ? this.prevShow : t.oldPanel;
			this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = a, this.options.animate ? this._animate(i, a, t) : (a.hide(), i.show(), this._toggleComplete(t)), a.attr({
				"aria-hidden": "true"
			}), a.prev().attr("aria-selected", "false"), i.length && a.length ? a.prev().attr({
				tabIndex: -1,
				"aria-expanded": "false"
			}) : i.length && this.headers.filter(function () {
				return 0 === e(this).attr("tabIndex")
			}).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
				"aria-selected": "true",
				tabIndex: 0,
				"aria-expanded": "true"
			})
		},
		_animate: function (e, t, s) {
			var n, r, o, h = this,
				d = 0,
				c = e.length && (!t.length || e.index() < t.index()),
				l = this.options.animate || {},
				u = c && l.down || l,
				v = function () {
					h._toggleComplete(s)
				};
			return "number" == typeof u && (o = u), "string" == typeof u && (r = u), r = r || u.easing || l.easing, o = o || u.duration || l.duration, t.length ? e.length ? (n = e.show().outerHeight(), t.animate(i, {
				duration: o,
				easing: r,
				step: function (e, t) {
					t.now = Math.round(e)
				}
			}), e.hide().animate(a, {
				duration: o,
				easing: r,
				complete: v,
				step: function (e, i) {
					i.now = Math.round(e), "height" !== i.prop ? d += i.now : "content" !== h.options.heightStyle && (i.now = Math.round(n - t.outerHeight() - d), d = 0)
				}
			}), undefined) : t.animate(i, o, r, v) : e.animate(a, o, r, v)
		},
		_toggleComplete: function (e) {
			var t = e.oldPanel;
			t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), t.length && (t.parent()[0].className = t.parent()[0].className), this._trigger("activate", null, e)
		}
	})
})(jQuery);

/*! jQuery UI - v1.10.2 - 2013-03-24
 * http://jqueryui.com
 * Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.position.js, jquery.ui.draggable.js, jquery.ui.droppable.js, jquery.ui.resizable.js, jquery.ui.selectable.js, jquery.ui.sortable.js, jquery.ui.accordion.js, jquery.ui.autocomplete.js, jquery.ui.button.js, jquery.ui.datepicker.js, jquery.ui.dialog.js, jquery.ui.menu.js, jquery.ui.progressbar.js, jquery.ui.slider.js, jquery.ui.spinner.js, jquery.ui.tabs.js, jquery.ui.tooltip.js, jquery.ui.effect.js, jquery.ui.effect-blind.js, jquery.ui.effect-bounce.js, jquery.ui.effect-clip.js, jquery.ui.effect-drop.js, jquery.ui.effect-explode.js, jquery.ui.effect-fade.js, jquery.ui.effect-fold.js, jquery.ui.effect-highlight.js, jquery.ui.effect-pulsate.js, jquery.ui.effect-scale.js, jquery.ui.effect-shake.js, jquery.ui.effect-slide.js, jquery.ui.effect-transfer.js
 * Copyright 2013 jQuery Foundation and other contributors Licensed MIT */

(function (e, t) {
	function i(t, i) {
		var a, n, r, o = t.nodeName.toLowerCase();
		return "area" === o ? (a = t.parentNode, n = a.name, t.href && n && "map" === a.nodeName.toLowerCase() ? (r = e("img[usemap=#" + n + "]")[0], !!r && s(r)) : !1) : (/input|select|textarea|button|object/.test(o) ? !t.disabled : "a" === o ? t.href || i : i) && s(t)
	}

	function s(t) {
		return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
			return "hidden" === e.css(this, "visibility")
		}).length
	}
	var a = 0,
		n = /^ui-id-\d+$/;
	e.ui = e.ui || {}, e.extend(e.ui, {
		version: "1.10.2",
		keyCode: {
			BACKSPACE: 8,
			COMMA: 188,
			DELETE: 46,
			DOWN: 40,
			END: 35,
			ENTER: 13,
			ESCAPE: 27,
			HOME: 36,
			LEFT: 37,
			NUMPAD_ADD: 107,
			NUMPAD_DECIMAL: 110,
			NUMPAD_DIVIDE: 111,
			NUMPAD_ENTER: 108,
			NUMPAD_MULTIPLY: 106,
			NUMPAD_SUBTRACT: 109,
			PAGE_DOWN: 34,
			PAGE_UP: 33,
			PERIOD: 190,
			RIGHT: 39,
			SPACE: 32,
			TAB: 9,
			UP: 38
		}
	}), e.fn.extend({
		focus: function (t) {
			return function (i, s) {
				return "number" == typeof i ? this.each(function () {
					var t = this;
					setTimeout(function () {
						e(t).focus(), s && s.call(t)
					}, i)
				}) : t.apply(this, arguments)
			}
		}(e.fn.focus),
		scrollParent: function () {
			var t;
			return t = e.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
				return /(relative|absolute|fixed)/.test(e.css(this, "position")) && /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
			}).eq(0) : this.parents().filter(function () {
				return /(auto|scroll)/.test(e.css(this, "overflow") + e.css(this, "overflow-y") + e.css(this, "overflow-x"))
			}).eq(0), /fixed/.test(this.css("position")) || !t.length ? e(document) : t
		},
		zIndex: function (i) {
			if (i !== t) return this.css("zIndex", i);
			if (this.length)
				for (var s, a, n = e(this[0]); n.length && n[0] !== document;) {
					if (s = n.css("position"), ("absolute" === s || "relative" === s || "fixed" === s) && (a = parseInt(n.css("zIndex"), 10), !isNaN(a) && 0 !== a)) return a;
					n = n.parent()
				}
			return 0
		},
		uniqueId: function () {
			return this.each(function () {
				this.id || (this.id = "ui-id-" + ++a)
			})
		},
		removeUniqueId: function () {
			return this.each(function () {
				n.test(this.id) && e(this).removeAttr("id")
			})
		}
	}), e.extend(e.expr[":"], {
		data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
			return function (i) {
				return !!e.data(i, t)
			}
		}) : function (t, i, s) {
			return !!e.data(t, s[3])
		},
		focusable: function (t) {
			return i(t, !isNaN(e.attr(t, "tabindex")))
		},
		tabbable: function (t) {
			var s = e.attr(t, "tabindex"),
				a = isNaN(s);
			return (a || s >= 0) && i(t, !a)
		}
	}), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (i, s) {
		function a(t, i, s, a) {
			return e.each(n, function () {
				i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
			}), i
		}
		var n = "Width" === s ? ["Left", "Right"] : ["Top", "Bottom"],
			r = s.toLowerCase(),
			o = {
				innerWidth: e.fn.innerWidth,
				innerHeight: e.fn.innerHeight,
				outerWidth: e.fn.outerWidth,
				outerHeight: e.fn.outerHeight
			};
		e.fn["inner" + s] = function (i) {
			return i === t ? o["inner" + s].call(this) : this.each(function () {
				e(this).css(r, a(this, i) + "px")
			})
		}, e.fn["outer" + s] = function (t, i) {
			return "number" != typeof t ? o["outer" + s].call(this, t) : this.each(function () {
				e(this).css(r, a(this, t, !0, i) + "px")
			})
		}
	}), e.fn.addBack || (e.fn.addBack = function (e) {
		return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
	}), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
		return function (i) {
			return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
		}
	}(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.support.selectstart = "onselectstart" in document.createElement("div"), e.fn.extend({
		disableSelection: function () {
			return this.bind((e.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (e) {
				e.preventDefault()
			})
		},
		enableSelection: function () {
			return this.unbind(".ui-disableSelection")
		}
	}), e.extend(e.ui, {
		plugin: {
			add: function (t, i, s) {
				var a, n = e.ui[t].prototype;
				for (a in s) n.plugins[a] = n.plugins[a] || [], n.plugins[a].push([i, s[a]])
			},
			call: function (e, t, i) {
				var s, a = e.plugins[t];
				if (a && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)
					for (s = 0; a.length > s; s++) e.options[a[s][0]] && a[s][1].apply(e.element, i)
			}
		},
		hasScroll: function (t, i) {
			if ("hidden" === e(t).css("overflow")) return !1;
			var s = i && "left" === i ? "scrollLeft" : "scrollTop",
				a = !1;
			return t[s] > 0 ? !0 : (t[s] = 1, a = t[s] > 0, t[s] = 0, a)
		}
	})
})(jQuery);
(function (e, t) {
	var i = 0,
		s = Array.prototype.slice,
		n = e.cleanData;
	e.cleanData = function (t) {
		for (var i, s = 0; null != (i = t[s]); s++) try {
			e(i).triggerHandler("remove")
		} catch (a) {}
		n(t)
	}, e.widget = function (i, s, n) {
		var a, r, o, h, l = {},
			u = i.split(".")[0];
		i = i.split(".")[1], a = u + "-" + i, n || (n = s, s = e.Widget), e.expr[":"][a.toLowerCase()] = function (t) {
			return !!e.data(t, a)
		}, e[u] = e[u] || {}, r = e[u][i], o = e[u][i] = function (e, i) {
			return this._createWidget ? (arguments.length && this._createWidget(e, i), t) : new o(e, i)
		}, e.extend(o, r, {
			version: n.version,
			_proto: e.extend({}, n),
			_childConstructors: []
		}), h = new s, h.options = e.widget.extend({}, h.options), e.each(n, function (i, n) {
			return e.isFunction(n) ? (l[i] = function () {
				var e = function () {
						return s.prototype[i].apply(this, arguments)
					},
					t = function (e) {
						return s.prototype[i].apply(this, e)
					};
				return function () {
					var i, s = this._super,
						a = this._superApply;
					return this._super = e, this._superApply = t, i = n.apply(this, arguments), this._super = s, this._superApply = a, i
				}
			}(), t) : (l[i] = n, t)
		}), o.prototype = e.widget.extend(h, {
			widgetEventPrefix: r ? h.widgetEventPrefix : i
		}, l, {
			constructor: o,
			namespace: u,
			widgetName: i,
			widgetFullName: a
		}), r ? (e.each(r._childConstructors, function (t, i) {
			var s = i.prototype;
			e.widget(s.namespace + "." + s.widgetName, o, i._proto)
		}), delete r._childConstructors) : s._childConstructors.push(o), e.widget.bridge(i, o)
	}, e.widget.extend = function (i) {
		for (var n, a, r = s.call(arguments, 1), o = 0, h = r.length; h > o; o++)
			for (n in r[o]) a = r[o][n], r[o].hasOwnProperty(n) && a !== t && (i[n] = e.isPlainObject(a) ? e.isPlainObject(i[n]) ? e.widget.extend({}, i[n], a) : e.widget.extend({}, a) : a);
		return i
	}, e.widget.bridge = function (i, n) {
		var a = n.prototype.widgetFullName || i;
		e.fn[i] = function (r) {
			var o = "string" == typeof r,
				h = s.call(arguments, 1),
				l = this;
			return r = !o && h.length ? e.widget.extend.apply(null, [r].concat(h)) : r, o ? this.each(function () {
				var s, n = e.data(this, a);
				return n ? e.isFunction(n[r]) && "_" !== r.charAt(0) ? (s = n[r].apply(n, h), s !== n && s !== t ? (l = s && s.jquery ? l.pushStack(s.get()) : s, !1) : t) : e.error("no such method '" + r + "' for " + i + " widget instance") : e.error("cannot call methods on " + i + " prior to initialization; " + "attempted to call method '" + r + "'")
			}) : this.each(function () {
				var t = e.data(this, a);
				t ? t.option(r || {})._init() : e.data(this, a, new n(r, this))
			}), l
		}
	}, e.Widget = function () {}, e.Widget._childConstructors = [], e.Widget.prototype = {
		widgetName: "widget",
		widgetEventPrefix: "",
		defaultElement: "<div>",
		options: {
			disabled: !1,
			create: null
		},
		_createWidget: function (t, s) {
			s = e(s || this.defaultElement || this)[0], this.element = e(s), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this.bindings = e(), this.hoverable = e(), this.focusable = e(), s !== this && (e.data(s, this.widgetFullName, this), this._on(!0, this.element, {
				remove: function (e) {
					e.target === s && this.destroy()
				}
			}), this.document = e(s.style ? s.ownerDocument : s.document || s), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
		},
		_getCreateOptions: e.noop,
		_getCreateEventData: e.noop,
		_create: e.noop,
		_init: e.noop,
		destroy: function () {
			this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled " + "ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
		},
		_destroy: e.noop,
		widget: function () {
			return this.element
		},
		option: function (i, s) {
			var n, a, r, o = i;
			if (0 === arguments.length) return e.widget.extend({}, this.options);
			if ("string" == typeof i)
				if (o = {}, n = i.split("."), i = n.shift(), n.length) {
					for (a = o[i] = e.widget.extend({}, this.options[i]), r = 0; n.length - 1 > r; r++) a[n[r]] = a[n[r]] || {}, a = a[n[r]];
					if (i = n.pop(), s === t) return a[i] === t ? null : a[i];
					a[i] = s
				} else {
					if (s === t) return this.options[i] === t ? null : this.options[i];
					o[i] = s
				}
			return this._setOptions(o), this
		},
		_setOptions: function (e) {
			var t;
			for (t in e) this._setOption(t, e[t]);
			return this
		},
		_setOption: function (e, t) {
			return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
		},
		enable: function () {
			return this._setOption("disabled", !1)
		},
		disable: function () {
			return this._setOption("disabled", !0)
		},
		_on: function (i, s, n) {
			var a, r = this;
			"boolean" != typeof i && (n = s, s = i, i = !1), n ? (s = a = e(s), this.bindings = this.bindings.add(s)) : (n = s, s = this.element, a = this.widget()), e.each(n, function (n, o) {
				function h() {
					return i || r.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? r[o] : o).apply(r, arguments) : t
				}
				"string" != typeof o && (h.guid = o.guid = o.guid || h.guid || e.guid++);
				var l = n.match(/^(\w+)\s*(.*)$/),
					u = l[1] + r.eventNamespace,
					c = l[2];
				c ? a.delegate(c, u, h) : s.bind(u, h)
			})
		},
		_off: function (e, t) {
			t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
		},
		_delay: function (e, t) {
			function i() {
				return ("string" == typeof e ? s[e] : e).apply(s, arguments)
			}
			var s = this;
			return setTimeout(i, t || 0)
		},
		_hoverable: function (t) {
			this.hoverable = this.hoverable.add(t), this._on(t, {
				mouseenter: function (t) {
					e(t.currentTarget).addClass("ui-state-hover")
				},
				mouseleave: function (t) {
					e(t.currentTarget).removeClass("ui-state-hover")
				}
			})
		},
		_focusable: function (t) {
			this.focusable = this.focusable.add(t), this._on(t, {
				focusin: function (t) {
					e(t.currentTarget).addClass("ui-state-focus")
				},
				focusout: function (t) {
					e(t.currentTarget).removeClass("ui-state-focus")
				}
			})
		},
		_trigger: function (t, i, s) {
			var n, a, r = this.options[t];
			if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent)
				for (n in a) n in i || (i[n] = a[n]);
			return this.element.trigger(i, s), !(e.isFunction(r) && r.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
		}
	}, e.each({
		show: "fadeIn",
		hide: "fadeOut"
	}, function (t, i) {
		e.Widget.prototype["_" + t] = function (s, n, a) {
			"string" == typeof n && (n = {
				effect: n
			});
			var r, o = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
			n = n || {}, "number" == typeof n && (n = {
				duration: n
			}), r = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), r && e.effects && e.effects.effect[o] ? s[t](n) : o !== t && s[o] ? s[o](n.duration, n.easing, a) : s.queue(function (i) {
				e(this)[t](), a && a.call(s[0]), i()
			})
		}
	})
})(jQuery);
(function (e) {
	var t = !1;
	e(document).mouseup(function () {
		t = !1
	}), e.widget("ui.mouse", {
		version: "1.10.2",
		options: {
			cancel: "input,textarea,button,select,option",
			distance: 1,
			delay: 0
		},
		_mouseInit: function () {
			var t = this;
			this.element.bind("mousedown." + this.widgetName, function (e) {
				return t._mouseDown(e)
			}).bind("click." + this.widgetName, function (i) {
				return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : undefined
			}), this.started = !1
		},
		_mouseDestroy: function () {
			this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
		},
		_mouseDown: function (i) {
			if (!t) {
				this._mouseStarted && this._mouseUp(i), this._mouseDownEvent = i;
				var s = this,
					n = 1 === i.which,
					a = "string" == typeof this.options.cancel && i.target.nodeName ? e(i.target).closest(this.options.cancel).length : !1;
				return n && !a && this._mouseCapture(i) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
					s.mouseDelayMet = !0
				}, this.options.delay)), this._mouseDistanceMet(i) && this._mouseDelayMet(i) && (this._mouseStarted = this._mouseStart(i) !== !1, !this._mouseStarted) ? (i.preventDefault(), !0) : (!0 === e.data(i.target, this.widgetName + ".preventClickEvent") && e.removeData(i.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (e) {
					return s._mouseMove(e)
				}, this._mouseUpDelegate = function (e) {
					return s._mouseUp(e)
				}, e(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), i.preventDefault(), t = !0, !0)) : !0
			}
		},
		_mouseMove: function (t) {
			return e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button ? this._mouseUp(t) : this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
		},
		_mouseUp: function (t) {
			return e(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), !1
		},
		_mouseDistanceMet: function (e) {
			return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
		},
		_mouseDelayMet: function () {
			return this.mouseDelayMet
		},
		_mouseStart: function () {},
		_mouseDrag: function () {},
		_mouseStop: function () {},
		_mouseCapture: function () {
			return !0
		}
	})
})(jQuery);
(function (t, e) {
	function i(t, e, i) {
		return [parseFloat(t[0]) * (p.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (p.test(t[1]) ? i / 100 : 1)]
	}

	function s(e, i) {
		return parseInt(t.css(e, i), 10) || 0
	}

	function n(e) {
		var i = e[0];
		return 9 === i.nodeType ? {
			width: e.width(),
			height: e.height(),
			offset: {
				top: 0,
				left: 0
			}
		} : t.isWindow(i) ? {
			width: e.width(),
			height: e.height(),
			offset: {
				top: e.scrollTop(),
				left: e.scrollLeft()
			}
		} : i.preventDefault ? {
			width: 0,
			height: 0,
			offset: {
				top: i.pageY,
				left: i.pageX
			}
		} : {
			width: e.outerWidth(),
			height: e.outerHeight(),
			offset: e.offset()
		}
	}
	t.ui = t.ui || {};
	var a, o = Math.max,
		r = Math.abs,
		h = Math.round,
		l = /left|center|right/,
		c = /top|center|bottom/,
		u = /[\+\-]\d+(\.[\d]+)?%?/,
		d = /^\w+/,
		p = /%$/,
		f = t.fn.position;
	t.position = {
			scrollbarWidth: function () {
				if (a !== e) return a;
				var i, s, n = t("<div style='display:block;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
					o = n.children()[0];
				return t("body").append(n), i = o.offsetWidth, n.css("overflow", "scroll"), s = o.offsetWidth, i === s && (s = n[0].clientWidth), n.remove(), a = i - s
			},
			getScrollInfo: function (e) {
				var i = e.isWindow ? "" : e.element.css("overflow-x"),
					s = e.isWindow ? "" : e.element.css("overflow-y"),
					n = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth,
					a = "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight;
				return {
					width: a ? t.position.scrollbarWidth() : 0,
					height: n ? t.position.scrollbarWidth() : 0
				}
			},
			getWithinInfo: function (e) {
				var i = t(e || window),
					s = t.isWindow(i[0]);
				return {
					element: i,
					isWindow: s,
					offset: i.offset() || {
						left: 0,
						top: 0
					},
					scrollLeft: i.scrollLeft(),
					scrollTop: i.scrollTop(),
					width: s ? i.width() : i.outerWidth(),
					height: s ? i.height() : i.outerHeight()
				}
			}
		}, t.fn.position = function (e) {
			if (!e || !e.of) return f.apply(this, arguments);
			e = t.extend({}, e);
			var a, p, m, g, v, _, b = t(e.of),
				y = t.position.getWithinInfo(e.within),
				w = t.position.getScrollInfo(y),
				x = (e.collision || "flip").split(" "),
				k = {};
			return _ = n(b), b[0].preventDefault && (e.at = "left top"), p = _.width, m = _.height, g = _.offset, v = t.extend({}, g), t.each(["my", "at"], function () {
				var t, i, s = (e[this] || "").split(" ");
				1 === s.length && (s = l.test(s[0]) ? s.concat(["center"]) : c.test(s[0]) ? ["center"].concat(s) : ["center", "center"]), s[0] = l.test(s[0]) ? s[0] : "center", s[1] = c.test(s[1]) ? s[1] : "center", t = u.exec(s[0]), i = u.exec(s[1]), k[this] = [t ? t[0] : 0, i ? i[0] : 0], e[this] = [d.exec(s[0])[0], d.exec(s[1])[0]]
			}), 1 === x.length && (x[1] = x[0]), "right" === e.at[0] ? v.left += p : "center" === e.at[0] && (v.left += p / 2), "bottom" === e.at[1] ? v.top += m : "center" === e.at[1] && (v.top += m / 2), a = i(k.at, p, m), v.left += a[0], v.top += a[1], this.each(function () {
				var n, l, c = t(this),
					u = c.outerWidth(),
					d = c.outerHeight(),
					f = s(this, "marginLeft"),
					_ = s(this, "marginTop"),
					D = u + f + s(this, "marginRight") + w.width,
					T = d + _ + s(this, "marginBottom") + w.height,
					C = t.extend({}, v),
					M = i(k.my, c.outerWidth(), c.outerHeight());
				"right" === e.my[0] ? C.left -= u : "center" === e.my[0] && (C.left -= u / 2), "bottom" === e.my[1] ? C.top -= d : "center" === e.my[1] && (C.top -= d / 2), C.left += M[0], C.top += M[1], t.support.offsetFractions || (C.left = h(C.left), C.top = h(C.top)), n = {
					marginLeft: f,
					marginTop: _
				}, t.each(["left", "top"], function (i, s) {
					t.ui.position[x[i]] && t.ui.position[x[i]][s](C, {
						targetWidth: p,
						targetHeight: m,
						elemWidth: u,
						elemHeight: d,
						collisionPosition: n,
						collisionWidth: D,
						collisionHeight: T,
						offset: [a[0] + M[0], a[1] + M[1]],
						my: e.my,
						at: e.at,
						within: y,
						elem: c
					})
				}), e.using && (l = function (t) {
					var i = g.left - C.left,
						s = i + p - u,
						n = g.top - C.top,
						a = n + m - d,
						h = {
							target: {
								element: b,
								left: g.left,
								top: g.top,
								width: p,
								height: m
							},
							element: {
								element: c,
								left: C.left,
								top: C.top,
								width: u,
								height: d
							},
							horizontal: 0 > s ? "left" : i > 0 ? "right" : "center",
							vertical: 0 > a ? "top" : n > 0 ? "bottom" : "middle"
						};
					u > p && p > r(i + s) && (h.horizontal = "center"), d > m && m > r(n + a) && (h.vertical = "middle"), h.important = o(r(i), r(s)) > o(r(n), r(a)) ? "horizontal" : "vertical", e.using.call(this, t, h)
				}), c.offset(t.extend(C, {
					using: l
				}))
			})
		}, t.ui.position = {
			fit: {
				left: function (t, e) {
					var i, s = e.within,
						n = s.isWindow ? s.scrollLeft : s.offset.left,
						a = s.width,
						r = t.left - e.collisionPosition.marginLeft,
						h = n - r,
						l = r + e.collisionWidth - a - n;
					e.collisionWidth > a ? h > 0 && 0 >= l ? (i = t.left + h + e.collisionWidth - a - n, t.left += h - i) : t.left = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionWidth : n : h > 0 ? t.left += h : l > 0 ? t.left -= l : t.left = o(t.left - r, t.left)
				},
				top: function (t, e) {
					var i, s = e.within,
						n = s.isWindow ? s.scrollTop : s.offset.top,
						a = e.within.height,
						r = t.top - e.collisionPosition.marginTop,
						h = n - r,
						l = r + e.collisionHeight - a - n;
					e.collisionHeight > a ? h > 0 && 0 >= l ? (i = t.top + h + e.collisionHeight - a - n, t.top += h - i) : t.top = l > 0 && 0 >= h ? n : h > l ? n + a - e.collisionHeight : n : h > 0 ? t.top += h : l > 0 ? t.top -= l : t.top = o(t.top - r, t.top)
				}
			},
			flip: {
				left: function (t, e) {
					var i, s, n = e.within,
						a = n.offset.left + n.scrollLeft,
						o = n.width,
						h = n.isWindow ? n.scrollLeft : n.offset.left,
						l = t.left - e.collisionPosition.marginLeft,
						c = l - h,
						u = l + e.collisionWidth - o - h,
						d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
						p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
						f = -2 * e.offset[0];
					0 > c ? (i = t.left + d + p + f + e.collisionWidth - o - a, (0 > i || r(c) > i) && (t.left += d + p + f)) : u > 0 && (s = t.left - e.collisionPosition.marginLeft + d + p + f - h, (s > 0 || u > r(s)) && (t.left += d + p + f))
				},
				top: function (t, e) {
					var i, s, n = e.within,
						a = n.offset.top + n.scrollTop,
						o = n.height,
						h = n.isWindow ? n.scrollTop : n.offset.top,
						l = t.top - e.collisionPosition.marginTop,
						c = l - h,
						u = l + e.collisionHeight - o - h,
						d = "top" === e.my[1],
						p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
						f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
						m = -2 * e.offset[1];
					0 > c ? (s = t.top + p + f + m + e.collisionHeight - o - a, t.top + p + f + m > c && (0 > s || r(c) > s) && (t.top += p + f + m)) : u > 0 && (i = t.top - e.collisionPosition.marginTop + p + f + m - h, t.top + p + f + m > u && (i > 0 || u > r(i)) && (t.top += p + f + m))
				}
			},
			flipfit: {
				left: function () {
					t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
				},
				top: function () {
					t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
				}
			}
		},
		function () {
			var e, i, s, n, a, o = document.getElementsByTagName("body")[0],
				r = document.createElement("div");
			e = document.createElement(o ? "div" : "body"), s = {
				visibility: "hidden",
				width: 0,
				height: 0,
				border: 0,
				margin: 0,
				background: "none"
			}, o && t.extend(s, {
				position: "absolute",
				left: "-1000px",
				top: "-1000px"
			});
			for (a in s) e.style[a] = s[a];
			e.appendChild(r), i = o || document.documentElement, i.insertBefore(e, i.firstChild), r.style.cssText = "position: absolute; left: 10.7432222px;", n = t(r).offset().left, t.support.offsetFractions = n > 10 && 11 > n, e.innerHTML = "", i.removeChild(e)
		}()
})(jQuery);
(function (e) {
	e.widget("ui.draggable", e.ui.mouse, {
		version: "1.10.2",
		widgetEventPrefix: "drag",
		options: {
			addClasses: !0,
			appendTo: "parent",
			axis: !1,
			connectToSortable: !1,
			containment: !1,
			cursor: "auto",
			cursorAt: !1,
			grid: !1,
			handle: !1,
			helper: "original",
			iframeFix: !1,
			opacity: !1,
			refreshPositions: !1,
			revert: !1,
			revertDuration: 500,
			scope: "default",
			scroll: !0,
			scrollSensitivity: 20,
			scrollSpeed: 20,
			snap: !1,
			snapMode: "both",
			snapTolerance: 20,
			stack: !1,
			zIndex: !1,
			drag: null,
			start: null,
			stop: null
		},
		_create: function () {
			"original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
		},
		_destroy: function () {
			this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
		},
		_mouseCapture: function (t) {
			var i = this.options;
			return this.helper || i.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (e(i.iframeFix === !0 ? "iframe" : i.iframeFix).each(function () {
				e("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
					width: this.offsetWidth + "px",
					height: this.offsetHeight + "px",
					position: "absolute",
					opacity: "0.001",
					zIndex: 1e3
				}).css(e(this).offset()).appendTo("body")
			}), !0) : !1)
		},
		_mouseStart: function (t) {
			var i = this.options;
			return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offset = this.positionAbs = this.element.offset(), this.offset = {
				top: this.offset.top - this.margins.top,
				left: this.offset.left - this.margins.left
			}, e.extend(this.offset, {
				click: {
					left: t.pageX - this.offset.left,
					top: t.pageY - this.offset.top
				},
				parent: this._getParentOffset(),
				relative: this._getRelativeOffset()
			}), this.originalPosition = this.position = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), i.containment && this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
		},
		_mouseDrag: function (t, i) {
			if (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), !i) {
				var s = this._uiHash();
				if (this._trigger("drag", t, s) === !1) return this._mouseUp({}), !1;
				this.position = s.position
			}
			return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
		},
		_mouseStop: function (t) {
			var i, s = this,
				n = !1,
				a = !1;
			for (e.ui.ddmanager && !this.options.dropBehaviour && (a = e.ui.ddmanager.drop(this, t)), this.dropped && (a = this.dropped, this.dropped = !1), i = this.element[0]; i && (i = i.parentNode);) i === document && (n = !0);
			return n || "original" !== this.options.helper ? ("invalid" === this.options.revert && !a || "valid" === this.options.revert && a || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, a) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
				s._trigger("stop", t) !== !1 && s._clear()
			}) : this._trigger("stop", t) !== !1 && this._clear(), !1) : !1
		},
		_mouseUp: function (t) {
			return e("div.ui-draggable-iframeFix").each(function () {
				this.parentNode.removeChild(this)
			}), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), e.ui.mouse.prototype._mouseUp.call(this, t)
		},
		cancel: function () {
			return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
		},
		_getHandle: function (t) {
			return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0
		},
		_createHelper: function (t) {
			var i = this.options,
				s = e.isFunction(i.helper) ? e(i.helper.apply(this.element[0], [t])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
			return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
		},
		_adjustOffsetFromHelper: function (t) {
			"string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
				left: +t[0],
				top: +t[1] || 0
			}), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
		},
		_getParentOffset: function () {
			this.offsetParent = this.helper.offsetParent();
			var t = this.offsetParent.offset();
			return "absolute" === this.cssPosition && this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && e.ui.ie) && (t = {
				top: 0,
				left: 0
			}), {
				top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			}
		},
		_getRelativeOffset: function () {
			if ("relative" === this.cssPosition) {
				var e = this.element.position();
				return {
					top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
					left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
				}
			}
			return {
				top: 0,
				left: 0
			}
		},
		_cacheMargins: function () {
			this.margins = {
				left: parseInt(this.element.css("marginLeft"), 10) || 0,
				top: parseInt(this.element.css("marginTop"), 10) || 0,
				right: parseInt(this.element.css("marginRight"), 10) || 0,
				bottom: parseInt(this.element.css("marginBottom"), 10) || 0
			}
		},
		_cacheHelperProportions: function () {
			this.helperProportions = {
				width: this.helper.outerWidth(),
				height: this.helper.outerHeight()
			}
		},
		_setContainment: function () {
			var t, i, s, n = this.options;
			if ("parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = ["document" === n.containment ? 0 : e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, "document" === n.containment ? 0 : e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, ("document" === n.containment ? 0 : e(window).scrollLeft()) + e("document" === n.containment ? document : window).width() - this.helperProportions.width - this.margins.left, ("document" === n.containment ? 0 : e(window).scrollTop()) + (e("document" === n.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || n.containment.constructor === Array) n.containment.constructor === Array && (this.containment = n.containment);
			else {
				if (i = e(n.containment), s = i[0], !s) return;
				t = "hidden" !== e(s).css("overflow"), this.containment = [(parseInt(e(s).css("borderLeftWidth"), 10) || 0) + (parseInt(e(s).css("paddingLeft"), 10) || 0), (parseInt(e(s).css("borderTopWidth"), 10) || 0) + (parseInt(e(s).css("paddingTop"), 10) || 0), (t ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(e(s).css("borderRightWidth"), 10) || 0) - (parseInt(e(s).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(e(s).css("borderBottomWidth"), 10) || 0) - (parseInt(e(s).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = i
			}
		},
		_convertPositionTo: function (t, i) {
			i || (i = this.position);
			var s = "absolute" === t ? 1 : -1,
				n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
				a = /(html|body)/i.test(n[0].tagName);
			return {
				top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : n.scrollTop()) * s,
				left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : n.scrollLeft()) * s
			}
		},
		_generatePosition: function (t) {
			var i, s, n, a, o = this.options,
				r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && e.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
				h = /(html|body)/i.test(r[0].tagName),
				l = t.pageX,
				u = t.pageY;
			return this.originalPosition && (this.containment && (this.relative_container ? (s = this.relative_container.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (u = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (u = i[3] + this.offset.click.top)), o.grid && (n = o.grid[1] ? this.originalPageY + Math.round((u - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, u = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - o.grid[1] : n + o.grid[1] : n, a = o.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, l = i ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2] ? a : a - this.offset.click.left >= i[0] ? a - o.grid[0] : a + o.grid[0] : a)), {
				top: u - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
				left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
			}
		},
		_clear: function () {
			this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
		},
		_trigger: function (t, i, s) {
			return s = s || this._uiHash(), e.ui.plugin.call(this, t, [i, s]), "drag" === t && (this.positionAbs = this._convertPositionTo("absolute")), e.Widget.prototype._trigger.call(this, t, i, s)
		},
		plugins: {},
		_uiHash: function () {
			return {
				helper: this.helper,
				position: this.position,
				originalPosition: this.originalPosition,
				offset: this.positionAbs
			}
		}
	}), e.ui.plugin.add("draggable", "connectToSortable", {
		start: function (t, i) {
			var s = e(this).data("ui-draggable"),
				n = s.options,
				a = e.extend({}, i, {
					item: s.element
				});
			s.sortables = [], e(n.connectToSortable).each(function () {
				var i = e.data(this, "ui-sortable");
				i && !i.options.disabled && (s.sortables.push({
					instance: i,
					shouldRevert: i.options.revert
				}), i.refreshPositions(), i._trigger("activate", t, a))
			})
		},
		stop: function (t, i) {
			var s = e(this).data("ui-draggable"),
				n = e.extend({}, i, {
					item: s.element
				});
			e.each(s.sortables, function () {
				this.instance.isOver ? (this.instance.isOver = 0, s.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(t), this.instance.options.helper = this.instance.options._helper, "original" === s.options.helper && this.instance.currentItem.css({
					top: "auto",
					left: "auto"
				})) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", t, n))
			})
		},
		drag: function (t, i) {
			var s = e(this).data("ui-draggable"),
				n = this;
			e.each(s.sortables, function () {
				var a = !1,
					o = this;
				this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (a = !0, e.each(s.sortables, function () {
					return this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this !== o && this.instance._intersectsWith(this.instance.containerCache) && e.contains(o.instance.element[0], this.instance.element[0]) && (a = !1), a
				})), a ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = e(n).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function () {
					return i.helper[0]
				}, t.target = this.instance.currentItem[0], this.instance._mouseCapture(t, !0), this.instance._mouseStart(t, !0, !0), this.instance.offset.click.top = s.offset.click.top, this.instance.offset.click.left = s.offset.click.left, this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top, s._trigger("toSortable", t), s.dropped = this.instance.element, s.currentItem = s.element, this.instance.fromOutside = s), this.instance.currentItem && this.instance._mouseDrag(t)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", t, this.instance._uiHash(this.instance)), this.instance._mouseStop(t, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), s._trigger("fromSortable", t), s.dropped = !1)
			})
		}
	}), e.ui.plugin.add("draggable", "cursor", {
		start: function () {
			var t = e("body"),
				i = e(this).data("ui-draggable").options;
			t.css("cursor") && (i._cursor = t.css("cursor")), t.css("cursor", i.cursor)
		},
		stop: function () {
			var t = e(this).data("ui-draggable").options;
			t._cursor && e("body").css("cursor", t._cursor)
		}
	}), e.ui.plugin.add("draggable", "opacity", {
		start: function (t, i) {
			var s = e(i.helper),
				n = e(this).data("ui-draggable").options;
			s.css("opacity") && (n._opacity = s.css("opacity")), s.css("opacity", n.opacity)
		},
		stop: function (t, i) {
			var s = e(this).data("ui-draggable").options;
			s._opacity && e(i.helper).css("opacity", s._opacity)
		}
	}), e.ui.plugin.add("draggable", "scroll", {
		start: function () {
			var t = e(this).data("ui-draggable");
			t.scrollParent[0] !== document && "HTML" !== t.scrollParent[0].tagName && (t.overflowOffset = t.scrollParent.offset())
		},
		drag: function (t) {
			var i = e(this).data("ui-draggable"),
				s = i.options,
				n = !1;
			i.scrollParent[0] !== document && "HTML" !== i.scrollParent[0].tagName ? (s.axis && "x" === s.axis || (i.overflowOffset.top + i.scrollParent[0].offsetHeight - t.pageY < s.scrollSensitivity ? i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop + s.scrollSpeed : t.pageY - i.overflowOffset.top < s.scrollSensitivity && (i.scrollParent[0].scrollTop = n = i.scrollParent[0].scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (i.overflowOffset.left + i.scrollParent[0].offsetWidth - t.pageX < s.scrollSensitivity ? i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft + s.scrollSpeed : t.pageX - i.overflowOffset.left < s.scrollSensitivity && (i.scrollParent[0].scrollLeft = n = i.scrollParent[0].scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (t.pageY - e(document).scrollTop() < s.scrollSensitivity ? n = e(document).scrollTop(e(document).scrollTop() - s.scrollSpeed) : e(window).height() - (t.pageY - e(document).scrollTop()) < s.scrollSensitivity && (n = e(document).scrollTop(e(document).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (t.pageX - e(document).scrollLeft() < s.scrollSensitivity ? n = e(document).scrollLeft(e(document).scrollLeft() - s.scrollSpeed) : e(window).width() - (t.pageX - e(document).scrollLeft()) < s.scrollSensitivity && (n = e(document).scrollLeft(e(document).scrollLeft() + s.scrollSpeed)))), n !== !1 && e.ui.ddmanager && !s.dropBehaviour && e.ui.ddmanager.prepareOffsets(i, t)
		}
	}), e.ui.plugin.add("draggable", "snap", {
		start: function () {
			var t = e(this).data("ui-draggable"),
				i = t.options;
			t.snapElements = [], e(i.snap.constructor !== String ? i.snap.items || ":data(ui-draggable)" : i.snap).each(function () {
				var i = e(this),
					s = i.offset();
				this !== t.element[0] && t.snapElements.push({
					item: this,
					width: i.outerWidth(),
					height: i.outerHeight(),
					top: s.top,
					left: s.left
				})
			})
		},
		drag: function (t, i) {
			var s, n, a, o, r, h, l, u, c, d, p = e(this).data("ui-draggable"),
				f = p.options,
				m = f.snapTolerance,
				g = i.offset.left,
				v = g + p.helperProportions.width,
				y = i.offset.top,
				b = y + p.helperProportions.height;
			for (c = p.snapElements.length - 1; c >= 0; c--) r = p.snapElements[c].left, h = r + p.snapElements[c].width, l = p.snapElements[c].top, u = l + p.snapElements[c].height, g > r - m && h + m > g && y > l - m && u + m > y || g > r - m && h + m > g && b > l - m && u + m > b || v > r - m && h + m > v && y > l - m && u + m > y || v > r - m && h + m > v && b > l - m && u + m > b ? ("inner" !== f.snapMode && (s = m >= Math.abs(l - b), n = m >= Math.abs(u - y), a = m >= Math.abs(r - v), o = m >= Math.abs(h - g), s && (i.position.top = p._convertPositionTo("relative", {
				top: l - p.helperProportions.height,
				left: 0
			}).top - p.margins.top), n && (i.position.top = p._convertPositionTo("relative", {
				top: u,
				left: 0
			}).top - p.margins.top), a && (i.position.left = p._convertPositionTo("relative", {
				top: 0,
				left: r - p.helperProportions.width
			}).left - p.margins.left), o && (i.position.left = p._convertPositionTo("relative", {
				top: 0,
				left: h
			}).left - p.margins.left)), d = s || n || a || o, "outer" !== f.snapMode && (s = m >= Math.abs(l - y), n = m >= Math.abs(u - b), a = m >= Math.abs(r - g), o = m >= Math.abs(h - v), s && (i.position.top = p._convertPositionTo("relative", {
				top: l,
				left: 0
			}).top - p.margins.top), n && (i.position.top = p._convertPositionTo("relative", {
				top: u - p.helperProportions.height,
				left: 0
			}).top - p.margins.top), a && (i.position.left = p._convertPositionTo("relative", {
				top: 0,
				left: r
			}).left - p.margins.left), o && (i.position.left = p._convertPositionTo("relative", {
				top: 0,
				left: h - p.helperProportions.width
			}).left - p.margins.left)), !p.snapElements[c].snapping && (s || n || a || o || d) && p.options.snap.snap && p.options.snap.snap.call(p.element, t, e.extend(p._uiHash(), {
				snapItem: p.snapElements[c].item
			})), p.snapElements[c].snapping = s || n || a || o || d) : (p.snapElements[c].snapping && p.options.snap.release && p.options.snap.release.call(p.element, t, e.extend(p._uiHash(), {
				snapItem: p.snapElements[c].item
			})), p.snapElements[c].snapping = !1)
		}
	}), e.ui.plugin.add("draggable", "stack", {
		start: function () {
			var t, i = this.data("ui-draggable").options,
				s = e.makeArray(e(i.stack)).sort(function (t, i) {
					return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0)
				});
			s.length && (t = parseInt(e(s[0]).css("zIndex"), 10) || 0, e(s).each(function (i) {
				e(this).css("zIndex", t + i)
			}), this.css("zIndex", t + s.length))
		}
	}), e.ui.plugin.add("draggable", "zIndex", {
		start: function (t, i) {
			var s = e(i.helper),
				n = e(this).data("ui-draggable").options;
			s.css("zIndex") && (n._zIndex = s.css("zIndex")), s.css("zIndex", n.zIndex)
		},
		stop: function (t, i) {
			var s = e(this).data("ui-draggable").options;
			s._zIndex && e(i.helper).css("zIndex", s._zIndex)
		}
	})
})(jQuery);
(function (e) {
	function t(e, t, i) {
		return e > t && t + i > e
	}
	e.widget("ui.droppable", {
		version: "1.10.2",
		widgetEventPrefix: "drop",
		options: {
			accept: "*",
			activeClass: !1,
			addClasses: !0,
			greedy: !1,
			hoverClass: !1,
			scope: "default",
			tolerance: "intersect",
			activate: null,
			deactivate: null,
			drop: null,
			out: null,
			over: null
		},
		_create: function () {
			var t = this.options,
				i = t.accept;
			this.isover = !1, this.isout = !0, this.accept = e.isFunction(i) ? i : function (e) {
				return e.is(i)
			}, this.proportions = {
				width: this.element[0].offsetWidth,
				height: this.element[0].offsetHeight
			}, e.ui.ddmanager.droppables[t.scope] = e.ui.ddmanager.droppables[t.scope] || [], e.ui.ddmanager.droppables[t.scope].push(this), t.addClasses && this.element.addClass("ui-droppable")
		},
		_destroy: function () {
			for (var t = 0, i = e.ui.ddmanager.droppables[this.options.scope]; i.length > t; t++) i[t] === this && i.splice(t, 1);
			this.element.removeClass("ui-droppable ui-droppable-disabled")
		},
		_setOption: function (t, i) {
			"accept" === t && (this.accept = e.isFunction(i) ? i : function (e) {
				return e.is(i)
			}), e.Widget.prototype._setOption.apply(this, arguments)
		},
		_activate: function (t) {
			var i = e.ui.ddmanager.current;
			this.options.activeClass && this.element.addClass(this.options.activeClass), i && this._trigger("activate", t, this.ui(i))
		},
		_deactivate: function (t) {
			var i = e.ui.ddmanager.current;
			this.options.activeClass && this.element.removeClass(this.options.activeClass), i && this._trigger("deactivate", t, this.ui(i))
		},
		_over: function (t) {
			var i = e.ui.ddmanager.current;
			i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(i)))
		},
		_out: function (t) {
			var i = e.ui.ddmanager.current;
			i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(i)))
		},
		_drop: function (t, i) {
			var s = i || e.ui.ddmanager.current,
				n = !1;
			return s && (s.currentItem || s.element)[0] !== this.element[0] ? (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
				var t = e.data(this, "ui-droppable");
				return t.options.greedy && !t.options.disabled && t.options.scope === s.options.scope && t.accept.call(t.element[0], s.currentItem || s.element) && e.ui.intersect(s, e.extend(t, {
					offset: t.element.offset()
				}), t.options.tolerance) ? (n = !0, !1) : undefined
			}), n ? !1 : this.accept.call(this.element[0], s.currentItem || s.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(s)), this.element) : !1) : !1
		},
		ui: function (e) {
			return {
				draggable: e.currentItem || e.element,
				helper: e.helper,
				position: e.position,
				offset: e.positionAbs
			}
		}
	}), e.ui.intersect = function (e, i, s) {
		if (!i.offset) return !1;
		var n, a, o = (e.positionAbs || e.position.absolute).left,
			r = o + e.helperProportions.width,
			h = (e.positionAbs || e.position.absolute).top,
			l = h + e.helperProportions.height,
			u = i.offset.left,
			c = u + i.proportions.width,
			d = i.offset.top,
			p = d + i.proportions.height;
		switch (s) {
			case "fit":
				return o >= u && c >= r && h >= d && p >= l;
			case "intersect":
				return o + e.helperProportions.width / 2 > u && c > r - e.helperProportions.width / 2 && h + e.helperProportions.height / 2 > d && p > l - e.helperProportions.height / 2;
			case "pointer":
				return n = (e.positionAbs || e.position.absolute).left + (e.clickOffset || e.offset.click).left, a = (e.positionAbs || e.position.absolute).top + (e.clickOffset || e.offset.click).top, t(a, d, i.proportions.height) && t(n, u, i.proportions.width);
			case "touch":
				return (h >= d && p >= h || l >= d && p >= l || d > h && l > p) && (o >= u && c >= o || r >= u && c >= r || u > o && r > c);
			default:
				return !1
		}
	}, e.ui.ddmanager = {
		current: null,
		droppables: {
			"default": []
		},
		prepareOffsets: function (t, i) {
			var s, n, a = e.ui.ddmanager.droppables[t.options.scope] || [],
				o = i ? i.type : null,
				r = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
			e: for (s = 0; a.length > s; s++)
				if (!(a[s].options.disabled || t && !a[s].accept.call(a[s].element[0], t.currentItem || t.element))) {
					for (n = 0; r.length > n; n++)
						if (r[n] === a[s].element[0]) {
							a[s].proportions.height = 0;
							continue e
						}
					a[s].visible = "none" !== a[s].element.css("display"), a[s].visible && ("mousedown" === o && a[s]._activate.call(a[s], i), a[s].offset = a[s].element.offset(), a[s].proportions = {
						width: a[s].element[0].offsetWidth,
						height: a[s].element[0].offsetHeight
					})
				}
		},
		drop: function (t, i) {
			var s = !1;
			return e.each((e.ui.ddmanager.droppables[t.options.scope] || []).slice(), function () {
				this.options && (!this.options.disabled && this.visible && e.ui.intersect(t, this, this.options.tolerance) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
			}), s
		},
		dragStart: function (t, i) {
			t.element.parentsUntil("body").bind("scroll.droppable", function () {
				t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
			})
		},
		drag: function (t, i) {
			t.options.refreshPositions && e.ui.ddmanager.prepareOffsets(t, i), e.each(e.ui.ddmanager.droppables[t.options.scope] || [], function () {
				if (!this.options.disabled && !this.greedyChild && this.visible) {
					var s, n, a, o = e.ui.intersect(t, this, this.options.tolerance),
						r = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
					r && (this.options.greedy && (n = this.options.scope, a = this.element.parents(":data(ui-droppable)").filter(function () {
						return e.data(this, "ui-droppable").options.scope === n
					}), a.length && (s = e.data(a[0], "ui-droppable"), s.greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
				}
			})
		},
		dragStop: function (t, i) {
			t.element.parentsUntil("body").unbind("scroll.droppable"), t.options.refreshPositions || e.ui.ddmanager.prepareOffsets(t, i)
		}
	}
})(jQuery);
(function (e) {
	function t(e) {
		return parseInt(e, 10) || 0
	}

	function i(e) {
		return !isNaN(parseInt(e, 10))
	}
	e.widget("ui.resizable", e.ui.mouse, {
		version: "1.10.2",
		widgetEventPrefix: "resize",
		options: {
			alsoResize: !1,
			animate: !1,
			animateDuration: "slow",
			animateEasing: "swing",
			aspectRatio: !1,
			autoHide: !1,
			containment: !1,
			ghost: !1,
			grid: !1,
			handles: "e,s,se",
			helper: !1,
			maxHeight: null,
			maxWidth: null,
			minHeight: 10,
			minWidth: 10,
			zIndex: 90,
			resize: null,
			start: null,
			stop: null
		},
		_create: function () {
			var t, i, s, n, a, o = this,
				r = this.options;
			if (this.element.addClass("ui-resizable"), e.extend(this, {
					_aspectRatio: !!r.aspectRatio,
					aspectRatio: r.aspectRatio,
					originalElement: this.element,
					_proportionallyResizeElements: [],
					_helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null
				}), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(e("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
					position: this.element.css("position"),
					width: this.element.outerWidth(),
					height: this.element.outerHeight(),
					top: this.element.css("top"),
					left: this.element.css("left")
				})), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
					marginLeft: this.originalElement.css("marginLeft"),
					marginTop: this.originalElement.css("marginTop"),
					marginRight: this.originalElement.css("marginRight"),
					marginBottom: this.originalElement.css("marginBottom")
				}), this.originalElement.css({
					marginLeft: 0,
					marginTop: 0,
					marginRight: 0,
					marginBottom: 0
				}), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
					position: "static",
					zoom: 1,
					display: "block"
				})), this.originalElement.css({
					margin: this.originalElement.css("margin")
				}), this._proportionallyResize()), this.handles = r.handles || (e(".ui-resizable-handle", this.element).length ? {
					n: ".ui-resizable-n",
					e: ".ui-resizable-e",
					s: ".ui-resizable-s",
					w: ".ui-resizable-w",
					se: ".ui-resizable-se",
					sw: ".ui-resizable-sw",
					ne: ".ui-resizable-ne",
					nw: ".ui-resizable-nw"
				} : "e,s,se"), this.handles.constructor === String)
				for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), t = this.handles.split(","), this.handles = {}, i = 0; t.length > i; i++) s = e.trim(t[i]), a = "ui-resizable-" + s, n = e("<div class='ui-resizable-handle " + a + "'></div>"), n.css({
					zIndex: r.zIndex
				}), "se" === s && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[s] = ".ui-resizable-" + s, this.element.append(n);
			this._renderAxis = function (t) {
				var i, s, n, a;
				t = t || this.element;
				for (i in this.handles) this.handles[i].constructor === String && (this.handles[i] = e(this.handles[i], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (s = e(this.handles[i], this.element), a = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), n = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(n, a), this._proportionallyResize()), e(this.handles[i]).length
			}, this._renderAxis(this.element), this._handles = e(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function () {
				o.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), o.axis = n && n[1] ? n[1] : "se")
			}), r.autoHide && (this._handles.hide(), e(this.element).addClass("ui-resizable-autohide").mouseenter(function () {
				r.disabled || (e(this).removeClass("ui-resizable-autohide"), o._handles.show())
			}).mouseleave(function () {
				r.disabled || o.resizing || (e(this).addClass("ui-resizable-autohide"), o._handles.hide())
			})), this._mouseInit()
		},
		_destroy: function () {
			this._mouseDestroy();
			var t, i = function (t) {
				e(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
			};
			return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({
				position: t.css("position"),
				width: t.outerWidth(),
				height: t.outerHeight(),
				top: t.css("top"),
				left: t.css("left")
			}).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
		},
		_mouseCapture: function (t) {
			var i, s, n = !1;
			for (i in this.handles) s = e(this.handles[i])[0], (s === t.target || e.contains(s, t.target)) && (n = !0);
			return !this.options.disabled && n
		},
		_mouseStart: function (i) {
			var s, n, a, o = this.options,
				r = this.element.position(),
				h = this.element;
			return this.resizing = !0, /absolute/.test(h.css("position")) ? h.css({
				position: "absolute",
				top: h.css("top"),
				left: h.css("left")
			}) : h.is(".ui-draggable") && h.css({
				position: "absolute",
				top: r.top,
				left: r.left
			}), this._renderProxy(), s = t(this.helper.css("left")), n = t(this.helper.css("top")), o.containment && (s += e(o.containment).scrollLeft() || 0, n += e(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
				left: s,
				top: n
			}, this.size = this._helper ? {
				width: h.outerWidth(),
				height: h.outerHeight()
			} : {
				width: h.width(),
				height: h.height()
			}, this.originalSize = this._helper ? {
				width: h.outerWidth(),
				height: h.outerHeight()
			} : {
				width: h.width(),
				height: h.height()
			}, this.originalPosition = {
				left: s,
				top: n
			}, this.sizeDiff = {
				width: h.outerWidth() - h.width(),
				height: h.outerHeight() - h.height()
			}, this.originalMousePosition = {
				left: i.pageX,
				top: i.pageY
			}, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, a = e(".ui-resizable-" + this.axis).css("cursor"), e("body").css("cursor", "auto" === a ? this.axis + "-resize" : a), h.addClass("ui-resizable-resizing"), this._propagate("start", i), !0
		},
		_mouseDrag: function (t) {
			var i, s = this.helper,
				n = {},
				a = this.originalMousePosition,
				o = this.axis,
				r = this.position.top,
				h = this.position.left,
				l = this.size.width,
				u = this.size.height,
				c = t.pageX - a.left || 0,
				d = t.pageY - a.top || 0,
				p = this._change[o];
			return p ? (i = p.apply(this, [t, c, d]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), this.position.top !== r && (n.top = this.position.top + "px"), this.position.left !== h && (n.left = this.position.left + "px"), this.size.width !== l && (n.width = this.size.width + "px"), this.size.height !== u && (n.height = this.size.height + "px"), s.css(n), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), e.isEmptyObject(n) || this._trigger("resize", t, this.ui()), !1) : !1
		},
		_mouseStop: function (t) {
			this.resizing = !1;
			var i, s, n, a, o, r, h, l = this.options,
				u = this;
			return this._helper && (i = this._proportionallyResizeElements, s = i.length && /textarea/i.test(i[0].nodeName), n = s && e.ui.hasScroll(i[0], "left") ? 0 : u.sizeDiff.height, a = s ? 0 : u.sizeDiff.width, o = {
				width: u.helper.width() - a,
				height: u.helper.height() - n
			}, r = parseInt(u.element.css("left"), 10) + (u.position.left - u.originalPosition.left) || null, h = parseInt(u.element.css("top"), 10) + (u.position.top - u.originalPosition.top) || null, l.animate || this.element.css(e.extend(o, {
				top: h,
				left: r
			})), u.helper.height(u.size.height), u.helper.width(u.size.width), this._helper && !l.animate && this._proportionallyResize()), e("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
		},
		_updateVirtualBoundaries: function (e) {
			var t, s, n, a, o, r = this.options;
			o = {
				minWidth: i(r.minWidth) ? r.minWidth : 0,
				maxWidth: i(r.maxWidth) ? r.maxWidth : 1 / 0,
				minHeight: i(r.minHeight) ? r.minHeight : 0,
				maxHeight: i(r.maxHeight) ? r.maxHeight : 1 / 0
			}, (this._aspectRatio || e) && (t = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, s = o.maxHeight * this.aspectRatio, a = o.maxWidth / this.aspectRatio, t > o.minWidth && (o.minWidth = t), n > o.minHeight && (o.minHeight = n), o.maxWidth > s && (o.maxWidth = s), o.maxHeight > a && (o.maxHeight = a)), this._vBoundaries = o
		},
		_updateCache: function (e) {
			this.offset = this.helper.offset(), i(e.left) && (this.position.left = e.left), i(e.top) && (this.position.top = e.top), i(e.height) && (this.size.height = e.height), i(e.width) && (this.size.width = e.width)
		},
		_updateRatio: function (e) {
			var t = this.position,
				s = this.size,
				n = this.axis;
			return i(e.height) ? e.width = e.height * this.aspectRatio : i(e.width) && (e.height = e.width / this.aspectRatio), "sw" === n && (e.left = t.left + (s.width - e.width), e.top = null), "nw" === n && (e.top = t.top + (s.height - e.height), e.left = t.left + (s.width - e.width)), e
		},
		_respectSize: function (e) {
			var t = this._vBoundaries,
				s = this.axis,
				n = i(e.width) && t.maxWidth && t.maxWidth < e.width,
				a = i(e.height) && t.maxHeight && t.maxHeight < e.height,
				o = i(e.width) && t.minWidth && t.minWidth > e.width,
				r = i(e.height) && t.minHeight && t.minHeight > e.height,
				h = this.originalPosition.left + this.originalSize.width,
				l = this.position.top + this.size.height,
				u = /sw|nw|w/.test(s),
				c = /nw|ne|n/.test(s);
			return o && (e.width = t.minWidth), r && (e.height = t.minHeight), n && (e.width = t.maxWidth), a && (e.height = t.maxHeight), o && u && (e.left = h - t.minWidth), n && u && (e.left = h - t.maxWidth), r && c && (e.top = l - t.minHeight), a && c && (e.top = l - t.maxHeight), e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : e.top = null, e
		},
		_proportionallyResize: function () {
			if (this._proportionallyResizeElements.length) {
				var e, t, i, s, n, a = this.helper || this.element;
				for (e = 0; this._proportionallyResizeElements.length > e; e++) {
					if (n = this._proportionallyResizeElements[e], !this.borderDif)
						for (this.borderDif = [], i = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")], s = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")], t = 0; i.length > t; t++) this.borderDif[t] = (parseInt(i[t], 10) || 0) + (parseInt(s[t], 10) || 0);
					n.css({
						height: a.height() - this.borderDif[0] - this.borderDif[2] || 0,
						width: a.width() - this.borderDif[1] - this.borderDif[3] || 0
					})
				}
			}
		},
		_renderProxy: function () {
			var t = this.element,
				i = this.options;
			this.elementOffset = t.offset(), this._helper ? (this.helper = this.helper || e("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
				width: this.element.outerWidth() - 1,
				height: this.element.outerHeight() - 1,
				position: "absolute",
				left: this.elementOffset.left + "px",
				top: this.elementOffset.top + "px",
				zIndex: ++i.zIndex
			}), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
		},
		_change: {
			e: function (e, t) {
				return {
					width: this.originalSize.width + t
				}
			},
			w: function (e, t) {
				var i = this.originalSize,
					s = this.originalPosition;
				return {
					left: s.left + t,
					width: i.width - t
				}
			},
			n: function (e, t, i) {
				var s = this.originalSize,
					n = this.originalPosition;
				return {
					top: n.top + i,
					height: s.height - i
				}
			},
			s: function (e, t, i) {
				return {
					height: this.originalSize.height + i
				}
			},
			se: function (t, i, s) {
				return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, s]))
			},
			sw: function (t, i, s) {
				return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, s]))
			},
			ne: function (t, i, s) {
				return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, s]))
			},
			nw: function (t, i, s) {
				return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, s]))
			}
		},
		_propagate: function (t, i) {
			e.ui.plugin.call(this, t, [i, this.ui()]), "resize" !== t && this._trigger(t, i, this.ui())
		},
		plugins: {},
		ui: function () {
			return {
				originalElement: this.originalElement,
				element: this.element,
				helper: this.helper,
				position: this.position,
				size: this.size,
				originalSize: this.originalSize,
				originalPosition: this.originalPosition
			}
		}
	}), e.ui.plugin.add("resizable", "animate", {
		stop: function (t) {
			var i = e(this).data("ui-resizable"),
				s = i.options,
				n = i._proportionallyResizeElements,
				a = n.length && /textarea/i.test(n[0].nodeName),
				o = a && e.ui.hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
				r = a ? 0 : i.sizeDiff.width,
				h = {
					width: i.size.width - r,
					height: i.size.height - o
				},
				l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
				u = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
			i.element.animate(e.extend(h, u && l ? {
				top: u,
				left: l
			} : {}), {
				duration: s.animateDuration,
				easing: s.animateEasing,
				step: function () {
					var s = {
						width: parseInt(i.element.css("width"), 10),
						height: parseInt(i.element.css("height"), 10),
						top: parseInt(i.element.css("top"), 10),
						left: parseInt(i.element.css("left"), 10)
					};
					n && n.length && e(n[0]).css({
						width: s.width,
						height: s.height
					}), i._updateCache(s), i._propagate("resize", t)
				}
			})
		}
	}), e.ui.plugin.add("resizable", "containment", {
		start: function () {
			var i, s, n, a, o, r, h, l = e(this).data("ui-resizable"),
				u = l.options,
				c = l.element,
				d = u.containment,
				p = d instanceof e ? d.get(0) : /parent/.test(d) ? c.parent().get(0) : d;
			p && (l.containerElement = e(p), /document/.test(d) || d === document ? (l.containerOffset = {
				left: 0,
				top: 0
			}, l.containerPosition = {
				left: 0,
				top: 0
			}, l.parentData = {
				element: e(document),
				left: 0,
				top: 0,
				width: e(document).width(),
				height: e(document).height() || document.body.parentNode.scrollHeight
			}) : (i = e(p), s = [], e(["Top", "Right", "Left", "Bottom"]).each(function (e, n) {
				s[e] = t(i.css("padding" + n))
			}), l.containerOffset = i.offset(), l.containerPosition = i.position(), l.containerSize = {
				height: i.innerHeight() - s[3],
				width: i.innerWidth() - s[1]
			}, n = l.containerOffset, a = l.containerSize.height, o = l.containerSize.width, r = e.ui.hasScroll(p, "left") ? p.scrollWidth : o, h = e.ui.hasScroll(p) ? p.scrollHeight : a, l.parentData = {
				element: p,
				left: n.left,
				top: n.top,
				width: r,
				height: h
			}))
		},
		resize: function (t) {
			var i, s, n, a, o = e(this).data("ui-resizable"),
				r = o.options,
				h = o.containerOffset,
				l = o.position,
				u = o._aspectRatio || t.shiftKey,
				c = {
					top: 0,
					left: 0
				},
				d = o.containerElement;
			d[0] !== document && /static/.test(d.css("position")) && (c = h), l.left < (o._helper ? h.left : 0) && (o.size.width = o.size.width + (o._helper ? o.position.left - h.left : o.position.left - c.left), u && (o.size.height = o.size.width / o.aspectRatio), o.position.left = r.helper ? h.left : 0), l.top < (o._helper ? h.top : 0) && (o.size.height = o.size.height + (o._helper ? o.position.top - h.top : o.position.top), u && (o.size.width = o.size.height * o.aspectRatio), o.position.top = o._helper ? h.top : 0), o.offset.left = o.parentData.left + o.position.left, o.offset.top = o.parentData.top + o.position.top, i = Math.abs((o._helper ? o.offset.left - c.left : o.offset.left - c.left) + o.sizeDiff.width), s = Math.abs((o._helper ? o.offset.top - c.top : o.offset.top - h.top) + o.sizeDiff.height), n = o.containerElement.get(0) === o.element.parent().get(0), a = /relative|absolute/.test(o.containerElement.css("position")), n && a && (i -= o.parentData.left), i + o.size.width >= o.parentData.width && (o.size.width = o.parentData.width - i, u && (o.size.height = o.size.width / o.aspectRatio)), s + o.size.height >= o.parentData.height && (o.size.height = o.parentData.height - s, u && (o.size.width = o.size.height * o.aspectRatio))
		},
		stop: function () {
			var t = e(this).data("ui-resizable"),
				i = t.options,
				s = t.containerOffset,
				n = t.containerPosition,
				a = t.containerElement,
				o = e(t.helper),
				r = o.offset(),
				h = o.outerWidth() - t.sizeDiff.width,
				l = o.outerHeight() - t.sizeDiff.height;
			t._helper && !i.animate && /relative/.test(a.css("position")) && e(this).css({
				left: r.left - n.left - s.left,
				width: h,
				height: l
			}), t._helper && !i.animate && /static/.test(a.css("position")) && e(this).css({
				left: r.left - n.left - s.left,
				width: h,
				height: l
			})
		}
	}), e.ui.plugin.add("resizable", "alsoResize", {
		start: function () {
			var t = e(this).data("ui-resizable"),
				i = t.options,
				s = function (t) {
					e(t).each(function () {
						var t = e(this);
						t.data("ui-resizable-alsoresize", {
							width: parseInt(t.width(), 10),
							height: parseInt(t.height(), 10),
							left: parseInt(t.css("left"), 10),
							top: parseInt(t.css("top"), 10)
						})
					})
				};
			"object" != typeof i.alsoResize || i.alsoResize.parentNode ? s(i.alsoResize) : i.alsoResize.length ? (i.alsoResize = i.alsoResize[0], s(i.alsoResize)) : e.each(i.alsoResize, function (e) {
				s(e)
			})
		},
		resize: function (t, i) {
			var s = e(this).data("ui-resizable"),
				n = s.options,
				a = s.originalSize,
				o = s.originalPosition,
				r = {
					height: s.size.height - a.height || 0,
					width: s.size.width - a.width || 0,
					top: s.position.top - o.top || 0,
					left: s.position.left - o.left || 0
				},
				h = function (t, s) {
					e(t).each(function () {
						var t = e(this),
							n = e(this).data("ui-resizable-alsoresize"),
							a = {},
							o = s && s.length ? s : t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
						e.each(o, function (e, t) {
							var i = (n[t] || 0) + (r[t] || 0);
							i && i >= 0 && (a[t] = i || null)
						}), t.css(a)
					})
				};
			"object" != typeof n.alsoResize || n.alsoResize.nodeType ? h(n.alsoResize) : e.each(n.alsoResize, function (e, t) {
				h(e, t)
			})
		},
		stop: function () {
			e(this).removeData("resizable-alsoresize")
		}
	}), e.ui.plugin.add("resizable", "ghost", {
		start: function () {
			var t = e(this).data("ui-resizable"),
				i = t.options,
				s = t.size;
			t.ghost = t.originalElement.clone(), t.ghost.css({
				opacity: .25,
				display: "block",
				position: "relative",
				height: s.height,
				width: s.width,
				margin: 0,
				left: 0,
				top: 0
			}).addClass("ui-resizable-ghost").addClass("string" == typeof i.ghost ? i.ghost : ""), t.ghost.appendTo(t.helper)
		},
		resize: function () {
			var t = e(this).data("ui-resizable");
			t.ghost && t.ghost.css({
				position: "relative",
				height: t.size.height,
				width: t.size.width
			})
		},
		stop: function () {
			var t = e(this).data("ui-resizable");
			t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
		}
	}), e.ui.plugin.add("resizable", "grid", {
		resize: function () {
			var t = e(this).data("ui-resizable"),
				i = t.options,
				s = t.size,
				n = t.originalSize,
				a = t.originalPosition,
				o = t.axis,
				r = "number" == typeof i.grid ? [i.grid, i.grid] : i.grid,
				h = r[0] || 1,
				l = r[1] || 1,
				u = Math.round((s.width - n.width) / h) * h,
				c = Math.round((s.height - n.height) / l) * l,
				d = n.width + u,
				p = n.height + c,
				f = i.maxWidth && d > i.maxWidth,
				m = i.maxHeight && p > i.maxHeight,
				g = i.minWidth && i.minWidth > d,
				v = i.minHeight && i.minHeight > p;
			i.grid = r, g && (d += h), v && (p += l), f && (d -= h), m && (p -= l), /^(se|s|e)$/.test(o) ? (t.size.width = d, t.size.height = p) : /^(ne)$/.test(o) ? (t.size.width = d, t.size.height = p, t.position.top = a.top - c) : /^(sw)$/.test(o) ? (t.size.width = d, t.size.height = p, t.position.left = a.left - u) : (t.size.width = d, t.size.height = p, t.position.top = a.top - c, t.position.left = a.left - u)
		}
	})
})(jQuery);
(function (e) {
	e.widget("ui.selectable", e.ui.mouse, {
		version: "1.10.2",
		options: {
			appendTo: "body",
			autoRefresh: !0,
			distance: 0,
			filter: "*",
			tolerance: "touch",
			selected: null,
			selecting: null,
			start: null,
			stop: null,
			unselected: null,
			unselecting: null
		},
		_create: function () {
			var t, i = this;
			this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function () {
				t = e(i.options.filter, i.element[0]), t.addClass("ui-selectee"), t.each(function () {
					var t = e(this),
						i = t.offset();
					e.data(this, "selectable-item", {
						element: this,
						$element: t,
						left: i.left,
						top: i.top,
						right: i.left + t.outerWidth(),
						bottom: i.top + t.outerHeight(),
						startselected: !1,
						selected: t.hasClass("ui-selected"),
						selecting: t.hasClass("ui-selecting"),
						unselecting: t.hasClass("ui-unselecting")
					})
				})
			}, this.refresh(), this.selectees = t.addClass("ui-selectee"), this._mouseInit(), this.helper = e("<div class='ui-selectable-helper'></div>")
		},
		_destroy: function () {
			this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
		},
		_mouseStart: function (t) {
			var i = this,
				s = this.options;
			this.opos = [t.pageX, t.pageY], this.options.disabled || (this.selectees = e(s.filter, this.element[0]), this._trigger("start", t), e(s.appendTo).append(this.helper), this.helper.css({
				left: t.pageX,
				top: t.pageY,
				width: 0,
				height: 0
			}), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
				var s = e.data(this, "selectable-item");
				s.startselected = !0, t.metaKey || t.ctrlKey || (s.$element.removeClass("ui-selected"), s.selected = !1, s.$element.addClass("ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", t, {
					unselecting: s.element
				}))
			}), e(t.target).parents().addBack().each(function () {
				var s, n = e.data(this, "selectable-item");
				return n ? (s = !t.metaKey && !t.ctrlKey || !n.$element.hasClass("ui-selected"), n.$element.removeClass(s ? "ui-unselecting" : "ui-selected").addClass(s ? "ui-selecting" : "ui-unselecting"), n.unselecting = !s, n.selecting = s, n.selected = s, s ? i._trigger("selecting", t, {
					selecting: n.element
				}) : i._trigger("unselecting", t, {
					unselecting: n.element
				}), !1) : undefined
			}))
		},
		_mouseDrag: function (t) {
			if (this.dragged = !0, !this.options.disabled) {
				var i, s = this,
					n = this.options,
					a = this.opos[0],
					o = this.opos[1],
					r = t.pageX,
					h = t.pageY;
				return a > r && (i = r, r = a, a = i), o > h && (i = h, h = o, o = i), this.helper.css({
					left: a,
					top: o,
					width: r - a,
					height: h - o
				}), this.selectees.each(function () {
					var i = e.data(this, "selectable-item"),
						l = !1;
					i && i.element !== s.element[0] && ("touch" === n.tolerance ? l = !(i.left > r || a > i.right || i.top > h || o > i.bottom) : "fit" === n.tolerance && (l = i.left > a && r > i.right && i.top > o && h > i.bottom), l ? (i.selected && (i.$element.removeClass("ui-selected"), i.selected = !1), i.unselecting && (i.$element.removeClass("ui-unselecting"), i.unselecting = !1), i.selecting || (i.$element.addClass("ui-selecting"), i.selecting = !0, s._trigger("selecting", t, {
						selecting: i.element
					}))) : (i.selecting && ((t.metaKey || t.ctrlKey) && i.startselected ? (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.$element.addClass("ui-selected"), i.selected = !0) : (i.$element.removeClass("ui-selecting"), i.selecting = !1, i.startselected && (i.$element.addClass("ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", t, {
						unselecting: i.element
					}))), i.selected && (t.metaKey || t.ctrlKey || i.startselected || (i.$element.removeClass("ui-selected"), i.selected = !1, i.$element.addClass("ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", t, {
						unselecting: i.element
					})))))
				}), !1
			}
		},
		_mouseStop: function (t) {
			var i = this;
			return this.dragged = !1, e(".ui-unselecting", this.element[0]).each(function () {
				var s = e.data(this, "selectable-item");
				s.$element.removeClass("ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", t, {
					unselected: s.element
				})
			}), e(".ui-selecting", this.element[0]).each(function () {
				var s = e.data(this, "selectable-item");
				s.$element.removeClass("ui-selecting").addClass("ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", t, {
					selected: s.element
				})
			}), this._trigger("stop", t), this.helper.remove(), !1
		}
	})
})(jQuery);
(function (t) {
	function e(t, e, i) {
		return t > e && e + i > t
	}

	function i(t) {
		return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
	}
	t.widget("ui.sortable", t.ui.mouse, {
		version: "1.10.2",
		widgetEventPrefix: "sort",
		ready: !1,
		options: {
			appendTo: "parent",
			axis: !1,
			connectWith: !1,
			containment: !1,
			cursor: "auto",
			cursorAt: !1,
			dropOnEmpty: !0,
			forcePlaceholderSize: !1,
			forceHelperSize: !1,
			grid: !1,
			handle: !1,
			helper: "original",
			items: "> *",
			opacity: !1,
			placeholder: !1,
			revert: !1,
			scroll: !0,
			scrollSensitivity: 20,
			scrollSpeed: 20,
			scope: "default",
			tolerance: "intersect",
			zIndex: 1e3,
			activate: null,
			beforeStop: null,
			change: null,
			deactivate: null,
			out: null,
			over: null,
			receive: null,
			remove: null,
			sort: null,
			start: null,
			stop: null,
			update: null
		},
		_create: function () {
			var t = this.options;
			this.containerCache = {}, this.element.addClass("ui-sortable"), this.refresh(), this.floating = this.items.length ? "x" === t.axis || i(this.items[0].item) : !1, this.offset = this.element.offset(), this._mouseInit(), this.ready = !0
		},
		_destroy: function () {
			this.element.removeClass("ui-sortable ui-sortable-disabled"), this._mouseDestroy();
			for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
			return this
		},
		_setOption: function (e, i) {
			"disabled" === e ? (this.options[e] = i, this.widget().toggleClass("ui-sortable-disabled", !!i)) : t.Widget.prototype._setOption.apply(this, arguments)
		},
		_mouseCapture: function (e, i) {
			var s = null,
				n = !1,
				a = this;
			return this.reverting ? !1 : this.options.disabled || "static" === this.options.type ? !1 : (this._refreshItems(e), t(e.target).parents().each(function () {
				return t.data(this, a.widgetName + "-item") === a ? (s = t(this), !1) : undefined
			}), t.data(e.target, a.widgetName + "-item") === a && (s = t(e.target)), s ? !this.options.handle || i || (t(this.options.handle, s).find("*").addBack().each(function () {
				this === e.target && (n = !0)
			}), n) ? (this.currentItem = s, this._removeCurrentsFromItems(), !0) : !1 : !1)
		},
		_mouseStart: function (e, i, s) {
			var n, a, o = this.options;
			if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
					top: this.offset.top - this.margins.top,
					left: this.offset.left - this.margins.left
				}, t.extend(this.offset, {
					click: {
						left: e.pageX - this.offset.left,
						top: e.pageY - this.offset.top
					},
					parent: this._getParentOffset(),
					relative: this._getRelativeOffset()
				}), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt), this.domPosition = {
					prev: this.currentItem.prev()[0],
					parent: this.currentItem.parent()[0]
				}, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), o.containment && this._setContainment(), o.cursor && "auto" !== o.cursor && (a = this.document.find("body"), this.storedCursor = a.css("cursor"), a.css("cursor", o.cursor), this.storedStylesheet = t("<style>*{ cursor: " + o.cursor + " !important; }</style>").appendTo(a)), o.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", o.opacity)), o.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", o.zIndex)), this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s)
				for (n = this.containers.length - 1; n >= 0; n--) this.containers[n]._trigger("activate", e, this._uiHash(this));
			return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !o.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(e), !0
		},
		_mouseDrag: function (e) {
			var i, s, n, a, o = this.options,
				r = !1;
			for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== document && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < o.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + o.scrollSpeed : e.pageY - this.overflowOffset.top < o.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - o.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < o.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + o.scrollSpeed : e.pageX - this.overflowOffset.left < o.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - o.scrollSpeed)) : (e.pageY - t(document).scrollTop() < o.scrollSensitivity ? r = t(document).scrollTop(t(document).scrollTop() - o.scrollSpeed) : t(window).height() - (e.pageY - t(document).scrollTop()) < o.scrollSensitivity && (r = t(document).scrollTop(t(document).scrollTop() + o.scrollSpeed)), e.pageX - t(document).scrollLeft() < o.scrollSensitivity ? r = t(document).scrollLeft(t(document).scrollLeft() - o.scrollSpeed) : t(window).width() - (e.pageX - t(document).scrollLeft()) < o.scrollSensitivity && (r = t(document).scrollLeft(t(document).scrollLeft() + o.scrollSpeed))), r !== !1 && t.ui.ddmanager && !o.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
				if (s = this.items[i], n = s.item[0], a = this._intersectsWithPointer(s), a && s.instance === this.currentContainer && n !== this.currentItem[0] && this.placeholder[1 === a ? "next" : "prev"]()[0] !== n && !t.contains(this.placeholder[0], n) && ("semi-dynamic" === this.options.type ? !t.contains(this.element[0], n) : !0)) {
					if (this.direction = 1 === a ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
					this._rearrange(e, s), this._trigger("change", e, this._uiHash());
					break
				}
			return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
		},
		_mouseStop: function (e, i) {
			if (e) {
				if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
					var s = this,
						n = this.placeholder.offset(),
						a = this.options.axis,
						o = {};
					a && "x" !== a || (o.left = n.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollLeft)), a && "y" !== a || (o.top = n.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === document.body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(o, parseInt(this.options.revert, 10) || 500, function () {
						s._clear(e)
					})
				} else this._clear(e, i);
				return !1
			}
		},
		cancel: function () {
			if (this.dragging) {
				this._mouseUp({
					target: null
				}), "original" === this.options.helper ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
				for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
			}
			return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
				helper: null,
				dragging: !1,
				reverting: !1,
				_noFinalSort: null
			}), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
		},
		serialize: function (e) {
			var i = this._getItemsAsjQuery(e && e.connected),
				s = [];
			return e = e || {}, t(i).each(function () {
				var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
				i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
			}), !s.length && e.key && s.push(e.key + "="), s.join("&")
		},
		toArray: function (e) {
			var i = this._getItemsAsjQuery(e && e.connected),
				s = [];
			return e = e || {}, i.each(function () {
				s.push(t(e.item || this).attr(e.attribute || "id") || "")
			}), s
		},
		_intersectsWith: function (t) {
			var e = this.positionAbs.left,
				i = e + this.helperProportions.width,
				s = this.positionAbs.top,
				n = s + this.helperProportions.height,
				a = t.left,
				o = a + t.width,
				r = t.top,
				h = r + t.height,
				l = this.offset.click.top,
				c = this.offset.click.left,
				u = s + l > r && h > s + l && e + c > a && o > e + c;
			return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? u : e + this.helperProportions.width / 2 > a && o > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && h > n - this.helperProportions.height / 2
		},
		_intersectsWithPointer: function (t) {
			var i = "x" === this.options.axis || e(this.positionAbs.top + this.offset.click.top, t.top, t.height),
				s = "y" === this.options.axis || e(this.positionAbs.left + this.offset.click.left, t.left, t.width),
				n = i && s,
				a = this._getDragVerticalDirection(),
				o = this._getDragHorizontalDirection();
			return n ? this.floating ? o && "right" === o || "down" === a ? 2 : 1 : a && ("down" === a ? 2 : 1) : !1
		},
		_intersectsWithSides: function (t) {
			var i = e(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
				s = e(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
				n = this._getDragVerticalDirection(),
				a = this._getDragHorizontalDirection();
			return this.floating && a ? "right" === a && s || "left" === a && !s : n && ("down" === n && i || "up" === n && !i)
		},
		_getDragVerticalDirection: function () {
			var t = this.positionAbs.top - this.lastPositionAbs.top;
			return 0 !== t && (t > 0 ? "down" : "up")
		},
		_getDragHorizontalDirection: function () {
			var t = this.positionAbs.left - this.lastPositionAbs.left;
			return 0 !== t && (t > 0 ? "right" : "left")
		},
		refresh: function (t) {
			return this._refreshItems(t), this.refreshPositions(), this
		},
		_connectWith: function () {
			var t = this.options;
			return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
		},
		_getItemsAsjQuery: function (e) {
			var i, s, n, a, o = [],
				r = [],
				h = this._connectWith();
			if (h && e)
				for (i = h.length - 1; i >= 0; i--)
					for (n = t(h[i]), s = n.length - 1; s >= 0; s--) a = t.data(n[s], this.widgetFullName), a && a !== this && !a.options.disabled && r.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
			for (r.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
					options: this.options,
					item: this.currentItem
				}) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), i = r.length - 1; i >= 0; i--) r[i][0].each(function () {
				o.push(this)
			});
			return t(o)
		},
		_removeCurrentsFromItems: function () {
			var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
			this.items = t.grep(this.items, function (t) {
				for (var i = 0; e.length > i; i++)
					if (e[i] === t.item[0]) return !1;
				return !0
			})
		},
		_refreshItems: function (e) {
			this.items = [], this.containers = [this];
			var i, s, n, a, o, r, h, l, c = this.items,
				u = [[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {
					item: this.currentItem
				}) : t(this.options.items, this.element), this]],
				d = this._connectWith();
			if (d && this.ready)
				for (i = d.length - 1; i >= 0; i--)
					for (n = t(d[i]), s = n.length - 1; s >= 0; s--) a = t.data(n[s], this.widgetFullName), a && a !== this && !a.options.disabled && (u.push([t.isFunction(a.options.items) ? a.options.items.call(a.element[0], e, {
						item: this.currentItem
					}) : t(a.options.items, a.element), a]), this.containers.push(a));
			for (i = u.length - 1; i >= 0; i--)
				for (o = u[i][1], r = u[i][0], s = 0, l = r.length; l > s; s++) h = t(r[s]), h.data(this.widgetName + "-item", o), c.push({
					item: h,
					instance: o,
					width: 0,
					height: 0,
					left: 0,
					top: 0
				})
		},
		refreshPositions: function (e) {
			this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
			var i, s, n, a;
			for (i = this.items.length - 1; i >= 0; i--) s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (n = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = n.outerWidth(), s.height = n.outerHeight()), a = n.offset(), s.left = a.left, s.top = a.top);
			if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
			else
				for (i = this.containers.length - 1; i >= 0; i--) a = this.containers[i].element.offset(), this.containers[i].containerCache.left = a.left, this.containers[i].containerCache.top = a.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
			return this
		},
		_createPlaceholder: function (e) {
			e = e || this;
			var i, s = e.options;
			s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
				element: function () {
					var s = e.currentItem[0].nodeName.toLowerCase(),
						n = t(e.document[0].createElement(s)).addClass(i || e.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
					return "tr" === s ? n.append("<td colspan='99'>&#160;</td>") : "img" === s && n.attr("src", e.currentItem.attr("src")), i || n.css("visibility", "hidden"), n
				},
				update: function (t, n) {
					(!i || s.forcePlaceholderSize) && (n.height() || n.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), n.width() || n.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
				}
			}), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder)
		},
		_contactContainers: function (s) {
			var n, a, o, r, h, l, c, u, d, p, f = null,
				m = null;
			for (n = this.containers.length - 1; n >= 0; n--)
				if (!t.contains(this.currentItem[0], this.containers[n].element[0]))
					if (this._intersectsWith(this.containers[n].containerCache)) {
						if (f && t.contains(this.containers[n].element[0], f.element[0])) continue;
						f = this.containers[n], m = n
					} else this.containers[n].containerCache.over && (this.containers[n]._trigger("out", s, this._uiHash(this)), this.containers[n].containerCache.over = 0);
			if (f)
				if (1 === this.containers.length) this.containers[m].containerCache.over || (this.containers[m]._trigger("over", s, this._uiHash(this)), this.containers[m].containerCache.over = 1);
				else {
					for (o = 1e4, r = null, p = f.floating || i(this.currentItem), h = p ? "left" : "top", l = p ? "width" : "height", c = this.positionAbs[h] + this.offset.click[h], a = this.items.length - 1; a >= 0; a--) t.contains(this.containers[m].element[0], this.items[a].item[0]) && this.items[a].item[0] !== this.currentItem[0] && (!p || e(this.positionAbs.top + this.offset.click.top, this.items[a].top, this.items[a].height)) && (u = this.items[a].item.offset()[h], d = !1, Math.abs(u - c) > Math.abs(u + this.items[a][l] - c) && (d = !0, u += this.items[a][l]), o > Math.abs(u - c) && (o = Math.abs(u - c), r = this.items[a], this.direction = d ? "up" : "down"));
					if (!r && !this.options.dropOnEmpty) return;
					if (this.currentContainer === this.containers[m]) return;
					r ? this._rearrange(s, r, null, !0) : this._rearrange(s, null, this.containers[m].element, !0), this._trigger("change", s, this._uiHash()), this.containers[m]._trigger("change", s, this._uiHash(this)), this.currentContainer = this.containers[m], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[m]._trigger("over", s, this._uiHash(this)), this.containers[m].containerCache.over = 1
				}
		},
		_createHelper: function (e) {
			var i = this.options,
				s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
			return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
				width: this.currentItem[0].style.width,
				height: this.currentItem[0].style.height,
				position: this.currentItem.css("position"),
				top: this.currentItem.css("top"),
				left: this.currentItem.css("left")
			}), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
		},
		_adjustOffsetFromHelper: function (e) {
			"string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
				left: +e[0],
				top: +e[1] || 0
			}), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
		},
		_getParentOffset: function () {
			this.offsetParent = this.helper.offsetParent();
			var e = this.offsetParent.offset();
			return "absolute" === this.cssPosition && this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
				top: 0,
				left: 0
			}), {
				top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
				left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
			}
		},
		_getRelativeOffset: function () {
			if ("relative" === this.cssPosition) {
				var t = this.currentItem.position();
				return {
					top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
					left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
				}
			}
			return {
				top: 0,
				left: 0
			}
		},
		_cacheMargins: function () {
			this.margins = {
				left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
				top: parseInt(this.currentItem.css("marginTop"), 10) || 0
			}
		},
		_cacheHelperProportions: function () {
			this.helperProportions = {
				width: this.helper.outerWidth(),
				height: this.helper.outerHeight()
			}
		},
		_setContainment: function () {
			var e, i, s, n = this.options;
			"parent" === n.containment && (n.containment = this.helper[0].parentNode), ("document" === n.containment || "window" === n.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, t("document" === n.containment ? document : window).width() - this.helperProportions.width - this.margins.left, (t("document" === n.containment ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(n.containment) || (e = t(n.containment)[0], i = t(n.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
		},
		_convertPositionTo: function (e, i) {
			i || (i = this.position);
			var s = "absolute" === e ? 1 : -1,
				n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
				a = /(html|body)/i.test(n[0].tagName);
			return {
				top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : a ? 0 : n.scrollTop()) * s,
				left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : a ? 0 : n.scrollLeft()) * s
			}
		},
		_generatePosition: function (e) {
			var i, s, n = this.options,
				a = e.pageX,
				o = e.pageY,
				r = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
				h = /(html|body)/i.test(r[0].tagName);
			return "relative" !== this.cssPosition || this.scrollParent[0] !== document && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (a = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (o = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (a = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (o = this.containment[3] + this.offset.click.top)), n.grid && (i = this.originalPageY + Math.round((o - this.originalPageY) / n.grid[1]) * n.grid[1], o = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - n.grid[1] : i + n.grid[1] : i, s = this.originalPageX + Math.round((a - this.originalPageX) / n.grid[0]) * n.grid[0], a = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - n.grid[0] : s + n.grid[0] : s)), {
				top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : h ? 0 : r.scrollTop()),
				left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : h ? 0 : r.scrollLeft())
			}
		},
		_rearrange: function (t, e, i, s) {
			i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
			var n = this.counter;
			this._delay(function () {
				n === this.counter && this.refreshPositions(!s)
			})
		},
		_clear: function (t, e) {
			this.reverting = !1;
			var i, s = [];
			if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
				for (i in this._storedCSS)("auto" === this._storedCSS[i] || "static" === this._storedCSS[i]) && (this._storedCSS[i] = "");
				this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
			} else this.currentItem.show();
			for (this.fromOutside && !e && s.push(function (t) {
					this._trigger("receive", t, this._uiHash(this.fromOutside))
				}), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function (t) {
					this._trigger("update", t, this._uiHash())
				}), this !== this.currentContainer && (e || (s.push(function (t) {
					this._trigger("remove", t, this._uiHash())
				}), s.push(function (t) {
					return function (e) {
						t._trigger("receive", e, this._uiHash(this))
					}
				}.call(this, this.currentContainer)), s.push(function (t) {
					return function (e) {
						t._trigger("update", e, this._uiHash(this))
					}
				}.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--) e || s.push(function (t) {
				return function (e) {
					t._trigger("deactivate", e, this._uiHash(this))
				}
			}.call(this, this.containers[i])), this.containers[i].containerCache.over && (s.push(function (t) {
				return function (e) {
					t._trigger("out", e, this._uiHash(this))
				}
			}.call(this, this.containers[i])), this.containers[i].containerCache.over = 0);
			if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, this.cancelHelperRemoval) {
				if (!e) {
					for (this._trigger("beforeStop", t, this._uiHash()), i = 0; s.length > i; i++) s[i].call(this, t);
					this._trigger("stop", t, this._uiHash())
				}
				return this.fromOutside = !1, !1
			}
			if (e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null, !e) {
				for (i = 0; s.length > i; i++) s[i].call(this, t);
				this._trigger("stop", t, this._uiHash())
			}
			return this.fromOutside = !1, !0
		},
		_trigger: function () {
			t.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
		},
		_uiHash: function (e) {
			var i = e || this;
			return {
				helper: i.helper,
				placeholder: i.placeholder || t([]),
				position: i.position,
				originalPosition: i.originalPosition,
				offset: i.positionAbs,
				item: i.currentItem,
				sender: e ? e.element : null
			}
		}
	})
})(jQuery);
(function (t) {
	var e = 0,
		i = {},
		s = {};
	i.height = i.paddingTop = i.paddingBottom = i.borderTopWidth = i.borderBottomWidth = "hide", s.height = s.paddingTop = s.paddingBottom = s.borderTopWidth = s.borderBottomWidth = "show", t.widget("ui.accordion", {
		version: "1.10.2",
		options: {
			active: 0,
			animate: {},
			collapsible: !1,
			event: "click",
			header: "> li > :first-child,> :not(li):even",
			heightStyle: "auto",
			icons: {
				activeHeader: "ksticon-icon-cancel",
				header: "ksticon-add"
			},
			activate: null,
			beforeActivate: null
		},
		_create: function () {
			var e = this.options;
			this.prevShow = this.prevHide = t(), this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist"), e.collapsible || e.active !== !1 && null != e.active || (e.active = 0), this._processPanels(), 0 > e.active && (e.active += this.headers.length), this._refresh()
		},
		_getCreateEventData: function () {
			return {
				header: this.active,
				panel: this.active.length ? this.active.next() : t(),
				content: this.active.length ? this.active.next() : t()
			}
		},
		_createIcons: function () {
			var e = this.options.icons;
			e && (t("<span>").addClass("ui-accordion-header-icon ui-icon " + e.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(e.header).addClass(e.activeHeader), this.headers.addClass("ui-accordion-icons"))
		},
		_destroyIcons: function () {
			this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
		},
		_destroy: function () {
			var t;
			this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role"), this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-helper-reset ui-state-default ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").each(function () {
				/^ui-accordion/.test(this.id) && this.removeAttribute("id")
			}), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").each(function () {
				/^ui-accordion/.test(this.id) && this.removeAttribute("id")
			}), "content" !== this.options.heightStyle && t.css("height", "")
		},
		_setOption: function (t, e) {
			return "active" === t ? (this._activate(e), undefined) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || this.options.active !== !1 || this._activate(0), "icons" === t && (this._destroyIcons(), e && this._createIcons()), "disabled" === t && this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!e), undefined)
		},
		_keydown: function (e) {
			if (!e.altKey && !e.ctrlKey) {
				var i = t.ui.keyCode,
					s = this.headers.length,
					n = this.headers.index(e.target),
					a = !1;
				switch (e.keyCode) {
					case i.RIGHT:
					case i.DOWN:
						a = this.headers[(n + 1) % s];
						break;
					case i.LEFT:
					case i.UP:
						a = this.headers[(n - 1 + s) % s];
						break;
					case i.SPACE:
					case i.ENTER:
						this._eventHandler(e);
						break;
					case i.HOME:
						a = this.headers[0];
						break;
					case i.END:
						a = this.headers[s - 1]
				}
				a && (t(e.target).attr("tabIndex", -1), t(a).attr("tabIndex", 0), a.focus(), e.preventDefault())
			}
		},
		_panelKeyDown: function (e) {
			e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().focus()
		},
		refresh: function () {
			var e = this.options;
			this._processPanels(), (e.active === !1 && e.collapsible === !0 || !this.headers.length) && (e.active = !1, this.active = t()), e.active === !1 ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
		},
		_processPanels: function () {
			this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all"), this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide()
		},
		_refresh: function () {
			var i, s = this.options,
				n = s.heightStyle,
				a = this.element.parent(),
				o = this.accordionId = "ui-accordion-" + (this.element.attr("id") || ++e);
			this.active = this._findActive(s.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all"), this.active.next().addClass("ui-accordion-content-active").show(), this.headers.attr("role", "tab").each(function (e) {
				var i = t(this),
					s = i.attr("id"),
					n = i.next(),
					a = n.attr("id");
				s || (s = o + "-header-" + e, i.attr("id", s)), a || (a = o + "-panel-" + e, n.attr("id", a)), i.attr("aria-controls", a), n.attr("aria-labelledby", s)
			}).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
				"aria-selected": "false",
				tabIndex: -1
			}).next().attr({
				"aria-expanded": "false",
				"aria-hidden": "true"
			}).hide(), this.active.length ? this.active.attr({
				"aria-selected": "true",
				tabIndex: 0
			}).next().attr({
				"aria-expanded": "true",
				"aria-hidden": "false"
			}) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(s.event), "fill" === n ? (i = a.height(), this.element.siblings(":visible").each(function () {
				var e = t(this),
					s = e.css("position");
				"absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
			}), this.headers.each(function () {
				i -= t(this).outerHeight(!0)
			}), this.headers.next().each(function () {
				t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
			}).css("overflow", "auto")) : "auto" === n && (i = 0, this.headers.next().each(function () {
				i = Math.max(i, t(this).css("height", "").height())
			}).height(i))
		},
		_activate: function (e) {
			var i = this._findActive(e)[0];
			i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
				target: i,
				currentTarget: i,
				preventDefault: t.noop
			}))
		},
		_findActive: function (e) {
			return "number" == typeof e ? this.headers.eq(e) : t()
		},
		_setupEvents: function (e) {
			var i = {
				keydown: "_keydown"
			};
			e && t.each(e.split(" "), function (t, e) {
				i[e] = "_eventHandler"
			}), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {
				keydown: "_panelKeyDown"
			}), this._hoverable(this.headers), this._focusable(this.headers)
		},
		_eventHandler: function (e) {
			var i = this.options,
				s = this.active,
				n = t(e.currentTarget),
				a = n[0] === s[0],
				o = a && i.collapsible,
				r = o ? t() : n.next(),
				h = s.next(),
				l = {
					oldHeader: s,
					oldPanel: h,
					newHeader: o ? t() : n,
					newPanel: r
				};
			e.preventDefault(), a && !i.collapsible || this._trigger("beforeActivate", e, l) === !1 || (i.active = o ? !1 : this.headers.index(n), this.active = a ? t() : n, this._toggle(l), s.removeClass("ui-accordion-header-active ui-state-active"), i.icons && s.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), a || (n.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && n.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), n.next().addClass("ui-accordion-content-active")))
		},
		_toggle: function (e) {
			var i = e.newPanel,
				s = this.prevShow.length ? this.prevShow : e.oldPanel;
			this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)), s.attr({
				"aria-expanded": "false",
				"aria-hidden": "true"
			}), s.prev().attr("aria-selected", "false"), i.length && s.length ? s.prev().attr("tabIndex", -1) : i.length && this.headers.filter(function () {
				return 0 === t(this).attr("tabIndex")
			}).attr("tabIndex", -1), i.attr({
				"aria-expanded": "true",
				"aria-hidden": "false"
			}).prev().attr({
				"aria-selected": "true",
				tabIndex: 0
			})
		},
		_animate: function (t, e, n) {
			var a, o, r, h = this,
				l = 0,
				c = t.length && (!e.length || t.index() < e.index()),
				u = this.options.animate || {},
				d = c && u.down || u,
				p = function () {
					h._toggleComplete(n)
				};
			return "number" == typeof d && (r = d), "string" == typeof d && (o = d), o = o || d.easing || u.easing, r = r || d.duration || u.duration, e.length ? t.length ? (a = t.show().outerHeight(), e.animate(i, {
				duration: r,
				easing: o,
				step: function (t, e) {
					e.now = Math.round(t)
				}
			}), t.hide().animate(s, {
				duration: r,
				easing: o,
				complete: p,
				step: function (t, i) {
					i.now = Math.round(t), "height" !== i.prop ? l += i.now : "content" !== h.options.heightStyle && (i.now = Math.round(a - e.outerHeight() - l), l = 0)
				}
			}), undefined) : e.animate(i, r, o, p) : t.animate(s, r, o, p)
		},
		_toggleComplete: function (t) {
			var e = t.oldPanel;
			e.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
		}
	})
})(jQuery);
(function (e) {
	var t = 0;
	e.widget("ui.autocomplete", {
		version: "1.10.2",
		defaultElement: "<input>",
		options: {
			appendTo: null,
			autoFocus: !1,
			delay: 300,
			minLength: 1,
			position: {
				my: "left top",
				at: "left bottom",
				collision: "none"
			},
			source: null,
			change: null,
			close: null,
			focus: null,
			open: null,
			response: null,
			search: null,
			select: null
		},
		pending: 0,
		_create: function () {
			var t, i, s, n = this.element[0].nodeName.toLowerCase(),
				a = "textarea" === n,
				o = "input" === n;
			this.isMultiLine = a ? !0 : o ? !1 : this.element.prop("isContentEditable"), this.valueMethod = this.element[a || o ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
				keydown: function (n) {
					if (this.element.prop("readOnly")) return t = !0, s = !0, i = !0, undefined;
					t = !1, s = !1, i = !1;
					var a = e.ui.keyCode;
					switch (n.keyCode) {
						case a.PAGE_UP:
							t = !0, this._move("previousPage", n);
							break;
						case a.PAGE_DOWN:
							t = !0, this._move("nextPage", n);
							break;
						case a.UP:
							t = !0, this._keyEvent("previous", n);
							break;
						case a.DOWN:
							t = !0, this._keyEvent("next", n);
							break;
						case a.ENTER:
						case a.NUMPAD_ENTER:
							this.menu.active && (t = !0, n.preventDefault(), this.menu.select(n));
							break;
						case a.TAB:
							this.menu.active && this.menu.select(n);
							break;
						case a.ESCAPE:
							this.menu.element.is(":visible") && (this._value(this.term), this.close(n), n.preventDefault());
							break;
						default:
							i = !0, this._searchTimeout(n)
					}
				},
				keypress: function (s) {
					if (t) return t = !1, s.preventDefault(), undefined;
					if (!i) {
						var n = e.ui.keyCode;
						switch (s.keyCode) {
							case n.PAGE_UP:
								this._move("previousPage", s);
								break;
							case n.PAGE_DOWN:
								this._move("nextPage", s);
								break;
							case n.UP:
								this._keyEvent("previous", s);
								break;
							case n.DOWN:
								this._keyEvent("next", s)
						}
					}
				},
				input: function (e) {
					return s ? (s = !1, e.preventDefault(), undefined) : (this._searchTimeout(e), undefined)
				},
				focus: function () {
					this.selectedItem = null, this.previous = this._value()
				},
				blur: function (e) {
					return this.cancelBlur ? (delete this.cancelBlur, undefined) : (clearTimeout(this.searching), this.close(e), this._change(e), undefined)
				}
			}), this._initSource(), this.menu = e("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
				input: e(),
				role: null
			}).hide().data("ui-menu"), this._on(this.menu.element, {
				mousedown: function (t) {
					t.preventDefault(), this.cancelBlur = !0, this._delay(function () {
						delete this.cancelBlur
					});
					var i = this.menu.element[0];
					e(t.target).closest(".ui-menu-item").length || this._delay(function () {
						var t = this;
						this.document.one("mousedown", function (s) {
							s.target === t.element[0] || s.target === i || e.contains(i, s.target) || t.close()
						})
					})
				},
				menufocus: function (t, i) {
					if (this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type))) return this.menu.blur(), this.document.one("mousemove", function () {
						e(t.target).trigger(t.originalEvent)
					}), undefined;
					var s = i.item.data("ui-autocomplete-item");
					!1 !== this._trigger("focus", t, {
						item: s
					}) ? t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(s.value) : this.liveRegion.text(s.value)
				},
				menuselect: function (e, t) {
					var i = t.item.data("ui-autocomplete-item"),
						s = this.previous;
					this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = s, this._delay(function () {
						this.previous = s, this.selectedItem = i
					})), !1 !== this._trigger("select", e, {
						item: i
					}) && this._value(i.value), this.term = this._value(), this.close(e), this.selectedItem = i
				}
			}), this.liveRegion = e("<span>", {
				role: "status",
				"aria-live": "polite"
			}).addClass("ui-helper-hidden-accessible").insertAfter(this.element), this._on(this.window, {
				beforeunload: function () {
					this.element.removeAttr("autocomplete")
				}
			})
		},
		_destroy: function () {
			clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
		},
		_setOption: function (e, t) {
			this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), "disabled" === e && t && this.xhr && this.xhr.abort()
		},
		_appendTo: function () {
			var t = this.options.appendTo;
			return t && (t = t.jquery || t.nodeType ? e(t) : this.document.find(t).eq(0)), t || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
		},
		_initSource: function () {
			var t, i, s = this;
			e.isArray(this.options.source) ? (t = this.options.source, this.source = function (i, s) {
				s(e.ui.autocomplete.filter(t, i.term))
			}) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (t, n) {
				s.xhr && s.xhr.abort(), s.xhr = e.ajax({
					url: i,
					data: t,
					dataType: "json",
					success: function (e) {
						n(e)
					},
					error: function () {
						n([])
					}
				})
			}) : this.source = this.options.source
		},
		_searchTimeout: function (e) {
			clearTimeout(this.searching), this.searching = this._delay(function () {
				this.term !== this._value() && (this.selectedItem = null, this.search(null, e))
			}, this.options.delay)
		},
		search: function (e, t) {
			return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : this._trigger("search", t) !== !1 ? this._search(e) : undefined
		},
		_search: function (e) {
			this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
				term: e
			}, this._response())
		},
		_response: function () {
			var e = this,
				i = ++t;
			return function (s) {
				i === t && e.__response(s), e.pending--, e.pending || e.element.removeClass("ui-autocomplete-loading")
			}
		},
		__response: function (e) {
			e && (e = this._normalize(e)), this._trigger("response", null, {
				content: e
			}), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
		},
		close: function (e) {
			this.cancelSearch = !0, this._close(e)
		},
		_close: function (e) {
			this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
		},
		_change: function (e) {
			this.previous !== this._value() && this._trigger("change", e, {
				item: this.selectedItem
			})
		},
		_normalize: function (t) {
			return t.length && t[0].label && t[0].value ? t : e.map(t, function (t) {
				return "string" == typeof t ? {
					label: t,
					value: t
				} : e.extend({
					label: t.label || t.value,
					value: t.value || t.label
				}, t)
			})
		},
		_suggest: function (t) {
			var i = this.menu.element.empty();
			this._renderMenu(i, t), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(e.extend({ of: this.element
			}, this.options.position)), this.options.autoFocus && this.menu.next()
		},
		_resizeMenu: function () {
			var e = this.menu.element;
			e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
		},
		_renderMenu: function (t, i) {
			var s = this;
			e.each(i, function (e, i) {
				s._renderItemData(t, i)
			})
		},
		_renderItemData: function (e, t) {
			return this._renderItem(e, t).data("ui-autocomplete-item", t)
		},
		_renderItem: function (t, i) {
			return e("<li>").append(e("<a>").text(i.label)).appendTo(t)
		},
		_move: function (e, t) {
			return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this._value(this.term), this.menu.blur(), undefined) : (this.menu[e](t), undefined) : (this.search(null, t), undefined)
		},
		widget: function () {
			return this.menu.element
		},
		_value: function () {
			return this.valueMethod.apply(this.element, arguments)
		},
		_keyEvent: function (e, t) {
			(!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t), t.preventDefault())
		}
	}), e.extend(e.ui.autocomplete, {
		escapeRegex: function (e) {
			return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
		},
		filter: function (t, i) {
			var s = RegExp(e.ui.autocomplete.escapeRegex(i), "i");
			return e.grep(t, function (e) {
				return s.test(e.label || e.value || e)
			})
		}
	}), e.widget("ui.autocomplete", e.ui.autocomplete, {
		options: {
			messages: {
				noResults: "No search results.",
				results: function (e) {
					return e + (e > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
				}
			}
		},
		__response: function (e) {
			var t;
			this._superApply(arguments), this.options.disabled || this.cancelSearch || (t = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.text(t))
		}
	})
})(jQuery);
(function (t) {
	var e, i, s, n, a = "ui-button ui-widget ui-state-default ui-corner-all",
		o = "ui-state-hover ui-state-active ",
		r = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
		h = function () {
			var e = t(this).find(":ui-button");
			setTimeout(function () {
				e.button("refresh")
			}, 1)
		},
		l = function (e) {
			var i = e.name,
				s = e.form,
				n = t([]);
			return i && (i = i.replace(/'/g, "\\'"), n = s ? t(s).find("[name='" + i + "']") : t("[name='" + i + "']", e.ownerDocument).filter(function () {
				return !this.form
			})), n
		};
	t.widget("ui.button", {
		version: "1.10.2",
		defaultElement: "<button>",
		options: {
			disabled: null,
			text: !0,
			label: null,
			icons: {
				primary: null,
				secondary: null
			}
		},
		_create: function () {
			this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, h), "boolean" != typeof this.options.disabled ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled), this._determineButtonType(), this.hasTitle = !!this.buttonElement.attr("title");
			var o = this,
				r = this.options,
				c = "checkbox" === this.type || "radio" === this.type,
				u = c ? "" : "ui-state-active",
				d = "ui-state-focus";
			null === r.label && (r.label = "input" === this.type ? this.buttonElement.val() : this.buttonElement.html()), this._hoverable(this.buttonElement), this.buttonElement.addClass(a).attr("role", "button").bind("mouseenter" + this.eventNamespace, function () {
				r.disabled || this === e && t(this).addClass("ui-state-active")
			}).bind("mouseleave" + this.eventNamespace, function () {
				r.disabled || t(this).removeClass(u)
			}).bind("click" + this.eventNamespace, function (t) {
				r.disabled && (t.preventDefault(), t.stopImmediatePropagation())
			}), this.element.bind("focus" + this.eventNamespace, function () {
				o.buttonElement.addClass(d)
			}).bind("blur" + this.eventNamespace, function () {
				o.buttonElement.removeClass(d)
			}), c && (this.element.bind("change" + this.eventNamespace, function () {
				n || o.refresh()
			}), this.buttonElement.bind("mousedown" + this.eventNamespace, function (t) {
				r.disabled || (n = !1, i = t.pageX, s = t.pageY)
			}).bind("mouseup" + this.eventNamespace, function (t) {
				r.disabled || (i !== t.pageX || s !== t.pageY) && (n = !0)
			})), "checkbox" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
				return r.disabled || n ? !1 : undefined
			}) : "radio" === this.type ? this.buttonElement.bind("click" + this.eventNamespace, function () {
				if (r.disabled || n) return !1;
				t(this).addClass("ui-state-active"), o.buttonElement.attr("aria-pressed", "true");
				var e = o.element[0];
				l(e).not(e).map(function () {
					return t(this).button("widget")[0]
				}).removeClass("ui-state-active").attr("aria-pressed", "false")
			}) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function () {
				return r.disabled ? !1 : (t(this).addClass("ui-state-active"), e = this, o.document.one("mouseup", function () {
					e = null
				}), undefined)
			}).bind("mouseup" + this.eventNamespace, function () {
				return r.disabled ? !1 : (t(this).removeClass("ui-state-active"), undefined)
			}).bind("keydown" + this.eventNamespace, function (e) {
				return r.disabled ? !1 : ((e.keyCode === t.ui.keyCode.SPACE || e.keyCode === t.ui.keyCode.ENTER) && t(this).addClass("ui-state-active"), undefined)
			}).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function () {
				t(this).removeClass("ui-state-active")
			}), this.buttonElement.is("a") && this.buttonElement.keyup(function (e) {
				e.keyCode === t.ui.keyCode.SPACE && t(this).click()
			})), this._setOption("disabled", r.disabled), this._resetButton()
		},
		_determineButtonType: function () {
			var t, e, i;
			this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button", "checkbox" === this.type || "radio" === this.type ? (t = this.element.parents().last(), e = "label[for='" + this.element.attr("id") + "']", this.buttonElement = t.find(e), this.buttonElement.length || (t = t.length ? t.siblings() : this.element.siblings(), this.buttonElement = t.filter(e), this.buttonElement.length || (this.buttonElement = t.find(e))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
		},
		widget: function () {
			return this.buttonElement
		},
		_destroy: function () {
			this.element.removeClass("ui-helper-hidden-accessible"), this.buttonElement.removeClass(a + " " + o + " " + r).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html()), this.hasTitle || this.buttonElement.removeAttr("title")
		},
		_setOption: function (t, e) {
			return this._super(t, e), "disabled" === t ? (e ? this.element.prop("disabled", !0) : this.element.prop("disabled", !1), undefined) : (this._resetButton(), undefined)
		},
		refresh: function () {
			var e = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
			e !== this.options.disabled && this._setOption("disabled", e), "radio" === this.type ? l(this.element[0]).each(function () {
				t(this).is(":checked") ? t(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : t(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
			}) : "checkbox" === this.type && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
		},
		_resetButton: function () {
			if ("input" === this.type) return this.options.label && this.element.val(this.options.label), undefined;
			var e = this.buttonElement.removeClass(r),
				i = t("<span></span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(e.empty()).text(),
				s = this.options.icons,
				n = s.primary && s.secondary,
				a = [];
			s.primary || s.secondary ? (this.options.text && a.push("ui-button-text-icon" + (n ? "s" : s.primary ? "-primary" : "-secondary")), s.primary && e.prepend("<span class='ui-button-icon-primary ui-icon " + s.primary + "'></span>"), s.secondary && e.append("<span class='ui-button-icon-secondary ui-icon " + s.secondary + "'></span>"), this.options.text || (a.push(n ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || e.attr("title", t.trim(i)))) : a.push("ui-button-text-only"), e.addClass(a.join(" "))
		}
	}), t.widget("ui.buttonset", {
		version: "1.10.2",
		options: {
			items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
		},
		_create: function () {
			this.element.addClass("ui-buttonset")
		},
		_init: function () {
			this.refresh()
		},
		_setOption: function (t, e) {
			"disabled" === t && this.buttons.button("option", t, e), this._super(t, e)
		},
		refresh: function () {
			var e = "rtl" === this.element.css("direction");
			this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function () {
				return t(this).button("widget")[0]
			}).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(e ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(e ? "ui-corner-left" : "ui-corner-right").end().end()
		},
		_destroy: function () {
			this.element.removeClass("ui-buttonset"), this.buttons.map(function () {
				return t(this).button("widget")[0]
			}).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
		}
	})
})(jQuery);
(function (t, e) {
	function i() {
		this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
			closeText: "Done",
			prevText: "Prev",
			nextText: "Next",
			currentText: "Today",
			monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
			weekHeader: "Wk",
			dateFormat: "mm/dd/yy",
			firstDay: 0,
			isRTL: !1,
			showMonthAfterYear: !1,
			yearSuffix: ""
		}, this._defaults = {
			showOn: "focus",
			showAnim: "fadeIn",
			showOptions: {},
			defaultDate: null,
			appendText: "",
			buttonText: "...",
			buttonImage: "",
			buttonImageOnly: !1,
			hideIfNoPrevNext: !1,
			navigationAsDateFormat: !1,
			gotoCurrent: !1,
			changeMonth: !1,
			changeYear: !1,
			yearRange: "c-10:c+10",
			showOtherMonths: !1,
			selectOtherMonths: !1,
			showWeek: !1,
			calculateWeek: this.iso8601Week,
			shortYearCutoff: "+10",
			minDate: null,
			maxDate: null,
			duration: "fast",
			beforeShowDay: null,
			beforeShow: null,
			onSelect: null,
			onChangeMonthYear: null,
			onClose: null,
			numberOfMonths: 1,
			showCurrentAtPos: 0,
			stepMonths: 1,
			stepBigMonths: 12,
			altField: "",
			altFormat: "",
			constrainInput: !0,
			showButtonPanel: !1,
			autoSize: !1,
			disabled: !1
		}, t.extend(this._defaults, this.regional[""]), this.dpDiv = s(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
	}

	function s(e) {
		var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
		return e.delegate(i, "mouseout", function () {
			t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
		}).delegate(i, "mouseover", function () {
			t.datepicker._isDisabledDatepicker(a.inline ? e.parent()[0] : a.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
		})
	}

	function n(e, i) {
		t.extend(e, i);
		for (var s in i) null == i[s] && (e[s] = i[s]);
		return e
	}
	t.extend(t.ui, {
		datepicker: {
			version: "1.10.2"
		}
	});
	var a, r = "datepicker",
		o = (new Date).getTime();
	t.extend(i.prototype, {
		markerClassName: "hasDatepicker",
		maxRows: 4,
		_widgetDatepicker: function () {
			return this.dpDiv
		},
		setDefaults: function (t) {
			return n(this._defaults, t || {}), this
		},
		_attachDatepicker: function (e, i) {
			var s, n, a;
			s = e.nodeName.toLowerCase(), n = "div" === s || "span" === s, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), a = this._newInst(t(e), n), a.settings = t.extend({}, i || {}), "input" === s ? this._connectDatepicker(e, a) : n && this._inlineDatepicker(e, a)
		},
		_newInst: function (e, i) {
			var n = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
			return {
				id: n,
				input: e,
				selectedDay: 0,
				selectedMonth: 0,
				selectedYear: 0,
				drawMonth: 0,
				drawYear: 0,
				inline: i,
				dpDiv: i ? s(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
			}
		},
		_connectDatepicker: function (e, i) {
			var s = t(e);
			i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), t.data(e, r, i), i.settings.disabled && this._disableDatepicker(e))
		},
		_attachments: function (e, i) {
			var s, n, a, r = this._get(i, "appendText"),
				o = this._get(i, "isRTL");
			i.append && i.append.remove(), r && (i.append = t("<span class='" + this._appendClass + "'>" + r + "</span>"), e[o ? "before" : "after"](i.append)), e.unbind("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && e.focus(this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), a = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
				src: a,
				alt: n,
				title: n
			}) : t("<button type='button'></button>").addClass(this._triggerClass).html(a ? t("<img/>").attr({
				src: a,
				alt: n,
				title: n
			}) : n)), e[o ? "before" : "after"](i.trigger), i.trigger.click(function () {
				return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
			}))
		},
		_autoSize: function (t) {
			if (this._get(t, "autoSize") && !t.inline) {
				var e, i, s, n, a = new Date(2009, 11, 20),
					r = this._get(t, "dateFormat");
				r.match(/[DM]/) && (e = function (t) {
					for (i = 0, s = 0, n = 0; t.length > n; n++) t[n].length > i && (i = t[n].length, s = n);
					return s
				}, a.setMonth(e(this._get(t, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), a.setDate(e(this._get(t, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - a.getDay())), t.input.attr("size", this._formatDate(t, a).length)
			}
		},
		_inlineDatepicker: function (e, i) {
			var s = t(e);
			s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, r, i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
		},
		_dialogDatepicker: function (e, i, s, a, o) {
			var h, l, c, u, d, p = this._dialogInst;
			return p || (this.uuid += 1, h = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + h + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), t("body").append(this._dialogInput), p = this._dialogInst = this._newInst(this._dialogInput, !1), p.settings = {}, t.data(this._dialogInput[0], r, p)), n(p.settings, a || {}), i = i && i.constructor === Date ? this._formatDate(p, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (l = document.documentElement.clientWidth, c = document.documentElement.clientHeight, u = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + u, c / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), p.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], r, p), this
		},
		_destroyDatepicker: function (e) {
			var i, s = t(e),
				n = t.data(e, r);
			s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, r), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty())
		},
		_enableDatepicker: function (e) {
			var i, s, n = t(e),
				a = t.data(e, r);
			n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, a.trigger.filter("button").each(function () {
				this.disabled = !1
			}).end().filter("img").css({
				opacity: "1.0",
				cursor: ""
			})) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
				return t === e ? null : t
			}))
		},
		_disableDatepicker: function (e) {
			var i, s, n = t(e),
				a = t.data(e, r);
			n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, a.trigger.filter("button").each(function () {
				this.disabled = !0
			}).end().filter("img").css({
				opacity: "0.5",
				cursor: "default"
			})) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
				return t === e ? null : t
			}), this._disabledInputs[this._disabledInputs.length] = e)
		},
		_isDisabledDatepicker: function (t) {
			if (!t) return !1;
			for (var e = 0; this._disabledInputs.length > e; e++)
				if (this._disabledInputs[e] === t) return !0;
			return !1
		},
		_getInst: function (e) {
			try {
				return t.data(e, r)
			} catch (i) {
				throw "Missing instance data for this datepicker"
			}
		},
		_optionDatepicker: function (i, s, a) {
			var r, o, h, l, c = this._getInst(i);
			return 2 === arguments.length && "string" == typeof s ? "defaults" === s ? t.extend({}, t.datepicker._defaults) : c ? "all" === s ? t.extend({}, c.settings) : this._get(c, s) : null : (r = s || {}, "string" == typeof s && (r = {}, r[s] = a), c && (this._curInst === c && this._hideDatepicker(), o = this._getDateDatepicker(i, !0), h = this._getMinMaxDate(c, "min"), l = this._getMinMaxDate(c, "max"), n(c.settings, r), null !== h && r.dateFormat !== e && r.minDate === e && (c.settings.minDate = this._formatDate(c, h)), null !== l && r.dateFormat !== e && r.maxDate === e && (c.settings.maxDate = this._formatDate(c, l)), "disabled" in r && (r.disabled ? this._disableDatepicker(i) : this._enableDatepicker(i)), this._attachments(t(i), c), this._autoSize(c), this._setDate(c, o), this._updateAlternate(c), this._updateDatepicker(c)), e)
		},
		_changeDatepicker: function (t, e, i) {
			this._optionDatepicker(t, e, i)
		},
		_refreshDatepicker: function (t) {
			var e = this._getInst(t);
			e && this._updateDatepicker(e)
		},
		_setDateDatepicker: function (t, e) {
			var i = this._getInst(t);
			i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
		},
		_getDateDatepicker: function (t, e) {
			var i = this._getInst(t);
			return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
		},
		_doKeyDown: function (e) {
			var i, s, n, a = t.datepicker._getInst(e.target),
				r = !0,
				o = a.dpDiv.is(".ui-datepicker-rtl");
			if (a._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
				case 9:
					t.datepicker._hideDatepicker(), r = !1;
					break;
				case 13:
					return n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", a.dpDiv), n[0] && t.datepicker._selectDay(e.target, a.selectedMonth, a.selectedYear, n[0]), i = t.datepicker._get(a, "onSelect"), i ? (s = t.datepicker._formatDate(a), i.apply(a.input ? a.input[0] : null, [s, a])) : t.datepicker._hideDatepicker(), !1;
				case 27:
					t.datepicker._hideDatepicker();
					break;
				case 33:
					t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(a, "stepBigMonths") : -t.datepicker._get(a, "stepMonths"), "M");
					break;
				case 34:
					t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(a, "stepBigMonths") : +t.datepicker._get(a, "stepMonths"), "M");
					break;
				case 35:
					(e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), r = e.ctrlKey || e.metaKey;
					break;
				case 36:
					(e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), r = e.ctrlKey || e.metaKey;
					break;
				case 37:
					(e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, o ? 1 : -1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(a, "stepBigMonths") : -t.datepicker._get(a, "stepMonths"), "M");
					break;
				case 38:
					(e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), r = e.ctrlKey || e.metaKey;
					break;
				case 39:
					(e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, o ? -1 : 1, "D"), r = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(a, "stepBigMonths") : +t.datepicker._get(a, "stepMonths"), "M");
					break;
				case 40:
					(e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), r = e.ctrlKey || e.metaKey;
					break;
				default:
					r = !1
			} else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : r = !1;
			r && (e.preventDefault(), e.stopPropagation())
		},
		_doKeyPress: function (i) {
			var s, n, a = t.datepicker._getInst(i.target);
			return t.datepicker._get(a, "constrainInput") ? (s = t.datepicker._possibleChars(t.datepicker._get(a, "dateFormat")), n = String.fromCharCode(null == i.charCode ? i.keyCode : i.charCode), i.ctrlKey || i.metaKey || " " > n || !s || s.indexOf(n) > -1) : e
		},
		_doKeyUp: function (e) {
			var i, s = t.datepicker._getInst(e.target);
			if (s.input.val() !== s.lastVal) try {
				i = t.datepicker.parseDate(t.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, t.datepicker._getFormatConfig(s)), i && (t.datepicker._setDateFromField(s), t.datepicker._updateAlternate(s), t.datepicker._updateDatepicker(s))
			} catch (n) {}
			return !0
		},
		_showDatepicker: function (e) {
			if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
				var i, s, a, r, o, h, l;
				i = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== i && (t.datepicker._curInst.dpDiv.stop(!0, !0), i && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), s = t.datepicker._get(i, "beforeShow"), a = s ? s.apply(e, [e, i]) : {}, a !== !1 && (n(i.settings, a), i.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(i), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), r = !1, t(e).parents().each(function () {
					return r |= "fixed" === t(this).css("position"), !r
				}), o = {
					left: t.datepicker._pos[0],
					top: t.datepicker._pos[1]
				}, t.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
					position: "absolute",
					display: "block",
					top: "-1000px"
				}), t.datepicker._updateDatepicker(i), o = t.datepicker._checkOffset(i, o, r), i.dpDiv.css({
					position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute",
					display: "none",
					left: o.left + "px",
					top: o.top + "px"
				}), i.inline || (h = t.datepicker._get(i, "showAnim"), l = t.datepicker._get(i, "duration"), i.dpDiv.zIndex(t(e).zIndex() + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[h] ? i.dpDiv.show(h, t.datepicker._get(i, "showOptions"), l) : i.dpDiv[h || "show"](h ? l : null), i.input.is(":visible") && !i.input.is(":disabled") && i.input.focus(), t.datepicker._curInst = i))
			}
		},
		_updateDatepicker: function (e) {
			this.maxRows = 4, a = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e), e.dpDiv.find("." + this._dayOverClass + " a").mouseover();
			var i, s = this._getNumberOfMonths(e),
				n = s[1],
				r = 17;
			e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", r * n + "em"), e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && e.input && e.input.is(":visible") && !e.input.is(":disabled") && e.input[0] !== document.activeElement && e.input.focus(), e.yearshtml && (i = e.yearshtml, setTimeout(function () {
				i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
			}, 0))
		},
		_getBorders: function (t) {
			var e = function (t) {
				return {
					thin: 1,
					medium: 2,
					thick: 3
				} [t] || t
			};
			return [parseFloat(e(t.css("border-left-width"))), parseFloat(e(t.css("border-top-width")))]
		},
		_checkOffset: function (e, i, s) {
			var n = e.dpDiv.outerWidth(),
				a = e.dpDiv.outerHeight(),
				r = e.input ? e.input.outerWidth() : 0,
				o = e.input ? e.input.outerHeight() : 0,
				h = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()),
				l = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
			return i.left -= this._get(e, "isRTL") ? n - r : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= s && i.top === e.input.offset().top + o ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > h && h > n ? Math.abs(i.left + n - h) : 0), i.top -= Math.min(i.top, i.top + a > l && l > a ? Math.abs(a + o) : 0), i
		},
		_findPos: function (e) {
			for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[n ? "previousSibling" : "nextSibling"];
			return i = t(e).offset(), [i.left, i.top]
		},
		_hideDatepicker: function (e) {
			var i, s, n, a, o = this._curInst;
			!o || e && o !== t.data(e, r) || this._datepickerShowing && (i = this._get(o, "showAnim"), s = this._get(o, "duration"), n = function () {
				t.datepicker._tidyDialog(o)
			}, t.effects && (t.effects.effect[i] || t.effects[i]) ? o.dpDiv.hide(i, t.datepicker._get(o, "showOptions"), s, n) : o.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, a = this._get(o, "onClose"), a && a.apply(o.input ? o.input[0] : null, [o.input ? o.input.val() : "", o]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
				position: "absolute",
				left: "0",
				top: "-100px"
			}), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
		},
		_tidyDialog: function (t) {
			t.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
		},
		_checkExternalClick: function (e) {
			if (t.datepicker._curInst) {
				var i = t(e.target),
					s = t.datepicker._getInst(i[0]);
				(i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker()
			}
		},
		_adjustDate: function (e, i, s) {
			var n = t(e),
				a = this._getInst(n[0]);
			this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(a, i + ("M" === s ? this._get(a, "showCurrentAtPos") : 0), s), this._updateDatepicker(a))
		},
		_gotoToday: function (e) {
			var i, s = t(e),
				n = this._getInst(s[0]);
			this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date, n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s)
		},
		_selectMonthYear: function (e, i, s) {
			var n = t(e),
				a = this._getInst(n[0]);
			a["selected" + ("M" === s ? "Month" : "Year")] = a["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(a), this._adjustDate(n)
		},
		_selectDay: function (e, i, s, n) {
			var a, r = t(e);
			t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || (a = this._getInst(r[0]), a.selectedDay = a.currentDay = t("a", n).html(), a.selectedMonth = a.currentMonth = i, a.selectedYear = a.currentYear = s, this._selectDate(e, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear)))
		},
		_clearDate: function (e) {
			var i = t(e);
			this._selectDate(i, "")
		},
		_selectDate: function (e, i) {
			var s, n = t(e),
				a = this._getInst(n[0]);
			i = null != i ? i : this._formatDate(a), a.input && a.input.val(i), this._updateAlternate(a), s = this._get(a, "onSelect"), s ? s.apply(a.input ? a.input[0] : null, [i, a]) : a.input && a.input.trigger("change"), a.inline ? this._updateDatepicker(a) : (this._hideDatepicker(), this._lastInput = a.input[0], "object" != typeof a.input[0] && a.input.focus(), this._lastInput = null)
		},
		_updateAlternate: function (e) {
			var i, s, n, a = this._get(e, "altField");
			a && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), n = this.formatDate(i, s, this._getFormatConfig(e)), t(a).each(function () {
				t(this).val(n)
			}))
		},
		noWeekends: function (t) {
			var e = t.getDay();
			return [e > 0 && 6 > e, ""]
		},
		iso8601Week: function (t) {
			var e, i = new Date(t.getTime());
			return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
		},
		parseDate: function (i, s, n) {
			if (null == i || null == s) throw "Invalid arguments";
			if (s = "object" == typeof s ? "" + s : s + "", "" === s) return null;
			var a, r, o, h, l = 0,
				c = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
				u = "string" != typeof c ? c : (new Date).getFullYear() % 100 + parseInt(c, 10),
				d = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
				p = (n ? n.dayNames : null) || this._defaults.dayNames,
				f = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
				m = (n ? n.monthNames : null) || this._defaults.monthNames,
				g = -1,
				v = -1,
				_ = -1,
				b = -1,
				y = !1,
				w = function (t) {
					var e = i.length > a + 1 && i.charAt(a + 1) === t;
					return e && a++, e
				},
				k = function (t) {
					var e = w(t),
						i = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
						n = RegExp("^\\d{1," + i + "}"),
						a = s.substring(l).match(n);
					if (!a) throw "Missing number at position " + l;
					return l += a[0].length, parseInt(a[0], 10)
				},
				x = function (i, n, a) {
					var r = -1,
						o = t.map(w(i) ? a : n, function (t, e) {
							return [[e, t]]
						}).sort(function (t, e) {
							return -(t[1].length - e[1].length)
						});
					if (t.each(o, function (t, i) {
							var n = i[1];
							return s.substr(l, n.length).toLowerCase() === n.toLowerCase() ? (r = i[0], l += n.length, !1) : e
						}), -1 !== r) return r + 1;
					throw "Unknown name at position " + l
				},
				D = function () {
					if (s.charAt(l) !== i.charAt(a)) throw "Unexpected literal at position " + l;
					l++
				};
			for (a = 0; i.length > a; a++)
				if (y) "'" !== i.charAt(a) || w("'") ? D() : y = !1;
				else switch (i.charAt(a)) {
					case "d":
						_ = k("d");
						break;
					case "D":
						x("D", d, p);
						break;
					case "o":
						b = k("o");
						break;
					case "m":
						v = k("m");
						break;
					case "M":
						v = x("M", f, m);
						break;
					case "y":
						g = k("y");
						break;
					case "@":
						h = new Date(k("@")), g = h.getFullYear(), v = h.getMonth() + 1, _ = h.getDate();
						break;
					case "!":
						h = new Date((k("!") - this._ticksTo1970) / 1e4), g = h.getFullYear(), v = h.getMonth() + 1, _ = h.getDate();
						break;
					case "'":
						w("'") ? D() : y = !0;
						break;
					default:
						D()
				}
			if (s.length > l && (o = s.substr(l), !/^\s+/.test(o))) throw "Extra/unparsed characters found in date: " + o;
			if (-1 === g ? g = (new Date).getFullYear() : 100 > g && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (u >= g ? 0 : -100)), b > -1)
				for (v = 1, _ = b;;) {
					if (r = this._getDaysInMonth(g, v - 1), r >= _) break;
					v++, _ -= r
				}
			if (h = this._daylightSavingAdjust(new Date(g, v - 1, _)), h.getFullYear() !== g || h.getMonth() + 1 !== v || h.getDate() !== _) throw "Invalid date";
			return h
		},
		ATOM: "yy-mm-dd",
		COOKIE: "D, dd M yy",
		ISO_8601: "yy-mm-dd",
		RFC_822: "D, d M y",
		RFC_850: "DD, dd-M-y",
		RFC_1036: "D, d M y",
		RFC_1123: "D, d M yy",
		RFC_2822: "D, d M yy",
		RSS: "D, d M y",
		TICKS: "!",
		TIMESTAMP: "@",
		W3C: "yy-mm-dd",
		_ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
		formatDate: function (t, e, i) {
			if (!e) return "";
			var s, n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
				a = (i ? i.dayNames : null) || this._defaults.dayNames,
				r = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
				o = (i ? i.monthNames : null) || this._defaults.monthNames,
				h = function (e) {
					var i = t.length > s + 1 && t.charAt(s + 1) === e;
					return i && s++, i
				},
				l = function (t, e, i) {
					var s = "" + e;
					if (h(t))
						for (; i > s.length;) s = "0" + s;
					return s
				},
				c = function (t, e, i, s) {
					return h(t) ? s[e] : i[e]
				},
				u = "",
				d = !1;
			if (e)
				for (s = 0; t.length > s; s++)
					if (d) "'" !== t.charAt(s) || h("'") ? u += t.charAt(s) : d = !1;
					else switch (t.charAt(s)) {
						case "d":
							u += l("d", e.getDate(), 2);
							break;
						case "D":
							u += c("D", e.getDay(), n, a);
							break;
						case "o":
							u += l("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
							break;
						case "m":
							u += l("m", e.getMonth() + 1, 2);
							break;
						case "M":
							u += c("M", e.getMonth(), r, o);
							break;
						case "y":
							u += h("y") ? e.getFullYear() : (10 > e.getYear() % 100 ? "0" : "") + e.getYear() % 100;
							break;
						case "@":
							u += e.getTime();
							break;
						case "!":
							u += 1e4 * e.getTime() + this._ticksTo1970;
							break;
						case "'":
							h("'") ? u += "'" : d = !0;
							break;
						default:
							u += t.charAt(s)
					}
			return u
		},
		_possibleChars: function (t) {
			var e, i = "",
				s = !1,
				n = function (i) {
					var s = t.length > e + 1 && t.charAt(e + 1) === i;
					return s && e++, s
				};
			for (e = 0; t.length > e; e++)
				if (s) "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1;
				else switch (t.charAt(e)) {
					case "d":
					case "m":
					case "y":
					case "@":
						i += "0123456789";
						break;
					case "D":
					case "M":
						return null;
					case "'":
						n("'") ? i += "'" : s = !0;
						break;
					default:
						i += t.charAt(e)
				}
			return i
		},
		_get: function (t, i) {
			return t.settings[i] !== e ? t.settings[i] : this._defaults[i]
		},
		_setDateFromField: function (t, e) {
			if (t.input.val() !== t.lastVal) {
				var i = this._get(t, "dateFormat"),
					s = t.lastVal = t.input ? t.input.val() : null,
					n = this._getDefaultDate(t),
					a = n,
					r = this._getFormatConfig(t);
				try {
					a = this.parseDate(i, s, r) || n
				} catch (o) {
					s = e ? "" : s
				}
				t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), t.currentDay = s ? a.getDate() : 0, t.currentMonth = s ? a.getMonth() : 0, t.currentYear = s ? a.getFullYear() : 0, this._adjustInstDate(t)
			}
		},
		_getDefaultDate: function (t) {
			return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
		},
		_determineDate: function (e, i, s) {
			var n = function (t) {
					var e = new Date;
					return e.setDate(e.getDate() + t), e
				},
				a = function (i) {
					try {
						return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
					} catch (s) {}
					for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, a = n.getFullYear(), r = n.getMonth(), o = n.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = h.exec(i); l;) {
						switch (l[2] || "d") {
							case "d":
							case "D":
								o += parseInt(l[1], 10);
								break;
							case "w":
							case "W":
								o += 7 * parseInt(l[1], 10);
								break;
							case "m":
							case "M":
								r += parseInt(l[1], 10), o = Math.min(o, t.datepicker._getDaysInMonth(a, r));
								break;
							case "y":
							case "Y":
								a += parseInt(l[1], 10), o = Math.min(o, t.datepicker._getDaysInMonth(a, r))
						}
						l = h.exec(i)
					}
					return new Date(a, r, o)
				},
				r = null == i || "" === i ? s : "string" == typeof i ? a(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());
			return r = r && "Invalid Date" == "" + r ? s : r, r && (r.setHours(0), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0)), this._daylightSavingAdjust(r)
		},
		_daylightSavingAdjust: function (t) {
			return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
		},
		_setDate: function (t, e, i) {
			var s = !e,
				n = t.selectedMonth,
				a = t.selectedYear,
				r = this._restrictMinMax(t, this._determineDate(t, e, new Date));
			t.selectedDay = t.currentDay = r.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = r.getMonth(), t.drawYear = t.selectedYear = t.currentYear = r.getFullYear(), n === t.selectedMonth && a === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t))
		},
		_getDate: function (t) {
			var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
			return e
		},
		_attachHandlers: function (e) {
			var i = this._get(e, "stepMonths"),
				s = "#" + e.id.replace(/\\\\/g, "\\");
			e.dpDiv.find("[data-handler]").map(function () {
				var e = {
					prev: function () {
						window["DP_jQuery_" + o].datepicker._adjustDate(s, -i, "M")
					},
					next: function () {
						window["DP_jQuery_" + o].datepicker._adjustDate(s, +i, "M")
					},
					hide: function () {
						window["DP_jQuery_" + o].datepicker._hideDatepicker()
					},
					today: function () {
						window["DP_jQuery_" + o].datepicker._gotoToday(s)
					},
					selectDay: function () {
						return window["DP_jQuery_" + o].datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
					},
					selectMonth: function () {
						return window["DP_jQuery_" + o].datepicker._selectMonthYear(s, this, "M"), !1
					},
					selectYear: function () {
						return window["DP_jQuery_" + o].datepicker._selectMonthYear(s, this, "Y"), !1
					}
				};
				t(this).bind(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
			})
		},
		_generateHTML: function (t) {
			var e, i, s, n, a, r, o, h, l, c, u, d, p, f, m, g, v, _, b, y, w, k, x, D, T, C, S, M, N, I, P, A, z, H, E, F, O, W, j, R = new Date,
				L = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())),
				Y = this._get(t, "isRTL"),
				B = this._get(t, "showButtonPanel"),
				J = this._get(t, "hideIfNoPrevNext"),
				Q = this._get(t, "navigationAsDateFormat"),
				K = this._getNumberOfMonths(t),
				V = this._get(t, "showCurrentAtPos"),
				U = this._get(t, "stepMonths"),
				q = 1 !== K[0] || 1 !== K[1],
				X = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
				G = this._getMinMaxDate(t, "min"),
				$ = this._getMinMaxDate(t, "max"),
				Z = t.drawMonth - V,
				te = t.drawYear;
			if (0 > Z && (Z += 12, te--), $)
				for (e = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - K[0] * K[1] + 1, $.getDate())), e = G && G > e ? G : e; this._daylightSavingAdjust(new Date(te, Z, 1)) > e;) Z--, 0 > Z && (Z = 11, te--);
			for (t.drawMonth = Z, t.drawYear = te, i = this._get(t, "prevText"), i = Q ? this.formatDate(i, this._daylightSavingAdjust(new Date(te, Z - U, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, te, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>" : J ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = Q ? this.formatDate(n, this._daylightSavingAdjust(new Date(te, Z + U, 1)), this._getFormatConfig(t)) : n, a = this._canAdjustMonth(t, 1, te, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : J ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>", r = this._get(t, "currentText"), o = this._get(t, "gotoCurrent") && t.currentDay ? X : L, r = Q ? this.formatDate(r, o, this._getFormatConfig(t)) : r, h = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", l = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? h : "") + (this._isInRange(t, o) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (Y ? "" : h) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), m = this._get(t, "monthNamesShort"), g = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), _ = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", k = 0; K[0] > k; k++) {
				for (x = "", this.maxRows = 4, D = 0; K[1] > D; D++) {
					if (T = this._daylightSavingAdjust(new Date(te, Z, t.selectedDay)), C = " ui-corner-all", S = "", q) {
						if (S += "<div class='ui-datepicker-group", K[1] > 1) switch (D) {
							case 0:
								S += " ui-datepicker-group-first", C = " ui-corner-" + (Y ? "right" : "left");
								break;
							case K[1] - 1:
								S += " ui-datepicker-group-last", C = " ui-corner-" + (Y ? "left" : "right");
								break;
							default:
								S += " ui-datepicker-group-middle", C = ""
						}
						S += "'>"
					}
					for (S += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + C + "'>" + (/all|left/.test(C) && 0 === k ? Y ? a : s : "") + (/all|right/.test(C) && 0 === k ? Y ? s : a : "") + this._generateMonthYearHeader(t, Z, te, G, $, k > 0 || D > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", M = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) N = (w + c) % 7, M += "<th" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + d[N] + "'>" + p[N] + "</span></th>";
					for (S += M + "</tr></thead><tbody>", I = this._getDaysInMonth(te, Z), te === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, I)), P = (this._getFirstDayOfMonth(te, Z) - c + 7) % 7, A = Math.ceil((P + I) / 7), z = q ? this.maxRows > A ? this.maxRows : A : A, this.maxRows = z, H = this._daylightSavingAdjust(new Date(te, Z, 1 - P)), E = 0; z > E; E++) {
						for (S += "<tr>", F = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(H) + "</td>" : "", w = 0; 7 > w; w++) O = g ? g.apply(t.input ? t.input[0] : null, [H]) : [!0, ""], W = H.getMonth() !== Z, j = W && !_ || !O[0] || G && G > H || $ && H > $, F += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (W ? " ui-datepicker-other-month" : "") + (H.getTime() === T.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === H.getTime() && b.getTime() === T.getTime() ? " " + this._dayOverClass : "") + (j ? " " + this._unselectableClass + " ui-state-disabled" : "") + (W && !v ? "" : " " + O[1] + (H.getTime() === X.getTime() ? " " + this._currentClass : "") + (H.getTime() === L.getTime() ? " ui-datepicker-today" : "")) + "'" + (W && !v || !O[2] ? "" : " title='" + O[2].replace(/'/g, "&#39;") + "'") + (j ? "" : " data-handler='selectDay' data-event='click' data-month='" + H.getMonth() + "' data-year='" + H.getFullYear() + "'") + ">" + (W && !v ? "&#xa0;" : j ? "<span class='ui-state-default'>" + H.getDate() + "</span>" : "<a class='ui-state-default" + (H.getTime() === L.getTime() ? " ui-state-highlight" : "") + (H.getTime() === X.getTime() ? " ui-state-active" : "") + (W ? " ui-priority-secondary" : "") + "' href='#'>" + H.getDate() + "</a>") + "</td>", H.setDate(H.getDate() + 1), H = this._daylightSavingAdjust(H);
						S += F + "</tr>"
					}
					Z++, Z > 11 && (Z = 0, te++), S += "</tbody></table>" + (q ? "</div>" + (K[0] > 0 && D === K[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += S
				}
				y += x
			}
			return y += l, t._keyEvent = !1, y
		},
		_generateMonthYearHeader: function (t, e, i, s, n, a, r, o) {
			var h, l, c, u, d, p, f, m, g = this._get(t, "changeMonth"),
				v = this._get(t, "changeYear"),
				_ = this._get(t, "showMonthAfterYear"),
				b = "<div class='ui-datepicker-title'>",
				y = "";
			if (a || !g) y += "<span class='ui-datepicker-month'>" + r[e] + "</span>";
			else {
				for (h = s && s.getFullYear() === i, l = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++)(!h || c >= s.getMonth()) && (!l || n.getMonth() >= c) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + o[c] + "</option>");
				y += "</select>"
			}
			if (_ || (b += y + (!a && g && v ? "" : "&#xa0;")), !t.yearshtml)
				if (t.yearshtml = "", a || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>";
				else {
					for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function (t) {
							var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);
							return isNaN(e) ? d : e
						}, f = p(u[0]), m = Math.max(f, p(u[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, m = n ? Math.min(m, n.getFullYear()) : m, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
					t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
				}
			return b += this._get(t, "yearSuffix"), _ && (b += (!a && g && v ? "" : "&#xa0;") + y), b += "</div>"
		},
		_adjustInstDate: function (t, e, i) {
			var s = t.drawYear + ("Y" === i ? e : 0),
				n = t.drawMonth + ("M" === i ? e : 0),
				a = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
				r = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, a)));
			t.selectedDay = r.getDate(), t.drawMonth = t.selectedMonth = r.getMonth(), t.drawYear = t.selectedYear = r.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
		},
		_restrictMinMax: function (t, e) {
			var i = this._getMinMaxDate(t, "min"),
				s = this._getMinMaxDate(t, "max"),
				n = i && i > e ? i : e;
			return s && n > s ? s : n
		},
		_notifyChange: function (t) {
			var e = this._get(t, "onChangeMonthYear");
			e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
		},
		_getNumberOfMonths: function (t) {
			var e = this._get(t, "numberOfMonths");
			return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
		},
		_getMinMaxDate: function (t, e) {
			return this._determineDate(t, this._get(t, e + "Date"), null)
		},
		_getDaysInMonth: function (t, e) {
			return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
		},
		_getFirstDayOfMonth: function (t, e) {
			return new Date(t, e, 1).getDay()
		},
		_canAdjustMonth: function (t, e, i, s) {
			var n = this._getNumberOfMonths(t),
				a = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : n[0] * n[1]), 1));
			return 0 > e && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())), this._isInRange(t, a)
		},
		_isInRange: function (t, e) {
			var i, s, n = this._getMinMaxDate(t, "min"),
				a = this._getMinMaxDate(t, "max"),
				r = null,
				o = null,
				h = this._get(t, "yearRange");
			return h && (i = h.split(":"), s = (new Date).getFullYear(), r = parseInt(i[0], 10), o = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += s), i[1].match(/[+\-].*/) && (o += s)), (!n || e.getTime() >= n.getTime()) && (!a || e.getTime() <= a.getTime()) && (!r || e.getFullYear() >= r) && (!o || o >= e.getFullYear())
		},
		_getFormatConfig: function (t) {
			var e = this._get(t, "shortYearCutoff");
			return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), {
				shortYearCutoff: e,
				dayNamesShort: this._get(t, "dayNamesShort"),
				dayNames: this._get(t, "dayNames"),
				monthNamesShort: this._get(t, "monthNamesShort"),
				monthNames: this._get(t, "monthNames")
			}
		},
		_formatDate: function (t, e, i, s) {
			e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
			var n = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
			return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t))
		}
	}), t.fn.datepicker = function (e) {
		if (!this.length) return this;
		t.datepicker.initialized || (t(document).mousedown(t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
		var i = Array.prototype.slice.call(arguments, 1);
		return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function () {
			"string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
		}) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
	}, t.datepicker = new i, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.10.2", window["DP_jQuery_" + o] = t
})(jQuery);
(function (t) {
	var e = {
			buttons: !0,
			height: !0,
			maxHeight: !0,
			maxWidth: !0,
			minHeight: !0,
			minWidth: !0,
			width: !0
		},
		i = {
			maxHeight: !0,
			maxWidth: !0,
			minHeight: !0,
			minWidth: !0
		};
	t.widget("ui.dialog", {
		version: "1.10.2",
		options: {
			appendTo: "body",
			autoOpen: !0,
			buttons: [],
			closeOnEscape: !0,
			closeText: "close",
			dialogClass: "",
			draggable: !0,
			hide: null,
			height: "auto",
			maxHeight: null,
			maxWidth: null,
			minHeight: 150,
			minWidth: 150,
			modal: !1,
			position: {
				my: "center",
				at: "center",
				of: window,
				collision: "fit",
				using: function (e) {
					var i = t(this).css(e).offset().top;
					0 > i && t(this).css("top", e.top - i)
				}
			},
			resizable: !0,
			show: null,
			title: null,
			width: 300,
			beforeClose: null,
			close: null,
			drag: null,
			dragStart: null,
			dragStop: null,
			focus: null,
			open: null,
			resize: null,
			resizeStart: null,
			resizeStop: null
		},
		_create: function () {
			this.originalCss = {
				display: this.element[0].style.display,
				width: this.element[0].style.width,
				minHeight: this.element[0].style.minHeight,
				maxHeight: this.element[0].style.maxHeight,
				height: this.element[0].style.height
			}, this.originalPosition = {
				parent: this.element.parent(),
				index: this.element.parent().children().index(this.element)
			}, this.originalTitle = this.element.attr("title"), this.options.title = this.options.title || this.originalTitle, this._createWrapper(), this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1
		},
		_init: function () {
			this.options.autoOpen && this.open()
		},
		_appendTo: function () {
			var e = this.options.appendTo;
			return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
		},
		_destroy: function () {
			var t, e = this.originalPosition;
			this._destroyOverlay(), this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach(), this.uiDialog.stop(!0, !0).remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
		},
		widget: function () {
			return this.uiDialog
		},
		disable: t.noop,
		enable: t.noop,
		close: function (e) {
			var i = this;
			this._isOpen && this._trigger("beforeClose", e) !== !1 && (this._isOpen = !1, this._destroyOverlay(), this.opener.filter(":focusable").focus().length || t(this.document[0].activeElement).blur(), this._hide(this.uiDialog, this.options.hide, function () {
				i._trigger("close", e)
			}))
		},
		isOpen: function () {
			return this._isOpen
		},
		moveToTop: function () {
			this._moveToTop()
		},
		_moveToTop: function (t, e) {
			var i = !!this.uiDialog.nextAll(":visible").insertBefore(this.uiDialog).length;
			return i && !e && this._trigger("focus", t), i
		},
		open: function () {
			var e = this;
			return this._isOpen ? (this._moveToTop() && this._focusTabbable(), undefined) : (this._isOpen = !0, this.opener = t(this.document[0].activeElement), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this._show(this.uiDialog, this.options.show, function () {
				e._focusTabbable(), e._trigger("focus")
			}), this._trigger("open"), undefined)
		},
		_focusTabbable: function () {
			var t = this.element.find("[autofocus]");
			t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).focus()
		},
		_keepFocus: function (e) {
			function i() {
				var e = this.document[0].activeElement,
					i = this.uiDialog[0] === e || t.contains(this.uiDialog[0], e);
				i || this._focusTabbable()
			}
			e.preventDefault(), i.call(this), this._delay(i)
		},
		_createWrapper: function () {
			this.uiDialog = t("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
				tabIndex: -1,
				role: "dialog"
			}).appendTo(this._appendTo()), this._on(this.uiDialog, {
				keydown: function (e) {
					if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), this.close(e), undefined;
					if (e.keyCode === t.ui.keyCode.TAB) {
						var i = this.uiDialog.find(":tabbable"),
							s = i.filter(":first"),
							n = i.filter(":last");
						e.target !== n[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== s[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (n.focus(1), e.preventDefault()) : (s.focus(1), e.preventDefault())
					}
				},
				mousedown: function (t) {
					this._moveToTop(t) && this._focusTabbable()
				}
			}), this.element.find("[aria-describedby]").length || this.uiDialog.attr({
				"aria-describedby": this.element.uniqueId().attr("id")
			})
		},
		_createTitlebar: function () {
			var e;
			this.uiDialogTitlebar = t("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog), this._on(this.uiDialogTitlebar, {
				mousedown: function (e) {
					t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
				}
			}), this.uiDialogTitlebarClose = t("<button></button>").button({
				label: this.options.closeText,
				icons: {
					primary: "ui-icon-closethick"
				},
				text: !1
			}).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar), this._on(this.uiDialogTitlebarClose, {
				click: function (t) {
					t.preventDefault(), this.close(t)
				}
			}), e = t("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar), this._title(e), this.uiDialog.attr({
				"aria-labelledby": e.attr("id")
			})
		},
		_title: function (t) {
			this.options.title || t.html("&#160;"), t.text(this.options.title)
		},
		_createButtonPane: function () {
			this.uiDialogButtonPane = t("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane), this._createButtons()
		},
		_createButtons: function () {
			var e = this,
				i = this.options.buttons;
			return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? (this.uiDialog.removeClass("ui-dialog-buttons"), undefined) : (t.each(i, function (i, s) {
				var n, a;
				s = t.isFunction(s) ? {
					click: s,
					text: i
				} : s, s = t.extend({
					type: "button"
				}, s), n = s.click, s.click = function () {
					n.apply(e.element[0], arguments)
				}, a = {
					icons: s.icons,
					text: s.showText
				}, delete s.icons, delete s.showText, t("<button></button>", s).button(a).appendTo(e.uiButtonSet)
			}), this.uiDialog.addClass("ui-dialog-buttons"), this.uiDialogButtonPane.appendTo(this.uiDialog), undefined)
		},
		_makeDraggable: function () {
			function e(t) {
				return {
					position: t.position,
					offset: t.offset
				}
			}
			var i = this,
				s = this.options;
			this.uiDialog.draggable({
				cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
				handle: ".ui-dialog-titlebar",
				containment: "document",
				start: function (s, n) {
					t(this).addClass("ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", s, e(n))
				},
				drag: function (t, s) {
					i._trigger("drag", t, e(s))
				},
				stop: function (n, a) {
					s.position = [a.position.left - i.document.scrollLeft(), a.position.top - i.document.scrollTop()], t(this).removeClass("ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", n, e(a))
				}
			})
		},
		_makeResizable: function () {
			function e(t) {
				return {
					originalPosition: t.originalPosition,
					originalSize: t.originalSize,
					position: t.position,
					size: t.size
				}
			}
			var i = this,
				s = this.options,
				n = s.resizable,
				a = this.uiDialog.css("position"),
				o = "string" == typeof n ? n : "n,e,s,w,se,sw,ne,nw";
			this.uiDialog.resizable({
				cancel: ".ui-dialog-content",
				containment: "document",
				alsoResize: this.element,
				maxWidth: s.maxWidth,
				maxHeight: s.maxHeight,
				minWidth: s.minWidth,
				minHeight: this._minHeight(),
				handles: o,
				start: function (s, n) {
					t(this).addClass("ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, e(n))
				},
				resize: function (t, s) {
					i._trigger("resize", t, e(s))
				},
				stop: function (n, a) {
					s.height = t(this).height(), s.width = t(this).width(), t(this).removeClass("ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", n, e(a))
				}
			}).css("position", a)
		},
		_minHeight: function () {
			var t = this.options;
			return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
		},
		_position: function () {
			var t = this.uiDialog.is(":visible");
			t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
		},
		_setOptions: function (s) {
			var n = this,
				a = !1,
				o = {};
			t.each(s, function (t, s) {
				n._setOption(t, s), t in e && (a = !0), t in i && (o[t] = s)
			}), a && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", o)
		},
		_setOption: function (t, e) {
			var i, s, n = this.uiDialog;
			"dialogClass" === t && n.removeClass(this.options.dialogClass).addClass(e), "disabled" !== t && (this._super(t, e), "appendTo" === t && this.uiDialog.appendTo(this._appendTo()), "buttons" === t && this._createButtons(), "closeText" === t && this.uiDialogTitlebarClose.button({
				label: "" + e
			}), "draggable" === t && (i = n.is(":data(ui-draggable)"), i && !e && n.draggable("destroy"), !i && e && this._makeDraggable()), "position" === t && this._position(), "resizable" === t && (s = n.is(":data(ui-resizable)"), s && !e && n.resizable("destroy"), s && "string" == typeof e && n.resizable("option", "handles", e), s || e === !1 || this._makeResizable()), "title" === t && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
		},
		_size: function () {
			var t, e, i, s = this.options;
			this.element.show().css({
				width: "auto",
				minHeight: 0,
				maxHeight: "none",
				height: 0
			}), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css({
				height: "auto",
				width: s.width
			}).outerHeight(), e = Math.max(0, s.minHeight - t), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none", "auto" === s.height ? this.element.css({
				minHeight: e,
				maxHeight: i,
				height: "auto"
			}) : this.element.height(Math.max(0, s.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
		},
		_blockFrames: function () {
			this.iframeBlocks = this.document.find("iframe").map(function () {
				var e = t(this);
				return t("<div>").css({
					position: "absolute",
					width: e.outerWidth(),
					height: e.outerHeight()
				}).appendTo(e.parent()).offset(e.offset())[0]
			})
		},
		_unblockFrames: function () {
			this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
		},
		_allowInteraction: function (e) {
			return t(e.target).closest(".ui-dialog").length ? !0 : !!t(e.target).closest(".ui-datepicker").length
		},
		_createOverlay: function () {
			if (this.options.modal) {
				var e = this,
					i = this.widgetFullName;
				t.ui.dialog.overlayInstances || this._delay(function () {
					t.ui.dialog.overlayInstances && this.document.bind("focusin.dialog", function (s) {
						e._allowInteraction(s) || (s.preventDefault(), t(".ui-dialog:visible:last .ui-dialog-content").data(i)._focusTabbable())
					})
				}), this.overlay = t("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo()), this._on(this.overlay, {
					mousedown: "_keepFocus"
				}), t.ui.dialog.overlayInstances++
			}
		},
		_destroyOverlay: function () {
			this.options.modal && this.overlay && (t.ui.dialog.overlayInstances--, t.ui.dialog.overlayInstances || this.document.unbind("focusin.dialog"), this.overlay.remove(), this.overlay = null)
		}
	}), t.ui.dialog.overlayInstances = 0, t.uiBackCompat !== !1 && t.widget("ui.dialog", t.ui.dialog, {
		_position: function () {
			var e, i = this.options.position,
				s = [],
				n = [0, 0];
			i ? (("string" == typeof i || "object" == typeof i && "0" in i) && (s = i.split ? i.split(" ") : [i[0], i[1]], 1 === s.length && (s[1] = s[0]), t.each(["left", "top"], function (t, e) {
				+s[t] === s[t] && (n[t] = s[t], s[t] = e)
			}), i = {
				my: s[0] + (0 > n[0] ? n[0] : "+" + n[0]) + " " + s[1] + (0 > n[1] ? n[1] : "+" + n[1]),
				at: s.join(" ")
			}), i = t.extend({}, t.ui.dialog.prototype.options.position, i)) : i = t.ui.dialog.prototype.options.position, e = this.uiDialog.is(":visible"), e || this.uiDialog.show(), this.uiDialog.position(i), e || this.uiDialog.hide()
		}
	})
})(jQuery);
(function (t) {
	t.widget("ui.menu", {
		version: "1.10.2",
		defaultElement: "<ul>",
		delay: 300,
		options: {
			icons: {
				submenu: "ui-icon-carat-1-e"
			},
			menus: "ul",
			position: {
				my: "left top",
				at: "right top"
			},
			role: "menu",
			blur: null,
			focus: null,
			select: null
		},
		_create: function () {
			this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
				role: this.options.role,
				tabIndex: 0
			}).bind("click" + this.eventNamespace, t.proxy(function (t) {
				this.options.disabled && t.preventDefault()
			}, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
				"mousedown .ui-menu-item > a": function (t) {
					t.preventDefault()
				},
				"click .ui-state-disabled > a": function (t) {
					t.preventDefault()
				},
				"click .ui-menu-item:has(a)": function (e) {
					var i = t(e.target).closest(".ui-menu-item");
					!this.mouseHandled && i.not(".ui-state-disabled").length && (this.mouseHandled = !0, this.select(e), i.has(".ui-menu").length ? this.expand(e) : this.element.is(":focus") || (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
				},
				"mouseenter .ui-menu-item": function (e) {
					var i = t(e.currentTarget);
					i.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(e, i)
				},
				mouseleave: "collapseAll",
				"mouseleave .ui-menu": "collapseAll",
				focus: function (t, e) {
					var i = this.active || this.element.children(".ui-menu-item").eq(0);
					e || this.focus(t, i)
				},
				blur: function (e) {
					this._delay(function () {
						t.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
					})
				},
				keydown: "_keydown"
			}), this.refresh(), this._on(this.document, {
				click: function (e) {
					t(e.target).closest(".ui-menu").length || this.collapseAll(e), this.mouseHandled = !1
				}
			})
		},
		_destroy: function () {
			this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function () {
				var e = t(this);
				e.data("ui-menu-submenu-carat") && e.remove()
			}), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
		},
		_keydown: function (e) {
			function i(t) {
				return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
			}
			var s, n, a, o, r, h = !0;
			switch (e.keyCode) {
				case t.ui.keyCode.PAGE_UP:
					this.previousPage(e);
					break;
				case t.ui.keyCode.PAGE_DOWN:
					this.nextPage(e);
					break;
				case t.ui.keyCode.HOME:
					this._move("first", "first", e);
					break;
				case t.ui.keyCode.END:
					this._move("last", "last", e);
					break;
				case t.ui.keyCode.UP:
					this.previous(e);
					break;
				case t.ui.keyCode.DOWN:
					this.next(e);
					break;
				case t.ui.keyCode.LEFT:
					this.collapse(e);
					break;
				case t.ui.keyCode.RIGHT:
					this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
					break;
				case t.ui.keyCode.ENTER:
				case t.ui.keyCode.SPACE:
					this._activate(e);
					break;
				case t.ui.keyCode.ESCAPE:
					this.collapse(e);
					break;
				default:
					h = !1, n = this.previousFilter || "", a = String.fromCharCode(e.keyCode), o = !1, clearTimeout(this.filterTimer), a === n ? o = !0 : a = n + a, r = RegExp("^" + i(a), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function () {
						return r.test(t(this).children("a").text())
					}), s = o && -1 !== s.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : s, s.length || (a = String.fromCharCode(e.keyCode), r = RegExp("^" + i(a), "i"), s = this.activeMenu.children(".ui-menu-item").filter(function () {
						return r.test(t(this).children("a").text())
					})), s.length ? (this.focus(e, s), s.length > 1 ? (this.previousFilter = a, this.filterTimer = this._delay(function () {
						delete this.previousFilter
					}, 1e3)) : delete this.previousFilter) : delete this.previousFilter
			}
			h && e.preventDefault()
		},
		_activate: function (t) {
			this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
		},
		refresh: function () {
			var e, i = this.options.icons.submenu,
				s = this.element.find(this.options.menus);
			s.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
				role: this.options.role,
				"aria-hidden": "true",
				"aria-expanded": "false"
			}).each(function () {
				var e = t(this),
					s = e.prev("a"),
					n = t("<span>").addClass("ui-menu-icon ui-icon " + i).data("ui-menu-submenu-carat", !0);
				s.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", s.attr("id"))
			}), e = s.add(this.element), e.children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
				tabIndex: -1,
				role: this._itemRole()
			}), e.children(":not(.ui-menu-item)").each(function () {
				var e = t(this);
				/[^\-\u2014\u2013\s]/.test(e.text()) || e.addClass("ui-widget-content ui-menu-divider")
			}), e.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
		},
		_itemRole: function () {
			return {
				menu: "menuitem",
				listbox: "option"
			} [this.options.role]
		},
		_setOption: function (t, e) {
			"icons" === t && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(e.submenu), this._super(t, e)
		},
		focus: function (t, e) {
			var i, s;
			this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function () {
				this._close()
			}, this.delay), i = e.children(".ui-menu"), i.length && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {
				item: e
			})
		},
		_scrollIntoView: function (e) {
			var i, s, n, a, o, r;
			this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - i - s, a = this.activeMenu.scrollTop(), o = this.activeMenu.height(), r = e.height(), 0 > n ? this.activeMenu.scrollTop(a + n) : n + r > o && this.activeMenu.scrollTop(a + n - o + r))
		},
		blur: function (t, e) {
			e || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", t, {
				item: this.active
			}))
		},
		_startOpening: function (t) {
			clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function () {
				this._close(), this._open(t)
			}, this.delay))
		},
		_open: function (e) {
			var i = t.extend({ of: this.active
			}, this.options.position);
			clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
		},
		collapseAll: function (e, i) {
			clearTimeout(this.timer), this.timer = this._delay(function () {
				var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
				s.length || (s = this.element), this._close(s), this.blur(e), this.activeMenu = s
			}, this.delay)
		},
		_close: function (t) {
			t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
		},
		collapse: function (t) {
			var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
			e && e.length && (this._close(), this.focus(t, e))
		},
		expand: function (t) {
			var e = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
			e && e.length && (this._open(e.parent()), this._delay(function () {
				this.focus(t, e)
			}))
		},
		next: function (t) {
			this._move("next", "first", t)
		},
		previous: function (t) {
			this._move("prev", "last", t)
		},
		isFirstItem: function () {
			return this.active && !this.active.prevAll(".ui-menu-item").length
		},
		isLastItem: function () {
			return this.active && !this.active.nextAll(".ui-menu-item").length
		},
		_move: function (t, e, i) {
			var s;
			this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.children(".ui-menu-item")[e]()), this.focus(i, s)
		},
		nextPage: function (e) {
			var i, s, n;
			return this.active ? (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
				return i = t(this), 0 > i.offset().top - s - n
			}), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())), undefined) : (this.next(e), undefined)
		},
		previousPage: function (e) {
			var i, s, n;
			return this.active ? (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
				return i = t(this), i.offset().top - s + n > 0
			}), this.focus(e, i)) : this.focus(e, this.activeMenu.children(".ui-menu-item").first())), undefined) : (this.next(e), undefined)
		},
		_hasScroll: function () {
			return this.element.outerHeight() < this.element.prop("scrollHeight")
		},
		select: function (e) {
			this.active = this.active || t(e.target).closest(".ui-menu-item");
			var i = {
				item: this.active
			};
			this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
		}
	})
})(jQuery);
(function (t, e) {
	t.widget("ui.progressbar", {
		version: "1.10.2",
		options: {
			max: 100,
			value: 0,
			change: null,
			complete: null
		},
		min: 0,
		_create: function () {
			this.oldValue = this.options.value = this._constrainedValue(), this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
				role: "progressbar",
				"aria-valuemin": this.min
			}), this.valueDiv = t("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element), this._refreshValue()
		},
		_destroy: function () {
			this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.valueDiv.remove()
		},
		value: function (t) {
			return t === e ? this.options.value : (this.options.value = this._constrainedValue(t), this._refreshValue(), e)
		},
		_constrainedValue: function (t) {
			return t === e && (t = this.options.value), this.indeterminate = t === !1, "number" != typeof t && (t = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, t))
		},
		_setOptions: function (t) {
			var e = t.value;
			delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
		},
		_setOption: function (t, e) {
			"max" === t && (e = Math.max(this.min, e)), this._super(t, e)
		},
		_percentage: function () {
			return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
		},
		_refreshValue: function () {
			var e = this.options.value,
				i = this._percentage();
			this.valueDiv.toggle(this.indeterminate || e > this.min).toggleClass("ui-corner-right", e === this.options.max).width(i.toFixed(0) + "%"), this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv))) : (this.element.attr({
				"aria-valuemax": this.options.max,
				"aria-valuenow": e
			}), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
		}
	})
})(jQuery);
(function (t) {
	var e = 5;
	t.widget("ui.slider", t.ui.mouse, {
		version: "1.10.2",
		widgetEventPrefix: "slide",
		options: {
			animate: !1,
			distance: 0,
			max: 100,
			min: 0,
			orientation: "horizontal",
			range: !1,
			step: 1,
			value: 0,
			values: null,
			change: null,
			slide: null,
			start: null,
			stop: null
		},
		_create: function () {
			this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget" + " ui-widget-content" + " ui-corner-all"), this._refresh(), this._setOption("disabled", this.options.disabled), this._animateOff = !1
		},
		_refresh: function () {
			this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
		},
		_createHandles: function () {
			var e, i, s = this.options,
				n = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
				a = "<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",
				o = [];
			for (i = s.values && s.values.length || 1, n.length > i && (n.slice(i).remove(), n = n.slice(0, i)), e = n.length; i > e; e++) o.push(a);
			this.handles = n.add(t(o.join("")).appendTo(this.element)), this.handle = this.handles.eq(0), this.handles.each(function (e) {
				t(this).data("ui-slider-handle-index", e)
			})
		},
		_createRange: function () {
			var e = this.options,
				i = "";
			e.range ? (e.range === !0 && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
				left: "",
				bottom: ""
			}) : (this.range = t("<div></div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + ("min" === e.range || "max" === e.range ? " ui-slider-range-" + e.range : ""))) : this.range = t([])
		},
		_setupEvents: function () {
			var t = this.handles.add(this.range).filter("a");
			this._off(t), this._on(t, this._handleEvents), this._hoverable(t), this._focusable(t)
		},
		_destroy: function () {
			this.handles.remove(), this.range.remove(), this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"), this._mouseDestroy()
		},
		_mouseCapture: function (e) {
			var i, s, n, a, o, r, h, l, u = this,
				c = this.options;
			return c.disabled ? !1 : (this.elementSize = {
				width: this.element.outerWidth(),
				height: this.element.outerHeight()
			}, this.elementOffset = this.element.offset(), i = {
				x: e.pageX,
				y: e.pageY
			}, s = this._normValueFromMouse(i), n = this._valueMax() - this._valueMin() + 1, this.handles.each(function (e) {
				var i = Math.abs(s - u.values(e));
				(n > i || n === i && (e === u._lastChangedValue || u.values(e) === c.min)) && (n = i, a = t(this), o = e)
			}), r = this._start(e, o), r === !1 ? !1 : (this._mouseSliding = !0, this._handleIndex = o, a.addClass("ui-state-active").focus(), h = a.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
				left: 0,
				top: 0
			} : {
				left: e.pageX - h.left - a.width() / 2,
				top: e.pageY - h.top - a.height() / 2 - (parseInt(a.css("borderTopWidth"), 10) || 0) - (parseInt(a.css("borderBottomWidth"), 10) || 0) + (parseInt(a.css("marginTop"), 10) || 0)
			}, this.handles.hasClass("ui-state-hover") || this._slide(e, o, s), this._animateOff = !0, !0))
		},
		_mouseStart: function () {
			return !0
		},
		_mouseDrag: function (t) {
			var e = {
					x: t.pageX,
					y: t.pageY
				},
				i = this._normValueFromMouse(e);
			return this._slide(t, this._handleIndex, i), !1
		},
		_mouseStop: function (t) {
			return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
		},
		_detectOrientation: function () {
			this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
		},
		_normValueFromMouse: function (t) {
			var e, i, s, n, a;
			return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), s = i / e, s > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), n = this._valueMax() - this._valueMin(), a = this._valueMin() + s * n, this._trimAlignValue(a)
		},
		_start: function (t, e) {
			var i = {
				handle: this.handles[e],
				value: this.value()
			};
			return this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("start", t, i)
		},
		_slide: function (t, e, i) {
			var s, n, a;
			this.options.values && this.options.values.length ? (s = this.values(e ? 0 : 1), 2 === this.options.values.length && this.options.range === !0 && (0 === e && i > s || 1 === e && s > i) && (i = s), i !== this.values(e) && (n = this.values(), n[e] = i, a = this._trigger("slide", t, {
				handle: this.handles[e],
				value: i,
				values: n
			}), s = this.values(e ? 0 : 1), a !== !1 && this.values(e, i, !0))) : i !== this.value() && (a = this._trigger("slide", t, {
				handle: this.handles[e],
				value: i
			}), a !== !1 && this.value(i))
		},
		_stop: function (t, e) {
			var i = {
				handle: this.handles[e],
				value: this.value()
			};
			this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._trigger("stop", t, i)
		},
		_change: function (t, e) {
			if (!this._keySliding && !this._mouseSliding) {
				var i = {
					handle: this.handles[e],
					value: this.value()
				};
				this.options.values && this.options.values.length && (i.value = this.values(e), i.values = this.values()), this._lastChangedValue = e, this._trigger("change", t, i)
			}
		},
		value: function (t) {
			return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), this._change(null, 0), undefined) : this._value()
		},
		values: function (e, i) {
			var s, n, a;
			if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), this._change(null, e), undefined;
			if (!arguments.length) return this._values();
			if (!t.isArray(arguments[0])) return this.options.values && this.options.values.length ? this._values(e) : this.value();
			for (s = this.options.values, n = arguments[0], a = 0; s.length > a; a += 1) s[a] = this._trimAlignValue(n[a]), this._change(null, a);
			this._refreshValue()
		},
		_setOption: function (e, i) {
			var s, n = 0;
			switch ("range" === e && this.options.range === !0 && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (n = this.options.values.length), t.Widget.prototype._setOption.apply(this, arguments), e) {
				case "orientation":
					this._detectOrientation(), this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation), this._refreshValue();
					break;
				case "value":
					this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
					break;
				case "values":
					for (this._animateOff = !0, this._refreshValue(), s = 0; n > s; s += 1) this._change(null, s);
					this._animateOff = !1;
					break;
				case "min":
				case "max":
					this._animateOff = !0, this._refreshValue(), this._animateOff = !1;
					break;
				case "range":
					this._animateOff = !0, this._refresh(), this._animateOff = !1
			}
		},
		_value: function () {
			var t = this.options.value;
			return t = this._trimAlignValue(t)
		},
		_values: function (t) {
			var e, i, s;
			if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e);
			if (this.options.values && this.options.values.length) {
				for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
				return i
			}
			return []
		},
		_trimAlignValue: function (t) {
			if (this._valueMin() >= t) return this._valueMin();
			if (t >= this._valueMax()) return this._valueMax();
			var e = this.options.step > 0 ? this.options.step : 1,
				i = (t - this._valueMin()) % e,
				s = t - i;
			return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
		},
		_valueMin: function () {
			return this.options.min
		},
		_valueMax: function () {
			return this.options.max
		},
		_refreshValue: function () {
			var e, i, s, n, a, o = this.options.range,
				r = this.options,
				h = this,
				l = this._animateOff ? !1 : r.animate,
				u = {};
			this.options.values && this.options.values.length ? this.handles.each(function (s) {
				i = 100 * ((h.values(s) - h._valueMin()) / (h._valueMax() - h._valueMin())), u["horizontal" === h.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[l ? "animate" : "css"](u, r.animate), h.options.range === !0 && ("horizontal" === h.orientation ? (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
					left: i + "%"
				}, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
					width: i - e + "%"
				}, {
					queue: !1,
					duration: r.animate
				})) : (0 === s && h.range.stop(1, 1)[l ? "animate" : "css"]({
					bottom: i + "%"
				}, r.animate), 1 === s && h.range[l ? "animate" : "css"]({
					height: i - e + "%"
				}, {
					queue: !1,
					duration: r.animate
				}))), e = i
			}) : (s = this.value(), n = this._valueMin(), a = this._valueMax(), i = a !== n ? 100 * ((s - n) / (a - n)) : 0, u["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[l ? "animate" : "css"](u, r.animate), "min" === o && "horizontal" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
				width: i + "%"
			}, r.animate), "max" === o && "horizontal" === this.orientation && this.range[l ? "animate" : "css"]({
				width: 100 - i + "%"
			}, {
				queue: !1,
				duration: r.animate
			}), "min" === o && "vertical" === this.orientation && this.range.stop(1, 1)[l ? "animate" : "css"]({
				height: i + "%"
			}, r.animate), "max" === o && "vertical" === this.orientation && this.range[l ? "animate" : "css"]({
				height: 100 - i + "%"
			}, {
				queue: !1,
				duration: r.animate
			}))
		},
		_handleEvents: {
			keydown: function (i) {
				var s, n, a, o, r = t(i.target).data("ui-slider-handle-index");
				switch (i.keyCode) {
					case t.ui.keyCode.HOME:
					case t.ui.keyCode.END:
					case t.ui.keyCode.PAGE_UP:
					case t.ui.keyCode.PAGE_DOWN:
					case t.ui.keyCode.UP:
					case t.ui.keyCode.RIGHT:
					case t.ui.keyCode.DOWN:
					case t.ui.keyCode.LEFT:
						if (i.preventDefault(), !this._keySliding && (this._keySliding = !0, t(i.target).addClass("ui-state-active"), s = this._start(i, r), s === !1)) return
				}
				switch (o = this.options.step, n = a = this.options.values && this.options.values.length ? this.values(r) : this.value(), i.keyCode) {
					case t.ui.keyCode.HOME:
						a = this._valueMin();
						break;
					case t.ui.keyCode.END:
						a = this._valueMax();
						break;
					case t.ui.keyCode.PAGE_UP:
						a = this._trimAlignValue(n + (this._valueMax() - this._valueMin()) / e);
						break;
					case t.ui.keyCode.PAGE_DOWN:
						a = this._trimAlignValue(n - (this._valueMax() - this._valueMin()) / e);
						break;
					case t.ui.keyCode.UP:
					case t.ui.keyCode.RIGHT:
						if (n === this._valueMax()) return;
						a = this._trimAlignValue(n + o);
						break;
					case t.ui.keyCode.DOWN:
					case t.ui.keyCode.LEFT:
						if (n === this._valueMin()) return;
						a = this._trimAlignValue(n - o)
				}
				this._slide(i, r, a)
			},
			click: function (t) {
				t.preventDefault()
			},
			keyup: function (e) {
				var i = t(e.target).data("ui-slider-handle-index");
				this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), t(e.target).removeClass("ui-state-active"))
			}
		}
	})
})(jQuery);
(function (t) {
	function e(t) {
		return function () {
			var e = this.element.val();
			t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
		}
	}
	t.widget("ui.spinner", {
		version: "1.10.2",
		defaultElement: "<input>",
		widgetEventPrefix: "spin",
		options: {
			culture: null,
			icons: {
				down: "ui-icon-triangle-1-s",
				up: "ui-icon-triangle-1-n"
			},
			incremental: !0,
			max: null,
			min: null,
			numberFormat: null,
			page: 10,
			step: 1,
			change: null,
			spin: null,
			start: null,
			stop: null
		},
		_create: function () {
			this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
				beforeunload: function () {
					this.element.removeAttr("autocomplete")
				}
			})
		},
		_getCreateOptions: function () {
			var e = {},
				i = this.element;
			return t.each(["min", "max", "step"], function (t, s) {
				var n = i.attr(s);
				void 0 !== n && n.length && (e[s] = n)
			}), e
		},
		_events: {
			keydown: function (t) {
				this._start(t) && this._keydown(t) && t.preventDefault()
			},
			keyup: "_stop",
			focus: function () {
				this.previous = this.element.val()
			},
			blur: function (t) {
				return this.cancelBlur ? (delete this.cancelBlur, void 0) : (this._stop(), this._refresh(), this.previous !== this.element.val() && this._trigger("change", t), void 0)
			},
			mousewheel: function (t, e) {
				if (e) {
					if (!this.spinning && !this._start(t)) return !1;
					this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
						this.spinning && this._stop(t)
					}, 100), t.preventDefault()
				}
			},
			"mousedown .ui-spinner-button": function (e) {
				function i() {
					var t = this.element[0] === this.document[0].activeElement;
					t || (this.element.focus(), this.previous = s, this._delay(function () {
						this.previous = s
					}))
				}
				var s;
				s = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function () {
					delete this.cancelBlur, i.call(this)
				}), this._start(e) !== !1 && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
			},
			"mouseup .ui-spinner-button": "_stop",
			"mouseenter .ui-spinner-button": function (e) {
				return t(e.currentTarget).hasClass("ui-state-active") ? this._start(e) === !1 ? !1 : (this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e), void 0) : void 0
			},
			"mouseleave .ui-spinner-button": "_stop"
		},
		_draw: function () {
			var t = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
			this.element.attr("role", "spinbutton"), this.buttons = t.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all"), this.buttons.height() > Math.ceil(.5 * t.height()) && t.height() > 0 && t.height(t.height()), this.options.disabled && this.disable()
		},
		_keydown: function (e) {
			var i = this.options,
				s = t.ui.keyCode;
			switch (e.keyCode) {
				case s.UP:
					return this._repeat(null, 1, e), !0;
				case s.DOWN:
					return this._repeat(null, -1, e), !0;
				case s.PAGE_UP:
					return this._repeat(null, i.page, e), !0;
				case s.PAGE_DOWN:
					return this._repeat(null, -i.page, e), !0
			}
			return !1
		},
		_uiSpinnerHtml: function () {
			return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'></span>"
		},
		_buttonHtml: function () {
			return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;</span>" + "</a>" + "<a class='ui-spinner-button ui-spinner-down ui-corner-br'>" + "<span class='ui-icon " + this.options.icons.down + "'>&#9660;</span>" + "</a>"
		},
		_start: function (t) {
			return this.spinning || this._trigger("start", t) !== !1 ? (this.counter || (this.counter = 1), this.spinning = !0, !0) : !1
		},
		_repeat: function (t, e, i) {
			t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
				this._repeat(40, e, i)
			}, t), this._spin(e * this.options.step, i)
		},
		_spin: function (t, e) {
			var i = this.value() || 0;
			this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && this._trigger("spin", e, {
				value: i
			}) === !1 || (this._value(i), this.counter++)
		},
		_increment: function (e) {
			var i = this.options.incremental;
			return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
		},
		_precision: function () {
			var t = this._precisionOf(this.options.step);
			return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
		},
		_precisionOf: function (t) {
			var e = "" + t,
				i = e.indexOf(".");
			return -1 === i ? 0 : e.length - i - 1
		},
		_adjustValue: function (t) {
			var e, i, s = this.options;
			return e = null !== s.min ? s.min : 0, i = t - e, i = Math.round(i / s.step) * s.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && s.min > t ? s.min : t
		},
		_stop: function (t) {
			this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
		},
		_setOption: function (t, e) {
			if ("culture" === t || "numberFormat" === t) {
				var i = this._parse(this.element.val());
				return this.options[t] = e, this.element.val(this._format(i)), void 0
			}("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(e.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(e.down)), this._super(t, e), "disabled" === t && (e ? (this.element.prop("disabled", !0), this.buttons.button("disable")) : (this.element.prop("disabled", !1), this.buttons.button("enable")))
		},
		_setOptions: e(function (t) {
			this._super(t), this._value(this.element.val())
		}),
		_parse: function (t) {
			return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
		},
		_format: function (t) {
			return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
		},
		_refresh: function () {
			this.element.attr({
				"aria-valuemin": this.options.min,
				"aria-valuemax": this.options.max,
				"aria-valuenow": this._parse(this.element.val())
			})
		},
		_value: function (t, e) {
			var i;
			"" !== t && (i = this._parse(t), null !== i && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh()
		},
		_destroy: function () {
			this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow"), this.uiSpinner.replaceWith(this.element)
		},
		stepUp: e(function (t) {
			this._stepUp(t)
		}),
		_stepUp: function (t) {
			this._start() && (this._spin((t || 1) * this.options.step), this._stop())
		},
		stepDown: e(function (t) {
			this._stepDown(t)
		}),
		_stepDown: function (t) {
			this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
		},
		pageUp: e(function (t) {
			this._stepUp((t || 1) * this.options.page)
		}),
		pageDown: e(function (t) {
			this._stepDown((t || 1) * this.options.page)
		}),
		value: function (t) {
			return arguments.length ? (e(this._value).call(this, t), void 0) : this._parse(this.element.val())
		},
		widget: function () {
			return this.uiSpinner
		}
	})
})(jQuery);
(function (t, e) {
	function i() {
		return ++n
	}

	function s(t) {
		return t.hash.length > 1 && decodeURIComponent(t.href.replace(a, "")) === decodeURIComponent(location.href.replace(a, ""))
	}
	var n = 0,
		a = /#.*$/;
	t.widget("ui.tabs", {
		version: "1.10.2",
		delay: 300,
		options: {
			active: null,
			collapsible: !1,
			event: "click",
			heightStyle: "content",
			hide: null,
			show: null,
			activate: null,
			beforeActivate: null,
			beforeLoad: null,
			load: null
		},
		_create: function () {
			var e = this,
				i = this.options;
			this.running = !1, this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", i.collapsible).delegate(".ui-tabs-nav > li", "mousedown" + this.eventNamespace, function (e) {
				t(this).is(".ui-state-disabled") && e.preventDefault()
			}).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function () {
				t(this).closest("li").is(".ui-state-disabled") && this.blur()
			}), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
				return e.tabs.index(t)
			}))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
		},
		_initialActive: function () {
			var i = this.options.active,
				s = this.options.collapsible,
				n = location.hash.substring(1);
			return null === i && (n && this.tabs.each(function (s, a) {
				return t(a).attr("aria-controls") === n ? (i = s, !1) : e
			}), null === i && (i = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === i || -1 === i) && (i = this.tabs.length ? 0 : !1)), i !== !1 && (i = this.tabs.index(this.tabs.eq(i)), -1 === i && (i = s ? !1 : 0)), !s && i === !1 && this.anchors.length && (i = 0), i
		},
		_getCreateEventData: function () {
			return {
				tab: this.active,
				panel: this.active.length ? this._getPanelForTab(this.active) : t()
			}
		},
		_tabKeydown: function (i) {
			var s = t(this.document[0].activeElement).closest("li"),
				n = this.tabs.index(s),
				a = !0;
			if (!this._handlePageNav(i)) {
				switch (i.keyCode) {
					case t.ui.keyCode.RIGHT:
					case t.ui.keyCode.DOWN:
						n++;
						break;
					case t.ui.keyCode.UP:
					case t.ui.keyCode.LEFT:
						a = !1, n--;
						break;
					case t.ui.keyCode.END:
						n = this.anchors.length - 1;
						break;
					case t.ui.keyCode.HOME:
						n = 0;
						break;
					case t.ui.keyCode.SPACE:
						return i.preventDefault(), clearTimeout(this.activating), this._activate(n), e;
					case t.ui.keyCode.ENTER:
						return i.preventDefault(), clearTimeout(this.activating), this._activate(n === this.options.active ? !1 : n), e;
					default:
						return
				}
				i.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, a), i.ctrlKey || (s.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function () {
					this.option("active", n)
				}, this.delay))
			}
		},
		_panelKeydown: function (e) {
			this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.focus())
		},
		_handlePageNav: function (i) {
			return i.altKey && i.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : i.altKey && i.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : e
		},
		_findNextTab: function (e, i) {
			function s() {
				return e > n && (e = 0), 0 > e && (e = n), e
			}
			for (var n = this.tabs.length - 1; - 1 !== t.inArray(s(), this.options.disabled);) e = i ? e + 1 : e - 1;
			return e
		},
		_focusNextTab: function (t, e) {
			return t = this._findNextTab(t, e), this.tabs.eq(t).focus(), t
		},
		_setOption: function (t, i) {
			return "active" === t ? (this._activate(i), e) : "disabled" === t ? (this._setupDisabled(i), e) : (this._super(t, i), "collapsible" === t && (this.element.toggleClass("ui-tabs-collapsible", i), i || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(i), "heightStyle" === t && this._setupHeightStyle(i), e)
		},
		_tabId: function (t) {
			return t.attr("aria-controls") || "ui-tabs-" + i()
		},
		_sanitizeSelector: function (t) {
			return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
		},
		refresh: function () {
			var e = this.options,
				i = this.tablist.children(":has(a[href])");
			e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) {
				return i.index(t)
			}), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
		},
		_refresh: function () {
			this._setupDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
				"aria-selected": "false",
				tabIndex: -1
			}), this.panels.not(this._getPanelForTab(this.active)).hide().attr({
				"aria-expanded": "false",
				"aria-hidden": "true"
			}), this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
				"aria-selected": "true",
				tabIndex: 0
			}), this._getPanelForTab(this.active).show().attr({
				"aria-expanded": "true",
				"aria-hidden": "false"
			})) : this.tabs.eq(0).attr("tabIndex", 0)
		},
		_processTabs: function () {
			var e = this;
			this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist"), this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
				role: "tab",
				tabIndex: -1
			}), this.anchors = this.tabs.map(function () {
				return t("a", this)[0]
			}).addClass("ui-tabs-anchor").attr({
				role: "presentation",
				tabIndex: -1
			}), this.panels = t(), this.anchors.each(function (i, n) {
				var a, o, r, h = t(n).uniqueId().attr("id"),
					l = t(n).closest("li"),
					u = l.attr("aria-controls");
				s(n) ? (a = n.hash, o = e.element.find(e._sanitizeSelector(a))) : (r = e._tabId(l), a = "#" + r, o = e.element.find(a), o.length || (o = e._createPanel(r), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), u && l.data("ui-tabs-aria-controls", u), l.attr({
					"aria-controls": a.substring(1),
					"aria-labelledby": h
				}), o.attr("aria-labelledby", h)
			}), this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel")
		},
		_getList: function () {
			return this.element.find("ol,ul").eq(0)
		},
		_createPanel: function (e) {
			return t("<div>").attr("id", e).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
		},
		_setupDisabled: function (e) {
			t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1);
			for (var i, s = 0; i = this.tabs[s]; s++) e === !0 || -1 !== t.inArray(s, e) ? t(i).addClass("ui-state-disabled").attr("aria-disabled", "true") : t(i).removeClass("ui-state-disabled").removeAttr("aria-disabled");
			this.options.disabled = e
		},
		_setupEvents: function (e) {
			var i = {
				click: function (t) {
					t.preventDefault()
				}
			};
			e && t.each(e.split(" "), function (t, e) {
				i[e] = "_eventHandler"
			}), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(this.anchors, i), this._on(this.tabs, {
				keydown: "_tabKeydown"
			}), this._on(this.panels, {
				keydown: "_panelKeydown"
			}), this._focusable(this.tabs), this._hoverable(this.tabs)
		},
		_setupHeightStyle: function (e) {
			var i, s = this.element.parent();
			"fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
				var e = t(this),
					s = e.css("position");
				"absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
			}), this.element.children().not(this.panels).each(function () {
				i -= t(this).outerHeight(!0)
			}), this.panels.each(function () {
				t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
			}).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function () {
				i = Math.max(i, t(this).height("").height())
			}).height(i))
		},
		_eventHandler: function (e) {
			var i = this.options,
				s = this.active,
				n = t(e.currentTarget),
				a = n.closest("li"),
				o = a[0] === s[0],
				r = o && i.collapsible,
				h = r ? t() : this._getPanelForTab(a),
				l = s.length ? this._getPanelForTab(s) : t(),
				u = {
					oldTab: s,
					oldPanel: l,
					newTab: r ? t() : a,
					newPanel: h
				};
			e.preventDefault(), a.hasClass("ui-state-disabled") || a.hasClass("ui-tabs-loading") || this.running || o && !i.collapsible || this._trigger("beforeActivate", e, u) === !1 || (i.active = r ? !1 : this.tabs.index(a), this.active = o ? t() : a, this.xhr && this.xhr.abort(), l.length || h.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), h.length && this.load(this.tabs.index(a), e), this._toggle(e, u))
		},
		_toggle: function (e, i) {
			function s() {
				a.running = !1, a._trigger("activate", e, i)
			}

			function n() {
				i.newTab.closest("li").addClass("ui-tabs-active ui-state-active"), o.length && a.options.show ? a._show(o, a.options.show, s) : (o.show(), s())
			}
			var a = this,
				o = i.newPanel,
				r = i.oldPanel;
			this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function () {
				i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), n()
			}) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), r.hide(), n()), r.attr({
				"aria-expanded": "false",
				"aria-hidden": "true"
			}), i.oldTab.attr("aria-selected", "false"), o.length && r.length ? i.oldTab.attr("tabIndex", -1) : o.length && this.tabs.filter(function () {
				return 0 === t(this).attr("tabIndex")
			}).attr("tabIndex", -1), o.attr({
				"aria-expanded": "true",
				"aria-hidden": "false"
			}), i.newTab.attr({
				"aria-selected": "true",
				tabIndex: 0
			})
		},
		_activate: function (e) {
			var i, s = this._findActive(e);
			s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
				target: i,
				currentTarget: i,
				preventDefault: t.noop
			}))
		},
		_findActive: function (e) {
			return e === !1 ? t() : this.tabs.eq(e)
		},
		_getIndex: function (t) {
			return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + t + "']"))), t
		},
		_destroy: function () {
			this.xhr && this.xhr.abort(), this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible"), this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role"), this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function () {
				t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
			}), this.tabs.each(function () {
				var e = t(this),
					i = e.data("ui-tabs-aria-controls");
				i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
			}), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
		},
		enable: function (i) {
			var s = this.options.disabled;
			s !== !1 && (i === e ? s = !1 : (i = this._getIndex(i), s = t.isArray(s) ? t.map(s, function (t) {
				return t !== i ? t : null
			}) : t.map(this.tabs, function (t, e) {
				return e !== i ? e : null
			})), this._setupDisabled(s))
		},
		disable: function (i) {
			var s = this.options.disabled;
			if (s !== !0) {
				if (i === e) s = !0;
				else {
					if (i = this._getIndex(i), -1 !== t.inArray(i, s)) return;
					s = t.isArray(s) ? t.merge([i], s).sort() : [i]
				}
				this._setupDisabled(s)
			}
		},
		load: function (e, i) {
			e = this._getIndex(e);
			var n = this,
				a = this.tabs.eq(e),
				o = a.find(".ui-tabs-anchor"),
				r = this._getPanelForTab(a),
				h = {
					tab: a,
					panel: r
				};
			s(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, h)), this.xhr && "canceled" !== this.xhr.statusText && (a.addClass("ui-tabs-loading"), r.attr("aria-busy", "true"), this.xhr.success(function (t) {
				setTimeout(function () {
					r.html(t), n._trigger("load", i, h)
				}, 1)
			}).complete(function (t, e) {
				setTimeout(function () {
					"abort" === e && n.panels.stop(!1, !0), a.removeClass("ui-tabs-loading"), r.removeAttr("aria-busy"), t === n.xhr && delete n.xhr
				}, 1)
			})))
		},
		_ajaxSettings: function (e, i, s) {
			var n = this;
			return {
				url: e.attr("href"),
				beforeSend: function (e, a) {
					return n._trigger("beforeLoad", i, t.extend({
						jqXHR: e,
						ajaxSettings: a
					}, s))
				}
			}
		},
		_getPanelForTab: function (e) {
			var i = t(e).attr("aria-controls");
			return this.element.find(this._sanitizeSelector("#" + i))
		}
	})
})(jQuery);
(function (t) {
	function e(e, i) {
		var s = (e.attr("aria-describedby") || "").split(/\s+/);
		s.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")))
	}

	function i(e) {
		var i = e.data("ui-tooltip-id"),
			s = (e.attr("aria-describedby") || "").split(/\s+/),
			n = t.inArray(i, s); - 1 !== n && s.splice(n, 1), e.removeData("ui-tooltip-id"), s = t.trim(s.join(" ")), s ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby")
	}
	var s = 0;
	t.widget("ui.tooltip", {
		version: "1.10.2",
		options: {
			content: function () {
				var e = t(this).attr("title") || "";
				return t("<a>").text(e).html()
			},
			hide: !0,
			items: "[title]:not([disabled])",
			position: {
				my: "left top+15",
				at: "left bottom",
				collision: "flipfit flip"
			},
			show: !0,
			tooltipClass: null,
			track: !1,
			close: null,
			open: null
		},
		_create: function () {
			this._on({
				mouseover: "open",
				focusin: "open"
			}), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable()
		},
		_setOption: function (e, i) {
			var s = this;
			return "disabled" === e ? (this[i ? "_disable" : "_enable"](), this.options[e] = i, void 0) : (this._super(e, i), "content" === e && t.each(this.tooltips, function (t, e) {
				s._updateContent(e)
			}), void 0)
		},
		_disable: function () {
			var e = this;
			t.each(this.tooltips, function (i, s) {
				var n = t.Event("blur");
				n.target = n.currentTarget = s[0], e.close(n, !0)
			}), this.element.find(this.options.items).addBack().each(function () {
				var e = t(this);
				e.is("[title]") && e.data("ui-tooltip-title", e.attr("title")).attr("title", "")
			})
		},
		_enable: function () {
			this.element.find(this.options.items).addBack().each(function () {
				var e = t(this);
				e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
			})
		},
		open: function (e) {
			var i = this,
				s = t(e ? e.target : this.element).closest(this.options.items);
			s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), e && "mouseover" === e.type && s.parents().each(function () {
				var e, s = t(this);
				s.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = {
					element: this,
					title: s.attr("title")
				}, s.attr("title", ""))
			}), this._updateContent(s, e))
		},
		_updateContent: function (t, e) {
			var i, s = this.options.content,
				n = this,
				a = e ? e.type : null;
			return "string" == typeof s ? this._open(e, t, s) : (i = s.call(t[0], function (i) {
				t.data("ui-tooltip-open") && n._delay(function () {
					e && (e.type = a), this._open(e, t, i)
				})
			}), i && this._open(e, t, i), void 0)
		},
		_open: function (i, s, n) {
			function a(t) {
				l.of = t, o.is(":hidden") || o.position(l)
			}
			var o, r, h, l = t.extend({}, this.options.position);
			if (n) {
				if (o = this._find(s), o.length) return o.find(".ui-tooltip-content").html(n), void 0;
				s.is("[title]") && (i && "mouseover" === i.type ? s.attr("title", "") : s.removeAttr("title")), o = this._tooltip(s), e(s, o.attr("id")), o.find(".ui-tooltip-content").html(n), this.options.track && i && /^mouse/.test(i.type) ? (this._on(this.document, {
					mousemove: a
				}), a(i)) : o.position(t.extend({ of: s
				}, this.options.position)), o.hide(), this._show(o, this.options.show), this.options.show && this.options.show.delay && (h = this.delayedShow = setInterval(function () {
					o.is(":visible") && (a(l.of), clearInterval(h))
				}, t.fx.interval)), this._trigger("open", i, {
					tooltip: o
				}), r = {
					keyup: function (e) {
						if (e.keyCode === t.ui.keyCode.ESCAPE) {
							var i = t.Event(e);
							i.currentTarget = s[0], this.close(i, !0)
						}
					},
					remove: function () {
						this._removeTooltip(o)
					}
				}, i && "mouseover" !== i.type || (r.mouseleave = "close"), i && "focusin" !== i.type || (r.focusout = "close"), this._on(!0, s, r)
			}
		},
		close: function (e) {
			var s = this,
				n = t(e ? e.currentTarget : this.element),
				a = this._find(n);
			this.closing || (clearInterval(this.delayedShow), n.data("ui-tooltip-title") && n.attr("title", n.data("ui-tooltip-title")), i(n), a.stop(!0), this._hide(a, this.options.hide, function () {
				s._removeTooltip(t(this))
			}), n.removeData("ui-tooltip-open"), this._off(n, "mouseleave focusout keyup"), n[0] !== this.element[0] && this._off(n, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function (e, i) {
				t(i.element).attr("title", i.title), delete s.parents[e]
			}), this.closing = !0, this._trigger("close", e, {
				tooltip: a
			}), this.closing = !1)
		},
		_tooltip: function (e) {
			var i = "ui-tooltip-" + s++,
				n = t("<div>").attr({
					id: i,
					role: "tooltip"
				}).addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || ""));
			return t("<div>").addClass("ui-tooltip-content").appendTo(n), n.appendTo(this.document[0].body), this.tooltips[i] = e, n
		},
		_find: function (e) {
			var i = e.data("ui-tooltip-id");
			return i ? t("#" + i) : t()
		},
		_removeTooltip: function (t) {
			t.remove(), delete this.tooltips[t.attr("id")]
		},
		_destroy: function () {
			var e = this;
			t.each(this.tooltips, function (i, s) {
				var n = t.Event("blur");
				n.target = n.currentTarget = s[0], e.close(n, !0), t("#" + i).remove(), s.data("ui-tooltip-title") && (s.attr("title", s.data("ui-tooltip-title")), s.removeData("ui-tooltip-title"))
			})
		}
	})
})(jQuery);
(function (t, e) {
	var i = "ui-effects-";
	t.effects = {
			effect: {}
		},
		function (t, e) {
			function i(t, e, i) {
				var s = u[e.type] || {};
				return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t)
			}

			function s(i) {
				var s = l(),
					n = s._rgba = [];
				return i = i.toLowerCase(), f(h, function (t, a) {
					var o, r = a.re.exec(i),
						h = r && a.parse(r),
						l = a.space || "rgba";
					return h ? (o = s[l](h), s[c[l].cache] = o[c[l].cache], n = s._rgba = o._rgba, !1) : e
				}), n.length ? ("0,0,0,0" === n.join() && t.extend(n, a.transparent), s) : a[i]
			}

			function n(t, e, i) {
				return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
			}
			var a, o = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
				r = /^([\-+])=\s*(\d+\.?\d*)/,
				h = [{
					re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
					parse: function (t) {
						return [t[1], t[2], t[3], t[4]]
					}
				}, {
					re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
					parse: function (t) {
						return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
					}
				}, {
					re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
					parse: function (t) {
						return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
					}
				}, {
					re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
					parse: function (t) {
						return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
					}
				}, {
					re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
					space: "hsla",
					parse: function (t) {
						return [t[1], t[2] / 100, t[3] / 100, t[4]]
					}
				}],
				l = t.Color = function (e, i, s, n) {
					return new t.Color.fn.parse(e, i, s, n)
				},
				c = {
					rgba: {
						props: {
							red: {
								idx: 0,
								type: "byte"
							},
							green: {
								idx: 1,
								type: "byte"
							},
							blue: {
								idx: 2,
								type: "byte"
							}
						}
					},
					hsla: {
						props: {
							hue: {
								idx: 0,
								type: "degrees"
							},
							saturation: {
								idx: 1,
								type: "percent"
							},
							lightness: {
								idx: 2,
								type: "percent"
							}
						}
					}
				},
				u = {
					"byte": {
						floor: !0,
						max: 255
					},
					percent: {
						max: 1
					},
					degrees: {
						mod: 360,
						floor: !0
					}
				},
				d = l.support = {},
				p = t("<p>")[0],
				f = t.each;
			p.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(c, function (t, e) {
				e.cache = "_" + t, e.props.alpha = {
					idx: 3,
					type: "percent",
					def: 1
				}
			}), l.fn = t.extend(l.prototype, {
				parse: function (n, o, r, h) {
					if (n === e) return this._rgba = [null, null, null, null], this;
					(n.jquery || n.nodeType) && (n = t(n).css(o), o = e);
					var u = this,
						d = t.type(n),
						p = this._rgba = [];
					return o !== e && (n = [n, o, r, h], d = "array"), "string" === d ? this.parse(s(n) || a._default) : "array" === d ? (f(c.rgba.props, function (t, e) {
						p[e.idx] = i(n[e.idx], e)
					}), this) : "object" === d ? (n instanceof l ? f(c, function (t, e) {
						n[e.cache] && (u[e.cache] = n[e.cache].slice())
					}) : f(c, function (e, s) {
						var a = s.cache;
						f(s.props, function (t, e) {
							if (!u[a] && s.to) {
								if ("alpha" === t || null == n[t]) return;
								u[a] = s.to(u._rgba)
							}
							u[a][e.idx] = i(n[t], e, !0)
						}), u[a] && 0 > t.inArray(null, u[a].slice(0, 3)) && (u[a][3] = 1, s.from && (u._rgba = s.from(u[a])))
					}), this) : e
				},
				is: function (t) {
					var i = l(t),
						s = !0,
						n = this;
					return f(c, function (t, a) {
						var o, r = i[a.cache];
						return r && (o = n[a.cache] || a.to && a.to(n._rgba) || [], f(a.props, function (t, i) {
							return null != r[i.idx] ? s = r[i.idx] === o[i.idx] : e
						})), s
					}), s
				},
				_space: function () {
					var t = [],
						e = this;
					return f(c, function (i, s) {
						e[s.cache] && t.push(i)
					}), t.pop()
				},
				transition: function (t, e) {
					var s = l(t),
						n = s._space(),
						a = c[n],
						o = 0 === this.alpha() ? l("transparent") : this,
						r = o[a.cache] || a.to(o._rgba),
						h = r.slice();
					return s = s[a.cache], f(a.props, function (t, n) {
						var a = n.idx,
							o = r[a],
							l = s[a],
							c = u[n.type] || {};
						null !== l && (null === o ? h[a] = l : (c.mod && (l - o > c.mod / 2 ? o += c.mod : o - l > c.mod / 2 && (o -= c.mod)), h[a] = i((l - o) * e + o, n)))
					}), this[n](h)
				},
				blend: function (e) {
					if (1 === this._rgba[3]) return this;
					var i = this._rgba.slice(),
						s = i.pop(),
						n = l(e)._rgba;
					return l(t.map(i, function (t, e) {
						return (1 - s) * n[e] + s * t
					}))
				},
				toRgbaString: function () {
					var e = "rgba(",
						i = t.map(this._rgba, function (t, e) {
							return null == t ? e > 2 ? 1 : 0 : t
						});
					return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
				},
				toHslaString: function () {
					var e = "hsla(",
						i = t.map(this.hsla(), function (t, e) {
							return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
						});
					return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
				},
				toHexString: function (e) {
					var i = this._rgba.slice(),
						s = i.pop();
					return e && i.push(~~(255 * s)), "#" + t.map(i, function (t) {
						return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t
					}).join("")
				},
				toString: function () {
					return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
				}
			}), l.fn.parse.prototype = l.fn, c.hsla.to = function (t) {
				if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
				var e, i, s = t[0] / 255,
					n = t[1] / 255,
					a = t[2] / 255,
					o = t[3],
					r = Math.max(s, n, a),
					h = Math.min(s, n, a),
					l = r - h,
					c = r + h,
					u = .5 * c;
				return e = h === r ? 0 : s === r ? 60 * (n - a) / l + 360 : n === r ? 60 * (a - s) / l + 120 : 60 * (s - n) / l + 240, i = 0 === l ? 0 : .5 >= u ? l / c : l / (2 - c), [Math.round(e) % 360, i, u, null == o ? 1 : o]
			}, c.hsla.from = function (t) {
				if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
				var e = t[0] / 360,
					i = t[1],
					s = t[2],
					a = t[3],
					o = .5 >= s ? s * (1 + i) : s + i - s * i,
					r = 2 * s - o;
				return [Math.round(255 * n(r, o, e + 1 / 3)), Math.round(255 * n(r, o, e)), Math.round(255 * n(r, o, e - 1 / 3)), a]
			}, f(c, function (s, n) {
				var a = n.props,
					o = n.cache,
					h = n.to,
					c = n.from;
				l.fn[s] = function (s) {
					if (h && !this[o] && (this[o] = h(this._rgba)), s === e) return this[o].slice();
					var n, r = t.type(s),
						u = "array" === r || "object" === r ? s : arguments,
						d = this[o].slice();
					return f(a, function (t, e) {
						var s = u["object" === r ? t : e.idx];
						null == s && (s = d[e.idx]), d[e.idx] = i(s, e)
					}), c ? (n = l(c(d)), n[o] = d, n) : l(d)
				}, f(a, function (e, i) {
					l.fn[e] || (l.fn[e] = function (n) {
						var a, o = t.type(n),
							h = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s,
							l = this[h](),
							c = l[i.idx];
						return "undefined" === o ? c : ("function" === o && (n = n.call(this, c), o = t.type(n)), null == n && i.empty ? this : ("string" === o && (a = r.exec(n), a && (n = c + parseFloat(a[2]) * ("+" === a[1] ? 1 : -1))), l[i.idx] = n, this[h](l)))
					})
				})
			}), l.hook = function (e) {
				var i = e.split(" ");
				f(i, function (e, i) {
					t.cssHooks[i] = {
						set: function (e, n) {
							var a, o, r = "";
							if ("transparent" !== n && ("string" !== t.type(n) || (a = s(n)))) {
								if (n = l(a || n), !d.rgba && 1 !== n._rgba[3]) {
									for (o = "backgroundColor" === i ? e.parentNode : e;
										("" === r || "transparent" === r) && o && o.style;) try {
										r = t.css(o, "backgroundColor"), o = o.parentNode
									} catch (h) {}
									n = n.blend(r && "transparent" !== r ? r : "_default")
								}
								n = n.toRgbaString()
							}
							try {
								e.style[i] = n
							} catch (h) {}
						}
					}, t.fx.step[i] = function (e) {
						e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
					}
				})
			}, l.hook(o), t.cssHooks.borderColor = {
				expand: function (t) {
					var e = {};
					return f(["Top", "Right", "Bottom", "Left"], function (i, s) {
						e["border" + s + "Color"] = t
					}), e
				}
			}, a = t.Color.names = {
				aqua: "#00ffff",
				black: "#000000",
				blue: "#0000ff",
				fuchsia: "#ff00ff",
				gray: "#808080",
				green: "#008000",
				lime: "#00ff00",
				maroon: "#800000",
				navy: "#000080",
				olive: "#808000",
				purple: "#800080",
				red: "#ff0000",
				silver: "#c0c0c0",
				teal: "#008080",
				white: "#ffffff",
				yellow: "#ffff00",
				transparent: [null, null, null, 0],
				_default: "#ffffff"
			}
		}(jQuery),
		function () {
			function i(e) {
				var i, s, n = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
					a = {};
				if (n && n.length && n[0] && n[n[0]])
					for (s = n.length; s--;) i = n[s], "string" == typeof n[i] && (a[t.camelCase(i)] = n[i]);
				else
					for (i in n) "string" == typeof n[i] && (a[i] = n[i]);
				return a
			}

			function s(e, i) {
				var s, n, o = {};
				for (s in i) n = i[s], e[s] !== n && (a[s] || (t.fx.step[s] || !isNaN(parseFloat(n))) && (o[s] = n));
				return o
			}
			var n = ["add", "remove", "toggle"],
				a = {
					border: 1,
					borderBottom: 1,
					borderColor: 1,
					borderLeft: 1,
					borderRight: 1,
					borderTop: 1,
					borderWidth: 1,
					margin: 1,
					padding: 1
				};
			t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, i) {
				t.fx.step[i] = function (t) {
					("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (jQuery.style(t.elem, i, t.end), t.setAttr = !0)
				}
			}), t.fn.addBack || (t.fn.addBack = function (t) {
				return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
			}), t.effects.animateClass = function (e, a, o, r) {
				var h = t.speed(a, o, r);
				return this.queue(function () {
					var a, o = t(this),
						r = o.attr("class") || "",
						l = h.children ? o.find("*").addBack() : o;
					l = l.map(function () {
						var e = t(this);
						return {
							el: e,
							start: i(this)
						}
					}), a = function () {
						t.each(n, function (t, i) {
							e[i] && o[i + "Class"](e[i])
						})
					}, a(), l = l.map(function () {
						return this.end = i(this.el[0]), this.diff = s(this.start, this.end), this
					}), o.attr("class", r), l = l.map(function () {
						var e = this,
							i = t.Deferred(),
							s = t.extend({}, h, {
								queue: !1,
								complete: function () {
									i.resolve(e)
								}
							});
						return this.el.animate(this.diff, s), i.promise()
					}), t.when.apply(t, l.get()).done(function () {
						a(), t.each(arguments, function () {
							var e = this.el;
							t.each(this.diff, function (t) {
								e.css(t, "")
							})
						}), h.complete.call(o[0])
					})
				})
			}, t.fn.extend({
				addClass: function (e) {
					return function (i, s, n, a) {
						return s ? t.effects.animateClass.call(this, {
							add: i
						}, s, n, a) : e.apply(this, arguments)
					}
				}(t.fn.addClass),
				removeClass: function (e) {
					return function (i, s, n, a) {
						return arguments.length > 1 ? t.effects.animateClass.call(this, {
							remove: i
						}, s, n, a) : e.apply(this, arguments)
					}
				}(t.fn.removeClass),
				toggleClass: function (i) {
					return function (s, n, a, o, r) {
						return "boolean" == typeof n || n === e ? a ? t.effects.animateClass.call(this, n ? {
							add: s
						} : {
							remove: s
						}, a, o, r) : i.apply(this, arguments) : t.effects.animateClass.call(this, {
							toggle: s
						}, n, a, o)
					}
				}(t.fn.toggleClass),
				switchClass: function (e, i, s, n, a) {
					return t.effects.animateClass.call(this, {
						add: i,
						remove: e
					}, s, n, a)
				}
			})
		}(),
		function () {
			function s(e, i, s, n) {
				return t.isPlainObject(e) && (i = e, e = e.effect), e = {
					effect: e
				}, null == i && (i = {}), t.isFunction(i) && (n = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (n = s, s = i, i = {}), t.isFunction(s) && (n = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = n || i.complete, e
			}

			function n(e) {
				return !e || "number" == typeof e || t.fx.speeds[e] ? !0 : "string" != typeof e || t.effects.effect[e] ? t.isFunction(e) ? !0 : "object" != typeof e || e.effect ? !1 : !0 : !0
			}
			t.extend(t.effects, {
				version: "1.10.2",
				save: function (t, e) {
					for (var s = 0; e.length > s; s++) null !== e[s] && t.data(i + e[s], t[0].style[e[s]])
				},
				restore: function (t, s) {
					var n, a;
					for (a = 0; s.length > a; a++) null !== s[a] && (n = t.data(i + s[a]), n === e && (n = ""), t.css(s[a], n))
				},
				setMode: function (t, e) {
					return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
				},
				getBaseline: function (t, e) {
					var i, s;
					switch (t[0]) {
						case "top":
							i = 0;
							break;
						case "middle":
							i = .5;
							break;
						case "bottom":
							i = 1;
							break;
						default:
							i = t[0] / e.height
					}
					switch (t[1]) {
						case "left":
							s = 0;
							break;
						case "center":
							s = .5;
							break;
						case "right":
							s = 1;
							break;
						default:
							s = t[1] / e.width
					}
					return {
						x: s,
						y: i
					}
				},
				createWrapper: function (e) {
					if (e.parent().is(".ui-effects-wrapper")) return e.parent();
					var i = {
							width: e.outerWidth(!0),
							height: e.outerHeight(!0),
							"float": e.css("float")
						},
						s = t("<div></div>").addClass("ui-effects-wrapper").css({
							fontSize: "100%",
							background: "transparent",
							border: "none",
							margin: 0,
							padding: 0
						}),
						n = {
							width: e.width(),
							height: e.height()
						},
						a = document.activeElement;
					try {
						a.id
					} catch (o) {
						a = document.body
					}
					return e.wrap(s), (e[0] === a || t.contains(e[0], a)) && t(a).focus(), s = e.parent(), "static" === e.css("position") ? (s.css({
						position: "relative"
					}), e.css({
						position: "relative"
					})) : (t.extend(i, {
						position: e.css("position"),
						zIndex: e.css("z-index")
					}), t.each(["top", "left", "bottom", "right"], function (t, s) {
						i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
					}), e.css({
						position: "relative",
						top: 0,
						left: 0,
						right: "auto",
						bottom: "auto"
					})), e.css(n), s.css(i).show()
				},
				removeWrapper: function (e) {
					var i = document.activeElement;
					return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).focus()), e
				},
				setTransition: function (e, i, s, n) {
					return n = n || {}, t.each(i, function (t, i) {
						var a = e.cssUnit(i);
						a[0] > 0 && (n[i] = a[0] * s + a[1])
					}), n
				}
			}), t.fn.extend({
				effect: function () {
					function e(e) {
						function s() {
							t.isFunction(a) && a.call(n[0]), t.isFunction(e) && e()
						}
						var n = t(this),
							a = i.complete,
							r = i.mode;
						(n.is(":hidden") ? "hide" === r : "show" === r) ? (n[r](), s()) : o.call(n[0], i, s)
					}
					var i = s.apply(this, arguments),
						n = i.mode,
						a = i.queue,
						o = t.effects.effect[i.effect];
					return t.fx.off || !o ? n ? this[n](i.duration, i.complete) : this.each(function () {
						i.complete && i.complete.call(this)
					}) : a === !1 ? this.each(e) : this.queue(a || "fx", e)
				},
				show: function (t) {
					return function (e) {
						if (n(e)) return t.apply(this, arguments);
						var i = s.apply(this, arguments);
						return i.mode = "show", this.effect.call(this, i)
					}
				}(t.fn.show),
				hide: function (t) {
					return function (e) {
						if (n(e)) return t.apply(this, arguments);
						var i = s.apply(this, arguments);
						return i.mode = "hide", this.effect.call(this, i)
					}
				}(t.fn.hide),
				toggle: function (t) {
					return function (e) {
						if (n(e) || "boolean" == typeof e) return t.apply(this, arguments);
						var i = s.apply(this, arguments);
						return i.mode = "toggle", this.effect.call(this, i)
					}
				}(t.fn.toggle),
				cssUnit: function (e) {
					var i = this.css(e),
						s = [];
					return t.each(["em", "px", "%", "pt"], function (t, e) {
						i.indexOf(e) > 0 && (s = [parseFloat(i), e])
					}), s
				}
			})
		}(),
		function () {
			var e = {};
			t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, i) {
				e[i] = function (e) {
					return Math.pow(e, t + 2)
				}
			}), t.extend(e, {
				Sine: function (t) {
					return 1 - Math.cos(t * Math.PI / 2)
				},
				Circ: function (t) {
					return 1 - Math.sqrt(1 - t * t)
				},
				Elastic: function (t) {
					return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
				},
				Back: function (t) {
					return t * t * (3 * t - 2)
				},
				Bounce: function (t) {
					for (var e, i = 4;
						((e = Math.pow(2, --i)) - 1) / 11 > t;);
					return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
				}
			}), t.each(e, function (e, i) {
				t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function (t) {
					return 1 - i(1 - t)
				}, t.easing["easeInOut" + e] = function (t) {
					return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
				}
			})
		}()
})(jQuery);
(function (t) {
	var e = /up|down|vertical/,
		i = /up|left|vertical|horizontal/;
	t.effects.effect.blind = function (s, n) {
		var a, o, r, h = t(this),
			l = ["position", "top", "bottom", "left", "right", "height", "width"],
			c = t.effects.setMode(h, s.mode || "hide"),
			u = s.direction || "up",
			d = e.test(u),
			p = d ? "height" : "width",
			f = d ? "top" : "left",
			m = i.test(u),
			g = {},
			v = "show" === c;
		h.parent().is(".ui-effects-wrapper") ? t.effects.save(h.parent(), l) : t.effects.save(h, l), h.show(), a = t.effects.createWrapper(h).css({
			overflow: "hidden"
		}), o = a[p](), r = parseFloat(a.css(f)) || 0, g[p] = v ? o : 0, m || (h.css(d ? "bottom" : "right", 0).css(d ? "top" : "left", "auto").css({
			position: "absolute"
		}), g[f] = v ? r : o + r), v && (a.css(p, 0), m || a.css(f, r + o)), a.animate(g, {
			duration: s.duration,
			easing: s.easing,
			queue: !1,
			complete: function () {
				"hide" === c && h.hide(), t.effects.restore(h, l), t.effects.removeWrapper(h), n()
			}
		})
	}
})(jQuery);
(function (t) {
	t.effects.effect.bounce = function (e, i) {
		var s, n, a, o = t(this),
			r = ["position", "top", "bottom", "left", "right", "height", "width"],
			h = t.effects.setMode(o, e.mode || "effect"),
			l = "hide" === h,
			c = "show" === h,
			u = e.direction || "up",
			d = e.distance,
			p = e.times || 5,
			f = 2 * p + (c || l ? 1 : 0),
			m = e.duration / f,
			g = e.easing,
			v = "up" === u || "down" === u ? "top" : "left",
			_ = "up" === u || "left" === u,
			b = o.queue(),
			y = b.length;
		for ((c || l) && r.push("opacity"), t.effects.save(o, r), o.show(), t.effects.createWrapper(o), d || (d = o["top" === v ? "outerHeight" : "outerWidth"]() / 3), c && (a = {
				opacity: 1
			}, a[v] = 0, o.css("opacity", 0).css(v, _ ? 2 * -d : 2 * d).animate(a, m, g)), l && (d /= Math.pow(2, p - 1)), a = {}, a[v] = 0, s = 0; p > s; s++) n = {}, n[v] = (_ ? "-=" : "+=") + d, o.animate(n, m, g).animate(a, m, g), d = l ? 2 * d : d / 2;
		l && (n = {
			opacity: 0
		}, n[v] = (_ ? "-=" : "+=") + d, o.animate(n, m, g)), o.queue(function () {
			l && o.hide(), t.effects.restore(o, r), t.effects.removeWrapper(o), i()
		}), y > 1 && b.splice.apply(b, [1, 0].concat(b.splice(y, f + 1))), o.dequeue()
	}
})(jQuery);
(function (t) {
	t.effects.effect.clip = function (e, i) {
		var s, n, a, o = t(this),
			r = ["position", "top", "bottom", "left", "right", "height", "width"],
			h = t.effects.setMode(o, e.mode || "hide"),
			l = "show" === h,
			c = e.direction || "vertical",
			u = "vertical" === c,
			d = u ? "height" : "width",
			p = u ? "top" : "left",
			f = {};
		t.effects.save(o, r), o.show(), s = t.effects.createWrapper(o).css({
			overflow: "hidden"
		}), n = "IMG" === o[0].tagName ? s : o, a = n[d](), l && (n.css(d, 0), n.css(p, a / 2)), f[d] = l ? a : 0, f[p] = l ? 0 : a / 2, n.animate(f, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: function () {
				l || o.hide(), t.effects.restore(o, r), t.effects.removeWrapper(o), i()
			}
		})
	}
})(jQuery);
(function (t) {
	t.effects.effect.drop = function (e, i) {
		var s, n = t(this),
			a = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
			o = t.effects.setMode(n, e.mode || "hide"),
			r = "show" === o,
			h = e.direction || "left",
			l = "up" === h || "down" === h ? "top" : "left",
			c = "up" === h || "left" === h ? "pos" : "neg",
			u = {
				opacity: r ? 1 : 0
			};
		t.effects.save(n, a), n.show(), t.effects.createWrapper(n), s = e.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0) / 2, r && n.css("opacity", 0).css(l, "pos" === c ? -s : s), u[l] = (r ? "pos" === c ? "+=" : "-=" : "pos" === c ? "-=" : "+=") + s, n.animate(u, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: function () {
				"hide" === o && n.hide(), t.effects.restore(n, a), t.effects.removeWrapper(n), i()
			}
		})
	}
})(jQuery);
(function (t) {
	t.effects.effect.explode = function (e, i) {
		function s() {
			b.push(this), b.length === u * d && n()
		}

		function n() {
			p.css({
				visibility: "visible"
			}), t(b).remove(), m || p.hide(), i()
		}
		var a, o, r, h, l, c, u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
			d = u,
			p = t(this),
			f = t.effects.setMode(p, e.mode || "hide"),
			m = "show" === f,
			g = p.show().css("visibility", "hidden").offset(),
			v = Math.ceil(p.outerWidth() / d),
			_ = Math.ceil(p.outerHeight() / u),
			b = [];
		for (a = 0; u > a; a++)
			for (h = g.top + a * _, c = a - (u - 1) / 2, o = 0; d > o; o++) r = g.left + o * v, l = o - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({
				position: "absolute",
				visibility: "visible",
				left: -o * v,
				top: -a * _
			}).parent().addClass("ui-effects-explode").css({
				position: "absolute",
				overflow: "hidden",
				width: v,
				height: _,
				left: r + (m ? l * v : 0),
				top: h + (m ? c * _ : 0),
				opacity: m ? 0 : 1
			}).animate({
				left: r + (m ? 0 : l * v),
				top: h + (m ? 0 : c * _),
				opacity: m ? 1 : 0
			}, e.duration || 500, e.easing, s)
	}
})(jQuery);
(function (t) {
	t.effects.effect.fade = function (e, i) {
		var s = t(this),
			n = t.effects.setMode(s, e.mode || "toggle");
		s.animate({
			opacity: n
		}, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: i
		})
	}
})(jQuery);
(function (t) {
	t.effects.effect.fold = function (e, i) {
		var s, n, a = t(this),
			o = ["position", "top", "bottom", "left", "right", "height", "width"],
			r = t.effects.setMode(a, e.mode || "hide"),
			h = "show" === r,
			l = "hide" === r,
			c = e.size || 15,
			u = /([0-9]+)%/.exec(c),
			d = !!e.horizFirst,
			p = h !== d,
			f = p ? ["width", "height"] : ["height", "width"],
			m = e.duration / 2,
			g = {},
			v = {};
		t.effects.save(a, o), a.show(), s = t.effects.createWrapper(a).css({
			overflow: "hidden"
		}), n = p ? [s.width(), s.height()] : [s.height(), s.width()], u && (c = parseInt(u[1], 10) / 100 * n[l ? 0 : 1]), h && s.css(d ? {
			height: 0,
			width: c
		} : {
			height: c,
			width: 0
		}), g[f[0]] = h ? n[0] : c, v[f[1]] = h ? n[1] : 0, s.animate(g, m, e.easing).animate(v, m, e.easing, function () {
			l && a.hide(), t.effects.restore(a, o), t.effects.removeWrapper(a), i()
		})
	}
})(jQuery);
(function (t) {
	t.effects.effect.highlight = function (e, i) {
		var s = t(this),
			n = ["backgroundImage", "backgroundColor", "opacity"],
			a = t.effects.setMode(s, e.mode || "show"),
			o = {
				backgroundColor: s.css("backgroundColor")
			};
		"hide" === a && (o.opacity = 0), t.effects.save(s, n), s.show().css({
			backgroundImage: "none",
			backgroundColor: e.color || "#ffff99"
		}).animate(o, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: function () {
				"hide" === a && s.hide(), t.effects.restore(s, n), i()
			}
		})
	}
})(jQuery);
(function (t) {
	t.effects.effect.pulsate = function (e, i) {
		var s, n = t(this),
			a = t.effects.setMode(n, e.mode || "show"),
			o = "show" === a,
			r = "hide" === a,
			h = o || "hide" === a,
			l = 2 * (e.times || 5) + (h ? 1 : 0),
			c = e.duration / l,
			u = 0,
			d = n.queue(),
			p = d.length;
		for ((o || !n.is(":visible")) && (n.css("opacity", 0).show(), u = 1), s = 1; l > s; s++) n.animate({
			opacity: u
		}, c, e.easing), u = 1 - u;
		n.animate({
			opacity: u
		}, c, e.easing), n.queue(function () {
			r && n.hide(), i()
		}), p > 1 && d.splice.apply(d, [1, 0].concat(d.splice(p, l + 1))), n.dequeue()
	}
})(jQuery);
(function (t) {
	t.effects.effect.puff = function (e, i) {
		var s = t(this),
			n = t.effects.setMode(s, e.mode || "hide"),
			a = "hide" === n,
			o = parseInt(e.percent, 10) || 150,
			r = o / 100,
			h = {
				height: s.height(),
				width: s.width(),
				outerHeight: s.outerHeight(),
				outerWidth: s.outerWidth()
			};
		t.extend(e, {
			effect: "scale",
			queue: !1,
			fade: !0,
			mode: n,
			complete: i,
			percent: a ? o : 100,
			from: a ? h : {
				height: h.height * r,
				width: h.width * r,
				outerHeight: h.outerHeight * r,
				outerWidth: h.outerWidth * r
			}
		}), s.effect(e)
	}, t.effects.effect.scale = function (e, i) {
		var s = t(this),
			n = t.extend(!0, {}, e),
			a = t.effects.setMode(s, e.mode || "effect"),
			o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "hide" === a ? 0 : 100),
			r = e.direction || "both",
			h = e.origin,
			l = {
				height: s.height(),
				width: s.width(),
				outerHeight: s.outerHeight(),
				outerWidth: s.outerWidth()
			},
			c = {
				y: "horizontal" !== r ? o / 100 : 1,
				x: "vertical" !== r ? o / 100 : 1
			};
		n.effect = "size", n.queue = !1, n.complete = i, "effect" !== a && (n.origin = h || ["middle", "center"], n.restore = !0), n.from = e.from || ("show" === a ? {
			height: 0,
			width: 0,
			outerHeight: 0,
			outerWidth: 0
		} : l), n.to = {
			height: l.height * c.y,
			width: l.width * c.x,
			outerHeight: l.outerHeight * c.y,
			outerWidth: l.outerWidth * c.x
		}, n.fade && ("show" === a && (n.from.opacity = 0, n.to.opacity = 1), "hide" === a && (n.from.opacity = 1, n.to.opacity = 0)), s.effect(n)
	}, t.effects.effect.size = function (e, i) {
		var s, n, a, o = t(this),
			r = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
			h = ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
			l = ["width", "height", "overflow"],
			c = ["fontSize"],
			u = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
			d = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
			p = t.effects.setMode(o, e.mode || "effect"),
			f = e.restore || "effect" !== p,
			m = e.scale || "both",
			g = e.origin || ["middle", "center"],
			v = o.css("position"),
			_ = f ? r : h,
			b = {
				height: 0,
				width: 0,
				outerHeight: 0,
				outerWidth: 0
			};
		"show" === p && o.show(), s = {
			height: o.height(),
			width: o.width(),
			outerHeight: o.outerHeight(),
			outerWidth: o.outerWidth()
		}, "toggle" === e.mode && "show" === p ? (o.from = e.to || b, o.to = e.from || s) : (o.from = e.from || ("show" === p ? b : s), o.to = e.to || ("hide" === p ? b : s)), a = {
			from: {
				y: o.from.height / s.height,
				x: o.from.width / s.width
			},
			to: {
				y: o.to.height / s.height,
				x: o.to.width / s.width
			}
		}, ("box" === m || "both" === m) && (a.from.y !== a.to.y && (_ = _.concat(u), o.from = t.effects.setTransition(o, u, a.from.y, o.from), o.to = t.effects.setTransition(o, u, a.to.y, o.to)), a.from.x !== a.to.x && (_ = _.concat(d), o.from = t.effects.setTransition(o, d, a.from.x, o.from), o.to = t.effects.setTransition(o, d, a.to.x, o.to))), ("content" === m || "both" === m) && a.from.y !== a.to.y && (_ = _.concat(c).concat(l), o.from = t.effects.setTransition(o, c, a.from.y, o.from), o.to = t.effects.setTransition(o, c, a.to.y, o.to)), t.effects.save(o, _), o.show(), t.effects.createWrapper(o), o.css("overflow", "hidden").css(o.from), g && (n = t.effects.getBaseline(g, s), o.from.top = (s.outerHeight - o.outerHeight()) * n.y, o.from.left = (s.outerWidth - o.outerWidth()) * n.x, o.to.top = (s.outerHeight - o.to.outerHeight) * n.y, o.to.left = (s.outerWidth - o.to.outerWidth) * n.x), o.css(o.from), ("content" === m || "both" === m) && (u = u.concat(["marginTop", "marginBottom"]).concat(c), d = d.concat(["marginLeft", "marginRight"]), l = r.concat(u).concat(d), o.find("*[width]").each(function () {
			var i = t(this),
				s = {
					height: i.height(),
					width: i.width(),
					outerHeight: i.outerHeight(),
					outerWidth: i.outerWidth()
				};
			f && t.effects.save(i, l), i.from = {
				height: s.height * a.from.y,
				width: s.width * a.from.x,
				outerHeight: s.outerHeight * a.from.y,
				outerWidth: s.outerWidth * a.from.x
			}, i.to = {
				height: s.height * a.to.y,
				width: s.width * a.to.x,
				outerHeight: s.height * a.to.y,
				outerWidth: s.width * a.to.x
			}, a.from.y !== a.to.y && (i.from = t.effects.setTransition(i, u, a.from.y, i.from), i.to = t.effects.setTransition(i, u, a.to.y, i.to)), a.from.x !== a.to.x && (i.from = t.effects.setTransition(i, d, a.from.x, i.from), i.to = t.effects.setTransition(i, d, a.to.x, i.to)), i.css(i.from), i.animate(i.to, e.duration, e.easing, function () {
				f && t.effects.restore(i, l)
			})
		})), o.animate(o.to, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: function () {
				0 === o.to.opacity && o.css("opacity", o.from.opacity), "hide" === p && o.hide(), t.effects.restore(o, _), f || ("static" === v ? o.css({
					position: "relative",
					top: o.to.top,
					left: o.to.left
				}) : t.each(["top", "left"], function (t, e) {
					o.css(e, function (e, i) {
						var s = parseInt(i, 10),
							n = t ? o.to.left : o.to.top;
						return "auto" === i ? n + "px" : s + n + "px"
					})
				})), t.effects.removeWrapper(o), i()
			}
		})
	}
})(jQuery);
(function (t) {
	t.effects.effect.shake = function (e, i) {
		var s, n = t(this),
			a = ["position", "top", "bottom", "left", "right", "height", "width"],
			o = t.effects.setMode(n, e.mode || "effect"),
			r = e.direction || "left",
			h = e.distance || 20,
			l = e.times || 3,
			c = 2 * l + 1,
			u = Math.round(e.duration / c),
			d = "up" === r || "down" === r ? "top" : "left",
			p = "up" === r || "left" === r,
			f = {},
			m = {},
			g = {},
			v = n.queue(),
			_ = v.length;
		for (t.effects.save(n, a), n.show(), t.effects.createWrapper(n), f[d] = (p ? "-=" : "+=") + h, m[d] = (p ? "+=" : "-=") + 2 * h, g[d] = (p ? "-=" : "+=") + 2 * h, n.animate(f, u, e.easing), s = 1; l > s; s++) n.animate(m, u, e.easing).animate(g, u, e.easing);
		n.animate(m, u, e.easing).animate(f, u / 2, e.easing).queue(function () {
			"hide" === o && n.hide(), t.effects.restore(n, a), t.effects.removeWrapper(n), i()
		}), _ > 1 && v.splice.apply(v, [1, 0].concat(v.splice(_, c + 1))), n.dequeue()
	}
})(jQuery);
(function (t) {
	t.effects.effect.slide = function (e, i) {
		var s, n = t(this),
			a = ["position", "top", "bottom", "left", "right", "width", "height"],
			o = t.effects.setMode(n, e.mode || "show"),
			r = "show" === o,
			h = e.direction || "left",
			l = "up" === h || "down" === h ? "top" : "left",
			c = "up" === h || "left" === h,
			u = {};
		t.effects.save(n, a), n.show(), s = e.distance || n["top" === l ? "outerHeight" : "outerWidth"](!0), t.effects.createWrapper(n).css({
			overflow: "hidden"
		}), r && n.css(l, c ? isNaN(s) ? "-" + s : -s : s), u[l] = (r ? c ? "+=" : "-=" : c ? "-=" : "+=") + s, n.animate(u, {
			queue: !1,
			duration: e.duration,
			easing: e.easing,
			complete: function () {
				"hide" === o && n.hide(), t.effects.restore(n, a), t.effects.removeWrapper(n), i()
			}
		})
	}
})(jQuery);
(function (t) {
	t.effects.effect.transfer = function (e, i) {
		var s = t(this),
			n = t(e.to),
			a = "fixed" === n.css("position"),
			o = t("body"),
			r = a ? o.scrollTop() : 0,
			h = a ? o.scrollLeft() : 0,
			l = n.offset(),
			c = {
				top: l.top - r,
				left: l.left - h,
				height: n.innerHeight(),
				width: n.innerWidth()
			},
			u = s.offset(),
			d = t("<div class='ui-effects-transfer'></div>").appendTo(document.body).addClass(e.className).css({
				top: u.top - r,
				left: u.left - h,
				height: s.innerHeight(),
				width: s.innerWidth(),
				position: a ? "fixed" : "absolute"
			}).animate(c, e.duration, e.easing, function () {
				d.remove(), i()
			})
	}
})(jQuery);

/*
 **  Anderson Ferminiano
 **  contato@andersonferminiano.com -- feel free to contact me for bugs or new implementations.
 **  jQuery ScrollPagination
 **  28th/March/2011
 **  http://andersonferminiano.com/jqueryscrollpagination/
 **  You may use this script for free, but keep my credits.
 **  Thank you.
 */

// News scrolling #Base Script on Kaust
! function (n) {
	n.fn.scrollPagination = function (t) {
		var a = n.extend(n.fn.scrollPagination.defaults, t),
			l = a.scrollTarget;
		return null == l && (l = obj), a.scrollTarget = l, this.each(function () {
			n.fn.scrollPagination.init(n(this), a)
		})
	}, n.fn.stopScrollPagination = function () {
		return this.each(function () {
			n(this).attr("scrollPagination", "disabled")
		})
	}, n.fn.scrollPagination.loadContent = function (t, a) {
		var l = a.scrollTarget,
			o = n(l).scrollTop() + a.heightOffset >= n(document).height() - n(l).height();
		o && (null != a.beforeLoad && a.beforeLoad(), n(t).children().attr("rel", "loaded"), n.ajax({
			type: "POST",
			url: a.contentPage,
			data: a.contentData,
			success: function (l) {
				n(t).append(l);
				var o = n(t).children("[rel!=loaded]");
				null != a.afterLoad && a.afterLoad(o)
			},
			dataType: "html"
		}))
	}, n.fn.scrollPagination.init = function (t, a) {
		var l = a.scrollTarget;
		n(t).attr("scrollPagination", "enabled"), n(l).scroll(function (l) {
			"enabled" == n(t).attr("scrollPagination") ? n.fn.scrollPagination.loadContent(t, a) : l.stopPropagation()
		}), n.fn.scrollPagination.loadContent(t, a)
	}, n.fn.scrollPagination.defaults = {
		contentPage: null,
		contentData: {},
		beforeLoad: null,
		afterLoad: null,
		scrollTarget: null,
		heightOffset: 0
	}
}(jQuery);
// Easy Responsive Tabs Plugin
// Author: Samson.Onna <Email : samson3d@gmail.com>
! function (t) {
	t.fn.extend({
		easyResponsiveTabs: function (a) {
			var e = {
					type: "default",
					width: "auto",
					fit: !0,
					closed: !1,
					tabidentify: "",
					activetab_bg: "white",
					inactive_bg: "#F5F5F5",
					active_border_color: "#c1c1c1",
					active_content_border_color: "#c1c1c1",
					activate: function () {}
				},
				a = t.extend(e, a),
				i = a,
				r = i.type,
				o = i.fit,
				s = i.width,
				c = "vertical",
				n = "accordion",
				d = window.location.hash,
				b = !(!window.history || !history.replaceState);
			t(this).bind("tabactivate", function (t, e) {
				"function" == typeof a.activate && a.activate.call(e, t)
			}), this.each(function () {
				function e() {
					r == c && i.addClass("resp-vtabs").addClass(a.tabidentify), 1 == o && i.css({
						width: "100%",
						margin: "0px"
					}), r == n && (i.addClass("resp-easy-accordion").addClass(a.tabidentify), i.find(".resp-tabs-list").css("display", "none"))
				}
				var i = t(this),
					l = i.find("ul.resp-tabs-list." + a.tabidentify),
					f = i.attr("id");
				i.find("ul.resp-tabs-list." + a.tabidentify + " li").addClass("resp-tab-item").addClass(a.tabidentify), i.css({
					display: "block",
					width: s
				}), "vertical" == a.type && l.css("margin-top", "3px"), i.find(".resp-tabs-container." + a.tabidentify).css("border-color", a.active_content_border_color), i.find(".resp-tabs-container." + a.tabidentify + " > div").addClass("resp-tab-content").addClass(a.tabidentify), e();
				var p;
				i.find(".resp-tab-content." + a.tabidentify).before("<h2 class='resp-accordion " + a.tabidentify + "' role='tab'><span class='resp-arrow'></span></h2>"), i.find(".resp-tab-content." + a.tabidentify).prev("h2").css({
					"background-color": a.inactive_bg,
					"border-color": a.active_border_color
				});
				var v = 0;
				i.find(".resp-accordion").each(function () {
					p = t(this);
					var e = i.find(".resp-tab-item:eq(" + v + ")"),
						r = i.find(".resp-accordion:eq(" + v + ")");
					r.append(e.html()), r.data(e.data()), p.attr("aria-controls", a.tabidentify + "_tab_item-" + v), v++
				});
				var y, h = 0;
				i.find(".resp-tab-item").each(function () {
					$tabItem = t(this), $tabItem.attr("aria-controls", a.tabidentify + "_tab_item-" + h), $tabItem.attr("role", "tab"), $tabItem.css({
						"background-color": a.inactive_bg,
						"border-color": "none"
					});
					var e = 0;
					i.find(".resp-tab-content." + a.tabidentify).each(function () {
						y = t(this), y.attr("aria-labelledby", a.tabidentify + "_tab_item-" + e).css({
							"border-color": a.active_border_color
						}), e++
					}), h++
				});
				var _ = 0;
				if ("" != d) {
					var u = d.match(new RegExp(f + "([0-9]+)"));
					null !== u && 2 === u.length && (_ = parseInt(u[1], 10) - 1, _ > h && (_ = 0))
				}
				t(i.find(".resp-tab-item." + a.tabidentify)[_]).addClass("resp-tab-active").css({
					"background-color": a.activetab_bg,
					"border-color": a.active_border_color
				}), a.closed === !0 || "accordion" === a.closed && !l.is(":visible") || "tabs" === a.closed && l.is(":visible") || (t(i.find(".resp-accordion." + a.tabidentify)[_]).addClass("resp-tab-active").css({
					"background-color": a.activetab_bg + " !important",
					"border-color": a.active_border_color,
					background: "none"
				}), t(i.find(".resp-tab-content." + a.tabidentify)[_]).addClass("resp-tab-content-active").addClass(a.tabidentify).attr("style", "display:block")), i.find("[role=tab]").each(function () {
					var e = t(this);
					e.click(function () {
						var e = t(this),
							r = e.attr("aria-controls");
						if (e.hasClass("resp-accordion") && e.hasClass("resp-tab-active")) return i.find(".resp-tab-content-active." + a.tabidentify).slideUp("", function () {
							t(this).addClass("resp-accordion-closed")
						}), e.removeClass("resp-tab-active").css({
							"background-color": a.inactive_bg,
							"border-color": "none"
						}), !1;
						if (!e.hasClass("resp-tab-active") && e.hasClass("resp-accordion") ? (i.find(".resp-tab-active." + a.tabidentify).removeClass("resp-tab-active").css({
								"background-color": a.inactive_bg,
								"border-color": "none"
							}), i.find(".resp-tab-content-active." + a.tabidentify).slideUp().removeClass("resp-tab-content-active resp-accordion-closed"), i.find("[aria-controls=" + r + "]").addClass("resp-tab-active").css({
								"background-color": a.activetab_bg,
								"border-color": a.active_border_color
							}), i.find(".resp-tab-content[aria-labelledby = " + r + "]." + a.tabidentify).slideDown().addClass("resp-tab-content-active")) : (console.log("here"), i.find(".resp-tab-active." + a.tabidentify).removeClass("resp-tab-active").css({
								"background-color": a.inactive_bg,
								"border-color": "none"
							}), i.find(".resp-tab-content-active." + a.tabidentify).removeAttr("style").removeClass("resp-tab-content-active").removeClass("resp-accordion-closed"), i.find("[aria-controls=" + r + "]").addClass("resp-tab-active").css({
								"background-color": a.activetab_bg,
								"border-color": a.active_border_color
							}), i.find(".resp-tab-content[aria-labelledby = " + r + "]." + a.tabidentify).addClass("resp-tab-content-active").attr("style", "display:block")), e.trigger("tabactivate", e), b) {
							var o = window.location.hash,
								s = r.split("tab_item-"),
								c = f + (parseInt(s[1], 10) + 1).toString();
							if ("" != o) {
								var n = new RegExp(f + "[0-9]+");
								c = null != o.match(n) ? o.replace(n, c) : o + "|" + c
							} else c = "#" + c;
							history.replaceState(null, null, c)
						}
					})
				}), t(window).resize(function () {
					i.find(".resp-accordion-closed").removeAttr("style")
				})
			})
		}
	})
}(jQuery);
/**
 * simplePagination.js v1.6
 * A simple jQuery pagination plugin.
 * http://flaviusmatis.github.com/simplePagination.js/
 *
 * Copyright 2012, Flavius Matis
 * Released under the MIT license.
 * http://flaviusmatis.github.com/license.html
 */
! function (e) {
	var a = {
		init: function (t) {
			var s = e.extend({
					items: 1,
					itemsOnPage: 1,
					pages: 0,
					displayedPages: 5,
					edges: 2,
					currentPage: 0,
					hrefTextPrefix: "#page-",
					hrefTextSuffix: "",
					prevText: "Prev",
					nextText: "Next",
					ellipseText: "&hellip;",
					cssStyle: "light-theme",
					labelMap: [],
					selectOnClick: !0,
					nextAtFront: !1,
					invertPageOrder: !1,
					useStartEdge: !0,
					useEndEdge: !0,
					onPageClick: function (e, a) {},
					onInit: function () {}
				}, t || {}),
				n = this;
			return s.pages = s.pages ? s.pages : Math.ceil(s.items / s.itemsOnPage) ? Math.ceil(s.items / s.itemsOnPage) : 1, s.currentPage ? s.currentPage = s.currentPage - 1 : s.currentPage = s.invertPageOrder ? s.pages - 1 : 0, s.halfDisplayed = s.displayedPages / 2, this.each(function () {
				n.addClass(s.cssStyle + " simple-pagination").data("pagination", s), a._draw.call(n)
			}), s.onInit(), this
		},
		selectPage: function (e) {
			return a._selectPage.call(this, e - 1), this
		},
		prevPage: function () {
			var e = this.data("pagination");
			return e.invertPageOrder ? e.currentPage < e.pages - 1 && a._selectPage.call(this, e.currentPage + 1) : e.currentPage > 0 && a._selectPage.call(this, e.currentPage - 1), this
		},
		nextPage: function () {
			var e = this.data("pagination");
			return e.invertPageOrder ? e.currentPage > 0 && a._selectPage.call(this, e.currentPage - 1) : e.currentPage < e.pages - 1 && a._selectPage.call(this, e.currentPage + 1), this
		},
		getPagesCount: function () {
			return this.data("pagination").pages
		},
		getCurrentPage: function () {
			return this.data("pagination").currentPage + 1
		},
		destroy: function () {
			return this.empty(), this
		},
		drawPage: function (e) {
			var t = this.data("pagination");
			return t.currentPage = e - 1, this.data("pagination", t), a._draw.call(this), this
		},
		redraw: function () {
			return a._draw.call(this), this
		},
		disable: function () {
			var e = this.data("pagination");
			return e.disabled = !0, this.data("pagination", e), a._draw.call(this), this
		},
		enable: function () {
			var e = this.data("pagination");
			return e.disabled = !1, this.data("pagination", e), a._draw.call(this), this
		},
		updateItems: function (e) {
			var t = this.data("pagination");
			t.items = e, t.pages = a._getPages(t), this.data("pagination", t), a._draw.call(this)
		},
		updateItemsOnPage: function (e) {
			var t = this.data("pagination");
			return t.itemsOnPage = e, t.pages = a._getPages(t), this.data("pagination", t), a._selectPage.call(this, 0), this
		},
		_draw: function () {
			var t, s, n = this.data("pagination"),
				i = a._getInterval(n);
			a.destroy.call(this), s = "function" == typeof this.prop ? this.prop("tagName") : this.attr("tagName");
			var r = "UL" === s ? this : e("<ul></ul>").appendTo(this);
			if (n.prevText && a._appendItem.call(this, n.invertPageOrder ? n.currentPage + 1 : n.currentPage - 1, {
					text: n.prevText,
					classes: "prev"
				}), n.nextText && n.nextAtFront && a._appendItem.call(this, n.invertPageOrder ? n.currentPage - 1 : n.currentPage + 1, {
					text: n.nextText,
					classes: "next"
				}), n.invertPageOrder) {
				if (i.end < n.pages && n.edges > 0) {
					if (n.useStartEdge) {
						var l = Math.max(n.pages - n.edges, i.end);
						for (t = n.pages - 1; t >= l; t--) a._appendItem.call(this, t)
					}
					n.pages - n.edges > i.end && n.pages - n.edges - i.end != 1 ? r.append('<li class="disabled"><span class="ellipse">' + n.ellipseText + "</span></li>") : n.pages - n.edges - i.end == 1 && a._appendItem.call(this, i.end)
				}
			} else if (i.start > 0 && n.edges > 0) {
				if (n.useStartEdge) {
					var g = Math.min(n.edges, i.start);
					for (t = 0; g > t; t++) a._appendItem.call(this, t)
				}
				n.edges < i.start && i.start - n.edges != 1 ? r.append('<li class="disabled"><span class="ellipse">' + n.ellipseText + "</span></li>") : i.start - n.edges == 1 && a._appendItem.call(this, n.edges)
			}
			if (n.invertPageOrder)
				for (t = i.end - 1; t >= i.start; t--) a._appendItem.call(this, t);
			else
				for (t = i.start; t < i.end; t++) a._appendItem.call(this, t);
			if (n.invertPageOrder) {
				if (i.start > 0 && n.edges > 0 && (n.edges < i.start && i.start - n.edges != 1 ? r.append('<li class="disabled"><span class="ellipse">' + n.ellipseText + "</span></li>") : i.start - n.edges == 1 && a._appendItem.call(this, n.edges), n.useEndEdge)) {
					var g = Math.min(n.edges, i.start);
					for (t = g - 1; t >= 0; t--) a._appendItem.call(this, t)
				}
			} else if (i.end < n.pages && n.edges > 0 && (n.pages - n.edges > i.end && n.pages - n.edges - i.end != 1 ? r.append('<li class="disabled"><span class="ellipse">' + n.ellipseText + "</span></li>") : n.pages - n.edges - i.end == 1 && a._appendItem.call(this, i.end), n.useEndEdge)) {
				var l = Math.max(n.pages - n.edges, i.end);
				for (t = l; t < n.pages; t++) a._appendItem.call(this, t)
			}
			n.nextText && !n.nextAtFront && a._appendItem.call(this, n.invertPageOrder ? n.currentPage - 1 : n.currentPage + 1, {
				text: n.nextText,
				classes: "next"
			})
		},
		_getPages: function (e) {
			var a = Math.ceil(e.items / e.itemsOnPage);
			return a || 1
		},
		_getInterval: function (e) {
			return {
				start: Math.ceil(e.currentPage > e.halfDisplayed ? Math.max(Math.min(e.currentPage - e.halfDisplayed, e.pages - e.displayedPages), 0) : 0),
				end: Math.ceil(e.currentPage > e.halfDisplayed ? Math.min(e.currentPage + e.halfDisplayed, e.pages) : Math.min(e.displayedPages, e.pages))
			}
		},
		_appendItem: function (t, s) {
			var n, i, r = this,
				l = r.data("pagination"),
				g = e("<li></li>"),
				d = r.find("ul");
			t = 0 > t ? 0 : t < l.pages ? t : l.pages - 1, n = {
				text: t + 1,
				classes: ""
			}, l.labelMap.length && l.labelMap[t] && (n.text = l.labelMap[t]), n = e.extend(n, s || {}), t == l.currentPage || l.disabled ? (l.disabled ? g.addClass("disabled") : g.addClass("active"), i = e('<span class="current">' + n.text + "</span>")) : (i = e('<a href="' + l.hrefTextPrefix + (t + 1) + l.hrefTextSuffix + '" class="page-link">' + n.text + "</a>"), i.click(function (e) {
				return a._selectPage.call(r, t, e)
			})), n.classes && i.addClass(n.classes), g.append(i), d.length ? d.append(g) : r.append(g)
		},
		_selectPage: function (e, t) {
			var s = this.data("pagination");
			return s.currentPage = e, s.selectOnClick && a._draw.call(this), s.onPageClick(e + 1, t)
		}
	};
	e.fn.pagination = function (t) {
		return a[t] && "_" != t.charAt(0) ? a[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist on jQuery.pagination") : a.init.apply(this, arguments)
	}
}(jQuery);
/* 
 * Naver v3.1.2 - 2014-11-25 
 * A jQuery plugin for responsive navigation. Part of the Formstone Library. 
 * http://formstone.it/naver/ 
 * 
 * Copyright 2014 Ben Plum; MIT Licensed 
 */
! function (a, b) {
	"use strict";

	function c(b) {
		b = a.extend(!0, {}, j, b);
		for (var c = a(this), e = 0, f = c.length; f > e; e++) d(c.eq(e), b);
		return c
	}

	function d(c, d) {
		if (!c.data("naver")) {
			d = a.extend(!0, {}, d, c.data("naver-options"));
			var f = c.find(".naver-handle").length ? c.find(".naver-handle").detach() : a('<span class="naver-handle"></span>');
			c.addClass("naver " + d.customClass).wrapInner('<div class="naver-container"></div>').wrapInner('<div class="naver-wrapper"></div>').prepend(f);
			var g = a.extend(!0, {
				$nav: c,
				$container: c.find(".naver-container"),
				$wrapper: c.find(".naver-wrapper"),
				$handle: c.find(".naver-handle")
			}, d);
			g.$handle.text(d.label ? d.labels.closed : ""), g.$nav.on("touchstart.naver", ".naver-handle", g, e).on("click.naver", ".naver-handle", g, h).data("naver", g), void 0 !== b.matchMedia && (g.mediaQuery = b.matchMedia("(max-width:" + (1 / 0 === g.maxWidth ? "100000px" : g.maxWidth) + ")"), g.mediaQuery.addListener(function () {
				i.apply(g.$nav)
			}), i.apply(g.$nav))
		}
	}

	function e(a) {
		a.stopPropagation();
		var b = a.data;
		b.touchStartEvent = a.originalEvent, b.touchStartX = b.touchStartEvent.touches[0].clientX, b.touchStartY = b.touchStartEvent.touches[0].clientY, b.$nav.on("touchmove.naver", ".naver-handle", b, f).on("touchend.naver", ".naver-handle", b, g)
	}

	function f(a) {
		var b = a.data,
			c = a.originalEvent;
		(Math.abs(c.touches[0].clientX - b.touchStartX) > 10 || Math.abs(c.touches[0].clientY - b.touchStartY) > 10) && b.$nav.off("touchmove.naver touchend.naver")
	}

	function g(a) {
		a.preventDefault(), a.stopPropagation();
		var b = a.data;
		b.touchStartEvent.preventDefault(), b.$nav.off("touchmove.naver touchend.naver click.naver"), h(a)
	}

	function h(b) {
		b.preventDefault(), b.stopPropagation();
		var c = (a(b.currentTarget), b.data);
		a(".naver").not(c.$nav).naver("close"), c.$nav.hasClass("open") ? k.close.apply(c.$nav) : k.open.apply(c.$nav)
	}

	function i() {
		var b = a(this).data("naver");
		b.mediaQuery.matches ? k.enable.apply(b.$nav) : k.disable.apply(b.$nav)
	}
	var j = {
			customClass: "",
			label: !0,
			labels: {
				closed: "",
				open: ""
			},
			maxWidth: "780px"
		},
		k = {
			close: function () {
				return a(this).each(function (b, c) {
					var d = a(c).data("naver");
					d && d.$nav.hasClass("enabled") && (d.$wrapper.css({
						height: 0
					}), d.label && d.$handle.html(d.labels.closed), d.$nav.removeClass("open").trigger("close.naver"))
				})
			},
			defaults: function (b) {
				return j = a.extend(!0, j, b || {}), "object" == typeof this ? a(this) : !0
			},
			disable: function () {
				return a(this).each(function (b, c) {
					var d = a(c).data("naver");
					d && (d.$nav.removeClass("enabled"), d.$wrapper.css({
						height: ""
					}))
				})
			},
			destroy: function () {
				return a(this).each(function (b, c) {
					var d = a(c).data("naver");
					d && (d.$handle.remove(), d.$container.contents().unwrap().unwrap(), d.$nav.removeClass("enabled disabled naver " + d.customClass).off(".naver").removeData("naver"))
				})
			},
			enable: function () {
				return a(this).each(function (b, c) {
					var d = a(c).data("naver");
					d && (d.$nav.addClass("enabled"), k.close.apply(d.$nav))
				})
			},
			open: function () {
				return a(this).each(function (b, c) {
					var d = a(c).data("naver");
					d && d.$nav.hasClass("enabled") && (d.$wrapper.css({
						height: d.$container.outerHeight(!0)
					}), d.label && d.$handle.html(d.labels.open), d.$nav.addClass("open").trigger("open.naver"))
				})
			}
		};
	a.fn.naver = function (a) {
		return k[a] ? k[a].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof a && a ? this : c.apply(this, arguments)
	}, a.naver = function (a) {
		"defaults" === a && k.defaults.apply(this, Array.prototype.slice.call(arguments, 1))
	}
}(jQuery, window);

/*
 * # Semantic UI
 * https://github.com/Semantic-Org/Semantic-UI
 * http://www.semantic-ui.com/
 *
 * Copyright 2014 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
! function (e, t, a, n) {
	"use strict";
	e.tab = e.fn.tab = function (a) {
		var i, o, r = e(e.isFunction(this) ? t : this),
			s = e.isPlainObject(a) ? e.extend(!0, {}, e.fn.tab.settings, a) : e.extend({}, e.fn.tab.settings),
			c = r.selector || "",
			u = (new Date).getTime(),
			l = [],
			d = arguments[0],
			b = "string" == typeof d,
			g = [].slice.call(arguments, 1);
		return r.each(function () {
			var a, f, p, h, m, v = s.className,
				y = s.metadata,
				T = s.selector,
				x = s.error,
				A = "." + s.namespace,
				P = "module-" + s.namespace,
				C = e(this),
				E = {},
				S = !0,
				w = 0,
				z = this,
				j = C.data(P);
			i = {
				initialize: function () {
					i.debug("Initializing tab menu item", C), i.determineTabs(), i.debug("Determining tabs", s.context, f), s.auto && (i.verbose("Setting up automatic tab retrieval from server"), s.apiSettings = {
						url: s.path + "/{$tab}"
					}), e.isWindow(z) || (i.debug("Attaching tab activation events to element", C), C.on("click" + A, i.event.click)), i.instantiate()
				},
				determineTabs: function () {
					var t;
					"parent" === s.context ? (C.closest(T.ui).size() > 0 ? (t = C.closest(T.ui), i.verbose("Using closest UI element for determining parent", t)) : t = C, a = t.parent(), i.verbose("Determined parent element for creating context", a)) : s.context ? (a = e(s.context), i.verbose("Using selector for tab context", s.context, a)) : a = e("body"), s.childrenOnly ? (f = a.children(T.tabs), i.debug("Searching tab context children for tabs", a, f)) : (f = a.find(T.tabs), i.debug("Searching tab context for tabs", a, f))
				},
				initializeHistory: function () {
					if (s.history) {
						if (i.debug("Initializing page state"), e.address === n) return i.error(x.state), !1;
						if ("state" == s.historyType) {
							if (i.debug("Using HTML5 to manage state"), s.path === !1) return i.error(x.path), !1;
							e.address.history(!0).state(s.path)
						}
						e.address.bind("change", i.event.history.change)
					}
				},
				instantiate: function () {
					i.verbose("Storing instance of module", i), C.data(P, i)
				},
				destroy: function () {
					i.debug("Destroying tabs", C), C.removeData(P).off(A)
				},
				event: {
					click: function (t) {
						var a = e(this).data(y.tab);
						a !== n ? (s.history ? (i.verbose("Updating page state", t), e.address.value(a)) : (i.verbose("Changing tab", t), i.changeTab(a)), t.preventDefault()) : i.debug("No tab specified")
					},
					history: {
						change: function (t) {
							var a = t.pathNames.join("/") || i.get.initialPath(),
								o = s.templates.determineTitle(a) || !1;
							i.performance.display(), i.debug("History change event", a, t), m = t, a !== n && i.changeTab(a), o && e.address.title(o)
						}
					}
				},
				refresh: function () {
					p && (i.debug("Refreshing tab", p), i.changeTab(p))
				},
				cache: {
					read: function (e) {
						return e !== n ? E[e] : !1
					},
					add: function (e, t) {
						e = e || p, i.debug("Adding cached content for", e), E[e] = t
					},
					remove: function (e) {
						e = e || p, i.debug("Removing cached content for", e), delete E[e]
					}
				},
				set: {
					state: function (t) {
						e.address.value(t)
					}
				},
				changeTab: function (n) {
					var o = t.history && t.history.pushState,
						r = o && s.ignoreFirstLoad && S,
						c = s.auto || e.isPlainObject(s.apiSettings),
						u = c && !r ? i.utilities.pathToArray(n) : i.get.defaultPathArray(n);
					n = i.utilities.arrayToPath(u), e.each(u, function (t, o) {
						var l, d, b, g, f = u.slice(0, t + 1),
							v = i.utilities.arrayToPath(f),
							y = i.is.tab(v),
							T = t + 1 == u.length,
							A = i.get.tabElement(v);
						if (i.verbose("Looking for tab", o), y) {
							if (i.verbose("Tab was found", o), p = v, h = i.utilities.filterArray(u, f), T ? g = !0 : (d = u.slice(0, t + 2), b = i.utilities.arrayToPath(d), g = !i.is.tab(b), g && i.verbose("Tab parameters found", d)), g && c) return r ? (i.debug("Ignoring remote content on first tab load", v), S = !1, i.cache.add(n, A.html()), i.activate.all(v), e.proxy(s.onTabInit, A)(v, h, m), e.proxy(s.onTabLoad, A)(v, h, m)) : (i.activate.navigation(v), i.content.fetch(v, n)), !1;
							i.debug("Opened local tab", v), i.activate.all(v), i.cache.read(v) || (i.cache.add(v, !0), i.debug("First time tab loaded calling tab init"), e.proxy(s.onTabInit, A)(v, h, m)), e.proxy(s.onTabLoad, A)(v, h, m)
						} else {
							if (-1 != n.search("/")) return i.error(x.missingTab, C, a, v), !1;
							if (l = e("#" + n + ', a[name="' + n + '"]'), v = l.closest("[data-tab]").data("tab"), A = i.get.tabElement(v), l && l.size() > 0 && v) return i.debug("No tab found, but deep anchor link present, opening parent tab"), i.activate.all(v), i.cache.read(v) || (i.cache.add(v, !0), i.debug("First time tab loaded calling tab init"), e.proxy(s.onTabInit, A)(v, h, m)), !1
						}
					})
				},
				content: {
					fetch: function (t, a) {
						var o, r, c = i.get.tabElement(t),
							u = {
								dataType: "html",
								stateContext: c,
								onSuccess: function (n) {
									i.cache.add(a, n), i.content.update(t, n), t == p ? (i.debug("Content loaded", t), i.activate.tab(t)) : i.debug("Content loaded in background", t), e.proxy(s.onTabInit, c)(t, h, m), e.proxy(s.onTabLoad, c)(t, h, m)
								},
								urlData: {
									tab: a
								}
							},
							l = c.data(y.promise) || !1,
							d = l && "pending" === l.state();
						a = a || t, r = i.cache.read(a), s.cache && r ? (i.debug("Showing existing content", a), i.content.update(t, r), i.activate.tab(t), e.proxy(s.onTabLoad, c)(t, h, m)) : d ? (i.debug("Content is already loading", a), c.addClass(v.loading)) : e.api !== n ? (o = e.extend(!0, {
							headers: {
								"X-Remote": !0
							}
						}, s.apiSettings, u), i.debug("Retrieving remote content", a, o), e.api(o)) : i.error(x.api)
					},
					update: function (e, t) {
						i.debug("Updating html for", e);
						var a = i.get.tabElement(e);
						a.html(t)
					}
				},
				activate: {
					all: function (e) {
						i.activate.tab(e), i.activate.navigation(e)
					},
					tab: function (e) {
						var t = i.get.tabElement(e);
						i.verbose("Showing tab content for", t), t.addClass(v.active).siblings(f).removeClass(v.active + " " + v.loading)
					},
					navigation: function (e) {
						var t = i.get.navElement(e);
						i.verbose("Activating tab navigation for", t, e), t.addClass(v.active).siblings(r).removeClass(v.active + " " + v.loading)
					}
				},
				deactivate: {
					all: function () {
						i.deactivate.navigation(), i.deactivate.tabs()
					},
					navigation: function () {
						r.removeClass(v.active)
					},
					tabs: function () {
						f.removeClass(v.active + " " + v.loading)
					}
				},
				is: {
					tab: function (e) {
						return e !== n ? i.get.tabElement(e).size() > 0 : !1
					}
				},
				get: {
					initialPath: function () {
						return r.eq(0).data(y.tab) || f.eq(0).data(y.tab)
					},
					path: function () {
						return e.address.value()
					},
					defaultPathArray: function (e) {
						return i.utilities.pathToArray(i.get.defaultPath(e))
					},
					defaultPath: function (e) {
						var t = r.filter("[data-" + y.tab + '^="' + e + '/"]').eq(0),
							a = t.data(y.tab) || !1;
						if (a) {
							if (i.debug("Found default tab", a), w < s.maxDepth) return w++, i.get.defaultPath(a);
							i.error(x.recursion)
						} else i.debug("No default tabs found for", e, f);
						return w = 0, e
					},
					navElement: function (e) {
						return e = e || p, r.filter("[data-" + y.tab + '="' + e + '"]')
					},
					tabElement: function (e) {
						var t, a, n, o;
						return e = e || p, n = i.utilities.pathToArray(e), o = i.utilities.last(n), t = f.filter("[data-" + y.tab + '="' + o + '"]'), a = f.filter("[data-" + y.tab + '="' + e + '"]'), t.size() > 0 ? t : a
					},
					tab: function () {
						return p
					}
				},
				utilities: {
					filterArray: function (t, a) {
						return e.grep(t, function (t) {
							return -1 == e.inArray(t, a)
						})
					},
					last: function (t) {
						return e.isArray(t) ? t[t.length - 1] : !1
					},
					pathToArray: function (e) {
						return e === n && (e = p), "string" == typeof e ? e.split("/") : [e]
					},
					arrayToPath: function (t) {
						return e.isArray(t) ? t.join("/") : !1
					}
				},
				setting: function (t, a) {
					if (i.debug("Changing setting", t, a), e.isPlainObject(t)) e.extend(!0, s, t);
					else {
						if (a === n) return s[t];
						s[t] = a
					}
				},
				internal: function (t, a) {
					if (e.isPlainObject(t)) e.extend(!0, i, t);
					else {
						if (a === n) return i[t];
						i[t] = a
					}
				},
				debug: function () {
					s.debug && (s.performance ? i.performance.log(arguments) : (i.debug = Function.prototype.bind.call(console.info, console, s.name + ":"), i.debug.apply(console, arguments)))
				},
				verbose: function () {
					s.verbose && s.debug && (s.performance ? i.performance.log(arguments) : (i.verbose = Function.prototype.bind.call(console.info, console, s.name + ":"), i.verbose.apply(console, arguments)))
				},
				error: function () {
					i.error = Function.prototype.bind.call(console.error, console, s.name + ":"), i.error.apply(console, arguments)
				},
				performance: {
					log: function (e) {
						var t, a, n;
						s.performance && (t = (new Date).getTime(), n = u || t, a = t - n, u = t, l.push({
							Name: e[0],
							Arguments: [].slice.call(e, 1) || "",
							Element: z,
							"Execution Time": a
						})), clearTimeout(i.performance.timer), i.performance.timer = setTimeout(i.performance.display, 100)
					},
					display: function () {
						var t = s.name + ":",
							a = 0;
						u = !1, clearTimeout(i.performance.timer), e.each(l, function (e, t) {
							a += t["Execution Time"]
						}), t += " " + a + "ms", c && (t += " '" + c + "'"), (console.group !== n || console.table !== n) && l.length > 0 && (console.groupCollapsed(t), console.table ? console.table(l) : e.each(l, function (e, t) {
							console.log(t.Name + ": " + t["Execution Time"] + "ms")
						}), console.groupEnd()), l = []
					}
				},
				invoke: function (t, a, r) {
					var s, c, u, l = j;
					return a = a || g, r = z || r, "string" == typeof t && l !== n && (t = t.split(/[\. ]/), s = t.length - 1, e.each(t, function (a, o) {
						var r = a != s ? o + t[a + 1].charAt(0).toUpperCase() + t[a + 1].slice(1) : t;
						if (e.isPlainObject(l[r]) && a != s) l = l[r];
						else {
							if (l[r] !== n) return c = l[r], !1;
							if (!e.isPlainObject(l[o]) || a == s) return l[o] !== n ? (c = l[o], !1) : (i.error(x.method, t), !1);
							l = l[o]
						}
					})), e.isFunction(c) ? u = c.apply(r, a) : c !== n && (u = c), e.isArray(o) ? o.push(u) : o !== n ? o = [o, u] : u !== n && (o = u), c
				}
			}, b ? (j === n && i.initialize(), i.invoke(d)) : (j !== n && i.destroy(), i.initialize())
		}), i && !b && i.initializeHistory(), o !== n ? o : this
	}, e.tab = function (a) {
		e(t).tab(a)
	}, e.fn.tab.settings = {
		name: "Tab",
		namespace: "tab",
		debug: !1,
		verbose: !0,
		performance: !0,
		auto: !1,
		history: !1,
		historyType: "hash",
		path: !1,
		context: !1,
		childrenOnly: !1,
		maxDepth: 25,
		ignoreFirstLoad: !1,
		alwaysRefresh: !1,
		cache: !0,
		apiSettings: !1,
		onTabInit: function () {},
		onTabLoad: function () {},
		templates: {
			determineTitle: function () {}
		},
		error: {
			api: "You attempted to load content without API module",
			method: "The method you called is not defined",
			missingTab: "Activated tab cannot be found for this context.",
			noContent: "The tab you specified is missing a content url.",
			path: "History enabled, but no path was specified",
			recursion: "Max recursive depth reached",
			state: "History requires Asual's Address library <https://github.com/asual/jquery-address>"
		},
		metadata: {
			tab: "tab",
			loaded: "loaded",
			promise: "promise"
		},
		className: {
			loading: "loading",
			active: "active"
		},
		selector: {
			tabs: ".ui.tab",
			ui: ".ui"
		}
	}
}(jQuery, window, document);

/**
 * Copyright (c) 2007-2014 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 1.4.9
 */
;
(function (a) {
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], a)
	} else {
		a(jQuery)
	}
}(function ($) {
	var j = $.scrollTo = function (a, b, c) {
		return $(window).scrollTo(a, b, c)
	};
	j.defaults = {
		axis: 'xy',
		duration: parseFloat($.fn.jquery) >= 1.3 ? 0 : 1,
		limit: true
	};
	j.window = function (a) {
		return $(window)._scrollable()
	};
	$.fn._scrollable = function () {
		return this.map(function () {
			var a = this,
				isWin = !a.nodeName || $.inArray(a.nodeName.toLowerCase(), ['iframe', '#document', 'html', 'body']) != -1;
			if (!isWin) return a;
			var b = (a.contentWindow || a).document || a.ownerDocument || a;
			return /webkit/i.test(navigator.userAgent) || b.compatMode == 'BackCompat' ? b.body : b.documentElement
		})
	};
	$.fn.scrollTo = function (f, g, h) {
		if (typeof g == 'object') {
			h = g;
			g = 0
		}
		if (typeof h == 'function') h = {
			onAfter: h
		};
		if (f == 'max') f = 9e9;
		h = $.extend({}, j.defaults, h);
		g = g || h.duration;
		h.queue = h.queue && h.axis.length > 1;
		if (h.queue) g /= 2;
		h.offset = both(h.offset);
		h.over = both(h.over);
		return this._scrollable().each(function () {
			if (f == null) return;
			var d = this,
				$elem = $(d),
				targ = f,
				toff, attr = {},
				win = $elem.is('html,body');
			switch (typeof targ) {
				case 'number':
				case 'string':
					if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)) {
						targ = both(targ);
						break
					}
					targ = $(targ, this);
					if (!targ.length) return;
				case 'object':
					if (targ.is || targ.style) toff = (targ = $(targ)).offset()
			}
			var e = $.isFunction(h.offset) && h.offset(d, targ) || h.offset;
			$.each(h.axis.split(''), function (i, a) {
				var b = a == 'x' ? 'Left' : 'Top',
					pos = b.toLowerCase(),
					key = 'scroll' + b,
					old = d[key],
					max = j.max(d, a);
				if (toff) {
					attr[key] = toff[pos] + (win ? 0 : old - $elem.offset()[pos]);
					if (h.margin) {
						attr[key] -= parseInt(targ.css('margin' + b)) || 0;
						attr[key] -= parseInt(targ.css('border' + b + 'Width')) || 0
					}
					attr[key] += e[pos] || 0;
					if (h.over[pos]) attr[key] += targ[a == 'x' ? 'width' : 'height']() * h.over[pos]
				} else {
					var c = targ[pos];
					attr[key] = c.slice && c.slice(-1) == '%' ? parseFloat(c) / 100 * max : c
				}
				if (h.limit && /^\d+$/.test(attr[key])) attr[key] = attr[key] <= 0 ? 0 : Math.min(attr[key], max);
				if (!i && h.queue) {
					if (old != attr[key]) animate(h.onAfterFirst);
					delete attr[key]
				}
			});
			animate(h.onAfter);

			function animate(a) {
				$elem.animate(attr, g, h.easing, a && function () {
					a.call(this, targ, h)
				})
			}
		}).end()
	};
	j.max = function (a, b) {
		var c = b == 'x' ? 'Width' : 'Height',
			scroll = 'scroll' + c;
		if (!$(a).is('html,body')) return a[scroll] - $(a)[c.toLowerCase()]();
		var d = 'client' + c,
			html = a.ownerDocument.documentElement,
			body = a.ownerDocument.body;
		return Math.max(html[scroll], body[scroll]) - Math.min(html[d], body[d])
	};

	function both(a) {
		return $.isFunction(a) || typeof a == 'object' ? a : {
			top: a,
			left: a
		}
	};
	return j
}));


/*
 * iosSlider - http://iosscripts.com/iosslider/
 * 
 * Touch Enabled, Responsive jQuery Horizontal Content Slider/Carousel/Image Gallery Plugin
 *
 * A jQuery plugin which allows you to integrate a customizable, cross-browser 
 * content slider into your web presence. Designed for use as a content slider, carousel, 
 * scrolling website banner, or image gallery.
 * 
 * Copyright (c) 2013 Marc Whitbread
 * 
 * Version: v1.3.43 (06/17/2014)
 * Minimum requirements: jQuery v1.4+
 *
 * Advanced requirements:
 * 1) jQuery bind() click event override on slide requires jQuery v1.6+
 *
 * Terms of use:
 *
 * 1) iosSlider is licensed under the Creative Commons – Attribution-NonCommercial 3.0 License.
 * 2) You may use iosSlider free for personal or non-profit purposes, without restriction.
 *	  Attribution is not required but always appreciated. For commercial projects, you
 *	  must purchase a license. You may download and play with the script before deciding to
 *	  fully implement it in your project. Making sure you are satisfied, and knowing iosSlider
 *	  is the right script for your project is paramount.
 * 3) You are not permitted to make the resources found on iosscripts.com available for
 *    distribution elsewhere "as is" without prior consent. If you would like to feature
 *    iosSlider on your site, please do not link directly to the resource zip files. Please
 *    link to the appropriate page on iosscripts.com where users can find the download.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 * GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 */

(function (b) {
	var oa = 0,
		X = 0,
		ga = 0,
		T = 0,
		Da = "ontouchstart" in window || 0 < navigator.msMaxTouchPoints,
		Ea = "onorientationchange" in window,
		ca = !1,
		da = !1,
		Y = !1,
		pa = !1,
		ia = !1,
		ea = "pointer",
		va = "pointer",
		ja = [],
		N = [],
		wa = [],
		R = [],
		B = [],
		aa = [],
		y = [],
		n = [],
		t = [],
		qa = [],
		fa = [],
		f = {
			showScrollbar: function (e, c) {
				e.scrollbarHide && b("." + c).css({
					opacity: e.scrollbarOpacity,
					filter: "alpha(opacity:" + 100 * e.scrollbarOpacity + ")"
				})
			},
			hideScrollbar: function (b, c, a, v, g, d, n, t, y, B) {
				if (b.scrollbar && b.scrollbarHide)
					for (var w = a; w < a + 25; w++) c[c.length] = f.hideScrollbarIntervalTimer(10 * w, v[a], (a + 24 - w) / 24, g, d, n, t, y, B, b)
			},
			hideScrollbarInterval: function (e, c, a, v, g, d, n, y, B) {
				T = -1 * e / t[y] * (g - d - n - v);
				f.setSliderOffset("." + a, T);
				b("." + a).css({
					opacity: B.scrollbarOpacity * c,
					filter: "alpha(opacity:" + B.scrollbarOpacity * c * 100 + ")"
				})
			},
			slowScrollHorizontalInterval: function (e, c, a, v, g, d, I, O, J, K, w, x, A, r, u, m, D, k, l) {
				if (l.infiniteSlider) {
					if (a <= -1 * t[m] || a <= -1 * qa[m]) {
						var q = b(e).width();
						if (a <= -1 * qa[m]) {
							var s = -1 * w[0];
							b(c).each(function (a) {
								f.setSliderOffset(b(c)[a], s + D);
								a < x.length && (x[a] = -1 * s);
								s += u[a]
							});
							a += -1 * x[0];
							n[m] = -1 * x[0] + D;
							t[m] = n[m] + q - d;
							y[m] = 0
						}
						for (; a <= -1 * t[m];) {
							var h = 0,
								C = f.getSliderOffset(b(c[0]), "x");
							b(c).each(function (a) {
								f.getSliderOffset(this, "x") < C && (C = f.getSliderOffset(this, "x"), h = a)
							});
							A = n[m] + q;
							f.setSliderOffset(b(c)[h], A);
							n[m] = -1 * x[1] + D;
							t[m] = n[m] + q - d;
							x.splice(0, 1);
							x.splice(x.length, 0, -1 * A + D);
							y[m]++
						}
					}
					if (a >= -1 * n[m] || 0 <= a) {
						q = b(e).width();
						if (0 < a)
							for (s = -1 * w[0], b(c).each(function (a) {
									f.setSliderOffset(b(c)[a], s + D);
									a < x.length && (x[a] = -1 * s);
									s += u[a]
								}), a -= -1 * x[0], n[m] = -1 * x[0] + D, t[m] = n[m] + q - d, y[m] = r; 0 < -1 * x[0] - q + D;) {
								var z = 0,
									L = f.getSliderOffset(b(c[0]), "x");
								b(c).each(function (a) {
									f.getSliderOffset(this, "x") > L && (L = f.getSliderOffset(this, "x"), z = a)
								});
								A = n[m] - u[z];
								f.setSliderOffset(b(c)[z], A);
								x.splice(0, 0, -1 * A + D);
								x.splice(x.length - 1, 1);
								n[m] = -1 * x[0] + D;
								t[m] = n[m] + q - d;
								y[m]--;
								B[m]++
							}
						for (; a > -1 * n[m];) z = 0, L = f.getSliderOffset(b(c[0]), "x"), b(c).each(function (a) {
							f.getSliderOffset(this, "x") > L && (L = f.getSliderOffset(this, "x"), z = a)
						}), A = n[m] - u[z], f.setSliderOffset(b(c)[z], A), x.splice(0, 0, -1 * A + D), x.splice(x.length - 1, 1), n[m] = -1 * x[0] + D, t[m] = n[m] + q - d, y[m]--
					}
				}
				w = !1;
				d = f.calcActiveOffset(l, a, x, d, y[m], r, K, m);
				A = (d + y[m] + r) % r;
				l.infiniteSlider ? A != aa[m] && (w = !0) : d != B[m] && (w = !0);
				if (w && (r = new f.args("change", l, e, b(e).children(":eq(" + A + ")"), A, k), b(e).parent().data("args", r), "" != l.onSlideChange)) l.onSlideChange(r);
				B[m] = d;
				aa[m] = A;
				a = Math.floor(a);
				if (m != b(e).parent().data("args").data.sliderNumber) return !0;
				f.setSliderOffset(e, a);
				l.scrollbar && (T = Math.floor((-1 * a - n[m] + D) / (t[m] - n[m] + D) * (I - O - g)), e = g - J, a >= -1 * n[m] + D ? (e = g - J - -1 * T, f.setSliderOffset(b("." + v), 0)) : (a <= -1 * t[m] + 1 && (e = I - O - J - T), f.setSliderOffset(b("." + v), T)), b("." + v).css({
					width: e + "px"
				}))
			},
			slowScrollHorizontal: function (e, c, a, v, g, d, I, O, J, K, w, x, A, r, u, m, D, k, l, q, s) {
				var h = f.getSliderOffset(e, "x");
				d = [];
				var C = 0,
					z = 25 / 1024 * O;
				frictionCoefficient = s.frictionCoefficient;
				elasticFrictionCoefficient = s.elasticFrictionCoefficient;
				snapFrictionCoefficient = s.snapFrictionCoefficient;
				g > s.snapVelocityThreshold && s.snapToChildren && !l ? C = 1 : g < -1 * s.snapVelocityThreshold && s.snapToChildren && !l && (C = -1);
				g < -1 * z ? g = -1 * z : g > z && (g = z);
				b(e)[0] !== b(k)[0] && (C *= -1, g *= -2);
				k = y[u];
				if (s.infiniteSlider) var L = n[u],
					p = t[u];
				l = [];
				for (var z = [], G = 0; G < A.length; G++) l[G] = A[G], G < c.length && (z[G] = f.getSliderOffset(b(c[G]), "x"));
				for (; 1 < g || -1 > g;) {
					g *= frictionCoefficient;
					h += g;
					(h > -1 * n[u] || h < -1 * t[u]) && !s.infiniteSlider && (g *= elasticFrictionCoefficient, h += g);
					if (s.infiniteSlider) {
						if (h <= -1 * p) {
							for (var p = b(e).width(), N = 0, P = z[0], G = 0; G < z.length; G++) z[G] < P && (P = z[G], N = G);
							G = L + p;
							z[N] = G;
							L = -1 * l[1] + q;
							p = L + p - O;
							l.splice(0, 1);
							l.splice(l.length, 0, -1 * G + q);
							k++
						}
						if (h >= -1 * L) {
							p = b(e).width();
							N = 0;
							P = z[0];
							for (G = 0; G < z.length; G++) z[G] > P && (P = z[G], N = G);
							G = L - r[N];
							z[N] = G;
							l.splice(0, 0, -1 * G + q);
							l.splice(l.length - 1, 1);
							L = -1 * l[0] + q;
							p = L + p - O;
							k--
						}
					}
					d[d.length] = h
				}
				z = !1;
				g = f.calcActiveOffset(s, h, l, O, k, D, B[u], u);
				L = (g + k + D) % D;
				s.snapToChildren && (s.infiniteSlider ? L != aa[u] && (z = !0) : g != B[u] && (z = !0), 0 > C && !z ? (g++, g >= A.length && !s.infiniteSlider && (g = A.length - 1)) : 0 < C && !z && (g--, 0 > g && !s.infiniteSlider && (g = 0)));
				if (s.snapToChildren || (h > -1 * n[u] || h < -1 * t[u]) && !s.infiniteSlider) {
					(h > -1 * n[u] || h < -1 * t[u]) && !s.infiniteSlider ? d.splice(0, d.length) : (d.splice(.1 * d.length, d.length), h = 0 < d.length ? d[d.length - 1] : h);
					for (; h < l[g] - .5 || h > l[g] + .5;) h = (h - l[g]) * snapFrictionCoefficient + l[g], d[d.length] = h;
					d[d.length] = l[g]
				}
				C = 1;
				0 != d.length % 2 && (C = 0);
				for (h = 0; h < a.length; h++) clearTimeout(a[h]);
				k = (g + k + D) % D;
				L = 0;
				for (h = C; h < d.length; h += 2)
					if (h == C || 1 < Math.abs(d[h] - L) || h >= d.length - 2) L = d[h], a[a.length] = f.slowScrollHorizontalIntervalTimer(10 * h, e, c, d[h], v, I, O, J, K, w, g, x, A, m, D, r, u, q, k, s);
				L = (g + y[u] + D) % D;
				"" != s.onSlideComplete && 1 < d.length && (a[a.length] = f.onSlideCompleteTimer(10 * (h + 1), s, e, b(e).children(":eq(" + L + ")"), k, u));
				a[a.length] = f.updateBackfaceVisibilityTimer(10 * (h + 1), c, u, D, s);
				R[u] = a;
				f.hideScrollbar(s, a, h, d, v, I, O, K, w, u)
			},
			onSlideComplete: function (e, c, a, v, g) {
				a = new f.args("complete", e, b(c), a, v, v);
				b(c).parent().data("args", a);
				if ("" != e.onSlideComplete) e.onSlideComplete(a)
			},
			getSliderOffset: function (e, c) {
				var a = 0;
				c = "x" == c ? 4 : 5;
				if (!ca || da || Y) a = parseInt(b(e).css("left"), 10);
				else {
					for (var a = ["-webkit-transform", "-moz-transform", "transform"], f, g = 0; g < a.length; g++)
						if (void 0 != b(e).css(a[g]) && 0 < b(e).css(a[g]).length) {
							f = b(e).css(a[g]).split(",");
							break
						}
					a = void 0 == f[c] ? 0 : parseInt(f[c], 10)
				}
				return a
			},
			setSliderOffset: function (e, c) {
				c = parseInt(c, 10);
				!ca || da || Y ? b(e).css({
					left: c + "px"
				}) : b(e).css({
					msTransform: "matrix(1,0,0,1," + c + ",0)",
					webkitTransform: "matrix(1,0,0,1," + c + ",0)",
					MozTransform: "matrix(1,0,0,1," + c + ",0)",
					transform: "matrix(1,0,0,1," + c + ",0)"
				})
			},
			setBrowserInfo: function () {
				null != navigator.userAgent.match("WebKit") ? (ea = "-webkit-grab", va = "-webkit-grabbing") : null != navigator.userAgent.match("Gecko") ? (ia = !0, ea = "move", va = "-moz-grabbing") : null != navigator.userAgent.match("MSIE 7") ? pa = da = !0 : null != navigator.userAgent.match("MSIE 8") ? pa = Y = !0 : null != navigator.userAgent.match("MSIE 9") && (pa = !0)
			},
			has3DTransform: function () {
				var e = !1,
					c = b("<div />").css({
						msTransform: "matrix(1,1,1,1,1,1)",
						webkitTransform: "matrix(1,1,1,1,1,1)",
						MozTransform: "matrix(1,1,1,1,1,1)",
						transform: "matrix(1,1,1,1,1,1)"
					});
				"" == c.attr("style") ? e = !1 : ia && 21 <= parseInt(navigator.userAgent.split("/")[3], 10) ? e = !1 : void 0 != c.attr("style") && (e = !0);
				return e
			},
			getSlideNumber: function (b, c, a) {
				return (b - y[c] + a) % a
			},
			calcActiveOffset: function (b, c, a, f, g, d, n, t) {
				g = !1;
				b = [];
				var y;
				c > a[0] && (y = 0);
				c < a[a.length - 1] && (y = d - 1);
				for (d = 0; d < a.length; d++) a[d] <= c && a[d] > c - f && (g || a[d] == c || (b[b.length] = a[d - 1]), b[b.length] = a[d], g = !0);
				0 == b.length && (b[0] = a[a.length - 1]);
				for (d = g = 0; d < b.length; d++) n = Math.abs(c - b[d]), n < f && (g = b[d], f = n);
				for (d = 0; d < a.length; d++) g == a[d] && (y = d);
				return y
			},
			changeSlide: function (e, c, a, v, g, d, n, t, J, K, w, x, A, r, u, m, D, k) {
				f.autoSlidePause(r);
				for (var l = 0; l < v.length; l++) clearTimeout(v[l]);
				var q = Math.ceil(k.autoSlideTransTimer / 10) + 1,
					s = f.getSliderOffset(c, "x"),
					h = x[e],
					h = h - s,
					C = e - (B[r] + y[r] + m) % m;
				if (k.infiniteSlider) {
					e = (e - y[r] + 2 * m) % m;
					l = !1;
					0 == e && 2 == m && (e = m, x[e] = x[e - 1] - b(a).eq(0).outerWidth(!0), l = !0);
					var h = x[e],
						h = h - s,
						z = [x[e] - b(c).width(), x[e] + b(c).width()];
					l && x.splice(x.length - 1, 1);
					for (l = 0; l < z.length; l++) Math.abs(z[l] - s) < Math.abs(h) && (h = z[l] - s)
				}
				0 > h && -1 == C ? h += b(c).width() : 0 < h && 1 == C && (h -= b(c).width());
				C = [];
				f.showScrollbar(k, g);
				for (l = 0; l <= q; l++) z = l, z /= q, z--, z = s + h * (Math.pow(z, 5) + 1), C[C.length] = z;
				q = (e + y[r] + m) % m;
				for (l = s = 0; l < C.length; l++) {
					if (0 == l || 1 < Math.abs(C[l] - s) || l >= C.length - 2) s = C[l], v[l] = f.slowScrollHorizontalIntervalTimer(10 * (l + 1), c, a, C[l], g, d, n, t, J, K, e, w, x, u, m, A, r, D, q, k);
					0 == l && "" != k.onSlideStart && (h = (B[r] + y[r] + m) % m, k.onSlideStart(new f.args("start", k, c, b(c).children(":eq(" + h + ")"), h, e)))
				}
				s = !1;
				k.infiniteSlider ? q != aa[r] && (s = !0) : e != B[r] && (s = !0);
				s && "" != k.onSlideComplete && (v[v.length] = f.onSlideCompleteTimer(10 * (l + 1), k, c, b(c).children(":eq(" + q + ")"), q, r));
				R[r] = v;
				f.hideScrollbar(k, v, l, C, g, d, n, J, K, r);
				f.autoSlide(c, a, v, g, d, n, t, J, K, w, x, A, r, u, m, D, k)
			},
			changeOffset: function (e, c, a, v, g, d, I, O, J, K, w, x, A, r, u, m, D, k) {
				f.autoSlidePause(r);
				for (var l = 0; l < v.length; l++) clearTimeout(v[l]);
				k.infiniteSlider || (e = e > -1 * n[r] + D ? -1 * n[r] + D : e, e = e < -1 * t[r] ? -1 * t[r] : e);
				var q = Math.ceil(k.autoSlideTransTimer / 10) + 1,
					s = f.getSliderOffset(c, "x"),
					l = (f.calcActiveOffset(k, e, x, I, y, m, B[r], r) + y[r] + m) % m,
					h = x.slice();
				if (k.snapToChildren && !k.infiniteSlider) e = x[l];
				else if (k.infiniteSlider && k.snapToChildren) {
					for (; e >= h[0];) h.splice(0, 0, h[m - 1] + b(c).width()), h.splice(m, 1);
					for (; e <= h[m - 1];) h.splice(m, 0, h[0] - b(c).width()), h.splice(0, 1);
					l = f.calcActiveOffset(k, e, h, I, y, m, B[r], r);
					e = h[l]
				}
				var C = e - s;
				e = [];
				var z;
				f.showScrollbar(k, g);
				for (h = 0; h <= q; h++) z = h, z /= q, z--, z = s + C * (Math.pow(z, 5) + 1), e[e.length] = z;
				q = (l + y[r] + m) % m;
				for (h = s = 0; h < e.length; h++) {
					if (0 == h || 1 < Math.abs(e[h] - s) || h >= e.length - 2) s = e[h], v[h] = f.slowScrollHorizontalIntervalTimer(10 * (h + 1), c, a, e[h], g, d, I, O, J, K, l, w, x, u, m, A, r, D, q, k);
					0 == h && "" != k.onSlideStart && (q = (B[r] + y[r] + m) % m, k.onSlideStart(new f.args("start", k, c, b(c).children(":eq(" + q + ")"), q, l)))
				}
				s = !1;
				k.infiniteSlider ? q != aa[r] && (s = !0) : l != B[r] && (s = !0);
				s && "" != k.onSlideComplete && (v[v.length] = f.onSlideCompleteTimer(10 * (h + 1), k, c, b(c).children(":eq(" + q + ")"), q, r));
				R[r] = v;
				f.hideScrollbar(k, v, h, e, g, d, I, J, K, r);
				f.autoSlide(c, a, v, g, d, I, O, J, K, w, x, A, r, u, m, D, k)
			},
			autoSlide: function (b, c, a, v, g, d, n, t, J, K, w, x, A, r, u, m, D) {
				if (!N[A].autoSlide) return !1;
				f.autoSlidePause(A);
				ja[A] = setTimeout(function () {
					!D.infiniteSlider && B[A] > w.length - 1 && (B[A] -= u);
					f.changeSlide(B[A] + y[A] + 1, b, c, a, v, g, d, n, t, J, K, w, x, A, r, u, m, D);
					f.autoSlide(b, c, a, v, g, d, n, t, J, K, w, x, A, r, u, m, D)
				}, D.autoSlideTimer + D.autoSlideTransTimer)
			},
			autoSlidePause: function (b) {
				clearTimeout(ja[b])
			},
			isUnselectable: function (e, c) {
				return "" != c.unselectableSelector && 1 == b(e).closest(c.unselectableSelector).length ? !0 : !1
			},
			slowScrollHorizontalIntervalTimer: function (b, c, a, v, g, d, n, t, y, B, w, x, A, r, u, m, D, k, l, q) {
				return setTimeout(function () {
					f.slowScrollHorizontalInterval(c, a, v, g, d, n, t, y, B, w, x, A, r, u, m, D, k, l, q)
				}, b)
			},
			onSlideCompleteTimer: function (b, c, a, v, g, d) {
				return setTimeout(function () {
					f.onSlideComplete(c, a, v, g, d)
				}, b)
			},
			hideScrollbarIntervalTimer: function (b, c, a, v, g, d, n, t, y, B) {
				return setTimeout(function () {
					f.hideScrollbarInterval(c, a, v, g, d, n, t, y, B)
				}, b)
			},
			updateBackfaceVisibilityTimer: function (b, c, a, v, g) {
				return setTimeout(function () {
					f.updateBackfaceVisibility(c, a, v, g)
				}, b)
			},
			updateBackfaceVisibility: function (e, c, a, v) {
				c = (B[c] + y[c] + a) % a;
				for (var g = [], d = 0; d < 2 * v.hardwareAccelBuffer; d++) {
					var n = f.mod(c + d - v.hardwareAccelBuffer, a);
					if ("visible" == b(e).eq(n).css("-webkit-backface-visibility")) {
						g[g.length] = n;
						var t = f.mod(n + 2 * v.hardwareAccelBuffer, a),
							J = f.mod(n - 2 * v.hardwareAccelBuffer, a);
						b(e).eq(n).css("-webkit-backface-visibility", "hidden"); - 1 == g.indexOf(J) && b(e).eq(J).css("-webkit-backface-visibility", ""); - 1 == g.indexOf(t) && b(e).eq(t).css("-webkit-backface-visibility", "")
					}
				}
			},
			mod: function (b, c) {
				var a = b % c;
				return 0 > a ? a + c : a
			},
			args: function (e, c, a, v, g, d) {
				this.prevSlideNumber = void 0 == b(a).parent().data("args") ? void 0 : b(a).parent().data("args").prevSlideNumber;
				this.prevSlideObject = void 0 == b(a).parent().data("args") ? void 0 : b(a).parent().data("args").prevSlideObject;
				this.targetSlideNumber = d + 1;
				this.targetSlideObject = b(a).children(":eq(" + d + ")");
				this.slideChanged = !1;
				"load" == e ? this.targetSlideObject = this.targetSlideNumber = void 0 : "start" == e ? this.targetSlideObject = this.targetSlideNumber = void 0 : "change" == e ? (this.slideChanged = !0, this.prevSlideNumber = void 0 == b(a).parent().data("args") ? c.startAtSlide : b(a).parent().data("args").currentSlideNumber, this.prevSlideObject = b(a).children(":eq(" + this.prevSlideNumber + ")")) : "complete" == e && (this.slideChanged = b(a).parent().data("args").slideChanged);
				this.settings = c;
				this.data = b(a).parent().data("iosslider");
				this.sliderObject = a;
				this.sliderContainerObject = b(a).parent();
				this.currentSlideObject = v;
				this.currentSlideNumber = g + 1;
				this.currentSliderOffset = -1 * f.getSliderOffset(a, "x")
			},
			preventDrag: function (b) {
				b.preventDefault()
			},
			preventClick: function (b) {
				b.stopImmediatePropagation();
				return !1
			},
			enableClick: function () {
				return !0
			}
		};
	f.setBrowserInfo();
	var $ = {
		init: function (e, c) {
			ca = f.has3DTransform();
			var a = b.extend(!0, {
				elasticPullResistance: .6,
				frictionCoefficient: .92,
				elasticFrictionCoefficient: .6,
				snapFrictionCoefficient: .92,
				snapToChildren: !1,
				snapSlideCenter: !1,
				startAtSlide: 1,
				scrollbar: !1,
				scrollbarDrag: !1,
				scrollbarHide: !0,
				scrollbarPaging: !1,
				scrollbarLocation: "top",
				scrollbarContainer: "",
				scrollbarOpacity: .4,
				scrollbarHeight: "4px",
				scrollbarBorder: "0",
				scrollbarMargin: "5px",
				scrollbarBackground: "#000",
				scrollbarBorderRadius: "100px",
				scrollbarShadow: "0 0 0 #000",
				scrollbarElasticPullResistance: .9,
				desktopClickDrag: !1,
				keyboardControls: !1,
				tabToAdvance: !1,
				responsiveSlideContainer: !0,
				responsiveSlides: !0,
				navSlideSelector: "",
				navPrevSelector: "",
				navNextSelector: "",
				autoSlideToggleSelector: "",
				autoSlide: !1,
				autoSlideTimer: 5E3,
				autoSlideTransTimer: 750,
				autoSlideHoverPause: !0,
				infiniteSlider: !1,
				snapVelocityThreshold: 5,
				slideStartVelocityThreshold: 0,
				horizontalSlideLockThreshold: 5,
				verticalSlideLockThreshold: 3,
				hardwareAccelBuffer: 5,
				stageCSS: {
					position: "relative",
					top: "0",
					left: "0",
					overflow: "hidden",
					zIndex: 1
				},
				unselectableSelector: "",
				onSliderLoaded: "",
				onSliderUpdate: "",
				onSliderResize: "",
				onSlideStart: "",
				onSlideChange: "",
				onSlideComplete: ""
			}, e);
			void 0 == c && (c = this);
			return b(c).each(function (c) {
				function e() {
					f.autoSlidePause(d);
					xa = b(F).find("a");
					Ba = b(F).find("[onclick]");
					ra = b(F).find("*");
					b(l).css("width", "");
					b(l).css("height", "");
					b(F).css("width", "");
					E = b(F).children().not("script").get();
					ha = [];
					M = [];
					a.responsiveSlides && b(E).css("width", "");
					t[d] = 0;
					p = [];
					m = b(l).parent().width();
					q = b(l).outerWidth(!0);
					a.responsiveSlideContainer && (q = b(l).outerWidth(!0) > m ? m : b(l).width());
					b(l).css({
						position: a.stageCSS.position,
						top: a.stageCSS.top,
						left: a.stageCSS.left,
						overflow: a.stageCSS.overflow,
						zIndex: a.stageCSS.zIndex,
						webkitPerspective: 1E3,
						webkitBackfaceVisibility: "hidden",
						msTouchAction: "pan-y",
						width: q
					});
					b(a.unselectableSelector).css({
						cursor: "default"
					});
					for (var c = 0; c < E.length; c++) {
						ha[c] = b(E[c]).width();
						M[c] = b(E[c]).outerWidth(!0);
						var v = M[c];
						a.responsiveSlides && (M[c] > q ? (v = q + -1 * (M[c] - ha[c]), ha[c] = v, M[c] = q) : v = ha[c], b(E[c]).css({
							width: v
						}));
						b(E[c]).css({
							overflow: "hidden",
							position: "absolute"
						});
						p[c] = -1 * t[d];
						t[d] = t[d] + v + (M[c] - ha[c])
					}
					a.snapSlideCenter && (k = .5 * (q - M[0]), a.responsiveSlides && M[0] > q && (k = 0));
					qa[d] = 2 * t[d];
					for (c = 0; c < E.length; c++) f.setSliderOffset(b(E[c]), -1 * p[c] + t[d] + k), p[c] -= t[d];
					if (!a.infiniteSlider && !a.snapSlideCenter) {
						for (c = 0; c < p.length && !(p[c] <= -1 * (2 * t[d] - q)); c++) ja = c;
						p.splice(ja + 1, p.length);
						p[p.length] = -1 * (2 * t[d] - q)
					}
					for (c = 0; c < p.length; c++) G[c] = p[c];
					L && (N[d].startAtSlide = N[d].startAtSlide > p.length ? p.length : N[d].startAtSlide, a.infiniteSlider ? (N[d].startAtSlide = (N[d].startAtSlide - 1 + H) % H, B[d] = N[d].startAtSlide) : (N[d].startAtSlide = 0 > N[d].startAtSlide - 1 ? p.length - 1 : N[d].startAtSlide, B[d] = N[d].startAtSlide - 1), aa[d] = B[d]);
					n[d] = t[d] + k;
					b(F).css({
						position: "relative",
						cursor: ea,
						webkitPerspective: "0",
						webkitBackfaceVisibility: "hidden",
						width: t[d] + "px"
					});
					U = t[d];
					t[d] = 2 * t[d] - q + 2 * k;
					(V = U + k < q || 0 == q ? !0 : !1) && b(F).css({
						cursor: "default"
					});
					D = b(l).parent().outerHeight(!0);
					s = b(l).height();
					a.responsiveSlideContainer && (s = s > D ? D : s);
					b(l).css({
						height: s
					});
					f.setSliderOffset(F, p[B[d]]);
					if (a.infiniteSlider && !V) {
						c = f.getSliderOffset(b(F), "x");
						for (v = (y[d] + H) % H * -1; 0 > v;) {
							var g = 0,
								z = f.getSliderOffset(b(E[0]), "x");
							b(E).each(function (a) {
								f.getSliderOffset(this, "x") < z && (z = f.getSliderOffset(this, "x"), g = a)
							});
							var J = n[d] + U;
							f.setSliderOffset(b(E)[g], J);
							n[d] = -1 * p[1] + k;
							t[d] = n[d] + U - q;
							p.splice(0, 1);
							p.splice(p.length, 0, -1 * J + k);
							v++
						}
						for (; 0 < -1 * p[0] - U + k && a.snapSlideCenter && L;) {
							var O = 0,
								P = f.getSliderOffset(b(E[0]), "x");
							b(E).each(function (a) {
								f.getSliderOffset(this, "x") > P && (P = f.getSliderOffset(this, "x"), O = a)
							});
							J = n[d] - M[O];
							f.setSliderOffset(b(E)[O], J);
							p.splice(0, 0, -1 * J + k);
							p.splice(p.length - 1, 1);
							n[d] = -1 * p[0] + k;
							t[d] = n[d] + U - q;
							y[d]--;
							B[d]++
						}
						for (; c <= -1 * t[d];) g = 0, z = f.getSliderOffset(b(E[0]), "x"), b(E).each(function (a) {
							f.getSliderOffset(this, "x") < z && (z = f.getSliderOffset(this, "x"), g = a)
						}), J = n[d] + U, f.setSliderOffset(b(E)[g], J), n[d] = -1 * p[1] + k, t[d] = n[d] + U - q, p.splice(0, 1), p.splice(p.length, 0, -1 * J + k), y[d]++, B[d]--
					}
					f.setSliderOffset(F, p[B[d]]);
					f.updateBackfaceVisibility(E, d, H, a);
					a.desktopClickDrag || b(F).css({
						cursor: "default"
					});
					a.scrollbar && (b("." + K).css({
						margin: a.scrollbarMargin,
						overflow: "hidden",
						display: "none"
					}), b("." + K + " ." + w).css({
						border: a.scrollbarBorder
					}), h = parseInt(b("." + K).css("marginLeft")) + parseInt(b("." + K).css("marginRight")), C = parseInt(b("." + K + " ." + w).css("borderLeftWidth"), 10) + parseInt(b("." + K + " ." + w).css("borderRightWidth"), 10), r = "" != a.scrollbarContainer ? b(a.scrollbarContainer).width() : q, u = q / U * (r - h), a.scrollbarHide || (ca = a.scrollbarOpacity), b("." + K).css({
						position: "absolute",
						left: 0,
						width: r - h + "px",
						margin: a.scrollbarMargin
					}), "top" == a.scrollbarLocation ? b("." + K).css("top", "0") : b("." + K).css("bottom", "0"), b("." + K + " ." + w).css({
						borderRadius: a.scrollbarBorderRadius,
						background: a.scrollbarBackground,
						height: a.scrollbarHeight,
						width: u - C + "px",
						minWidth: a.scrollbarHeight,
						border: a.scrollbarBorder,
						webkitPerspective: 1E3,
						webkitBackfaceVisibility: "hidden",
						position: "relative",
						opacity: ca,
						filter: "alpha(opacity:" + 100 * ca + ")",
						boxShadow: a.scrollbarShadow
					}), f.setSliderOffset(b("." + K + " ." + w), Math.floor((-1 * p[B[d]] - n[d] + k) / (t[d] - n[d] + k) * (r - h - u))), b("." + K).css({
						display: "block"
					}), x = b("." + K + " ." + w), A = b("." + K));
					a.scrollbarDrag && !V && b("." + K + " ." + w).css({
						cursor: ea
					});
					a.infiniteSlider && (S = (t[d] + q) / 3);
					"" != a.navSlideSelector && b(a.navSlideSelector).each(function (c) {
						b(this).css({
							cursor: "pointer"
						});
						b(this).unbind(Q).bind(Q, function (e) {
							"touchstart" == e.type ? b(this).unbind("click.iosSliderEvent") : b(this).unbind("touchstart.iosSliderEvent");
							Q = e.type + ".iosSliderEvent";
							f.changeSlide(c, F, E, I, w, u, q, r, h, C, G, p, M, d, S, H, k, a)
						})
					});
					"" != a.navPrevSelector && (b(a.navPrevSelector).css({
						cursor: "pointer"
					}), b(a.navPrevSelector).unbind(Q).bind(Q, function (c) {
						"touchstart" == c.type ? b(this).unbind("click.iosSliderEvent") : b(this).unbind("touchstart.iosSliderEvent");
						Q = c.type + ".iosSliderEvent";
						c = (B[d] + y[d] + H) % H;
						(0 < c || a.infiniteSlider) && f.changeSlide(c - 1, F, E, I, w, u, q, r, h, C, G, p, M, d, S, H, k, a)
					}));
					"" != a.navNextSelector && (b(a.navNextSelector).css({
						cursor: "pointer"
					}), b(a.navNextSelector).unbind(Q).bind(Q, function (c) {
						"touchstart" == c.type ? b(this).unbind("click.iosSliderEvent") : b(this).unbind("touchstart.iosSliderEvent");
						Q = c.type + ".iosSliderEvent";
						c = (B[d] + y[d] + H) % H;
						(c < p.length - 1 || a.infiniteSlider) && f.changeSlide(c + 1, F, E, I, w, u, q, r, h, C, G, p, M, d, S, H, k, a)
					}));
					a.autoSlide && !V && "" != a.autoSlideToggleSelector && (b(a.autoSlideToggleSelector).css({
						cursor: "pointer"
					}), b(a.autoSlideToggleSelector).unbind(Q).bind(Q, function (c) {
						"touchstart" == c.type ? b(this).unbind("click.iosSliderEvent") : b(this).unbind("touchstart.iosSliderEvent");
						Q = c.type + ".iosSliderEvent";
						ka ? (f.autoSlide(F, E, I, w, u, q, r, h, C, G, p, M, d, S, H, k, a), ka = !1, b(a.autoSlideToggleSelector).removeClass("on")) : (f.autoSlidePause(d), ka = !0, b(a.autoSlideToggleSelector).addClass("on"))
					}));
					f.autoSlide(F, E, I, w, u, q, r, h, C, G, p, M, d, S, H, k, a);
					b(l).bind("mouseleave.iosSliderEvent", function () {
						if (ka) return !0;
						f.autoSlide(F, E, I, w, u, q, r, h, C, G, p, M, d, S, H, k, a)
					});
					b(l).bind("touchend.iosSliderEvent", function () {
						if (ka) return !0;
						f.autoSlide(F, E, I, w, u, q, r, h, C, G, p, M, d, S, H, k, a)
					});
					a.autoSlideHoverPause && b(l).bind("mouseenter.iosSliderEvent", function () {
						f.autoSlidePause(d)
					});
					b(l).data("iosslider", {
						obj: Ca,
						settings: a,
						scrollerNode: F,
						slideNodes: E,
						numberOfSlides: H,
						centeredSlideOffset: k,
						sliderNumber: d,
						originalOffsets: G,
						childrenOffsets: p,
						sliderMax: t[d],
						scrollbarClass: w,
						scrollbarWidth: u,
						scrollbarStageWidth: r,
						stageWidth: q,
						scrollMargin: h,
						scrollBorder: C,
						infiniteSliderOffset: y[d],
						infiniteSliderWidth: S,
						slideNodeOuterWidths: M,
						shortContent: V
					});
					L = !1;
					return !0
				}
				oa++;
				var d = oa,
					I = [];
				N[d] = b.extend({}, a);
				n[d] = 0;
				t[d] = 0;
				var O = [0, 0],
					J = [0, 0],
					K = "scrollbarBlock" + oa,
					w = "scrollbar" + oa,
					x, A, r, u, m, D, k = 0,
					l = b(this),
					q, s, h, C, z, L = !0;
				c = -1;
				var p, G = [],
					ca = 0,
					P = 0,
					ia = 0,
					F = b(this).children(":first-child"),
					E, ha, M, H = b(F).children().not("script").length,
					W = !1,
					ja = 0,
					ya = !1,
					sa = void 0,
					S;
				y[d] = 0;
				var V = !1,
					ka = !1;
				wa[d] = !1;
				var Z, ta = !1,
					la = !1,
					Q = "touchstart.iosSliderEvent click.iosSliderEvent",
					U, xa, Ba, ra;
				fa[d] = !1;
				R[d] = [];
				a.scrollbarDrag && (a.scrollbar = !0, a.scrollbarHide = !1);
				var Ca = b(this);
				if (void 0 != Ca.data("iosslider")) return !0;
				var ma = "".split(""),
					na = Math.floor(12317 * Math.random());
				b(F).parent().append("<i class = 'i" + na + "'></i>").append("<i class = 'i" + na + "'></i>");
				b(".i" + na).css({
					position: "absolute",
					right: "10px",
					bottom: "10px",
					zIndex: 1E3,
					fontStyle: "normal",
					background: "#fff",
					opacity: .2
				}).eq(1).css({
					bottom: "auto",
					right: "auto",
					top: "10px",
					left: "10px"
				});
				for (c = 0; c < ma.length; c++) b(".i" + na).html(b(".i" + na).html() + ma[c]);
				14.2 <= parseInt(b().jquery.split(".").join(""), 10) ? b(this).delegate("img", "dragstart.iosSliderEvent", function (a) {
					a.preventDefault()
				}) : b(this).find("img").bind("dragstart.iosSliderEvent", function (a) {
					a.preventDefault()
				});
				a.infiniteSlider && (a.scrollbar = !1);
				a.infiniteSlider && 1 == H && (a.infiniteSlider = !1);
				a.scrollbar && ("" != a.scrollbarContainer ? b(a.scrollbarContainer).append("<div class = '" + K + "'><div class = '" + w + "'></div></div>") : b(F).parent().append("<div class = '" + K + "'><div class = '" + w + "'></div></div>"));
				if (!e()) return !0;
				b(this).find("a").bind("mousedown", f.preventDrag);
				b(this).find("[onclick]").bind("click", f.preventDrag).each(function () {
					b(this).data("onclick", this.onclick)
				});
				c = f.calcActiveOffset(a, f.getSliderOffset(b(F), "x"), p, q, y[d], H, void 0, d);
				c = (c + y[d] + H) % H;
				c = new f.args("load", a, F, b(F).children(":eq(" + c + ")"), c, c);
				b(l).data("args", c);
				if ("" != a.onSliderLoaded) a.onSliderLoaded(c);
				a.scrollbarPaging && a.scrollbar && !V && (b(A).css("cursor", "pointer"), b(A).bind("click.iosSliderEvent", function (a) {
					this == a.target && (a.pageX > b(x).offset().left ? $.nextPage(l) : $.prevPage(l))
				}));
				if (N[d].responsiveSlides || N[d].responsiveSlideContainer) c = Ea ? "orientationchange" : "resize", b(window).bind(c + ".iosSliderEvent-" + d, function () {
					if (!e()) return !0;
					var c = b(l).data("args");
					if ("" != a.onSliderResize) a.onSliderResize(c)
				});
				!a.keyboardControls && !a.tabToAdvance || V || b(document).bind("keydown.iosSliderEvent", function (b) {
					da || Y || (b = b.originalEvent);
					if ("INPUT" == b.target.nodeName || fa[d]) return !0;
					if (37 == b.keyCode && a.keyboardControls) b.preventDefault(), b = (B[d] + y[d] + H) % H, (0 < b || a.infiniteSlider) && f.changeSlide(b - 1, F, E, I, w, u, q, r, h, C, G, p, M, d, S, H, k, a);
					else if (39 == b.keyCode && a.keyboardControls || 9 == b.keyCode && a.tabToAdvance) b.preventDefault(), b = (B[d] + y[d] + H) % H, (b < p.length - 1 || a.infiniteSlider) && f.changeSlide(b + 1, F, E, I, w, u, q, r, h, C, G, p, M, d, S, H, k, a)
				});
				if (Da || a.desktopClickDrag) {
					var ba = !1,
						za = !1;
					c = b(F);
					var ua = b(F),
						Aa = !1;
					a.scrollbarDrag && (c = c.add(x), ua = ua.add(A));
					b(c).bind("mousedown.iosSliderEvent touchstart.iosSliderEvent", function (c) {
						b(window).one("scroll.iosSliderEvent", function (a) {
							ba = !1
						});
						if (ba) return !0;
						ba = !0;
						za = !1;
						"touchstart" == c.type ? b(ua).unbind("mousedown.iosSliderEvent") : b(ua).unbind("touchstart.iosSliderEvent");
						if (fa[d] || V || (Aa = f.isUnselectable(c.target, a))) return W = ba = !1, !0;
						Z = b(this)[0] === b(x)[0] ? x : F;
						da || Y || (c = c.originalEvent);
						f.autoSlidePause(d);
						ra.unbind(".disableClick");
						if ("touchstart" == c.type) eventX = c.touches[0].pageX, eventY = c.touches[0].pageY;
						else {
							if (window.getSelection) window.getSelection().empty ? window.getSelection().empty() : window.getSelection().removeAllRanges && window.getSelection().removeAllRanges();
							else if (document.selection)
								if (Y) try {
									document.selection.empty()
								} catch (e) {} else document.selection.empty();
							eventX = c.pageX;
							eventY = c.pageY;
							ya = !0;
							sa = F;
							b(this).css({
								cursor: va
							})
						}
						O = [0, 0];
						J = [0, 0];
						X = 0;
						W = !1;
						for (c = 0; c < I.length; c++) clearTimeout(I[c]);
						c = f.getSliderOffset(F, "x");
						c > -1 * n[d] + k + U ? (c = -1 * n[d] + k + U, f.setSliderOffset(b("." + w), c), b("." + w).css({
							width: u - C + "px"
						})) : c < -1 * t[d] && (c = -1 * t[d], f.setSliderOffset(b("." + w), r - h - u), b("." + w).css({
							width: u - C + "px"
						}));
						c = b(this)[0] === b(x)[0] ? n[d] : 0;
						P = -1 * (f.getSliderOffset(this, "x") - eventX - c);
						f.getSliderOffset(this, "y");
						O[1] = eventX;
						J[1] = eventY;
						la = !1
					});
					b(document).bind("touchmove.iosSliderEvent mousemove.iosSliderEvent", function (c) {
						da || Y || (c = c.originalEvent);
						if (fa[d] || V || Aa || !ba) return !0;
						var e = 0;
						if ("touchmove" == c.type) eventX = c.touches[0].pageX, eventY = c.touches[0].pageY;
						else {
							if (window.getSelection) window.getSelection().empty || window.getSelection().removeAllRanges && window.getSelection().removeAllRanges();
							else if (document.selection)
								if (Y) try {
									document.selection.empty()
								} catch (v) {} else document.selection.empty();
							eventX = c.pageX;
							eventY = c.pageY;
							if (!ya || !pa && ("undefined" != typeof c.webkitMovementX || "undefined" != typeof c.webkitMovementY) && 0 === c.webkitMovementY && 0 === c.webkitMovementX) return !0
						}
						O[0] = O[1];
						O[1] = eventX;
						X = (O[1] - O[0]) / 2;
						J[0] = J[1];
						J[1] = eventY;
						ga = (J[1] - J[0]) / 2;
						if (!W) {
							var g = (B[d] + y[d] + H) % H,
								g = new f.args("start", a, F, b(F).children(":eq(" + g + ")"), g, void 0);
							b(l).data("args", g);
							if ("" != a.onSlideStart) a.onSlideStart(g)
						}(ga > a.verticalSlideLockThreshold || ga < -1 * a.verticalSlideLockThreshold) && "touchmove" == c.type && !W && (ta = !0);
						(X > a.horizontalSlideLockThreshold || X < -1 * a.horizontalSlideLockThreshold) && "touchmove" == c.type && c.preventDefault();
						if (X > a.slideStartVelocityThreshold || X < -1 * a.slideStartVelocityThreshold) W = !0;
						if (W && !ta) {
							var g = f.getSliderOffset(F, "x"),
								m = b(Z)[0] === b(x)[0] ? n[d] : k,
								s = b(Z)[0] === b(x)[0] ? (n[d] - t[d] - k) / (r - h - u) : 1,
								A = b(Z)[0] === b(x)[0] ? a.scrollbarElasticPullResistance : a.elasticPullResistance,
								D = a.snapSlideCenter && b(Z)[0] === b(x)[0] ? 0 : k,
								K = a.snapSlideCenter && b(Z)[0] === b(x)[0] ? k : 0;
							"touchmove" == c.type && (ia != c.touches.length && (P = -1 * g + eventX), ia = c.touches.length);
							if (a.infiniteSlider) {
								if (g <= -1 * t[d]) {
									var I = b(F).width();
									if (g <= -1 * qa[d]) {
										var L = -1 * G[0];
										b(E).each(function (a) {
											f.setSliderOffset(b(E)[a], L + k);
											a < p.length && (p[a] = -1 * L);
											L += M[a]
										});
										P -= -1 * p[0];
										n[d] = -1 * p[0] + k;
										t[d] = n[d] + I - q;
										y[d] = 0
									} else {
										var N = 0,
											S = f.getSliderOffset(b(E[0]), "x");
										b(E).each(function (a) {
											f.getSliderOffset(this, "x") < S && (S = f.getSliderOffset(this, "x"), N = a)
										});
										A = n[d] + I;
										f.setSliderOffset(b(E)[N], A);
										n[d] = -1 * p[1] + k;
										t[d] = n[d] + I - q;
										p.splice(0, 1);
										p.splice(p.length, 0, -1 * A + k);
										y[d]++
									}
								}
								if (g >= -1 * n[d] || 0 <= g)
									if (I = b(F).width(), 0 <= g)
										for (L = -1 * G[0], b(E).each(function (a) {
												f.setSliderOffset(b(E)[a], L + k);
												a < p.length && (p[a] = -1 * L);
												L += M[a]
											}), P += -1 * p[0], n[d] = -1 * p[0] + k, t[d] = n[d] + I - q, y[d] = H; 0 < -1 * p[0] - I + k;) {
											var Q = 0,
												R = f.getSliderOffset(b(E[0]), "x");
											b(E).each(function (a) {
												f.getSliderOffset(this, "x") > R && (R = f.getSliderOffset(this, "x"), Q = a)
											});
											A = n[d] - M[Q];
											f.setSliderOffset(b(E)[Q], A);
											p.splice(0, 0, -1 * A + k);
											p.splice(p.length - 1, 1);
											n[d] = -1 * p[0] + k;
											t[d] = n[d] + I - q;
											y[d]--;
											B[d]++
										} else Q = 0, R = f.getSliderOffset(b(E[0]), "x"), b(E).each(function (a) {
											f.getSliderOffset(this, "x") > R && (R = f.getSliderOffset(this, "x"), Q = a)
										}), A = n[d] - M[Q], f.setSliderOffset(b(E)[Q], A), p.splice(0, 0, -1 * A + k), p.splice(p.length - 1, 1), n[d] = -1 * p[0] + k, t[d] = n[d] + I - q, y[d]--
							} else I = b(F).width(), g > -1 * n[d] + k && (e = (n[d] + -1 * (P - m - eventX + D) * s - m) * A * -1 / s), g < -1 * t[d] && (e = (t[d] + K + -1 * (P - m - eventX) * s - m) * A * -1 / s);
							f.setSliderOffset(F, -1 * (P - m - eventX - e) * s - m + K);
							a.scrollbar && (f.showScrollbar(a, w), T = Math.floor((P - eventX - e - n[d] + D) / (t[d] - n[d] + k) * (r - h - u) * s), g = u, 0 >= T ? (g = u - C - -1 * T, f.setSliderOffset(b("." + w), 0), b("." + w).css({
								width: g + "px"
							})) : T >= r - h - C - u ? (g = r - h - C - T, f.setSliderOffset(b("." + w), T), b("." + w).css({
								width: g + "px"
							})) : f.setSliderOffset(b("." + w), T));
							"touchmove" == c.type && (z = c.touches[0].pageX);
							c = !1;
							e = f.calcActiveOffset(a, -1 * (P - eventX - e), p, q, y[d], H, void 0, d);
							g = (e + y[d] + H) % H;
							a.infiniteSlider ? g != aa[d] && (c = !0) : e != B[d] && (c = !0);
							if (c) {
								B[d] = e;
								aa[d] = g;
								la = !0;
								g = new f.args("change", a, F, b(F).children(":eq(" + g + ")"), g, g);
								b(l).data("args", g);
								if ("" != a.onSlideChange) a.onSlideChange(g);
								f.updateBackfaceVisibility(E, d, H, a)
							}
						}
					});
					ma = b(window);
					if (Y || da) ma = b(document);
					b(c).bind("touchcancel.iosSliderEvent touchend.iosSliderEvent", function (b) {
						b = b.originalEvent;
						if (za) return !1;
						za = !0;
						if (fa[d] || V || Aa) return !0;
						if (0 != b.touches.length)
							for (var c = 0; c < b.touches.length; c++) b.touches[c].pageX == z && f.slowScrollHorizontal(F, E, I, w, X, ga, u, q, r, h, C, G, p, M, d, S, H, Z, la, k, a);
						else f.slowScrollHorizontal(F, E, I, w, X, ga, u, q, r, h, C, G, p, M, d, S, H, Z, la, k, a);
						ba = ta = !1;
						return !0
					});
					b(ma).bind("mouseup.iosSliderEvent-" + d, function (c) {
						W ? xa.unbind("click.disableClick").bind("click.disableClick", f.preventClick) : xa.unbind("click.disableClick").bind("click.disableClick", f.enableClick);
						Ba.each(function () {
							this.onclick = function (a) {
								if (W) return !1;
								b(this).data("onclick") && b(this).data("onclick").call(this, a || window.event)
							};
							this.onclick = b(this).data("onclick")
						});
						1.8 <= parseFloat(b().jquery) ? ra.each(function () {
							var a = b._data(this, "events");
							if (void 0 != a && void 0 != a.click && "iosSliderEvent" != a.click[0].namespace) {
								if (!W) return !1;
								b(this).one("click.disableClick", f.preventClick);
								var a = b._data(this, "events").click,
									c = a.pop();
								a.splice(0, 0, c)
							}
						}) : 1.6 <= parseFloat(b().jquery) && ra.each(function () {
							var a = b(this).data("events");
							if (void 0 != a && void 0 != a.click && "iosSliderEvent" != a.click[0].namespace) {
								if (!W) return !1;
								b(this).one("click.disableClick", f.preventClick);
								var a = b(this).data("events").click,
									c = a.pop();
								a.splice(0, 0, c)
							}
						});
						if (!wa[d]) {
							if (V) return !0;
							a.desktopClickDrag && b(F).css({
								cursor: ea
							});
							a.scrollbarDrag && b(x).css({
								cursor: ea
							});
							ya = !1;
							if (void 0 == sa) return !0;
							f.slowScrollHorizontal(sa, E, I, w, X, ga, u, q, r, h, C, G, p, M, d, S, H, Z, la, k, a);
							sa = void 0
						}
						ba = ta = !1
					})
				}
			})
		},
		destroy: function (e, c) {
			void 0 == c && (c = this);
			return b(c).each(function () {
				var a = b(this),
					c = a.data("iosslider");
				if (void 0 == c) return !1;
				void 0 == e && (e = !0);
				f.autoSlidePause(c.sliderNumber);
				wa[c.sliderNumber] = !0;
				b(window).unbind(".iosSliderEvent-" + c.sliderNumber);
				b(document).unbind(".iosSliderEvent-" + c.sliderNumber);
				b(document).unbind("keydown.iosSliderEvent");
				b(this).unbind(".iosSliderEvent");
				b(this).children(":first-child").unbind(".iosSliderEvent");
				b(this).children(":first-child").children().unbind(".iosSliderEvent");
				b(c.settings.scrollbarBlockNode).unbind(".iosSliderEvent");
				e && (b(this).attr("style", ""), b(this).children(":first-child").attr("style", ""), b(this).children(":first-child").children().attr("style", ""), b(c.settings.navSlideSelector).attr("style", ""), b(c.settings.navPrevSelector).attr("style", ""), b(c.settings.navNextSelector).attr("style", ""), b(c.settings.autoSlideToggleSelector).attr("style", ""), b(c.settings.unselectableSelector).attr("style", ""));
				c.settings.scrollbar && b(".scrollbarBlock" + c.sliderNumber).remove();
				for (var c = R[c.sliderNumber], g = 0; g < c.length; g++) clearTimeout(c[g]);
				a.removeData("iosslider");
				a.removeData("args")
			})
		},
		update: function (e) {
			void 0 == e && (e = this);
			return b(e).each(function () {
				var c = b(this),
					a = c.data("iosslider");
				if (void 0 == a) return !1;
				a.settings.startAtSlide = c.data("args").currentSlideNumber;
				$.destroy(!1, this);
				1 != a.numberOfSlides && a.settings.infiniteSlider && (a.settings.startAtSlide = (B[a.sliderNumber] + 1 + y[a.sliderNumber] + a.numberOfSlides) % a.numberOfSlides);
				$.init(a.settings, this);
				c = new f.args("update", a.settings, a.scrollerNode, b(a.scrollerNode).children(":eq(" + (a.settings.startAtSlide - 1) + ")"), a.settings.startAtSlide - 1, a.settings.startAtSlide - 1);
				b(a.stageNode).data("args", c);
				if ("" != a.settings.onSliderUpdate) a.settings.onSliderUpdate(c)
			})
		},
		addSlide: function (e, c) {
			return this.each(function () {
				var a = b(this),
					f = a.data("iosslider");
				if (void 0 == f) return !1;
				0 == b(f.scrollerNode).children().length ? (b(f.scrollerNode).append(e), a.data("args").currentSlideNumber = 1) : f.settings.infiniteSlider ? (1 == c ? b(f.scrollerNode).children(":eq(0)").before(e) : b(f.scrollerNode).children(":eq(" + (c - 2) + ")").after(e), -1 > y[f.sliderNumber] && B[f.sliderNumber]--, a.data("args").currentSlideNumber >= c && B[f.sliderNumber]++) : (c <= f.numberOfSlides ? b(f.scrollerNode).children(":eq(" + (c - 1) + ")").before(e) : b(f.scrollerNode).children(":eq(" + (c - 2) + ")").after(e), a.data("args").currentSlideNumber >= c && a.data("args").currentSlideNumber++);
				a.data("iosslider").numberOfSlides++;
				$.update(this)
			})
		},
		removeSlide: function (e) {
			return this.each(function () {
				var c = b(this),
					a = c.data("iosslider");
				if (void 0 == a) return !1;
				b(a.scrollerNode).children(":eq(" + (e - 1) + ")").remove();
				B[a.sliderNumber] > e - 1 && B[a.sliderNumber]--;
				c.data("iosslider").numberOfSlides--;
				$.update(this)
			})
		},
		goToSlide: function (e, c, a) {
			void 0 == a && (a = this);
			return b(a).each(function () {
				var a = b(this).data("iosslider");
				if (void 0 == a || a.shortContent) return !1;
				e = e > a.childrenOffsets.length ? a.childrenOffsets.length - 1 : e - 1;
				void 0 != c && (a.settings.autoSlideTransTimer = c);
				f.changeSlide(e, b(a.scrollerNode), b(a.slideNodes), R[a.sliderNumber], a.scrollbarClass, a.scrollbarWidth, a.stageWidth, a.scrollbarStageWidth, a.scrollMargin, a.scrollBorder, a.originalOffsets, a.childrenOffsets, a.slideNodeOuterWidths, a.sliderNumber, a.infiniteSliderWidth, a.numberOfSlides, a.centeredSlideOffset, a.settings)
			})
		},
		prevSlide: function (e) {
			return this.each(function () {
				var c = b(this).data("iosslider");
				if (void 0 == c || c.shortContent) return !1;
				var a = (B[c.sliderNumber] + y[c.sliderNumber] + c.numberOfSlides) % c.numberOfSlides;
				void 0 != e && (c.settings.autoSlideTransTimer = e);
				(0 < a || c.settings.infiniteSlider) && f.changeSlide(a - 1, b(c.scrollerNode), b(c.slideNodes), R[c.sliderNumber], c.scrollbarClass, c.scrollbarWidth, c.stageWidth, c.scrollbarStageWidth, c.scrollMargin, c.scrollBorder, c.originalOffsets, c.childrenOffsets, c.slideNodeOuterWidths, c.sliderNumber, c.infiniteSliderWidth, c.numberOfSlides, c.centeredSlideOffset, c.settings);
				B[c.sliderNumber] = a
			})
		},
		nextSlide: function (e) {
			return this.each(function () {
				var c = b(this).data("iosslider");
				if (void 0 == c || c.shortContent) return !1;
				var a = (B[c.sliderNumber] + y[c.sliderNumber] + c.numberOfSlides) % c.numberOfSlides;
				void 0 != e && (c.settings.autoSlideTransTimer = e);
				(a < c.childrenOffsets.length - 1 || c.settings.infiniteSlider) && f.changeSlide(a + 1, b(c.scrollerNode), b(c.slideNodes), R[c.sliderNumber], c.scrollbarClass, c.scrollbarWidth, c.stageWidth, c.scrollbarStageWidth, c.scrollMargin, c.scrollBorder, c.originalOffsets, c.childrenOffsets, c.slideNodeOuterWidths, c.sliderNumber, c.infiniteSliderWidth, c.numberOfSlides, c.centeredSlideOffset, c.settings);
				B[c.sliderNumber] = a
			})
		},
		prevPage: function (e, c) {
			void 0 == c && (c = this);
			return b(c).each(function () {
				var a = b(this).data("iosslider");
				if (void 0 == a) return !1;
				var c = f.getSliderOffset(a.scrollerNode, "x") + a.stageWidth;
				void 0 != e && (a.settings.autoSlideTransTimer = e);
				f.changeOffset(c, b(a.scrollerNode), b(a.slideNodes), R[a.sliderNumber], a.scrollbarClass, a.scrollbarWidth, a.stageWidth, a.scrollbarStageWidth, a.scrollMargin, a.scrollBorder, a.originalOffsets, a.childrenOffsets, a.slideNodeOuterWidths, a.sliderNumber, a.infiniteSliderWidth, a.numberOfSlides, a.centeredSlideOffset, a.settings)
			})
		},
		nextPage: function (e, c) {
			void 0 == c && (c = this);
			return b(c).each(function () {
				var a = b(this).data("iosslider");
				if (void 0 == a) return !1;
				var c = f.getSliderOffset(a.scrollerNode, "x") - a.stageWidth;
				void 0 != e && (a.settings.autoSlideTransTimer = e);
				f.changeOffset(c, b(a.scrollerNode), b(a.slideNodes), R[a.sliderNumber], a.scrollbarClass, a.scrollbarWidth, a.stageWidth, a.scrollbarStageWidth, a.scrollMargin, a.scrollBorder, a.originalOffsets, a.childrenOffsets, a.slideNodeOuterWidths, a.sliderNumber, a.infiniteSliderWidth, a.numberOfSlides, a.centeredSlideOffset, a.settings)
			})
		},
		lock: function () {
			return this.each(function () {
				var e = b(this).data("iosslider");
				if (void 0 == e || e.shortContent) return !1;
				b(e.scrollerNode).css({
					cursor: "default"
				});
				fa[e.sliderNumber] = !0
			})
		},
		unlock: function () {
			return this.each(function () {
				var e = b(this).data("iosslider");
				if (void 0 == e || e.shortContent) return !1;
				b(e.scrollerNode).css({
					cursor: ea
				});
				fa[e.sliderNumber] = !1
			})
		},
		getData: function () {
			return this.each(function () {
				var e = b(this).data("iosslider");
				return void 0 == e || e.shortContent ? !1 : e
			})
		},
		autoSlidePause: function () {
			return this.each(function () {
				var e = b(this).data("iosslider");
				if (void 0 == e || e.shortContent) return !1;
				N[e.sliderNumber].autoSlide = !1;
				f.autoSlidePause(e.sliderNumber);
				return e
			})
		},
		autoSlidePlay: function () {
			return this.each(function () {
				var e = b(this).data("iosslider");
				if (void 0 == e || e.shortContent) return !1;
				N[e.sliderNumber].autoSlide = !0;
				f.autoSlide(b(e.scrollerNode), b(e.slideNodes), R[e.sliderNumber], e.scrollbarClass, e.scrollbarWidth, e.stageWidth, e.scrollbarStageWidth, e.scrollMargin, e.scrollBorder, e.originalOffsets, e.childrenOffsets, e.slideNodeOuterWidths, e.sliderNumber, e.infiniteSliderWidth, e.numberOfSlides, e.centeredSlideOffset, e.settings);
				return e
			})
		}
	};
	b.fn.iosSlider = function (e) {
		if ($[e]) return $[e].apply(this, Array.prototype.slice.call(arguments, 1));
		if ("object" !== typeof e && e) b.error("invalid method call!");
		else return $.init.apply(this, arguments)
	}
})(jQuery);
