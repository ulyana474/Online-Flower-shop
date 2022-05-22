let i = 0;
let image = document.querySelector('.slider-item1');
let imgs = new Array('pic4.png', 'pic5.png', 'pic0.png');
function change(){
    image.src = imgs[i];
    i++;
    i = i % 3;
};