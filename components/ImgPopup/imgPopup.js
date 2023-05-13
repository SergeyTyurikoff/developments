export class ImgPopup {

    constructor({imgSrc, imgAlt, link}) {
        this.imgSrc = imgSrc
        this.imgAlt = imgAlt
        this.link = link
        this.popup = null
        this.popupCSS = null
        this.popupCross = null
        this.body = document.querySelector(`body`)
        this.fadeInClass = `fade-in__custom`
        this.fadeOutClass = `fade-out__custom`
    }

    renderPopup = () => {
        this._renderBlock(this.body, 'beforeend', this._imgPopupHTML())
        this._renderBlock(this.body, 'beforeend', this._imgPopupCSS())

        this.popup = document.querySelector(`.img-popup`)
        this.popupCSS = document.querySelector(`.img-popup-css`)
        this.popupCross = document.querySelector(`.img-popup__cross`)

        this.popupCross.addEventListener('click', (e) => {
            this.fadeOutPopup()
        });

    }

    removePopup = () => {
        this.popup.remove();
        this.popupCSS.remove();
    }

    fadeInPopup = () => {
        if (this.popup.classList.contains(this.fadeOutClass)) {
            this.popup.classList.remove(this.fadeOutClass);
        }
        this.popup.classList.add(this.fadeInClass);
    }

    fadeOutPopup = () => {
        if (this.popup.classList.contains(this.fadeInClass)) {
            this.popup.classList.remove(this.fadeInClass);
        }
        this.popup.classList.add(this.fadeOutClass);
    }

    _renderBlock (element, position, htmlBlock) {
        element.insertAdjacentHTML(position, htmlBlock);
    }

    _imgPopupHTML = () => {
        return (`
            <div class="img-popup">
                <a target="_blank" href="${this.link}">
                    <img src="${this.imgSrc}" alt="${this.imgAlt}">
                </a>
                <svg class="img-popup__cross" style="enable-background: new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g class="st2" id="cross">
                     <g class="st0">
                        <line class="st1" x1="112.5" x2="401" y1="112.5" y2="401"></line>
                            <line class="st1" x1="401" x2="112.5" y1="112.5" y2="401"></line>
                        </g>
                    </g>
                    <g id="cross_copy">
                        <path d="M268.064,256.75l138.593-138.593c3.124-3.124,3.124-8.189,0-11.313c-3.125-3.124-8.189-3.124-11.314,0L256.75,245.436   L118.157,106.843c-3.124-3.124-8.189-3.124-11.313,0c-3.125,3.124-3.125,8.189,0,11.313L245.436,256.75L106.843,395.343   c-3.125,3.125-3.125,8.189,0,11.314c1.562,1.562,3.609,2.343,5.657,2.343s4.095-0.781,5.657-2.343L256.75,268.064l138.593,138.593   c1.563,1.562,3.609,2.343,5.657,2.343s4.095-0.781,5.657-2.343c3.124-3.125,3.124-8.189,0-11.314L268.064,256.75z"></path>
                    </g>
                </svg>
            </div>
        `)
    }


    _imgPopupCSS () {
        return (`<style class="img-popup-css">
          
            .img-popup {
                background: #FFFFFF;
                box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.15);
                display: flex;
                flex-direction: column;
                z-index: 100;
                bottom: 10px;
                left: 10px;
                margin-right: 10px;
                position: fixed;
                display: none;
                opacity: 0;
                visibility: hidden;
                max-width: 700px;
                box-shadow: 10px 10px 10px #00000014;
            }
            
            .img-popup a {
                width: 100%;
                height: 100%;
            }
            
            .img-popup img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        
            @media all and (max-width: 991px) {
                .img-popup {
                    max-width: 540px;
                }
            }
            
            @media (max-width: 767px) {
                .img-popup {
                    max-width: 400px;
                }
            }
        
            .img-popup::-webkit-scrollbar {
                width: 10px;
            }
        
            .img-popup::-webkit-scrollbar-track {
                box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            }
        
            .img-popup::-webkit-scrollbar-thumb {
                background-color: #e84838;
                outline: 0px solid #e84838;
            }
        
            .img-popup__btn {
                cursor: pointer;
            }
        
            .img-popup__cross {
                fill: white;
                width: 30px;
                height: 30px;
                position: absolute;
                right: 8px;
                top: 7px;
                cursor: pointer;
                transition: all .5s;
            }
        
            .img-popup__cross:hover {
                transform: rotate(180deg);
            }
        
            .fade-in__custom {
                display: flex;
                animation: fade-in__custom 1s;
                opacity: 1;
                visibility: visible;
            }
        
            @keyframes fade-in__custom {
                from {
                    opacity: 0;
                    visibility: hidden;
                }
        
                to {
                    opacity: 1;
                    visibility: visible;
                }
            }
        
            .fade-out__custom {
                display: flex;
                animation: fade-out__custom 1s;
            }
        
            @keyframes fade-out__custom {
                from {
                    opacity: 1;
                    visibility: visible;
                }
        
                to {
                    opacity: 0;
                    visibility: hidden;
                    display: none;
                }
            }
    </style>`)
    }
}