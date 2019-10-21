import { addMove } from "./MoveNotes";

let elTop = 60;
let elLeft = 10;
let zIndex = 0;
let keyCount = 0;

export default function AddnOte() {
    let addBtn = document.getElementById('add-note');

    addBtn.addEventListener('click', (e) => {
        elTop += 5;
        elLeft += 5;
        zIndex++;

        let div = `
            <div class="dd-box" data-key="${keyCount}" style="top: ${elTop}px; left: ${elLeft}px; z-index: ${zIndex}">
                <div class="dd-box__title" id="title-${keyCount}">
                    This is the title
                    <div class="dd-box__remover" data-removerId="remover-${keyCount}">x</div>
                </div>
                <div id="content-${keyCount}" class="dd-box__content">
                    
                    I still here :(
                </div>
                <div class="dd-box__resizer" id="resizer-${keyCount}"></div>
            </div>
        `;
        document.body.insertAdjacentHTML('afterbegin', div);
        addMove();

        let ddBox = document.querySelector(`[data-key="${keyCount}"]`);
        let boxTitle = document.querySelector(`#title-${keyCount}`);
        let removerBtn = document.querySelector(`[data-removerId="remover-${keyCount}"]`);
        let contentBox = document.querySelector(`#content-${keyCount}`);
        let resizerBox = document.querySelector(`#resizer-${keyCount}`);

        removerBtn.addEventListener('click', (e) => {
            document.body.removeChild(ddBox);
        });

        removerBtn.addEventListener('mousedown', (e) => e.stopPropagation());
        contentBox.addEventListener('mousedown', (e) => e.stopPropagation());

        resizerBox.addEventListener('mousedown', (e) => {
            e.stopPropagation();
            let style = resizerBox.style;
            style.width = '300px';
            style.height = '180px';
            style.top = '0';
            style.left = '0';
            style.backgroundColor = 'rgba(0,0,0,0.5)';
        });

        resizerBox.addEventListener('mouseup', (e) => {
            resizerBox.style.backgroundColor = 'transparent';
            boxTitle.style.width = '500px';
        });

        keyCount++;
    });
}

