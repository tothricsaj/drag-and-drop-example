export default function Editor(
    editBtn,
    contentEditor,
    saveBtn,
    titleEditor,
    textContent,
    titleContent
) {

    this.showEditor = function () {
        editBtn.addEventListener('click', (e) => {
            contentEditor.style.display = 'block';
            saveBtn.style.display = 'block';
            contentEditor.style.zIndex = '2';
            saveBtn.style.zIndex = '2';
            titleEditor.style.zIndex = '2';
            titleEditor.style.opacity = '1';
        });
    };

    this.saveEditor = function() {
        saveBtn.addEventListener('click', (e) => {
            contentEditor.style.display = 'none';
            saveBtn.style.display = 'none';
            titleEditor.style.zIndex = '-1';
            titleEditor.style.opacity = '0';

            textContent.textContent = contentEditor.value;
            titleContent.textContent = titleEditor.value;
        });
    }
}

