(function($) { 
	"use strict";
/* ==============================================
	Preloader
=============================================== */
$(window).load(function() {
    $('.status').fadeOut();
    $('.preloader').delay(350).fadeOut('slow');
});

$.extend($.easing, {
        easeInOutCubic : function(x, t, b, c, d){
            if ((t/=d/2) < 1) return c/2*t*t*t + b;
            return c/2*((t-=2)*t*t + 2) + b;
        }
    });

    $.fn.outerFind = function(selector){
        return this.find(selector).addBack(selector);
    };

    (function($,sr){
        // debouncing function from John Hann
        // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
        var debounce = function (func, threshold, execAsap) {
            var timeout;

            return function debounced () {
                var obj = this, args = arguments;
                function delayed () {
                    if (!execAsap) func.apply(obj, args);
                    timeout = null;
                };

                if (timeout) clearTimeout(timeout);
                else if (execAsap) func.apply(obj, args);

                timeout = setTimeout(delayed, threshold || 100);
            };
        }
        // smartresize 
        jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

    })(jQuery,'smartresize');

    $.isMobile = function(type){
        var reg = [];
        var any = {
            blackberry : 'BlackBerry',
            android : 'Android',
            windows : 'IEMobile',
            opera : 'Opera Mini',
            ios : 'iPhone|iPad|iPod'
        };
        type = 'undefined' == $.type(type) ? '*' : type.toLowerCase();
        if ('*' == type) reg = $.map(any, function(v){ return v; });
        else if (type in any) reg.push(any[type]);
        return !!(reg.length && navigator.userAgent.match(new RegExp(reg.join('|'), 'i')));
    };

    var isSupportViewportUnits = (function(){
        // modernizr implementation
        var $elem = $('<div style="height: 50vh; position: absolute; top: -1000px; left: -1000px;">').appendTo('body');
        var elem = $elem[0];
        var height = parseInt(window.innerHeight / 2, 10);
        var compStyle = parseInt((window.getComputedStyle ? getComputedStyle(elem, null) : elem.currentStyle)['height'], 10);
        $elem.remove();
        return compStyle == height;
    }());

    $(function(){

        $('html').addClass($.isMobile() ? 'mobile' : 'desktop');

        if ($.fn.jarallax && !$.isMobile()){
            $(document).on('destroy.parallax', function(event){
                $(event.target).outerFind('.mbr-parallax-background, .parallax-bg')
                    .jarallax('destroy')
                    .css('position', '');
            });
            $(document).on('add.cards change.cards', function(event){
                $(event.target).outerFind('.mbr-parallax-background, .parallax-bg')
                    .jarallax()
                    .css('position', 'relative');
            });
        }
 
	  var oMenuLink = $('#menu-tog'),
		oNav = $('#navigation'),
		oSubMenu = oNav.find('.submenu');

	/* Desktop, tablet and mobile menu
	================================================== */
	if ( oSubMenu.length ) {
		oSubMenu.parent().addClass('has-submenu');
	};

	oMenuLink.on('click', function(e) {
		e.preventDefault();

		var $this = $(this);

		if ($this.hasClass('active')) {

			oNav.slideUp('fast');
			oSubMenu.css({ display : 'none' });

			$this.removeClass('active');

			oNav.find('a.drop_active').removeClass('drop_active');

		} else {

			oNav.slideDown('fast');

			$this.addClass('active');

		};
	});

	oNav.on('touchend click', 'ul>li>a', function() {
		var $this = $(this);

		if ( oMenuLink.is(':visible') ) {
			if ( $this.next().is('div.submenu') ) {
				if ( $this.next().is(':visible') ) {

					$this.removeClass('drop_active');
					$this.next().slideUp('fast');
					$this.next().find('.submenu').css({display : 'none' });

				} else {

					$this.closest('ul').find('a.drop_active').removeClass('drop_active');
					$this.closest('ul').find('.submenu').slideUp('fast');
					$this.addClass('drop_active');
					$this.next().slideDown('fast');
				};

				return false;
			};
		};
	});

	$(window).smartresize(function(){
		if ($(this).width() > 991) { 

			oMenuLink.removeClass('active');
			oNav.removeAttr('style');
			oSubMenu.removeAttr('style');
			oNav.find('a.drop_active').removeClass('drop_active');
		}
		});

		$('#go-bottom').on('click', function (e) {
			e.preventDefault();
		$('body,html').stop().animate({ scrollTop: document.documentElement.clientHeight } , 1000);
		});

        // init
        $('body > *:not(style, script)').trigger('add.cards');
        $('html').addClass('mbr-site-loaded');
        $(window).resize().scroll();

    });


/* ==============================================
	Gallery
=============================================== */
$('.carousel[data-type="multi"] .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  
  next.children(':first-child').clone().appendTo($(this));
  
  for (var i=0;i<4;i++) {
    next=next.next();
    if (!next.length) {
    	next = $(this).siblings(':first');
  	}
    
    next.children(':first-child').clone().appendTo($(this));
  }
  
});

/* ---------------------------------------------------------------------- */
/*	Search Script
/* ---------------------------------------------------------------------- */
$(".search-fld").on('click',function(){
if($(this).hasClass('minus')){        
	$(this).toggleClass("plus minus");
	$('.search-wrapper-area').fadeOut();
}else{
	$('.search-wrapper-area').fadeIn();
	$(this).toggleClass("minus plus");
}
});
	
/* ---------------------------------------------------------------------- */
/*	Home Page VIDEO
/* ---------------------------------------------------------------------- */
jQuery.noConflict();
jQuery(document).ready(function (jQuery) {
// delegate calls to data-toggle="lightbox"
jQuery(document).delegate('*[data-toggle="lightbox"]:not([data-gallery="navigateTo"])', 'click', function(event) {
	event.preventDefault();
	return jQuery(this).ekkoLightbox({
		onShown: function() {
			/*if (window.console) {
				return console.log('Checking our the events huh?');
			}*/
		},
		onNavigate: function(direction, itemIndex) {
			if (window.console) {
				return console.log('Navigating '+direction+'. Current item: '+itemIndex);
			}
		}
	});
});
});  

$(document).ready(function(){
$('.panel-collapse').collapse({toggle: false});
$('body').on('click', '[data-toggle=collapse-next]', function (e) {
e.preventDefault();
	
// Try to close all of the collapse areas first
var parent_id = $(this).data('parent');
$(parent_id+' .panel-collapse').collapse('hide');

// ...then open just the one we want
var $target = $(this).parents('.panel').find('.panel-collapse');
$target.collapse('toggle');
});
});

$('.guidespro').find('a[href="#"]').on('click', function (e) {
e.preventDefault();
this.expand = !this.expand;
$(this).text(this.expand?"read more -":"read more +");
$(this).closest('.guidespro').find('.small, .big').toggleClass('small big');
});
	 
/*-----------------------------------------------------------------------------------*/
/*    ONLY MAC OS FONT 
/*-----------------------------------------------------------------------------------*/
if(navigator.userAgent.indexOf('Mac') > 0)
$('body').addClass('mac-os');

/* slideshow */
if (jQuery(".tp-banner").length) {
	jQuery('.tp-banner').revolution({
		delay:5000,
		startwidth:1170,
		startheight:532,
		hideThumbs:200,
		fullWidth:"off",
		fullScreen:"off",
	});
}
 

jQuery(".box-icon-number h5").each(function () {
	jQuery(this).appear(function() {
		var endNum = parseInt(jQuery(this).text());
		jQuery(this).countTo({
			from: 0,
			to: endNum,
			speed: 4000,
			refreshInterval: 60,
		});
	},{accX: 0, accY: 0});
});
	
/* Go up */
jQuery(window).scroll(function () {
	if(jQuery(this).scrollTop() > 100 ) {
		jQuery(".go-up").css("right","20px");
	}else {
		jQuery(".go-up").css("right","-60px");
	}
});
jQuery(".go-up").click(function(){
	jQuery("html,body").animate({scrollTop:0},500);
	return false;
});
	
/* Accordion & Toggle */
jQuery(".accordion .accordion-title").each(function(){
  jQuery(this).click(function() {
	  if (jQuery(this).parent().parent().hasClass("toggle-accordion")) {
		  jQuery(this).parent().find("li:first .accordion-title").addClass("active");
	  jQuery(this).parent().find("li:first .accordion-title").next(".accordion-inner").addClass("active");
		  jQuery(this).toggleClass("active");
		  jQuery(this).next(".accordion-inner").slideToggle().toggleClass("active");
		  jQuery(this).find("i").toggleClass("fa-minus").toggleClass("fa-plus");
	  }else {
		  if (jQuery(this).next().is(":hidden")) {
		  jQuery(this).parent().parent().find(".accordion-title").removeClass("active").next().slideUp(200);
		  jQuery(this).parent().parent().find(".accordion-title").next().removeClass("active").slideUp(200);
			  jQuery(this).toggleClass("active").next().slideDown(200);
			  jQuery(this).next(".accordion-inner").toggleClass("active");
			  jQuery(this).parent().parent().find("i").removeClass("fa-plus").addClass("fa-minus");
			  jQuery(this).find("i").removeClass("fa-minus").addClass("fa-plus");
		  }
	  }
	  return false;
  });
});
	
	/* Progressbar */
	if (jQuery(".progressbar-percent").length) {
		jQuery(".progressbar-percent").each(function(){
			var $this = jQuery(this);
			var percent = $this.attr("data-percent");
			$this.bind("inview", function(event, isInView, visiblePartX, visiblePartY) {
				if (isInView) {
					$this.animate({ "width" : percent + "%"}, percent*20);
				}
			});
		});
	}  
    
/* animation */
	jQuery(".animation").each( function() {
		var $this = jQuery(this);
		var animation = $this.attr("data-animate");
		$this.bind("inview", function(event, isInView, visiblePartX, visiblePartY) {
			if (isInView) {
				$this.css("visibility","visible");
				$this.addClass(animation);
				if(animation.indexOf("fade") === -1) {
					$this.css("opacity", "1");
				}
			}
		});
	});
	
	var $tabs = $('#wheel-tab li');
        $('#wheel-left').on('click', function () {
            $tabs.filter('.active').prev('li').find('a[data-toggle="tab"]').tab('show');
        });
        $('#wheel-right').on('click', function () {
            $tabs.filter('.active').next('li').find('a[data-toggle="tab"]').tab('show');
        });
		
		if ($("#s").val() != '') {
		$("#s").animate({width:150},"0");
	}
	$('#searchsubmit').on( "click", function() {
		if($("#s").css( "width" ) == '1px') {
			$("#s").animate({width:150},"normal");
		}else{
			$("#s").animate({width:1},"normal");
		}
	});
    
    
    
    $('.scroll-down').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		
				if($(window).outerWidth() < 768){
				   $('html,body').animate({scrollTop: target.offset().top},1000); 
				}
				else {
					$('html,body').animate({scrollTop: target.offset().top-95}, 1000);	
					}
					return false;
				}
			}); 
    
    /*Map same page link*/ 
        $('.maplink').on('click',function (e) {
            e.preventDefault();

            var target = $(this).attr('xlink:href');
            var $target = $(target);

            if($(window).outerWidth() < 768){
                $('html,body').animate({scrollTop: $(target).offset().top}, 1000);
            }
            else {
                $('html,body').animate({scrollTop: $(target).offset().top-95 }, 1000);
            }
            return false;
         });
 
/* Trip Menu */
    $(function() {
        $('.menu ul li a').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

            if($(window).outerWidth() < 768){
               $('html,body').animate({scrollTop: target.offset().top},1000);
            }
            else {
                $('html,body').animate({scrollTop: target.offset().top-144}, 1000);
                }
                return false;
            }	
        });
    });
    
/* --------- Responsive Tabs --------- */
    var fakewaffle = ( function ( $, fakewaffle ) {
	'use strict';

	fakewaffle.responsiveTabs = function ( collapseDisplayed ) {

		fakewaffle.currentPosition = 'tabs';

		var tabGroups = $( '.trip-tabs.responsive' );
		var hidden    = '';
		var visible   = '';
		var activeTab = '';

		if ( collapseDisplayed === undefined ) {
			collapseDisplayed = [ 'xs', 'sm' ];
		}

		$.each( collapseDisplayed, function () {
			hidden  += ' hidden-' + this;
			visible += ' visible-' + this;
		} );

		$.each( tabGroups, function ( index ) {
			var collapseDiv;
			var $tabGroup = $( this );
			var tabs      = $tabGroup.find( 'li a' );

			if ( $tabGroup.attr( 'id' ) === undefined ) {
				$tabGroup.attr( 'id', 'tabs-' + index );
			}

			collapseDiv = $( '<div></div>', {
				'class' : 'trippanel responsive' + visible,
				'id'    : 'collapse-' + $tabGroup.attr( 'id' )
			} );

			$.each( tabs, function () {
				var $this          = $( this );
				var oldLinkClass   = $this.attr( 'class' ) === undefined ? '' : $this.attr( 'class' );
				var newLinkClass   = 'accordion-toggle';
				var oldParentClass = $this.parent().attr( 'class' ) === undefined ? '' : $this.parent().attr( 'class' );
				var newParentClass = 'panel panel-default';
				var newHash        = $this.get( 0 ).hash.replace( '#', 'collapse-' );

				if ( oldLinkClass.length > 0 ) {
					newLinkClass += ' ' + oldLinkClass;
				}

				if ( oldParentClass.length > 0 ) {
					oldParentClass = oldParentClass.replace( /\bactive\b/g, '' );
					newParentClass += ' ' + oldParentClass;
					newParentClass = newParentClass.replace( /\s{2,}/g, ' ' );
					newParentClass = newParentClass.replace( /^\s+|\s+$/g, '' );
				}

				if ( $this.parent().hasClass( 'active' ) ) {
					activeTab = '#' + newHash;
				}

				collapseDiv.append(
					$( '<div>' ).attr( 'class', newParentClass ).html(
						$( '<div>' ).attr( 'class', 'panel-heading' ).html(
							$( '<h4>' ).attr( 'class', 'panel-title' ).html(
								$( '<a>', {
									'class'       : newLinkClass,
									'data-toggle' : 'collapse',
									'data-parent' : '#collapse-' + $tabGroup.attr( 'id' ),
									'href'        : '#' + newHash,
									'html'        : $this.html()
								} )
							)
						)
					).append(
						$( '<div>', {
							'id'    : newHash,
							'class' : 'panel-collapse collapse'
						} )
					)
				);
			} );

			$tabGroup.next().after( collapseDiv );
			$tabGroup.addClass( hidden );
			$( '.trip-tab-content.responsive' ).addClass( hidden );

			if ( activeTab ) {
				$( activeTab ).collapse( 'show' );
			}
		} );

		fakewaffle.checkResize();
		fakewaffle.bindTabToCollapse();
	};

	fakewaffle.checkResize = function () {

		if ( $( '.trippanel.responsive' ).is( ':visible' ) === true && fakewaffle.currentPosition === 'tabs' ) {
			fakewaffle.tabToPanel();
			fakewaffle.currentPosition = 'panel';
		} else if ( $( '.trippanel.responsive' ).is( ':visible' ) === false && fakewaffle.currentPosition === 'panel' ) {
			fakewaffle.panelToTab();
			fakewaffle.currentPosition = 'tabs';
		}

	};

	fakewaffle.tabToPanel = function () {

		var tabGroups = $( '.trip-tabs.responsive' );

		$.each( tabGroups, function ( index, tabGroup ) {

			// Find the tab
			var tabContents = $( tabGroup ).next( '.trip-tab-content' ).find( '.tab-pane' );

			$.each( tabContents, function ( index, tabContent ) {
				// Find the id to move the element to
				var destinationId = $( tabContent ).attr( 'id' ).replace ( /^/, '#collapse-' );

				// Convert tab to panel and move to destination
				$( tabContent )
					.removeClass( 'tab-pane' )
					.addClass( 'panel-body fw-previous-tab-pane' )
					.appendTo( $( destinationId ) );

			} );

		} );

	};

	fakewaffle.panelToTab = function () {

		var panelGroups = $( '.trippanel.responsive' );

		$.each( panelGroups, function ( index, panelGroup ) {

			var destinationId = $( panelGroup ).attr( 'id' ).replace( 'collapse-', '#' );
			var destination   = $( destinationId ).next( '.trip-tab-content' )[ 0 ];

			// Find the panel contents
			var panelContents = $( panelGroup ).find( '.panel-body.fw-previous-tab-pane' );

			// Convert to tab and move to destination
			panelContents
				.removeClass( 'panel-body fw-previous-tab-pane' )
				.addClass( 'tab-pane' )
				.appendTo( $( destination ) );

		} );

	};

	fakewaffle.bindTabToCollapse = function () {

		var tabs     = $( '.trip-tabs.responsive' ).find( 'li a' );
		var collapse = $( '.trippanel.responsive' ).find( '.panel-collapse' );

		// Toggle the panels when the associated tab is toggled
		tabs.on( 'shown.bs.tab', function ( e ) {

			if (fakewaffle.currentPosition === 'tabs') {
				var $current  = $( e.currentTarget.hash.replace( /#/, '#collapse-' ) );
				$current.collapse( 'show' );

				if ( e.relatedTarget ) {
					var $previous = $( e.relatedTarget.hash.replace( /#/, '#collapse-' ) );
					$previous.collapse( 'hide' );
				}
			}

		} );

		// Toggle the tab when the associated panel is toggled
		collapse.on( 'shown.bs.collapse', function ( e ) {

			if (fakewaffle.currentPosition === 'panel') {
				// Activate current tabs
				var current = $( e.target ).context.id.replace( /collapse-/g, '#' );
				$( 'a[href="' + current + '"]' ).tab( 'show' );

				// Update the content with active
				var panelGroup = $( e.currentTarget ).closest( '.trippanel.responsive' );
				$( panelGroup ).find( '.panel-body' ).removeClass( 'active' );
				$( e.currentTarget ).find( '.panel-body' ).addClass( 'active' );
			}

		} );
	};

	$( window ).resize( function () {
		fakewaffle.checkResize();
	} );

	return fakewaffle;
    }( window.jQuery, fakewaffle || { } ) );
    
    $( 'ul.nav.trip-tabs  a' ).click( function ( e ) {
        e.preventDefault();
        $( this ).tab( 'show' );
      } );

      ( function( $ ) {
          // Test for making sure event are maintained
          $( '.js-alert-test' ).click( function () {
            alert( 'Button Clicked: Event was maintained' );
          } );
          fakewaffle.responsiveTabs( [ 'xs', 'sm' ] );
      } )( jQuery );
    
/* ---------End  Responsive Tabs --------- */
    
    
})(jQuery);

	
