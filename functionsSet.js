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
}

export default FunctionsSet;