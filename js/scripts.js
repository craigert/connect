$(document).ready(function() {
	
	// North America
    $(".mapNorthAmerica div").each(function() {
        connectLocation = $(this).data("area");
		
		// West Region
        if (connectLocation == 'San Diego') {
            $(this).css({
                'top': '296px',
                'left': '74px'
            })
		} else if (connectLocation == 'San Jose') {
            $(this).css({
                'top': '212px',
                'left': '30px'
            })
        } else if (connectLocation == 'Los Angeles') {
            $(this).css({
                'top': '268px',
                'left': '52px'
            })
        } else if (connectLocation == 'Salt Lake City') {
            $(this).css({
                'top': '203px',
                'left': '151px'
            })
		} else if (connectLocation == 'Portland') {
            $(this).css({
                'top': '123px',
                'left': '48px'
            })
		} else if (connectLocation == 'Seattle') {
            $(this).css({
                'top': '78px',
                'left': '70px'
            })
		} else if (connectLocation == 'Albuquerque') {
            $(this).css({
                'top': '281px',
                'left': '215px'
            })
        } else if (connectLocation == 'Denver') {
            $(this).css({
                'top': '223px',
                'left': '220px'
            })
		} else if (connectLocation == 'Phoenix') {
            $(this).css({
                'top': '294px',
                'left': '143px'
            })
			
		// Central Region	
		} else if (connectLocation == 'Minneapolis') {
            $(this).css({
                'top': '124px',
                'left': '341px'
            })
		} else if (connectLocation == 'Omaha') {
            $(this).css({
                'top': '185px',
                'left': '328px'
            })
		} else if (connectLocation == 'St Louis') {
            $(this).css({
                'top': '215px',
                'left': '397px'
            })
		} else if (connectLocation == 'Chicago') {
            $(this).css({
                'top': '164px',
                'left': '419px'
            })
		} else if (connectLocation == 'Madison') {
            $(this).css({
                'top': '134px',
                'left': '394px'
            })
		} else if (connectLocation == 'Dallas') {
            $(this).css({
                'top': '321px',
                'left': '304px'
            })
		} else if (connectLocation == 'Austin') {
            $(this).css({
                'top': '341px',
                'left': '270px'
            })
		} else if (connectLocation == 'Houston') {
            $(this).css({
                'top': '352px',
                'left': '338px'
            })
			
		// East Region
		} else if (connectLocation == 'Boston') {
            $(this).css({
                'top': '103px',
                'left': '594px'
            })
		} else if (connectLocation == 'New York City') {
            $(this).css({
                'top': '130px',
                'left': '575px'
            })
		} else if (connectLocation == 'Philadelphia') {
            $(this).css({
                'top': '152px',
                'left': '554px'
            })
		} else if (connectLocation == 'Atlanta') {
            $(this).css({
                'top': '284px',
                'left': '499px'
            })
		} else if (connectLocation == 'Nashville') {
            $(this).css({
                'top': '248px',
                'left': '462px'
            })
		} else if (connectLocation == 'Princeton') {
            $(this).css({
                'top': '139px',
                'left': '566px'
            })
		} else if (connectLocation == 'Spartanburg') {
            $(this).css({
                'top': '252px',
                'left': '520px'
            })
		} else if (connectLocation == 'Raleigh') {
            $(this).css({
                'top': '234px',
                'left': '549px'
            })
		} else if (connectLocation == 'Washington DC') {
            $(this).css({
                'top': '171px',
                'left': '553px'
            })
		} else if (connectLocation == 'Detroit') {
            $(this).css({
                'top': '153px',
                'left': '465px'
            })
		} else if (connectLocation == 'Columbus') {
            $(this).css({
                'top': '181px',
                'left': '471px'
            })
		} else if (connectLocation == 'Orlando') {
            $(this).css({
                'top': '356px',
                'left': '558px'
            })
		} else if (connectLocation == 'Ft Lauderdale') {
			$(this).css({
                'top': '383px',
                'left': '578px'
            })
		}
		
    });
	
	// Central America
    $(".mapCentralAmerica div").each(function() {
        connectLocation = $(this).data("area");
		
        if (connectLocation == 'Mexico City') {
            $(this).css({
                'top': '205px',
                'left': '269px'
            })
        }
		
    });
	
	// South America
    $(".mapSouthAmerica div").each(function() {
        connectLocation = $(this).data("area");
		
		if (connectLocation == 'Santiago') {
            $(this).css({
                'top': '311px',
                'left': '264px'
            })
        } else if (connectLocation == 'Buenos Aires') {
			$(this).css({
                'top': '350px',
                'left': '351px'
            })
		}
		
    });
	
	// Match left column height with right column map height
	var mapHeight = $('.mapContent').outerHeight();
	$('.intro').height(mapHeight);

    // Handle mouse-over of different locations
    $(".location-nav a").hover(
        function() {
            var area = $(this).data("area");

            $(".map-point[data-area='" + area + "'] a").show();
        },
        function() {
            var area = $(this).data("area");

            $(".map-point[data-area='" + area + "'] a").hide();
        });

    $('.map-point a').attr('target', '_blank');
    $('.location-nav a').attr('target', '_blank');
	
	// Add coming soon data attribute to those cities with no event landing page setup yet, and disable a href link attribute for popup box
	$('.mapNorthAmerica div.map-point a, .mapCentralAmerica div.map-point a, .mapSouthAmerica div.map-point a').each(function(index) {
		var href = $(this).attr('href');
		if (href == "") {
			$(this).attr('data-schedule', 'comingsoon');
		}
		else {
			$(this).attr('data-schedule', '');
		}
		
		if ($(this).attr('data-schedule')) {
			$(this).removeAttr("href");
			$('<br /><div style="color: #A1CE62; font-size: 11px; margin-bottom: 10px; margin-top: -4px; font-weight: bold;">(Coming Soon)</div>').appendTo(this);
			$(this).css({'padding-bottom' : '6px','padding-top' : '2px', 'margin-top' : '-4px'});
		}
	});
	
	// Add coming soon data attribute to those cities with no href link and remove href from cities ul list
	$('ul li a').each(function(index) {
		var href = $(this).attr('href');
		
		if (href == "") {
			$(this).attr('data-schedule', 'comingsoon');
		}
		else {
			$(this).attr('data-schedule', '');
		}
		
		if ($(this).attr('data-schedule')) {
			$(this).removeAttr("href");
		}
	});
	
	// Add dates to popup boxes based on data-date attribute
	$('.mapNorthAmerica div.map-point a, .mapCentralAmerica div.map-point a, .mapSouthAmerica div.map-point a').each(function(index) {
		var date = $(this).parent().attr('data-date');

		if (date) {
			$('<br /><div style="color: #A1CE62; font-size: 11px; margin-bottom: 10px; margin-top: -4px; font-weight: bold;">' + date + '</div>').appendTo(this);
			$(this).css({'padding-bottom' : '6px','padding-top' : '2px', 'margin-top' : '-4px'});
		}
	});

	// Click handler for map country button top navigation
	$(".mapNavigation .navItem").click(function() {
		$(".mapNavigation .navItem").each(function() {
			$(this).removeClass("selected");
		});
		
		$(this).addClass("selected");
		
		if ($(this).hasClass("northAmerica")) {
			$(".mapNorthAmerica").fadeIn( "fast", function() {
			});
			$(".mapCentralAmerica").hide();
			$(".mapSouthAmerica").hide();
		}
		else if ($(this).hasClass("centralAmerica")) {
			$(".mapNorthAmerica").hide();
			$(".mapCentralAmerica").fadeIn( "fast", function() {
			});
			$(".mapSouthAmerica").hide();
		}
		else if ($(this).hasClass("southAmerica")) {
			$(".mapNorthAmerica").hide();
			$(".mapCentralAmerica").hide();
			$(".mapSouthAmerica").fadeIn( "fast", function() {
			});
		}
		
		// Center title box over each map point
		$("#content .map-point a").each(function() {
			var titleWidth = $(this).width();
			titleWidth = titleWidth / 2;
			$(this).css('left','-' + titleWidth + 'px');
		});
		
		// Match left column height with right column map height
		var mapHeight = $('.mapContent').outerHeight();
		$('.intro').height(mapHeight);
	});
	
	// Center title box over each map point
	$("#content .map-point a").each(function() {
		var titleWidth = $(this).width();
		titleWidth = titleWidth / 2;
		$(this).css('left','-' + titleWidth + 'px');
	});
	
});


$(window).load(function() {
	
	// Match heights of bottom content boxes
    var copyHeight = $('.description').height();
    var locationsHeight = $('.location-nav').height();
	var paddingDiff = 7;

    if (copyHeight > locationsHeight) {
        heightDiff = copyHeight - locationsHeight;
        $('.location-nav').css('height', $('.location-nav').height() + heightDiff + paddingDiff);
    } else {
        heightDiff = locationsHeight - copyHeight;
        $('.description').css('height', $('.description').height() + heightDiff - paddingDiff);
    }
	
});
