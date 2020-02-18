const track = document.querySelector(".carouselTrack");
const slides = Array.from(track.children);
const nextButton = document.querySelector('.rightArrow');
const prevButton = document.querySelector('.leftArrow');
const imagesNav = document.getElementsByClassName('pictureContainer');
const imagesItem = Array.from(imagesNav);

// Preparing start conditions
let slideWidth = slides[0].getBoundingClientRect().width;
if (slideWidth === 0) {
    slideWidth = 60;
}

const setSlidePosition = (slide, index) => {
    let additionalMargin;
    index === 0 ? additionalMargin = 0 : additionalMargin = 4;
    slide.style.left = slideWidth * index + additionalMargin + 'px';
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    if (targetSlide != null) {
        track.style.transform = `translateX(-${targetSlide.style.left})`;
        currentSlide.classList.remove('currentSlide');
        targetSlide.classList.add('currentSlide');
    }
}

// Hide and show arrows events
const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    if (targetIndex === 0) {
        prevButton.classList.add("isHidden");
        nextButton.classList.remove("isHidden");
    } else if (targetIndex === slides.length - 5) {
        prevButton.classList.remove("isHidden");
        nextButton.classList.add("isHidden");
    } else {
        prevButton.classList.remove("isHidden");
        nextButton.classList.remove("isHidden");
    }
}

// Click on preview button event
prevButton.addEventListener('click', () => {
    const currentSlide = track.querySelector(".currentSlide");
    const prevSlide = currentSlide.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

// Click on next button event
nextButton.addEventListener('click', () => {
    const currentSlide = track.querySelector(".currentSlide");
    const nextSlide = currentSlide.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
});

// Click on small picture event
track.addEventListener('click', (e) => {
    const targetImage = e.target.closest('div')
    if (!targetImage) return;
    const big = document.querySelector('.big');
    const targetIndex = imagesItem.findIndex(image => image === targetImage);

    imagesItem.forEach((element, index) => {
        if (index === targetIndex) {
            element.classList.add('activeImg');
            element.classList.remove('pictureContainer');
            big.setAttribute('src', `./images/employees/picture${index+1}.png`);
        } else {
            element.classList.remove('activeImg');
            element.classList.add('pictureContainer');
        }
    });
})
