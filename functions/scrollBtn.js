/*
--- component «scrollBtn» ---
btnColor = цвет плавающей кнопки
elementClassParam = css класс кнопки
startAnimationClassParam = css класс анимации появления
endAnimationClassParam = css класс анимации исчезновения
anchorId = css id точки, до которой скроллить. По умолчанию верх страницы, если задать другой, тогда самостоятельно поставить div с якорем в верстке
startHeightParam = с какой позиции документа показывать кнопку
*/
export default function scrollBtn(btnColor = '#ef4030', elementClassParam = 'scroll-btn', startAnimationClassParam = 'fade-in__custom', endAnimationClassParam = 'fade-out__custom', anchorId = 'top-of-page', startHeightParam = '0.065') {

    // functions
    function startAnimation(elem, startAnimationClass, endAnimationClass) {
        if (elem.classList.contains(endAnimationClass)) {
            elem.classList.remove(endAnimationClass);
        }
        elem.classList.add(startAnimationClass);
    }

    function endAnimation(elem, startAnimationClass, endAnimationClass) {
        if (elem.classList.contains(startAnimationClass)) {
            elem.classList.remove(startAnimationClass);
        }
        elem.classList.add(endAnimationClass);
    }

    function renderBlock(classNamePosition, position, htmlBlock) {
        const className = document.querySelector(`${classNamePosition}`);
        className.insertAdjacentHTML(position, htmlBlock);
    }

    // html
    renderBlock(
        'body',
        'afterbegin',
        `
        ${anchorId == `top-of-page` ? `<div id="${anchorId}"></div>` : ``}
        <a class="${elementClassParam}" href="#${anchorId}">
            <div class="${elementClassParam}__logo"></div>
        </a>
        `
    );

    // css
    renderBlock(
        'body',
        'beforeend',
        `
        <style>
        
            ${
            anchorId == `top-of-page` 
            ? 
            `#${anchorId} {
                position: absolute;
                top: 0;
            }` 
            : 
            ``
            }

            .${elementClassParam} {
                visibility: hidden;
                opacity: 0;
                position: fixed;
                left: 20px;
                bottom: 20px;
                z-index: 10;
                background: ${btnColor};
                border: 2px solid ${btnColor};
                width: 50px;
                height: 50px;
                color: white;
                transition: all .5s ease-in-out;
                z-index: 2;
                border-radius: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
            }

            .${elementClassParam}:hover  {
                border: 2px solid ${btnColor};
                background: white;
                transform: scale(1.02);
                color: ${btnColor};
            }

            .${elementClassParam}__logo {
                border-top: 4px solid white;
                border-left: 4px solid white;
                width: 20px;
                height: 20px;
                transition: all .5s ease-in-out;
                opacity: 0.8;
                transform: rotate(45deg);
                margin-top: 10px;
            }

            .${elementClassParam}:hover .${elementClassParam}__logo {
                border-top: 4px solid ${btnColor};
                border-left: 4px solid ${btnColor};
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
        </style>
        `
    );

    // variables and constants
    const element = document.querySelector(`.${elementClassParam}`),
        TOP_DISTANCE = startHeightParam * Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);

    // launch
    element.addEventListener('click', function (e) {
        e.preventDefault();

        let href = this.getAttribute('href').substring(1);

        const scrollTarget = document.getElementById(href);

        // const topOffset = document.querySelector('.scrollto').offsetHeight;
        const topOffset = 0; // если не нужен отступ сверху 
        const elementPosition = scrollTarget.getBoundingClientRect().top;
        const offsetPosition = elementPosition - topOffset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });

    window.addEventListener('scroll', (e) => {
        if (scrollY > TOP_DISTANCE && !element.classList.contains(startAnimationClassParam)) {
            startAnimation(element, startAnimationClassParam, endAnimationClassParam);
        } else if (scrollY <= TOP_DISTANCE && element.classList.contains(startAnimationClassParam)) {
            endAnimation(element, startAnimationClassParam, endAnimationClassParam);
        }
    });
}