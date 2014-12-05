
var doc_list_item_height = 325;
var doc_list_item_offset_top = 0;
var doc_list_item_counter = 0;
var doc_list_item_limit = 0;
var doc_list_item_default_opacity = "0.1";
var doc_list_item_middle_opacity = "0.5";
var doc_list_item_active_opacity = "1";
var doc_list_item_fade_time_in = 500;
var doc_list_item_fade_time_out = 100;
var doc_list_item_hoverfade_time_in = 500;
var doc_list_item_hoverfade_time_out = 200;

var doc_list5_height = 400;
var doc_list5_item_hoverfade_time_in = 100;
var doc_list5_item_hoverfade_time_out = 500;

var width_active_items = 856;
var width_arrows = 190;

var left_arrows_offset = 86;
var right_arrows_offset = -86;

var arrows_top_offset = 129;
var arrows_bottom_offset = 106;

var padding_arrows = 0;

var arrows_height = 90;
var top_menu_height = 87;

//alert($(window).load);


	// Mozilla proposal
	//if(document.documentElement.requestFullScreen)
	//{
		//if(document.fullScreen == false && document.height == screen.height)
		//{
			//document.documentElement.requestFullScreen();
		//}
	//}
	// Firefox (Nightly)
	//else if(document.documentElement.mozRequestFullScreen)
	//{
		//if(document.mozFullScreen == false && document.height == screen.height)
		//{
			//document.documentElement.mozRequestFullScreen();
		//}
	//}
	// Webkit (Chrome, Safari)
	//else if(document.documentElement.webkitRequestFullScreen) // note the 'Is'
	//{
		//if(document.webkitIsFullScreen == false && document.height == screen.height)
		//{
			//document.documentElement.webkitRequestFullScreen();
		//}
	//}


$(window).unload(function() {


	$("#frame_loading").fadeOut("400")


});


$(window).load(function() {

    $("#frame_loading2").css("display", "none");

    $("#frame_loading").fadeOut(500, function() {
        $("frame_loading").css("display", "none");
    }
    );

    if ($(".doc_list_5_item").length > 0) {

        // ikke testet
        // husk å legge dette inn på resize

		//alert($("#frame").height());
		//alert((Math.round(($("#frame").height() - doc_list5_height) / 2)) - 57);

        doc_list_item_offset_top = (Math.round(($("#frame").height() - doc_list5_height) / 2)) - 57;

        if (doc_list_item_offset_top > 0) {
            //$("#middle_inner_content").css("paddingTop", doc_list_item_offset_top);

            $("#middle_inner_content").stop().animate({ paddingTop: doc_list_item_offset_top }, 1);

        }
	}


	// Mozilla proposal
	//if(document.documentElement.requestFullScreen)
	//{
		//if(document.fullScreen == false && document.height == screen.height)
		//{
			//document.documentElement.requestFullScreen();
		//}
	//}
	// Firefox (Nightly)
	//else if(document.documentElement.mozRequestFullScreen)
	//{
		//if(document.mozFullScreen == false && document.height == screen.height)
		//{
			//document.documentElement.mozRequestFullScreen();
			//alert(document.mozFullScreen);
		//}
	//}
	// Webkit (Chrome, Safari)
	//else if(document.documentElement.webkitRequestFullScreen) // note the 'Is'
	//{
		//if(document.webkitIsFullScreen == false && document.height == screen.height)
		//{
			//document.documentElement.webkitRequestFullScreen();
		//}
	//}






	// W3C proposal
	// None? Why?

    //window.history.forward(1);
});

$(document).ready(function() {



	// Mozilla proposal
	//if(document.documentElement.requestFullScreen)
	//{
		//if(document.fullScreen == false && document.height == screen.height)
		//{
			//document.documentElement.requestFullScreen();
		//}
	//}
	// Firefox (Nightly)
	//else if(document.documentElement.mozRequestFullScreen)
	//{
		//if(document.mozFullScreen == false && document.height == screen.height)
		//{
			//document.documentElement.mozRequestFullScreen();
			//alert(document.mozFullScreen);
		//}
	//}
	// Webkit (Chrome, Safari)
	//else if(document.documentElement.webkitRequestFullScreen) // note the 'Is'
	//{
		//if(document.webkitIsFullScreen == false && document.height == screen.height)
		//{
			//document.documentElement.webkitRequestFullScreen();
		//}
	//}

	// detect touch devices to turn off any mouseover only functions
	window.is_touch_device = (/iPhone|iPod|iPad|Android/i).test(navigator.userAgent);

	if(window.is_touch_device)
	{
		//document.getElementById('frame').style.width = "1500px !important";
		//jQuery('#frame').css('cssText', 'width: 1200px !important;');
		//jQuery('#top').css('cssText', 'width: 1200px !important;');
		//jQuery('#middle').css('cssText', 'width: 1200px !important;');
		//jQuery('#footer').css('cssText', 'width: 1200px !important;');
		//jQuery('#supersize').css('cssText', 'width: 1200px !important;');

		

		//jQuery('body').css('cssText', 'width: 1200px !important;overflow:hidden !important;');
		//jQuery('html').css('cssText', 'width: 1200px !important;overflow:hidden !important;');

		$(".screenshot").removeClass("screenshot");

	}
	else
	{



		//jQuery('#frame').css('cssText', 'width: 1500px !important');
		//jQuery('body').css('cssText', 'width: auto !important');
		//jQuery('html').css('cssText', 'width: auto !important');

		//jQuery('#frame').css('cssText', 'width: 1500px !important');
		//$("#frame").css("width", "1500px !important");
	}

    if (getCookie('top_is_hidden') != null && getCookie('top_is_hidden') == 'true') {
        $("#top").css({ "top": "-87px" });
        $("#hide_button").fadeOut(500);
        $("#show_button").fadeIn(500);
    }
    else {
        $("#top").css({ "top": "0px" });
        $("#hide_button").fadeIn(500);
        $("#show_button").fadeOut(500);
    }

    screenshotPreview();



    //$('#loader').css({ display: "block" });
    //setTimeout('$("#frame_loading").fadeOut("400")', 500);

    //$("#frame_loading2").css("display", "none");

    //setTimeout('$("#frame_loading").fadeOut(500, function() { $("#frame_loading").css("display", "none")})', 500);

    /* loop through a tags on page */
    $('a').each(function(idx, item) {
        //alert(item.href.substring(0, 4));
        /* if it is not a mailto tag */
        //if (item.href.indexOf("mailto") == -1 && item.href.indexOf("default.aspx") != -1) {
        if (item.href != "" && item.href.indexOf("mailto") == -1 && item.target != "_blank" && item.target != "blank") {
            var url = "javascript:delayedRedirect('" + item.href + "');"
            item.href = url;
        }
    });



    var links = document.getElementsByTagName('div');
    for (j = 0; j < links.length; j++) {
        var link = links[j];
        if (link.onclick != null) {

            var txt = new String(link.onclick);
            if (txt.indexOf("location.href") != -1) {

                txt = txt.split(' ').join('');
                txt = txt.replace('functiononclick(event){', '');
                txt = txt.replace('functiononclick()', '');
                txt = txt.replace('{', '');
                txt = txt.replace('location.href=', 'delayedRedirect(');
                txt = txt.replace('";', '");');
                txt = txt.replace("';", "');");
                txt = txt.replace('}', '');

                links[j].onclick = Function(txt);

            }
        }
    }

    if ($("#horizontal-arrow-left").css("display") == "block");
    {
        calculateArrowPaddingTopBottom();
    }

    // id doc1 (project)
    if ($(".doc1").length > 0) {

        $("#middle_inner").css("width", "1048px");
        $("#middle_inner").css("paddingLeft", "95px");
        $("#middle_inner").css("paddingRight", "95px");

        doc_list_item_offset_top = Math.round(((($("#frame").height() - $(".doc1").height()) / 2)) - 64);

        if (doc_list_item_offset_top > 10) {
            $("#middle_inner_content").css("paddingTop", doc_list_item_offset_top);
        }
        else {
            $("#middle_inner_content").css("paddingTop", "10");
        }

        if ($(".doc1").length > 1 || (document.hiddenValuesNext != null)) {

            $("#horizontal-arrow-left").css("display", "block");
            $("#horizontal-arrow-right").css("display", "block");

            $("#horizontal-arrow-left").click(function() {
                prevImg();
            });

            $("#horizontal-arrow-right").click(function() {
                nextImg();
            });
        }

    }

    // id doc2 (employee)
    if ($(".doc2").length > 0) {

        $("#middle_inner").css("width", "1048px");

        if (Math.round(((($("#frame").height() - $("#middle_inner").height()) / 2)) - 64) > 10) {
            $("#middle_inner_content").css("paddingTop", Math.round(((($("#frame").height() - $(".doc2").height()) / 2)) - 64));
        }
        else {
            $("#middle_inner_content").css("paddingTop", "10");
        }
    }

    // if doc_list_5 (just images)
    if ($(".doc_list_5_item").length > 0) {

        $("#middle_inner").css("width", "1057px");
        // ikke testet
        // husk å legge dette inn på resize

		//alert($("#frame").height());
		//alert((Math.round(($("#frame").height() - doc_list5_height) / 2)) - 57);

        doc_list_item_offset_top = (Math.round(($("#frame").height() - doc_list5_height) / 2)) - 57;

        if (doc_list_item_offset_top > 0) {
            //$("#middle_inner_content").css("paddingTop", doc_list_item_offset_top);

            //$("#middle_inner_content").stop().animate({ paddingTop: doc_list_item_offset_top }, 5000);

        }

        add_doc_list_5_item_hover();

        $(".doc-list5-outer").css("overflow", "hidden");
        $(".doc-list5-outer").css("position", "relative");
        $(".doc-list5-outer").css("width", "1067px");

        $(".doc-list5").css("float", "left");

        // if more than one page
        if ($(".doc-list5 .doc-list-item").length > 1) {

            $("#middle_inner").css("width", "1257px");

            $("#middle_inner_content").css("width", "1067px");
            $("#middle_inner_content").css("paddingLeft", "100px");
            $("#middle_inner_content").css("paddingRight", "100px");

            //alert((".related-documents").length);

            $("#horizontal-arrow-left").css("display", "none");
            $("#horizontal-arrow-right").css("display", "block");

            $("#horizontal-arrow-left").click(function() {
                prev_doc_list5();
            });

            $("#horizontal-arrow-right").click(function() {
                next_doc_list5();
            });

            jQuery.easing.easeOutQuart = function(x, t, b, c, d) {
                return -c * ((t = t / d - 1) * t * t * t - 1) + b;
            };

            // Scrolling

            $('.doc-list5-outer').serialScroll({
                items: '.product-start',
                offset: 0, // Must be changed in juery.scrollTo.js as well ("offset")
                //offset: -100,
                start: 0, //as we are centering it, start at the 1st
                duration: 1000,
                axis: 'x',
                force: true,
                stop: true,
                step: 1,
                lock: true,
                lazy: true,
                constant: true,
				easing: 'easeOutQuart', //use this easing equation for a funny effect
                cycle: true, //pull back once you reach the end
                jump: false //click on the images to scroll to them
            });
        }

    }

    // count doc list items (horizontal scroll)
    doc_list_item_limit = ($(".horizontal_slide_item").length);

    // if more than 0 horizontal scroll items
    if (doc_list_item_limit > 0) {

        // center doc list horizontal
        doc_list_item_offset_top = (Math.round(($("#frame").height() - doc_list_item_height) / 2)) - 57;
        $("#middle_inner_content").css("paddingTop", doc_list_item_offset_top);

        // add hover on doc list items
        $(".horizontal_slide_item").hover(function() {

            if ($(this).hasClass("horizontal_slide_item_active"))
                $(this).stop().fadeTo(doc_list_item_hoverfade_time_in, doc_list_item_active_opacity);
        }
        ,
        function() {

            if ($(this).hasClass("horizontal_slide_item_active"))
                $(this).stop().fadeTo(doc_list_item_hoverfade_time_out, doc_list_item_middle_opacity);
        });

        // show first doc list item as active
        $(".horizontal_slide_item").eq(0).addClass("horizontal_slide_item_active");
        $(".horizontal_slide_item").eq(0).css("opacity", doc_list_item_middle_opacity);

    }

    // if more than 1 horizontal scroll items
    if (doc_list_item_limit > 1) {

        // show second doc list item as active
        $(".horizontal_slide_item").eq(1).addClass("horizontal_slide_item_active");
        $(".horizontal_slide_item").eq(1).css("opacity", doc_list_item_middle_opacity);
    }

    // if more than 2 horizontal scroll items
    if (doc_list_item_limit > 2) {

        // show third doc list item as active
        $(".horizontal_slide_item").eq(2).addClass("horizontal_slide_item_active");
        $(".horizontal_slide_item").eq(2).css("opacity", doc_list_item_middle_opacity);
    }

    // if more than 3 items activate horizontal scroll
    if (doc_list_item_limit > 3) {

        // change to full width view
        $("#middle_inner").css("width", "100%");

        // calculate and add padding to arrows
        //$("#horizontal-arrow-left").css("paddingTop", doc_list_item_offset_top + arrows_top_offset);
        //$("#horizontal-arrow-right").css("paddingTop", doc_list_item_offset_top + arrows_top_offset);
        //$("#horizontal-arrow-left").css("paddingBottom", doc_list_item_offset_top + arrows_bottom_offset);
        //$("#horizontal-arrow-right").css("paddingBottom", doc_list_item_offset_top + arrows_bottom_offset);

        ActivatehorizontalScrollingOnDocList();

        $("#horizontal-arrow-left").css("display", "block");
        $("#horizontal-arrow-right").css("display", "block");

        $("#horizontal-arrow-left").click(function() {
            prev_doc_list_item();
        });

        $("#horizontal-arrow-right").click(function() {
            next_doc_list_item();
        });


        padding_arrows = ($(window).width() - width_active_items - width_arrows) / 2;

        if ($(window).width() - width_active_items - width_arrows > 0) {
            $("#horizontal-arrow-left").css("paddingRight", (padding_arrows - left_arrows_offset));
        }
        else {
            $("#horizontal-arrow-left").css("paddingRight", "0px");
        }


        if ($(window).width() - width_active_items - width_arrows - right_arrows_offset > 0) {


            $("#horizontal-arrow-right").css("paddingLeft", (padding_arrows - right_arrows_offset));
        }
        else {
            $("#horizontal-arrow-right").css("paddingLeft", "0px");
        }


        //////////////////////////////////////
        // timeline
        //////////////////////////////////////

        $('#timeline').timeline();
    }


    $(window).bind("resize", function() {


        if ($("#horizontal-arrow-left").css("display") == "block");
        {
            calculateArrowPaddingTopBottom();
        }


        // if doc_list_5 (just images)
        if ($(".doc_list_5_item").length > 0) {

            // ikke testet
            doc_list_item_offset_top = (Math.round(($("#frame").height() - doc_list5_height) / 2)) - 57;

            if (doc_list_item_offset_top > 0) {
                $("#middle_inner_content").css("paddingTop", doc_list_item_offset_top);
            }

        }

        // id doc1 (project)
        if ($(".doc1").length > 0) {

            $("#middle_inner").css("width", "1048px");

            doc_list_item_offset_top = Math.round(((($("#frame").height() - $(".doc1").height()) / 2)) - 64);

            if (doc_list_item_offset_top > 10) {
                $("#middle_inner_content").css("paddingTop", doc_list_item_offset_top);
            }
            else {
                $("#middle_inner_content").css("paddingTop", "10");
            }
        }

        // id doc2 (employee)
        if ($(".doc2").length > 0) {


            if (Math.round(((($("#frame").height() - $("#middle_inner").height()) / 2)) - 64) > 10) {
                $("#middle_inner_content").css("paddingTop", Math.round(((($("#frame").height() - $(".doc2").height()) / 2)) - 64));
            }
            else {
                $("#middle_inner_content").css("paddingTop", "10");
            }


        }

        // if horizontal slide
        if (doc_list_item_limit > 0) {
            doc_list_item_offset_top = (Math.round(($("#frame").height() - doc_list_item_height) / 2)) - 57;
        }

        if (doc_list_item_limit > 1) {
            $("#middle_inner_content").css("paddingTop", doc_list_item_offset_top);
        }

        // if more than three horizontal slide
        if (doc_list_item_limit > 3) {


            //$("#horizontal-arrow-left").css("paddingTop", doc_list_item_offset_top + arrows_top_offset);
            //$("#horizontal-arrow-right").css("paddingTop", doc_list_item_offset_top + arrows_top_offset);
            //$("#horizontal-arrow-left").css("paddingBottom", doc_list_item_offset_top + arrows_bottom_offset);
            //$("#horizontal-arrow-right").css("paddingBottom", doc_list_item_offset_top + arrows_bottom_offset);

            var thisOffset = Math.round((($(window).width() - 1029) / 2));

            if (thisOffset > 0) {
                $(".doc-list div.row div.first").css("marginLeft", thisOffset);
            }

            //$(".doc-list-item").settings.offset = both(-thisOffset);

            $(".doc-list-item").trigger("goto", [doc_list_item_counter]);
            //clearInterval(slideshow_interval);


            padding_arrows = ($(window).width() - width_active_items - width_arrows) / 2;

            if ($(window).width() - width_active_items - width_arrows > 0) {
                $("#horizontal-arrow-left").css("paddingRight", (padding_arrows - left_arrows_offset));
            }
            else {
                $("#horizontal-arrow-left").css("paddingRight", "0px");
            }
            if ($(window).width() - width_active_items - width_arrows - right_arrows_offset > 0) {
                $("#horizontal-arrow-right").css("paddingLeft", (padding_arrows - right_arrows_offset));
            }
            else {
                $("#horizontal-arrow-right").css("paddingLeft", "0px");
            }
        }

        //////////////////////////////////////
        // timeline
        //////////////////////////////////////

        $('#timeline').timeline();

    });



});



/* Google Maps integration -------------------------------------------------------------------------------------- */
function AttachGMap(address, infobox, id, form_id) {

	var geocoder = null;
	var map = null;

	if (GBrowserIsCompatible()) {
		map = new GMap2(document.getElementById(id));

		// Add marker for store address
		var geocoder = new GClientGeocoder();
		var point = geocoder.getLatLng(address, function(point) {

			if (!point) {
				//alert(address + " not found");
				// address not found, make maps invisible
				$("#" + id).css("background", "#fff");

			} else {
				var marker0 = new GMarker(point);
				marker0.title = "";
				map.addOverlay(marker0);
				map.setCenter(point, 13);
				GEvent.addListener(marker0, "click", function() {
					// submit to maps.google.no
					document.getElementById(form_id).submit();
				});
			}

			map.addControl(new GLargeMapControl());
			map.addControl(new GMapTypeControl());
			map.addControl(new GScaleControl());
		});
	}

	// hide copyrightinfo on the bottom. I did this because it was too big and went outside designated area.
	//$("#" + id + " .gmnoprint,#" + id + " > div:last").css("display", "none");
}



// disable selecting
// $.disableSelection(selector)
jQuery.fn.extend({
	disableSelection: function() {
		this.each(function() {
			this.onselectstart = function() { return false; };
			this.unselectable = "on";
			jQuery(this).css('-moz-user-select', 'none');
		});
	}
});

// check if page has visible scrollbar
// $.hasScrollbar()
jQuery.fn.hasScrollbar = function() {
	var scrollHeight = this.get(0).scrollHeight;

	//safari's scrollHeight includes padding
	if ($.browser.safari)
		scrollHeight -= parseInt(this.css('padding-top')) + parseInt(this.css('padding-bottom'));

	if (this.height() < scrollHeight)
		return true;
	else
		return false;
}

// get width of scrollbar (varies between browsers)
function scrollbarWidth() {
	var div = $('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>');
	// Append our div, do our calculation and then remove it 
	$('body').append(div);
	var w1 = $('div', div).innerWidth();
	div.css('overflow-y', 'scroll');
	var w2 = $('div', div).innerWidth();
	$(div).remove();
	return (w1 - w2);
}

function setCookie(name, value, expires) {
    document.cookie = name + "=" + escape(value) + "; path=/" + ((expires == null) ? "" : "; expires=" + expires.toGMTString());
}

function getCookie(name) {

    var dc = document.cookie;
    var cname = name + "=";

    if (dc.length > 0) {
        begin = dc.indexOf(cname);
        if (begin != -1) {
            begin += cname.length;
            end = dc.indexOf(";", begin);
            if (end == -1) end = dc.length;
            return unescape(dc.substring(begin, end));
        }
    }
    return null;
}

function ActivatehorizontalScrollingOnDocList() {

    jQuery.easing.easeOutQuart = function(x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    };

    var thisOffset = Math.round((($(window).width() - 1029) / 2));

    if (thisOffset < 0) {
        thisOffset = 0
    }

    if (thisOffset > 0)
        $(".doc-list div.row div.first").css("marginLeft", thisOffset);

    // Scrolling for tweets
    
    $('.doc-list-item').serialScroll({
        items: '.horizontal_slide_item',
        offset: -(thisOffset), // Must be changed in juery.scrollTo.js as well ("offset")
        //offset: -100,
        start: 0, //as we are centering it, start at the 1st
        duration: 500,
        axis: 'x',
        force: true,
        stop: true,
        step: 1,
        lock: true,
        lazy: true,
        constant: true,
        cycle: true, //pull back once you reach the end
        easing: 'easeOutQuart', //use this easing equation for a funny effect
        jump: false //click on the images to scroll to them
    });


}

var doc_list5_counter = 1;

function prev_doc_list5() {
    //$(".doc-list5-outer").find(".doc_list5_img_overlay").stop().css("opacity", "1");
    //$(".doc_list_5_item a").stop().css("opacity", "1");

    if (!$('.doc-list5-outer').is(':animated')) {

        if (doc_list5_counter > 1) {

            $("#horizontal-arrow-right").css("display", "block");

            //$(".doc-list5 .doc_list_5_item_header").stop().fadeTo(500, "0");
            //$(".doc_list_5_item a").find(".doc_list5_img_overlay").stop().fadeTo(doc_list5_item_hoverfade_time_out, "0")
            //$(".doc_list_5_item a").stop().fadeTo(500, "0");

            //setTimeout('$(".doc-list5 .doc_list_5_item_header").stop().fadeTo(doc_list5_item_hoverfade_time_out, "0.6")', 1000);
            //setTimeout('$(".doc_list_5_item a").find(".doc_list5_img_overlay").stop().fadeTo(doc_list5_item_hoverfade_time_out, "0.2")', 1000);
            //setTimeout('$(".doc_list_5_item a").stop().fadeTo(doc_list5_item_hoverfade_time_out, "0.5")', 1000);


            $(".doc-list5-outer").trigger("prev");
            doc_list5_counter -= 1;

            if (doc_list5_counter == 1) {
                $("#horizontal-arrow-left").css("display", "none");
            }
        }
    }
}

function next_doc_list5() {
    //$(".doc_list_5_item a").find(".doc_list5_img_overlay").stop().css("opacity", "1");
    //$(".doc_list_5_item a").stop().css("opacity", "1");
    //$(".doc_list_5_item a").find(".doc_list5_img_overlay").stop().fadeTo(doc_list5_item_hoverfade_time_out, "0.2");

    if (!$('.doc-list5-outer').is(':animated')) {

        if (doc_list5_counter < $(".doc-list5 .doc-list-item").length) {

            $("#horizontal-arrow-left").css("display", "block");

            //$(".doc-list5 .doc_list_5_item_header").stop().fadeTo(500, "0");
            //$(".doc_list_5_item a").find(".doc_list5_img_overlay").stop().fadeTo(doc_list5_item_hoverfade_time_out, "0")
            //$(".doc_list_5_item a").stop().fadeTo(500, "0");

            //setTimeout('$(".doc-list5 .doc_list_5_item_header").stop().fadeTo(doc_list5_item_hoverfade_time_out, "0.6")', 1000);
            //setTimeout('$(".doc_list_5_item a").find(".doc_list5_img_overlay").stop().fadeTo(doc_list5_item_hoverfade_time_out, "0.2")', 1000);
            //setTimeout('$(".doc_list_5_item a").stop().fadeTo(doc_list5_item_hoverfade_time_out, "0.5")', 1000);

            $(".doc-list5-outer").trigger("next");
            doc_list5_counter += 1;

            if (doc_list5_counter == $(".doc-list5 .doc-list-item").length) {
                $("#horizontal-arrow-right").css("display", "none");
            }
        }
    }
}

function prev_doc_list_item() {

    if (!$('.doc-list-item').is(':animated')) {

        doc_list_item_counter -= 1;

        if (doc_list_item_counter < 0) {

            doc_list_item_counter = doc_list_item_limit - 3;

            $(".horizontal_slide_item").eq(doc_list_item_limit - 3).css("opacity", doc_list_item_middle_opacity);
            $(".horizontal_slide_item").eq(doc_list_item_limit - 2).css("opacity", doc_list_item_middle_opacity);
            $(".horizontal_slide_item").eq(doc_list_item_limit - 1).css("opacity", doc_list_item_middle_opacity);

            $(".horizontal_slide_item").eq(doc_list_item_limit - 3).addClass("horizontal_slide_item_active");
            $(".horizontal_slide_item").eq(doc_list_item_limit - 2).addClass("horizontal_slide_item_active");
            $(".horizontal_slide_item").eq(doc_list_item_limit - 1).addClass("horizontal_slide_item_active");

            $(".horizontal_slide_item").eq(0).css("opacity", doc_list_item_default_opacity);
            if (doc_list_item_counter > 1)
                $(".horizontal_slide_item").eq(1).css("opacity", doc_list_item_default_opacity);
            if (doc_list_item_counter > 2)    
                $(".horizontal_slide_item").eq(2).css("opacity", doc_list_item_default_opacity);

            $(".horizontal_slide_item").eq(0).removeClass("horizontal_slide_item_active");
            if (doc_list_item_counter > 1)
                $(".horizontal_slide_item").eq(1).removeClass("horizontal_slide_item_active");
            if (doc_list_item_counter > 2)    
                $(".horizontal_slide_item").eq(2).removeClass("horizontal_slide_item_active");
        }
        else {
            $(".horizontal_slide_item").eq(doc_list_item_counter + 3).stop().fadeTo(doc_list_item_fade_time_out, doc_list_item_default_opacity);
            //$(".horizontal_slide_item").eq(doc_list_item_counter + 3).stop();
            //$(".horizontal_slide_item").eq(doc_list_item_counter + 3).css("opacity", doc_list_item_default_opacity);
            $(".horizontal_slide_item").eq(doc_list_item_counter).stop().fadeTo(doc_list_item_fade_time_in, doc_list_item_middle_opacity);

            $(".horizontal_slide_item").eq(doc_list_item_counter + 3).removeClass("horizontal_slide_item_active");
            $(".horizontal_slide_item").eq(doc_list_item_counter).addClass("horizontal_slide_item_active");
        }

        //$(".doc-list-item").trigger("prev");
        $(".doc-list-item").trigger("goto", [doc_list_item_counter]);
    }
}

function next_doc_list_item() {

    if (!$('.doc-list-item').is(':animated')) {

        doc_list_item_counter += 1;

        if (doc_list_item_counter > doc_list_item_limit - 3) {

            doc_list_item_counter = 0;

            $(".horizontal_slide_item").eq(doc_list_item_limit - 3).css("opacity", doc_list_item_default_opacity);
            $(".horizontal_slide_item").eq(doc_list_item_limit - 2).css("opacity", doc_list_item_default_opacity);
            $(".horizontal_slide_item").eq(doc_list_item_limit - 1).css("opacity", doc_list_item_default_opacity);

            $(".horizontal_slide_item").eq(doc_list_item_limit - 3).removeClass("horizontal_slide_item_active");
            $(".horizontal_slide_item").eq(doc_list_item_limit - 2).removeClass("horizontal_slide_item_active");
            $(".horizontal_slide_item").eq(doc_list_item_limit - 1).removeClass("horizontal_slide_item_active");

            $(".horizontal_slide_item").eq(0).css("opacity", doc_list_item_middle_opacity);
            $(".horizontal_slide_item").eq(1).css("opacity", doc_list_item_middle_opacity);
            $(".horizontal_slide_item").eq(2).css("opacity", doc_list_item_middle_opacity);

            $(".horizontal_slide_item").eq(0).addClass("horizontal_slide_item_active");
            $(".horizontal_slide_item").eq(1).addClass("horizontal_slide_item_active");
            $(".horizontal_slide_item").eq(2).addClass("horizontal_slide_item_active");

        }
        else {

            $(".horizontal_slide_item").eq(doc_list_item_counter + 2).stop().fadeTo(doc_list_item_fade_time_in, doc_list_item_middle_opacity);
            $(".horizontal_slide_item").eq(doc_list_item_counter - 1).stop().fadeTo(doc_list_item_fade_time_out, doc_list_item_default_opacity);

            $(".horizontal_slide_item").eq(doc_list_item_counter + 2).addClass("horizontal_slide_item_active");
            $(".horizontal_slide_item").eq(doc_list_item_counter - 1).removeClass("horizontal_slide_item_active");
        }

        //$(".doc-list-item").trigger("next");
        $(".doc-list-item").trigger("goto", [doc_list_item_counter]);
    }
}

//document.addEventListener("fullscreenchange", function () {    fullscreenState.innerHTML = (document.fullscreen)? "" : "not ";}, false);document.addEventListener("mozfullscreenchange", function () {    fullscreenState.innerHTML = (document.mozFullScreen)? "" : "not ";}, false);document.addEventListener("webkitfullscreenchange", function () {    fullscreenState.innerHTML = (document.webkitIsFullScreen)? "" : "not ";}, false);

function hideMenu() {

/*
	if (document.documentElement.requestFullScreen) {  
	  document.documentElement.requestFullScreen();  
	} else if (document.documentElement.mozRequestFullScreen) {  
	  document.documentElement.mozRequestFullScreen();  
	} else if (document.documentElement.webkitRequestFullScreen) {  
	  document.documentElement.webkitRequestFullScreen();  
	} 
*/





    var topMenuTop = 0;

    var arrow_padding_top = 0;
    var arrow_padding_bottom = 0;

    if (topMenuTop == 0) {
        arrow_padding_top = Math.round((($("#frame").height() - top_menu_height - arrows_height) / 2) - (top_menu_height / 2));
        arrow_padding_bottom = Math.round((($("#frame").height() - top_menu_height - arrows_height) / 2) + (top_menu_height / 2));
    }
    else {
        arrow_padding_top = Math.round((($("#frame").height() - top_menu_height - arrows_height) / 2));
        arrow_padding_bottom = Math.round((($("#frame").height() - top_menu_height - arrows_height) / 2));
    }
    
    var exp = new Date();     //set new date object
	exp.setTime(exp.getTime() + (1000 * 60 * 60 * 24 * 30));     //set it 30 days ahead 						
	setCookie('top_is_hidden','true', exp);

    $("#hide_button").fadeOut(500, function() {

        $("#top").stop().animate({
            top: -87
        }, 500, function() {
            $("#show_button").fadeIn(500);
            $("#horizontal-arrow-left").stop().animate({ paddingTop: arrow_padding_top, paddingBottom: arrow_padding_bottom }, 500);
            $("#horizontal-arrow-right").stop().animate({ paddingTop: arrow_padding_top, paddingBottom: arrow_padding_bottom }, 500);



        })



    });

}

function showMenu() {


/*
	if (document.cancelFullScreen) {  
	  document.cancelFullScreen();  
	} else if (document.mozCancelFullScreen) {  
	  document.mozCancelFullScreen();  
	} else if (document.webkitCancelFullScreen) {  
	  document.webkitCancelFullScreen();  
	} else if (document.exitFullscreen) {  
	  document.exitFullscreen();  
	} 
*/



    var topMenuTop = 87;

    var arrow_padding_top = 0;
    var arrow_padding_bottom = 0;

    if (topMenuTop == 0) {
        arrow_padding_top = Math.round((($("#frame").height() - top_menu_height - arrows_height) / 2) - (top_menu_height / 2));
        arrow_padding_bottom = Math.round((($("#frame").height() - top_menu_height - arrows_height) / 2) + (top_menu_height / 2));
    }
    else {
        arrow_padding_top = Math.round((($("#frame").height() - top_menu_height - arrows_height) / 2));
        arrow_padding_bottom = Math.round((($("#frame").height() - top_menu_height - arrows_height) / 2));
    }

    var exp = new Date();     //set new date object
    exp.setTime(exp.getTime() + (1000 * 60 * 60 * 24 * 30));     //set it 30 days ahead
    setCookie('top_is_hidden', 'false', exp);

    $("#show_button").fadeOut(500, function() {

        $("#top").stop().animate({
            top: -0
        }, 500, function() {
            $("#hide_button").fadeIn(500);
            $("#horizontal-arrow-left").stop().animate({ paddingTop: arrow_padding_top, paddingBottom: arrow_padding_bottom }, 500);
            $("#horizontal-arrow-right").stop().animate({ paddingTop: arrow_padding_top, paddingBottom: arrow_padding_bottom }, 500);



        })




    });
}



function add_doc_list_5_item_hover() {
    // add hover on doc list items
    $(".doc_list_5_item").hover(function() {

		/*
        $(this).find(".doc_list5_img_overlay").stop().css("opacity", "0");

		$(this).find(".doc_list5_cross").stop().animate({
            "width": "70",
            "height": "69",
            "paddingLeft": "35",
            "paddingTop": "11"
        }, 0, function() {

        });

       
		*/

		 $(this).find("a.doc_list5_a_tag").stop().css("opacity", "1");
		 //$(this).find("a.doc_list_black").stop().css("bottom", "0");
		 $(this).find("a.doc_list_black").stop().animate({"bottom": "0"}, 100);
    }
        ,
        function() {
			/*
            $(this).find(".doc_list5_img_overlay").stop().fadeTo(doc_list5_item_hoverfade_time_out, "0.2");
            $(this).find(".doc_list5_cross").stop().animate({
                "width": "0",
                "height": "0",
                "paddingLeft": "70",
                "paddingTop": "45"
            }, doc_list5_item_hoverfade_time_out, function() {

            });

            $(this).stop().fadeTo(doc_list5_item_hoverfade_time_out, "0.5", function() {

            });
			*/

			$(this).find("a.doc_list5_a_tag").stop().fadeTo(doc_list5_item_hoverfade_time_out, "0.5");
			 $(this).find("a.doc_list_black").stop().animate({"bottom": "-39"}, 200);
        });
}


function calculateArrowPaddingTopBottom() {

    var topMenuTop = (parseInt($("#top").css("top"), 10) + top_menu_height);

    var arrow_padding_top = 0;
    var arrow_padding_bottom = 0;

    if (topMenuTop == 0) {
        arrow_padding_top = Math.round((($("#frame").height() - top_menu_height - arrows_height) / 2) - (top_menu_height / 2));
        arrow_padding_bottom = Math.round((($("#frame").height() - top_menu_height - arrows_height) / 2) + (top_menu_height / 2));
    }
    else {
        arrow_padding_top = Math.round((($("#frame").height() - top_menu_height - arrows_height) / 2));
        arrow_padding_bottom = Math.round((($("#frame").height() - top_menu_height - arrows_height) / 2));
    }

    $("#horizontal-arrow-left").css("paddingTop", arrow_padding_top);
    $("#horizontal-arrow-right").css("paddingTop", arrow_padding_top);
    $("#horizontal-arrow-left").css("paddingBottom", arrow_padding_bottom);
    $("#horizontal-arrow-right").css("paddingBottom", arrow_padding_bottom);

}

(function($) {

    // top menu
    //var top_offset = 87;
    //var top_offset = 97;
    //var top_offset = 137;
	var top_offset = 145;

    //footer
    //var bottom_offset = 20;
    //var bottom_offset = 69;
    var bottom_offset = 109;
    
    //alert(timeline_height);

    $.fn.extend({

        timeline: function() {
            return $(this).each(function() {

                // recalculate on resize
                timeline_height = $(window).height() - top_offset - bottom_offset;

                $(".slider-wrapper").css("height", ($(window).height() - top_offset - bottom_offset));
                $("#arrow-down").css("top", ($(window).height() - top_offset - bottom_offset) - 1);

                //alert(document.getElementById("slider-wrappe-ul").offsetHeight);
                //alert(timeline_height);

                // if content is bigger than timeline --> activate horizontal scroll
                if (document.getElementById("slider-wrappe-ul").offsetHeight > ($(window).height() - top_offset - bottom_offset)) {

                    var minHeight = $(window).height() - top_offset - bottom_offset;
                    var moveinterval = 0;
                    var speed = 15;
                    var arrow_opacity = 1;

                    var velocity = 0;

                    var arrows = $('.timeline-arrow').css('opacity', arrow_opacity);

                    var timeline = $(this);

                    if (!$(this).hasClass("dynamic")) {
                        $(this).addClass('dynamic');
                    }

                    clearInterval(moveinterval);
                    old_velocity = 0;

                    var ul = timeline.find('ul');

                    var wrapper = timeline.find('.slider-wrapper');

                    var docHeight = $(document).height();

                    // reset on reisize
                    ul.css('top', 0);

                    var move = function() {
                        var newpos = ul.position().top + velocity;

                        if (newpos >= 0) {
                            ul.css('top', 0);
                            return;
                        }

                        if (newpos <= (ul.height() - ($(window).height() - top_offset - bottom_offset)) * -1) {
                            ul.css('top', (ul.height() - ($(window).height() - top_offset - bottom_offset)) * -1);
                            return;
                        }

                        ul.css('top', newpos);
                    }


                    var agent = navigator.userAgent.toLowerCase();
                    var is_iphone = (agent.indexOf('iphone') != -1);

                    if (is_iphone) {

                        // iphone stuff
                    }
                    else {

                        $('.timeline-arrow').unbind('hover');

                        $('.timeline-arrow').hover(function(e) {
                        $(this).stop().animate({ 'opacity': arrow_opacity }, 100);

                            var timeline_offset = $('#timeline').offset().top;
                            var pos = ((((e.pageY - timeline_offset) * 2) - ($(window).height() - top_offset - bottom_offset)) / 2) / speed;

                            if (pos > 3) {
                                pos = pos - 3;
                            }
                            else if (pos < -3) {
                                pos = pos + 3;
                            }
                            else {
                                pos = 0;
                            }

                            velocity = pos * -1;

                            //alert(velocity);

                            moveinterval = setInterval(move, 30);



                        }, function() {

                            velocity = 0;
                            arrows.stop().animate({ 'opacity': arrow_opacity });
                            clearInterval(moveinterval);
                        });

                        $(wrapper).unbind('hover');

                        wrapper.hover(function() {
                            moveinterval = setInterval(move, 30);
                        }, function() {
                            old_velocity = velocity;
                            velocity = 0;
                            arrows.stop().animate({ 'opacity': arrow_opacity });
                            clearInterval(moveinterval);
                        });

                        $(wrapper).unbind('mousemove');

                        wrapper.mousemove(function(e) {

                            var timeline_offset = $('#timeline').offset().top;

                            var prevVelocity = velocity;
                            //var pos = (e.pageY - ($(this).offset().top / 2) - minHeight) / speed;
                            var pos = ((((e.pageY - timeline_offset) * 2) - ($(window).height() - top_offset - bottom_offset)) / 2) / speed;

                            if (pos > 3) {
                                pos = pos - 3;
                            }
                            else if (pos < -3) {
                                pos = pos + 3;
                            }
                            else {
                                pos = 0;
                            }

                            velocity = pos * -1;

                            if (prevVelocity <= 0 && velocity >= 0) {
                                arrows.eq(0).stop().animate({ 'opacity': arrow_opacity }, 100);
                                arrows.eq(1).stop().animate({ 'opacity': arrow_opacity });
                            }

                            if (prevVelocity >= 0 && velocity <= 0) {
                                arrows.eq(1).stop().animate({ 'opacity': arrow_opacity }, 150);
                                arrows.eq(0).stop().animate({ 'opacity': arrow_opacity });
                            }
                        });
                    }
                }
                else {

                    //
                    // unbind events if no scroll
                    //

                    //var arrows = $('.timeline-arrow').css('opacity', arrow_opacity);

                    var timeline = $(this)
					.removeClass('dynamic');

                    var ul = timeline.find('ul');
                    var wrapper = timeline.find('.slider-wrapper');

                    ul.css('top', 0);

                    var agent = navigator.userAgent.toLowerCase();
                    var is_iphone = (agent.indexOf('iphone') != -1);

                    if (is_iphone) {

                        // iphone stuff
                    }
                    else {

                        $('.timeline-arrow').unbind('hover');

                        $(wrapper).unbind('hover');

                        $(wrapper).unbind('mousemove');
                    }
                }
            });
        }
    });

    $(function() {
        $('#timeline').timeline();
    });


})(jQuery);






var windowOffsetTop = 0;
var windowOffsetLeft = 0;

var imgHeight = 80;
var imgWidth = 152;

this.screenshotPreview = function() {
    /* CONFIG */

    xOffset = 30;
    yOffset = -76;

    // these 2 variable determine popup's distance from the cursor
    // you might want to adjust to get the right result

    /* END CONFIG */
    $("a.screenshot").hover(function(e) {
        this.t = this.title;
        this.title = "";
        var c = (this.t != "") ? "<br/>" + this.t : "";
        //$("body").append("<p id='screenshot'><img src='/thumb.aspx?file=" + this.rel + "&height=" + imgHeight + "&width=" + imgWidth + "' alt='url preview' />" + c + "</p>");
        $("body").append("<p id='screenshot'><img style='padding-bottom:0px;background:url(/thumb.aspx?file=" + this.rel + "&width=" + imgWidth + ") no-repeat center center' src='/images/icons/blank.gif' width='152px' height='80px' alt='url preview' />" + c + "</p>");


        //alert(this.rel);

        if ((e.pageY - +imgHeight) > $("#frame").height()) {
            windowOffsetTop = imgHeight;
        }
        else {
            windowOffsetTop = -40;
        }

        if ((e.pageX + imgWidth) > $("#frame").width()) {
            windowOffsetLeft = imgWidth;
        }
        else {
            windowOffsetLeft = 0;
        }

        /*$("#screenshot")
			.css("top", (e.pageY - xOffset - windowOffsetTop) + "px")
			.css("left", (e.pageX + yOffset - windowOffsetLeft) + "px")
			.fadeIn("fast");*/
        if ((e.pageY + imgHeight) > $("#frame").height()) {
            windowOffsetTop = imgHeight;
        }
        else {
            windowOffsetTop = -40;
        }

        if ((e.pageX + imgWidth) > $("#frame").width()) {
            windowOffsetLeft = imgWidth;
        }
        else {
            windowOffsetLeft = 0;
        }

        $("#screenshot")
			.css("top", (e.pageY - xOffset - windowOffsetTop) + "px")
			.css("left", (e.pageX + yOffset - windowOffsetLeft) + "px")
			.fadeIn("fast");
			
    },
	function() {
	    this.title = this.t;
	    $("#screenshot").remove();
	});
    $("a.screenshot").mousemove(function(e) {

        if ((e.pageY + imgHeight) > $("#frame").height()) {
            windowOffsetTop = imgHeight;
        }
        else {
            windowOffsetTop = -40;
        }

        if ((e.pageX + imgWidth) > $("#frame").width()) {
            windowOffsetLeft = imgWidth;
        }
        else {
            windowOffsetLeft = 0;
        }

        $("#screenshot")
			.css("top", (e.pageY - xOffset - windowOffsetTop) + "px")
			.css("left", (e.pageX + yOffset - windowOffsetLeft) + "px");
    });
};




/* fade in loader and redirect */
function delayedRedirect(url) {
    $("#frame_loading").css("display", "none");
    //$("#frame_loading").fadeIn("500", function() { $("#frame_loading").css("display", "none"); window.location = url });
    $("#frame_loading").fadeIn("500", function() { $("#frame_loading").addClass("hasMovedToNextPage"); window.location = url; });

	if (navigator.userAgent.indexOf("Firefox")!=-1)
	{
		//setTimeout('$("#frame_loading").fadeOut("400")', 1500);
	}
	else
	{

	}
}
