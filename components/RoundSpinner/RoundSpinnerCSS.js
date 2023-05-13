export const RoundSpinnerCSS = ([color1, color2, color3]) => {
    if (document.querySelector(`.RoundSpinnerCSS`)) {
        return false;
    }

    let size = '140px';

    return (
        `
        <style class="RoundSpinnerCSS">
        
            .spin-wrapper {
                padding: ${size};
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                position: absolute;
                background-color: #fff;
                z-index: 2;
            }
            .spin-wrapper .spinner {
                  height: ${size};
                  width: ${size};
                  border: 3px solid transparent;
                  border-top-color: ${color2};
                  margin: -30px;
                  border-radius: 50%;
                  animation: spin 2s linear infinite;
            }
            .spin-wrapper .spinner:before, .spin-wrapper .spinner:after {
                  content: "";
                  position: absolute;
                  border: 3px solid transparent;
                  border-radius: 50%;
            }
            .spin-wrapper .spinner:before {
                  border-top-color: ${color1};
                  top: -12px;
                  left: -12px;
                  right: -12px;
                  bottom: -12px;
                  animation: spin 3s linear infinite;
            }
            .spin-wrapper .spinner:after {
                  border-top-color: ${color3};
                  top: 6px;
                  left: 6px;
                  right: 6px;
                  bottom: 6px;
                  animation: spin 4s linear infinite;
            }
            
            @keyframes spin {
                  0% {
                    transform: rotate(0deg);
                  }
                  100% {
                    transform: rotate(360deg);
                  }
            }
        </style>
        `
    );
}