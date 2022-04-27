$(document).ready(function () {
	// navbar background gets dark on mobile if its opened + add horizontal line on mobile when navbar is open
	let isNavbarCollapsed = true
	$("#nav-toggler").click(function (e) {
		e.preventDefault()
		let navbar = $(".navbar")
		if (isNavbarCollapsed) {
			navbar.addClass("navbar-horizontal-line")
			navbar.addClass("navbar-dark-bg")
		}
		// $(".navbar").css({"padding-bottom": "20px", "border-bottom": "3px solid white"});
		else {
			navbar.removeClass("navbar-horizontal-line")
			navbar.removeClass("navbar-dark-bg")
		}

		isNavbarCollapsed = !isNavbarCollapsed
	})

	// navbar gets dark when scrolled down
	function checkScroll() {
		var startY = $(".navbar").height() * 2 //The point where the navbar changes in px

		if ($(window).scrollTop() > startY) {
			$(".navbar").addClass("scrolled")
		} else {
			$(".navbar").removeClass("scrolled")
		}
	}
	if ($(".navbar").length > 0) {
		$(window).on("scroll load resize", function () {
			checkScroll()
		})
	}

	// splide setup
	let splide = new Splide(".splide", {
		perPage: 5,
		perMove: 1,
		focus: "center", // 0 = left and 'center' = center
		type: "loop", // 'loop' or 'slide'

		autoplay: true,
		interval: 4000,
		pauseOnHover: false,

		gap: "2em", // space between slides
		arrows: false, // 'slider' or false
		pagination: "slider", // 'slider' or false
		speed: 200, // transition speed in miliseconds
		dragAngleThreshold: 30, // default is 30
		autoWidth: false, // for cards with differing widths
		rewind: true, // go back to beginning when reach end
		rewindSpeed: 400,
		waitForTransition: false,
		updateOnMove: true,
		trimSpace: false, // true removes empty space from end of list
		breakpoints: {
			991: {
				// Tablet
			},
			767: {
				// Mobile Landscape
				perPage: 4,
				gap: "0.5em",
			},
			479: {
				// Mobile Portrait
				perPage: 3,
				gap: "0.25em",
			},
		},
	})
	splide.mount()
})
