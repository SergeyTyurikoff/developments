class FunctionsSet {
    logsOn = true;

    static form = {
        changeBtnSubmitText(text, btnSubmitSelector = ".btn-submit") {
            if (document.querySelector(btnSubmitSelector)) {
                document.querySelectorAll(btnSubmitSelector).forEach(elem => {
                    if (elem.tagName === 'BUTTON') {
                        elem.innerHTML = text;
                    } else {
                        elem.value = text;
                    }
                });
            }
        },
        setDisabled(item) {
            item.disabled = 'disabled';
        },
        removeDisabled(item) {
            item.removeAttribute('disabled');
        },
    }
    static cookie = {
        getCookie(name) {
            let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
            return matches ? decodeURIComponent(matches[1]) : null;
        },
        createCookie(name, value, date) {
            let expires;
            if (date) {
                expires = "; expires=" + date.toUTCString();
            } else {
                expires = "";
            }
            document.cookie = name + "=" + value + expires + "; path=/";
        }
    }

    static localStorage = {
        setLocalStorageItem(key, value) {
            localStorage.setItem(key, value)
        },
        getLocalStorageItemValue(key) {
            return localStorage.getItem(key)
        }
    }

    setScrollAnimations(imgArray, evenClassName, oddClassName) {
        for (let i = 0; i < imgArray.length; i++) {
            if (!imgArray[i].classList.contains(oddClassName) || !imgArray[i].classList.contains(evenClassName)) {
                if (imgArray[i].getBoundingClientRect().top <= 800 && i % 2) {
                    imgArray[i].classList.add(evenClassName);
                } else if (imgArray[i].getBoundingClientRect().top <= 800 && !(i % 2)) {
                    imgArray[i].classList.add(oddClassName);
                }
            }
        }
    }

    insertSubstr(str, substr, pos) {
        if (str != NaN) {
            str = String(str);
        }
        let array = str.split('');
        array.splice(pos, 0, substr);
        return array.join('');
    }

    cutDotAndZeros(objProperty) {
        return objProperty.slice(0, objProperty.indexOf('.'));
    }

    renderBlocksBySelector(selectorName, position, htmlBlock) {
        const nodeList = document.querySelectorAll(${selectorName});
        nodeList.forEach(elem => {
            elem.insertAdjacentHTML(position, htmlBlock);
        });
    }

    getCoords(elem) {
        let box = elem.getBoundingClientRect();
        return {
            top: box.top + window.pageYOffset,
            right: box.right + window.pageXOffset,
            bottom: box.bottom + window.pageYOffset,
            left: box.left + window.pageXOffset
        };
    }

    startAnimation(elem, startAnimationClass, endAnimationClass) {
        if (elem.classList.contains(endAnimationClass)) {
            elem.classList.remove(endAnimationClass);
        }
        elem.classList.add(startAnimationClass);
    }

    endAnimation(elem, startAnimationClass, endAnimationClass) {
        if (elem.classList.contains(startAnimationClass)) {
            elem.classList.remove(startAnimationClass);
        }
        elem.classList.add(endAnimationClass);
    }

    displayLogs(...contentArray) {
        if (this.logsOn) contentArray.map(item => console.log(item))
    }

    checkSupport(fn = undefined) {
        const html = document.documentElement,
            WebP = new Image();

        WebP.onload = WebP.onerror = function() {
            const isSupported = (WebP.height === 2);

            if (isSupported) {
                if (html.className.indexOf('no-webp') >= 0)
                    html.className = html.className.replace(/\bno-webp\b/, 'webp');
                else html.className += ' webp';
            }
            if (fn) {
                fn(isSupported);
            }
        };
        WebP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
    }

    setSmoothScroll() {

        document.querySelectorAll('a[href^="#"]').forEach(link => {

            link.addEventListener('click', function (e) {
                e.preventDefault();


                let href = this.getAttribute('href').substring(1);

                const scrollTarget = document.getElementById(href);

                const topOffset = 100;
                const elementPosition = scrollTarget.getBoundingClientRect().top;
                const offsetPosition = elementPosition - topOffset;

                window.scrollBy({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            });
        });
    }

    wingConstruction(widthToSelector = '.wing__width-to', side = 'right', stopFunctionWindowWidth = '1199') {
        if (!document.querySelector('.wing__prototype-wrap')) {
            document.body.insertAdjacentHTML('afterbegin', `
        <div class="wing__prototype-wrap">
            <div class="wrap wing__width-from"></div>
            <style>
                .wrap {
                    margin-right: auto;
                    margin-left: auto;
                    padding-left: 15px;
                    padding-right: 15px
                }

                @media (min-width: 768px) {
                    .wrap {
                        width: 750px
                    }
                }

                @media (min-width: 992px) {
                    .wrap {
                        width: 970px
                    }
                }

                @media (min-width: 1200px) {
                    .wrap {
                        width: 1170px
                    }
                }
            </style>
        </div>
      `);
        }

        const widthFrom = document.querySelector('.wing__width-from'),
            widthTo = document.querySelector(widthToSelector);

        function setWidth(side, stopFunctionWindowWidth, widthFrom, widthTo) {
            if (window.innerWidth > stopFunctionWindowWidth) {
                widthTo.style.width = (+widthFrom.offsetWidth + parseFloat(getComputedStyle(widthFrom).marginRight) - 15) + 'px';
                if (side == 'right') {
                    widthTo.style.marginLeft = 'auto';
                } else if (side == 'left') {
                    widthTo.style.marginRight = 'auto';
                }
                if (widthTo.classList.contains('wrap')) {
                    widthTo.classList.remove('wrap');
                }
            } else {
                widthTo.style = '';
                if (!widthTo.classList.contains('wrap')) {
                    widthTo.classList.add('wrap');
                }
            }
        }

        setWidth(side, stopFunctionWindowWidth, widthFrom, widthTo);

        window.addEventListener('resize', () => {
            setWidth(side, stopFunctionWindowWidth, widthFrom, widthTo);
        });

    }


    async ajaxRequest(path, dataObj = false, jsonOrFormData = 'json', respType = 'json') {

        let rawResponse;

        if (dataObj == false) {
            rawResponse = await fetch(path);
        } else {
            if (jsonOrFormData == 'json') {
                rawResponse = await fetch(path, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                    },
                    body: JSON.stringify(dataObj),
                });
            } else if (jsonOrFormData == 'formData') {
                rawResponse = await fetch(path, {
                    method: 'POST',
                    body: dataObj,
                });
            }
        }
        if (!rawResponse.ok) {
            throw new Error(`Ошибка, статус: ${rawResponse.status}`);
        }
        if (respType == 'json') {
            return rawResponse.json();
        } else if (respType == 'text') {
            return rawResponse.text();
        }
    }


}

export default FunctionsSet;