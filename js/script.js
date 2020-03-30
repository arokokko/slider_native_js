window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let slides = document.querySelectorAll('.slider-item'),
        prev = document.querySelector('.prev'),
        next = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        dots = document.querySelectorAll('.dot'),
        slideIndex = 1;

    showSlides(slideIndex);

    function showSlides(n) {
        if (n > slides.length) {    //проверка если закончились слайды то переключаемся на 1й
            slideIndex = 1;
        }
        if (n < 1) {                     // проверка в обратную сторону, переключаемся на последний
            slideIndex = slides.length;
        }
        
        slides.forEach((item) => item.style.display = 'none');    //скрываем все картинки
        dots.forEach((item) => item.classList.remove('dot-active'));    //убираем класс активности с точек

        slides[slideIndex - 1].style.display = "block";         //показываем 1ю картинку
        dots[slideIndex - 1].classList.add('dot-active');       //задаем класс активности соответсвующей первой картинке точке
    }

    function plusSlide(n) {
        showSlides(slideIndex += n);
    }

    prev.addEventListener('click', function() {        //листаем слайды назад по клику на prev
        plusSlide(-1);
    });
    
    next.addEventListener('click', function() {       //листаем слайды вперед по клику на next
        plusSlide(1);
    });

    function currentSlide (n) {
        showSlides(slideIndex = n);
    }

    dotsWrap.addEventListener('click', function(event) {      //переключаем слайды по клику по точкам
        for (let i = 0; i < dots.length; i++) {
            if (event.target.classList.contains('dot') && event.target == dots[i]) {
                currentSlide(i + 1);
            }
        }
    });
});