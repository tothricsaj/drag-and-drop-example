export default function TemplateMaker(
    keyCount,
    elTop,
    elLeft,
    zIndex,
    Edit
) {
    let template = `
            <div class="dd-box" data-key="${keyCount}" style="top: ${elTop}px; left: ${elLeft}px; z-index: ${zIndex}">
                <div class="dd-box__title" id="title-${keyCount}">
                    <div class="dd-box__title-content" id="title-content-${keyCount}">No title</div>
                    <textarea class="dd-box__title-editor"  id="title-editor-${keyCount}" style="z-index: -1; opacity: 0;">No title</textarea>
                    <img class="dd-box__edit-btn" id="edit-${keyCount}" src="${Edit}" alt="fuck">
                    <div class="dd-box__remover" data-removerId="remover-${keyCount}">x</div>
                </div>
                <div id="content-${keyCount}" class="dd-box__content">
                    <div class="dd-box__text-content" id="text-content-${keyCount}"></div>
                    <div class="dd-box__resizer" id="resizer-${keyCount}"></div>
                    <textarea class="dd-box__content-editor" id="content-editor-${keyCount}" style="display: none;"></textarea>
                    <div class="dd-box__save-btn" id="save-btn-${keyCount}" style="display: none;">Save</div>
                </div>
            </div>
        `;
    return template;
}
