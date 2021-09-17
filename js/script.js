const cookie = document.querySelector('.cookie');
const counter = document.querySelector('.count');

cookie.addEventListener('click', move);

let num = 0;

function move(){
    counter.innerText = num;
    num++

    let size = Math.random() * 200 + 100;
    let posX = Math.random() * (document.documentElement.clientWidth - 220);
    let posY = Math.random() * (document.documentElement.clientHeight - 420);

    cookie.style.width = size + 'px';
    cookie.style.height = size + 'px';

    cookie.style.left = posX + 'px';
    cookie.style.top = posY + 'px';
}