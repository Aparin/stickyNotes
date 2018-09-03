import makeDOMelement from './makeDOMelement';
import editSticker from './editSticker';
import out from './out';
import mouseOverOut from './mouseOverOut';
import addDeleteSign from './addDeleteSign';
import currentId from './currentId';

function makeSticker() {
    let id = currentId();

    let area = document.getElementById('stickyNotes');
    const wrap = makeDOMelement('div', 'newSticker', '', id);
    const fragment = document.createDocumentFragment();

    fragment.appendChild(addDeleteSign(id));
    fragment.appendChild(makeDOMelement('h1', '', 'Новый стикер')); // adding headline
    fragment.appendChild(makeDOMelement('div', '', 'Текст стикера'));
    wrap.appendChild(fragment);
    area.appendChild(wrap);

    mouseOverOut(id);

};

export { makeSticker };