/*
--- component floatAdvertising ---
parameters:
1) url - ссылка, куда ведёт реклама
2) desktopImgURL - ссылка на десктопное изображение, размер 1200x300 (со слайдера на главной)
3) mobileImgURL - ссылка на мобильное изображение, размер 800x500 (со слайдера на главной)
4) cookieExpires - до какого числа действует кука
5) cookieName - имя куки (по умолчанию 'float-advertising')
6) cookiePath - путь куки (по умолчанию '/')
*/
export default function floatAdvertising(url, desktopImgURL, mobileImgURL, cookieExpires, cookieName = 'float-advertising', cookiePath = '/') {
    
    // html
    document.body.insertAdjacentHTML('beforeend', `
        <!-- _____ BEGIN: float-advertising component _____ -->
        <a class="float-advertising__wrap float-advertising__wrap_display_none" target="_blank"
            href="${url}">
            <img class="float-advertising__img float-advertising__img-desktop" src="${desktopImgURL}"
                alt="">
            <img class="float-advertising__img float-advertising__img-mobile"
                src="${mobileImgURL}" alt="">
            <svg class="float-advertising__cross" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512"
                xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g class="st2" id="cross">
                    <g class="st0">
                        <line class="st1" x1="112.5" x2="401" y1="112.5" y2="401"></line>
                        <line class="st1" x1="401" x2="112.5" y1="112.5" y2="401"></line>
                    </g>
                </g>
                <g id="cross_copy">
                    <path
                        d="M268.064,256.75l138.593-138.593c3.124-3.124,3.124-8.189,0-11.313c-3.125-3.124-8.189-3.124-11.314,0L256.75,245.436   L118.157,106.843c-3.124-3.124-8.189-3.124-11.313,0c-3.125,3.124-3.125,8.189,0,11.313L245.436,256.75L106.843,395.343   c-3.125,3.125-3.125,8.189,0,11.314c1.562,1.562,3.609,2.343,5.657,2.343s4.095-0.781,5.657-2.343L256.75,268.064l138.593,138.593   c1.563,1.562,3.609,2.343,5.657,2.343s4.095-0.781,5.657-2.343c3.124-3.125,3.124-8.189,0-11.314L268.064,256.75z">
                    </path>
                </g>
            </svg>
        </a>
    `);

    // css
    document.body.insertAdjacentHTML('beforeend', `
        <style>
            .float-advertising__wrap {
                display: block;
                position: fixed;
                left: 10px;
                bottom: 10px;
                margin-right: 10px;
                z-index: 2;
                transition: all .5s ease-in-out;
                background: transparent;
            }
        
            .float-advertising__wrap_display_none {
                display: none;
            }
        
            .float-advertising__wrap:hover {
                transform: scale(1.02);
            }
        
            .float-advertising__img {
                width: 100%;
        
                object-fit: contain;
                box-shadow: 0px 0px 10px #0000005e;
            }
        
            .float-advertising__img-desktop {
                display: block;
                max-width: 560px;
            }
        
            .float-advertising__img-mobile {
                display: none;
                max-width: 220px;
            }
        
            .float-advertising__cross {
                fill: black;
                width: 25px;
                position: absolute;
                right: 5px;
                top: 5px;
                cursor: pointer;
                transition: all .5s ease-in-out;
                visibility: visible;
                z-index: 3;
            }
        
            .float-advertising__cross:hover {
                transform: rotate(180deg);
            }
        
            @media all and (max-width: 767px) {
                .float-advertising__img-desktop {
                    display: none;
                }
        
                .float-advertising__img-mobile {
                    display: block;
                }
            }
        </style>
        <!-- _____ END: float-advertising component _____ -->
    `);

    if (!document.querySelector('.product-edit')) {

        const setCookie = (name, value, path, expires) => {
            document.cookie = `${name}=${value}; path=${path}; expires=${expires}`;
        }

        const getCookie = (name) => {
            let matches = document.cookie.match(new RegExp(
                "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
            ));
            return matches ? decodeURIComponent(matches[1]) : undefined;
        }

        if (!getCookie(cookieName)) {

            const floatAdvertisingWrap = document.querySelector('.float-advertising__wrap'),
                floatAdvertisingCross = document.querySelector('.float-advertising__cross');

            floatAdvertisingWrap.classList.remove('float-advertising__wrap_display_none');

            floatAdvertisingWrap.addEventListener('click', function (e) {
                setCookie(cookieName, 'true', cookiePath, cookieExpires);
                floatAdvertisingWrap.classList.add('float-advertising__wrap_display_none');
            });

            floatAdvertisingCross.addEventListener('click', function (e) {
                e.preventDefault();

                setCookie(cookieName, 'true', cookiePath, cookieExpires);
                floatAdvertisingWrap.classList.add('float-advertising__wrap_display_none');
            });
        }
    }
}