import {BtnQuadroHTML} from "./_BtnQuadroHTML.js";
import {BtnQuadroCSS} from "./_BtnQuadroCSS.js";

export class BtnQuadro {
    constructor({name, btnText, color, element, elementCSS, place = 'beforeend', placeCSS = 'beforeend', uppercase = false, reverse = false, disabled = false}) {
        this.name = name;
        this.btnText = btnText;
        this.color = color;
        this.element = element;
        this.elementCSS = elementCSS;
        this.place = place;
        this.placeCSS = placeCSS;
        this.uppercase = uppercase;
        this.reverse = reverse;
        this.disabled = disabled;
        this.btnRef = null;
        this.btnRefCSS = null;
    }

    render() {
        this._renderBlock(this.element, BtnQuadroHTML(this.name, this.btnText, this.reverse, this.disabled), this.place)
        this._renderBlock(this.elementCSS, BtnQuadroCSS(this.name, this.color, this.uppercase), this.placeCSS)

        this.btnRef = document.querySelector(`.${this.name}-btn-quadro`);
        this.btnRefCSS = document.querySelector(`.${this.name}-btn-quadro-css`);
    }

    remove() {
        this.btnRef.remove();
        this.btnRefCSS.remove();

        this.btnRef = null;
        this.btnRefCSS = null;
    }

    _renderBlock(element, template, place = 'beforeend') {
        element.insertAdjacentHTML(place, template)
    }
}