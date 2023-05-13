export const BtnQuadroCSS = (name, color, uppercase) => {

    return (`
        <style class="${name}-btn-quadro-css">
            .${name}-btn-quadro {
                border-radius: 3px;
                padding: 15px 20px;
                transition: all .5s;
                z-index: 1;
                font-weight: bold;
                text-align: center;
                display: block;
                font: 18px/100% 'PT Sans', sans-serif;
            }
            
            @media (max-width: 575px) {
                .${name}-btn-quadro {
                    padding: 15px 10px;
                }
            }
            
            .${name}-btn-quadro:hover {
                text-decoration: none;
            }
            
            .${name}-btn-quadro__standard,
             .${name}-btn-quadro__standard[disabled]:hover {
                border-radius: 7px;
                background: ${color};
                border: 2px solid white;
                color: white;
                text-transform: ${uppercase ? 'uppercase' : 'none'};
            }
            
            .${name}-btn-quadro__standard:hover {
                border-radius: 5px;
                border: 2px solid ${color};
                background: white;
                color: ${color};
            }
            
            .${name}-btn-quadro__reverse,
             .${name}-btn-quadro__reverse[disabled]:hover {
                border-radius: 5px;
                background: white;
                border: 2px solid ${color};
                color: ${color};
            }
            
            .${name}-btn-quadro__reverse:hover {
               border-radius: 7px;
               border: 2px solid white;
               background: ${color};
               color: white;
            }
        </style>
    `);
}