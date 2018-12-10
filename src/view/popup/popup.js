export default function popup(data) {
    const { msg, height, e } = data;
    const elem = e.currentTarget.getBoundingClientRect();

    const node = document.createElement('div');
    node.id = 'popup';
    const close = `<span class="closePopup" onclick="document.getElementById('popup').remove();">X</span>`;
    const html = `${msg}${close}`;

    node.insertAdjacentHTML('afterbegin', html);

    if (height) {
        node.style.height = height + 'px';
    }

    const top = elem.top;
    let left = elem.left;
    if (left > 320) { left -= 310 } else left = 0;

    node.style.top = top + 40 + 'px';
    node.style.left = left + 'px';

    document.querySelector('body').appendChild(node);
}