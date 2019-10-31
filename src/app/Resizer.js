export default function Resizer(
    resizerBox,
    ddBox,
    contentBox,
    boxTitle,
    contentEditor,
    textContent,
    saveBtn
) {
    this.grab = function() {
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
    };

    this.letOff = function () {
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
    };
}



