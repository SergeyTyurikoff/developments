const BtnQuadroHTML = (btnText, reverse, disabled) => {
    return (
    `
        <button 
            class="btn-action btn-quadro btn-quadro__${reverse ? 'reverse' : 'standard'}"
            ${disabled ? 'disabled' : ''}>
            ${btnText} 
        </button>
    `);
}

export {BtnQuadroHTML};