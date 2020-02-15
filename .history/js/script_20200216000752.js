const a = document.getElementById(number);
const big = document.getElementById("big");

a.addEventListener('click', (click) => {
    console.log(click);
    big.setAttribute('src', '/images/employees/min1.png');
})