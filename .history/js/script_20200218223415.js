const track = document.querySelector(".carouselTrack");
const slides = Array.from(track.children);
const prevButton = document.querySelector('.rightArrow');
const nextButton = document.querySelector('.leftArrow');
const imagesNav = document.getElementsByClassName('pictureContainer');
const imagesItem = Array.from(imagesNav);

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
    console.log(targetSlide);
    if (targetSlide != null) {
        track.style.transform = `translateX(-${targetSlide.style.left})`;
        currentSlide.classList.remove('currentSlide');
        targetSlide.classList.add('currentSlide');
    }
}

const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
    console.log('slides, prevButton, nextButton, targetIndex', slides, prevButton, nextButton, targetIndex)
    if (targetIndex === 0) {
        prevButton.classList.add("isHidden");
        nextButton.classList.remove("isHidden");
    } else if (targetIndex === slides.length - 1) {
        prevButton.classList.remove("isHidden");
        nextButton.classList.add("isHidden");
    } else {
        prevButton.classList.remove("isHidden");
        nextButton.classList.remove("isHidden");
    }
}

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector(".currentSlide");
    const prevSlide = currentSlide.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveToSlide(track, currentSlide, prevSlide);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector(".currentSlide");
    const nextSlide = currentSlide.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveToSlide(track, currentSlide, nextSlide);
    hideShowArrows(slides, prevButton, nextButton, nextIndex);
});

track.addEventListener('click', e => {
    const targetImage = e.target.closest('div')
    if (!targetImage) return;
    // const currentSlide = track.querySelector('.currentSlide');
    const big = document.querySelector('.big');
    const targetIndex = imagesItem.findIndex(image => image === targetImage);
    const targetSlide = slides[targetIndex];
    // const targetSlideActive = targetSlide.children[0];

    imagesItem.forEach((element, index) => {
        if (index === targetIndex) {
            element.classList.add('activeImg');
            element.classList.remove('pictureContainer');
            big.setAttribute('src', `/images/employees/picture${index+1}.png`);
        } else {
            element.classList.remove('activeImg');
            element.classList.add('pictureContainer');
        }
    });
    // hideShowArrows(slides, prevButton, nextButton, targetIndex);

})

// when I click left, move slides to the left
// when I click right move slide to the right
