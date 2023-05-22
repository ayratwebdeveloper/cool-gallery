const sliderMain = new Swiper('.slider_main', {
	freeMode: true,
	centeredSlides: true,
	parallax: true,
	// mouse scrolling
	mousewheel: true,
	// screen size adaptation
	breakpoints: {
		0 :{
			slidesPerView: 2.5,
			spaceBetween: 20
		},

		680: {
			slidesPerView: 3.5,
			spaceBetween: 60
		}
	}
})

const sliderBig = new Swiper('.slider_big', {
	centeredSlides: true,
	parallax: true,
	spaceBetween: 60,
	slidesPerView: 3.5,
})

sliderMain.controller.control = sliderBig