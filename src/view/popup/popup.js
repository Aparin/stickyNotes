export default function popup(data) {
    const { msg, height = 120, e } = data;

    const node = document.createElement('div');
    node.id = 'popup';
    const close = `<span class="closePopup" onclick="document.getElementById('popup').remove();">X</span>`;
    const html = `${msg}${close}`;

    node.insertAdjacentHTML('afterbegin', html);
    node.style.height = height + 'px';

    let top, left;
    if (e) {
        const elem = e.currentTarget.getBoundingClientRect();
        top = elem.top + 40;
        left = elem.left;
        if (left > 320) { left -= 310 } else left = 0;
    } else {
        top = screen.height / 2 - height / 2;
        left = screen.width / 2 - 160;
    }

    node.style.top = top + 'px';
    node.style.left = left + 'px';
    document.querySelector('body').appendChild(node);
}