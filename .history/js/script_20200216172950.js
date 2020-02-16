// const click1 = document.getElementById("1");
// const click2 = document.getElementById("2");
// const click3 = document.getElementById("3");
// const big = document.getElementById("big");

// click1.addEventListener('click', (click) => {
//     console.log(click);
//     big.setAttribute('src', '/images/employees/picture2.png');
// })

// function myFunc() {
//     console.log('Jestem w myFunc');
//     document.getElementById("big").setAttribute('src', '/images/employees/picture2.png');
// }
    
const track = document.querySelector('.carouselTrack');
// console.log(track);
const slides = Array.from(track.children);
const nextButton = document.querySelector('.rightArrow');
const prevButton = document.querySelector('.leftArrow');

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

// slides[0].style.left = slideWidth * 0 + 'px';

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.currentSlide');
    // console.log(currentSlide);
    const nextSlide = currentSlide.nextElementSibling;
    console.log(nextSlide);
    const amountToMove = nextSlide.style.left;

    track.style.transform = 'translateX(' + amountToMove + ')';

})

// when I click left, move slides to the left
// when I click right move slide to the right
