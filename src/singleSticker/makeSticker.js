import makeDOMelement from './makeDOMElement';
import editSticker from './editSticker';
import out from '../out';
import mouseOverOut from '../allStickers/mouseOverOut';
import addMiniSigns from './addMiniSigns';
import currentId from './currentId';


export default function makeSticker() {
    let id = currentId();

    let area = document.getElementById('stickyNotes');
    const wrap = makeDOMelement('div', 'editSticker', '', id);
    const fragment = document.createDocumentFragment();

    fragment.appendChild(addMiniSigns(id));
    fragment.appendChild(makeDOMelement('h1', '', 'Новый стикер')); // adding headline
    fragment.appendChild(makeDOMelement('p', '', ''));
    wrap.appendChild(fragment);

    area.appendChild(wrap);

    document.getElementById(id).setAttribute('data-action', 'sticker');
    // document.getElementById(id).setAttribute('draggable', 'true');


    // mouseOverOut(id);
    editSticker(id);

};