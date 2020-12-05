$(function() {


	var header = $("#header"),
	introH = $("#intro").innerHeight(),
	scrollOffset = $(window).scrollTop();

	/* Smooth scroll */
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('scroll'),
			blockOffset = $(blockId).offset().top;

			$("#nav a").removeClass("active");
			$this.addClass("active");

		$("html, body").animate({
			scrollTop: blockOffset
		}, 900);
	});


	/* Burger */

	$("#nav_toggle").on("click", function(event) {
		event.preventDefault();

		$(this).toggleClass("active");
		$("#nav").toggleClass("active");
	});

	$("#nav").on("click", function(event) {
		event.preventDefault();

		$(this).toggleClass("active");
		$("#nav_toggle").removeClass("active");
		
	});


});