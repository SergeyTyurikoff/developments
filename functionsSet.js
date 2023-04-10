class FunctionsSet {
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


}

export default FunctionsSet;