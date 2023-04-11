const BtnQuadroCSS = (color, uppercase) => {
    // if (document.querySelector(`.BtnQuadroCSS${reverseColor ? 'Reverse' : ''}`)) {
    //     return false;
    // }
    return (`
        <style class="BtnQuadroCSS">
            .btn-quadro {
                border-radius: 3px;
                padding: 15px 20px;
                transition: all .5s;
                z-index: 1;
                font-weight: bold;
                text-align: center;
                display: block;
                margin: 20px auto;
                min-height: 54px;
                font: 18px/100% 'PT Sans';
            }
            
            .btn-quadro:hover {
                text-decoration: none;
            }
            
            .btn-quadro[disabled] {
                color: #4BB34B;
                background: transparent;
                border: 1px solid #4BB34B;
            }
            
            .btn-quadro[disabled]:hover {
                color: #4BB34B;
                background: transparent;
                border: 1px solid #4BB34B;
            }
            
            .btn-quadro__standard {
                background: ${color};
                border: 1px solid white;
                color: white;
                text-transform: ${uppercase ? 'uppercase' : 'none'};
            }
            
            .btn-quadro__standard:hover {
                border: 1px solid ${color};
                background: white;
                color: ${color};
            }
            
            .btn-quadro__reverse {
                background: white;
                border: 1px solid ${color};
                color: ${color};
            }
            
            .btn-quadro__reverse:hover {
               border: 1px solid white;
               background: ${color};
               color: white;
            }
            
        </style>
    `);
}

export {BtnQuadroCSS};