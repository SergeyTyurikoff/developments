import {RoundSpinnerCSS} from "./RoundSpinnerCSS.js";
import {RoundSpinnerHTML} from "./RoundSpinnerHTML.js";

export const RoundSpinner = (colors) => {

    function renderBlock (element, template, place = 'beforeend') {
        element.insertAdjacentHTML(place, template)
    }

    renderBlock(document.body.querySelector('.training-styles'), RoundSpinnerCSS(colors) || '');

    return (
        `
        ${RoundSpinnerHTML()}
        `
    );
};