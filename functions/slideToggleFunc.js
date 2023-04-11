/*
--- component slideToggleFunc ---
parameters:
1) mode - 1 или 2, выбор режима работы фунции: одна или две кнопки открывающие и закрывающие контент с эффектом slide
2) transitionSpeed - скорость анимации
3) transitionTimingFunction - тип временной функции анимации
4) slideToggleBtnNodeListClass - название класса кнопки slideToggle 
5) slideUpBtnNodeListClass - название класса кнопки slideUp скрытия контента
6) slideDownBtnNodeListClass - название класса кнопки slideDown возникновение контента
7) slideToggleContentNodeListClass - название класса контента
*/
export default function slideToggleFunc(mode = 1, transitionSpeed = 1, transitionTimingFunction = 'ease', slideToggleBtnNodeListClass = 'slide-toggle__btn', slideUpBtnNodeListClass = 'slide-up__btn', slideDownBtnNodeListClass = 'slide-down__btn', slideToggleContentNodeListClass = 'slide-toggle__content') {

    function slideDownFunc(slideDownContent, slideToggleBtn) {
        
        slideToggleBtn.classList.add(`${slideToggleBtnNodeListClass}_active`);
        slideDownContent.classList.add(`${slideToggleContentNodeListClass}_active`);
        slideDownContent.style.height = 'auto';
        let height = slideDownContent.clientHeight + 'px';
        slideDownContent.style.height = '0px';

        setTimeout(() => {
            slideDownContent.style.height = height;
        }, 0);
    }

    function slideUpFunc(slideUpContent, slideToggleBtn) {
        
        let height = slideUpContent.clientHeight + 'px';
        slideUpContent.style.height = height;

        setTimeout(() => {
            slideUpContent.style.height = '0px';
        }, 0);


        slideUpContent.addEventListener('transitionend', () => {
         
            slideToggleBtn.classList.remove(`${slideToggleBtnNodeListClass}_active`);
            slideUpContent.classList.remove(`${slideToggleContentNodeListClass}_active`);
            slideUpContent.style.height = 'auto';
        }, {
            once: true
        });
    }

    function launchSlideToggleFunc() {
        
        if (mode == 1) {

            const slideToggleBtn = document.querySelectorAll(`.${slideToggleBtnNodeListClass}`),
                arrSlideToggleBtn = Array.from(slideToggleBtn),
                slideToggleContent = document.querySelectorAll(`.${slideToggleContentNodeListClass}`);
    
            for (let i = 0; i < arrSlideToggleBtn.length; i++) {
                arrSlideToggleBtn[i].addEventListener('click', (e) => {
                    if (!slideToggleContent[i].classList.contains(`${slideToggleContentNodeListClass}_active`)) {
                        slideDownFunc(slideToggleContent[i], slideToggleBtn[i]);
                    } else if (slideToggleContent[i].classList.contains(`${slideToggleContentNodeListClass}_active`)) {
                        slideUpFunc(slideToggleContent[i], slideToggleBtn[i]);
                    }
                });
            }
    
        } else if (mode == 2) {
    
            const slideUpBtn = document.querySelectorAll(`.${slideUpBtnNodeListClass}`),
                arrSlideUpBtn = Array.from(slideUpBtn),
                slideDownBtn = document.querySelectorAll(`.${slideDownBtnNodeListClass}`),
                arrSlideDownBtn = Array.from(slideDownBtn),
                slideToggleContent = document.querySelectorAll(`.${slideToggleContentNodeListClass}`);
    
            for (let i = 0; i < arrSlideDownBtn.length; i++) {
                arrSlideDownBtn[i].addEventListener('click', (e) => {
                    if (!slideToggleContent[i].classList.contains(`${slideToggleContentNodeListClass}_active`)) {
                        slideDownFunc(slideToggleContent[i], slideToggleBtn[i]);
                    }
                });
            }
    
            for (let i = 0; i < arrSlideUpBtn.length; i++) {
                arrSlideUpBtn[i].addEventListener('click', (e) => {
                    if (slideToggleContent[i].classList.contains(`${slideToggleContentNodeListClass}_active`)) {
                        slideUpFunc(slideToggleContent[i], slideToggleBtn[i]);
                    }
                });
            }
        }
    }

    launchSlideToggleFunc();

    // css
    document.body.insertAdjacentHTML('afterbegin', `
        <style>
            .slide-toggle__content {
                transition: height ${transitionSpeed}s ${transitionTimingFunction};
                overflow-y: hidden;
            }

            .slide-toggle__content:not(.${slideToggleContentNodeListClass}_active) {
                display: none;
            }
        </style>
    `);
}