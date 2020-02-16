const click1 = document.getElementById("1");
const click2 = document.getElementById("2");
const click3 = document.getElementById("3");
const big = document.getElementById("big");

a.addEventListener('click', (click) => {
    console.log(click);
    big.setAttribute('src', '/images/employees/picture2.png');
})