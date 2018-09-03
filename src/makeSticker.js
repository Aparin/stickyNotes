import makeDOMelement from './makeDOMelement';
import editSticker from './editSticker';
import out from './out';
import mouseOverOut from './mouseOverOut';
import addDeleteSign from './addDeleteSign';

function makeSticker(id, className = 'newSticker', head = 'Новый стикер', body = 'Текст стикера') {

    let dom = document.getElementById('stickyNotes');
    const wrap = makeDOMelement('div', className, '', id);
    const fragment = document.createDocumentFragment();

    fragment.appendChild(addDeleteSign(id));

    fragment.appendChild(makeDOMelement('h1', '', head)); // adding headline
    fragment.appendChild(makeDOMelement('div', '', body));
    wrap.appendChild(fragment);
    dom.appendChild(wrap);

    mouseOverOut(id);

};

export { makeSticker };