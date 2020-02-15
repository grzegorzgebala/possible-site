const a = document.getElementById("1");
const big = document.getElementById("big");

a.addEventListener('click', (click) => {
    console.log(click);
    big.setAttribute('src', '/images/employees/min1.png');
})