"use strict";
function removeBlur() {
    const elements = document.querySelectorAll("*");
    elements.forEach((element) => {
        const style = window.getComputedStyle(element);
        if (style.filter.includes("blur(10px)")) {
            element.style.filter = style.filter.replace(/blur\\(10px\\)/g, "");
        }
    });
}
removeBlur();
const observer = new MutationObserver((mutations) => {
    mutations.forEach(() => {
        removeBlur();
    });
});
observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["style"]
});
