import {renderBlock} from '../../serviceFunctions.js';
import {BtnQuadroHTML} from "./BtnQuadroHTML.js";
import {BtnQuadroCSS} from "./BtnQuadroCSS.js";

let renderedStyles = false;

const BtnQuadro = (btnText, color, uppercase = false, reverse = false, disabled = false) => {

    if (!renderedStyles) {
        renderBlock(document.body.querySelector('.training-styles'), BtnQuadroCSS(color, uppercase));
        renderedStyles = true;
    }

    return (
        `
            ${BtnQuadroHTML(btnText, reverse, disabled)}
        `);
}

export {BtnQuadro};