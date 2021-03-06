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
    
const track = document.querySelector(".carouselTrack");
const slides = Array.from(track.children);
const nextButton = document.querySelector('.rightArrow');
const prevButton = document.querySelector('.leftArrow');
const imagesNav = document.getElementsByClassName('pictureContainer');
const imagesItem = Array.from(imagesNav);
console.log(imagesItem);
// const dotsNav = document.querySelector('.carousel__nav');
// const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left ? targetSlide.style.left : false  + ')';
    currentSlide.classList.remove('currentSlide');
    targetSlide.classList.add('currentSlide');
}
// slides[0].style.left = slideWidth * 0 + 'px';
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector(".currentSlide");
    const prevSlide = currentSlide.previousElementSibling;

    moveToSlide(track, currentSlide, prevSlide);
});

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector(".currentSlide");
    const nextSlide = currentSlide.nextElementSibling;
    moveToSlide(track, currentSlide, nextSlide);
});

track.addEventListener('click', e => {
    const targetImage = e.target.closest('div')

    if (!targetImage) return;
    const currentSlide = track.querySelector('.currentSlide');
    // const currentImage = ;
    const targetIndex = imagesItem.findIndex(image => image === targetImage);
    const targetSlide = slides[targetIndex];
    console.log(targetIndex);
    moveToSlide(track, currentSlide, targetSlide);
})

// when I click left, move slides to the left
// when I click right move slide to the right
