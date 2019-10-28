import { addMove } from "./MoveNotes";
import Edit from '../assets/edit_icon.svg';

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
                    Add title
                    <img class="dd-box__edit-btn" id="edit-${keyCount}" src="${Edit}" alt="fuck">
                    <div class="dd-box__remover" data-removerId="remover-${keyCount}">x</div>
                </div>
                <div id="content-${keyCount}" class="dd-box__content">
                    <div class="dd-box__resizer" id="resizer-${keyCount}"></div>
                </div>
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

            style.width = ddBox.clientWidth + 'px';
            style.height = contentBox.clientHeight + ddBox.clientHeight + 'px';

            style.top = (-1 * ddBox.clientHeight) + 'px';
            style.left = '0';
            style.right = 'unset';
            style.bottom = 'unset';
            style.backgroundColor = 'rgba(0,0,0,0.5)';
        });

        resizerBox.addEventListener('mouseup', (e) => {
            let titleStyle = boxTitle.style;
            let contBoxStyle = contentBox.style;
            let style = resizerBox.style;

            style.width = ddBox.width + 'px';
            style.height = contBoxStyle.height + ddBox.height + 30 + 'px';

            titleStyle.width = style.width -10;
            contBoxStyle.width = style.width;
            ddBox.style.width = style.width;
            contBoxStyle.height = style.height;

            style.backgroundColor = 'transparent';
            style.top = 'unset';
            style.left = 'unset';
            style.right = '0';
            style.height = contentBox.clientHeight + 'px';
            style.bottom = '0';
            style.width = '15px';
            style.height = '15px';
        });

        keyCount++;
    });
}

