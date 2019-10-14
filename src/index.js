import "./main.scss";

var el = document.getElementsByClassName('dd-box')[0];

el.addEventListener('mousedown', (event) => {
    el.style.zIndex = 10000;

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        el.style.left = pageX - el.offsetWidth / 2 + 'px';
        el.style.top = pageY - el.offsetHeight / 2 + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);

    el.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        el.onmouseup = null;
    }
});
