export const BtnQuadroHTML = (name, btnText, reverse, disabled) => {
    return (`
        <button 
            class="${name}-btn-quadro ${name}-btn-quadro__${reverse ? 'reverse' : 'standard'}"
            ${disabled ? 'disabled' : ''}>
            ${btnText}
        </button>
    `);
}