import { addMove } from "./MoveNotes";
import Edit from '../assets/edit_icon.svg';
import TemplateMaker from './TemplateMaker';
import Resizer from './Resizer';

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

        // TODO resizer here
        let resizer = new Resizer(resizerBox, ddBox, contentBox, boxTitle, contentEditor, textContent, saveBtn);

        resizer.grab();
        resizer.letOff();

        keyCount++;
    });
}

