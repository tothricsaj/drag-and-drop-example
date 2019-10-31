import { addMove } from "./MoveNotes";
import Edit from '../assets/edit_icon.svg';
import TemplateMaker from './TemplateMaker';

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

        let div = TemplateMaker(keyCount, elTop, elLeft, zIndex, Edit);
        document.body.insertAdjacentHTML('afterbegin', div);
        addMove();

        let ddBox = document.querySelector(`[data-key="${keyCount}"]`);
        let boxTitle = document.querySelector(`#title-${keyCount}`);
        let editBtn = document.querySelector(`#edit-${keyCount}`);
        let removerBtn = document.querySelector(`[data-removerId="remover-${keyCount}"]`);
        let contentBox = document.querySelector(`#content-${keyCount}`);
        let resizerBox = document.querySelector(`#resizer-${keyCount}`);
        let contentEditor = document.querySelector(`#content-editor-${keyCount}`);
        let saveBtn = document.querySelector(`#save-btn-${keyCount}`);
        let textContent = document.querySelector(`#text-content-${keyCount}`);
        let titleEditor = document.querySelector(`#title-editor-${keyCount}`);
        let titleContent = document.querySelector(`#title-content-${keyCount}`);

        editBtn.addEventListener('click', (e) => {
            contentEditor.style.display = 'block';
            saveBtn.style.display = 'block';
            contentEditor.style.zIndex = '2';
            saveBtn.style.zIndex = '2';
            titleEditor.style.zIndex = '2';
            titleEditor.style.opacity = '1';
        });

        saveBtn.addEventListener('click', (e) => {
            contentEditor.style.display = 'none';
            saveBtn.style.display = 'none';
            titleEditor.style.zIndex = '-1';
            titleEditor.style.opacity = '0';

            textContent.textContent = contentEditor.value;
            titleContent.textContent = titleEditor.value;
        });

        removerBtn.addEventListener('click', (e) => {
            document.body.removeChild(ddBox);
        });

        editBtn.addEventListener('mousedown', (e) => e.stopPropagation());
        removerBtn.addEventListener('mousedown', (e) => e.stopPropagation());
        contentBox.addEventListener('mousedown', (e) => e.stopPropagation());

        ddBox.addEventListener('mousedown', (e) => {
            contentBox.style.boxShadow = '13px 10px 5px #444';
        });

        ddBox.addEventListener('mouseup', (e) => {
            contentBox.style.boxShadow = 'unset';
        });

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
            textContent.style.width = style.width;

            contentEditor.style.width = contBoxStyle.width;

            contBoxStyle.height = style.height;
            textContent.style.height = style.height;

            contentEditor.style.height = contBoxStyle.height;
            saveBtn.style.height = contBoxStyle.height;

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

