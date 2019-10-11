import "./main.scss";

var el = document.getElementsByClassName('dd-box')[0];

el.addEventListener('mousedown', (e) => {
    el.style.borderColor = 'green';
});

el.addEventListener('mouseup', (e) => {
    el.style.borderColor = 'orange';
});
