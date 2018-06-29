$(function() {

	// Подключение карусели
	$(".reviews__carousel").owlCarousel({
		loop:true,
    margin:30,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
	});

	// Кастомные кнопки перелистывания слайдов
	var owl = $('.owl-carousel');
	owl.owlCarousel();
	// Go to the next item
	$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
	})
	// Go to the previous item
	$('.customPrevBtn').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
	})

	//Треугольник на слайде
	$('.reviews__img').hover(function(){
		$(this).children('.reviews__details').toggleClass('dBlock');
	});

});

