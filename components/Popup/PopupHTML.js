export const PopupHTML = (name, template) => {
    return (
        `
        <div class="${name}-popup__container">
            <div class="${name}-popup">
                ${template}
                <svg class="${name}-popup__cross" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <g id="cross">
                        <line class="line" x1="7" x2="25" y1="7" y2="25"/>
                        <line class="line" x1="7" x2="25" y1="25" y2="7"/>
                    </g>
                </svg>
            </div>
        </div>
        `
    );
};