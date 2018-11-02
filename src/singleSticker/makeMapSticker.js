import out from '../out';

import currentId from './currentId';
import makeDOMelement from './makeDOMElement';
import editMapSticker from './editMapSticker';
import addMiniSigns from './addMiniSigns';
import yaMap from '../transmission/yaMap';


// import mouseOverOut from '../allStickers/mouseOverOut';

export default function makeMapSticker(head, body, className, adress) {
    const id = currentId();
    if (!head) { head = "Новый стикер"; }
    if (!body) { body = ""; }

    if (!className) { className = 'editMapSticker'; }

    const area = document.getElementById('stickyNotes');
    const wrap = makeDOMelement('div', className, '', id);
    const fragment = document.createDocumentFragment();

    fragment.appendChild(addMiniSigns(id));
    fragment.appendChild(makeDOMelement('h1', '', head)); // adding headline
    fragment.appendChild(makeDOMelement('span', 'adress', `Адрес: ${adress}`));
    fragment.appendChild(makeDOMelement('p', '', body));
    fragment.appendChild(makeDOMelement('div', 'editMap', '', 'map'));
    wrap.appendChild(fragment);

    area.appendChild(wrap);

    document.getElementById(id).setAttribute('data-action', 'sticker');

    if (className === "editMapSticker") {
        editMapSticker(id);
    } else { //yaMap(adress, id); 
    }

    // mouseOverOut(id);
};