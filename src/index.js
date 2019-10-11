import "./main.scss";

var el = document.getElementsByClassName('dd-box')[0];

document.addEventListener('mousemove', (e) => {
    // console.log(`This is the coordinates: x -> ${e.screenX}, y -> ${e.screenY}`);

    let xCoor = e.screenX;
    let yCoor = e.screenY;

    el.addEventListener('mousedown', (e) => {
        el.style.borderColor = 'green';

        // console.log(`x->${xCoor}, y->${yCoor}`);

        el.style.top = yCoor;
        el.style.left = xCoor;
    });

    el.addEventListener('mouseup', (e) => {
        el.style.borderColor = 'orange';

        el.style.top = '0';
        el.style.left = '0';
    });
});
