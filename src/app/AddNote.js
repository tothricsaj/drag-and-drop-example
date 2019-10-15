let elTop = 60;
let elLeft = 10;
let zIndex = 0;

export default function AddnOte() {
    var addBtn = document.getElementById('add-note');
    addBtn.addEventListener('click', (e) => {
        elTop += 5;
        elLeft += 5;
        zIndex++;

        let div = `
            <div class="dd-box" style="top: ${elTop}px; left: ${elLeft}px; z-index: ${zIndex}">I still here :(</div>
        `;
        document.body.insertAdjacentHTML('afterbegin', div);
    });
}

