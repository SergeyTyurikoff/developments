export const PopupCSS = (name, animation) => {
    let hiddenPopup = undefined,
        animationStyle = undefined;

    switch (animation.type) {
        case 'appearance':
            console.log(2)
            hiddenPopup = `
                display: none;
                opacity: 0;
                visibility: hidden;
            `;
            animationStyle = animationAppearance(name, animation.direction) + animationFade(name);
            break;
        case 'fade':
            hiddenPopup = ``;
            animationStyle = animationFade(name);
            break;
    }

    return (
        `
        <style class="${name}-popup-css">
             .${name}-popup__container {
                top: 0;
                left: 0;
                display: none;
                opacity: 0;
                visibility: hidden;
                position: fixed;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.74);
                z-index: 100;
            }
        
            .${name}-popup {
                ${hiddenPopup}
                max-width: 60%;
                background: #FFFFFF;
                box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.15);
                display: flex;
                flex-direction: column;
                position: relative;
                margin: auto;
                padding: 20px;
                overflow-y: auto;
                max-height: 90%;
            }
        
            .${name}-popup::-webkit-scrollbar {
                width: 10px;
            }
        
            .${name}-popup::-webkit-scrollbar-track {
                box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
            }
        
            .${name}-popup::-webkit-scrollbar-thumb {
                background-color: rgba(0,0,0,0.66);
                outline: 0px solid #000000bf;
            }
        
            .${name}-popup__btn {
                cursor: pointer;
            }
        
            .${name}-popup__cross {
                width: 24px;
                height: 24px;
                position: absolute;
                right: 8px;
                top: 7px;
                cursor: pointer;
                transition: all .5s;
            }
            
            .${name}-popup__cross .line {
                fill: none;
                stroke: #000000bf;
                stroke-linecap: round;
                stroke-linejoin: round;
                stroke-width: 2px;
            }
            
            .${name}-popup__cross:hover {
                transform: rotate(180deg);
            }
        
            @media all and (min-width: 1500px) {
                .${name}-popup {
                    max-width: 1000px;
                }
            }
        
            @media all and (max-width: 991px) {
                .${name}-popup {
                    width: 80%;
                    max-width: 80%;
                }
            }
        
            @media all and (max-width: 575px) {
                .${name}-popup {
                    width: 100%;
                    max-width: 100%;
                }
            }
            
            ${animationStyle}
        </style>
        `
    );
};

const animationAppearance = (name, animationDirection) => {
    const SHIFT_LENGTH = `${130}px`;
    let transformStart = undefined;

    switch (animationDirection) {
        case 'top':
            transformStart = `transform: translate(0, -${SHIFT_LENGTH});`
            break;
        case 'right':
            transformStart = `transform: translate(${SHIFT_LENGTH}, 0);`
            break;
        case 'left':
            transformStart = `transform: translate(-${SHIFT_LENGTH}, 0);`
            break;
        case 'bottom':
            transformStart = `transform: translate(0, ${SHIFT_LENGTH});`
            break;
    }

    return (
        `
        .${name}-appearance {
            display: flex;
            animation: ${name}-appearance 1s;
            opacity: 1;
            transform: translate(0, 0);
            visibility: visible;
        }
    
        @keyframes ${name}-appearance {
            from {
                opacity: 0;
                ${transformStart}
                visibility: hidden;
            }
    
            to {
                opacity: 1;
                transform: translate(0, 0);
                visibility: visible;
            }
        }
        
        .${name}-disappearance {
            display: flex;
            animation: ${name}-disappearance 1s;
        }
    
        @keyframes ${name}-disappearance {
            from {
                opacity: 1;
                transform: translate(0, 0);
                visibility: visible;
            }
    
            to {
                opacity: 0;
                ${transformStart}
                visibility: hidden;
                display: none;
            }
        }
        `
    );
};

const animationFade = (name) => {
    return (
        `
        .${name}-fade-in__custom {
            display: flex;
            animation: ${name}-fade-in__custom 1s;
            opacity: 1;
            visibility: visible;
        }
    
        @keyframes ${name}-fade-in__custom {
            from {
                opacity: 0;
                visibility: hidden;
            }
    
            to {
                opacity: 1;
                visibility: visible;
            }
        }
    
        .${name}-fade-out__custom {
            display: flex;
            animation: ${name}-fade-out__custom 1s;
        }
    
        @keyframes ${name}-fade-out__custom {
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
        `
    );
};