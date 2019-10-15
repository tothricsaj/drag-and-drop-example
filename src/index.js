import "./main.scss";

var el = document.getElementsByClassName('dd-box');

el.addEventListener('mousedown', (event) => {

    let shiftX = event.clientX - el.getBoundingClientRect().left;
    let shiftY = event.clientY - el.getBoundingClientRect().top;

    el.style.zIndex = 10000;
    el.style.backgroundColor = 'orange';
    el.style.color = 'black';

    el.innerHTML = 'I am been dragging :)';

    document.body.append(el);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        el.style.left = pageX - shiftX + 'px';
        el.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    el.onmouseup = function () {
        el.style.backgroundColor = 'black';
        el.style.color = 'orange';
        el.innerHTML = 'I sill here :(';

        document.removeEventListener('mousemove', onMouseMove);
        el.onmouseup = null;
    }
});
