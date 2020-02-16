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
// console.log(imagesItem);
// const dotsNav = document.querySelector('.carousel__nav');
// const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left  + ')';
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
    const big = document.querySelector('.big');
    // const currentImage = ;
    console.log('big: ',big);
    console.log('imagesItem: ',imagesItem)
    const targetIndex = imagesItem.findIndex(image => image === targetImage);
    console.log('targetIndex: ',targetIndex);
    const targetSlide = slides[targetIndex];
    console.log('targetSlide: ',targetSlide)
    // console.log(targetSlide);
    const targetSlideActive = targetSlide.children[0];

    console.log(targetSlideActive);

    imagesItem.forEach((element, index) => {
        if (index === targetIndex) {
            element.classList.add('activeImg');
            element.classList.remove('pictureContainer');
            big.setAttribute('src', `/images/employees/picture${index+1}.png`);
        } else {
            element.classList.remove('activeImg');
            element.classList.add('pictureContainer');
        }
        // if (element.className === 'pictureContainer') {
        //     targetSlideActive.classList.add('activeImg');
        //     targetSlideActive.classList.remove('pictureContainer');
        // } else {
        //     targetSlideActive.classList.remove('activeImg');
        //     targetSlideActive.classList.add('pictureContainer');
        // }
        console.log('element: ',element);
        console.log('index: ',index);
    });
    // // const notActiveImages = 
    // if(targetSlideActive.className === 'pictureContainer') {
    //     targetSlideActive.classList.add('activeImg');
    //     targetSlideActive.classList.remove('pictureContainer');
    // } else {
    //     targetSlideActive.classList.remove('activeImg');
    //     targetSlideActive.classList.add('pictureContainer');
    // }
    
    // moveToSlide(track, currentSlide, targetSlide);

})

// when I click left, move slides to the left
// when I click right move slide to the right
