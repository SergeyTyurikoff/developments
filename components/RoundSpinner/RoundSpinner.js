import {renderBlock} from "../../serviceFunctions.js";
import {RoundSpinnerCSS} from "./RoundSpinnerCSS.js";
import {RoundSpinnerHTML} from "./RoundSpinnerHTML.js";

export const RoundSpinner = (colors) => {

    renderBlock(document.body.querySelector('.training-styles'), RoundSpinnerCSS(colors) || '');

    return (
        `
        ${RoundSpinnerHTML()}
        `
    );
};