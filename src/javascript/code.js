// Первый слайдер
const sliderMain = new Swiper('.slider_main', {
	freeMode: true,
	centeredSlides: true,
	parallax: true,
	// Скролл мышью
	mousewheel: true,
	// Адаптация под размер экрана
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

// Второй слайдер
const sliderBig = new Swiper('.slider_big', {
	centeredSlides: true,
	parallax: true,
	spaceBetween: 60,
	slidesPerView: 3.5,
})

// Привязка слайдеров
sliderMain.controller.control = sliderBig

// Прохожу по всем item'ом и выбираю что с ним сделать
document.querySelectorAll('.slider__item').forEach(item => {
	item.addEventListener('click', (event) =>{
		 item.classList.toggle('extendedSlide')
		})
})

// Триггер на столкновение контейнеров
let synopsis = document.querySelector('.synopsis')
sliderMain.on('slideChange', event =>{
	sliderMain.activeIndex > 0 ? synopsis.classList.add('pinch'):
	synopsis.classList.remove('pinch')
})