import { movingTheDiv } from './movingTheDiv';
import makeDOMelement from './makeDOMelement';
import editSticker from './editSticker';

function makeSticker(obj) {
    let { id, className = 'newSticker', head = 'Новый стикер', body = 'Текст стикера' } = obj;
    const newSticker = {
        'id': id,
        'className': className,
        'head': head,
        'body': body,
        toString: function() {
            return `makeSticker вернул объект: id : ${this.id}, className : ${this.className}, head : ${this.head}, body : ${this.body}`;
        },
        show: function(x = 1, y = 1, z = 1) {
            function showSticker() {
                let dom = document.getElementById('stickyNotes');
                const wrap = makeDOMelement('div', className, '', id);
                const fragment = document.createDocumentFragment();
                fragment.appendChild(makeDOMelement('h1', '', head)); // adding headline
                fragment.appendChild(makeDOMelement('div', '', body));
                wrap.appendChild(fragment);
                dom.appendChild(wrap);
            }
            showSticker();

            // coordinates of sticker
            const place = document.getElementById(id);
            place.style.position = "absolute";
            place.style.left = x + 'px';
            place.style.top = y + 'px';
            movingTheDiv(this.id);
        },
        'edit': false

    }


    return newSticker;

};

export { makeSticker };