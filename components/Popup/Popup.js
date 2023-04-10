import {PopupCSS} from "./PopupCSS.js";
import {PopupHTML} from "./PopupHTML.js";

/**
 **********************************
 ********* Popup V.1.0.0 **********
 **********************************
 * Конструктор создания popup
 * @constructor
 * @param {string} name - имя popup
 * @param {string} btnClass - класс элемента (без точки), по клику на который запускается popup
 * @param {object} animation - поле type (значение appearance или fade), direction (направление для appearance)
 * @param {string} template - кастомная разметка, которую нужно поместить в попап
*/

export class Popup {

    constructor({name, btnClass, animation, template}) {
        this.name = name;
        this.btnClass = btnClass;
        this.animation = animation;
        this.template = template;
        this.body = document.body;

        this.popupBtns = undefined;
        this.popupContainer = undefined;
        this.popupCross = undefined;
        this.fadeIn = undefined;
        this.fadeOut = undefined;

        this._init();
    }

    _init() {

        this._render(this.body,
            `<div class="${this.name}-popup-template">
                ${PopupCSS(this.name, this.animation)} 
                ${PopupHTML(this.name, this.template)} 
             </div>
        `);

        try {
            document.querySelectorAll(`.${this.btnClass}`).forEach(elem => {
                elem.classList.add(`${this.name}-popup__btn`);
            });
        } catch (e) {}

        this.popupBtns = document.querySelectorAll(`.${this.name}-popup__btn`);
        this.popupContainer = document.querySelector(`.${this.name}-popup__container`);
        this.popup = document.querySelector(`.${this.name}-popup`);
        this.popupCross = document.querySelector(`.${this.name}-popup__cross`);
        this.fadeIn = `${this.name}-fade-in__custom`;
        this.fadeOut = `${this.name}-fade-out__custom`;
        this.appearance = `${this.name}-appearance`;
        this.disappearance = `${this.name}-disappearance`;

        this.popupBtns.forEach(elem => {
            elem.addEventListener('click', (e) => {
                switch (this.animation.type) {
                    case 'appearance':
                        this.startAnimation(this.popup, this.appearance, this.disappearance);
                        this.startAnimation(this.popupContainer, this.fadeIn, this.fadeOut);
                        break;
                    case 'fade':
                        this.startAnimation();
                        break;
                }
            });
        });

        this.popupCross.addEventListener('click', (e) => {
            switch (this.animation.type) {
                case 'appearance':
                    this.endAnimation(this.popup, this.appearance, this.disappearance);
                    this.endAnimation(this.popupContainer, this.fadeIn, this.fadeOut);
                    break;
                case 'fade':
                    this.endAnimation();
                    break;
            }
        });

        this.popupContainer.addEventListener('click', (e) => {
            if (e.target === this.popupContainer) {
                switch (this.animation.type) {
                    case 'appearance':
                        this.endAnimation(this.popup, this.appearance, this.disappearance);
                        this.endAnimation(this.popupContainer, this.fadeIn, this.fadeOut);
                        break;
                    case 'fade':
                        this.endAnimation();
                        break;
                }
            }
        });

        window.addEventListener('keyup', (e) => {
            if (e.keyCode === 27 && this.popupContainer.classList.contains(this.fadeIn)) {
                switch (this.animation.type) {
                    case 'appearance':
                        this.endAnimation(this.popup, this.appearance, this.disappearance);
                        this.endAnimation(this.popupContainer, this.fadeIn, this.fadeOut);
                        break;
                    case 'fade':
                        this.endAnimation();
                        break;
                }
            }
        });
    }

    _renderPosition = {
        BEFOREBEGIN: "beforebegin",
        AFTERBEGIN: "afterbegin",
        BEFOREEND: "beforeend",
        AFTEREND: "afterend",
    }

    _render(element, template, place = this._renderPosition.BEFOREEND) {
        element.insertAdjacentHTML(place, template);
    }

    startAnimation(container = this.popupContainer, animationStart = this.fadeIn, animationEnd = this.fadeOut) {
        if (container.classList.contains(animationEnd)) {
            container.classList.remove(animationEnd);
        }
        container.classList.add(animationStart);
        this.body.style.overflow = 'hidden';
    }

    endAnimation(container = this.popupContainer, animationStart = this.fadeIn, animationEnd = this.fadeOut) {
        if (container.classList.contains(animationStart)) {
            container.classList.remove(animationStart);
        }
        container.classList.add(animationEnd);
        this.body.style.overflow = 'visible';
    }
}