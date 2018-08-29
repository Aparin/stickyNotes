import { movingTheDiv } from './movingTheDiv';
import makeDOMelement from './makeDOMelement';
import editSticker from './editSticker';
import out from './out';
import listener from './listener';

function makeSticker(id, className = 'newSticker', head = 'Новый стикер', body = 'Текст стикера') {

    // out(id + ' ' + className + ' ' + head + ' ' + body); // 1 newSticker Новый стикер Текст стикера

    let dom = document.getElementById('stickyNotes');
    const wrap = makeDOMelement('div', className, '', id);
    const fragment = document.createDocumentFragment();
    fragment.appendChild(makeDOMelement('h1', '', head)); // adding headline
    fragment.appendChild(makeDOMelement('div', '', body));
    wrap.appendChild(fragment);
    dom.appendChild(wrap);
    listener(id, "dblclick", editSticker(id));
    /* 
    // coordinates of sticker
    const place = document.getElementById(id);
    place.style.position = "absolute";
    place.style.left = x + 'px';
    place.style.top = y + 'px';
    // movingTheDiv(this.id);
    */
    // return show;

};

export { makeSticker };