import makeDOMelement from './makeDOMelement';
import editSticker from './editSticker';
import out from './out';
import listener from './listener';

function makeSticker(id, className = 'newSticker', head = 'Новый стикер', body = 'Текст стикера') {

    let dom = document.getElementById('stickyNotes');
    const wrap = makeDOMelement('div', className, '', id);
    const fragment = document.createDocumentFragment();
    fragment.appendChild(makeDOMelement('h1', '', head)); // adding headline
    fragment.appendChild(makeDOMelement('div', '', body));
    wrap.appendChild(fragment);
    dom.appendChild(wrap);
    listener(id, "dblclick", editSticker(id));
};

export { makeSticker };