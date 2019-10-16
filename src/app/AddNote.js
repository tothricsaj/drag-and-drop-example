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
                <div class="dd-box__title">
                    This is the title
                    <div class="dd-box__remover" data-removerId="remover-${keyCount}">x</div>
                </div>
                I still here :(
            </div>
        `;
        document.body.insertAdjacentHTML('afterbegin', div);
        addMove();

        let ddBox = document.querySelector(`[data-key="${keyCount}"]`);
        let removerBtn = document.querySelector(`[data-removerId="remover-${keyCount}"]`);

        removerBtn.addEventListener('click', (e) => {
            document.body.removeChild(ddBox);
        });

        console.log(ddBox);

        keyCount++;
    });
}

