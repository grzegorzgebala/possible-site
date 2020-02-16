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
const slides = Array.from(track.children);
const nextButton = document.querySelector('.rightArrow');
const prevButton = document.querySelector('.leftArrow');

const slideSize = slides[0].getBoundingClientRect();
console.log(slideSize);


console.log(nextButton);
console.log(prevButton);
// when I click left, move slides to the left
// when I click right move slide to the right
