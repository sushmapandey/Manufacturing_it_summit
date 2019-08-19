$('.owl-carousel').owlCarousel({
	loop:true,
	margin:10,
	// autoHeight:true,
	nav:true,
	autoplay: false,
	dots: false,
	navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
			items:2
		},
		800:{
			items:3
		}
    }

})
