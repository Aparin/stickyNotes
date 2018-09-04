import makeDOMelement from './makeDOMElement';
import editSticker from './editSticker';
import out from '../out';
import mouseOverOut from '../allStickers/mouseOverOut';
import addMiniSigns from './addMiniSigns';
import currentId from './currentId';

export default function makeSticker() {
    let id = currentId();

    let area = document.getElementById('stickyNotes');
    const wrap = makeDOMelement('div', 'newSticker', '', id);
    const fragment = document.createDocumentFragment();

    fragment.appendChild(addMiniSigns(id));
    fragment.appendChild(makeDOMelement('h1', '', 'Новый стикер')); // adding headline
    fragment.appendChild(makeDOMelement('p', '', 'Текст стикера'));
    wrap.appendChild(fragment);
    area.appendChild(wrap);

    // mouseOverOut(id);

};