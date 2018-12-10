import './popup.css';
import { notDeepEqual } from 'assert';

export default function popup(msg, height) {
    const node = document.createElement('div');
    node.id = 'popup';
    const close = `<span class="closePopup" onclick="document.getElementById('popup').remove();">X</span>`;
    const html = `${msg}${close}`;

    node.insertAdjacentHTML('afterbegin', html);
    if (height) {
        node.style.height = height + 'px';
        node.style.top = "50%";
        node.style.marginTop = -height / 2 + 'px';
    }
    document.querySelector('body').appendChild(node);
}