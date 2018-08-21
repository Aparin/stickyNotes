export default function makeDOMelement(tagName, className, text, id) {
    const element = document.createElement(tagName);
    if (className) {
        element.classList.add(className);
    }
    if (text) {
        element.textContent = text;
    }
    if (id) {
        element.id = id;
    }
    return element;
};