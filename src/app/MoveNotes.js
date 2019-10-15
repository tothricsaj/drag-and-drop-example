export function addMove() {
    let el = document.getElementsByClassName('dd-box')[0];

    console.log(el);

    el.addEventListener('mousedown', (event) => {

        let shiftX = event.clientX - el.getBoundingClientRect().left;
        let shiftY = event.clientY - el.getBoundingClientRect().top;

        el.style.zIndex = 10000;

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
            document.removeEventListener('mousemove', onMouseMove);
            el.onmouseup = null;
        }
    });
}

